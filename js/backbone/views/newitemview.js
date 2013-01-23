window.PO = window.PO || {};

$(function() {
	'use strict';

	//New Item view
	window.PO.NewItemView = Backbone.View.extend({
			
		template: _.template($('#item-new').html()),

		initialize: function() {
			console.log("newitemview init");
		},

		render: function() {
			var form = this.template();
        	$(this.el).html(form);
        	return this;
		}

	});
	
}());