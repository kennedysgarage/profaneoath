var po = po || {};

$(function() {
	'use strict';

	// Curse Collection
	var CurseList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: po.Curse,

		// Curses are sorted by alphabetical order.
		comparator: function( curses ) {
			return curses.get('title');
		}
	});
							
	po.Curses = new CurseList([
		{title:"asshole",pos:["noun"],definition:""},
		{title:"bimmy",pos:["noun"],definition:""},
		{title:"bitch",pos:["noun","verb"],definition:""},
		{title:"ass clown",pos:["noun"],definition:""},
		{title:"ball sack",pos:["noun"],definition:""},
		{title:"bag o' dicks",pos:["noun"],definition:""},
		{title:"bangster",pos:["noun"],definition:""},
		{title:"beat off",pos:["verb"],definition:""},
		{title:"blow job",pos:["noun"],definition:""},
		{title:"boink",pos:["verb"],definition:""},
		{title:"boner",pos:["noun"],definition:""},
		{title:"brownhole",pos:["noun"],definition:""},
		{title:"brownie",pos:["noun"],definition:""},
		{title:"brownfinger",pos:["noun","verb"],definition:""},
		{title:"bucksnort",pos:["verb"],definition:""},
		{title:"buddery",pos:["adjective"],definition:""}
	
	]);
	
}());