/* My own solution for javascript code */

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const loginForm = document.querySelector('.login-form-wrapper');
const signupForm = document.querySelector('.signup-form-wrapper');

const loginX = document.querySelector('.login-x');
const signupX = document.querySelector('.signup-x');


loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

loginX.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
});

signupX.addEventListener('click', () => {
    signupForm.classList.remove('active');
});

/* End of My own solution for javascript code */

