const supertest = require('supertest')
const server = require('./app')

const request = supertest(server)

afterAll(done => {
    server.close();
    done();
});

describe('the root of the application', () => {
    it('receives a GET request at the /', done => {
         request.get('/')
          .expect(200, 'Hello')
          .end(done)
       // expect(2+2).toBe(4)
    })
})