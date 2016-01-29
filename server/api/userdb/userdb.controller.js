/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/userdbs              ->  index
 * POST    /api/userdbs              ->  create
 * GET     /api/userdbs/:id          ->  show
 * PUT     /api/userdbs/:id          ->  update
 * DELETE  /api/userdbs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Userdb from './userdb.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Userdbs
export function index(req, res) {
  Userdb.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Userdb from the DB
export function show(req, res) {
  Userdb.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Userdb in the DB
export function create(req, res) {
  Userdb.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Userdb in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Userdb.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Userdb from the DB
export function destroy(req, res) {
  Userdb.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
