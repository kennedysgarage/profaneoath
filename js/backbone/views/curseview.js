window.PO = window.PO || {};
$(function() {
	'use strict';

	//Curse model view
	window.PO.CurseView = Backbone.View.extend({
	
		className: 'curseview',
		
		template: _.template($('#item-template').html()),

		initialize: function() {
			//console.log('curse model view initialized...');
		},

		render: function() {
			var curseViewHTML = this.template(this.model.toJSON());
        	$(this.el).html(curseViewHTML);
        	//console.log(curseViewHTML);
        	return this;
		}

	});
	
}());