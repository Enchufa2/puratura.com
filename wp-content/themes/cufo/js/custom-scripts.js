$ = jQuery;

// define main variables
	var body 			= jQuery('body'),
		mobFoldButton 	= jQuery('.m-nav-fold'),
		sidFoldButton 	= jQuery('.sidebar-fold-btn'),
		backTopButton 	= jQuery('.back-to-top'),
		sidebar 		= jQuery('#sidebar'),
		sidebarTop 		= jQuery('#sidebar-top'),
		projectInfo 	= jQuery('.project-info'),
		mainWrap 		= jQuery('#main-wrap'),
		mainMenuItem 	= jQuery('.main-nav li a'),
		CopyAndSoc 		= jQuery('.copy-and-soc'),
		form 			= jQuery('.rf-form, .comment-form'),
		inputs 			= jQuery('.rf-input, #s');

/*
***************************************************************
* All theme's cutom JavaScript is located here.
* Please don't Edit/Delete something. THIS IS VITAL.
***************************************************************
*/

jQuery(document).ready(function( $ ) {
	"use strict";


/*
***************************************************************
* #Buttons
***************************************************************
*/

// Mobile fold button
	mobFoldButton.click(function() {
		jQuery('.mobile-nav').stop().slideToggle();
	});

// Sidebar fold button
	sidFoldButton.click(function() {

		body.toggleClass('sidebar-closed copy-closed');
		fixedSidebarHeight();
		
		// Run Functions
		setTimeout(function() {

			projectInfoEqual();
			jQuery('.jcarousel').jcarousel('reload').fadeOut().fadeIn();
			
			// run isotope function
			isotopeFn('portfolio');
			isotopeFn('blog');
			jQuery('.esg-grid').each(function(){
				jQuery(this).esredraw();
			})

		}, 200);

	});

// Back to top button
	function backButton() {
		if ( jQuery(window).scrollTop() > 100 ) {
			backTopButton.fadeIn( parseInt( backTopButton.attr('data-duration') ) );
		} else {
			backTopButton.fadeOut( parseInt( backTopButton.attr('data-duration') ) );
		}
	}

	backButton();

	jQuery(window).scroll(function() {
		backButton();
	});

	backTopButton.click(function() {
		jQuery('html, body').animate( {scrollTop: 0}, parseInt( backTopButton.attr('data-scroll-top') ) );
	});

// Copyright fold button
	if ( jQuery('.footer-fold-btn').css('display') !== 'none' ) {
		CopyAndSoc.css( 'bottom', - CopyAndSoc.outerHeight() +'px' );
	}

	// show/hide on click
	jQuery('.footer-fold-btn').click(function() {

		// define
		var toggleIcon 		= jQuery(this).children(),
			toggleIconClass = toggleIcon.attr('class');

		if ( CopyAndSoc.css('bottom') !== '0px' ) {

			// change icon
			if (  toggleIconClass.match('up')) {
				toggleIcon.attr( 'class', toggleIconClass.replace( 'up', 'down' ) );
			}

			CopyAndSoc.animate({
				'bottom' : '0'
			}, 500);

		} else {

			// change icon
			if (  toggleIconClass.match('down')) {
				toggleIcon.attr( 'class', toggleIconClass.replace( 'down', 'up' ) );
			}

			CopyAndSoc.animate({
				'bottom' : - CopyAndSoc.outerHeight() +'px'
			}, 500);

		}

	});


/*
***************************************************************
* #Sidebar
***************************************************************
*/

// Sidebar custom scroll
// some bug fixes for Opera, IE and Safari

	if ( navigator.userAgent.match(/opera/i) ) {
		sidebar.perfectScrollbar({
			suppressScrollX : true,
			wheelSpeed: 150,
			includePadding : true
		});

	} else if ( navigator.userAgent.match(/msie/i) ) {
		sidebar.perfectScrollbar({
			suppressScrollX : true,
			wheelSpeed: 2,
			includePadding : true
		});

	} else if ( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
		sidebar.perfectScrollbar({
			suppressScrollX : true,
			wheelSpeed: 150,
			includePadding : true
		});

		// fix project info left margin
		jQuery('.project-info').css('margin-left', (jQuery('.single-wrap').outerWidth() + jQuery('.project-info').data('left-margin')) +'px');
		
	} else {
		sidebar.perfectScrollbar({
			suppressScrollX : true,
			includePadding : true
		});
	}

// fixedSidebarHeight(), small fix for sidebar scroll
	if ( ! body.hasClass('sidebar-fixed') && body.hasClass('copy-fixed') ) {
		sidebar.append('<div class="tmp-copy-soc" style="height:'+ CopyAndSoc.outerHeight() +'px;"></div>');
	}
	
// Main menu: Sub menus
// open with hover or click events
	if ( jQuery('.main-nav').parent().data('open') === 'hover' ) {

		mainMenuItem.mouseenter(function() {
			jQuery(this).parent().find('.sub-menu').stop().slideDown();
			sidebar.perfectScrollbar('update');
		});

		sidebar.mouseleave(function() {
			mainMenuItem.parent().find('.sub-menu').stop().slideUp();
		});

	} else if ( jQuery('.main-nav').parent().data('open') === 'click' ) {

		mainMenuItem.click(function( event ) {

			mainMenuItem.parent().find('.sub-menu').stop().slideUp();
			jQuery(this).parent().find('.sub-menu').stop().slideToggle();

			sidebar.perfectScrollbar('update');
			if ( jQuery(this).parent().find('.sub-menu').length > 0 ) {
				event.preventDefault();
			}

		});

	}

// remove "font-size" from portfolio tagcloud widget
	jQuery('.tagcloud a').removeAttr('style');


/*
***************************************************************
* #Sidebar Top
***************************************************************
*/

// Fold menu
	var topNav = jQuery('.top-nav'),
		topNavWrap = jQuery('.top-nav-wrap');

	// wrap & center
	if ( body.hasClass('menu-fold-style') && ! topNav.hasClass('top-nav-center') ) {
		topNav.addClass('top-nav-center')
			.wrap('<div class="top-nav-container"></div>')
					.wrap('<div class="top-nav-outer"></div>')
						.wrap('<div class="top-nav-inner"></div>');

		// popup fx
		jQuery('.top-nav-container').addClass( topNavWrap.attr('data-popup-fx') );

		// close button			
		var navClose = jQuery('.top-nav-close').remove();
		jQuery('.top-nav-outer').append(navClose);
		jQuery('.top-nav-close').show();
	}

	// popup on click
	jQuery('.top-nav-toggle').click(function(){
		jQuery('.top-nav-container').toggleClass('top-nav-popup');
		jQuery('.tn-fade').fadeToggle( parseInt( topNavWrap.attr('data-popup-fx-trans'), 10) );
	});
	
// Sub menus
	if ( body.hasClass('sidebar-top') ) {

		jQuery('.sub-menu').each(function() {
			jQuery(this).wrap('<div class="sub-menu-wrap"></div>');
		});

		jQuery('.top-nav.top-nav-vertical > li').hover(function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').stop().slideDown();
		}, function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').stop().slideUp();
		});

		jQuery('.top-nav.top-nav-horizontal > li').hover(function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').fadeIn('fast');
		}, function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').fadeOut('fast');
		});

		jQuery('.top-nav.top-nav-horizontal .sub-menu > li').hover(function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').fadeIn('fast');
		}, function() {
			jQuery(this).children('.sub-menu-wrap').children('.sub-menu').fadeOut('fast');
		});

	}

