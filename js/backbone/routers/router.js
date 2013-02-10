window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'*actions':'_populatePage'
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			this.urlCreator = this.mainView.randomCurse.get('title').replace(/\W/g, '');
			console.log(this.urlCreator);
		},
		_populatePage: function() {
			this.mainView.populate();
		}
	});
	var poRouter = new PO.CurseRoute();
	poRouter.on('route:_home', function () {
		this.navigate(poRouter.urlCreator, {trigger:true});
	});
	Backbone.history.start({pushState:true});
}());