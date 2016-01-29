/**
 * Userdb model events
 */

'use strict';

import {EventEmitter} from 'events';
var Userdb = require('./userdb.model');
var UserdbEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UserdbEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Userdb.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    UserdbEvents.emit(event + ':' + doc._id, doc);
    UserdbEvents.emit(event, doc);
  }
}

export default UserdbEvents;
