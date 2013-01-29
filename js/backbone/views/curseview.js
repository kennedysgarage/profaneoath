window.PO = window.PO || {};
$(function() {
	window.PO.CurseView = Backbone.View.extend({
		className: 'curseview',		
		template: _.template($('#item-template').html()),
		render: function() {
        	$(this.el).html(this.template(this.model.toJSON()));
        	return this;
		}
	});
}());