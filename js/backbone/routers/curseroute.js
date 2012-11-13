window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			'':'home',
		},
		
		initialize: function() {
			console.log("router init");
		},
		
		home: function() {
			var kickoff = new PO.CursesView();
			kickoff.populate();
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());