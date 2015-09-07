/**
 * ResponseController
 *
 * @description :: Server-side logic for managing Responses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
};

