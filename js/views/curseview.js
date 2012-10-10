var po = po || {};

$(function() {
	'use strict';

	// Curse word view

	// The DOM element for a curse word...
	po.CurseView = Backbone.View.extend({

		//... is a list tag.
		tagName:  'li',

		// The DOM events specific to an item.
		events: {},

		// The CurseView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function() {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
			this.model.on( 'visible', this.toggleVisible, this );
			
			// Cache the template function for a single item.
			template: _.template( $('#item-template').html() )
		},

		// Re-render the titles of the todo item.
		render: function() {
			var renderedContent = this.template(this.model.toJSON());
        	(this.$el).html(renderedContent);
        	//console.log(this.model);
        	return this;
		},

	});
});