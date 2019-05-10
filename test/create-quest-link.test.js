import createAdventureLink from '../src/map/create-quest-link.js';

const test = QUnit.test;
QUnit.module('create adventure link');

test('create correct link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        //properties used to make the link
        id: 'shopping',
        image: 'shopping.png',

    };

    //use your static html example
    const expected = '<a class="quest" href="quest.html?id=shopping"><img src="assets/main/shopping.png"></a>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createAdventureLink(quest);

    //Assert
    assert.equal(dom.outerHTML, expected);
});