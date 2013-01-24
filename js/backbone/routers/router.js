window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			'':'_home',
			'#suggest':'_newItem'
		},
		
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			//console.log("router intitialized...");
		},
		
		_home: function() {
			this.mainView.populate();
		},
		
		_newItem: function() {
			console.log("working");
			$('#content').html(this.newItemView.render().el);
		}
		
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());