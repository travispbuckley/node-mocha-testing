const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
    // use done to tell mocha to wait since it's an async request
    request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
            error: 'Page not found.'
        });
      }) 
      .end(done);
});

it('should return an array of users', (done) => {
    // assert there is a 200 status response and that I exist inside the users array
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
          expect(res.body).toInclude({
              name: 'Travis',
              age: 26
          });
      })
      .end(done);
});