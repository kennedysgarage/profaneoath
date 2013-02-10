window.PO = window.PO || {};
$(function() {
	window.PO.MainView = Backbone.View.extend({
		el:  $('#content'),
		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
			var randy = _.random(0, this.collection.length);
			this.randomCurse = this.collection.at(_.random(randy));
		},
		render: function() { 
        	this._displayCurse(this.randomCurse);
        	return this;
    	},
    	_displayCurse: function(m) {
        	var curseView = new PO.CurseView({model:m});
        	$(this.el).html(curseView.render().el);
    	},
    	populate: function() {
    		var $el = $('#container');
			$el.empty();
			$el.append(this.render().el);	
		}
	});
}());