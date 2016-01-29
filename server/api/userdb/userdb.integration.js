'use strict';

var app = require('../..');
import request from 'supertest';

var newUserdb;

describe('Userdb API:', function() {

  describe('GET /api/userdbs', function() {
    var userdbs;

    beforeEach(function(done) {
      request(app)
        .get('/api/userdbs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          userdbs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      userdbs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/userdbs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/userdbs')
        .send({
          name: 'New Userdb',
          info: 'This is the brand new userdb!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newUserdb = res.body;
          done();
        });
    });

    it('should respond with the newly created userdb', function() {
      newUserdb.name.should.equal('New Userdb');
      newUserdb.info.should.equal('This is the brand new userdb!!!');
    });

  });

  describe('GET /api/userdbs/:id', function() {
    var userdb;

    beforeEach(function(done) {
      request(app)
        .get('/api/userdbs/' + newUserdb._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          userdb = res.body;
          done();
        });
    });

    afterEach(function() {
      userdb = {};
    });

    it('should respond with the requested userdb', function() {
      userdb.name.should.equal('New Userdb');
      userdb.info.should.equal('This is the brand new userdb!!!');
    });

  });

  describe('PUT /api/userdbs/:id', function() {
    var updatedUserdb;

    beforeEach(function(done) {
      request(app)
        .put('/api/userdbs/' + newUserdb._id)
        .send({
          name: 'Updated Userdb',
          info: 'This is the updated userdb!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUserdb = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUserdb = {};
    });

    it('should respond with the updated userdb', function() {
      updatedUserdb.name.should.equal('Updated Userdb');
      updatedUserdb.info.should.equal('This is the updated userdb!!!');
    });

  });

  describe('DELETE /api/userdbs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/userdbs/' + newUserdb._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when userdb does not exist', function(done) {
      request(app)
        .delete('/api/userdbs/' + newUserdb._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
