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
		},
		_home: function () {
			//this.navigate(this.urlCreator, {trigger:true});
			this._populatePage();
		},
		_populatePage: function() {
			this.mainView.populate();
			this.navigate(this.urlCreator, {trigger:true});
		}
	});
	var poRouter = new PO.CurseRoute();
	poRouter.bind("all",function(route) {
    	console.log(route);
	});

	Backbone.history.start({pushState:true});
}());

