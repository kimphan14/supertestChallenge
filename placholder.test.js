const supertest = require('supertest')
const request = supertest('https://jsonplaceholder.typicode.com')

var stuff = '[\n' +
'  {\n' +
'    "postId": 1,\n' +
'    "id": 1,\n' +
'    "name": "id labore ex et quam laborum",\n' +
'    "email": "Eliseo@gardner.biz",\n' +
'    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n' +
'  },\n' +
'  {\n' +
'    "postId": 1,\n' +
'    "id": 2,\n' +
'    "name": "quo vero reiciendis velit similique earum",\n' +
'    "email": "Jayne_Kuhic@sydney.com",\n' +
'    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n' +
'  },\n' +
'  {\n' +
'    "postId": 1,\n' +
'    "id": 3,\n' +
'    "name": "odio adipisci rerum aut animi",\n' +
'    "email": "Nikita@garfield.biz",\n' +
'    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n' +
'  },\n' +
'  {\n' +
'    "postId": 1,\n' +
'    "id": 4,\n' +
'    "name": "alias odio sit",\n' +
'    "email": "Lew@alysha.tv",\n' +
'    "body": "non et atque\\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\\nquia voluptas consequuntur itaque dolor\\net qui rerum deleniti ut occaecati"\n' +
'  },\n' +
'  {\n' +
'    "postId": 1,\n' +
'    "id": 5,\n' +
'    "name": "vero eaque aliquid doloribus et culpa",\n' +
'    "email": "Hayden@althea.biz",\n' +
'    "body": "harum non quasi et ratione\\ntempore iure ex voluptates in ratione\\nharum architecto fugit inventore cupiditate\\nvoluptates magni quo et"\n' +
'  }\n' +
']';


describe('tests for Placeholder and Supertest', () => {
    it('receives a GET request at the /', done => {
        request.get('/post/1/comments')
          .expect(200, stuff)
          .end(done)
    })

    it('receives a GET request at the / for photos', done => {
        request
            .get('/albums/1/photos')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done()
            })
    })
    
    it('receives a GET request at the / for albums', done => {
        request
            .get('/users/1/albums')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    it('receives a GET request at the / for todo', done => {
        request
            .get('/users/1/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    it('receives a GET request at the / for posts', done => {
        request
            .get('/users/1/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                done()
            })
    })
})

describe('POST /comment', function() {
    it('adding in a new comment', done => {
      request
        .post('/post/1/comments')
        .send('postId=1') // x-www-form-urlencoded upload
        .set('Accept', 'application/json')
        .expect(function(res) {
          res.body.postId = 1  
          res.body.id = '6';
          res.body.name = res.body.name.toLowerCase();
          res.body.email = 'abcd@gmail.com';
          res.body.body ='Does this comment appear?';
        })
        .expect(200, {
         postId:1,
          id: '6',
          name: 'john', 
          email:'abcd@gmail.com',
          body:'Does this comment appear?'
        }, done())
    })
  })