// Widgets
	jQuery('.top-widgets-fold-btn').find('i').click(function() {

		// show/hide Top Widgets
		jQuery('.top-widgets').slideToggle();

		// change icon direction
		if ( jQuery(this).attr('class').match('plus') ) {
			jQuery(this).attr( 'class', jQuery(this).attr('class').replace( 'plus', 'minus' ) );
		} else if ( jQuery(this).attr('class').match('minus') ) {
			jQuery(this).attr( 'class', jQuery(this).attr('class').replace( 'minus', 'plus' ) );
		}

		if ( jQuery(this).attr('class').match('down') ) {
			jQuery(this).attr( 'class', jQuery(this).attr('class').replace( 'down', 'up' ) );
		} else if ( jQuery(this).attr('class').match('up') ) {
			jQuery(this).attr( 'class', jQuery(this).attr('class').replace( 'up', 'down' ) );
		}

	});



/*
***************************************************************
* #Copyright & Socials
***************************************************************
*/

// show Copyright & Socials in footer on small devices
	function mobileCopyAndSoc() {

		if ( sidebar.css('display') === 'none' && body.hasClass('copy-fixed') ) {

			body.removeClass('copy-closed');
			CopyAndSoc.addClass('copy-mobile');

		} else if ( sidebar.css('display') !== 'none' && body.hasClass('copy-fixed') && body.hasClass('sidebar-closed') ) {

			body.addClass('copy-closed');
			CopyAndSoc.removeClass('copy-mobile');

		} else if ( sidebar.css('display') !== 'none' && body.hasClass('copy-fixed') && ! body.hasClass('sidebar-closed') ) {

			CopyAndSoc.removeClass('copy-mobile');

		}

	}


/*
***************************************************************
* #Similar Items
***************************************************************
*/

