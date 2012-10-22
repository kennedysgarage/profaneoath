window.PO = window.PO || {};

$(function() {
	'use strict';
	
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":"home"
		},
		
		initialize: function (){
			
			this.oathView = new PO.CursesView({
				collection: window.library
			});
			console.log("Initializing router....done.");
		},
		
		home: function(){
			console.log("Verifying location....currently on the home page.");
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());