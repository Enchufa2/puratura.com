jQuery(document).ready(function( $ ) {
	"use strict";


/*
***************************************************************
* #Show/hide metaboxes when Page Template is changed
***************************************************************
*/

if ( $('#page_template').length > 0 ) {
	
	// define necessary variables
	var pageTemplates 	 = $('#page_template'),
		selectedTemplate = pageTemplates.val(),
		metaboxes 		 = $('div[id*=_page_options]');
		selectedTemplate = selectedTemplate.replace('/', '');

	// hide all metaboxes
	metaboxes.hide();

	// show active metabox on load
	selectedTemplate = ( selectedTemplate.indexOf('.php') >= 0 ) ? selectedTemplate.slice( 0, -4 ) : selectedTemplate;
	$('#royal_'+ selectedTemplate +'_page_options').show();

	// show active metabox on change
	pageTemplates.change(function() {
		
		// get select value
		selectedTemplate = pageTemplates.val();
		selectedTemplate = selectedTemplate.replace('/', '');

		// hide all metaboxes
		metaboxes.hide();

		// show active metabox on load
		selectedTemplate = ( selectedTemplate.indexOf('.php') >= 0 ) ? selectedTemplate.slice( 0, -4 ) : selectedTemplate;
		$('#royal_'+ selectedTemplate +'_page_options').show();

	});

}


/*
***************************************************************
* #Page Template: Portfolio
***************************************************************
*/

// show/hide custom portfolio categories
var portfolioItemsFrom = $('.folio-items-from'),
	customFolioCats    = $('.custom-folio-cats');

function showHideCats () {
	if ( portfolioItemsFrom.val() === 'custom' ) {
		customFolioCats.show();
	} else {
		customFolioCats.hide();
	}
}

// on load
showHideCats();

// on change
portfolioItemsFrom.change(function() {
	showHideCats();
});


/*
***************************************************************
* #Revolution Slider
***************************************************************
*/

$('#rf_revslider_select').change(function() {

	if ( $(this).val() === 'none' ) {
		$('#rf_revslider_shortcode').val('');
	} else {
		$('#rf_revslider_shortcode').val( '[rev_slider '+ $(this).val() +']' );
	}

});


}); // end dom ready