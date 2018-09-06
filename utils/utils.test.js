const utils = require('./utils');

// first paramter is string that describes what the test is doing. BDD
it('should add two numbers', () => {
    // test code goes here.
    var results = utils.add(33, 11);
    
    if (results !== 44) {
        throw new Error(`Expected 44, but got ${results}`);
    }
});

it('should square a number', () => {
    var results = utils.square(4);

    if (results !== 16) {
        throw new Error(`Expected 16, but got ${results}`);
    }
})