const closeButtons = document.querySelectorAll('button.close');
const reloadButtons = document.querySelectorAll('button.reload');

function removeFile(e) {
  const fileContainer = e.target.closest('.file');

  fileContainer.remove();
}

function reloadActive(e) {
  const reloadButton = e.target.closest('.reload');

  reloadButton.classList.toggle('spin');

  setTimeout(() => {
    reloadButton.classList.toggle('spin');
  }, 4000);
}

closeButtons.forEach(button => {
  button.addEventListener('click', removeFile);
});

reloadButtons.forEach(button => {
  button.addEventListener('click', reloadActive);
});
