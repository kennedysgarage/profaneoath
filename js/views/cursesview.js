var po = po || {};

$(function() {
	'use strict';

	po.CursesView = Backbone.View.extend({


		el:  $('#content'),

		initialize: function() {
			this.collection = po.Curses;
			this.template = _.template( $('#item-template').html() );
			this.render();
		},

		render : function() {

    	// for each tweet, create a view and prepend it to the list.
    	po.Curses.each(function(word) {
      var wordView = new po.CurseView({model:word});
      $(this.el).html(wordView.render().el);
    }, this);

    return this;
  }


	});
	
	
});