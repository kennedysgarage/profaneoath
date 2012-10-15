window.PO = window.PO || {};

$(function() {
	'use strict';
	
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			"":"home"
		},
		
		home: function(){
			var $container = $('#container');
			$container.empty();
			$container.append(this.libraryView.render().el);
		}
	
	});
	
	
}());