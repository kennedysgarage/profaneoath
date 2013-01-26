window.PO = window.PO || {};

$(function() {
	//'use strict';

	//New Item view
	window.PO.NewItemView = Backbone.View.extend({
						
		template: _.template($('#item-new').html()),

		initialize: function() {
			//console.log(this.template());
			//console.log("newitemview initialized...");
		},

		render: function() {
        	$(this.el).html(this.template());
        	return this;
		}
		
	});
	
}());