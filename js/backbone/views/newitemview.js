window.PO = window.PO || {};
$(function() {
	window.PO.NewItemView = Backbone.View.extend({
		el: $('footer'),
		events:{
			"click #newitemlink":"_suggestForm"
		},
		template: _.template($('#item-new').html()),
		_suggestForm: function (e) {
			e.preventDefault();
			this.render().el;
			console.log('clicking newitemlink works');
		},
		render: function() {
        	$('#container').html(this.template());
        	return this;
		}
	});
}());