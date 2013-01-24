window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			'':'home'
		},
		
		initialize: function() {
			console.log("router initialized...");
		},
		
		home: function() {
			var kickoff = new PO.MainView();
			kickoff.populate();
			//this.navigate();
		}
		
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());