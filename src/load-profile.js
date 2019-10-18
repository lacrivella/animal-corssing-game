import api from './services/api.js';

function loadProfile() {
    // reference DOM
    const name = document.getElementById('name');
    const animal = document.getElementById('animal');
    const bells = document.getElementById('bells');
    const friendship = document.getElementById('friendship');

    //load profile with user
    const user = api.getUser();

    if(!user) {
        window.location = './';
    }

    //copy data from object to DOM properties
    name.textContent = user.name;
    animal.src = './assets/avatars/' + user.animal + '.png';
    bells.textContent = user.bells;
    friendship.textContent = user.friendship;
}

export default loadProfile;