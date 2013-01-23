window.PO = window.PO || {};

$(function() {
	'use strict';
	
	window.PO.Curse = Backbone.Model.extend({

		initialize: function () {
			//console.log("curse model");
		},
	
		defaults: {
			title:'',
			pos:[],
			definition:''
		}
	
	});
	
}());