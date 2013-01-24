window.PO = window.PO || {};
$(function() {
	'use strict';
	
	window.PO.MainView = Backbone.View.extend({

		el:  $('#content'),

		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
			//console.log("main view initialized...");
		},

		render: function() {
			var randomCurse = this.collection.at(_.random(0, this.collection.length));
        	console.log("profane oath: " + randomCurse.get('title'));
        	this._displayCurse(randomCurse);
        	return this;
    	},
    	
    	_displayCurse: function(m) {
        	var curseView = new PO.CurseView({model:m});
        	$(this.el).html(curseView.render().el);
    	},
    	    	
    	populate: function() {
    		var $el = $('#container');
			$el.empty();
			$el.append(this.render().el);	
		},
		
		clear: function(){
			var $el = $('#container');
			$el.empty();
		}
	});
}());