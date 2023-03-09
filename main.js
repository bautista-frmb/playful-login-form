"use-strict"

const myForm = document.querySelector('#my-form');
const submitBtn = document.querySelector('.submit');
const userField = document.querySelector('#user');
const passwordField = document.querySelector('#password');
const passwordMsg = document.querySelector('.password-too-short');
const listener = () => {
  passwordMsg.style.visibility = 'visible';
  passwordField.blur();
  dodge.next();
}

const submitNow = () => {
  myForm.submit();
}

submitBtn.addEventListener('mouseover', listener);

passwordField.oninput = () => {
  if (passwordField.value.length < 8) {
    passwordMsg.style.visibility = 'visible';
    submitBtn.removeEventListener('click', submitNow);
    submitBtn.addEventListener('click', listener);
    submitBtn.addEventListener('mouseover', listener);
    return;
  }
  submitBtn.removeEventListener('mouseover', listener);
  submitBtn.removeEventListener('click', listener);
  submitBtn.classList.value = 'submit';
  passwordMsg.style.visibility = 'hidden';
  submitBtn.addEventListener('click', submitNow);
};

const dodge = (function* () {
  while (true) {
    yield submitBtn.classList.value ='submit dodge-left';
    yield submitBtn.classList.value = 'submit';
    yield submitBtn.classList.value ='submit dodge-right';
    yield submitBtn.classList.value = 'submit';
  }
})();

document.body.onload = () => {
  userField.value = 'asda';
}
