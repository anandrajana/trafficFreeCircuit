'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
// /var bcrypt = require('bcryptjs');
var UserSchema = new mongoose.Schema({
  email:  { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  dob:String,
  active: Boolean
});

export default mongoose.model('User', UserSchema);
