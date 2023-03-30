const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

paragraphs.forEach((p) => {
  const shortText = p.innerText.slice(0, 67) + '...';
  p.innerText = shortText;
})