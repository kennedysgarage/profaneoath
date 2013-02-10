window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'':'_home'
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			this.urlCreator = this.mainView.randomCurse.get('title').replace(/\W/g, '');
			console.log(this.urlCreator);
		},
		_home: function() {
			this.mainView.populate();
			this.navigate(this.urlCreator, {trigger:true});
		}
	});
	var poRouter = new PO.CurseRoute();
	Backbone.history.start({pushState:true});
}());