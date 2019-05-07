import makeUser from './make-user.js';

const signUp = document.getElementById('sign-up');

signUp.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(signUp);
    const user = makeUser(formData);
    console.log(user);
});
