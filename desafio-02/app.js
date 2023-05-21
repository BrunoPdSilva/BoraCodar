const img = document.querySelector('img[alt="Couch Image"]');
const button = document.querySelector('.couch-image button');

button.addEventListener('click', () => {
  const isStatic = img.getAttribute('src') === './assets/couch.png';
  const image = './assets/couch.png';
  const gif = './assets/couch-r.gif';

  if (isStatic) {
    img.setAttribute('src', gif);
    button.children[0].setAttribute('src', './assets/close.svg');
  } else {
    img.setAttribute('src', image);
    button.children[0].setAttribute('src', './assets/360.svg');
  }
});
