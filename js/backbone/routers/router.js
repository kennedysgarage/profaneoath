window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'':'_home',
			':title':'_populatePage'
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			this.urlCreator = this.mainView.randomCurse.get('title').replace(/\W/g, '');
		},
		_home: function () {
			this.navigate(this.urlCreator, {trigger:true});
		},
		_populatePage: function(title) {
			this.mainView.populate();
		}
	});
	var poRouter = new PO.CurseRoute();

	Backbone.history.start({pushState:true});
}());