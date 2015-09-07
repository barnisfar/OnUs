/**
* Invitation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    hosts:{
      collection:'HouseHold'
    },
    invitees:{
      collection:'HouseHold'
    },
    type: {
      model:'Type',
      required:true
    },
    open: {
      type:'boolean'
    },
    inviteesCanInvite: {
      type:'boolean',
      defaultsTo:false
    },
    description:{
      type:'string'
    },
    calendar: {
      model:'Calendar'
    }
  }
};

