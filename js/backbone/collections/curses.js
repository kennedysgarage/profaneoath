window.PO = window.PO || {};
$(function() {
	window.PO.Curses = Backbone.Collection.extend({
		model: PO.Curse,
		url: "js/cursedata.json"
	});
}());