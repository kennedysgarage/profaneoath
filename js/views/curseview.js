window.PO = window.PO || {};

$(function() {
	'use strict';

	// Curse word view
	// The DOM element for a curse word...
	window.PO.CurseView = Backbone.View.extend({
	
		//cache the template for each curse word
		template: _.template($('#item-template').html()),

		className: 'curseword',

		initialize: function() {
			console.log("curseview working");
		},

		render: function() {
			var cursewords = this.template(this.model.toJSON());
        	(this.$el).html(cursewords);
        	return this;
		}

	});
	
}());