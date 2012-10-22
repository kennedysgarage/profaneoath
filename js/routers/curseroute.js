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
			console.log("Initializing router, creating the collection view....done.");
		},
		
		home: function(){
			var $home = $('#container');
				$home.empty();
				$home.append(this.oathView.render().el);
			
			console.log("Clearing elements....HTML appened. You are currently on the home page, enjoy.");
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());