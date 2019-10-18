import api from '../src/services/api.js';
import questData from '../src/services/quest-data.js';

const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

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

test('returns lists of adventures', (assert) => {
    // arrange
    const expected = questData;
    // act
    const quests = api.getQuests();
    // assert
    assert.deepEqual(quests, expected);
});

test('takes an id and returns the corresponding quest', (assert) => {
    // arrange
    const expectedQuest = questData[1];
    // act
    const foundQuest = api.getQuest(expectedQuest.id);
    // assert
    assert.deepEqual(foundQuest, expectedQuest);
});