// Similar items - jcarousel
	jQuery('.jcarousel').on('jcarousel:create jcarousel:reload', function() {
		
		// define
		var bodyWidth = jQuery('.inner-content-wrap').width(),
			width     = jQuery(this).innerWidth(),
			colRate   = parseInt( jQuery('.similar-items').data('columns-rate'), 10 );

        if ( bodyWidth < 600 ) {
         width = width / 2;
        } else if ( bodyWidth < 850 ) {
         width = width / 3;
        } else if ( bodyWidth < 1100 ) {
         width = width / ( 4 + colRate);
        } else if ( bodyWidth < 1300 ) {
         width = width / ( 5 + colRate);
        } else if ( bodyWidth < 1600 ) {
         width = width / ( 6 + colRate);
        } else if ( bodyWidth < 1900 ) {
         width = width / ( 7 + colRate);
        } else if ( bodyWidth < 2100 ) {
         width = width / ( 8 + colRate);
        } else if ( bodyWidth < 2400 ) {
         width = width / ( 9 + colRate);
        } else if ( bodyWidth < 2700 ) {
         width = width / ( 10 + colRate);
        } else if ( bodyWidth < 3000 ) {
         width = width / ( 11 + colRate);
        } else if ( bodyWidth < 3300 ) {
         width = width / ( 12 + colRate);
        } else {
         width = width / 14;
        }

        jQuery(this).jcarousel('items').css('width', width + 'px');

    }).jcarousel({
       wrap: 'circular'

    }).jcarouselAutoscroll({
		interval: jQuery('.similar-items').data('interval'),
		target: '+=1',
		autostart: jQuery('.similar-items').data('autostart')
    });

	jQuery('.jcarousel').jcarousel({
	    animation: jQuery('.similar-items').data('animation')
	});

    jQuery('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    jQuery('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


/*
***************************************************************
* #Google Map
***************************************************************
*/

	jQuery('.google-map-wrap').each( function() {
		
		// define variables	
		var mapObj,
			geocoderObj,
			mapLocation = jQuery(this).data('location'),
			mapType 	= jQuery(this).data('map-type'),
			markerTitle = jQuery(this).data('title'),
			mouseScroll = jQuery(this).data('scroll'),
			navigation	= jQuery(this).data('nav'),
			typeControl	= jQuery(this).data('type-control'),
			zoomLevel	= parseInt( jQuery(this).data('zoom'), 10 );
		
		if ( mapType === 'ROADMAP' ) {
			mapType = google.maps.MapTypeId.ROADMAP;
		} else {
			mapType = google.maps.MapTypeId.SATELLITE;
		}

		if ( parseInt( mouseScroll, 10 ) === 1 ) {
			mouseScroll = true;
		} else {
			mouseScroll = false;
		}

		if ( parseInt( navigation, 10 ) === 1 ) {
			navigation = true;
		} else {
			navigation = false;
		}

		if ( parseInt( typeControl, 10 ) === 1 ) {
			typeControl = true;
		} else {
			typeControl = false;
		}

		var mobileDraggable = true;
		
		if ( jQuery('#sidebar, #sidebar-top').css('display') === 'none' ) {
			mobileDraggable = false;
		}
		
		geocoderObj = new google.maps.Geocoder();
		
		geocoderObj.geocode( { 'address': mapLocation }, function( results, status ) {
		
			if ( status == google.maps.GeocoderStatus.OK ) {
			
				var mapOptions = {
					zoom: zoomLevel,
					mapTypeId: mapType,
					scrollwheel: mouseScroll,
					draggable: mobileDraggable,
					streetViewControl: false,
					mapTypeControl: typeControl,
					panControl: navigation,
					zoomControl: navigation,
				    mapTypeControlOptions: {
				      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				    }
				};
				
				mapObj = new google.maps.Map( jQuery('#cufo-gmap .google-map')[0], mapOptions );
				
				mapObj.setCenter( results[0].geometry.location );
				
				// Marker
				var marker = new google.maps.Marker({
				  map: mapObj, 
				  position: results[0].geometry.location,
				  title : mapLocation
				});
				
				var infoWinContent = ( (markerTitle) ? '<h3 style="line-height:19px;">' + markerTitle + '</h3>' : '' );
				
				// Info Window Popup - custom title area
				var infoPopup = new google.maps.InfoWindow({
				  content: infoWinContent
				});
				
				if ( markerTitle.trim() !== '' ) {
					infoPopup.open( mapObj, marker );
				}
			
			// if loading fails display error message
			} else {
				jQuery('#cufo-gmap').html( "Geocode was not successful for the following reason: " + status );
			}

		});
		
	});


/*
***************************************************************
* #Inputs
***************************************************************
*/

// inputs, textareas clear/fill
	function clearfill( input ) {

		var inpValue = input.data('placeholder');

		input.focus(function() {

			if( input.val() === inpValue ) {
				input.val('');
			} 

		});

		input.blur(function() {

			if( input.val() === '' ) {
				input.val(inpValue);
			}

		});
	} 

// run clearfill for each input/textarea
	inputs.each(function() {
		clearfill( jQuery(this) );
	});

// person name validation
	function validName() {

		var name = jQuery('.pers-name');

		if ( ( name.val() === '' || name.val() === name.data('placeholder') || name.val().length < 2 ) && name.attr('aria-required')  ) {

			name.addClass('rf-error');
			return false;

		} else {

			name.removeClass('rf-error');
			return true;

		}

	}

// person email validation
	function validEmail() {

		// define
		var email = jQuery('.pers-email'),
			regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if ( regex.test( email.val() ) !== true && email.attr('aria-required') ) {
			email.addClass('rf-error');
		} else {
			email.removeClass('rf-error');
		}
		
		if ( email.attr('aria-required') ) {
			return regex.test( email.val() );
		} else {
			return true;
		}
		
	}

// person message validation
	function validMessage() {

		var message = jQuery('.pers-message');

		if ( message.val() === '' || message.val() == message.data('placeholder') || message.val().length < 2 ) {

			message.addClass('rf-error');
			return false;

		} else {

			message.removeClass('rf-error');
			return true;

		}

	}

// validate all inputs when form submits
	form.submit(function( event ) {

		validName();
		validEmail();
		validMessage();

		if ( jQuery('.pers-name').length > 0 && jQuery('.pers-email').length > 0 ) {

			if ( ! validName() || ! validEmail() || ! validMessage() ) {

				event.preventDefault();

			} else {

				if ( jQuery('#url').val() === 'Website' ) {
					jQuery('#url').val('');
				}

			}

		} else if ( ! validMessage() ) {

			event.preventDefault();

		}

	});

// if email was sent succesfuly disable all inputs
	if ( form.attr('data-disabled') == '1' ) {
		form.find('input, textarea').attr('disabled','disabled');
		form.find('.submit-btn').fadeOut('x-slow');
	}

// add some styling classes to comments & password protected forms
	form.find('#submit').addClass('rf-button submit-btn');
	jQuery('.post-password-form').find('input[type="submit"]').addClass('rf-button submit-btn');
	jQuery('.post-password-form').find('input[type="password"]').addClass('rf-input');


/*
***************************************************************
* #Isotope For Blog & Portfolio Pages 
***************************************************************
*/

// hide empty blocks
	function hideEmptyBlocks() {
		jQuery('.post-text-wrap, .media-hovers').each(function() {

			// show at first
			jQuery(this).show();

			var count = 0;

			jQuery(this).children().not('div[class=clear]').each(function() {
				if ( jQuery(this).css('display') !== 'none' ) {
					count += 1;
				}
			});

			// if current block has visible children
			if ( jQuery(this).children().length === 0 || count < 1 ) {
				jQuery(this).hide();
			}

		});		
	}

// remove extra -20 margin from vc_row
	jQuery('#portfolio-container, #blog-container').parent('.vc_row').css({
		'margin-left' : '0',
		'margin-right' : '0'
	});

// remove extra padding from read-more
	var moreInfo = jQuery('.read-more-wrap, .more-info-wrap');

	if ( moreInfo.siblings('.likes-and-comments:visible').length > 0 && moreInfo.css('float') === 'none' ) {
		moreInfo.css( 'padding-top', '15px' );
	} else {
		moreInfo.css( 'padding-top', '0' );
	}

// remove hidden meta separators
	function hideMetaSeps() {

		jQuery('.likes-and-comments, .post-meta-info').each(function() {
			jQuery(this).children().not(':hidden').last().find('.meta-sep').hide();
		});

	}

	hideMetaSeps();

// Stretch Portfolio/Blog Container
	function stretchIsotopeContainer( id ) {

		if ( jQuery(id).hasClass('stretch-container') ) {

			jQuery(id).closest('.vc_row').css({
				'left' 	: '-'+ jQuery('.single-content-wrap').css('padding-left'),
				'width' : jQuery('.inner-content-wrap').outerWidth()
			});

		}

	}

// Grayscale effect
	var pPostMedia = jQuery('.portfolio-post .post-media');

	if ( parseInt( pPostMedia.attr('data-grayscale'), 10 ) === 1 ) {

		pPostMedia.find('img').addClass('grayscale');

		if ( parseInt( pPostMedia.attr('data-grayscale-trans'), 10 ) === 1 ) {
			pPostMedia.find('img').addClass('grayscale-fade');
		}

		pPostMedia.hover(function(){
			jQuery(this).find('img').toggleClass('grayscale-off');
		}, function(){
			jQuery(this).find('img').toggleClass('grayscale-off');
		});

	}


/*
***************************************************************
* #Isotope Filters
***************************************************************
*/

	function isotopeFilters( page ) {

		if ( body.hasClass('onepage-menu') ) {
			var currentFilters = ( page === 'blog' ) ? jQuery('#blog-container').prev('.filters') : jQuery('#portfolio-container').prev('.filters');
		} else {
			if ( body.hasClass('blog') ) {
				if ( page === 'portfolio' ) return;
				var currentFilters = jQuery('.blog .filters');
			} else if ( body.hasClass('page-template-portfolio') ) {
				if ( page === 'blog' ) return;
				var currentFilters = jQuery('.page-template-portfolio .filters');
			} else {
				return;
			}
		}

		// define variables
		var filterItem 		= currentFilters.find('a'),
			filterItemIcon 	= filterItem.find('i'),
			filterClass 	= filterItemIcon.attr('class');

		// reset
		filterItem.parent().show();

		if ( jQuery('.filters').length > 0 && ! body.hasClass('no-isotope') ) {

			// hide empty filters
			var postFilter 	   = '',
				postClass 	   = '',
				metroGridSizer = '';

			// get all post classes
			jQuery('.'+ page +'-post').each(function() {
				postClass += jQuery(this).attr('class');
			});

			// remove spaces
			postClass = postClass.split(' ').join('');

			
			filterItem.each(function() {

				// remove dots
				postFilter = jQuery(this).data('filter').replace( '.', '' );

				// add all category classes to metro grid sizer
				metroGridSizer += ' ' + postFilter;

				// if filter doesn't match any of post class - hide it
				if ( postClass.indexOf(postFilter) == -1 && postFilter != '*' ) {
					jQuery(this).parent().hide();
				}

			});

			// add all category classes to metro grid sizer
			jQuery('.blog-grid-sizer').attr( 'class', 'blog-grid-sizer' + metroGridSizer.replace('*','') );
			jQuery('.portfolio-grid-sizer').attr( 'class', 'portfolio-grid-sizer' + metroGridSizer.replace('*','') );

			// highlight active item
			jQuery('.filters a[data-filter="*"]').find('i').removeClass(filterClass).addClass( filterClass.replace( '-o', '' ) );


			// filter posts
			filterItem.click(function( event ) {

				// detect current grid
				var currentGrid = jQuery(this).closest('ul').next().attr('id');

				// active filter item
				filterItem.removeAttr('class');
				jQuery(this).addClass('rf-button active-filter-item active-state');

				// filter active icons - change icon when filter is active
				filterItemIcon.removeAttr('class');
				filterItemIcon.addClass( filterClass );

				jQuery(this).find('i').removeClass(filterClass).addClass( filterClass.replace( '-o', '' ) );

				// prettyPhoto filtering
				var currnetFilterClass = jQuery(this).data('filter'),
					currnetFilterClass = currnetFilterClass.replace('.', '');

				if ( currnetFilterClass === '*' ) {
					jQuery('#'+ currentGrid +' a[rel*="prettyPhoto"]').attr('rel', 'prettyPhoto[all]');
					jQuery('a[rel*="prettyPhoto"]').prettyPhoto();
				} else {
					jQuery('#'+ currentGrid +' .royal_portfolio_cats-'+ currnetFilterClass +' a[rel*="prettyPhoto"]').attr('rel', 'prettyPhoto['+ currnetFilterClass +']');
					jQuery('a[rel*="prettyPhoto"]').prettyPhoto();
				}

				// Top Filters
				if ( currentGrid === 'portfolio-container' ) {
					jQuery('#portfolio-container').isotope({ filter: jQuery(this).data('filter') });
				} else {
					jQuery('#blog-container').isotope({ filter: jQuery(this).data('filter') });
				}

				// Left Filters
				if ( jQuery(this).closest('section').hasClass('portfolio-filters') ) {
					jQuery('#portfolio-container').isotope({ filter: jQuery(this).data('filter') });
				} else if ( jQuery(this).closest('section').hasClass('blog-filters') ) {
					jQuery('#blog-container').isotope({ filter: jQuery(this).data('filter') });
				}

				setTimeout(function() {
					if ( currentGrid === 'portfolio-container' ) {
						isotopeFn('portfolio');
					} else {
						isotopeFn('blog');
					}
				}, 500);

				event.preventDefault();
			});

		} else {

			var bodyClass = body.attr('class');

			filterItem.each(function() {

				// detect if it is portfolio or blog page
				var prefix = 'term';

				if ( body.hasClass('blog') || body.hasClass('category') ) {
					prefix = 'category';
				}

				var filtersClass = jQuery(this).data('filter').replace( '.', '-' );

				if ( bodyClass.indexOf( prefix + filtersClass) != -1 ) {
					jQuery(this).addClass('active-filter-item active-state');
				}

			});

		}
	} // end isotopeFilters()


/*
***************************************************************
* #Social Sharing Icons
***************************************************************
*/
	function socialSharingIcons( post ) {

		// define
		var shareWrap = jQuery( '.'+ post ).find('.social-share-wrap'),
			share 	  = shareWrap.find('.social-share');

			share.hide();

		// hover
		if ( shareWrap.attr('data-open') === 'hover' ) {

			// hide first
			share.hide();

			// open on hover
			shareWrap.hover(function() {
				jQuery(this).find('.social-share').stop().fadeIn();
			}, function() {
				jQuery(this).find('.social-share').stop().fadeOut();
			});

		// click
		} else if ( shareWrap.attr('data-open') === 'click' ) {

			// hide first
			share.hide();

			// hide when mouse is out
			shareWrap.mouseleave(function() {
				jQuery(this).find('.social-share').stop().fadeOut();
			});

			// show on click
			shareWrap.click(function() {
				jQuery(this).find('.social-share').stop().fadeIn();
			});

		} else {

			shareWrap.children('i').hide();
			share.show();

		}

	}


/*
***************************************************************
* #FitVids - for responsive videos
***************************************************************
*/

	var blogConainer = jQuery('#blog-container');

	function fitVidsFn() {

		if ( blogConainer.data('layout') === 'fitRows' && ( blogConainer.data('aspect-width') !== '' || blogConainer.data('aspect-height') !== '' ) ) {
			jQuery('.video-media').find('iframe').attr('width', blogConainer.data('aspect-width') ).attr('height', blogConainer.data('aspect-height') );
		}

		jQuery('.featured-media, .video-media').fitVids();		

	}


/*
***************************************************************
* #PrettyPhoto Lightbox
***************************************************************
*/

	// add lightbox to VC Single Image
	var vcImgLightbox = jQuery('.vc_single_image-wrapper').parent('a[href*="wp-content/uploads"]');
	vcImgLightbox.attr('rel', 'prettyPhoto');
	vcImgLightbox.attr('data-title', vcImgLightbox.find('img').attr('alt'));

	// add lightbox to Single Content Image with "Media File"
	var wpImgLightbox = jQuery('img[class*="wp-image"]').parent('a[href*="wp-content/uploads"]');
	wpImgLightbox.attr('rel', 'prettyPhoto');
	wpImgLightbox.attr('data-title', wpImgLightbox.find('img').attr('alt'));

	// add lightbox to Essential Grid
	jQuery('.esg-grid').each(function(){
		var gridID = jQuery(this).attr('id');

		jQuery( '#'+ gridID +' a.esgbox').each(function(){
			jQuery(this).attr('rel', 'prettyPhoto[ess_grid-'+ gridID +']').attr('data-title', jQuery(this).attr('lgtitle'));
		});

	});

	// Run Lightbox
	jQuery('a[rel*="prettyPhoto"]').prettyPhoto();


/*
***************************************************************
* #Load More Posts
***************************************************************
*/

	// blog
	jQuery('#blog-container').infinitescroll({
		navSelector  : jQuery('#blog-container').next('.load-more-wrap'),
		nextSelector : jQuery('#blog-container').next('.load-more-wrap').find('a'),
		itemSelector : '.blog-post',
		behavior	 : jQuery('.pagination-wrap').data('behaviour')
	}, function(newElements) {

		// remove loading icon
		jQuery('.load-more-wrap').find('i').remove();

		// append new elements to the DOM
		jQuery('#blog-container').isotope( 'appended', newElements );

		// reinitialize cycle slideshow
		jQuery( '.cycle-slideshow' ).cycle();

		// run functions for correct adjustments
		hideEmptyBlocks();
		isotopeFilters('blog');
		isotopeFilters('portfolio');
		socialSharingIcons('blog-post');
		hideMetaSeps();
		fitVidsFn();

		// isotope
		setTimeout(function() {
			isotopeFn('blog');
		}, 300 );

		// isotope for adjustment
		setTimeout(function() {
			isotopeFn('blog');
		}, 1500 );

		jQuery('.active-filter-item').trigger('click');
		jQuery('a[rel*="prettyPhoto"]').prettyPhoto();

	});


	// portfolio
	jQuery('#portfolio-container').infinitescroll({
		navSelector  : jQuery('#portfolio-container').next('.load-more-wrap'),
		nextSelector : jQuery('#portfolio-container').next('.load-more-wrap').find('a'),
		itemSelector : '.portfolio-post',
		behavior	 : jQuery('.pagination-wrap').data('behaviour')
	}, function(newElements) {

		// remove loading icon
		jQuery('.load-more-wrap').find('i').remove();

		// append new elements to the DOM
		jQuery('#portfolio-container').isotope( 'appended', newElements );

		// reinitialize cycle slideshow
		jQuery( '.cycle-slideshow' ).cycle();

		// run functions for correct adjustments
		hideEmptyBlocks();
		isotopeFilters('blog');
		isotopeFilters('portfolio');
		socialSharingIcons('portfolio-post');
		hideMetaSeps();
		fitVidsFn();

		// isotope
		setTimeout(function() {
			isotopeFn('portfolio');
		}, 300 );

		// isotope for adjustment
		setTimeout(function() {
			isotopeFn('portfolio');
		}, 1500 );

		jQuery('.active-filter-item').trigger('click');
		jQuery('a[rel*="prettyPhoto"]').prettyPhoto();

	});

	// load more button clicker function
	function loadMoreButton( selector ) {

		var pageCount = 1,
			maxPages  = parseInt( selector.find('a').parent().data('max'), 10 );

		selector.find('a').click(function() {

			// append loading icon
			if ( jQuery(this).find('i').length === 0 ) {
				jQuery(this).prepend('<i class="fa fa-'+ jQuery(this).parent().attr('data-load-icon') +' fa-spin"></i>');
				pageCount++;
			}

			if ( maxPages === pageCount ) {
				selector.delay(1500).fadeOut(500);
			}

			// prevent anchor to go to next page
			return false;

		});

	}

	loadMoreButton(jQuery('#portfolio-container').next('.load-more-wrap'));
	loadMoreButton(jQuery('#blog-container').next('.load-more-wrap'));



/*
***************************************************************
* #Run Methods & Functions
***************************************************************
*/

// Sidebar equal to Content 
	sidebarEqual();

// Fixed Sidebar Height
	fixedSidebarHeight();

// Fixed Sidebar Top Width
	sidebarTopWidth();

// Fixed Sidebar Top Height
	sidebarTopHeight();

// Copyright & Socials on Mobile Devices
	mobileCopyAndSoc();

// link and quote height
	linkAndQuoteHeight();

// equal project info
	projectInfoEqual(); 

// Stretch Portfolio/Blog Container
	stretchIsotopeContainer('#portfolio-container');
	stretchIsotopeContainer('#blog-container');

// run isotope functions
	isotopeFn('portfolio');
	isotopeFn('blog');

	setTimeout(function() {
		isotopeFn('portfolio');
		isotopeFn('blog');
	}, 500 );

// isotope filters
	isotopeFilters('blog');
	isotopeFilters('portfolio');

// hide empty blocks
	hideEmptyBlocks();

// FitVids - for responsive videos
	fitVidsFn();

// Social sharing icons on posts 
	socialSharingIcons('blog-post');
	socialSharingIcons('portfolio-post');

// Fix WPML in Footer
	if ( jQuery('#lang_sel_footer').length > 0 ) {
		jQuery('#page-wrap').append(jQuery('#lang_sel_footer').remove());
		jQuery('#lang_sel_footer').css('visibility', 'visible');
	}


/*
***************************************************************
* #Window Events
***************************************************************
*/

// Window resize event 2x times for small bug fixes
	jQuery(window).resize(function() {

		sidebarTopWidth();
		projectInfoEqual();

		// stretch containers
		stretchIsotopeContainer('#portfolio-container');
		stretchIsotopeContainer('#blog-container');

		// small timeout for correct browser window resize
		setTimeout(function() {

			mobileCopyAndSoc();
			fixedSidebarHeight();
			sidebarTopWidth();
			sidebarTopHeight();
			sidebarEqual();
			
			// run isotope function
			isotopeFn('portfolio');
			isotopeFn('blog');

		}, 100);

	});

	jQuery(window).resize(function() {

		// small timeout for correct browser window resize
		setTimeout(function() {

			// run isotope function
			isotopeFn('portfolio');
			isotopeFn('blog');

		}, 100);

	});



}); // end document ready


