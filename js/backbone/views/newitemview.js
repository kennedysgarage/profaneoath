window.PO = window.PO || {};

$(function() {
	'use strict';

	//New Item view
	window.PO.NewItemView = Backbone.View.extend({
	
		el:  $('#content'),
		
		template: _.template($('#item-new').html()),

		initialize: function() {

		},

		render: function() {
			var form = this.template();
        	$(this.el).html(form);
        	return this;
		}

	});
	
}());