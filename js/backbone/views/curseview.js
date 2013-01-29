window.PO = window.PO || {};
$(function() {
	window.PO.CurseView = Backbone.View.extend({
		className: 'curseview',		
		template: _.template($('#item-template').html()),
		render: function() {
			var curseViewHTML = this.template(this.model.toJSON());
        	$(this.el).html(curseViewHTML);
        	return this;
		}
	});
}());