$(document).ready(function() {
	jQuery(function($) {
		if ($(window).width() > 1000) {

			$('.navbar .dropdown > a').click(function() {
				location.href = this.href;
			});

		} else {
			$('.navbar .dropdown > a').click(function() {
				var click = this.href;
				$('.navbar .dropdown > a').click(function() {
					if (this.href == click) {
						location.href = this.href;
					}
				});
			});
		}
	});
});
