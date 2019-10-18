const test = QUnit.test;
QUnit.module('create completed adventure');

function createCompletedAdventure(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    const img = document.createElement('img');
    img.src = 'assets/main/' + quest.image;
    span.appendChild(img);
    
    return span;
}

test('create completed quest', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        //properties used to make the link
        id: 'shopping',
        image: 'shopping.png',

    };

    //use your static html example
    const expected = '<span class="quest completed"><img src="assets/main/shopping.png"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createCompletedAdventure(quest);

    //Assert
    assert.equal(dom.outerHTML, expected);
});