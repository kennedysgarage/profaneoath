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
        	$(this.el).html(form);
        	return this;
		},
		
		populate: function() {
    		var $el = $('#container');
			$el.empty();
			$el.append(this.render().el);	
		},
		
		clear: function(){
			var $el = $('#container');
			$el.empty();
		}

	});
	
}());