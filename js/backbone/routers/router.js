window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'':'_home'
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
		},
		_home: function() {
			this.mainView.populate();
			//console.log(this.mainView.randomCurse.get('title'));
			//this.navigate("/" + this.mainView.randomCurse.get('title'));
		}
	});
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
}());