window.PO = window.PO || {};
$(function() {
	// Create the main PO appView.
	new PO.CursesView();
	window.library.fetch();
}());