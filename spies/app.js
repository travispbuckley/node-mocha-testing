var db = require('./db.js');

// spies let you swap out real function for a testing utility. 

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    db.saveUser({email, password});
    // send welcome email
}