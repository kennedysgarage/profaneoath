window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":'home'
		},
		
		initialize: function (){
			this.oathView = new PO.CursesView({});
		},
		
		home: function(){
			var $home = $('#container');
				$home.empty();
				$home.append(this.oathView.render().el);			
		}
	
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());