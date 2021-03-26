// IMPORT MODULES under test here:
// import { example } from '../example.ts';

const test = QUnit.test;

test('sync input to element', (expect) => {
    //Arrange
    const input = document.createElement('input');
    const span = document.createElement('span');
    const expected = 'banana';
    input.value = expected;
    
    //Act 
    sync(input, span);

    //Expect
    expect.equal(span.textContent, expected);
});
