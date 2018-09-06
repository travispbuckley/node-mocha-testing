const expect = require('expect');

const utils = require('./utils');

// first paramter is string that describes what the test is doing. BDD
it('should add two numbers', () => {
    // test code goes here.
    var results = utils.add(33, 11);
    
    expect(results).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var results = utils.square(4);

    expect(results).toBe(16).toBeA('number');
});

it('should set first and last names are set', () => {
    var user = {
        occupation: 'Developer',
        age: 26
    };

    var results = utils.setName(user, 'Travis Buckley');

    expect(results.firstName).toBe('Travis').toBeA('string');
    expect(results.lastName).toBe('Buckley').toBeA('string');
    expect(results).toBeAn('object');
});