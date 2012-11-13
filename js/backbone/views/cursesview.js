window.PO = window.PO || {};

$(function() {
	'use strict';
	
	//Curses collection view
	window.PO.CursesView = Backbone.View.extend({

		el:  $('#content'),

		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
		},

		render: function() {
			var that = this,
        		randomCurse = this.collection.at(_.random(0, this.collection.length));
        	that._renderCurse(randomCurse);
        	return this;
    	},
    	
    	_renderCurse: function(item) {
        	var curseView = new PO.CurseView({model:item});
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