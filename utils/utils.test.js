const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            // test code goes here.
            var results = utils.add(33, 11);
            
            expect(results).toBe(44).toBeA('number');
        });
        
        // for async testing, can pass the done function and call below to tell the test not to be done until it reaches that point in the code.
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            }); 
        });
    });
    
    it('should square a number', () => {
        var results = utils.square(4);
    
        expect(results).toBe(16).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16);
            done();
        });
    }); 
});
// first paramter is string that describes what the test is doing. BDD


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