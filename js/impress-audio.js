(function(document, $, undefined) {
	'use strict';

	var isPlaying,
		audio;

	$(document).on('impress:stepenter', function(event,f) {
		var $currSlide = $(event.target);
		if(audio) {
			audio.pause();
		}
		audio = $currSlide.find('audio')[0];
		if(audio) {
			audio.play();
			if(isPlaying && $currSlide[0] != $currSlide.parent().children().last()[0]) {
				audio.addEventListener('ended',function() {
					impress().goto($currSlide.parent().children().index($currSlide.next()));
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
