window.PO = window.PO || {};
$(function() {
	'use strict';

	//Curses collection
	window.PO.Curses = Backbone.Collection.extend({

		model: PO.Curse,
		
		initialize: function (){
			//console.log("curses collection initialized...");
		},
		
		url: "js/cursedata.json"
		
	});
	
}());