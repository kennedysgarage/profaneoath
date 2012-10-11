var po = po || {};

$(function() {
	'use strict';

	// Curse Collection
	var CurseList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: po.Curse,

		// Curses are sorted by alphabetical order.
		comparator: function( curseData ) {
			return curseData.get('title');
		}
	});

	// Create our global collection of **Curses**.
	po.Curses = new CurseList([{
		title:"asshole",
    	pos:["noun"],
    	definition:""
	},{
		title:"ass clown",
		pos:["noun"],
		definition:""
	},{
		title:"ball sack",
		pos:["noun"],
		definition:""
	},{
		title:"bag o' dicks",
		pos:["noun"],
		definition:""
	},{
		title:"bangster",
		pos:["noun"],
		definition:""
	},{
		title:"beat off",
		pos:["verb"],
		definition:""
	},{
		title:"bimmy",
		pos:["noun"],
		definition:""
	},{
		title:"bitch",
		pos:["noun","verb"],
		definition:""
	},{
		title:"blow job",
		pos:["noun"],
		definition:""
	},{
		title:"boink",
		pos:["verb"],
		definition:""
	},{
		title:"boner",
		pos:["noun"],
		definition:""
	}
	
]);

}());