/**
* Response.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	invitation: {
  	    model:'Invitation',
  	    required:true
  	},
  	houseHold: {
  	    model:'HouseHold',
  	    required:true
  	},
  	suggestedEvent:{
  	    model:'CalendarEvent'
  	},
  	hostConfirmed: {
  	    type:'boolean'
  	},
  	inviteeConfirmed: {
  	    type:'boolean'
  	}
  }
};

