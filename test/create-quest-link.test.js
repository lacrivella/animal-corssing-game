const test = QUnit.test;
QUnit.module('create adventure link');

function createAdventureLink(quest) {
    
}

test('create correct link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        //properties used to make the link
    };

    //use your static html example
    const expected = '<div>expected html</div>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createAdventureLink(quest);

    //Assert
    assert.equal(dom.outerHTML, expected);
});