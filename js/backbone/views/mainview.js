window.PO = window.PO || {};
$(function() {
	window.PO.MainView = Backbone.View.extend({
		el:  $('#content'),
		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
			this.randomCurse = this.collection.at(_.random(0, this.collection.length));
		},
		render: function() { 
        	console.log("profane oath: " + this.randomCurse.get('title'));
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
		},
		
		clear: function(){
			var $el = $('#container');
			$el.empty();
		}
	});
}());