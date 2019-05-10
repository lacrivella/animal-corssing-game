import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

QUnit.module('create a choice');

test('', (assert) => {
    //arrange
    const choice = {
        id: 'trade',
        description: 'Accept the trade with Olivia'
    };
    const expected = '<label>' 
    + '<input type="radio" name="choice" value="trade">'
    + '<span>Accept the trade with Olivia</span>' 
    + '</label>';

    //act
    const dom = createChoice(choice);
    //assert
    assert.equal(dom.outerHTML, expected);
});