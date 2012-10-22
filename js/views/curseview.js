window.PO = window.PO || {};

$(function() {
	'use strict';

	// Curse word view
	// The DOM element for a curse word...
	window.PO.CurseView = Backbone.View.extend({
	
		className: 'curseview',

		initialize: function() {
			_.bindAll(this, "render");
			this.model.bind("change", this.render);
			this.template = _.template($('#item-template').html());
			console.log("curseview initialized");
		},

		render: function() {
			var cursewords = this.template(this.model.toJSON());
        	$(this.el).html(cursewords);
        	return this;
		}

	});
	
}());