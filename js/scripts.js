(function(window, $, undefined){
  
//safe mode toggling - to be removed when finished(?)
var toggleMode = {
	init: function () {
		$("#mode").on('click', function(){$('dt').toggleClass("nsfw");});
		$("#mode").toggle(function (){$(this).text("You are now viewing in NSFW mode.")}, function(){$(this).text("You are now viewing in SAFE mode.")});
	}
};
toggleMode.init();

})(window, jQuery);