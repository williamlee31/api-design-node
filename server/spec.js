var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function(){

  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  it('should create a lion', function(done) {
    var lion = {
      name: 'Simba',
      age: 5,
      pride: 'The Homies',
      gender: 'male'
    }

    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        var test = resp.body;
        expect(test.name).to.eql(lion.name);
        expect(resp.body).to.be.an('object');
        done();
      })
  });

  it('should delete a lion', function(done) {
    var lion = {
      name: 'Nala',
      age: 5,
      pride: 'The Homies',
      gender: 'female'
    }

    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        var test = resp.body;
        console.log(resp.body.id);
        request(app)
          .delete('/lions/' + resp.body.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, resp) {
            expect(test).to.eql(resp.body);
            done();
          })
      })
  });

  it('should update a lion', function(done) {
    request(app)
      .put('/lions/' + '1')
      .send({
        name: 'Mufasa'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        var test = resp.body;
        expect(test.name).to.eql('Mufasa');
        expect(test.age).to.eql(5);
        done();
      })
  });

});


