window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":'home'
		},
		
		initialize: function() {
			this.oathView = new PO.CursesView({});
		},
		
		home: function() {
			var $home = $('#container');
			$home.empty();
			$home.append(this.oathView.render().el);
			//to do: move view instantiation
			//and DOM manipulation out of the router
			//move into view, then call that function
			//in this home method!
			//see: http://lostechies.com/derickbailey/2011/12/27/the-responsibilities-of-the-various-pieces-of-backbone-js/		
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());