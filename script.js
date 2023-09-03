/* My own solution for javascript code */

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const loginForm = document.querySelector('.login-form-wrapper');
const signupForm = document.querySelector('.signup-form-wrapper');

const loginX = document.querySelector('.login-x');
const signupX = document.querySelector('.signup-x');

const formContainer = document.querySelector('.form-container');


loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    formContainer.classList.add('disable');
});

loginX.addEventListener('click', () => {
    loginForm.classList.remove('active');
    formContainer.classList.remove('disable');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    formContainer.classList.add('disable');
});

signupX.addEventListener('click', () => {
    signupForm.classList.remove('active');
    formContainer.classList.remove('disable');
});

/* End of My own solution for javascript code */

