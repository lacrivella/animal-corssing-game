const test = QUnit.test;
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        animal: formData.get('animal'),
        bells: 100,
        friendship: 5
    };
    return user;
}

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