/*
***************************************************************
* #Window Load Events
***************************************************************
*/

// Window load event
	jQuery(window).on( 'load', function() {

		setTimeout(function() {

			// height fixes
			fixedSidebarHeight();
			sidebarTopWidth();
			sidebarTopHeight();
			sidebarEqual();
			linkAndQuoteHeight();
			projectInfoEqual();

			// small fix for lightbox duplication in cycle2 plugin
			jQuery('.cycle-sentinel a').removeAttr('rel');

			// slider loading
			jQuery('.gallery-slide').show();

			// run isotope function
			isotopeFn('portfolio');
			isotopeFn('blog');

			// OnePage Scroll
			onePageScrolling( window.location.href.split('/') );

			// OnePage Active Menu Item - on load
			if ( body.hasClass('onepage-menu') ) {
				var activeItem = '';

				// add active class
				jQuery('.vc_row').each(function(){
					if ( jQuery('#sidebar-top').offset().top >= (jQuery(this).offset().top - jQuery('#sidebar-top').outerHeight()) ) {
						jQuery('.menu-item').removeClass('current-menu-item');
						activeItem = '';
						activeItem = jQuery(this).attr('id');
					}
				});

				if ( activeItem !== '' ) {
					jQuery('.menu-item a[href="#'+ activeItem +'"]').parent().addClass('current-menu-item');
				} else {
					jQuery('.menu-item a[href="#'+ jQuery('.vc_row').first().attr('id') +'"]').parent().addClass('current-menu-item');
				}
			}

			// fade in main content
			mainWrap.css( 'opacity', '1' );

			// Preloader
			if ( body.hasClass('royal-page-preloader') ) {
				body.removeClass('royal-page-preloader');
				jQuery('.royal-preloader-wrap').fadeOut(jQuery('.royal-preloader-wrap').data('bg-trans'));
			}
		}, 300);

	});


