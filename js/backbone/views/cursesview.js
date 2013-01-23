window.PO = window.PO || {};
$(function() {
	'use strict';
	
	window.PO.CursesView = Backbone.View.extend({

		el:  $('#content'),
		
		events: {
			'click a#newitemlink':'_testNewItem'
		},

		initialize: function() {
			this.collection = new PO.Curses();
			this.collection.fetch({async:false});
		},

		render: function() {
			var randomCurse = this.collection.at(_.random(0, this.collection.length));
        	console.log(randomCurse.get('title'));
        	this.newItem = new PO.NewItemView();
        	this._renderCurse(randomCurse);
        	return this;
    	},
    	
    	_renderCurse: function(item) {
        	var curseView = new PO.CurseView({model:item});
        	$(this.el).html(curseView.render().el);
    	},
    	
    	_testNewItem: function (e) {
    		e.preventDefault;
    		this.clear;
    		this.newItem();
    		console.log("new item click working");
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