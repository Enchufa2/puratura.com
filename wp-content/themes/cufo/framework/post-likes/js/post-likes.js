// Post Likes System

jQuery(document).ready(function($) {
	"use strict";


	// Post Likes button
	$('body').on('click','.royal-post-like',function(event) {

		// prevent default behaviour
		event.preventDefault();

		// define variables
		var likes 	   = $(this),
			likesCount = likes.find('.rf-likes-count'),
			postID 	   = likes.data("post_id");

		// blink effect
		likes.stop().fadeOut().fadeIn();

		// ajax update count
		$.ajax({
			type: 'post',
			url: ajax_var.url,
			data: 'action=royal-post-like&nonce='+ ajax_var.nonce +'&royal_post_like=&post_id='+postID,
			success: function( count ) {

				if( count.indexOf( 'already' ) !== -1 ) {
					var lCount = count.replace( 'already', '' );
					likesCount.text(lCount);
				} else {
					likesCount.text(count);
				}

			}
		});

	}); // end click()


}); // end dom ready