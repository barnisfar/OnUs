/**
* HouseHold.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    address: {
      model: 'Address',
      required: true
    },
    photos:{
      type:'array'
    },
    website:{
      type:'string',
      url:true
    },
    members: {
      collection: 'Person'
    },
    network: {
      model:'HouseHoldNetwork'
    }
  }
};

