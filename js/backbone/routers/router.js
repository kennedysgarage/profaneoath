window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'':'_home',
			'*action':'_populatePage'		
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			var urlCreator = this.mainView.randomCurse.get('title').replace(/\W/g, '');
			this.mainView.randomCurse.set('urlName',urlCreator);
			console.log(this.mainView.randomCurse.toJSON());
		},
		_home: function () {
			this.navigate(this.urlCreator, {trigger:true});
			//this._populatePage();
			this.mainView.populate();
		},
		_populatePage: function(action) {
			//this.mainView.populate();
			//this.navigate(this._urlCreator, {trigger:true});
		}
	});
	var poRouter = new PO.CurseRoute();
	poRouter.bind("all",function(route) {
    	console.log(route);
	});

	Backbone.history.start({pushState:true});
}());

