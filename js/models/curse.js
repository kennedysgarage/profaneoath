var po = po || {};

(function() {
	'use strict';

	// Curse Model
	po.Curse = Backbone.Model.extend({

		// Default attributes for each curse word
		defaults: {
			title: '',
			pos: [], //takes an array because a lot of words can belong to more than 1 part of speech
			definition: ''
		}

	});

}());