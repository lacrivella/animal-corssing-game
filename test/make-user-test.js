import makeUser from '../src/make-user.js';
const test = QUnit.test;

test('create user object from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    //set values in strings
    formData.set('name', 'Henry');
    formData.set('animal', 'chicken');

    const expected = {
        name: 'Henry',
        animal: 'chicken',
        bells: 100,
        friendship: 5,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);
    //Assert
    assert.deepEqual(user, expected);
});