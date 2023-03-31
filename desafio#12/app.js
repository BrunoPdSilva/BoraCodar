const paragraphs = document.querySelectorAll('p');
const navLinks = document.querySelectorAll('a');
const cardsContainer = document.querySelectorAll('.cards-container');
const filterInput = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const filterbtn = document.querySelector('.filter button');

let addedCards = [];
let draggingElement = null;

async function fetchData() {
  const response = await fetch('data/data.json');
  const data = await response.json();

  const documentsFiltered = data.documents.filter(data =>
    data.content.toLowerCase().includes(filterInput.value.toLowerCase())
  );

  filterInput.value.length > 0
    ? renderCards(documentsFiltered)
    : renderCards(data.documents);
}

function renderCards(cardsData) {
  clearCards();

  cardsData.forEach(data => {
    if (!addedCards.includes(data.title)) {
      let tags = data.tags.map(tag => `<li>${tag}</li>`).join('');

      const card = document.createElement('div');
      card.classList.add('card');
      card.draggable = true;
      card.addEventListener('dragstart', drag);

      card.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.content}</p>
        <ul class="tags">
          ${tags}
        </ul>
    `;

      const containerIndex = { toDo: 0, doing: 1, done: 2 }[data.category];

      cardsContainer[containerIndex].appendChild(card);

      addedCards.push(data.title);
    }
  });
}

function clearCards() {
  cardsContainer.forEach(container => {
    container.innerHTML = ''; // Clear existing cards
  });

  addedCards = [];
}

function filterCards(event) {
  if (event.target.value.length > 0) {
    fetchData();
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggingElement = event.target;
  event.dataTransfer.setData('text/plain', event.target.innerHTML);
  event.target.classList.add('dragging');
}

function drop(event) {
  event.preventDefault();
  let target = event.target;
  while (target.className !== 'cards-container') {
    target = target.parentNode;
  }
  let firstChild = target.childNodes[0];
  target.insertBefore(draggingElement, firstChild);
  draggingElement.classList.remove('dragging');
  draggingElement = null;
}

function getShortPreviewText() {
  paragraphs.forEach(p => {
    const shortText = p.innerText.slice(0, 67) + '...';
    p.innerText = shortText;
  });
}

function toggleActiveLink(event) {
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', event => toggleActiveLink(event));
});

filterInput.addEventListener('input', filterCards);
filterbtn.addEventListener('click', () =>
  dropdown.classList.toggle('dropdown-active')
);

fetchData();
getShortPreviewText();
