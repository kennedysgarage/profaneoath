var po = po || {};

$(function() {
	'use strict';

	// Curse word view

	// The DOM element for a curse word...
	po.CurseView = Backbone.View.extend({

		tagName:  'dt',

		initialize: function() {
			this.template = _.template($('#item-template').html());
			this.render();
			//console.log("model view is working!!");
		},

		// Re-render the titles of the todo item.
		render: function() {
			var renderedContent = this.template(this.model.toJSON());
        	(this.$el).html(renderedContent);
        	return this;
		}

	});
	
});