/*
***************************************************************
* #Global Functions
***************************************************************
*/

// fixedSidebarHeight(), small fix for sidebar scroll
	function fixedSidebarHeight() {
		if ( body.hasClass('sidebar-fixed') && body.hasClass('copy-fixed') && CopyAndSoc.css('display') !== 'none' && ! body.hasClass('sidebar-equal') ) {

			var sidebarHeight = jQuery(window).height() - CopyAndSoc.outerHeight();

			// if admin is logged in
			if ( body.hasClass('admin-bar') ) {
				sidebarHeight -= 32;
			}

			sidebar.outerHeight( sidebarHeight );
			sidebar.perfectScrollbar('update');

		}
	}

// calculate width for fixed top sidebar
	function sidebarTopWidth() {
		if ( body.hasClass('sidebar-top-fixed') ) {

			if( parseInt( sidebarTop.attr('data-fullwidth'), 10 ) === 1) {

				sidebarTop.css({
					'left' : '0',
					'max-width' : 'none'
				});

				sidebarTop.children('div').css({
					'width'  : mainWrap.outerWidth() +'px',
					'margin' : '0 auto'
				});

			} else {
				sidebarTop.css( 'width', mainWrap.outerWidth() +'px' );
			}

		}
	}

// calculate height for fixed top sidebar
	function sidebarTopHeight() {


		var outerHeight = parseInt( sidebarTop.outerHeight(), 10 ) + parseInt( sidebarTop.attr('data-margin'), 10 ) - 1;

		if ( body.hasClass('sidebar-top-fixed') ) {

			if ( body.hasClass('page-template-default') && body.hasClass('def-page-margins') ) {
				outerHeight = parseInt( sidebarTop.outerHeight(), 10 );
			}

			sidebarTop.css( 'position', 'fixed' );
			mainWrap.css( 'margin-top', outerHeight +'px' );
		}

	}

