window.PO = window.PO || {};

$(function() {
	'use strict';

	window.PO.CursesView = Backbone.View.extend({


		el:  $('#content'),

		initialize: function() {
			this.collection = new PO.Curses(window.curseData);
			//this.template = _.template( $('#item-template').html() );
			this.render();
		},

		render: function() {
			var that = this,
				randomIndex = _.random(0, this.collection.length),
        		shuffle = _.shuffle(this.collection.models);
        		
        		_.each(shuffle, function (item){
        			that._renderCurse(item);
        		}, this);
        	
        	return this;
        	
    	},
    	
    	_renderCurse: function (item) {
        	var curseView = new PO.CurseView({model:item});
        	(this.$el).html(curseView.render().el);
    	}
	});

});