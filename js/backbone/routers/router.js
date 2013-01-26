window.PO = window.PO || {};

$(function() {
	//'use strict';
	
	//Router
	window.PO.CurseRoute = Backbone.Router.extend({
	
		routes: {
			'':'_home',
			'#suggest':'_newItem'
		},
		
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			console.log("router intitialized...");
		},
		
		_home: function() {
			console.log("_home working");
			this.mainView.populate();
		},
		
		_newItem: function() {
			console.log("_newItem working");
			this.newItemView.populate();
		}
		
	});
	
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
	
}());