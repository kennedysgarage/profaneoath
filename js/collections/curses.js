var po = po || {};

(function() {
	'use strict';

	// Curse Collection
	var CurseList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: po.Curse,

		// Curses are sorted by alphabetical order.
		comparator: function( curse ) {
			return curse.get('title');
		}
	});

	// Create our global collection of **Curses**.
	po.Curses = new CurseList();

}());