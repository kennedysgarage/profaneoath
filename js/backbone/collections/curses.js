window.PO = window.PO || {};

$(function() {
	'use strict';

	//Curses collection
	window.PO.Curses = Backbone.Collection.extend({

		model: PO.Curse,
		
		url: "js/cursedata.json",
		
		parse: function(response) {
			return response;
		},

		comparator: function(curseData) {
			return curseData.get('title');
		}
	});
	
}());