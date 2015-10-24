/**
* Stuff.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type: {
      model:'Type',
      required:true
    },
    description:{
      type:'string'
    },
    free: {
      type:'boolean'
    },
    price: {
      type:'float'
    },
    calendar: {
      model:'Calendar'
    }
  }
};

