window.PO = window.PO || {};
$(function() {
	'use strict';

	//Curse model view
	window.PO.CurseView = Backbone.View.extend({
	
		className: 'curseview',
		
		template: _.template($('#item-template').html()),

		initialize: function() {
			_.bindAll(this, 'render');
		},

		render: function() {
			var cursewords = this.template(this.model.toJSON());
        	$(this.el).html(cursewords);
        	return this;
		}

	});
	
}());