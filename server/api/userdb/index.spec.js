'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var userdbCtrlStub = {
  index: 'userdbCtrl.index',
  show: 'userdbCtrl.show',
  create: 'userdbCtrl.create',
  update: 'userdbCtrl.update',
  destroy: 'userdbCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var userdbIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './userdb.controller': userdbCtrlStub
});

describe('Userdb API Router:', function() {

  it('should return an express router instance', function() {
    userdbIndex.should.equal(routerStub);
  });

  describe('GET /api/userdbs', function() {

    it('should route to userdb.controller.index', function() {
      routerStub.get
        .withArgs('/', 'userdbCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/userdbs/:id', function() {

    it('should route to userdb.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'userdbCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/userdbs', function() {

    it('should route to userdb.controller.create', function() {
      routerStub.post
        .withArgs('/', 'userdbCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/userdbs/:id', function() {

    it('should route to userdb.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'userdbCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/userdbs/:id', function() {

    it('should route to userdb.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'userdbCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/userdbs/:id', function() {

    it('should route to userdb.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'userdbCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
