var po = po || {};

$(function() {
	'use strict';

	po.CursesView = Backbone.View.extend({


		el:  $('#curseHolder'),

		initialize: function() {
			this.collection = po.Curses;
			this.template = _.template( $('#item-template').html() );
			this.render();
		},

		render: function () {
			//console.log(this.collection);
        	var that = this;
	
        	_.each(this.collection.models, function (item){
        		that._renderCurse(item);
        	}, this);
        	
        	return this;
        	
    	},
    	_renderCurse: function (item) {
        	var curseView = new po.CurseView({
            	model: item
        	});
        	(this.$el).append(curseView.render().el);
    	}

	});
	
	
});