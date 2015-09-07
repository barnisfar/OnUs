/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');


module.exports = {

  attributes: {
    person: {
      model:'Person'
    },
    email: {
      type:'string',
      unique:true,
      required:true,
      email:true
    },
    phone:{
      type:'string'
    },
    password: {
      type:'string'
    },
    address: {
      model:'Address'
    }
  },
  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {

    // Encrypt password
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return cb(err);
      values.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
};

