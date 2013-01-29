window.PO = window.PO || {};
$(function() {
	window.PO.NewItemView = Backbone.View.extend({
						
		template: _.template($('#item-new').html()),
		render: function() {
        	$(this.el).html(this.template());
        	return this;
		}
	});
}());