(function(document, $, undefined) {
	'use strict';

	$(document).on('impress:stepenter', function(event,item) {
		var audio = $(event.target).find('audio')[0];
		if(audio) {
			audio.play();
		}
	});

})(document, jQuery);