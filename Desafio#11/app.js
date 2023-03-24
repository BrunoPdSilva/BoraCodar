const form = document.querySelector('form');
const eye = document.querySelectorAll('.eye');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const users = [
  {
    email: 'bpsilva.dev@gmail.com',
    password: 'sample123',
  },
  {
    email: 'juju.dev@gmail.com',
    password: 'sample321',
  },
];

function toggleShowPassword() {
  eye.forEach(e => e.classList.toggle('hide'));

  const type =
    password.getAttribute('type') == 'password' ? 'text' : 'password';

  password.setAttribute('type', type);
}

function removeError() {
  emailError.classList.add('hide');
  form.email.classList.remove('input-error');
}

function addError() {
  emailError.classList.remove('hide');
  form.email.classList.add('input-error');
}

function isEmailValid(e) {
  const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]/i;

  if (e.target.value.length === 0) {
    removeError();
  } else if (!emailRegex.test(e.target.value)) {
    addError();
    emailError.innerText = 'Insira um email valido.';
  } else {
    removeError();
  }
}

function submitForm(e) {
  e.preventDefault();

  let isUserValid = false;

  users.forEach(user => {
    const isEmailCorrect = user.email === form.email.value;
    const isPasswordCorrect = user.password === form.password.value;

    if (isEmailCorrect && isPasswordCorrect) {
      isUserValid = true;
      console.log('Logado com sucesso!');
    }
  });

  if (!isUserValid) {
    passwordError.innerText = 'E-mail ou senha incorretos.';
    passwordError.classList.remove('hide');
  } else {
    passwordError.classList.add('hide');
  }
}

form.email.addEventListener('keyup', e => isEmailValid(e));
form.addEventListener('submit', e => submitForm(e));
