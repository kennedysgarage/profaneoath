window.PO = window.PO || {};
$(function() {
	window.PO.CurseRoute = Backbone.Router.extend({
		routes: {
			'':'_home',
			'*word':'_handleRoute'	
		},
		initialize: function() {
			this.mainView = new PO.MainView();
			this.newItemView = new PO.NewItemView();
			this.urlCreator = '' + this.mainView.randomCurse.get('title').replace(/\W/g, '').toLowerCase();
			this.mainView.randomCurse.set('urlName',this.urlCreator);
			console.log(this.mainView.randomCurse.toJSON());
		},
		_home: function () {
			//this.navigate(this.urlCreator, {trigger:true});
			//this._populatePage();
			this.mainView.populate();
		},
		_handleRoute: function (word) {
			//alert(word);
		}
	});
	PO.router = new PO.CurseRoute();
	PO.router.bind("all",function(route) {
		//console.log("PO router");
    	console.log(route);
	});

	Backbone.history.start({pushState:true});
}());

