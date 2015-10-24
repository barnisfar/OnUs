/**
* HouseHoldNetwork.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    addresses: {
      collection:'Address'
    },
    geometry: {
      model: 'Geometry'
    },
    blocked: {
      collection: 'HouseHold'
    },
    preferred: {
      collection: 'HouseHold'
    }
  }
};

