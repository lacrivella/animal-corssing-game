const test = QUnit.test;
QUnit.module('create adventure link');

function createAdventureLink(quest) {
    const link = document.createElement('a');
    const img = document.createElement('img');
    img.src = 'assets/main/' + quest.image;
    
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();
    link.appendChild(img);

    return link;
}

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