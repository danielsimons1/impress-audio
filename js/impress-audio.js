(function(document, $, undefined) {
	'use strict';

	var isPlaying;

	$(document).on('impress:stepenter', function(event) {
		var $currSlide = $(event.target),
			audio = $currSlide.find('audio')[0];
		if(audio) {
			audio.play();
			if(isPlaying && $currSlide[0] != $currSlide.parent().children().last()[0]) {
				audio.addEventListener('ended',function() {
					impress().goto($currSlide.next());
					audio.removeEventListener('ended');
					
				});
			} else {
				isPlaying = false;
			}
			
		}
	});

	impress().play = function() {
		isPlaying = true;
		this.goto(0);
	};
})(document, jQuery);