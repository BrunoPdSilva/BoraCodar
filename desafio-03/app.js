const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.textContent;
    btn.innerHTML = "<div class='loading'></div>" + text;

    setTimeout(() => {
      btn.innerHTML = text;
    }, 3000)
  })
})