const test = QUnit.test;
QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

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
    }
};

test('signUp sets user and returns on getUser', (assert) => {
    const user = {
        name: 'Henry',
        animal: 'chicken',
        bells: 100,
        friendship: 5
    };
    //act
    api.signUp(user);
    const result = api.getUser();
    //assert
    assert.deepEqual(result, user);
});