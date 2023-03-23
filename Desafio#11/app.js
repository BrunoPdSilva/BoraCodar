const eye = document.querySelectorAll('.eye');

function togglePassword() {
  eye.forEach(e => e.classList.toggle('hide'));

  const type =
    password.getAttribute('type') == 'password' ? 'text' : 'password';

  password.setAttribute('type', type);
}

/* Criar validação do email e senha */
