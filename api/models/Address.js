/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    houseNumber: {
      type: 'string',
      required: true
    },
    street: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    zipCode: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      required: true
    }
  }
};