// Sidebar equal height to Content (#main-wrap)
	function sidebarEqual() {
		if ( body.hasClass('sidebar-equal') ) {

			// reset heights
			sidebar.css( 'min-height', '' );
			mainWrap.css( 'min-height', '' );

			var sidebarHeight 	 = sidebar.outerHeight(),
				mainWrapHeight 	 = mainWrap.outerHeight(),
				CopyAndSocHeight = CopyAndSoc.outerHeight();

			if ( body.hasClass('copy-fixed') || CopyAndSoc.css('display') === 'none' ) {
				CopyAndSocHeight = 0;
			}

			if ( sidebarHeight > ( mainWrapHeight + CopyAndSocHeight ) ) {
				mainWrap.css( 'min-height', sidebarHeight - CopyAndSocHeight );
			} else {
				sidebar.css( 'min-height', mainWrapHeight + CopyAndSocHeight );
			}

		}
	}

// Link & Quote
	function linkAndQuoteHeight() {
		jQuery('.featured-media').css( 'min-height', jQuery('.featured-media').find('.link-and-quote').outerHeight() );
	}

// project info equal height to portfolio content	
	function projectInfoEqual() {

		// define
		var portfolioSingleHeight = jQuery('.single-wrap').height(),
		 	SingleContentHeight   = jQuery('.single-content-wrap').outerHeight();

		if ( body.hasClass('project-info-equal') ) {
			projectInfo.css( 'min-height', '' );
			projectInfo.css( 'min-height', portfolioSingleHeight +'px' );

			if ( body.hasClass('project-info-below-right') && ! body.hasClass('single-header-below-p') ) {
				projectInfo.css( 'min-height','');
				projectInfo.css( 'min-height', SingleContentHeight +'px' );
			} else if ( body.hasClass('project-info-below-right') && body.hasClass('single-header-below-p') ) {
				projectInfo.css( 'min-height','');
				projectInfo.css( 'min-height', SingleContentHeight + jQuery('.single-header').outerHeight()  +'px' );
			}

		} else {
			projectInfo.css( 'min-height', '' );
		}

	}

	if ( jQuery('.project-description-wrap').length === 0 ) {
		jQuery('.project-details-wrap').addClass('no-project-desc');
	}

