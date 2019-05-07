const test = QUnit.test;

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
        //remove completed key
    },
    getUser() {
        //return the user from api.storage
    }
});
export defaul api;

test(signUp sets user and returns on getUser) => {
    const user = {

    };
    //act
    
    //assert
    assert.deepEqual(result, user);
});