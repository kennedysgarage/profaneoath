window.PO = window.PO || {};

$(function() {
	'use strict';

	// Curse Collection
	window.PO.Curses = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: PO.Curse,

		// Curses are sorted by alphabetical order.
		comparator: function( curseData ) {
			return curseData.get('title');
		}
	});
		
}());