const expect = require('expect');
const rewire = require('rewire');
// load in files that you want to mock
var app = rewire('./app');
// app.__set__
// app.__get__

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'test@test.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});