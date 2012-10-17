window.PO = window.PO || {};

$(function() {
	'use strict';
	
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":"home"
		},
		
		home: function(){
			console.log("You're now on the home page.");
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());