// isotope function
	function isotopeFn( page ) {

	// define variables
		var bodyWidth 	= jQuery('#page-wrap').width(),
			container 	= jQuery('#'+ page +'-container'),
			item 		= jQuery('.'+ page +'-post'),
			itemVisible = item.filter(":visible"),
			layout 		= ( container.attr('data-layout') !== '' ) ? container.attr('data-layout') : 'masonry',
			gutterHorz 	= parseInt( container.attr('data-gutter-horz'), 10 ),
			gutterVert 	= parseInt( container.attr('data-gutter-vert'), 10 ),
			columns 	= 0,
			x 			= 0,
			columnsRate = container.attr('data-columns-rate'),
			contWidth 	= Math.floor( container.width() + gutterHorz - 0.3 ),
			postMedia  	= itemVisible.find('.post-media'),
			aspectRatio = parseInt( container.attr('data-aspect-height'), 10 ) / parseInt( container.attr('data-aspect-width'), 10 ),
			maxHieght 	= -1,
			maxTop 		= -1;

	// reset
		item.css('min-height', '');
		postMedia.find('.link-and-quote').css('min-height', '');
		item.removeClass('rf-last-item rf-last-row');

	// Brakepoints

		// Permament 1 column
		if ( columnsRate === "one" ) {
			columns = 1;

		// Permament 2 column
		} else if ( columnsRate === "two" ) {
			columns = 2;

			if( bodyWidth < 600 ) {
				columns = 1;
			}

		// Permament 3 column
		} else if ( columnsRate === "three" ) {
			columns = 3;

			if( bodyWidth < 600 ) {
				columns = 1;
			} else if( bodyWidth <= 900 ) {
				columns = 2;
			}

		// Permament 4 column
		} else if ( columnsRate === "four" ) {
			columns = 4;

			if( bodyWidth < 600 ) {
				columns = 1;
			} else if( bodyWidth <= 900 ) {
				columns = 2;
			}

		// or columns width brakepoints
		} else {

			columnsRate = parseInt( columnsRate, 10 );

			// Viewport 600
			if ( bodyWidth < 600 ) {
				columns = 1;

			// Viewport 900
			} else if ( jQuery('#sidebar, #sidebar-top').css('display') === 'none' ) {
				x = ( columnsRate <= 0 ? 1 : columnsRate );
				columns = 1 + x;

			// Viewport 1250
			} else if ( bodyWidth <= 1250 ) {
				x = ( columnsRate <= 0 ? 0 : columnsRate );
				columns = 2 + x;

			// Viewport 1600
			} else if ( bodyWidth <= 1600 ) {
				columns = 3 + columnsRate;

			// Viewport 1950
			} else if ( bodyWidth <= 1950 ) {
				columns = 4 + columnsRate;

			// Viewport 2300
			} else if ( bodyWidth <= 2300 ) {
				columns = 5 + columnsRate;

			// Viewport 2650
			} else if ( bodyWidth <= 2650 ) {
				columns = 6 + columnsRate;

			// Viewport 3000
			} else if ( bodyWidth <= 3000 ) {
				columns = 7 + columnsRate;

			// Viewport 3350
			} else if ( bodyWidth <= 3350 ) {
				columns = 8 + columnsRate;

			// Viewport 3350+
			} else {
				columns = 9 + columnsRate;
			}
		}

	// set item width
		if ( layout !== 'masonry-metro' ) {
			item.outerWidth( Math.floor( contWidth / columns - gutterHorz ) );
		} else {
			jQuery('.'+ page +'-grid-sizer, .'+ page +'-post.post-width1x').outerWidth( Math.floor( contWidth / 3 - gutterHorz ) );
			jQuery('.'+ page +'-post.post-width2x').outerWidth( Math.floor( contWidth / 3 ) * 2  - gutterHorz);
		}

	// set gutters
		if ( layout === 'fitRows' ) {
			item.css('margin-right', gutterHorz + 'px');
		}

		item.css('margin-bottom', gutterVert + 'px');

	// Link & Quote heights
		if( layout === "fitRows" ) {
			postMedia.find('.link-and-quote, video').css('min-height', postMedia.width() * aspectRatio + 'px');
		}

		// add last class
		itemVisible.last().addClass('rf-last-item');

	// add last row & make all post equal height
		itemVisible.each(function ( index ) {

			// define
			var thisHieght = jQuery(this).outerHeight(),
				thisTop = parseInt( jQuery(this).css('top') , 10 );

			if ( ( index + 1 ) % columns === 0 ) {
				jQuery(this).addClass('rf-last-item');
			}

			// determine max height
			if ( thisHieght > maxHieght ) {
				maxHieght = thisHieght;
			}

			// determine last row
			if ( thisTop > maxTop ) {
				maxTop = thisTop;
			}
			
		});

		if ( layout === 'fitRows' ) {
			itemVisible.each(function() {

				if ( parseInt( jQuery(this).css('top') ) === maxTop  ) {
					jQuery(this).addClass('rf-last-row');
				}

				jQuery(this).css('min-height', maxHieght);

			});
		}

	// define masonry 'columnWidth' option
		var columnWidth = contWidth / columns;

	// metro layout - based on 3 columns masonry 
		if ( layout === 'masonry-metro' ) {
			layout = 'masonry';

			if ( page === 'blog' ) {
				columnWidth = '.blog-grid-sizer';
			} else if ( page === 'portfolio' ) {
				columnWidth = '.portfolio-grid-sizer';
			}
			
		}

	// run isotope on Portfolio & Blog
		container.isotope({
			layoutMode : layout,
			masonry: {
				comlumnWidth: columnWidth,
				gutter: gutterHorz
			}
		});

		// sidebar equal
		sidebarEqual();

	}

