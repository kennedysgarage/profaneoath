window.PO = window.PO || {};

$(function() {
	'use strict';

	window.PO.CursesView = Backbone.View.extend({

		el:  $('#content'),

		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
			//this.render();
		},

		render: function() {
			var that = this,
        		randomCurse = this.collection.at(_.random(0, this.collection.length));
        	
        	that._renderCurse(randomCurse);
        	console.log("Current random curse is: " + randomCurse.get("title") + "!");
        	return this;
    	},
    	
    	_renderCurse: function (item) {
        	var curseView = new PO.CurseView({model:item});
        	$(this.el).html(curseView.render().el);
    	}
	});

}());