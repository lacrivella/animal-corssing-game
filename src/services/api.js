import questData from './quest-data.js';
import findById from '../find-by-id.js';

const api = {
    // used by testing to control where API saves data
    storage: localStorage,
    // Methods for reading and saving data
    signUp(user) {
        // initialize any use data
        //stringify and save to api storage
        const json = JSON.stringify(user);
        //remove completed key
        api.storage.setItem('user', json);
    },
    getUser() {
        //return the user from api.storage
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questData;
    },
    getQuest(id) {
        return findById(questData, id);
    }
};
export default api;