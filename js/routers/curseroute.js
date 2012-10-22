window.PO = window.PO || {};

$(function() {
	'use strict';
	 
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":"home"
		},
		
		initialize: function (){
			this.oathView = new PO.CursesView({});
			console.log("Initializing router, creating oath collection....done.");
		},
		
		home: function(){
			var $home = $('#container');
				$home.empty();
				$home.append(this.oathView.render().el);
			
			console.log("Clearing elements....oath view appended. You are on the home page, enjoy.");
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());