// OnePage Scrolling
	function onePageScrolling( id ) {

		if ( body.hasClass('onepage-menu') && body.hasClass('page-template-default') ) {

			if ( id.constructor === Array ) {
				id = id[id.length - 1];
			}

			if ( id.indexOf('#') === - 1 ) {
				return;
			}

			// Calculate destination place
			var destination = jQuery(id).offset().top;

			if ( body.hasClass('sidebar-top-fixed') ) {
				destination -= jQuery('#sidebar-top').outerHeight();
			}

			if ( body.hasClass('admin-bar') ) {
				destination -= 32;
			}

			// Scroll to destination
			jQuery('html, body').animate( { scrollTop : destination }, 1200,'swing' );	

		}

	}

	if ( body.hasClass('onepage-menu') ) {

		// OnePage Active Menu Item - on scroll
		jQuery(window).on( 'scroll', function() {
			jQuery('.vc_row').each(function(){
				if ( jQuery(window).scrollTop() >= (jQuery(this).offset().top - jQuery('#sidebar-top').outerHeight()) ) {
					jQuery('.menu-item').removeClass('current-menu-item');
					jQuery('.menu-item a[href="#'+ jQuery(this).attr('id') +'"]').parent().addClass('current-menu-item');
				}
			});	
		});
		

		// run on menu items click
		jQuery('.menu-item a').click(function(event) {

			// add active class
			jQuery('.menu-item').removeClass('current-menu-item');
			jQuery(this).parent().addClass('current-menu-item');

			// if menu link has #
			if ( jQuery(this.hash).length > 0 ) {
				event.preventDefault();
			} else {
				window.location.href = jQuery('.logo-wrap').attr('href') +'/'+ jQuery(this).attr('href');
			}

			onePageScrolling( jQuery(this).attr('href') );

		});

	}

	// wrap vc elements with left sidebar
	if ( jQuery('#sidebar').length > 0 ) {
		jQuery('.vc_row .rev_slider_wrapper').wrap('<div class="royal-revslider"></div>');
	}