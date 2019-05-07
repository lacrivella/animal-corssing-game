import makeUser from './make-user.js';
import api from './api.js';

const signUp = document.getElementById('sign-up');

signUp.addEventListener('submit', () => {
    event.preventDefault();
    const formData = new FormData(signUp);
    const user = makeUser(formData);
    api.signUp(user);
    window.location = 'map.html';
});
