window.PO = window.PO || {};

$(function() {
	'use strict';
	
	window.PO.Curse = Backbone.Model.extend({
	
		initialize: function () {
			//console.log(this.urlRoot + this.get('title'));
		},
		
		urlRoot: '/',
		
		url: function() {
			return this.urlRoot + this.get('title');
		}
		
	});
	
}());