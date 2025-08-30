jQuery(document).ready(function( $ ) {
    "use strict";


/*
***************************************************************
* This file handles Theme Customizer Live Preview.
* Please Don't Edit/Delete Something. THIS IS VITAL.

***************************************************************
* #Styles
***************************************************************
*/

	wp.customize( 'royal_theme_styles[select]', function( value ) {
		value.bind( function() {

			// append to body
			$('body').append('\
				<div class="style-load">\
					<p>\
						<span>Cufo Theme</span>\
						<br>\
						<span>Loading New Design</span>\
					</p>\
				</div>\
			');	

			// styling
			$('.style-load').css({
				'display' 	 : 'table',
				'position' 	 : 'fixed',
				'top' 		 : '0',
				'left' 		 : '0',
				'z-index' 	 : '999',
				'width' 	 : '100%',
				'height' 	 : '100%',
				'background' : '#fcfcfc',
				'opacity' 	 : '0.97'
			});

			$('.style-load p').css({
				'display' 	 	 : 'table-cell',
				'vertical-align' : 'middle',
				'text-align' 	 : 'center'
			});

			$('.style-load span:first-child').css({
				'font-family' 		: 'Verdana, "Helvetica Neue", Helvetica, sans-serif',
				'font-size'   		: '40px',
				'line-height'   	: '40px',
				'letter-spacing'	: '1px',
				'font-weight' 	  	: 'bold',
				'text-transform' 	: 'uppercase',
				'color' 	  		: '#444'
			});

			$('.style-load span:last-child').css({
				'font-family' 		: 'Verdana, "Helvetica Neue", Helvetica, sans-serif',
				'font-size'   		: '14px',
				'line-height'   	: '26px',
				'letter-spacing'	: '8.9px',
				'display' 	  		: 'inline-block',
				'padding-left'		: '9px',
				'color' 	  		: '#777'
			});	

		} );
	} );



/*
***************************************************************
* #Preloader
***************************************************************
*/

/* ----------------- Preloader General Options ----------------- */

	royalLivePreview( 'preloader', 'db_input', function() {
		royalLoading();
	});



/*
***************************************************************
* #Body
***************************************************************
*/

// define variables
	var body 	 				= $('body'),
		pageWrap 				= $('#page-wrap'),
		body_layout 			= royal_options.body.layout,
		body_max_width 			= royal_options.body.max_width,
		body_align 				= royal_options.body.align,
		body_bg_color			= royal_options.body.bg_color,
		body_bg_grad_angle 		= royal_options.body.bg_grad_angle,
		body_bg_grad_col_1 		= royal_options.body.bg_grad_col_1,
		body_bg_grad_col_1_tr 	= royal_options.body.bg_grad_col_1_tr,
		body_bg_grad_col_1_ps 	= royal_options.body.bg_grad_col_1_ps,
		body_bg_grad_col_2 		= royal_options.body.bg_grad_col_2,
		body_bg_grad_col_2_tr 	= royal_options.body.bg_grad_col_2_tr,
		body_bg_grad_col_2_ps 	= royal_options.body.bg_grad_col_2_ps,
		body_bg_img 			= royal_options.body.bg_img,
		body_bg_img_att 		= royal_options.body.bg_img_att,
		body_bg_img_sz 			= royal_options.body.bg_img_sz,
		body_shad_h				= royal_options.body.shad_h,
		body_shad_v				= royal_options.body.shad_v,
		body_shad_bl			= royal_options.body.shad_bl,
		body_shad_sp			= royal_options.body.shad_sp,
		body_shad_col			= royal_options.body.shad_col,
		body_shad_col_tr		= royal_options.body.shad_col_tr;

	// border 4x live update
	var body_bd_tp = [
			royal_options.body.bd_size_tp,
			royal_options.body.bd_style_tp,
			royal_options.body.bd_col_tp 
		],
		body_bd_rt = [
			royal_options.body.bd_size_rt,
			royal_options.body.bd_style_rt,
			royal_options.body.bd_col_rt
		],
		body_bd_bt = [
			royal_options.body.bd_size_bt,
			royal_options.body.bd_style_bt,
			royal_options.body.bd_col_bt
		],
		body_bd_lt = [
			royal_options.body.bd_size_lt,
			royal_options.body.bd_style_lt,
			royal_options.body.bd_col_lt
		];

/* ----------------- Body General Options ----------------- */

	royalLivePreview( 'body', 'layout', function( nValue ) {

		body_layout = nValue;

		if ( nValue === 'unlimited' ) {

			pageWrap.css({
				'max-width' : 'none',
				'float'		: 'none'
			});

			$('.top-widgets').css({
				'max-width' : 'none',
				'float'		: 'none'
			});

		} else {

			pageWrap.css({
				'max-width' : body_max_width +'px',
				'float'		: body_align +'px'
			});

			$('.top-widgets').css({
				'max-width' : body_max_width +'px',
				'float'		: body_align +'px'
			});

		}

		sidebarTopWidth();
		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();

	});

	royalLivePreview( 'body', 'max_width', function( nValue ) {
		body_max_width = nValue;

		if ( body_layout === 'limited' ) {
			pageWrap.css( 'max-width', body_max_width +'px' );
			$('.top-widgets').css( 'max-width', body_max_width +'px' );

			sidebarTopWidth();
			isotopeFn('portfolio');
			isotopeFn('blog');
			royalSimilarItems();
			projectInfoEqual();
		}
	});

	royalLivePreview( 'body', 'align', function( nValue ) {
		body_align = nValue;
		pageWrap.css( 'float', body_align );
	});


/* ----------------- Body Spacing Options ----------------- */

	royalLivePreview( 'body', 'padding_tp', function( nValue ) {
		body.css( 'padding-top', nValue +'px' );
	});

	royalLivePreview( 'body', 'padding_rt', function( nValue ) {
		body.css( 'padding-right', nValue +'px' );
		$('.top-widgets-bg').css( 'padding-right', nValue +'px' );

		sidebarTopWidth();
		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();

	});

	royalLivePreview( 'body', 'padding_bt', function( nValue ) {
		body.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'body', 'padding_lt', function( nValue ) {
		body.css( 'padding-left', nValue +'px' );
		$('.top-widgets-bg').css( 'padding-left', nValue +'px' );

		sidebarTopWidth();
		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();

	});


/* ----------------- Body Styling Options ----------------- */

	royalLivePreview( 'body', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			body,
			nValue,
			[
				body_bg_color,
				1
			], [
				body_bg_grad_angle,
				body_bg_grad_col_1,
				body_bg_grad_col_1_tr,
				body_bg_grad_col_1_ps,
				body_bg_grad_col_2,
				body_bg_grad_col_2_tr,
				body_bg_grad_col_2_ps,
			], [
				body_bg_img,
				body_bg_img_sz,
				body_bg_img_att
			]
		);

	});

	royalLivePreview( 'body', 'bg_color', function( nValue ) {
		body_bg_color = nValue;
		body.css( 'background-color', body_bg_color );
	});

	royalLivePreview( 'body', 'bg_color', function( nValue ) {
		body_bg_color = nValue;
		body.css( 'background-color', body_bg_color );
	});

	function bodyGradient() {
		body.css({
			'background-image' : royalGradient( [ 
				body_bg_grad_angle,
				body_bg_grad_col_1,
				body_bg_grad_col_1_tr,
				body_bg_grad_col_1_ps,
				body_bg_grad_col_2,
				body_bg_grad_col_2_tr,
				body_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'body', 'bg_grad_angle', function( nValue ) {
		body_bg_grad_angle = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_1', function( nValue ) {
		body_bg_grad_col_1 = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_1_tr', function( nValue ) {
		body_bg_grad_col_1_tr = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_1_ps', function( nValue ) {
		body_bg_grad_col_1_ps = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_2', function( nValue ) {
		body_bg_grad_col_2 = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_2_tr', function( nValue ) {
		body_bg_grad_col_2_tr = nValue;
		bodyGradient();
	});

	royalLivePreview( 'body', 'bg_grad_col_2_ps', function( nValue ) {
		body_bg_grad_col_2_ps = nValue;
		bodyGradient();
	});


	royalLivePreview( 'body', 'bg_img', function( nValue ) {
		body_bg_img = nValue;
		body.css({
			'background-image' : 'url( '+ body_bg_img +' )'
		});
	});

	royalLivePreview( 'body', 'bg_img_sz', function( nValue ) {
		body_bg_img_sz = nValue;
		royalBgImgSize( body, body_bg_img_sz );
	});

	royalLivePreview( 'body', 'bg_img_att', function( nValue ) {
		body_bg_img_att = nValue;
		body.css({
			'background-attachment' : body_bg_img_att
		});
	});

	royalLivePreview( 'body', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( pageWrap, body_bd_tp, body_bd_rt, body_bd_bt, body_bd_lt );

		} else {
			pageWrap.css( 'border', 'none' );
		}

		sidebarTopWidth();
		isotopeFn('portfolio');
		isotopeFn('blog');
		projectInfoEqual();
		royalSimilarItems();
	});

	royalBorderLivePreview( pageWrap, 'body', 'top', body_bd_tp, '' );

	royalBorderLivePreview( pageWrap, 'body', 'right', body_bd_rt, 'sidebarTopWidth isotopeFn projectInfoEqual royalSimilarItems' );

	royalBorderLivePreview( pageWrap, 'body', 'bottom', body_bd_bt, '' );

	royalBorderLivePreview( pageWrap, 'body', 'left', body_bd_lt, 'sidebarTopWidth isotopeFn projectInfoEqual royalSimilarItems' );

	function bodyShadow() {
		pageWrap.css( 'box-shadow', royalShadow( [
			body_shad_h,
			body_shad_v,
			body_shad_bl,
			body_shad_sp,
			body_shad_col,
			body_shad_col_tr,
			''
		] ) );
	}

	royalLivePreview( 'body', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {

			bodyShadow();

		} else {

			pageWrap.css( 'box-shadow', 'none' );	

		}
	});

	royalLivePreview( 'body', 'shad_h', function( nValue ) {
		body_shad_h = nValue;
		bodyShadow();
	});

	royalLivePreview( 'body', 'shad_v', function( nValue ) {
		body_shad_v = nValue;
		bodyShadow();
	});

	royalLivePreview( 'body', 'shad_bl', function( nValue ) {
		body_shad_bl = nValue;
		bodyShadow();
	});

	royalLivePreview( 'body', 'shad_sp', function( nValue ) {
		body_shad_sp = nValue;
		bodyShadow();
	});

	royalLivePreview( 'body', 'shad_col', function( nValue ) {
		body_shad_col = nValue;
		bodyShadow();
	});

	royalLivePreview( 'body', 'shad_col_tr', function( nValue ) {
		body_shad_col_tr = nValue;
		bodyShadow();
	});


// define variables
	var mainWrap 					= $('#main-wrap'),
		content_bg_color			= royal_options.content.bg_color,
		content_bg_color_tr			= royal_options.content.bg_color_tr,
		content_bg_grad_angle 		= royal_options.content.bg_grad_angle,
		content_bg_grad_col_1 		= royal_options.content.bg_grad_col_1,
		content_bg_grad_col_1_tr 	= royal_options.content.bg_grad_col_1_tr,
		content_bg_grad_col_1_ps 	= royal_options.content.bg_grad_col_1_ps,
		content_bg_grad_col_2 	 	= royal_options.content.bg_grad_col_2,
		content_bg_grad_col_2_tr 	= royal_options.content.bg_grad_col_2_tr,
		content_bg_grad_col_2_ps 	= royal_options.content.bg_grad_col_2_ps,
		content_bg_img 				= royal_options.content.bg_img,
		content_bg_img_att 			= royal_options.content.bg_img_att,
		content_bg_img_sz 			= royal_options.content.bg_img_sz;

/* ----------------- Content Spacing Options ----------------- */

	royalLivePreview( 'content', 'padding_tp', function( nValue ) {
		mainWrap.css( 'padding-top', nValue +'px' );
	});

	royalLivePreview( 'content', 'padding_rt', function( nValue ) {
		mainWrap.css( 'padding-right', nValue +'px' );

		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();
	});

	royalLivePreview( 'content', 'padding_bt', function( nValue ) {
		mainWrap.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'content', 'padding_lt', function( nValue ) {
		mainWrap.css( 'padding-left', nValue +'px' );

		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();
	});

	royalLivePreview( 'content', 'section_space', function( nValue ) {
		$('.body-section').css( 'margin-bottom', nValue +'px' );

		sidebarEqual();
		projectInfoEqual();
	});


/* ----------------- Content Styling Options ----------------- */

	royalLivePreview( 'content', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			mainWrap,
			nValue,
			[
				content_bg_color,
				content_bg_color_tr
			], [
				content_bg_grad_angle,
				content_bg_grad_col_1,
				content_bg_grad_col_1_tr,
				content_bg_grad_col_1_ps,
				content_bg_grad_col_2,
				content_bg_grad_col_2_tr,
				content_bg_grad_col_2_ps,
			], [
				content_bg_img,
				content_bg_img_sz,
				content_bg_img_att
			]
		);

	});

	royalLivePreview( 'content', 'bg_color', function( nValue ) {
		content_bg_color = nValue;
		mainWrap.css( 'background-color', royalHex2Rgba( content_bg_color, content_bg_color_tr ) );
	});

	royalLivePreview( 'content', 'bg_color_tr', function( nValue ) {
		content_bg_color_tr = nValue;
		mainWrap.css( 'background-color', royalHex2Rgba( content_bg_color, content_bg_color_tr ) );
	});

	function contentGradient() {
		mainWrap.css({
			'background-image' : royalGradient( [ 
				content_bg_grad_angle,
				content_bg_grad_col_1,
				content_bg_grad_col_1_tr,
				content_bg_grad_col_1_ps,
				content_bg_grad_col_2,
				content_bg_grad_col_2_tr,
				content_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'content', 'bg_grad_angle', function( nValue ) {
		content_bg_grad_angle = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_1', function( nValue ) {
		content_bg_grad_col_1 = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_1_tr', function( nValue ) {
		content_bg_grad_col_1_tr = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_1_ps', function( nValue ) {
		content_bg_grad_col_1_ps = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_2', function( nValue ) {
		content_bg_grad_col_2 = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_2_tr', function( nValue ) {
		content_bg_grad_col_2_tr = nValue;
		contentGradient();
	});

	royalLivePreview( 'content', 'bg_grad_col_2_ps', function( nValue ) {
		content_bg_grad_col_2_ps = nValue;
		contentGradient();
	});


	royalLivePreview( 'content', 'bg_img', function( nValue ) {
		content_bg_img = nValue;
		mainWrap.css({
			'background-image' : 'url( '+ content_bg_img +' )'
		});
	});

	royalLivePreview( 'content', 'bg_img_sz', function( nValue ) {
		content_bg_img_sz = nValue;
		royalBgImgSize( mainWrap, content_bg_img_sz );
	});

	royalLivePreview( 'content', 'bg_img_att', function( nValue ) {
		content_bg_img_att = nValue;
		mainWrap.css({
			'background-attachment' : content_bg_img_att
		});
	});


// define variables
	var innerContent 				= $('.inner-content'),
		inner_content_bg_color 		= royal_options.inner_content.bg_color,
		inner_content_bg_color_tr 	= royal_options.inner_content.bg_color_tr,
		inner_content_link_color	= royal_options.inner_content.link_color,
		inner_content_link_hcolor	= royal_options.inner_content.link_hcolor,
		inner_content_meta_color	= royal_options.inner_content.meta_color,
		inner_content_border_color 	= royal_options.inner_content.border_color,
		inner_content_rad			= royal_options.inner_content.radius,
		inner_content_shad_h		= royal_options.inner_content.shad_h,
		inner_content_shad_v		= royal_options.inner_content.shad_v,
		inner_content_shad_bl		= royal_options.inner_content.shad_bl,
		inner_content_shad_sp		= royal_options.inner_content.shad_sp,
		inner_content_shad_col		= royal_options.inner_content.shad_col,
		inner_content_shad_col_tr	= royal_options.inner_content.shad_col_tr,
		inner_content_shad_in		= royal_options.inner_content.shad_in;

/* ----------------- Inner Content Spacing Options ----------------- */

	royalLivePreview( 'inner_content', 'max_width', function( nValue ) {
		$('.inner-content-wrap').css( 'max-width', nValue +'px' );

		sidebarEqual();
		projectInfoEqual();
		royalSimilarItems();
	});


/* ----------------- Inner Content Spacing Options ----------------- */

	royalLivePreview( 'inner_content', 'padding_tp', function( nValue ) {
		innerContent.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'inner_content', 'padding_rt', function( nValue ) {
		innerContent.css( 'padding-right', nValue +'px' );
		
		sidebarEqual();
		projectInfoEqual();
		royalSimilarItems();
	});

	royalLivePreview( 'inner_content', 'padding_bt', function( nValue ) {
		innerContent.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'inner_content', 'padding_lt', function( nValue ) {
		innerContent.css( 'padding-left', nValue +'px' );
		$('.stacked-caption').css( 'padding-left', nValue +'px' );

		sidebarEqual();
		projectInfoEqual();
		royalSimilarItems();
	});


/* ----------------- Inner Content Styling Options ----------------- */

	royalLivePreview( 'inner_content', 'bg_color', function( nValue ) {
		inner_content_bg_color = nValue;
		innerContent.css( 'background-color', royalHex2Rgba( inner_content_bg_color, inner_content_bg_color_tr ) );
		$('.gallery-slideshow').css( 'background-color', royalHex2Rgba( inner_content_bg_color, inner_content_bg_color_tr ) );
	});

	royalLivePreview( 'inner_content', 'bg_color_tr', function( nValue ) {
		inner_content_bg_color_tr = nValue;
		innerContent.css( 'background-color', royalHex2Rgba( inner_content_bg_color, inner_content_bg_color_tr ) );
		$('.gallery-slideshow').css( 'background-color', royalHex2Rgba( inner_content_bg_color, inner_content_bg_color_tr ) );
	});

	var head_color = [
		'.inner-content h1',
		'.inner-content h2',
		'.inner-content h3',
		'.inner-content h4',
		'.inner-content h5',
		'.inner-content h6'
	];
	head_color = head_color.join( ',' );

	royalLivePreview( 'inner_content', 'head_color', function( nValue ) {
		$( head_color ).not('.similar-items h5, .testimonial-wrap h5').css( 'color', nValue );
	});

	royalLivePreview( 'inner_content', 'text_color', function( nValue ) {
		innerContent.css( 'color', nValue );
		$('.gallery-slideshow .stacked-caption').css( 'color', nValue );
	});

	royalLivePreview( 'inner_content', 'meta_color', function( nValue ) {
		inner_content_meta_color = nValue;
		$('.single-meta, .single-meta a, .single-tags, .single-tags a').css( 'color', nValue );
	});

	innerContent.find('a').not('.previous-post, .next-post, .post-text-wrap a, .post-text-wrap a, .link-wrap a').hover(function() {
		$(this).css( 'color', inner_content_link_hcolor );
	}, function() {
		$(this).css( 'color', inner_content_link_color );
		$('.single-meta a, .single-tags a').css( 'color', inner_content_meta_color );
	});

	royalLivePreview( 'inner_content', 'link_color', function( nValue ) {
		inner_content_link_color = nValue;
		innerContent.find('a').not('.single-meta a, .single-tags a, .previous-post, .next-post, .post-text-wrap a, .link-wrap a').css( 'color', nValue );
		innerContent.find('blockquote').css( 'border-color', nValue );
	});

	royalLivePreview( 'inner_content', 'link_hcolor', function( nValue ) {
		inner_content_link_hcolor = nValue;
		$('.inner-content .post-cont-pagination > span:not(.pagi-label)').css( 'color', nValue );
	});

	var border_color = [
		'.inner-content hr',
		'.inner-content th',
		'.inner-content h3',
		'.inner-content h3 span',
		'.inner-content tr',
		'.inner-content td',
		'.inner-content pre',
		'.inner-content .wp-caption-text',
		'.inner-content .wp-playlist',
		'.gallery-caption',
		'.search-result-thumbnail p',
		'.comments-area',
		'.single-post-sharing',
		'.project-details li',
		'.contact-info li span'
	];
	border_color = border_color.join( ',' );

	royalLivePreview( 'inner_content', 'border_color', function( nValue ) {
		inner_content_border_color = nValue;
		$( border_color ).css( 'border-color', nValue );
	});

	royalLivePreview( 'inner_content', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			$('.inner-content, .single-wrap').css({
				'border-radius' : inner_content_rad + 'px'
			});

		} else {

			$('.inner-content, .single-wrap').css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'inner_content', 'radius', function( nValue ) {
		inner_content_rad = nValue;
		$('.inner-content, .single-wrap').css( 'border-radius', inner_content_rad + 'px' );
	});

	function innerContentShadow() {
		$('.inner-content, .single-wrap').css( 'box-shadow', royalShadow( [
			inner_content_shad_h,
			inner_content_shad_v,
			inner_content_shad_bl,
			inner_content_shad_sp,
			inner_content_shad_col,
			inner_content_shad_col_tr,
			inner_content_shad_in
		] ) );
	}

	royalLivePreview( 'inner_content', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			innerContentShadow();
		} else {
			$('.inner-content, .single-wrap').css( 'box-shadow', 'none' );
		}
	});

	royalLivePreview( 'inner_content', 'shad_h', function( nValue ) {
		inner_content_shad_h = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_v', function( nValue ) {
		inner_content_shad_v = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_bl', function( nValue ) {
		inner_content_shad_bl = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_sp', function( nValue ) {
		inner_content_shad_sp = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_col', function( nValue ) {
		inner_content_shad_col = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_col_tr', function( nValue ) {
		inner_content_shad_col_tr = nValue;
		innerContentShadow();
	});

	royalLivePreview( 'inner_content', 'shad_in', function( nValue ) {
		inner_content_shad_in = nValue;
		innerContentShadow();
	});


/* ----------------- Inner Content Font Options ----------------- */

	royalLivePreview( 'inner_content', 'underline', function( nValue ) {
		if ( nValue === true ) {
			innerContent.find('a').not('.post-text-wrap a').css( 'text-decoration', 'underline' );
		} else {
			innerContent.find('a').not('.post-text-wrap a').css( 'text-decoration', 'none' );
		}
	});



/*
***************************************************************
* #Sidebar
***************************************************************
*/

// define variables
	var sidebar 	 				= $('#sidebar'),
		sidebarMobile 				= $('#sidebar, .m-nav-and-logo'),
		innerSidebar 				= $('.inner-sidebar'),
		sidebar_equal				= royal_options.sidebar.equal,
		sidebar_bg_color			= royal_options.sidebar.bg_color,
		sidebar_bg_color_tr			= royal_options.sidebar.bg_color_tr,
		sidebar_bg_grad_angle 		= royal_options.sidebar.bg_grad_angle,
		sidebar_bg_grad_col_1 		= royal_options.sidebar.bg_grad_col_1,
		sidebar_bg_grad_col_1_tr 	= royal_options.sidebar.bg_grad_col_1_tr,
		sidebar_bg_grad_col_1_ps 	= royal_options.sidebar.bg_grad_col_1_ps,
		sidebar_bg_grad_col_2 		= royal_options.sidebar.bg_grad_col_2,
		sidebar_bg_grad_col_2_tr 	= royal_options.sidebar.bg_grad_col_2_tr,
		sidebar_bg_grad_col_2_ps 	= royal_options.sidebar.bg_grad_col_2_ps,
		sidebar_bg_img 				= royal_options.sidebar.bg_img,
		sidebar_bg_img_att 			= royal_options.sidebar.bg_img_att,
		sidebar_bg_img_sz 			= royal_options.sidebar.bg_img_sz,
		sidebar_shad_h				= royal_options.sidebar.shad_h,
		sidebar_shad_v				= royal_options.sidebar.shad_v,
		sidebar_shad_bl				= royal_options.sidebar.shad_bl,
		sidebar_shad_sp				= royal_options.sidebar.shad_sp,
		sidebar_shad_col			= royal_options.sidebar.shad_col,
		sidebar_shad_col_tr			= royal_options.sidebar.shad_col_tr,
		sidebar_shad_in				= royal_options.sidebar.shad_in;

	// border 4x live update
	var sidebar_bd_tp = [
			royal_options.sidebar.bd_size_tp,
			royal_options.sidebar.bd_style_tp,
			royal_options.sidebar.bd_col_tp 
		],
		sidebar_bd_rt = [
			royal_options.sidebar.bd_size_rt,
			royal_options.sidebar.bd_style_rt,
			royal_options.sidebar.bd_col_rt
		],
		sidebar_bd_bt = [
			royal_options.sidebar.bd_size_bt,
			royal_options.sidebar.bd_style_bt,
			royal_options.sidebar.bd_col_bt
		],
		sidebar_bd_lt = [
			royal_options.sidebar.bd_size_lt,
			royal_options.sidebar.bd_style_lt,
			royal_options.sidebar.bd_col_lt
		];

/* ----------------- General Options ----------------- */

	royalLivePreview( 'sidebar', 'general_position', function() {
		royalLoading();
	});

	function royalSidebarEqualClass()  {
		if ( sidebar_equal === true ) {
			body.removeClass('sidebar-fixed');
			body.addClass('sidebar-equal');

			sidebarEqual();
		} else {
			body.removeClass('sidebar-fixed sidebar-equal');
			
			sidebar.css( 'min-height', '' );
			$('#main-wrap').css( 'min-height', '' );

		}
	}

	royalLivePreview( 'sidebar', 'position', function( nValue ) {
		if ( nValue === 'fixed' ) {

			body.removeClass('sidebar-equal');
			$('#sidebar, #main-wrap').css( 'min-height', '' );
			body.addClass('sidebar-fixed');

			fixedSidebarHeight();
			sidebarEqual();

		} else {

			sidebar.height('');
			royalSidebarEqualClass();

		}
	});

	royalLivePreview( 'sidebar', 'equal', function( nValue ) {
		sidebar_equal = nValue;
		royalSidebarEqualClass();
	});

	royalLivePreview( 'sidebar', 'on_load', function( nValue ) {

		if ( nValue === 'show' ) {

			body.removeClass('sidebar-closed copy-closed');

			isotopeFn('portfolio');
			isotopeFn('blog');
			projectInfoEqual();

		} else {

			body.addClass('sidebar-closed copy-closed');

			isotopeFn('portfolio');
			isotopeFn('blog');
			projectInfoEqual();

		}

		mobileCopyAndSoc();
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'sidebar', 'width', function( nValue ) {

		if ( ! body.hasClass('sidebar-closed') && ! body.hasClass('sidebar-top') ) {

			$('#main-wrap, .copy-and-soc').css( 'margin-left', nValue +'px' );

			$('#sidebar, .copy-fixed .copy-and-soc').css({
				'width' 	  : nValue +'px',
				'margin-left' : '0'
			} );

		}

		isotopeFn('portfolio');
		isotopeFn('blog');
		royalSimilarItems();
		projectInfoEqual();
	});

	royalLivePreview( 'sidebar', 'padding_tp', function( nValue ) {
		innerSidebar.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sidebar', 'padding_rt', function( nValue ) {
		innerSidebar.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sidebar', 'padding_bt', function( nValue ) {
		innerSidebar.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sidebar', 'padding_lt', function( nValue ) {
		innerSidebar.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sidebar', 'section_marg', function( nValue ) {
		$('.sid-block').css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'sidebar', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			sidebarMobile,
			nValue,
			[
				sidebar_bg_color,
				sidebar_bg_color_tr
			], [
				sidebar_bg_grad_angle,
				sidebar_bg_grad_col_1,
				sidebar_bg_grad_col_1_tr,
				sidebar_bg_grad_col_1_ps,
				sidebar_bg_grad_col_2,
				sidebar_bg_grad_col_2_tr,
				sidebar_bg_grad_col_2_ps,
			], [
				sidebar_bg_img,
				sidebar_bg_img_sz,
				sidebar_bg_img_att
			]
		);

	});

	royalLivePreview( 'sidebar', 'bg_color', function( nValue ) {
		sidebar_bg_color = nValue;
		sidebarMobile.css( 'background-color', royalHex2Rgba( sidebar_bg_color, sidebar_bg_color_tr ) );
	});

	royalLivePreview( 'sidebar', 'bg_color_tr', function( nValue ) {
		sidebar_bg_color_tr = nValue;
		sidebarMobile.css( 'background-color', royalHex2Rgba( sidebar_bg_color, sidebar_bg_color_tr ) );
	});

	function sidebarGradient() {
		sidebarMobile.css({
			'background-image' : royalGradient( [ 
				sidebar_bg_grad_angle,
				sidebar_bg_grad_col_1,
				sidebar_bg_grad_col_1_tr,
				sidebar_bg_grad_col_1_ps,
				sidebar_bg_grad_col_2,
				sidebar_bg_grad_col_2_tr,
				sidebar_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'sidebar', 'bg_grad_angle', function( nValue ) {
		sidebar_bg_grad_angle = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_1', function( nValue ) {
		sidebar_bg_grad_col_1 = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_1_tr', function( nValue ) {
		sidebar_bg_grad_col_1_tr = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_1_ps', function( nValue ) {
		sidebar_bg_grad_col_1_ps = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_2', function( nValue ) {
		sidebar_bg_grad_col_2 = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_2_tr', function( nValue ) {
		sidebar_bg_grad_col_2_tr = nValue;
		sidebarGradient();
	});

	royalLivePreview( 'sidebar', 'bg_grad_col_2_ps', function( nValue ) {
		sidebar_bg_grad_col_2_ps = nValue;
		sidebarGradient();
	});


	royalLivePreview( 'sidebar', 'bg_img', function( nValue ) {
		sidebar_bg_img = nValue;
		sidebarMobile.css({
			'background-image' : 'url( '+ sidebar_bg_img +' )'
		});
	});

	royalLivePreview( 'sidebar', 'bg_img_sz', function( nValue ) {
		sidebar_bg_img_sz = nValue;
		royalBgImgSize( sidebarMobile, sidebar_bg_img_sz );
	});

	royalLivePreview( 'sidebar', 'bg_img_att', function( nValue ) {
		sidebar_bg_img_att = nValue;
		sidebarMobile.css({
			'background-attachment' : sidebar_bg_img_att
		});
	});

	royalLivePreview( 'sidebar', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( sidebar, sidebar_bd_tp, sidebar_bd_rt, sidebar_bd_bt, sidebar_bd_lt );
		} else {
			sidebar.css( 'border', 'none' );
		}

		sidebarTopWidth();
		sidebarTopHeight();
		sidebarEqual();

	});

	royalBorderLivePreview( sidebar, 'sidebar', 'top', sidebar_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( sidebar, 'sidebar', 'right', sidebar_bd_rt, 'sidebarTopWidth sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( sidebar, 'sidebar', 'bottom', sidebar_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( sidebar, 'sidebar', 'left', sidebar_bd_lt, 'sidebarTopWidth sidebarEqual sidebarTopHeight' );

	function sidebarShadow() {
		sidebar.css( 'box-shadow', royalShadow( [
			sidebar_shad_h,
			sidebar_shad_v,
			sidebar_shad_bl,
			sidebar_shad_sp,
			sidebar_shad_col,
			sidebar_shad_col_tr,
			sidebar_shad_in
		] ) );
	}

	royalLivePreview( 'sidebar', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			sidebarShadow();
		} else {
			sidebar.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'sidebar', 'shad_h', function( nValue ) {
		sidebar_shad_h = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_v', function( nValue ) {
		sidebar_shad_v = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_bl', function( nValue ) {
		sidebar_shad_bl = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_sp', function( nValue ) {
		sidebar_shad_sp = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_col', function( nValue ) {
		sidebar_shad_col = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_col_tr', function( nValue ) {
		sidebar_shad_col_tr = nValue;
		sidebarShadow();
	});

	royalLivePreview( 'sidebar', 'shad_in', function( nValue ) {
		sidebar_shad_in = nValue;
		sidebarShadow();
	});



// define variables
	var sidebarFoldBTN 	 				= $('.sidebar-fold-btn'),
		sidebarFoldIcon 				= sidebarFoldBTN.find('.fa'),
		sidebar_fold_btn_pos_lt			= royal_options.sidebar_fold_btn.pos_lt,
		sidebar_fold_btn_fpos_lt		= royal_options.sidebar_fold_btn.fpos_lt,
		sidebar_fold_btn_col			= royal_options.sidebar_fold_btn.color,
		sidebar_fold_btn_col_tr			= royal_options.sidebar_fold_btn.col_tr,
		sidebar_fold_btn_txt_col		= royal_options.sidebar_fold_btn.txt_col,
		sidebar_fold_btn_hcol_tr		= royal_options.sidebar_fold_btn.hcol_tr,
		sidebar_fold_btn_hcol			= royal_options.sidebar_fold_btn.hcol,
		sidebar_fold_btn_txt_hcol		= royal_options.sidebar_fold_btn.txt_hcol,
		sidebar_fold_btn_rad			= royal_options.sidebar_fold_btn.radius,
		sidebar_fold_btn_shad_h			= royal_options.sidebar_fold_btn.shad_h,
		sidebar_fold_btn_shad_v			= royal_options.sidebar_fold_btn.shad_v,
		sidebar_fold_btn_shad_bl		= royal_options.sidebar_fold_btn.shad_bl,
		sidebar_fold_btn_shad_sp		= royal_options.sidebar_fold_btn.shad_sp,
		sidebar_fold_btn_shad_col		= royal_options.sidebar_fold_btn.shad_col,
		sidebar_fold_btn_shad_col_tr	= royal_options.sidebar_fold_btn.shad_col_tr,
		sidebar_fold_btn_shad_in		= royal_options.sidebar_fold_btn.shad_in;

/* ----------------- Fold Button General Options ----------------- */

	royalLivePreview( 'sidebar_fold_btn', 'label', function( nValue ) {
		if ( nValue === false ) {
			sidebarFoldBTN.hide();
		} else {
			sidebarFoldBTN.show();
		}
	});

	royalLivePreview( 'sidebar_fold_btn', 'icon', function( nValue ) {
		sidebarFoldIcon.removeAttr('class');
		sidebarFoldIcon.addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'sidebar_fold_btn', 'position', function( nValue ) {
		sidebarFoldBTN.css( 'position', nValue );
	});


/* ----------------- Fold Button Spacing Options ----------------- */

	royalLivePreview( 'sidebar_fold_btn', 'width', function( nValue ) {
		sidebarFoldIcon.css( 'width', nValue +'px' );
	});

	royalLivePreview( 'sidebar_fold_btn', 'height', function( nValue ) {
		sidebarFoldIcon.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});
	});

	royalLivePreview( 'sidebar_fold_btn', 'pos_tp', function( nValue ) {
		sidebarFoldBTN.css( 'margin-top', nValue +'px' );
	});

	function royalSidebarFoldBTNpos() {
		if ( ! body.hasClass('sidebar-closed') ) {
			sidebarFoldBTN.css( 'margin-left', sidebar_fold_btn_pos_lt +'px' );
		} else {
			sidebarFoldBTN.css( 'margin-left', sidebar_fold_btn_fpos_lt +'px' );
		}
	}

	royalLivePreview( 'sidebar_fold_btn', 'pos_lt', function( nValue ) {
		sidebar_fold_btn_pos_lt = nValue;
		royalSidebarFoldBTNpos();

		// click
		sidebarFoldBTN.click(function() {
			royalSidebarFoldBTNpos();
		});
	});

	royalLivePreview( 'sidebar_fold_btn', 'fpos_lt', function( nValue ) {
		sidebar_fold_btn_fpos_lt = nValue;

		royalSidebarFoldBTNpos();

		// click
		sidebarFoldBTN.click(function() {
			royalSidebarFoldBTNpos();
		});
	});


/* ----------------- Fold Button Styling Options ----------------- */

	function sidebarFoldIconHover() {
		sidebarFoldIcon.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( sidebar_fold_btn_hcol, sidebar_fold_btn_hcol_tr ),
				'color' 			: sidebar_fold_btn_txt_hcol
			});

		}, function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( sidebar_fold_btn_col, sidebar_fold_btn_col_tr ),
				'color' 			: sidebar_fold_btn_txt_col
			});

		});
	}

	sidebarFoldIconHover();

	royalLivePreview( 'sidebar_fold_btn', 'color', function( nValue ) {
		sidebar_fold_btn_col = nValue;
		sidebarFoldIcon.css( 'background-color', royalHex2Rgba( sidebar_fold_btn_col, sidebar_fold_btn_col_tr ) );
	});

	royalLivePreview( 'sidebar_fold_btn', 'col_tr', function( nValue ) {
		sidebar_fold_btn_col_tr = nValue;
		sidebarFoldIcon.css( 'background-color', royalHex2Rgba( sidebar_fold_btn_col, sidebar_fold_btn_col_tr ) );
	});

	royalLivePreview( 'sidebar_fold_btn', 'txt_col', function( nValue ) {
		sidebar_fold_btn_txt_col = nValue;
		sidebarFoldIcon.css( 'color', sidebar_fold_btn_txt_col );
	});

	royalLivePreview( 'sidebar_fold_btn', 'hcol', function( nValue ) {
		sidebar_fold_btn_hcol = nValue;
	});

	royalLivePreview( 'sidebar_fold_btn', 'hcol_tr', function( nValue ) {
		sidebar_fold_btn_hcol_tr = nValue;
	});

	royalLivePreview( 'sidebar_fold_btn', 'txt_hcol', function( nValue ) {
		sidebar_fold_btn_txt_hcol = nValue;
	});

	royalLivePreview( 'sidebar_fold_btn', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			sidebarFoldIcon.css({
				'border-radius' : sidebar_fold_btn_rad + '%'
			});

		} else {

			sidebarFoldIcon.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'sidebar_fold_btn', 'radius', function( nValue ) {
		sidebar_fold_btn_rad = nValue;
		sidebarFoldIcon.css( 'border-radius', sidebar_fold_btn_rad + '%' );
	});

	function sidebarFoldIconShadow() {
		sidebarFoldIcon.css( 'box-shadow', royalShadow( [
			sidebar_fold_btn_shad_h,
			sidebar_fold_btn_shad_v,
			sidebar_fold_btn_shad_bl,
			sidebar_fold_btn_shad_sp,
			sidebar_fold_btn_shad_col,
			sidebar_fold_btn_shad_col_tr,
			sidebar_fold_btn_shad_in
		] ) );
	}

	royalLivePreview( 'sidebar_fold_btn', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			sidebarFoldIconShadow();
		} else {
			sidebarFoldIcon.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_h', function( nValue ) {
		sidebar_fold_btn_shad_h = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_v', function( nValue ) {
		sidebar_fold_btn_shad_v = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_bl', function( nValue ) {
		sidebar_fold_btn_shad_bl = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_sp', function( nValue ) {
		sidebar_fold_btn_shad_sp = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_col', function( nValue ) {
		sidebar_fold_btn_shad_col = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_col_tr', function( nValue ) {
		sidebar_fold_btn_shad_col_tr = nValue;
		sidebarFoldIconShadow();
	});

	royalLivePreview( 'sidebar_fold_btn', 'shad_in', function( nValue ) {
		sidebar_fold_btn_shad_in = nValue;
		sidebarFoldIconShadow();
	});


/* ----------------- Fold Button Font Options ----------------- */

	royalLivePreview( 'sidebar_fold_btn', 'txt_sz', function( nValue ) {
		sidebarFoldIcon.css( 'font-size', nValue + 'px' );
	});



// define variables
	var sidebar_scroll_col		= royal_options.sidebar_scroll.color,
		sidebar_scroll_col_tr	= royal_options.sidebar_scroll.col_tr,
		sidebar_scroll_hcol		= royal_options.sidebar_scroll.hcol,
		sidebar_scroll_rad 		= royal_options.sidebar_scroll.rad;

/* ----------------- Scrollbar General Options ----------------- */

	royalLivePreview( 'sidebar_scroll', 'label', function( nValue ) {
		if ( nValue === false ) {
			$('.ps-scrollbar-y-rail').css( 'visibility', 'hidden' );
		} else {
			$('.ps-scrollbar-y-rail').css( 'visibility', 'visible' );
		}
	});


/* ----------------- Scrollbar Spacing Options ----------------- */

	royalLivePreview( 'sidebar_scroll', 'width', function( nValue ) {
		$('.ps-scrollbar-y').css( 'width', nValue +'px' );
		$('.ps-scrollbar-y-rail').css( 'width', nValue +'px' );
	});


/* ----------------- Scrollbar Styling Options ----------------- */

	function royalSidebarScrollHover() {
		$('.ps-scrollbar-y').hover(function() {

			$('.ps-scrollbar-y-rail:hover .ps-scrollbar-y').css( 'background-color', sidebar_scroll_hcol );

		}, function() {

			$('.ps-scrollbar-y').css( 'background-color', royalHex2Rgba( sidebar_scroll_col, sidebar_scroll_col_tr ) );

		});
	}

	royalLivePreview( 'sidebar_scroll', 'color', function( nValue ) {
		sidebar_scroll_col = nValue;
		$('.ps-scrollbar-y').css( 'background-color', royalHex2Rgba( sidebar_scroll_col, sidebar_scroll_col_tr ) );

		royalSidebarScrollHover();
	});

	royalLivePreview( 'sidebar_scroll', 'col_tr', function( nValue ) {
		sidebar_scroll_col_tr = nValue;
		$('.ps-scrollbar-y').css( 'background-color', royalHex2Rgba( sidebar_scroll_col, sidebar_scroll_col_tr ) );

		royalSidebarScrollHover();
	});

	royalLivePreview( 'sidebar_scroll', 'hcol', function( nValue ) {
		sidebar_scroll_hcol = nValue;
		$('.ps-scrollbar-y-rail:hover .ps-scrollbar-y').css( 'background-color', sidebar_scroll_hcol );

		royalSidebarScrollHover();
	});

	royalLivePreview( 'sidebar_scroll', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			$('.ps-scrollbar-y').css({
				'border-radius' : sidebar_scroll_rad + 'px'
			});

		} else {

			$('.ps-scrollbar-y').css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'sidebar_scroll', 'radius', function( nValue ) {
		sidebar_scroll_rad = nValue;
		$('.ps-scrollbar-y').css( 'border-radius', sidebar_scroll_rad + 'px' );
	});



/*
***************************************************************
* #Sidebar Top
***************************************************************
*/

// define variables
	var sidebarTop 	 				= $('#sidebar-top'),
		sidebarTopMobile 			= $('#sidebar-top, .m-nav-and-logo'),
		logoTop						= sidebarTop.find('.logo-and-tagline'),
		navTop						= sidebarTop.find('.top-nav-wrap'),
		sidebar_top_bg_color		= royal_options.sidebar_top.bg_color,
		sidebar_top_bg_color_tr		= royal_options.sidebar_top.bg_color_tr,
		sidebar_top_shad_h			= royal_options.sidebar_top.shad_h,
		sidebar_top_shad_v			= royal_options.sidebar_top.shad_v,
		sidebar_top_shad_bl			= royal_options.sidebar_top.shad_bl,
		sidebar_top_shad_sp			= royal_options.sidebar_top.shad_sp,
		sidebar_top_shad_col		= royal_options.sidebar_top.shad_col,
		sidebar_top_shad_col_tr		= royal_options.sidebar_top.shad_col_tr;

	// border 1x live update
	var sidebar_top_bd_bt = [
			royal_options.sidebar_top.bd_size_bt,
			royal_options.sidebar_top.bd_style_bt,
			royal_options.sidebar_top.bd_col_bt 
		];

/* ----------------- General Options ----------------- */

	royalLivePreview( 'sidebar_top', 'arrange', function( nValue ) {

		if ( nValue === 'horizontal_1' ) {

			logoTop.css( 'float', 'left' );
			navTop.css( 'float', 'right' );

		} else if ( nValue === 'horizontal_2') {

			logoTop.css( 'float', 'right' );
			navTop.css( 'float', 'left' );

		} else {

			logoTop.css( 'float', 'none' );
			navTop.css( 'float', 'none' );

		}

		sidebarTopHeight();

	});

	royalLivePreview( 'sidebar_top', 'position', function( nValue ) {

		if ( nValue === 'fixed' ) {
			body.addClass('sidebar-top-fixed');
		} else {
			body.removeClass('sidebar-top-fixed');
		}

		sidebarTopWidth();
		sidebarTopHeight();
	});

	royalLivePreview( 'sidebar_top', 'fullwidth', function( nValue ) {

		if ( nValue === true ) {
			sidebarTop.attr( 'data-fullwidth', '1' );
		} else {
			sidebarTop.attr( 'data-fullwidth', '0' );
		}
		
		sidebarTopWidth();
		sidebarTopHeight();

	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'sidebar_top', 'padding_tp', function( nValue ) {
		sidebarTop.children('div').css( 'padding-top', nValue +'px' );
		sidebarTopHeight();
	});

	royalLivePreview( 'sidebar_top', 'padding_rt', function( nValue ) {
		sidebarTop.children('div').css( 'padding-right', nValue +'px' );
		sidebarTopHeight();
	});

	royalLivePreview( 'sidebar_top', 'padding_bt', function( nValue ) {
		sidebarTop.children('div').css( 'padding-bottom', nValue +'px' );
		sidebarTopHeight();
	});

	royalLivePreview( 'sidebar_top', 'padding_lt', function( nValue ) {
		sidebarTop.children('div').css( 'padding-left', nValue +'px' );
		sidebarTopHeight();
	});

	royalLivePreview( 'sidebar_top', 'margin_bt', function( nValue ) {
		sidebarTop.css( 'margin-bottom', nValue +'px' );
		sidebarTop.attr( 'data-margin', nValue );
		sidebarTopHeight();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'sidebar_top', 'bg_color', function( nValue ) {
		sidebar_top_bg_color = nValue;
		sidebarTopMobile.css( 'background-color', royalHex2Rgba( sidebar_top_bg_color, sidebar_top_bg_color_tr ) );
	});

	royalLivePreview( 'sidebar_top', 'bg_color_tr', function( nValue ) {
		sidebar_top_bg_color_tr = nValue;
		sidebarTopMobile.css( 'background-color', royalHex2Rgba( sidebar_top_bg_color, sidebar_top_bg_color_tr ) );
	});

	royalLivePreview( 'sidebar_top', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( sidebarTop, 'bottom', sidebar_top_bd_bt );
		} else {
			sidebarTop.css( 'border', 'none' );
		}

		sidebarTopHeight();

	});

	royalBorderLivePreview( sidebarTop, 'sidebar_top', 'bottom', sidebar_top_bd_bt, 'sidebarTopHeight' );

	function sidebarTopShadow() {
		sidebarTop.css( 'box-shadow', royalShadow( [
			sidebar_top_shad_h,
			sidebar_top_shad_v,
			sidebar_top_shad_bl,
			sidebar_top_shad_sp,
			sidebar_top_shad_col,
			sidebar_top_shad_col_tr
		] ) );
	}

	royalLivePreview( 'sidebar_top', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			sidebarTopShadow();
		} else {
			sidebarTop.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'sidebar_top', 'shad_h', function( nValue ) {
		sidebar_top_shad_h = nValue;
		sidebarTopShadow();
	});

	royalLivePreview( 'sidebar_top', 'shad_v', function( nValue ) {
		sidebar_top_shad_v = nValue;
		sidebarTopShadow();
	});

	royalLivePreview( 'sidebar_top', 'shad_bl', function( nValue ) {
		sidebar_top_shad_bl = nValue;
		sidebarTopShadow();
	});

	royalLivePreview( 'sidebar_top', 'shad_sp', function( nValue ) {
		sidebar_top_shad_sp = nValue;
		sidebarTopShadow();
	});

	royalLivePreview( 'sidebar_top', 'shad_col', function( nValue ) {
		sidebar_top_shad_col = nValue;
		sidebarTopShadow();
	});

	royalLivePreview( 'sidebar_top', 'shad_col_tr', function( nValue ) {
		sidebar_top_shad_col_tr = nValue;
		sidebarTopShadow();
	});



/*
***************************************************************
* #Logo
*************************************************************** 
*/

// define variables
	var logoAndTagline 		= $('.logo-and-tagline'),
		logoWrap 			= $('.logo-wrap'),
		logoText 			= $('.logo-text'),
		logo_bg_col			= royal_options.logo.bg_col,
		logo_bg_col_tr		= royal_options.logo.bg_col_tr,
		logo_txt_col		= royal_options.logo.txt_col,
		logo_txt_hcol		= royal_options.logo.txt_hcol,
		logo_radius			= royal_options.logo.radius,
		logo_shad_h			= royal_options.logo.shad_h,
		logo_shad_v			= royal_options.logo.shad_v,
		logo_shad_bl		= royal_options.logo.shad_bl,
		logo_shad_sp		= royal_options.logo.shad_sp,
		logo_shad_col		= royal_options.logo.shad_col,
		logo_shad_col_tr	= royal_options.logo.shad_col_tr,
		logo_shad_in		= royal_options.logo.shad_in,
		logo_txt_shad_h		= royal_options.logo.txt_shad_h,
		logo_txt_shad_v		= royal_options.logo.txt_shad_v,
		logo_txt_shad_bl	= royal_options.logo.txt_shad_bl,
		logo_txt_shad_col	= royal_options.logo.txt_shad_col;

		// border 4x live update
		var logo_bd_tp = [
				royal_options.logo.bd_size_tp,
				royal_options.logo.bd_style_tp,
				royal_options.logo.bd_col_tp 
			],
			logo_bd_rt = [
				royal_options.logo.bd_size_rt,
				royal_options.logo.bd_style_rt,
				royal_options.logo.bd_col_rt
			],
			logo_bd_bt = [
				royal_options.logo.bd_size_bt,
				royal_options.logo.bd_style_bt,
				royal_options.logo.bd_col_bt
			],
			logo_bd_lt = [
				royal_options.logo.bd_size_lt,
				royal_options.logo.bd_style_lt,
				royal_options.logo.bd_col_lt
			];

/* ----------------- General Options ----------------- */

	royalLivePreview( 'logo', 'label', function() {
		royalLoading();
	});

	royalLivePreview( 'logo', 'type', function() {
		royalLoading();
	});

	wp.customize( 'blogname', function( value ) {
		value.bind( function( nValue ) {

			// don't trigger when new design is loading
			if ( $('.style-load').length > 0 ) {
				return;
			}

			logoText.text( nValue );

			sidebarEqual();
			sidebarTopHeight();

		});
	});

	royalLivePreview( 'logo', 'align', function( nValue ) {
		logoAndTagline.css( 'text-align', nValue );
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'logo', 'width', function( nValue ) {
		logoWrap.css( 'max-width', nValue +'px' );
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'padding_tp', function( nValue ) {
		logoAndTagline.css( 'padding-top', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'padding_rt', function( nValue ) {
		logoAndTagline.css( 'padding-right', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'padding_bt', function( nValue ) {
		logoAndTagline.css( 'padding-bottom', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'padding_lt', function( nValue ) {
		logoAndTagline.css( 'padding-left', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'logo', 'bg_col', function( nValue ) {
		logo_bg_col = nValue;
		logoWrap.css( 'background-color', royalHex2Rgba( logo_bg_col, logo_bg_col_tr ) );
	});

	royalLivePreview( 'logo', 'bg_col_tr', function( nValue ) {
		logo_bg_col_tr = nValue;
		logoWrap.css( 'background-color', royalHex2Rgba( logo_bg_col, logo_bg_col_tr ) );
	});

	logoWrap.hover(function() {
		$(this).css( 'color', logo_txt_hcol );
	}, function() {
		$(this).css( 'color', logo_txt_col );
	});

	royalLivePreview( 'logo', 'txt_col', function( nValue ) {
		logo_txt_col = nValue;
		logoWrap.css( 'color', nValue );
	});

	royalLivePreview( 'logo', 'txt_hcol', function( nValue ) {
		logo_txt_hcol = nValue;
	});

	royalLivePreview( 'logo', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( logoWrap, logo_bd_tp, logo_bd_rt, logo_bd_bt, logo_bd_lt );
		} else {
			logoWrap.css( 'border', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});

	royalBorderLivePreview( logoWrap, 'logo', 'top', logo_bd_tp, 'sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( logoWrap, 'logo', 'right', logo_bd_rt, 'sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( logoWrap, 'logo', 'bottom', logo_bd_bt, 'sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( logoWrap, 'logo', 'left', logo_bd_lt, 'sidebarEqual sidebarTopHeight' );

	royalLivePreview( 'logo', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			logoWrap.css({
				'border-radius' : logo_radius + 'px'
			});

		} else {

			logoWrap.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'logo', 'radius', function( nValue ) {
		logo_radius = nValue;
		logoWrap.css( 'border-radius', logo_radius + 'px' );
	});

	function logoShadow() {
		logoWrap.css( 'box-shadow', royalShadow( [
			logo_shad_h,
			logo_shad_v,
			logo_shad_bl,
			logo_shad_sp,
			logo_shad_col,
			logo_shad_col_tr,
			logo_shad_in
		] ) );
	}

	royalLivePreview( 'logo', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			logoShadow();
		} else {
			logoWrap.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'logo', 'shad_h', function( nValue ) {
		logo_shad_h = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_v', function( nValue ) {
		logo_shad_v = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_bl', function( nValue ) {
		logo_shad_bl = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_sp', function( nValue ) {
		logo_shad_sp = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_col', function( nValue ) {
		logo_shad_col = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_col_tr', function( nValue ) {
		logo_shad_col_tr = nValue;
		logoShadow();
	});

	royalLivePreview( 'logo', 'shad_in', function( nValue ) {
		logo_shad_in = nValue;
		logoShadow();
	});


/* ----------------- Font Options ----------------- */

	royalGoogleFontsPreview( 'logo', 'font_family', logoText );

	royalLivePreview( 'logo', 'font_size', function( nValue ) {
		logoText.css( 'font-size', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'line_height', function( nValue ) {
		logoText.css( 'line-height', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'letter_space', function( nValue ) {
		logoText.css( 'letter-spacing', nValue +'px' );
	});

	royalLivePreview( 'logo', 'font_weight', function( nValue ) {
		logoText.css( 'font-weight', nValue );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'logo', 'italic', function( nValue ) {
		if ( nValue === true ) {
			logoText.css( 'font-style', 'italic' );
		} else {
			logoText.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'logo', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			logoText.css( 'text-transform', 'uppercase' );
		} else {
			logoText.css( 'text-transform', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});

	royalLivePreview( 'logo', 'underline', function( nValue ) {
		if ( nValue === true ) {
			logoText.css( 'text-decoration', 'underline' );
		} else {
			logoText.css( 'text-decoration', 'none' );
		}
	});

	royalLivePreview( 'logo', 'line_through', function( nValue ) {
		if ( nValue === true ) {
			logoText.css( 'text-decoration', 'line-through' );
		} else {
			logoText.css( 'text-decoration', 'none' );
		}
	});

	function logoTextShadow() {
		logoText.css( 'text-shadow', royalTextShadow( [
			logo_txt_shad_h,
			logo_txt_shad_v,
			logo_txt_shad_bl,
			logo_txt_shad_col
		] ) );
	}

	royalLivePreview( 'logo', 'txt_shadow_label', function( nValue ) {
		if ( nValue === true ) {
			logoTextShadow();
		} else {
			logoText.css( 'text-shadow', 'none' );	
		}
	});

	royalLivePreview( 'logo', 'txt_shad_h', function( nValue ) {
		logo_txt_shad_h = nValue;
		logoTextShadow();
	});

	royalLivePreview( 'logo', 'txt_shad_v', function( nValue ) {
		logo_txt_shad_v = nValue;
		logoTextShadow();
	});

	royalLivePreview( 'logo', 'txt_shad_bl', function( nValue ) {
		logo_txt_shad_bl = nValue;
		logoTextShadow();
	});

	royalLivePreview( 'logo', 'txt_shad_col', function( nValue ) {
		logo_txt_shad_col = nValue;
		logoTextShadow();
	});




/*
***************************************************************
* #Tagline
*************************************************************** 
*/

// define variables
	var tagline 				= $('.site-tagline'),
		tagline_txt_shad_h		= royal_options.tagline.txt_shad_h,
		tagline_txt_shad_v		= royal_options.tagline.txt_shad_v,
		tagline_txt_shad_bl		= royal_options.tagline.txt_shad_bl,
		tagline_txt_shad_col	= royal_options.tagline.txt_shad_col;

/* ----------------- General Options ----------------- */

	royalLivePreview( 'tagline', 'label', function( nValue ) {

		if ( nValue === true ) {
			tagline.css( 'display', 'block' );
		} else {
			tagline.css( 'display', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});

	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( nValue ) {

			// don't trigger when new design is loading
			if ( $('.style-load').length > 0 ) {
				return;
			}
				
			tagline.text( nValue );

			sidebarEqual();
			sidebarTopHeight();

		});
	});

	royalLivePreview( 'tagline', 'align', function( nValue ) {
		tagline.css( 'text-align', nValue );
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'tagline', 'margin_tp', function( nValue ) {
		tagline.css( 'margin-top', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'tagline', 'color', function( nValue ) {
		tagline.css( 'color', nValue );
	});


/* ----------------- Font Options ----------------- */

	royalGoogleFontsPreview( 'tagline', 'font_family', tagline );

	royalLivePreview( 'tagline', 'font_size', function( nValue ) {
		tagline.css( 'font-size', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'tagline', 'line_height', function( nValue ) {
		tagline.css( 'line-height', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'tagline', 'letter_space', function( nValue ) {
		tagline.css( 'letter-spacing', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'tagline', 'font_weight', function( nValue ) {
		tagline.css( 'font-weight', nValue );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'tagline', 'italic', function( nValue ) {
		if ( nValue === true ) {
			tagline.css( 'font-style', 'italic' );
		} else {
			tagline.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'tagline', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			tagline.css( 'text-transform', 'uppercase' );
		} else {
			tagline.css( 'text-transform', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});

	royalLivePreview( 'tagline', 'underline', function( nValue ) {
		if ( nValue === true ) {
			tagline.css( 'text-decoration', 'underline' );
		} else {
			tagline.css( 'text-decoration', 'none' );
		}
	});

	royalLivePreview( 'tagline', 'line_through', function( nValue ) {
		if ( nValue === true ) {
			tagline.css( 'text-decoration', 'line-through' );
		} else {
			tagline.css( 'text-decoration', 'none' );
		}
	});

	function taglineTextShadow() {
		tagline.css( 'text-shadow', royalTextShadow( [
			tagline_txt_shad_h,
			tagline_txt_shad_v,
			tagline_txt_shad_bl,
			tagline_txt_shad_col
		] ) );
	}

	royalLivePreview( 'tagline', 'txt_shadow_label', function( nValue ) {
		if ( nValue === true ) {
			taglineTextShadow();
		} else {
			tagline.css( 'text-shadow', 'none' );	
		}
	});

	royalLivePreview( 'tagline', 'txt_shad_h', function( nValue ) {
		tagline_txt_shad_h = nValue;
		taglineTextShadow();
	});

	royalLivePreview( 'tagline', 'txt_shad_v', function( nValue ) {
		tagline_txt_shad_v = nValue;
		taglineTextShadow();
	});

	royalLivePreview( 'tagline', 'txt_shad_bl', function( nValue ) {
		tagline_txt_shad_bl = nValue;
		taglineTextShadow();
	});

	royalLivePreview( 'tagline', 'txt_shad_col', function( nValue ) {
		tagline_txt_shad_col = nValue;
		taglineTextShadow();
	});



/*
***************************************************************
* #Menu
*************************************************************** 
*/

// define variables
	var menuTitle 	= $('.menu-title'),
		menuTitleIn = menuTitle.find('span');

	// border 1x live update
	var menu_tt_bd_bt = [
			royal_options.menu_title.bd_size_bt,
			royal_options.menu_title.bd_style_bt,
			royal_options.menu_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'menu_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			menuTitle.css( 'display', 'block' );
		} else {
			menuTitle.css( 'display', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'menu_title', 'text', function( nValue ) {
		menuTitleIn.text( nValue );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'align', function( nValue ) {
		menuTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'menu_title', 'padding_bt', function( nValue ) {
		menuTitleIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'margin_bt', function( nValue ) {
		menuTitleIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'menu_title', 'color', function( nValue ) {
		menuTitle.css( 'color', nValue );
	});


	royalLivePreview( 'menu_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( menuTitleIn, 'bottom', menu_tt_bd_bt );
		} else {
			menuTitleIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( menuTitleIn, 'menu_title', 'bottom', menu_tt_bd_bt, 'sidebarEqual' );

	royalLivePreview( 'menu_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			menuTitleIn.css( 'display', 'block' );
		} else {
			menuTitleIn.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'menu_title', 'font_family', menuTitle );

	royalLivePreview( 'menu_title', 'font_size', function( nValue ) {
		menuTitle.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'line_height', function( nValue ) {
		menuTitle.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'letter_space', function( nValue ) {
		menuTitle.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'font_weight', function( nValue ) {
		menuTitle.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'menu_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			menuTitle.css( 'font-style', 'italic' );
		} else {
			menuTitle.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'menu_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			menuTitle.css( 'text-transform', 'uppercase' );
		} else {
			menuTitle.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});



// define variables
	var menuFoldIcon = $('.menu-fold-icon').find('i');

/* ----------------- Menu Fold Icon Tabs ----------------- */

	royalLivePreview( 'menu_fold', 'db_input', function( nValue ) {
		nValue = nValue.split('___');

		if ( ( body.hasClass('menu-fold-style') && royalGetValue(nValue[0]) === 'false') || 
			 (! body.hasClass('menu-fold-style') && royalGetValue(nValue[0]) === 'true') )
		{
			royalLoading();
		}

		// change icon
		menuFoldIcon.removeAttr('class');
		menuFoldIcon.addClass( 'fa rf-button fa-' + royalGetValue(nValue[1]) );

		// align
		$('.top-nav-wrap').css( 'text-align', royalGetValue(nValue[2]));

		// width & height
		menuFoldIcon.css('width', royalGetValue(nValue[3]) +'px');
		menuFoldIcon.css('height', royalGetValue(nValue[4]) +'px');
		menuFoldIcon.css('line-height', royalGetValue(nValue[4]) +'px');
		menuFoldIcon.css('margin-top', royalGetValue(nValue[5]) +'px');

		// static colors
		menuFoldIcon.css('background-color', royalGetValue(nValue[6]));
		menuFoldIcon.css('color', royalGetValue(nValue[7]));

		// hover colors
		menuFoldIcon.hover(function(){
			$(this).css('background-color', royalGetValue(nValue[8]));
			$(this).css('color', royalGetValue(nValue[9]));			
		},function(){
			$(this).css('background-color', royalGetValue(nValue[6]));
			$(this).css('color', royalGetValue(nValue[7]));			
		});

		// radius
		if ( royalGetValue(nValue[10]) === 'true' ) {
			menuFoldIcon.css('border-radius', royalGetValue(nValue[11]) +'%');
		} else {
			menuFoldIcon.css('border-radius', '0');
		}

		// shadow
		if ( royalGetValue(nValue[12]) === 'true' ) {
			menuFoldIcon.css( 'box-shadow', royalShadow( [
				royalGetValue(nValue[13]),
				royalGetValue(nValue[14]),
				royalGetValue(nValue[15]),
				royalGetValue(nValue[16]),
				royalGetValue(nValue[17]),
				royalGetValue(nValue[18]),
				royalGetValue(nValue[19])
			] ) );
		} else {
			menuFoldIcon.css('box-shadow', 'none');
		}

		// font size
		menuFoldIcon.css('font-size', royalGetValue(nValue[20]) +'px');

	});


/* ----------------- Menu Fold Popup Tabs ----------------- */

	royalLivePreview( 'menu_fold_wrap', 'db_input', function( nValue ) {
		nValue = nValue.split('___');

		// define variables
		var topNavContainer = $('.top-nav-container'),
			topNavOuter = $('.top-nav-outer'),
			topNavWrap = $('.top-nav-wrap');

		// popup fx
		if ( ! topNavContainer.hasClass(royalGetValue(nValue[0])) ) {
			topNavContainer.removeAttr('class').addClass('top-nav-container '+ royalGetValue(nValue[0]));
		}

		if ( royalGetValue(nValue[0]) !== 'tn-fade' ) {
			topNavContainer.removeAttr('style');
			topNavContainer.css({
				'-webkit-transition' : 'all '+ royalGetValue(nValue[1]) +'ms ease-in-out',
				'transition' 		 : 'all '+ royalGetValue(nValue[1]) +'ms ease-in-out',
			});
		} else {
			topNavWrap.attr('data-popup-fx-trans', royalGetValue(nValue[1]));
			topNavContainer.css({
				'-webkit-transition' : 'all 0ms ease-in-out',
				'transition' 		 : 'all 0ms ease-in-out',
			});
		}

		// align
		if ( ( topNavOuter.find('ul').hasClass('top-nav-vertical') && royalGetValue(nValue[2]) === 'horizontal' ) ||
			 ( topNavOuter.find('ul').hasClass('top-nav-horizontal') && royalGetValue(nValue[2]) === 'vertical' ) ) {
			royalLoading();
		}

		// margins
		topNavContainer.css({
			'padding-top' 	 : royalGetValue(nValue[4]) +'px',
			'padding-right'  : royalGetValue(nValue[5]) +'px',
			'padding-bottom' : royalGetValue(nValue[6]) +'px',
			'padding-left' 	 : royalGetValue(nValue[7]) +'px'
		});


		// colors
		topNavOuter.css('background-color', royalHex2Rgba( royalGetValue(nValue[9]), royalGetValue(nValue[10]) ));

		// shadow
		if ( royalGetValue(nValue[11]) === 'true' ) {
			topNavOuter.css( 'box-shadow', royalShadow( [
				royalGetValue(nValue[12]),
				royalGetValue(nValue[13]),
				royalGetValue(nValue[14]),
				royalGetValue(nValue[15]),
				royalGetValue(nValue[16]),
				royalGetValue(nValue[17]),
				royalGetValue(nValue[18])
			] ) );
		} else {
			topNavOuter.css('box-shadow', 'none');
		}

	});



// define variables
	var menuItemsWrap 		 = $('.main-nav li, .top-nav > li, .top-nav-vertical li'),
		menuItems 			 = $('.main-nav li a, .top-nav > li > a, .top-nav-vertical li a'),
		menuItemsMob 		 = $('.main-nav li a, .top-nav > li > a, .top-nav-vertical li a, .mobile-nav li a'),
		menu_it_bg_col		 = royal_options.menu_items.bg_col,
		menu_sub_it_bg_col	 = royal_options.menu_items.sub_bg_col,
		menu_it_bg_col_tr	 = royal_options.menu_items.bg_col_tr,
		menu_it_txt_col		 = royal_options.menu_items.txt_col,
		menu_it_mob_txt_col	 = royal_options.menu_items.mob_txt_col,
		menu_it_bg_hcol		 = royal_options.menu_items.bg_hcol,
		menu_it_bg_hcol_tr	 = royal_options.menu_items.bg_hcol_tr,
		menu_it_txt_hcol	 = royal_options.menu_items.txt_hcol,
		menu_it_mob_txt_hcol = royal_options.menu_items.mob_txt_hcol,
		menu_it_bd_hcol		 = royal_options.menu_items.bd_hcol,
		menu_it_active		 = royal_options.menu_items.active_highlight,
		menu_it_rad			 = royal_options.menu_items.radius,
		menu_it_shad_h		 = royal_options.menu_items.shad_h,
		menu_it_shad_v		 = royal_options.menu_items.shad_v,
		menu_it_shad_bl		 = royal_options.menu_items.shad_bl,
		menu_it_shad_sp		 = royal_options.menu_items.shad_sp,
		menu_it_shad_col	 = royal_options.menu_items.shad_col,
		menu_it_shad_col_tr	 = royal_options.menu_items.shad_col_tr,
		menu_it_shad_in		 = royal_options.menu_items.shad_in;

	// border 4x live update
	var menu_it_bd_tp = [
			royal_options.menu_items.bd_size_tp,
			royal_options.menu_items.bd_style_tp,
			royal_options.menu_items.bd_col_tp 
		],
		menu_it_bd_rt = [
			royal_options.menu_items.bd_size_rt,
			royal_options.menu_items.bd_style_rt,
			royal_options.menu_items.bd_col_rt
		],
		menu_it_bd_bt = [
			royal_options.menu_items.bd_size_bt,
			royal_options.menu_items.bd_style_bt,
			royal_options.menu_items.bd_col_bt
		],
		menu_it_bd_lt = [
			royal_options.menu_items.bd_size_lt,
			royal_options.menu_items.bd_style_lt,
			royal_options.menu_items.bd_col_lt
		];

/* ----------------- Items General Options ----------------- */

	royalLivePreview( 'menu_items', 'sub', function() {
		royalLoading();
	});

	royalLivePreview( 'menu_items', 'label', function( nValue ) {

		if ( nValue === true ) {
			$('.main-nav, .top-nav').css( 'display', 'block' );
		} else {
			$('.main-nav, .top-nav').css( 'display', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});

	royalLivePreview( 'menu_items', 'width', function( nValue ) {
		menuItems.css( 'display', nValue );
	});

	royalLivePreview( 'menu_items', 'align', function( nValue ) {
		menuItemsWrap.css( 'text-align', nValue );
	});

	royalLivePreview( 'menu_items', 'top_align', function( nValue ) {
		$('.top-nav').css( 'text-align', nValue );
	});


/* ----------------- Items Spacing Options ----------------- */

	royalLivePreview( 'menu_items', 'padding_tp', function( nValue ) {
		menuItems.css( 'padding-top', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'padding_rt', function( nValue ) {
		menuItems.css( 'padding-right', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'padding_bt', function( nValue ) {
		menuItems.css( 'padding-bottom', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'padding_lt', function( nValue ) {
		menuItems.css( 'padding-left', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'margin_tp', function( nValue ) {
		menuItemsWrap.css( 'padding-top', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'margin_rt', function( nValue ) {
		menuItemsWrap.css( 'padding-right', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'margin_bt', function( nValue ) {
		menuItemsWrap.css( 'padding-bottom', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'margin_lt', function( nValue ) {
		menuItemsWrap.css( 'padding-left', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});


/* ----------------- Items Styling Options ----------------- */

	var menuActiveItem = '.main-nav li.current-menu-item > a, .top-nav-vertical li.current-menu-item a, .main-nav > li.current-menu-parent > a, .top-nav > li.current-menu-item > a, .top-nav > li.current-menu-parent > a, .top-nav > li.current-menu-ancestor > a';
	function menuActiveItems() {

		if ( menu_it_active === true ) {

			$( menuActiveItem ).css({
				'background-color' 	: royalHex2Rgba( menu_it_bg_hcol, menu_it_bg_hcol_tr ),
				'color' 			: menu_it_txt_hcol,
				'border-color' 		: menu_it_bd_hcol
			});

			$('.mobile-nav li.current-menu-item > a').css( 'color', menu_it_mob_txt_hcol );

		} else {

			$( menuActiveItem ).css({
				'background-color' 	  : royalHex2Rgba( menu_it_bg_col, menu_it_bg_col_tr ),
				'color' 			  : menu_it_txt_col,
				'border-top-color' 	  : menu_it_bd_tp[2],
				'border-right-color'  : menu_it_bd_rt[2],
				'border-bottom-color' : menu_it_bd_bt[2],
				'border-left-color'   : menu_it_bd_lt[2]
			});

			$('.mobile-nav li.current-menu-item > a').css( 'color', menu_it_mob_txt_col );

		}

	}

	function menuItemsHover() {

		menuItemsMob.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( menu_it_bg_hcol, menu_it_bg_hcol_tr ),
				'color' 			: menu_it_txt_hcol,
				'border-color' 		: menu_it_bd_hcol
			});

		}, function() {

			menuItemsMob.css({
				'background-color' 	  : royalHex2Rgba( menu_it_bg_col, menu_it_bg_col_tr ),
				'color' 			  : menu_it_txt_col,
				'border-top-color' 	  : menu_it_bd_tp[2],
				'border-right-color'  : menu_it_bd_rt[2],
				'border-bottom-color' : menu_it_bd_bt[2],
				'border-left-color'   : menu_it_bd_lt[2]
			});

			$('.main-nav .sub-menu li a').css( 'background-color', royalHex2Rgba( menu_sub_it_bg_col, menu_it_bg_col_tr ) );

			menuActiveItems();

		});

		$('.mobile-nav li a').hover(function() {

			$(this).css( 'color', menu_it_mob_txt_hcol );

		}, function() {

			$('.mobile-nav li a').css( 'color', menu_it_mob_txt_col );
			menuActiveItems();

		});
		
	}

	menuItemsHover();
	menuActiveItems();

	royalLivePreview( 'menu_items', 'bg_col', function( nValue ) {
		menu_it_bg_col = nValue;
		menuItemsMob.css( 'background-color', royalHex2Rgba( menu_it_bg_col, menu_it_bg_col_tr ) );
	});

	royalLivePreview( 'menu_items', 'sub_bg_col', function( nValue ) {
		menu_sub_it_bg_col = nValue;
		$('.main-nav .sub-menu li a').css( 'background-color', royalHex2Rgba( menu_sub_it_bg_col, menu_it_bg_col_tr ) );

		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'bg_col_tr', function( nValue ) {
		menu_it_bg_col_tr = nValue;
		menuItemsMob.css( 'background-color', royalHex2Rgba( menu_it_bg_col, menu_it_bg_col_tr ) );

		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'txt_col', function( nValue ) {
		menu_it_txt_col = nValue;
		menuItemsMob.not('.mobile-nav li a').css( 'color', menu_it_txt_col );

		$('.top-nav-close').css( 'color', menu_it_txt_col );
		$('.top-nav-close').hover(function(){
			$(this).css( 'border', '1px solid '+ menu_it_txt_col );
		}, function(){
			$(this).css( 'border', '1px solid transparent' );
		});

		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'mob_txt_col', function( nValue ) {
		menu_it_mob_txt_col = nValue;
		$('.mobile-nav li a').css( 'color', menu_it_mob_txt_col );

		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'bg_hcol', function( nValue ) {
		menu_it_bg_hcol = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'bg_hcol_tr', function( nValue ) {
		menu_it_bg_hcol_tr = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'txt_hcol', function( nValue ) {
		menu_it_txt_hcol = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'mob_txt_hcol', function( nValue ) {
		menu_it_mob_txt_hcol = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'bd_hcol', function( nValue ) {
		menu_it_bd_hcol = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'active_highlight', function( nValue ) {
		menu_it_active = nValue;
		menuActiveItems();
	});

	royalLivePreview( 'menu_items', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( menuItems, menu_it_bd_tp, menu_it_bd_rt, menu_it_bd_bt, menu_it_bd_lt );
		} else {
			menuItems.css( 'border', 'none' );
		}

		menuActiveItems();
		sidebarEqual();
		sidebarTopHeight();

	});

	royalBorderLivePreview( menuItems, 'menu_items', 'top', menu_it_bd_tp, 'menuActiveItems sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( menuItems, 'menu_items', 'right', menu_it_bd_rt, 'menuActiveItems sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( menuItems, 'menu_items', 'bottom', menu_it_bd_bt, 'menuActiveItems sidebarEqual sidebarTopHeight' );

	royalBorderLivePreview( menuItems, 'menu_items', 'left', menu_it_bd_lt, 'menuActiveItems sidebarEqual sidebarTopHeight' );

	royalLivePreview( 'menu_items', 'radius_label', function( nValue ) {
		if ( nValue === true ) {
			menuItems.css({
				'border-radius' : menu_it_rad + 'px'
			});
		} else {
			menuItems.css( 'border-radius', '0' );	
		}
	});

	royalLivePreview( 'menu_items', 'radius', function( nValue ) {
		menu_it_rad = nValue;
		menuItems.css( 'border-radius', menu_it_rad + 'px' );
	});

	function menuItemsShadow() {
		menuItems.css( 'box-shadow', royalShadow( [
			menu_it_shad_h,
			menu_it_shad_v,
			menu_it_shad_bl,
			menu_it_shad_sp,
			menu_it_shad_col,
			menu_it_shad_col_tr,
			menu_it_shad_in
		] ) );
	}

	royalLivePreview( 'menu_items', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			menuItemsShadow();

		} else {
			menuItems.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'menu_items', 'shad_h', function( nValue ) {
		menu_it_shad_h = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_v', function( nValue ) {
		menu_it_shad_v = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_bl', function( nValue ) {
		menu_it_shad_bl = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_sp', function( nValue ) {
		menu_it_shad_sp = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_col', function( nValue ) {
		menu_it_shad_col = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_col_tr', function( nValue ) {
		menu_it_shad_col_tr = nValue;
		menuItemsShadow();
	});

	royalLivePreview( 'menu_items', 'shad_in', function( nValue ) {
		menu_it_shad_in = nValue;
		menuItemsShadow();
	});


/* ----------------- Items Font Options ----------------- */

	royalGoogleFontsPreview( 'menu_items', 'font_family', $('.main-nav li a, .top-nav li a, .mobile-nav li a') );

	royalLivePreview( 'menu_items', 'font_size', function( nValue ) {
		$('.main-nav li a, .top-nav li a').css( 'font-size', nValue +'px' );
		$('.main-nav .sub-menu li a, .top-nav .sub-menu li a').css( 'font-size', ( parseInt( nValue, 10 ) - 1 ) +'px' );
		$('.top-nav-vertical li a').css( 'font-size', ( parseInt( nValue, 10 ) - 3 ) +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'line_height', function( nValue ) {
		$('.main-nav li a, .top-nav li a').css( 'line-height', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'letter_space', function( nValue ) {
		$('.main-nav li a, .top-nav li a').css( 'letter-spacing', nValue +'px' );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'font_weight', function( nValue ) {
		$('.main-nav li a, .top-nav li a').css( 'font-weight', nValue );

		sidebarEqual();
		sidebarTopHeight();
	});

	royalLivePreview( 'menu_items', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.main-nav li a, .top-nav li a').css( 'font-style', 'italic' );
		} else {
			$('.main-nav li a, .top-nav li a').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'menu_items', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.main-nav li a, .top-nav li a').css( 'text-transform', 'uppercase' );
		} else {
			$('.main-nav li a, .top-nav li a').css( 'text-transform', 'none' );
		}

		sidebarEqual();
		sidebarTopHeight();

	});



// define variables
	var subMenuItems 		 = $('.top-nav.top-nav-horizontal .sub-menu li a'),
		subMenuItemsWrap 	 = $('.top-nav.top-nav-horizontal .sub-menu'),
		menu_sub_bg_col		 = royal_options.menu_sub.bg_col,
		menu_sub_txt_col	 = royal_options.menu_sub.txt_col,
		menu_sub_bg_hcol	 = royal_options.menu_sub.bg_hcol,
		menu_sub_txt_hcol	 = royal_options.menu_sub.txt_hcol,
		menu_sub_shad_h		 = royal_options.menu_sub.shad_h,
		menu_sub_shad_v		 = royal_options.menu_sub.shad_v,
		menu_sub_shad_bl	 = royal_options.menu_sub.shad_bl,
		menu_sub_shad_sp	 = royal_options.menu_sub.shad_sp,
		menu_sub_shad_col	 = royal_options.menu_sub.shad_col,
		menu_sub_shad_col_tr = royal_options.menu_sub.shad_col_tr;

	// border 1x live update
	var menu_sub_bd_bt = [
			royal_options.menu_sub.bd_size_bt,
			royal_options.menu_sub.bd_style_bt,
			royal_options.menu_sub.bd_col_bt 
		];

	// wrapper border 1x live update
	var menu_sub_bd_tp = [
			royal_options.menu_sub.bd_size_tp,
			royal_options.menu_sub.bd_style_tp,
			royal_options.menu_sub.bd_col_tp 
		];

/* ----------------- Sub Items Spacing Options ----------------- */

	royalLivePreview( 'menu_sub', 'width', function( nValue ) {
		$('.top-nav.top-nav-horizontal .sub-menu-wrap').css( 'width', nValue +'px' );
		$('.top-nav.top-nav-horizontal .sub-menu .sub-menu-wrap').css( 'left', nValue +'px' );
	});

	royalLivePreview( 'menu_sub', 'top_space', function( nValue ) {
		$('.top-nav.top-nav-horizontal > li > .sub-menu-wrap').css( 'padding-top', nValue +'px' );
	});

	royalLivePreview( 'menu_sub', 'padding_tp', function( nValue ) {
		subMenuItems.css( 'padding-top', nValue +'px' );
	});

	royalLivePreview( 'menu_sub', 'padding_rt', function( nValue ) {
		subMenuItems.css( 'padding-right', nValue +'px' );
	});

	royalLivePreview( 'menu_sub', 'padding_bt', function( nValue ) {
		subMenuItems.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'menu_sub', 'padding_lt', function( nValue ) {
		subMenuItems.css( 'padding-left', nValue +'px' );
	});


/* ----------------- Sub Items Styling Options ----------------- */

	function subMenuActiveItems() {

		if ( menu_it_active === true ) {

			$('.top-nav.top-nav-horizontal .sub-menu li.current-menu-item > a, .top-nav.top-nav-horizontal .sub-menu li.current-menu-parent > a, .top-nav.top-nav-horizontal .sub-menu li.current-menu-ancestor > a').css({
				'background-color' 	: menu_sub_bg_hcol,
				'color' 			: menu_sub_txt_hcol
			});

		} else {

			$('.top-nav.top-nav-horizontal .sub-menu li.current-menu-item > a, .top-nav.top-nav-horizontal .sub-menu li.current-menu-parent > a, .top-nav.top-nav-horizontal .sub-menu li.current-menu-ancestor > a').css({
				'background-color' 	: menu_sub_bg_col,
				'color' 			: menu_sub_txt_col
			});

		}

	}

	function subMenuItemsHover() {

		subMenuItems.hover(function() {

			$(this).css({
				'background-color' 	: menu_sub_bg_hcol,
				'color' 			: menu_sub_txt_hcol
			});

		}, function() {

			subMenuItems.css({
				'background-color' 	: menu_sub_bg_col,
				'color' 			: menu_sub_txt_col
			});

			subMenuActiveItems();

		});

	}

	subMenuItemsHover();
	subMenuActiveItems();

	royalLivePreview( 'menu_sub', 'bg_col', function( nValue ) {
		menu_sub_bg_col = nValue;
		subMenuItems.css( 'background-color', menu_sub_bg_col );
	});

	royalLivePreview( 'menu_sub', 'txt_col', function( nValue ) {
		menu_sub_txt_col = nValue;
		subMenuItems.css( 'color', menu_sub_txt_col );
		subMenuActiveItems();
	});

	royalLivePreview( 'menu_sub', 'bg_hcol', function( nValue ) {
		menu_sub_bg_hcol = nValue;
		subMenuActiveItems();
	});

	royalLivePreview( 'menu_sub', 'txt_hcol', function( nValue ) {
		menu_sub_txt_hcol = nValue;
		subMenuActiveItems();
	});

	royalLivePreview( 'menu_sub', 'border_label', function( nValue ) {
		if ( nValue === true ) {
			royalBorder1x( subMenuItems, 'bottom', menu_sub_bd_bt );
		} else {
			subMenuItems.css( 'border', 'none' );
		}
	});

	royalBorderLivePreview( subMenuItems, 'menu_sub', 'bottom', menu_sub_bd_bt, '' );

	royalLivePreview( 'menu_sub', 'wrap_border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( subMenuItemsWrap, 'top', menu_sub_bd_tp );
		} else {
			subMenuItemsWrap.css( 'border', 'none' );
		}

	});

	royalBorderLivePreview( subMenuItemsWrap, 'menu_sub', 'top', menu_sub_bd_tp, '' );

	function subMenuItemsWrapShadow() {
		subMenuItemsWrap.css( 'box-shadow', royalShadow( [
			menu_sub_shad_h,
			menu_sub_shad_v,
			menu_sub_shad_bl,
			menu_sub_shad_sp,
			menu_sub_shad_col,
			menu_sub_shad_col_tr
		] ) );
	}

	royalLivePreview( 'menu_sub', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			subMenuItemsWrapShadow();
		} else {
			subMenuItemsWrap.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'menu_sub', 'shad_h', function( nValue ) {
		menu_sub_shad_h = nValue;
		subMenuItemsWrapShadow();
	});

	royalLivePreview( 'menu_sub', 'shad_v', function( nValue ) {
		menu_sub_shad_v = nValue;
		subMenuItemsWrapShadow();
	});

	royalLivePreview( 'menu_sub', 'shad_bl', function( nValue ) {
		menu_sub_shad_bl = nValue;
		subMenuItemsWrapShadow();
	});

	royalLivePreview( 'menu_sub', 'shad_sp', function( nValue ) {
		menu_sub_shad_sp = nValue;
		subMenuItemsWrapShadow();
	});

	royalLivePreview( 'menu_sub', 'shad_col', function( nValue ) {
		menu_sub_shad_col = nValue;
		subMenuItemsWrapShadow();
	});

	royalLivePreview( 'menu_sub', 'shad_col_tr', function( nValue ) {
		menu_sub_shad_col_tr = nValue;
		subMenuItemsWrapShadow();
	});



// define variables
	var mobileMenuIcon 			= $('.m-nav-fold i'),
		menu_mobile_bg_color 	= royal_options.menu_mobile.bg_color,
		menu_mobile_bg_color_tr = royal_options.menu_mobile.bg_color_tr;

/* ----------------- Mobile Icon General Options ----------------- */

	royalLivePreview( 'menu_mobile', 'icon', function( nValue ) {
		mobileMenuIcon.removeAttr('class');
		mobileMenuIcon.addClass( 'fa fa-' + nValue );
	});


/* ----------------- Mobile Icon Styling Options ----------------- */

	royalLivePreview( 'menu_mobile', 'bg_color', function( nValue ) {
		menu_mobile_bg_color = nValue;
		mobileMenuIcon.css( 'background-color', royalHex2Rgba( menu_mobile_bg_color, menu_mobile_bg_color_tr ) );
	});

	royalLivePreview( 'menu_mobile', 'bg_color_tr', function( nValue ) {
		menu_mobile_bg_color_tr = nValue;
		mobileMenuIcon.css( 'background-color', royalHex2Rgba( menu_mobile_bg_color, menu_mobile_bg_color_tr ) );
	});

	royalLivePreview( 'menu_mobile', 'text_color', function( nValue ) {
		mobileMenuIcon.css( 'color', nValue );
	});


/* ----------------- Mobile Icon Font Options ----------------- */

	royalLivePreview( 'menu_mobile', 'icon_size', function( nValue ) {
		mobileMenuIcon.css( 'font-size', nValue +'px' );
	});

	royalLivePreview( 'menu_mobile', 'line_height', function( nValue ) {
		mobileMenuIcon.css( 'line-height', nValue +'px' );
	});




/*
***************************************************************
* #Filters
*************************************************************** 
*/

// define variables
	var filtersTitle 	= $('.filters-title'),
		filtersTitleIn 	= filtersTitle.find('span');

	// border 1x live update
	var filters_tt_bd_bt = [
			royal_options.filters_title.bd_size_bt,
			royal_options.filters_title.bd_style_bt,
			royal_options.filters_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'filters_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			filtersTitle.css( 'display', 'block' );
		} else {
			filtersTitle.css( 'display', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'filters_title', 'blog_text', function( nValue ) {

		if ( body.hasClass('blog') ) {
			filtersTitle.find('span').text( nValue );
		}

		sidebarEqual();

	});

	royalLivePreview( 'filters_title', 'folio_text', function( nValue ) {

		if ( body.hasClass('page-template-portfolio-php') ) {
			filtersTitle.find('span').text( nValue );
		}

		sidebarEqual();

	});

	royalLivePreview( 'filters_title', 'align', function( nValue ) {
		filtersTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'filters_title', 'padding_bt', function( nValue ) {
		filtersTitleIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filters_title', 'margin_bt', function( nValue ) {
		filtersTitleIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'filters_title', 'color', function( nValue ) {
		filtersTitle.css( 'color', nValue );
	});


	royalLivePreview( 'filters_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( filtersTitleIn, 'bottom', filters_tt_bd_bt );
		} else {
			filtersTitleIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( filtersTitleIn, 'filters_title', 'bottom', filters_tt_bd_bt, 'sidebarEqual' );

	royalLivePreview( 'filters_title', 'bd_full_width', function( nValue ) {

		if ( nValue === true ) {
			filtersTitleIn.css( 'display', 'block' );
		} else {
			filtersTitleIn.css( 'display', 'inline-block' );
		}

	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'filters_title', 'font_family', filtersTitle );

	royalLivePreview( 'filters_title', 'font_size', function( nValue ) {
		filtersTitle.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filters_title', 'line_height', function( nValue ) {
		filtersTitle.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filters_title', 'letter_space', function( nValue ) {
		filtersTitle.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filters_title', 'font_weight', function( nValue ) {
		filtersTitle.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'filters_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			filtersTitle.css( 'font-style', 'italic' );
		} else {
			filtersTitle.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'filters_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			filtersTitle.css( 'text-transform', 'uppercase' );
		} else {
			filtersTitle.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


// define variables
	var filterItemsWrap 		  = $('.filters li'),
		filterItems 			  = $('.filters li a'),
		filterItemsIcon 		  = filterItems.find('i'),
		filters_it_wrap_bg_col	  = royal_options.filter_items.wrapper_bg_col,
		filters_it_wrap_bg_col_tr = royal_options.filter_items.wrapper_bg_col_tr,
		filters_it_bg_col		  = royal_options.filter_items.bg_col,
		filters_it_bg_col_tr	  = royal_options.filter_items.bg_col_tr,
		filters_it_txt_col		  = royal_options.filter_items.txt_col,
		filters_it_bg_hcol		  = royal_options.filter_items.bg_hcol,
		filters_it_bg_hcol_tr	  = royal_options.filter_items.bg_hcol_tr,
		filters_it_txt_hcol		  = royal_options.filter_items.txt_hcol,
		filters_it_bd_hcol		  = royal_options.filter_items.bd_hcol,
		filters_it_active		  = royal_options.filter_items.active_highlight,
		filters_it_rad			  = royal_options.filter_items.radius,
		filters_it_shad_h		  = royal_options.filter_items.shad_h,
		filters_it_shad_v		  = royal_options.filter_items.shad_v,
		filters_it_shad_bl		  = royal_options.filter_items.shad_bl,
		filters_it_shad_sp		  = royal_options.filter_items.shad_sp,
		filters_it_shad_col		  = royal_options.filter_items.shad_col,
		filters_it_shad_col_tr	  = royal_options.filter_items.shad_col_tr,
		filters_it_shad_in		  = royal_options.filter_items.shad_in;

	// border 4x live update
	var filters_it_bd_tp = [
			royal_options.filter_items.bd_size_tp,
			royal_options.filter_items.bd_style_tp,
			royal_options.filter_items.bd_col_tp 
		],
		filters_it_bd_rt = [
			royal_options.filter_items.bd_size_rt,
			royal_options.filter_items.bd_style_rt,
			royal_options.filter_items.bd_col_rt
		],
		filters_it_bd_bt = [
			royal_options.filter_items.bd_size_bt,
			royal_options.filter_items.bd_style_bt,
			royal_options.filter_items.bd_col_bt
		],
		filters_it_bd_lt = [
			royal_options.filter_items.bd_size_lt,
			royal_options.filter_items.bd_style_lt,
			royal_options.filter_items.bd_col_lt
		];

/* ----------------- Items General Options ----------------- */

	royalLivePreview( 'filter_items', 'isotope', function() {
		royalLoading();
	});

	royalLivePreview( 'filter_items', 'label', function( nValue ) {

		if ( nValue === true ) {
			$('.filters').css( 'display', 'block' );
		} else {
			$('.filters').css( 'display', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'filter_items', 'width', function( nValue ) {
		filterItems.css( 'display', nValue );
	});

	royalLivePreview( 'filter_items', 'align', function( nValue ) {
		$('.filters').css( 'text-align', nValue );
	});

	royalLivePreview( 'filter_items', 'blog_all_text', function( nValue ) {

		if ( body.hasClass('sidebar-top') ) {

			if ( body.hasClass('blog') ) {
				filterItems.first().find('span').text( nValue );
			}

		} else {

			$('.blog-filters li a').first().find('span').text( nValue );

		}

		sidebarEqual();

	});

	royalLivePreview( 'filter_items', 'portfolio_all_text', function( nValue ) {

		if ( body.hasClass('sidebar-top') ) {

			if ( body.hasClass('page-template-portfolio-php') ) {
				filterItems.first().find('span').text( nValue );
			}

		} else {

			$('.portfolio-filters li a').first().find('span').text( nValue );

		}

		sidebarEqual();

	});

	royalLivePreview( 'filter_items', 'icon', function( nValue ) {
		filterItemsIcon.removeAttr('class');
		filterItemsIcon.addClass( 'fa fa-'+ nValue );
		filterItemsClick();
	});

	royalLivePreview( 'filter_items', 'icon_side', function( nValue ) {
		if ( nValue === 'left' ) {

			filterItems.find('i:first-child').show();
			filterItems.find('i:last-child').hide();

		} else {

			filterItems.find('i:first-child').hide();
			filterItems.find('i:last-child').show();

		}
	});


/* ----------------- Items Spacing Options ----------------- */

	royalLivePreview( 'filter_items', 'padding_tp', function( nValue ) {
		filterItems.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'padding_rt', function( nValue ) {
		filterItems.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'padding_bt', function( nValue ) {
		filterItems.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'padding_lt', function( nValue ) {
		filterItems.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'margin_tp', function( nValue ) {
		filterItemsWrap.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'margin_rt', function( nValue ) {
		filterItemsWrap.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'margin_bt', function( nValue ) {
		filterItemsWrap.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'margin_lt', function( nValue ) {
		filterItemsWrap.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Items Styling Options ----------------- */

	royalLivePreview( 'filter_items', 'wrapper_bg_col', function( nValue ) {
		filters_it_wrap_bg_col = nValue;
		$('.sidebar-top .filters').css( 'background-color', royalHex2Rgba( filters_it_wrap_bg_col, filters_it_wrap_bg_col_tr ) );
	});

	royalLivePreview( 'filter_items', 'wrapper_bg_col_tr', function( nValue ) {
		filters_it_wrap_bg_col_tr = nValue;
		$('.sidebar-top .filters').css( 'background-color', royalHex2Rgba( filters_it_wrap_bg_col, filters_it_wrap_bg_col_tr ) );
	});

	function filterActiveItems() {

		if ( filters_it_active === true &&  $('.filters a').length > 0 ) {

			$('.filters li a.active-state').addClass('active-filter-item');
			$('.filters li a.active-filter-item').css({
				'background-color' 	: royalHex2Rgba( filters_it_bg_hcol, filters_it_bg_hcol_tr ),
				'color' 			: filters_it_txt_hcol,
				'border-color' 		: filters_it_bd_hcol
			});

			var filterClass	= $('.filters a').find('i').attr('class');

			$('.filters li a.active-filter-item').find('i').removeClass(filterClass).addClass( filterClass.replace( '-o', '' ) );	

		} else {

			$('.filters li a').removeClass('active-filter-item');

			$('.filters li a').css({
				'background-color'	  : royalHex2Rgba( filters_it_bg_col, filters_it_bg_col_tr ),
				'color' 			  : filters_it_txt_col,
				'border-top-color' 	  : filters_it_bd_tp[2],
				'border-right-color'  : filters_it_bd_rt[2],
				'border-bottom-color' : filters_it_bd_bt[2],
				'border-left-color'   : filters_it_bd_lt[2]
			});

		}

	}

	function filterItemsClick() {

		// define variables
		var filterItem 		= $('.filters a'),
			filterItemIcon 	= filterItem.find('i'),
			filterClass 	= filterItemIcon.attr('class');

		// filter posts
		filterItem.click(function( event ) {

			// active filter item
			filterItem.removeAttr('class');
			$(this).addClass('rf-button active-filter-item active-state');

			if ( filters_it_active === true ) {

				filterItems.css({
					'background-color' 	  : royalHex2Rgba( filters_it_bg_col, filters_it_bg_col_tr ),
					'color' 			  : filters_it_txt_col,
					'border-top-color' 	  : filters_it_bd_tp[2],
					'border-right-color'  : filters_it_bd_rt[2],
					'border-bottom-color' : filters_it_bd_bt[2],
					'border-left-color'   : filters_it_bd_lt[2]
				});

				filterActiveItems();	

			} else {

				$(this).css({
					'background-color' 	: royalHex2Rgba( filters_it_bg_hcol, filters_it_bg_hcol_tr ),
					'color' 			: filters_it_txt_hcol,
					'border-color' 		: filters_it_bd_hcol
				});

			}

			// filter active icons - change icon when filter is active
			filterItemIcon.removeAttr('class');
			filterItemIcon.addClass( filterClass );

			$(this).find('i').removeClass(filterClass).addClass( filterClass.replace( '-o', '' ) );

			// prevent default behaviour
			event.preventDefault();

		});

	} // end filterItemsClick()

	function filterItemsHover() {

		filterItems.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( filters_it_bg_hcol, filters_it_bg_hcol_tr ),
				'color' 			: filters_it_txt_hcol,
				'border-color' 		: filters_it_bd_hcol
			});

			$(this).find('i.fa-royal-vbar, i.fa-royal-slash').css( 'color', filters_it_txt_col );

		}, function() {

			filterItems.css({
				'background-color' 	  : royalHex2Rgba( filters_it_bg_col, filters_it_bg_col_tr ),
				'color' 			  : filters_it_txt_col,
				'border-top-color' 	  : filters_it_bd_tp[2],
				'border-right-color'  : filters_it_bd_rt[2],
				'border-bottom-color' : filters_it_bd_bt[2],
				'border-left-color'   : filters_it_bd_lt[2]
			});

			$(this).find('i.fa-royal-vbar, i.fa-royal-slash').css( 'color', filters_it_txt_col );

			filterActiveItems();

		});

	} // end filterItemsHover()

	filterItemsHover();
	filterItemsClick();


	royalLivePreview( 'filter_items', 'bg_col', function( nValue ) {
		filters_it_bg_col = nValue;
		filterItems.css( 'background-color', royalHex2Rgba( filters_it_bg_col, filters_it_bg_col_tr ) );
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'bg_col_tr', function( nValue ) {
		filters_it_bg_col_tr = nValue;
		filterItems.css( 'background-color', royalHex2Rgba( filters_it_bg_col, filters_it_bg_col_tr ) );
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'txt_col', function( nValue ) {
		filters_it_txt_col = nValue;
		filterItems.css( 'color', filters_it_txt_col );
		filterItems.find('i.fa-royal-vbar, i.fa-royal-slash').css( 'color', filters_it_txt_col );
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'bg_hcol', function( nValue ) {
		filters_it_bg_hcol = nValue;
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'bg_hcol_tr', function( nValue ) {
		filters_it_bg_hcol_tr = nValue;
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'txt_hcol', function( nValue ) {
		filters_it_txt_hcol = nValue;
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'bd_hcol', function( nValue ) {
		filters_it_bd_hcol = nValue;
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'active_highlight', function( nValue ) {
		filters_it_active = nValue;
		filterActiveItems();
	});

	royalLivePreview( 'filter_items', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( filterItems, filters_it_bd_tp, filters_it_bd_rt, filters_it_bd_bt, filters_it_bd_lt );
		} else {
			filterItems.css( 'border', 'none' );
		}

		filterActiveItems();
		sidebarEqual();

	});

	royalBorderLivePreview( filterItems, 'filter_items', 'top', filters_it_bd_tp, 'filterActiveItems sidebarEqual' );

	royalBorderLivePreview( filterItems, 'filter_items', 'right', filters_it_bd_rt, 'filterActiveItems sidebarEqual' );

	royalBorderLivePreview( filterItems, 'filter_items', 'bottom', filters_it_bd_bt, 'filterActiveItems sidebarEqual' );

	royalBorderLivePreview( filterItems, 'filter_items', 'left', filters_it_bd_lt, 'filterActiveItems sidebarEqual' );

	royalLivePreview( 'filter_items', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			filterItems.css({
				'border-radius' : filters_it_rad + 'px'
			});

		} else {

			filterItems.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'filter_items', 'radius', function( nValue ) {
		filters_it_rad = nValue;
		filterItems.css( 'border-radius', filters_it_rad + 'px' );
	});

	function filterItemsShadow() {
		filterItems.css( 'box-shadow', royalShadow( [
			filters_it_shad_h,
			filters_it_shad_v,
			filters_it_shad_bl,
			filters_it_shad_sp,
			filters_it_shad_col,
			filters_it_shad_col_tr,
			filters_it_shad_in
		] ) );
	}

	royalLivePreview( 'filter_items', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			filterItemsShadow();
		} else {
			filterItems.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'filter_items', 'shad_h', function( nValue ) {
		filters_it_shad_h = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_v', function( nValue ) {
		filters_it_shad_v = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_bl', function( nValue ) {
		filters_it_shad_bl = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_sp', function( nValue ) {
		filters_it_shad_sp = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_col', function( nValue ) {
		filters_it_shad_col = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_col_tr', function( nValue ) {
		filters_it_shad_col_tr = nValue;
		filterItemsShadow();
	});

	royalLivePreview( 'filter_items', 'shad_in', function( nValue ) {
		filters_it_shad_in = nValue;
		filterItemsShadow();
	});


/* ----------------- Items Font Options ----------------- */

	royalGoogleFontsPreview( 'filter_items', 'font_family', filterItems );

	royalLivePreview( 'filter_items', 'font_size', function( nValue ) {
		filterItems.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'line_height', function( nValue ) {
		filterItems.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'letter_space', function( nValue ) {
		filterItems.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'font_weight', function( nValue ) {
		filterItems.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'filter_items', 'italic', function( nValue ) {
		if ( nValue === true ) {
			filterItems.css( 'font-style', 'italic' );
		} else {
			filterItems.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'filter_items', 'uppercase', function( nValue ) {
		if ( nValue === true ) {
			filterItems.css( 'text-transform', 'uppercase' );
		} else {
			filterItems.css( 'text-transform', 'none' );
		}

		sidebarEqual();
	});



/*
***************************************************************
* #Page Header
***************************************************************
*/

// define variables
	var pageHeader 	 				 = $('.page-header'),
		pageHeaderTT				 = pageHeader.find('h1'),
		pageHeaderSTT				 = pageHeader.find('p'),
		blogPageHeader 	 			 = $('.blog-page-header'),
		blogPageHeaderTT			 = blogPageHeader.find('h1'),
		blogPageHeaderSTT			 = blogPageHeader.find('p'),
		portfolioPageHeader 	 	 = $('.portfolio-page-header'),
		portfolioPageHeaderTT		 = portfolioPageHeader.find('h1'),
		portfolioPageHeaderSTT		 = portfolioPageHeader.find('p'),
		contactPageHeader 	 		 = $('.contact-page-header'),
		contactPageHeaderTT			 = contactPageHeader.find('h1'),
		contactPageHeaderSTT		 = contactPageHeader.find('p'),
		blog_header_title			 = royal_options.page_header.blog_title,
		blog_header_subtitle		 = royal_options.page_header.blog_subtitle,
		portfolio_header_title		 = royal_options.page_header.portfolio_title,
		portfolio_header_subtitle	 = royal_options.page_header.portfolio_subtitle,
		contact_header_title		 = royal_options.page_header.contact_title,
		contact_header_subtitle		 = royal_options.page_header.contact_subtitle,
		page_header_bg_color		 = royal_options.page_header.bg_color,
		page_header_bg_color_tr		 = royal_options.page_header.bg_color_tr,
		page_header_bg_grad_angle 	 = royal_options.page_header.bg_grad_angle,
		page_header_bg_grad_col_1 	 = royal_options.page_header.bg_grad_col_1,
		page_header_bg_grad_col_1_tr = royal_options.page_header.bg_grad_col_1_tr,
		page_header_bg_grad_col_1_ps = royal_options.page_header.bg_grad_col_1_ps,
		page_header_bg_grad_col_2 	 = royal_options.page_header.bg_grad_col_2,
		page_header_bg_grad_col_2_tr = royal_options.page_header.bg_grad_col_2_tr,
		page_header_bg_grad_col_2_ps = royal_options.page_header.bg_grad_col_2_ps,
		page_header_bg_img 			 = royal_options.page_header.bg_img,
		page_header_bg_img_att 		 = royal_options.page_header.bg_img_att,
		page_header_bg_img_sz 		 = royal_options.page_header.bg_img_sz,
		page_header_rad				 = royal_options.page_header.radius,
		page_header_shad_h			 = royal_options.page_header.shad_h,
		page_header_shad_v			 = royal_options.page_header.shad_v,
		page_header_shad_bl			 = royal_options.page_header.shad_bl,
		page_header_shad_sp			 = royal_options.page_header.shad_sp,
		page_header_shad_col		 = royal_options.page_header.shad_col,
		page_header_shad_col_tr		 = royal_options.page_header.shad_col_tr,
		page_header_shad_in			 = royal_options.page_header.shad_in;

	// border 4x live update
	var page_header_bd_tp = [
			royal_options.page_header.bd_size_tp,
			royal_options.page_header.bd_style_tp,
			royal_options.page_header.bd_col_tp 
		],
		page_header_bd_rt = [
			royal_options.page_header.bd_size_rt,
			royal_options.page_header.bd_style_rt,
			royal_options.page_header.bd_col_rt
		],
		page_header_bd_bt = [
			royal_options.page_header.bd_size_bt,
			royal_options.page_header.bd_style_bt,
			royal_options.page_header.bd_col_bt
		],
		page_header_bd_lt = [
			royal_options.page_header.bd_size_lt,
			royal_options.page_header.bd_style_lt,
			royal_options.page_header.bd_col_lt
		];

/* ----------------- Header Block Spacing Options ----------------- */

	royalLivePreview( 'page_header', 'label', function() {
		royalLoading();
	});

	royalLivePreview( 'page_header', 'blog_title', function( nValue ) {

		blog_header_title = nValue;

		if ( blog_header_title !== '' || blog_header_subtitle !== '' ) {
			blogPageHeader.show();
		} else {
			blogPageHeader.hide();
		}

		if ( nValue === '' ) {
			blogPageHeaderTT.hide();
		} else {
			blogPageHeaderTT.show();
		}

		blogPageHeaderTT.text( nValue );

		sidebarEqual();

	});

	royalLivePreview( 'page_header', 'blog_subtitle', function( nValue ) {

		blog_header_subtitle = nValue;

		if ( blog_header_title !== '' || blog_header_subtitle !== '' ) {
			blogPageHeader.show();
		} else {
			blogPageHeader.hide();
		}

		if ( nValue === '' ) {
			blogPageHeaderSTT.hide();
		} else {
			blogPageHeaderSTT.show();
		}

		blogPageHeaderSTT.text( nValue );

		sidebarEqual();
	});

	royalLivePreview( 'page_header', 'portfolio_title', function( nValue ) {

		portfolio_header_title = nValue;

		if ( portfolio_header_title !== '' || portfolio_header_subtitle !== '' ) {
			portfolioPageHeader.show();
		} else {
			portfolioPageHeader.hide();
		}

		if ( nValue === '' ) {
			portfolioPageHeaderTT.hide();
		} else {
			portfolioPageHeaderTT.show();
		}

		portfolioPageHeaderTT.text( nValue );

		sidebarEqual();

	});

	royalLivePreview( 'page_header', 'portfolio_subtitle', function( nValue ) {

		portfolio_header_subtitle = nValue;

		if ( portfolio_header_title !== '' || portfolio_header_subtitle !== '' ) {
			portfolioPageHeader.show();
		} else {
			portfolioPageHeader.hide();
		}

		if ( nValue === '' ) {
			portfolioPageHeaderSTT.hide();
		} else {
			portfolioPageHeaderSTT.show();
		}

		portfolioPageHeaderSTT.text( nValue );

		sidebarEqual();

	});

	royalLivePreview( 'page_header', 'contact_title', function( nValue ) {

		contact_header_title = nValue;

		if ( contact_header_title !== '' || contact_header_subtitle !== '' ) {
			contactPageHeader.show();
		} else {
			contactPageHeader.hide();
		}

		if ( nValue === '' ) {
			contactPageHeaderTT.hide();
		} else {
			contactPageHeaderTT.show();
		}

		contactPageHeaderTT.text( nValue );

		sidebarEqual();

	});

	royalLivePreview( 'page_header', 'contact_subtitle', function( nValue ) {

		contact_header_subtitle = nValue;

		if ( contact_header_title !== '' || contact_header_subtitle !== '' ) {
			contactPageHeader.show();
		} else {
			contactPageHeader.hide();
		}

		if ( nValue === '' ) {
			contactPageHeaderSTT.hide();
		} else {
			contactPageHeaderSTT.show();
		}

		contactPageHeaderSTT.text( nValue );

		sidebarEqual();
	});


/* ----------------- Header Block Spacing Options ----------------- */

	royalLivePreview( 'page_header', 'padding_tp', function( nValue ) {
		pageHeader.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header', 'padding_rt', function( nValue ) {
		pageHeader.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header', 'padding_bt', function( nValue ) {
		pageHeader.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header', 'padding_lt', function( nValue ) {
		pageHeader.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Header Block Styling Options ----------------- */

	royalLivePreview( 'page_header', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			pageHeader,
			nValue,
			[
				page_header_bg_color,
				page_header_bg_color_tr
			], [
				page_header_bg_grad_angle,
				page_header_bg_grad_col_1,
				page_header_bg_grad_col_1_tr,
				page_header_bg_grad_col_1_ps,
				page_header_bg_grad_col_2,
				page_header_bg_grad_col_2_tr,
				page_header_bg_grad_col_2_ps,
			], [
				page_header_bg_img,
				page_header_bg_img_sz,
				page_header_bg_img_att
			]
		);

	});

	royalLivePreview( 'page_header', 'bg_color', function( nValue ) {
		page_header_bg_color = nValue;
		pageHeader.css( 'background-color', royalHex2Rgba( page_header_bg_color, page_header_bg_color_tr ) );
	});

	royalLivePreview( 'page_header', 'bg_color_tr', function( nValue ) {
		page_header_bg_color_tr = nValue;
		pageHeader.css( 'background-color', royalHex2Rgba( page_header_bg_color, page_header_bg_color_tr ) );
	});

	function pageHeaderGradient() {
		pageHeader.css({
			'background-image' : royalGradient( [ 
				page_header_bg_grad_angle,
				page_header_bg_grad_col_1,
				page_header_bg_grad_col_1_tr,
				page_header_bg_grad_col_1_ps,
				page_header_bg_grad_col_2,
				page_header_bg_grad_col_2_tr,
				page_header_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'page_header', 'bg_grad_angle', function( nValue ) {
		page_header_bg_grad_angle = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_1', function( nValue ) {
		page_header_bg_grad_col_1 = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_1_tr', function( nValue ) {
		page_header_bg_grad_col_1_tr = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_1_ps', function( nValue ) {
		page_header_bg_grad_col_1_ps = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_2', function( nValue ) {
		page_header_bg_grad_col_2 = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_2_tr', function( nValue ) {
		page_header_bg_grad_col_2_tr = nValue;
		pageHeaderGradient();
	});

	royalLivePreview( 'page_header', 'bg_grad_col_2_ps', function( nValue ) {
		page_header_bg_grad_col_2_ps = nValue;
		pageHeaderGradient();
	});


	royalLivePreview( 'page_header', 'bg_img', function( nValue ) {
		page_header_bg_img = nValue;
		pageHeader.css({
			'background-image' : 'url( '+ page_header_bg_img +' )'
		});
	});

	royalLivePreview( 'page_header', 'bg_img_sz', function( nValue ) {
		page_header_bg_img_sz = nValue;
		royalBgImgSize( pageHeader, page_header_bg_img_sz );
	});

	royalLivePreview( 'page_header', 'bg_img_att', function( nValue ) {
		page_header_bg_img_att = nValue;
		pageHeader.css({
			'background-attachment' : page_header_bg_img_att
		});
	});

	royalLivePreview( 'page_header', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( pageHeader, page_header_bd_tp, page_header_bd_rt, page_header_bd_bt, page_header_bd_lt );
		} else {
			pageHeader.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( pageHeader, 'page_header', 'top', page_header_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( pageHeader, 'page_header', 'right', page_header_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( pageHeader, 'page_header', 'bottom', page_header_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( pageHeader, 'page_header', 'left', page_header_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'page_header', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			pageHeader.css({
				'border-radius' : page_header_rad + 'px'
			});

		} else {

			pageHeader.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'page_header', 'radius', function( nValue ) {
		page_header_rad = nValue;
		pageHeader.css( 'border-radius', page_header_rad + 'px' );
	});

	function pageHeaderShadow() {
		pageHeader.css( 'box-shadow', royalShadow( [
			page_header_shad_h,
			page_header_shad_v,
			page_header_shad_bl,
			page_header_shad_sp,
			page_header_shad_col,
			page_header_shad_col_tr,
			page_header_shad_in
		] ) );
	}

	royalLivePreview( 'page_header', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderShadow();
		} else {
			pageHeader.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'page_header', 'shad_h', function( nValue ) {
		page_header_shad_h = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_v', function( nValue ) {
		page_header_shad_v = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_bl', function( nValue ) {
		page_header_shad_bl = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_sp', function( nValue ) {
		page_header_shad_sp = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_col', function( nValue ) {
		page_header_shad_col = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_col_tr', function( nValue ) {
		page_header_shad_col_tr = nValue;
		pageHeaderShadow();
	});

	royalLivePreview( 'page_header', 'shad_in', function( nValue ) {
		page_header_shad_in = nValue;
		pageHeaderShadow();
	});


// define variables
	var page_header_tt_txt_shad_h	= royal_options.page_header_title.txt_shad_h,
		page_header_tt_txt_shad_v	= royal_options.page_header_title.txt_shad_v,
		page_header_tt_txt_shad_bl	= royal_options.page_header_title.txt_shad_bl,
		page_header_tt_txt_shad_col	= royal_options.page_header_title.txt_shad_col;

	// border 1x live update
	var page_header_tt_bd_bt = [
			royal_options.page_header_title.bd_size_bt,
			royal_options.page_header_title.bd_style_bt,
			royal_options.page_header_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'page_header_title', 'align', function( nValue ) {
		pageHeader.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'page_header_title', 'padding_bt', function( nValue ) {
		pageHeaderTT.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header_title', 'margin_bt', function( nValue ) {
		pageHeaderTT.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'page_header_title', 'color', function( nValue ) {
		pageHeaderTT.css( 'color', nValue );
		pageHeaderTT.find('a').css( 'color', nValue );
	});


	royalLivePreview( 'page_header_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pageHeaderTT, 'bottom', page_header_tt_bd_bt );
		} else {
			pageHeaderTT.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( pageHeaderTT, 'page_header_title', 'bottom', page_header_tt_bd_bt, 'sidebarEqual' );

	royalLivePreview( 'page_header_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderTT.css( 'display', 'block' );
		} else {
			pageHeaderTT.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'page_header_title', 'font_family', pageHeaderTT );

	royalLivePreview( 'page_header_title', 'font_size', function( nValue ) {
		pageHeaderTT.css( 'font-size', nValue +'px' );
	});

	royalLivePreview( 'page_header_title', 'line_height', function( nValue ) {
		pageHeaderTT.css( 'line-height', nValue +'px' );
	});

	royalLivePreview( 'page_header_title', 'letter_space', function( nValue ) {
		pageHeaderTT.css( 'letter-spacing', nValue +'px' );
	});

	royalLivePreview( 'page_header_title', 'font_weight', function( nValue ) {
		pageHeaderTT.css( 'font-weight', nValue );
	});

	royalLivePreview( 'page_header_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderTT.css( 'font-style', 'italic' );
		} else {
			pageHeaderTT.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'page_header_title', 'uppercase', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderTT.css( 'text-transform', 'uppercase' );
		} else {
			pageHeaderTT.css( 'text-transform', 'none' );
		}
	});

	function pageHeaderTTTextShadow() {
		pageHeaderTT.css( 'text-shadow', royalTextShadow( [
			page_header_tt_txt_shad_h,
			page_header_tt_txt_shad_v,
			page_header_tt_txt_shad_bl,
			page_header_tt_txt_shad_col
		] ) );
	}

	royalLivePreview( 'page_header_title', 'txt_shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderTTTextShadow();
		} else {
			pageHeaderTT.css( 'text-shadow', 'none' );	
		}
	});

	royalLivePreview( 'page_header_title', 'txt_shad_h', function( nValue ) {
		page_header_tt_txt_shad_h = nValue;
		pageHeaderTTTextShadow();
	});

	royalLivePreview( 'page_header_title', 'txt_shad_v', function( nValue ) {
		page_header_tt_txt_shad_v = nValue;
		pageHeaderTTTextShadow();
	});

	royalLivePreview( 'page_header_title', 'txt_shad_bl', function( nValue ) {
		page_header_tt_txt_shad_bl = nValue;
		pageHeaderTTTextShadow();
	});

	royalLivePreview( 'page_header_title', 'txt_shad_col', function( nValue ) {
		page_header_tt_txt_shad_col = nValue;
		pageHeaderTTTextShadow();
	});



// define variables
	var page_header_stt_txt_shad_h	 = royal_options.page_header_sTitle.txt_shad_h,
		page_header_stt_txt_shad_v	 = royal_options.page_header_sTitle.txt_shad_v,
		page_header_stt_txt_shad_bl	 = royal_options.page_header_sTitle.txt_shad_bl,
		page_header_stt_txt_shad_col = royal_options.page_header_sTitle.txt_shad_col;

/* ----------------- Sub Title General Options ----------------- */

	royalLivePreview( 'page_header_sTitle', 'align', function( nValue ) {
		pageHeaderSTT.css( 'text-align', nValue );
	});


/* ----------------- Sub Title Styling Options ----------------- */

	royalLivePreview( 'page_header_sTitle', 'color', function( nValue ) {
		pageHeaderSTT.css( 'color', nValue );
		pageHeaderSTT.find('a').css( 'color', nValue );
	});


/* ----------------- Sub Title Font Options ----------------- */

	royalGoogleFontsPreview( 'page_header_sTitle', 'font_family', pageHeaderSTT );

	royalLivePreview( 'page_header_sTitle', 'font_size', function( nValue ) {
		pageHeaderSTT.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header_sTitle', 'line_height', function( nValue ) {
		pageHeaderSTT.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header_sTitle', 'letter_space', function( nValue ) {
		pageHeaderSTT.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'page_header_sTitle', 'font_weight', function( nValue ) {
		pageHeaderSTT.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'page_header_sTitle', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderSTT.css( 'font-style', 'italic' );
		} else {
			pageHeaderSTT.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'page_header_sTitle', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pageHeaderSTT.css( 'text-transform', 'uppercase' );
		} else {
			pageHeaderSTT.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});

	function pageHeaderSTTTextShadow() {
		pageHeaderSTT.css( 'text-shadow', royalTextShadow( [
			page_header_stt_txt_shad_h,
			page_header_stt_txt_shad_v,
			page_header_stt_txt_shad_bl,
			page_header_stt_txt_shad_col
		] ) );
	}

	royalLivePreview( 'page_header_sTitle', 'txt_shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pageHeaderSTTTextShadow();
		} else {
			pageHeaderSTT.css( 'text-shadow', 'none' );	
		}
	});

	royalLivePreview( 'page_header_sTitle', 'txt_shad_h', function( nValue ) {
		page_header_stt_txt_shad_h = nValue;
		pageHeaderSTTTextShadow();
	});

	royalLivePreview( 'page_header_sTitle', 'txt_shad_v', function( nValue ) {
		page_header_stt_txt_shad_v = nValue;
		pageHeaderSTTTextShadow();
	});

	royalLivePreview( 'page_header_sTitle', 'txt_shad_bl', function( nValue ) {
		page_header_stt_txt_shad_bl = nValue;
		pageHeaderSTTTextShadow();
	});

	royalLivePreview( 'page_header_sTitle', 'txt_shad_col', function( nValue ) {
		page_header_stt_txt_shad_col = nValue;
		pageHeaderSTTTextShadow();
	});



/*
***************************************************************
* #Blog Page
***************************************************************
*/

// define variables
	var blogContainer 			= $('#blog-container'),
		bPage_gen_padding_rt	= royal_options.bPage_general.padding_rt,
		bPage_gen_padding_lt	= royal_options.bPage_general.padding_lt,
		bPage_gen_gutter_horz	= royal_options.bPage_general.gutter_horz,
		bPage_gen_bg_col		= royal_options.bPage_general.bg_col,
		bPage_gen_bg_col_tr		= royal_options.bPage_general.bg_col_tr,
		bPage_gen_rad			= royal_options.bPage_general.radius,
		bPage_gen_shad_h		= royal_options.bPage_general.shad_h,
		bPage_gen_shad_v		= royal_options.bPage_general.shad_v,
		bPage_gen_shad_bl		= royal_options.bPage_general.shad_bl,
		bPage_gen_shad_sp		= royal_options.bPage_general.shad_sp,
		bPage_gen_shad_col		= royal_options.bPage_general.shad_col,
		bPage_gen_shad_col_tr	= royal_options.bPage_general.shad_col_tr,
		bPage_gen_shad_in		= royal_options.bPage_general.shad_in;

	// border 4x live update
	var bPage_gen_bd_tp = [
			royal_options.bPage_general.bd_size_tp,
			royal_options.bPage_general.bd_style_tp,
			royal_options.bPage_general.bd_col_tp 
		],
		bPage_gen_bd_rt = [
			royal_options.bPage_general.bd_size_rt,
			royal_options.bPage_general.bd_style_rt,
			royal_options.bPage_general.bd_col_rt
		],
		bPage_gen_bd_bt = [
			royal_options.bPage_general.bd_size_bt,
			royal_options.bPage_general.bd_style_bt,
			royal_options.bPage_general.bd_col_bt
		],
		bPage_gen_bd_lt = [
			royal_options.bPage_general.bd_size_lt,
			royal_options.bPage_general.bd_style_lt,
			royal_options.bPage_general.bd_col_lt
		];

/* ----------------- Page General Options ----------------- */

	royalLivePreview( 'bPage_general', 'layout', function() {
		royalLoading();
	});

	royalLivePreview( 'bPage_general', 'columns_rate', function( nValue ) {
		blogContainer.attr( 'data-columns-rate', nValue );
		isotopeFn('blog');
	});


/* ----------------- Page Spacing Options ----------------- */

	royalLivePreview( 'bPage_general', 'padding_tp', function( nValue ) {
		blogContainer.css( 'padding-top', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_general', 'padding_rt', function( nValue ) {
		bPage_gen_padding_rt = nValue;
		blogContainer.css( 'padding-right', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_general', 'padding_bt', function( nValue ) {
		blogContainer.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_general', 'padding_lt', function( nValue ) {
		bPage_gen_padding_lt = nValue;
		blogContainer.css( 'padding-left', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_general', 'gutter_horz', function( nValue ) {
		bPage_gen_gutter_horz = nValue;
		blogContainer.attr( 'data-gutter-horz', nValue );

		masonryMetroGutter( 'blog', bPage_gen_gutter_horz, bPage_gen_padding_rt, bPage_gen_padding_lt );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_general', 'gutter_vert', function( nValue ) {
		blogContainer.attr( 'data-gutter-vert', nValue );
		isotopeFn('blog');
	});


/* ----------------- Page Styling Options ----------------- */

	royalLivePreview( 'bPage_general', 'bg_col', function( nValue ) {
		bPage_gen_bg_col = nValue;
		blogContainer.css( 'background-color', royalHex2Rgba( bPage_gen_bg_col, bPage_gen_bg_col_tr ) );
	});

	royalLivePreview( 'bPage_general', 'bg_col_tr', function( nValue ) {
		bPage_gen_bg_col_tr = nValue;
		blogContainer.css( 'background-color', royalHex2Rgba( bPage_gen_bg_col, bPage_gen_bg_col_tr ) );
	});

	royalLivePreview( 'bPage_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( blogContainer, bPage_gen_bd_tp, bPage_gen_bd_rt, bPage_gen_bd_bt, bPage_gen_bd_lt );
		} else {
			blogContainer.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( blogContainer, 'bPage_general', 'top', bPage_gen_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( blogContainer, 'bPage_general', 'right', bPage_gen_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( blogContainer, 'bPage_general', 'bottom', bPage_gen_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( blogContainer, 'bPage_general', 'left', bPage_gen_bd_lt, 'isotopeFn' );

	royalLivePreview( 'bPage_general', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			blogContainer.css({
				'border-radius' : bPage_gen_rad + 'px'
			});

		} else {

			blogContainer.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'bPage_general', 'radius', function( nValue ) {
		bPage_gen_rad = nValue;
		blogContainer.css( 'border-radius', bPage_gen_rad + 'px' );
	});

	function blogContainerShadow() {
		blogContainer.css( 'box-shadow', royalShadow( [
			bPage_gen_shad_h,
			bPage_gen_shad_v,
			bPage_gen_shad_bl,
			bPage_gen_shad_sp,
			bPage_gen_shad_col,
			bPage_gen_shad_col_tr,
			bPage_gen_shad_in
		] ) );
	}

	royalLivePreview( 'bPage_general', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			blogContainerShadow();
		} else {
			blogContainer.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'bPage_general', 'shad_h', function( nValue ) {
		bPage_gen_shad_h = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_v', function( nValue ) {
		bPage_gen_shad_v = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_bl', function( nValue ) {
		bPage_gen_shad_bl = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_sp', function( nValue ) {
		bPage_gen_shad_sp = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_col', function( nValue ) {
		bPage_gen_shad_col = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_col_tr', function( nValue ) {
		bPage_gen_shad_col_tr = nValue;
		blogContainerShadow();
	});

	royalLivePreview( 'bPage_general', 'shad_in', function( nValue ) {
		bPage_gen_shad_in = nValue;
		blogContainerShadow();
	});



// define variables
	var blogPost 				= blogContainer.find('.blog-post'),
		bPage_post_bg_col		= royal_options.bPage_post.bg_col,
		bPage_post_even_highlt	= royal_options.bPage_post.highlight_even,
		bPage_post_even_bg_col	= royal_options.bPage_post.even_bg_col,
		bPage_post_bg_col_tr	= royal_options.bPage_post.bg_col_tr,
	    bPage_post_link_col  	= royal_options.bPage_post.link_color,
	    bPage_post_link_hcol 	= royal_options.bPage_post.link_hcolor,
		bPage_post_rad			= royal_options.bPage_post.radius,
		bPage_post_shad_h		= royal_options.bPage_post.shad_h,
		bPage_post_shad_v		= royal_options.bPage_post.shad_v,
		bPage_post_shad_bl		= royal_options.bPage_post.shad_bl,
		bPage_post_shad_sp		= royal_options.bPage_post.shad_sp,
		bPage_post_shad_col		= royal_options.bPage_post.shad_col,
		bPage_post_shad_col_tr	= royal_options.bPage_post.shad_col_tr,
		bPage_post_shad_in		= royal_options.bPage_post.shad_in;

	// border 4x live update
	var bPage_post_bd_tp = [
			royal_options.bPage_post.bd_size_tp,
			royal_options.bPage_post.bd_style_tp,
			royal_options.bPage_post.bd_col_tp 
		],
		bPage_post_bd_rt = [
			royal_options.bPage_post.bd_size_rt,
			royal_options.bPage_post.bd_style_rt,
			royal_options.bPage_post.bd_col_rt
		],
		bPage_post_bd_bt = [
			royal_options.bPage_post.bd_size_bt,
			royal_options.bPage_post.bd_style_bt,
			royal_options.bPage_post.bd_col_bt
		],
		bPage_post_bd_lt = [
			royal_options.bPage_post.bd_size_lt,
			royal_options.bPage_post.bd_style_lt,
			royal_options.bPage_post.bd_col_lt
		];

/* ----------------- Post Spacing Options ----------------- */

	royalLivePreview( 'bPage_post', 'media_padding_tp', function( nValue ) {
		blogPost.find('.post-media-wrap').css( 'padding-top', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'media_padding_rt', function( nValue ) {
		blogPost.find('.post-media-wrap').css( 'padding-right', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'media_padding_bt', function( nValue ) {
		blogPost.find('.post-media-wrap').css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'media_padding_lt', function( nValue ) {
		blogPost.find('.post-media-wrap').css( 'padding-left', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'text_padding_tp', function( nValue ) {
		blogPost.find('.post-text-wrap').css( 'padding-top', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'text_padding_rt', function( nValue ) {
		blogPost.find('.post-text-wrap').css( 'padding-right', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'text_padding_bt', function( nValue ) {
		blogPost.find('.post-text-wrap').css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPage_post', 'text_padding_lt', function( nValue ) {
		blogPost.find('.post-text-wrap').css( 'padding-left', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Post Styling Options ----------------- */

	royalLivePreview( 'bPage_post', 'bg_col', function( nValue ) {

		bPage_post_bg_col = nValue;

		if ( bPage_post_even_highlt === true ) {
			blogPost.filter(':even').css( 'background-color', royalHex2Rgba( bPage_post_bg_col, bPage_post_bg_col_tr ) );
		} else {
			blogPost.css( 'background-color', royalHex2Rgba( bPage_post_bg_col, bPage_post_bg_col_tr ) );
		}

	});

	royalLivePreview( 'bPage_post', 'highlight_even', function( nValue ) {

		bPage_post_even_highlt = nValue;

		if ( nValue === true ) {
			blogPost.filter(':odd').css( 'background-color', royalHex2Rgba( bPage_post_even_bg_col, bPage_post_bg_col_tr ) );
		} else {
			blogPost.css( 'background-color', royalHex2Rgba( bPage_post_bg_col, bPage_post_bg_col_tr ) );	
		}

	});

	royalLivePreview( 'bPage_post', 'even_bg_col', function( nValue ) {
		bPage_post_even_bg_col = nValue;
		blogPost.filter(':odd').css( 'background-color', royalHex2Rgba( bPage_post_even_bg_col, bPage_post_bg_col_tr ) );
	});

	royalLivePreview( 'bPage_post', 'bg_col_tr', function( nValue ) {
		bPage_post_bg_col_tr = nValue;

		if ( bPage_post_even_highlt === true ) {

			blogPost.filter(':even').css( 'background-color', royalHex2Rgba( bPage_post_bg_col, bPage_post_bg_col_tr ) );
			blogPost.filter(':odd').css( 'background-color', royalHex2Rgba( bPage_post_even_bg_col, bPage_post_bg_col_tr ) );

		} else {

			blogPost.css( 'background-color', royalHex2Rgba( bPage_post_bg_col, bPage_post_bg_col_tr ) );

		}
	});

	function bPostLinkHover() {
	    $('.blog-post .post-text-wrap a:not(.post-title a, .read-more), .blog-post .social-share-wrap i').hover(function() {

	        $(this).css( 'color', bPage_post_link_hcol );

	    }, function() {

	        $(this).css( 'color', bPage_post_link_col );

	    });
	}
    
    royalLivePreview( 'bPage_post', 'text_color', function( nValue ) {
        $('.blog-post .post-description, .blog-post .before-cats').css( 'color', nValue );
    });

    royalLivePreview( 'bPage_post', 'meta_color', function( nValue ) {
        $('.blog-post .time-and-author').css( 'color', nValue );
    });

    royalLivePreview( 'bPage_post', 'link_color', function( nValue ) {
        bPage_post_link_col = nValue;
        $('.blog-post .post-text-wrap a:not(.post-title a, .read-more), .blog-post .social-share-wrap i, .blog-post .likes-and-comments .meta-sep, .blog-post .post-categories').css( 'color', nValue );
   		
   		bPostLinkHover();
   	});

    royalLivePreview( 'bPage_post', 'link_hcolor', function( nValue ) {
        bPage_post_link_hcol = nValue;
        bPostLinkHover();
    });

	royalLivePreview( 'bPage_post', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( blogPost, bPage_post_bd_tp, bPage_post_bd_rt, bPage_post_bd_bt, bPage_post_bd_lt );
		} else {
			blogPost.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( blogPost, 'bPage_post', 'top', bPage_post_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( blogPost, 'bPage_post', 'right', bPage_post_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( blogPost, 'bPage_post', 'bottom', bPage_post_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( blogPost, 'bPage_post', 'left', bPage_post_bd_lt, 'isotopeFn' );

	royalLivePreview( 'bPage_post', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			blogPost.css({
				'border-radius' : bPage_post_rad + 'px'
			});

		} else {

			blogPost.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'bPage_post', 'radius', function( nValue ) {
		bPage_post_rad = nValue;
		blogPost.css( 'border-radius', bPage_post_rad + 'px' );
	});

	function blogPostShadow() {
		blogPost.css( 'box-shadow', royalShadow( [
			bPage_post_shad_h,
			bPage_post_shad_v,
			bPage_post_shad_bl,
			bPage_post_shad_sp,
			bPage_post_shad_col,
			bPage_post_shad_col_tr,
			bPage_post_shad_in
		] ) );
	}

	royalLivePreview( 'bPage_post', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			blogPostShadow();
		} else {
			blogPost.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'bPage_post', 'shad_h', function( nValue ) {
		bPage_post_shad_h = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_v', function( nValue ) {
		bPage_post_shad_v = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_bl', function( nValue ) {
		bPage_post_shad_bl = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_sp', function( nValue ) {
		bPage_post_shad_sp = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_col', function( nValue ) {
		bPage_post_shad_col = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_col_tr', function( nValue ) {
		bPage_post_shad_col_tr = nValue;
		blogPostShadow();
	});

	royalLivePreview( 'bPage_post', 'shad_in', function( nValue ) {
		bPage_post_shad_in = nValue;
		blogPostShadow();
	});


/* ----------------- Post Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', blogPost );



// define variables
	var bPostTitle 		= $('.blog-post .post-title'),
		bPostTitleLink	= bPostTitle.find('a'),
		bPost_tt_col	= royal_options.bPost_title.color,
		bPost_tt_hcol	= royal_options.bPost_title.hcolor;

	// border 1x live update
	var bPost_tt_bd_bt = [
			royal_options.bPost_title.bd_size_bt,
			royal_options.bPost_title.bd_style_bt,
			royal_options.bPost_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'bPost_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			bPostTitle.css( 'display', 'block' );
		} else {
			bPostTitle.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_title', 'position', function( nValue ) {

		bPostTitle.each(function() {

			// define variables
			var textBlock = $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpTitle = $(this).remove();

			// move title to
			if ( nValue === 'above' ) {
				textBlock.first().prepend( tmpTitle );
			} else {
				textBlock.last().prepend( tmpTitle );
			}

		});

		bPostTitleLinkHover();
		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_title', 'align', function( nValue ) {
		bPostTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'bPost_title', 'padding_bt', function( nValue ) {
		bPostTitleLink.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_title', 'margin_bt', function( nValue ) {
		bPostTitleLink.css( 'margin-bottom', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Title Styling Options ----------------- */

	function bPostTitleLinkHover() {
		bPostTitleLink.hover(function() {

			$(this).css( 'color', bPost_tt_hcol );

		}, function() {

			bPostTitleLink.css( 'color', bPost_tt_col );

		});
	}

	royalLivePreview( 'bPost_title', 'color', function( nValue ) {
		bPost_tt_col = nValue;
		bPostTitleLink.css( 'color', nValue );

		bPostTitleLinkHover();
	});

	royalLivePreview( 'bPost_title', 'hcolor', function( nValue ) {
		bPost_tt_hcol = nValue;
		bPostTitleLinkHover();
	});

	royalLivePreview( 'bPost_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( bPostTitleLink, 'bottom', bPost_tt_bd_bt );
		} else {
			bPostTitleLink.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( bPostTitleLink, 'bPost_title', 'bottom', bPost_tt_bd_bt, 'isotopeFn' );

	royalLivePreview( 'bPost_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			bPostTitleLink.css( 'display', 'block' );
		} else {
			bPostTitleLink.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'bPost_title', 'font_family', bPostTitleLink );

	royalLivePreview( 'bPost_title', 'font_size', function( nValue ) {
		bPostTitleLink.css( 'font-size', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_title', 'line_height', function( nValue ) {
		bPostTitleLink.css( 'line-height', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_title', 'letter_space', function( nValue ) {
		bPostTitleLink.css( 'letter-spacing', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_title', 'font_weight', function( nValue ) {
		bPostTitleLink.css( 'font-weight', nValue );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostTitleLink.css( 'font-style', 'italic' );
		} else {
			bPostTitleLink.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostTitleLink.css( 'text-transform', 'uppercase' );
		} else {
			bPostTitleLink.css( 'text-transform', 'none' );
		}

		isotopeFn('blog');

	});



// define variables
	var bPostCatsWrap 	= $('.blog-post .post-categories'),
		bPostCatsIn		= bPostCatsWrap.find('.post-cats-in');

	// border 1x live update
	var bPost_cat_bd_bt = [
			royal_options.bPost_cats.bd_size_bt,
			royal_options.bPost_cats.bd_style_bt,
			royal_options.bPost_cats.bd_col_bt 
		];

/* ----------------- Category General Options ----------------- */

	royalLivePreview( 'bPost_cats', 'label', function( nValue ) {

		if ( nValue === true ) {
			bPostCatsWrap.css( 'display', 'block' );
		} else {
			bPostCatsWrap.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_cats', 'before_cats', function( nValue ) {
		bPostCatsWrap.find('.before-cats').text( nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'separator', function( nValue ) {

		// remove old separators
		bPostCatsIn.contents().filter(function() {
			return this.nodeType == 3;
		}).remove();

		// add new ones
		bPostCatsIn.find('a').not(':last-child').after(nValue);

		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_cats', 'position', function( nValue ) {

		bPostCatsWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpCat 			= $(this).remove(),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last();


			// move Cat to
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else {

				if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			}

		});

		royalHideEmpty();

	});

	royalLivePreview( 'bPost_cats', 'align', function( nValue ) {
		bPostCatsWrap.css( 'text-align', nValue );
	});


/* ----------------- Category Spacing Options ----------------- */

	royalLivePreview( 'bPost_cats', 'padding_bt', function( nValue ) {
		bPostCatsIn.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'margin_bt', function( nValue ) {
		bPostCatsIn.css( 'margin-bottom', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Category Styling Options ----------------- */

	royalLivePreview( 'bPost_cats', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( bPostCatsIn, 'bottom', bPost_cat_bd_bt );
		} else {
			bPostCatsIn.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( bPostCatsIn, 'bPost_cats', 'bottom', bPost_cat_bd_bt, 'isotopeFn' );

	royalLivePreview( 'bPost_cats', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			bPostCatsIn.css( 'display', 'block' );
		} else {
			bPostCatsIn.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Category Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', bPostCatsIn );

	royalLivePreview( 'bPost_cats', 'font_size', function( nValue ) {
		bPostCatsIn.css( 'font-size', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'line_height', function( nValue ) {
		bPostCatsIn.css( 'line-height', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'letter_space', function( nValue ) {
		bPostCatsIn.css( 'letter-spacing', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'font_weight', function( nValue ) {
		bPostCatsIn.css( 'font-weight', nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_cats', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostCatsIn.css( 'font-style', 'italic' );
		} else {
			bPostCatsIn.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_cats', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostCatsIn.css( 'text-transform', 'uppercase' );
		} else {
			bPostCatsIn.css( 'text-transform', 'none' );
		}

		isotopeFn('blog');

	});



// define variables
	var bPostMeta = $('.blog-post .time-and-author');

	// border 1x live update
	var bPost_meta_bd_bt = [
			royal_options.bPost_meta.bd_size_bt,
			royal_options.bPost_meta.bd_style_bt,
			royal_options.bPost_meta.bd_col_bt 
		];

/* ----------------- Meta General Options ----------------- */

	royalLivePreview( 'bPost_meta', 'label', function( nValue ) {

		if ( nValue === true ) {
			bPostMeta.css( 'display', 'block' );
		} else {
			bPostMeta.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_meta', 'date', function( nValue ) {

		if ( nValue === true ) {
			bPostMeta.find('.post-date').show();
		} else {
			bPostMeta.find('.post-date').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_meta', 'author', function( nValue ) {

		if ( nValue === true ) {
			bPostMeta.find('.posted-by').show();
		} else {
			bPostMeta.find('.posted-by').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_meta', 'separator', function( nValue ) {

		if ( nValue === true ) {
			bPostMeta.find('.meta-sep').show();
		} else {
			bPostMeta.find('.meta-sep').hide();
		}

		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_meta', 'before_author', function( nValue ) {
		bPostMeta.find('.posted-by span').text( nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'position', function( nValue ) {

		bPostMeta.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpCat 			= $(this).remove(),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else {

				if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			}

		});

		bPostLinkHover();
		royalHideEmpty();

	});

	royalLivePreview( 'bPost_meta', 'align', function( nValue ) {
		bPostMeta.css( 'text-align', nValue );
	});


/* ----------------- Meta Spacing Options ----------------- */

	royalLivePreview( 'bPost_meta', 'padding_bt', function( nValue ) {
		bPostMeta.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'margin_bt', function( nValue ) {
		bPostMeta.css( 'margin-bottom', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Meta Styling Options ----------------- */

	royalLivePreview( 'bPost_meta', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( bPostMeta, 'bottom', bPost_meta_bd_bt );
		} else {
			bPostMeta.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( bPostMeta, 'bPost_meta', 'bottom', bPost_meta_bd_bt, 'isotopeFn' );


/* ----------------- Meta Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', bPostMeta );

	royalLivePreview( 'bPost_meta', 'font_size', function( nValue ) {
		bPostMeta.css( 'font-size', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'line_height', function( nValue ) {
		bPostMeta.css( 'line-height', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'letter_space', function( nValue ) {
		bPostMeta.css( 'letter-spacing', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'font_weight', function( nValue ) {
		bPostMeta.css( 'font-weight', nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_meta', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostMeta.css( 'font-style', 'italic' );
		} else {
			bPostMeta.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_meta', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostMeta.css( 'text-transform', 'uppercase' );
		} else {
			bPostMeta.css( 'text-transform', 'none' );
		}

		isotopeFn('blog');

	});



// define variables
	var bPostDesc = $('.blog-post .post-description');

	// border 1x live update
	var bPost_desc_bd_bt = [
			royal_options.bPost_desc.bd_size_bt,
			royal_options.bPost_desc.bd_style_bt,
			royal_options.bPost_desc.bd_col_bt 
		];

/* ----------------- Description General Options ----------------- */

	royalLivePreview( 'bPost_desc', 'display_as', function() {
		royalLoading();
	});

	royalLivePreview( 'bPost_desc', 'excerpt_length', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'bPost_desc', 'label', function( nValue ) {

		if ( nValue === true ) {
			bPostDesc.css( 'display', 'block' );
		} else {
			bPostDesc.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_desc', 'position', function( nValue ) {

		bPostDesc.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpCat 			= $(this).remove(),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else {

				if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			}
		});

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_desc', 'align', function( nValue ) {
		bPostDesc.css( 'text-align', nValue );
	});


/* ----------------- Description Spacing Options ----------------- */

	royalLivePreview( 'bPost_desc', 'padding_bt', function( nValue ) {
		bPostDesc.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_desc', 'margin_bt', function( nValue ) {
		bPostDesc.css( 'margin-bottom', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Description Styling Options ----------------- */

	royalLivePreview( 'bPost_desc', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( bPostDesc, 'bottom', bPost_desc_bd_bt );
		} else {
			bPostDesc.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( bPostDesc, 'bPost_desc', 'bottom', bPost_desc_bd_bt, 'isotopeFn' );


/* ----------------- Description Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', bPostDesc );

	royalLivePreview( 'bPost_desc', 'font_size', function( nValue ) {
		bPostDesc.css( 'font-size', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_desc', 'line_height', function( nValue ) {
		bPostDesc.css( 'line-height', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_desc', 'letter_space', function( nValue ) {
		bPostDesc.css( 'letter-spacing', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_desc', 'font_weight', function( nValue ) {
		bPostDesc.css( 'font-weight', nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_desc', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostDesc.css( 'font-style', 'italic' );
		} else {
			bPostDesc.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_desc', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostDesc.css( 'text-transform', 'uppercase' );
		} else {
			bPostDesc.css( 'text-transform', 'none' );
		}

		isotopeFn('blog');

	});



// define variables
	var bPostLikesWrap 		= $('.blog-post .likes-and-comments'),
		bPostLikes 			= bPostLikesWrap.find('.rf-likes'),
		bPostComments 		= bPostLikesWrap.find('.post-comments-wrap'),
		bPostSharing 		= bPostLikesWrap.find('.social-share'),
		bPost_likes_align 	= royal_options.bPost_likes.align;
		bPost_more_display 	= royal_options.bPost_more.display;

/* ----------------- Likes, Comments & Sharing General Options ----------------- */

	royalLivePreview( 'bPost_likes', 'label', function( nValue ) {

		if ( nValue === true ) {
			bPostLikesWrap.css( 'display', 'block' );
		} else {
			bPostLikesWrap.css( 'display', 'none' );
		}

		bPostMoreWrapAlign();
		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'likes_label', function( nValue ) {

		if ( nValue === true ) {
			bPostLikes.show();
		} else {
			bPostLikes.hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'likes_icon', function( nValue ) {
		bPostLikes.find('i').removeAttr('class');
		bPostLikes.find('i').addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'bPost_likes', 'comments_label', function( nValue ) {

		if ( nValue === true ) {
			bPostComments.show();
		} else {
			bPostComments.hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'comments_icon', function( nValue ) {
		bPostComments.find('i').removeAttr('class');
		bPostComments.find('i').addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'bPost_likes', 'sharing_label', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.parent().show();
		} else {
			bPostSharing.parent().hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_face', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=facebook]').show();
		} else {
			bPostSharing.find('a[href*=facebook]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_twit', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=twitter]').show();
		} else {
			bPostSharing.find('a[href*=twitter]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_gplus', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=google]').show();
		} else {
			bPostSharing.find('a[href*=google]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_linkin', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=linkedin]').show();
		} else {
			bPostSharing.find('a[href*=linkedin]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_pint', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=pinterest]').show();
		} else {
			bPostSharing.find('a[href*=pinterest]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'share_tumblr', function( nValue ) {
		if ( nValue === true ) {
			bPostSharing.find('a[href*=tumblr]').show();
		} else {
			bPostSharing.find('a[href*=tumblr]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_likes', 'share_reddit', function( nValue ) {

		if ( nValue === true ) {
			bPostSharing.find('a[href*=reddit]').show();
		} else {
			bPostSharing.find('a[href*=reddit]').hide();
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_likes', 'open_on', function( nValue ) {
		royalSharingIcons( 'blog-post', nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_likes', 'icon_separator', function( nValue ) {
		bPostLikesWrap.find('.meta-sep').text( nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_likes', 'position', function( nValue ) {

		bPostLikesWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpCat 			= $(this).remove(),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.post-description').length > 0 ) {
					textBlockAbove.find('.post-description').after( tmpCat );
				} else if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else {

				if ( textBlockBelow.find('.post-description').length > 0 ) {
					textBlockBelow.find('.post-description').after( tmpCat );
				} else if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			}
		});

		if ( bPostLikesWrap.siblings('.read-more-wrap').length === 0 ) {
			$('.blog-post .read-more-wrap').css( 'padding-top', '0' );
		} else if ( bPost_more_display === 'separate' ) {
			$('.blog-post .read-more-wrap').css( 'padding-top', '15px' );
		}

		royalHideEmpty();
		isotopeFn('blog');

	});

	function bPostLikesWrapAlign() {

		if ( bPost_more_display === 'separate' || bPostLikesWrap.siblings('.read-more-wrap').length === 0 || ( bPost_more_display === 'inline' && bPost_more_label === false ) ) {
			
			if ( bPost_likes_align === 'left' ) {

				bPostLikesWrap.css( 'float', 'left' );

			} else if ( bPost_likes_align === 'right' ) {

				bPostLikesWrap.css( 'float', 'right' );

			} else {

				bPostLikesWrap.css({
					'float' 	 : 'none',
					'text-align' : 'center'
				} );

			}

		} else {

			bPostLikesWrap.css( 'float', 'left' );

		}
	}

	royalLivePreview( 'bPost_likes', 'align', function( nValue ) {
		bPost_likes_align = nValue;
		bPostLikesWrapAlign();
	});


/* ----------------- Likes, Comments & Sharing Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', bPostLikesWrap );

	royalLivePreview( 'bPost_likes', 'font_size', function( nValue ) {
		bPostLikesWrap.css( 'font-size', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_likes', 'line_height', function( nValue ) {
		bPostLikesWrap.css( 'line-height', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_likes', 'letter_space', function( nValue ) {
		bPostLikesWrap.css( 'letter-spacing', nValue +'px' );
		isotopeFn('blog');
	});



// define variables
	var bPostMoreWrap 			= $('.blog-post .read-more-wrap'),
		bPostMore 				= bPostMoreWrap.find('.read-more'),
		bPost_more_label 		= royal_options.bPost_more.label,
		bPost_more_display 		= royal_options.bPost_more.display,
		bPost_more_align 		= royal_options.bPost_more.align,
		bPost_more_sep 			= royal_options.bPost_more.separate,
		bPost_more_bg_col		= royal_options.bPost_more.bg_col,
		bPost_more_bg_col_tr	= royal_options.bPost_more.bg_col_tr,
		bPost_more_txt_col		= royal_options.bPost_more.txt_col,
		bPost_more_bg_hcol		= royal_options.bPost_more.bg_hcol,
		bPost_more_bg_hcol_tr	= royal_options.bPost_more.bg_hcol_tr,
		bPost_more_txt_hcol		= royal_options.bPost_more.txt_hcol,
		bPost_more_bd_hcol		= royal_options.bPost_more.bd_hcol,
		bPost_more_rad			= royal_options.bPost_more.radius,
		bPost_more_shad_h		= royal_options.bPost_more.shad_h,
		bPost_more_shad_v		= royal_options.bPost_more.shad_v,
		bPost_more_shad_bl		= royal_options.bPost_more.shad_bl,
		bPost_more_shad_sp		= royal_options.bPost_more.shad_sp,
		bPost_more_shad_col		= royal_options.bPost_more.shad_col,
		bPost_more_shad_col_tr	= royal_options.bPost_more.shad_col_tr,
		bPost_more_shad_in		= royal_options.bPost_more.shad_in;

	// border 4x live update
	var bPost_more_bd_tp = [
			royal_options.bPost_more.bd_size_tp,
			royal_options.bPost_more.bd_style_tp,
			royal_options.bPost_more.bd_col_tp 
		],
		bPost_more_bd_rt = [
			royal_options.bPost_more.bd_size_rt,
			royal_options.bPost_more.bd_style_rt,
			royal_options.bPost_more.bd_col_rt
		],
		bPost_more_bd_bt = [
			royal_options.bPost_more.bd_size_bt,
			royal_options.bPost_more.bd_style_bt,
			royal_options.bPost_more.bd_col_bt
		],
		bPost_more_bd_lt = [
			royal_options.bPost_more.bd_size_lt,
			royal_options.bPost_more.bd_style_lt,
			royal_options.bPost_more.bd_col_lt
		];

/* ----------------- Read More General Options ----------------- */

	royalLivePreview( 'bPost_more', 'label', function( nValue ) {

		bPost_more_label = nValue;

		if ( nValue === false ) {
			bPostMoreWrap.hide();
		} else {
			bPostMoreWrap.show();
		}

		bPostMoreWrapAlign();
		bPostLikesWrapAlign();
		royalHideEmpty();
		isotopeFn('blog');

	});

	function bPostMoreWrapAlign() {
		if ( bPost_more_display === 'inline' ) {

			bPostMoreWrap.css({
				'clear' 		: 'none',
				'padding-top' 	: '0',
				'float' 		: 'right',
			} );

			if ( bPostMoreWrap.siblings('.likes-and-comments:visible').length > 0 ) {
				bPostLikesWrap.css( 'float', 'left' );
			}

		} else {

			if ( bPostMoreWrap.siblings('.likes-and-comments:visible').length > 0 ) {
				bPostMoreWrap.css( 'padding-top', '15px' );
			} else {
				bPostMoreWrap.css( 'padding-top', '0' );
			}

			bPostMoreWrap.css({
				'float' 	 : 'none',
				'clear' 	 : 'both',
				'text-align' : bPost_more_align
			});

			bPostMore.css( 'display', bPost_more_sep );

		}
	}

	royalLivePreview( 'bPost_more', 'display', function( nValue ) {
		bPost_more_display = nValue;
		bPostMoreWrapAlign();
		bPostLikesWrapAlign();
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'align', function( nValue ) {
		bPost_more_align = nValue;

		if ( bPost_more_display === 'separate' ) {
			bPostMoreWrap.css({
				'text-align' : bPost_more_align
			});
		}
	});

	royalLivePreview( 'bPost_more', 'separate', function( nValue ) {
		bPost_more_sep = nValue;

		if ( bPost_more_display === 'separate' ) {
			bPostMore.css( 'display', bPost_more_sep );
		}

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'text', function( nValue ) {
		bPostMore.find('span').text( nValue );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'icon', function( nValue ) {
		bPostMore.find('i').removeAttr('class');
		bPostMore.find('i').addClass( 'rf-button fa fa-' + nValue );
	});

	royalLivePreview( 'bPost_more', 'position', function( nValue ) {

		bPostMoreWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.blog-post').find('.post-text-wrap'),
				tmpCat 			= $(this).remove(),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.likes-and-comments').length > 0 ) {
					textBlockAbove.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockAbove.find('.post-description').length > 0 ) {
					textBlockAbove.find('.post-description').after( tmpCat );
				} else if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else {

				if ( textBlockBelow.find('.likes-and-comments').length > 0 ) {
					textBlockBelow.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockBelow.find('.post-description').length > 0 ) {
					textBlockBelow.find('.post-description').after( tmpCat );
				} else if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			}
		});
		
		bPostMoreWrapAlign();
		bPostMoreHover();
		royalHideEmpty();
		isotopeFn('blog');

	});


/* ----------------- Read More Spacing Options ----------------- */

	royalLivePreview( 'bPost_more', 'padding_tp', function( nValue ) {
		bPostMore.css( 'padding-top', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'padding_rt', function( nValue ) {
		bPostMore.css( 'padding-right', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'padding_bt', function( nValue ) {
		bPostMore.css( 'padding-bottom', nValue +'px' );
		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'padding_lt', function( nValue ) {
		bPostMore.css( 'padding-left', nValue +'px' );
		isotopeFn('blog');
	});


/* ----------------- Read More Styling Options ----------------- */

	function bPostMoreHover() {

		bPostMore.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( bPost_more_bg_hcol, bPost_more_bg_hcol_tr ),
				'color' 			: bPost_more_txt_hcol,
				'border-color' 		: bPost_more_bd_hcol
			});

		}, function() {

			bPostMore.css({
				'background-color' 	  : royalHex2Rgba( bPost_more_bg_col, bPost_more_bg_col_tr ),
				'color' 			  : bPost_more_txt_col,
				'border-top-color' 	  : bPost_more_bd_tp[2],
				'border-right-color'  : bPost_more_bd_rt[2],
				'border-bottom-color' : bPost_more_bd_bt[2],
				'border-left-color'   : bPost_more_bd_lt[2]
			});

		});

	}

	bPostMoreHover();

	royalLivePreview( 'bPost_more', 'bg_col', function( nValue ) {
		bPost_more_bg_col = nValue;
		bPostMore.css( 'background-color', royalHex2Rgba( bPost_more_bg_col, bPost_more_bg_col_tr ) );
	});

	royalLivePreview( 'bPost_more', 'bg_col_tr', function( nValue ) {
		bPost_more_bg_col_tr = nValue;
		bPostMore.css( 'background-color', royalHex2Rgba( bPost_more_bg_col, bPost_more_bg_col_tr ) );
	});

	royalLivePreview( 'bPost_more', 'txt_col', function( nValue ) {
		bPost_more_txt_col = nValue;
		bPostMore.css( 'color', bPost_more_txt_col );
	});

	royalLivePreview( 'bPost_more', 'bg_hcol', function( nValue ) {
		bPost_more_bg_hcol = nValue;
	});

	royalLivePreview( 'bPost_more', 'bg_hcol_tr', function( nValue ) {
		bPost_more_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'bPost_more', 'txt_hcol', function( nValue ) {
		bPost_more_txt_hcol = nValue;
	});

	royalLivePreview( 'bPost_more', 'bd_hcol', function( nValue ) {
		bPost_more_bd_hcol = nValue;
	});

	royalLivePreview( 'bPost_more', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( bPostMore, bPost_more_bd_tp, bPost_more_bd_rt, bPost_more_bd_bt, bPost_more_bd_lt );
		} else {
			bPostMore.css( 'border', 'none' );
		}

		isotopeFn('blog');

	});

	royalBorderLivePreview( bPostMore, 'bPost_more', 'top', bPost_more_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( bPostMore, 'bPost_more', 'right', bPost_more_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( bPostMore, 'bPost_more', 'bottom', bPost_more_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( bPostMore, 'bPost_more', 'left', bPost_more_bd_lt, 'isotopeFn' );

	royalLivePreview( 'bPost_more', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			bPostMore.css({
				'border-radius' : bPost_more_rad + 'px'
			});

		} else {

			bPostMore.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'bPost_more', 'radius', function( nValue ) {
		bPost_more_rad = nValue;
		bPostMore.css( 'border-radius', bPost_more_rad + 'px' );
	});

	function bPostMoreShadow() {
		bPostMore.css( 'box-shadow', royalShadow( [
			bPost_more_shad_h,
			bPost_more_shad_v,
			bPost_more_shad_bl,
			bPost_more_shad_sp,
			bPost_more_shad_col,
			bPost_more_shad_col_tr,
			bPost_more_shad_in
		] ) );
	}

	royalLivePreview( 'bPost_more', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			bPostMoreShadow();
		} else {
			bPostMore.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'bPost_more', 'shad_h', function( nValue ) {
		bPost_more_shad_h = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_v', function( nValue ) {
		bPost_more_shad_v = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_bl', function( nValue ) {
		bPost_more_shad_bl = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_sp', function( nValue ) {
		bPost_more_shad_sp = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_col', function( nValue ) {
		bPost_more_shad_col = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_col_tr', function( nValue ) {
		bPost_more_shad_col_tr = nValue;
		bPostMoreShadow();
	});

	royalLivePreview( 'bPost_more', 'shad_in', function( nValue ) {
		bPost_more_shad_in = nValue;
		bPostMoreShadow();
	});


/* ----------------- Read More Font Options ----------------- */

	royalGoogleFontsPreview( 'bPage_post', 'font_family', bPostMore );

	royalLivePreview( 'bPost_more', 'font_size', function( nValue ) {
		bPostMore.css( 'font-size', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'line_height', function( nValue ) {
		bPostMore.css( 'line-height', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'letter_space', function( nValue ) {
		bPostMore.css( 'letter-spacing', nValue +'px' );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'font_weight', function( nValue ) {
		bPostMore.css( 'font-weight', nValue );

		isotopeFn('blog');
	});

	royalLivePreview( 'bPost_more', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostMore.css( 'font-style', 'italic' );
		} else {
			bPostMore.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_more', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostMore.css( 'text-transform', 'uppercase' );
		} else {
			bPostMore.css( 'text-transform', 'none' );
		}

		isotopeFn('blog');

	});

	royalLivePreview( 'bPost_more', 'underline', function( nValue ) {
		if ( nValue === true ) {
			bPostMore.css( 'text-decoration', 'underline' );
		} else {
			bPostMore.css( 'text-decoration', 'none' );
		}
	});



// define variables
	var bPostOverlay 			 = $('.blog-post .image-overlay'),
		bPostOverlayIcon 		 = bPostOverlay.find('i'),
		bPost_overlay_bg_hcol 	 = royal_options.bPost_overlay.bg_hcol,
		bPost_overlay_bg_hcol_tr = royal_options.bPost_overlay.bg_hcol_tr;

/* ----------------- Image Overlay General Options ----------------- */

	royalLivePreview( 'bPost_overlay', 'click', function() {
		royalLoading();
	});

	royalLivePreview( 'bPost_overlay', 'overlay_trans', function( nValue ) {
		$('.blog-post .post-media .image-overlay').css({
			'-webkit-transition' : 'opacity '+ nValue +'ms ease 0s, background-color '+ nValue +'ms ease 0s',
			'transition' 		 : 'opacity '+ nValue +'ms ease 0s, background-color '+ nValue +'ms ease 0s'
		});
	});
	
	royalLivePreview( 'bPost_overlay', 'label', function( nValue ) {
		if ( nValue === false ) {
			bPostOverlay.hide();
		} else {
			bPostOverlay.show();
		}
	});

	royalLivePreview( 'bPost_overlay', 'icon', function( nValue ) {
		bPostOverlayIcon.removeAttr('class');
		bPostOverlayIcon.addClass( 'fa fa-' + nValue );
	});


/* ----------------- Image Overlay Styling Options ----------------- */

	royalLivePreview( 'bPost_overlay', 'bg_hcol', function( nValue ) {
		bPost_overlay_bg_hcol = nValue;
		bPostOverlay.css( 'background-color', royalHex2Rgba( bPost_overlay_bg_hcol, bPost_overlay_bg_hcol_tr ) );
	});

	royalLivePreview( 'bPost_overlay', 'bg_hcol_tr', function( nValue ) {
		bPost_overlay_bg_hcol_tr = nValue;
		bPostOverlay.css( 'background-color', royalHex2Rgba( bPost_overlay_bg_hcol, bPost_overlay_bg_hcol_tr ) );
	});

	royalLivePreview( 'bPost_overlay', 'txt_hcol', function( nValue ) {
		bPostOverlayIcon.css( 'color', nValue );
	});


/* ----------------- Image Overlay Font Options ----------------- */

	royalLivePreview( 'bPost_overlay', 'icon_size', function( nValue ) {
		bPostOverlayIcon.css( 'font-size', nValue +'px' );
	});



// define variables
	var bPostformatsWrap 		= $('.link-and-quote'),
		bPostformats 			= bPostformatsWrap.find('p, small'),
		bPost_formats_bg_col 	= royal_options.bPost_formats.bg_col,
		bPost_formats_bg_col_tr = royal_options.bPost_formats.bg_col_tr,
		bPost_formats_rad 		= royal_options.bPost_formats.radius;

/* ----------------- Post Formats Spacing Options ----------------- */

	royalLivePreview( 'bPost_formats', 'padding_tp', function( nValue ) {
		bPostformatsWrap.css( 'padding-top', nValue +'%' );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'padding_rt', function( nValue ) {
		bPostformatsWrap.css( 'padding-right', nValue +'%' );
	});

	royalLivePreview( 'bPost_formats', 'padding_bt', function( nValue ) {
		bPostformatsWrap.css( 'padding-bottom', nValue +'%' );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'padding_lt', function( nValue ) {
		bPostformatsWrap.css( 'padding-left', nValue +'%' );
	});


/* ----------------- Post Formats Styling Options ----------------- */

	royalLivePreview( 'bPost_formats', 'bg_col', function( nValue ) {
		bPost_formats_bg_col = nValue;
		bPostformats.css( 'background-color', royalHex2Rgba( bPost_formats_bg_col, bPost_formats_bg_col_tr ) );
	});

	royalLivePreview( 'bPost_formats', 'bg_col_tr', function( nValue ) {
		bPost_formats_bg_col_tr = nValue;
		bPostformats.css( 'background-color', royalHex2Rgba( bPost_formats_bg_col, bPost_formats_bg_col_tr ) );
	});

	royalLivePreview( 'bPost_formats', 'txt_col', function( nValue ) {
		bPostformats.css( 'color', nValue );
		bPostformatsWrap.find('small a').css( 'color', nValue );
	});

	royalLivePreview( 'bPost_formats', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			bPostformats.css({
				'border-radius' : bPost_formats_rad + 'px'
			});

		} else {

			bPostformats.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'bPost_formats', 'radius', function( nValue ) {
		bPost_formats_rad = nValue;
		bPostformats.css( 'border-radius', bPost_formats_rad + 'px' );
	});


/* ----------------- Post Formats Font Options ----------------- */

	royalGoogleFontsPreview( 'bPost_formats', 'font_family', bPostformatsWrap );

	royalLivePreview( 'bPost_formats', 'font_size', function( nValue ) {
		bPostformatsWrap.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'line_height', function( nValue ) {
		bPostformatsWrap.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'letter_space', function( nValue ) {
		bPostformatsWrap.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'font_weight', function( nValue ) {
		bPostformatsWrap.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'bPost_formats', 'italic', function( nValue ) {
		if ( nValue === true ) {
			bPostformatsWrap.css( 'font-style', 'italic' );
		} else {
			bPostformatsWrap.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'bPost_formats', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			bPostformatsWrap.css( 'text-transform', 'uppercase' );
		} else {
			bPostformatsWrap.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'bPost_formats', 'underline', function( nValue ) {
		if ( nValue === true ) {
			bPostformatsWrap.find('small a').css( 'text-decoration', 'underline' );
		} else {
			bPostformatsWrap.find('small a').css( 'text-decoration', 'none' );
		}
	});



/*
***************************************************************
* #Blog Single
***************************************************************
*/

// define variables
	var bSingleHeader = $('.blog-single-header'),
		blogTitleAndMeta = bSingleHeader.find('.title-and-meta');

/* ----------------- Header General Options ----------------- */

	royalLivePreview( 'bSingle_header', 'position', function( nValue ) {
		var tmpHeader = $('.blog-single-header').remove();

		if ( nValue === 'above' ) {

			$('.single-post .single-wrap').prepend( tmpHeader );
			body.removeClass('single-header-below-b');
			$('.title-and-meta').css( 'padding-bottom', '0' );

		} else if ( nValue === 'below' ) {
			
			if ( $('.single-post .featured-media, .gallery-slideshow').length > 0 ) {
				$('.single-post .featured-media, .gallery-slideshow').after( tmpHeader );
			} else {
				$('.single-post .single-wrap').prepend( tmpHeader );
			}

			body.addClass('single-header-below-b');
			$('[class*=single-header-below] .title-and-meta').css( 'padding-bottom', typography_text_margins +'px' );
		}

		sidebarEqual();
	});

	royalLivePreview( 'bSingle_header', 'align', function( nValue ) {
		blogTitleAndMeta.css( 'text-align', nValue );
	});

	royalLivePreview( 'bSingle_header', 'display_date', function( nValue ) {

		if ( nValue === false ) {
			blogTitleAndMeta.find('.post-date').hide();
		} else {
			blogTitleAndMeta.find('.post-date').show();
		}

		royalHideSeparators();
		sidebarEqual();

	});

	royalLivePreview( 'bSingle_header', 'display_cats', function( nValue ) {

		if ( nValue === false ) {
			blogTitleAndMeta.find('.post-categories').hide();
		} else {
			blogTitleAndMeta.find('.post-categories').show();
		}

		royalHideSeparators();
		sidebarEqual();

	});

	royalLivePreview( 'bSingle_header', 'display_comments', function( nValue ) {

		if ( nValue === false ) {
			blogTitleAndMeta.find('.post-comments-wrap').hide();
		} else {
			blogTitleAndMeta.find('.post-comments-wrap').show();
		}

		royalHideSeparators();
		sidebarEqual();

	});

	royalLivePreview( 'bSingle_header', 'display_author', function( nValue ) {

		if ( nValue === false ) {
			blogTitleAndMeta.find('.posted-by').hide();
		} else {
			blogTitleAndMeta.find('.posted-by').show();
		}

		royalHideSeparators();
		sidebarEqual();

	});



// define variables
	var bSingleNavPrev 			 = $('.single-post .previous-post'),
		bSingleNavNxt 			 = $('.single-post .next-post'),
		bSingleNavPrevNxt 		 = $('.single-post .next-post, .single-post .previous-post'),
		bSingle_nav_label 		 = royal_options.bSingle_nav.label,
		bSingle_nav_position 	 = royal_options.bSingle_nav.position,
		bSingle_nav_width 		 = royal_options.bSingle_nav.width,
		bSingle_nav_height 		 = royal_options.bSingle_nav.height,
		bSingle_nav_bg_col		 = royal_options.bSingle_nav.bg_col,
		bSingle_nav_bg_col_tr	 = royal_options.bSingle_nav.bg_col_tr,
		bSingle_nav_txt_col		 = royal_options.bSingle_nav.txt_col,
		bSingle_nav_bg_hcol		 = royal_options.bSingle_nav.bg_hcol,
		bSingle_nav_bg_hcol_tr	 = royal_options.bSingle_nav.bg_hcol_tr,
		bSingle_nav_txt_hcol	 = royal_options.bSingle_nav.txt_hcol,
		bSingle_nav_bd_hcol		 = royal_options.bSingle_nav.bd_hcol,
		bSingle_nav_border_label = royal_options.bSingle_nav.border_label,
		bSingle_nav_border_size	 = royal_options.bSingle_nav.border_size,
		bSingle_nav_border_style = royal_options.bSingle_nav.border_style,
		bSingle_nav_border_color = royal_options.bSingle_nav.border_color,
		bSingle_nav_rad			 = royal_options.bSingle_nav.radius,
		bSingle_nav_shad_h		 = royal_options.bSingle_nav.shad_h,
		bSingle_nav_shad_v		 = royal_options.bSingle_nav.shad_v,
		bSingle_nav_shad_bl		 = royal_options.bSingle_nav.shad_bl,
		bSingle_nav_shad_sp		 = royal_options.bSingle_nav.shad_sp,
		bSingle_nav_shad_col	 = royal_options.bSingle_nav.shad_col,
		bSingle_nav_shad_col_tr	 = royal_options.bSingle_nav.shad_col_tr,
		bSingle_nav_shad_in		 = royal_options.bSingle_nav.shad_in;

/* ----------------- Navigation General Options ----------------- */

	royalLivePreview( 'bSingle_nav', 'label', function( nValue ) {
		bSingle_nav_label = nValue;

		if ( nValue === true ) {
			body.removeClass('hide-nxt-prev-b');
		} else {
			body.addClass('hide-nxt-prev-b');
		}

		bSingleSharingWidth();
		sidebarEqual();
	});

	function bSingleSharingWidth() {
		if ( bSingle_nav_position === 'sharing' && bSingle_nav_label === true ) {

			$('.single-post .single-socials-wrap').css({
				'width' 	  : '-webkit-calc(100% - '+ ( bSingle_nav_width * 2 ) +'px)',
				'width' 	  : 'calc(100% - '+ ( bSingle_nav_width * 2 ) +'px)',
				'line-height' : bSingle_nav_height +'px'
			});

			bSingleNavPrevNxt.css( 'top', bSingle_share_padding_tp +'px' );

			if ( body.hasClass('hide-single-sharing-b') ) {
				$('.single-post .single-socials-wrap').css({
					'height' : bSingle_nav_height +'px'
				});
			} else {
				$('.single-post .single-socials-wrap').css({
					'height' : 'auto'
				});
			}

		} else {

			$('.single-post .single-socials-wrap').css({
				'width' 	  : '100%',
				'height' 	  : 'auto',
				'line-height' : '1'
			});

			bSingleNavPrevNxt.css( 'top','' );
		}
	}

	royalLivePreview( 'bSingle_nav', 'position', function( nValue ) {
		bSingle_nav_position = nValue;

		if ( nValue === 'header' ) {
			body.removeClass('header-nxt-prev-b sharing-nxt-prev-b');
			body.addClass('header-nxt-prev-b');
		} else {
			body.removeClass('header-nxt-prev-b sharing-nxt-prev-b');
			body.addClass('sharing-nxt-prev-b');
		}

		bSingleSharingWidth();
		sidebarEqual();
	});

	royalLivePreview( 'bSingle_nav', 'prev_text', function( nValue ) {
		bSingleNavPrev.find('span').text( nValue );
		sidebarEqual();
	});

	royalLivePreview( 'bSingle_nav', 'next_text', function( nValue ) {
		bSingleNavNxt.find('span').text( nValue );
		sidebarEqual();
	});

	royalLivePreview( 'bSingle_nav', 'prev_nxt_icon', function( nValue ) {
		bSingleNavPrev.find('i').removeAttr('class');
		bSingleNavPrev.find('i').addClass( 'rf-button fa fa-'+ nValue +'-left' );
		bSingleNavNxt.find('i').removeAttr('class');
		bSingleNavNxt.find('i').addClass( 'rf-button fa fa-'+ nValue +'-right' );
	});


/* ----------------- Navigation Spacing Options ----------------- */

	royalLivePreview( 'bSingle_nav', 'width', function( nValue ) {
		bSingle_nav_width = nValue;

		bSingleNavPrevNxt.css( 'width', nValue +'px' );
		bSingleSharingWidth();
	});

	function bSingleNavHeight() {

		var bSingle_nav_Lheight = parseInt( bSingle_nav_height, 10 );

		if ( bSingle_nav_border_label === true ) {
			bSingle_nav_Lheight = parseInt( bSingle_nav_height, 10 ) - parseInt( bSingle_nav_border_size, 10 ) * 2;
		}

		bSingleNavPrevNxt.css({
			'height' 	  : bSingle_nav_height +'px',
			'line-height' : bSingle_nav_Lheight +'px'
		});

	}

	royalLivePreview( 'bSingle_nav', 'height', function( nValue ) {
		bSingle_nav_height = nValue;

		bSingleNavHeight();
		bSingleSharingWidth();
	});

	royalLivePreview( 'bSingle_nav', 'margin_tp', function( nValue ) {
		$('.single-post .nxt-prev-post').css( 'margin-top', nValue +'px' );
	});

	royalLivePreview( 'bSingle_nav', 'space_between', function( nValue ) {
		bSingleNavPrev.css( 'margin-right', nValue +'px' );
	});


/* ----------------- Navigation Styling Options ----------------- */

	function bSingleNavPrevNxtHover() {
		bSingleNavPrevNxt.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( bSingle_nav_bg_hcol, bSingle_nav_bg_hcol_tr ),
				'color' 			: bSingle_nav_txt_hcol,
				'border-color' 		: bSingle_nav_bd_hcol
			});

		}, function() {

			bSingleNavPrevNxt.css({
				'background-color' 	: royalHex2Rgba( bSingle_nav_bg_col, bSingle_nav_bg_col_tr ),
				'color' 			: bSingle_nav_txt_col,
				'border-color' 		: bSingle_nav_border_color
			});

		});
	}

	bSingleNavPrevNxtHover();

	royalLivePreview( 'bSingle_nav', 'bg_col', function( nValue ) {
		bSingle_nav_bg_col = nValue;
		bSingleNavPrevNxt.css( 'background-color', royalHex2Rgba( bSingle_nav_bg_col, bSingle_nav_bg_col_tr ) );
	});

	royalLivePreview( 'bSingle_nav', 'bg_col_tr', function( nValue ) {
		bSingle_nav_bg_col_tr = nValue;
		bSingleNavPrevNxt.css( 'background-color', royalHex2Rgba( bSingle_nav_bg_col, bSingle_nav_bg_col_tr ) );
	});

	royalLivePreview( 'bSingle_nav', 'txt_col', function( nValue ) {
		bSingle_nav_txt_col = nValue;
		bSingleNavPrevNxt.css( 'color', bSingle_nav_txt_col );
	});

	royalLivePreview( 'bSingle_nav', 'bg_hcol', function( nValue ) {
		bSingle_nav_bg_hcol = nValue;
	});

	royalLivePreview( 'bSingle_nav', 'bg_hcol_tr', function( nValue ) {
		bSingle_nav_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'bSingle_nav', 'txt_hcol', function( nValue ) {
		bSingle_nav_txt_hcol = nValue;
	});

	royalLivePreview( 'bSingle_nav', 'bd_hcol', function( nValue ) {
		bSingle_nav_bd_hcol = nValue;
	});

	royalLivePreview( 'bSingle_nav', 'border_label', function( nValue ) {
		bSingle_nav_border_label = nValue;

		if ( nValue === true ) {
			bSingleNavPrevNxt.css( 'border-width', bSingle_nav_border_size +'px' );
			bSingleNavPrevNxt.css( 'border-style', bSingle_nav_border_style );
			bSingleNavPrevNxt.css( 'border-color', bSingle_nav_border_color );
		} else {
			bSingleNavPrevNxt.css( 'border', 'none' );
		}

		bSingleNavHeight();
	});

	royalLivePreview( 'bSingle_nav', 'border_size', function( nValue ) {
		bSingle_nav_border_size = nValue;
		bSingleNavPrevNxt.css( 'border-width', bSingle_nav_border_size +'px' );
		bSingleNavHeight();
	});

	royalLivePreview( 'bSingle_nav', 'border_style', function( nValue ) {
		bSingle_nav_border_style = nValue;
		bSingleNavPrevNxt.css( 'border-style', bSingle_nav_border_style );
	});

	royalLivePreview( 'bSingle_nav', 'border_color', function( nValue ) {
		bSingle_nav_border_color = nValue;
		bSingleNavPrevNxt.css( 'border-color', bSingle_nav_border_color );
	});

	royalLivePreview( 'bSingle_nav', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			bSingleNavPrevNxt.css({
				'border-radius' : bSingle_nav_rad + 'px'
			});

		} else {

			bSingleNavPrevNxt.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'bSingle_nav', 'radius', function( nValue ) {
		bSingle_nav_rad = nValue;
		bSingleNavPrevNxt.css( 'border-radius', bSingle_nav_rad + 'px' );
	});

	function bSingleNavPrevNxtShadow() {
		bSingleNavPrevNxt.css( 'box-shadow', royalShadow( [
			bSingle_nav_shad_h,
			bSingle_nav_shad_v,
			bSingle_nav_shad_bl,
			bSingle_nav_shad_sp,
			bSingle_nav_shad_col,
			bSingle_nav_shad_col_tr,
			bSingle_nav_shad_in
		] ) );
	}

	royalLivePreview( 'bSingle_nav', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			bSingleNavPrevNxtShadow();
		} else {
			bSingleNavPrevNxt.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'bSingle_nav', 'shad_h', function( nValue ) {
		bSingle_nav_shad_h = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_v', function( nValue ) {
		bSingle_nav_shad_v = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_bl', function( nValue ) {
		bSingle_nav_shad_bl = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_sp', function( nValue ) {
		bSingle_nav_shad_sp = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_col', function( nValue ) {
		bSingle_nav_shad_col = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_col_tr', function( nValue ) {
		bSingle_nav_shad_col_tr = nValue;
		bSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'bSingle_nav', 'shad_in', function( nValue ) {
		bSingle_nav_shad_in = nValue;
		bSingleNavPrevNxtShadow();
	});


/* ----------------- Navigation Font Options ----------------- */

	royalLivePreview( 'bSingle_nav', 'font_size', function( nValue ) {
		bSingleNavPrevNxt.css( 'font-size', nValue + 'px' );
	});


// define variables
	var bSingleShareWrap 			= $('.blog-single .single-post-sharing'),
		bSingle_share_padding_tp 	= royal_options.bSingle_share.padding_tp,
		bSingle_share_bd_size_tp 	= royal_options.bSingle_share.bd_size_tp,
		bSingle_share_bd_style_tp 	= royal_options.bSingle_share.bd_style_tp;

/* ----------------- Sharing General Options ----------------- */

	royalLivePreview( 'bSingle_share', 'label', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.show();
		} else {
			bSingleShareWrap.hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'sharing_label', function( nValue ) {

		if ( nValue === true ) {

			body.removeClass('hide-single-sharing-b');
			bSingleShareWrap.find('.single-socials-wrap span').show();

		} else {

			bSingleShareWrap.find('.single-socials-wrap span').hide();
			body.addClass('hide-single-sharing-b');

		}

		bSingleSharingWidth();
		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'label_text', function( nValue ) {
		bSingleShareWrap.find('.social-share').prev().text( nValue );
		sidebarEqual();
	});

	royalLivePreview( 'bSingle_share', 'share_face', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=facebook]').show();
		} else {
			bSingleShareWrap.find('a[href*=facebook]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_twit', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=twitter]').show();
		} else {
			bSingleShareWrap.find('a[href*=twitter]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_gplus', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=google]').show();
		} else {
			bSingleShareWrap.find('a[href*=google]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_linkin', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=linkedin]').show();
		} else {
			bSingleShareWrap.find('a[href*=linkedin]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_pint', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=pinterest]').show();
		} else {
			bSingleShareWrap.find('a[href*=pinterest]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_tumblr', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=tumblr]').show();
		} else {
			bSingleShareWrap.find('a[href*=tumblr]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'share_reddit', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.find('a[href*=reddit]').show();
		} else {
			bSingleShareWrap.find('a[href*=reddit]').hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'align', function( nValue ) {
		bSingleShareWrap.find('.single-socials-wrap').css( 'text-align', nValue );
	});


/* ----------------- Sharing Spacing Options ----------------- */

	royalLivePreview( 'bSingle_share', 'margin_tp', function( nValue ) {
		bSingleShareWrap.css( 'margin-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'bSingle_share', 'padding_tp', function( nValue ) {
		bSingle_share_padding_tp = nValue;
		bSingleShareWrap.css( 'padding-top', nValue +'px' );

		bSingleSharingWidth();
		sidebarEqual();
	});


/* ----------------- Sharing Styling Options ----------------- */

	royalLivePreview( 'bSingle_share', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			bSingleShareWrap.css( 'border-top', bSingle_share_bd_size_tp +'px '+ bSingle_share_bd_style_tp +' '+  inner_content_border_color );
		} else {
			bSingleShareWrap.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'bSingle_share', 'bd_size_tp', function( nValue ) {
		bSingle_share_bd_size_tp = nValue;
		bSingleShareWrap.css( 'border-top', nValue +'px '+ bSingle_share_bd_style_tp +' '+  inner_content_border_color );

		sidebarEqual();
	});

	royalLivePreview( 'bSingle_share', 'bd_style_tp', function( nValue ) {
		bSingle_share_bd_style_tp = nValue;
		bSingleShareWrap.css( 'border-top', bSingle_share_bd_size_tp +'px '+ nValue +' '+  inner_content_border_color );
	});




/*
***************************************************************
* #Portfolio Page
***************************************************************
*/

// define variables
	var portfolioContainer 		= $('#portfolio-container'),
		pPage_gen_padding_rt	= royal_options.pPage_general.padding_rt,
		pPage_gen_padding_lt	= royal_options.pPage_general.padding_lt,
		pPage_gen_gutter_horz	= royal_options.pPage_general.gutter_horz,
		pPage_gen_bg_col		= royal_options.pPage_general.bg_col,
		pPage_gen_bg_col_tr		= royal_options.pPage_general.bg_col_tr,
		pPage_gen_rad			= royal_options.pPage_general.radius,
		pPage_gen_shad_h		= royal_options.pPage_general.shad_h,
		pPage_gen_shad_v		= royal_options.pPage_general.shad_v,
		pPage_gen_shad_bl		= royal_options.pPage_general.shad_bl,
		pPage_gen_shad_sp		= royal_options.pPage_general.shad_sp,
		pPage_gen_shad_col		= royal_options.pPage_general.shad_col,
		pPage_gen_shad_col_tr	= royal_options.pPage_general.shad_col_tr,
		pPage_gen_shad_in		= royal_options.pPage_general.shad_in;

	// border 4x live update
	var pPage_gen_bd_tp = [
			royal_options.pPage_general.bd_size_tp,
			royal_options.pPage_general.bd_style_tp,
			royal_options.pPage_general.bd_col_tp 
		],
		pPage_gen_bd_rt = [
			royal_options.pPage_general.bd_size_rt,
			royal_options.pPage_general.bd_style_rt,
			royal_options.pPage_general.bd_col_rt
		],
		pPage_gen_bd_bt = [
			royal_options.pPage_general.bd_size_bt,
			royal_options.pPage_general.bd_style_bt,
			royal_options.pPage_general.bd_col_bt
		],
		pPage_gen_bd_lt = [
			royal_options.pPage_general.bd_size_lt,
			royal_options.pPage_general.bd_style_lt,
			royal_options.pPage_general.bd_col_lt
		];

/* ----------------- Page General Options ----------------- */

	royalLivePreview( 'pPage_general', 'layout', function() {
		royalLoading();
	});

	royalLivePreview( 'pPage_general', 'layout', function() {
		royalLoading();
	});

	royalLivePreview( 'pPage_general', 'posts_per_page', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});
	
	royalLivePreview( 'pPage_general', 'columns_rate', function( nValue ) {
		portfolioContainer.attr( 'data-columns-rate', nValue );
		isotopeFn('portfolio');
	});


/* ----------------- Page Spacing Options ----------------- */

	royalLivePreview( 'pPage_general', 'padding_tp', function( nValue ) {
		portfolioContainer.css( 'padding-top', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_general', 'padding_rt', function( nValue ) {
		pPage_gen_padding_rt = nValue;
		portfolioContainer.css( 'padding-right', nValue +'px' );

		masonryMetroGutter( 'portfolio', pPage_gen_gutter_horz, pPage_gen_padding_rt, pPage_gen_padding_lt );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_general', 'padding_bt', function( nValue ) {
		portfolioContainer.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_general', 'padding_lt', function( nValue ) {
		pPage_gen_padding_lt = nValue;
		portfolioContainer.css( 'padding-left', nValue +'px' );

		masonryMetroGutter( 'portfolio', pPage_gen_gutter_horz, pPage_gen_padding_rt, pPage_gen_padding_lt );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_general', 'gutter_horz', function( nValue ) {
		pPage_gen_gutter_horz = nValue;
		portfolioContainer.attr( 'data-gutter-horz', nValue );

		masonryMetroGutter( 'portfolio', pPage_gen_gutter_horz, pPage_gen_padding_rt, pPage_gen_padding_lt );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_general', 'gutter_vert', function( nValue ) {
		portfolioContainer.attr( 'data-gutter-vert', nValue );
		isotopeFn('portfolio');
	});


/* ----------------- Page Styling Options ----------------- */

	royalLivePreview( 'pPage_general', 'bg_col', function( nValue ) {
		pPage_gen_bg_col = nValue;
		portfolioContainer.css( 'background-color', royalHex2Rgba( pPage_gen_bg_col, pPage_gen_bg_col_tr ) );
	});

	royalLivePreview( 'pPage_general', 'bg_col_tr', function( nValue ) {
		pPage_gen_bg_col_tr = nValue;
		portfolioContainer.css( 'background-color', royalHex2Rgba( pPage_gen_bg_col, pPage_gen_bg_col_tr ) );
	});

	royalLivePreview( 'pPage_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( portfolioContainer, pPage_gen_bd_tp, pPage_gen_bd_rt, pPage_gen_bd_bt, pPage_gen_bd_lt );
		} else {
			portfolioContainer.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( portfolioContainer, 'pPage_general', 'top', pPage_gen_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( portfolioContainer, 'pPage_general', 'right', pPage_gen_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( portfolioContainer, 'pPage_general', 'bottom', pPage_gen_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( portfolioContainer, 'pPage_general', 'left', pPage_gen_bd_lt, 'isotopeFn' );

	royalLivePreview( 'pPage_general', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			portfolioContainer.css({
				'border-radius' : pPage_gen_rad + 'px'
			});

		} else {

			portfolioContainer.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'pPage_general', 'radius', function( nValue ) {
		pPage_gen_rad = nValue;
		portfolioContainer.css( 'border-radius', pPage_gen_rad + 'px' );
	});

	function portfolioContainerShadow() {
		portfolioContainer.css( 'box-shadow', royalShadow( [
			pPage_gen_shad_h,
			pPage_gen_shad_v,
			pPage_gen_shad_bl,
			pPage_gen_shad_sp,
			pPage_gen_shad_col,
			pPage_gen_shad_col_tr,
			pPage_gen_shad_in
		] ) );
	}

	royalLivePreview( 'pPage_general', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			portfolioContainerShadow();
		} else {
			portfolioContainer.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pPage_general', 'shad_h', function( nValue ) {
		pPage_gen_shad_h = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_v', function( nValue ) {
		pPage_gen_shad_v = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_bl', function( nValue ) {
		pPage_gen_shad_bl = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_sp', function( nValue ) {
		pPage_gen_shad_sp = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_col', function( nValue ) {
		pPage_gen_shad_col = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_col_tr', function( nValue ) {
		pPage_gen_shad_col_tr = nValue;
		portfolioContainerShadow();
	});

	royalLivePreview( 'pPage_general', 'shad_in', function( nValue ) {
		pPage_gen_shad_in = nValue;
		portfolioContainerShadow();
	});



// define variables
	var portfolioPost 			= portfolioContainer.find('.portfolio-post'),
		pPage_post_even_highlt	= royal_options.pPage_post.highlight_even,
		pPage_post_even_bg_col	= royal_options.pPage_post.even_bg_col,
		pPage_post_bg_col		= royal_options.pPage_post.bg_col,
		pPage_post_bg_col_tr	= royal_options.pPage_post.bg_col_tr,
	    pPage_post_link_col  	= royal_options.pPage_post.link_color,
	    pPage_post_link_hcol 	= royal_options.pPage_post.link_hcolor,
		pPage_post_rad			= royal_options.pPage_post.radius,
		pPage_post_shad_h		= royal_options.pPage_post.shad_h,
		pPage_post_shad_v		= royal_options.pPage_post.shad_v,
		pPage_post_shad_bl		= royal_options.pPage_post.shad_bl,
		pPage_post_shad_sp		= royal_options.pPage_post.shad_sp,
		pPage_post_shad_col		= royal_options.pPage_post.shad_col,
		pPage_post_shad_col_tr	= royal_options.pPage_post.shad_col_tr,
		pPage_post_shad_in		= royal_options.pPage_post.shad_in;

	// border 4x live update
	var pPage_post_bd_tp = [
			royal_options.pPage_post.bd_size_tp,
			royal_options.pPage_post.bd_style_tp,
			royal_options.pPage_post.bd_col_tp 
		],
		pPage_post_bd_rt = [
			royal_options.pPage_post.bd_size_rt,
			royal_options.pPage_post.bd_style_rt,
			royal_options.pPage_post.bd_col_rt
		],
		pPage_post_bd_bt = [
			royal_options.pPage_post.bd_size_bt,
			royal_options.pPage_post.bd_style_bt,
			royal_options.pPage_post.bd_col_bt
		],
		pPage_post_bd_lt = [
			royal_options.pPage_post.bd_size_lt,
			royal_options.pPage_post.bd_style_lt,
			royal_options.pPage_post.bd_col_lt
		];

/* ----------------- Post Spacing Options ----------------- */

	royalLivePreview( 'pPage_post', 'text_padding_tp', function( nValue ) {
		portfolioPost.find('.post-text-wrap').css( 'padding-top', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_post', 'text_padding_rt', function( nValue ) {
		portfolioPost.find('.post-text-wrap').css( 'padding-right', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_post', 'text_padding_bt', function( nValue ) {
		portfolioPost.find('.post-text-wrap').css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPage_post', 'text_padding_lt', function( nValue ) {
		portfolioPost.find('.post-text-wrap').css( 'padding-left', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Post Styling Options ----------------- */

	royalLivePreview( 'pPage_post', 'bg_col', function( nValue ) {

		pPage_post_bg_col = nValue;

		if ( pPage_post_even_highlt === true ) {

			portfolioPost.filter(':even').css( 'background-color', royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post:nth-child(2n+1) .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr )
			});	

		} else {

			portfolioPost.css( 'background-color', royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr )
			});

		}

	});

	royalLivePreview( 'pPage_post', 'highlight_even', function( nValue ) {

		pPage_post_even_highlt = nValue;

		if ( nValue === true ) {

			portfolioPost.filter(':odd').css( 'background-color', royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post:nth-child(2n) .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr )
			});

		} else {

			portfolioPost.css( 'background-color', royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr )
			});

		}

	});

	royalLivePreview( 'pPage_post', 'even_bg_col', function( nValue ) {

		pPage_post_even_bg_col = nValue;

		if ( pPage_post_even_highlt === true ) {

			portfolioPost.filter(':odd').css( 'background-color', royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post:nth-child(2n) .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr )
			});

		}

	});

	royalLivePreview( 'pPage_post', 'bg_col_tr', function( nValue ) {

		pPage_post_bg_col_tr = nValue;

		if ( pPage_post_even_highlt === true ) {

			portfolioPost.filter(':odd').css( 'background-color', royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post:nth-child(2n) .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_even_bg_col, pPage_post_bg_col_tr )
			});

			portfolioPost.filter(':even').css( 'background-color', royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ) );

			$('.portfolio-post:nth-child(2n+1) .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr )
			});

		} else {

			portfolioPost.css( 'background-color', royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ) );
		
			$('.portfolio-post .triangle-wrap').css({
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr )
			});

		}

	});

	function pPostLinkHover() {
	    $('.portfolio-post a:not(.post-title a, .more-info), .portfolio-post .testimonial-wrap a, .portfolio-post .social-share-wrap i').hover(function() {
	        $(this).css( 'color', pPage_post_link_hcol );
	    }, function() {
	        $(this).css( 'color', pPage_post_link_col );
	    });
	}

	pPostLinkHover();
    
    royalLivePreview( 'pPage_post', 'text_color', function( nValue ) {
        $('.portfolio-post .post-description, .portfolio-post .before-cats, .portfolio-post .testimonial-wrap').css( 'color', nValue );
    });

    royalLivePreview( 'pPage_post', 'meta_color', function( nValue ) {
        $('.portfolio-post .time-and-author').css( 'color', nValue );
    });

    royalLivePreview( 'pPage_post', 'link_color', function( nValue ) {
        pPage_post_link_col = nValue;
        $('.portfolio-post a:not(.post-title a, .more-info), .portfolio-post .social-share-wrap i, .portfolio-post .likes-and-comments .meta-sep, .portfolio-post .post-categories').css( 'color', nValue );
    });

    royalLivePreview( 'pPage_post', 'link_hcolor', function( nValue ) {
        pPage_post_link_hcol = nValue;
    });

	royalLivePreview( 'pPage_post', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( portfolioPost, pPage_post_bd_tp, pPage_post_bd_rt, pPage_post_bd_bt, pPage_post_bd_lt );
		} else {
			portfolioPost.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( portfolioPost, 'pPage_post', 'top', pPage_post_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( portfolioPost, 'pPage_post', 'right', pPage_post_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( portfolioPost, 'pPage_post', 'bottom', pPage_post_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( portfolioPost, 'pPage_post', 'left', pPage_post_bd_lt, 'isotopeFn' );

	royalLivePreview( 'pPage_post', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			portfolioPost.css({
				'border-radius' : pPage_post_rad + 'px'
			});

		} else {

			portfolioPost.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'pPage_post', 'radius', function( nValue ) {
		pPage_post_rad = nValue;
		portfolioPost.css( 'border-radius', pPage_post_rad + 'px' );
	});

	function portfolioPostShadow() {
		portfolioPost.css( 'box-shadow', royalShadow( [
			pPage_post_shad_h,
			pPage_post_shad_v,
			pPage_post_shad_bl,
			pPage_post_shad_sp,
			pPage_post_shad_col,
			pPage_post_shad_col_tr,
			pPage_post_shad_in
		] ) );
	}

	royalLivePreview( 'pPage_post', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			portfolioPostShadow();
		} else {
			portfolioPost.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pPage_post', 'shad_h', function( nValue ) {
		pPage_post_shad_h = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_v', function( nValue ) {
		pPage_post_shad_v = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_bl', function( nValue ) {
		pPage_post_shad_bl = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_sp', function( nValue ) {
		pPage_post_shad_sp = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_col', function( nValue ) {
		pPage_post_shad_col = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_col_tr', function( nValue ) {
		pPage_post_shad_col_tr = nValue;
		portfolioPostShadow();
	});

	royalLivePreview( 'pPage_post', 'shad_in', function( nValue ) {
		pPage_post_shad_in = nValue;
		portfolioPostShadow();
	});


/* ----------------- Post Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', portfolioPost );



// define variables 
	var portfolioMediaWrap 				= $('.portfolio-post .post-media-wrap'),
		portfolioMedia 					= portfolioMediaWrap.find('.post-media-in-wrap'),
		portfolioMediaHovers 			= portfolioMedia.find('.media-hovers'),
		pPost_media_bg_color			= royal_options.pPost_media.bg_color,
		pPost_media_bg_color_tr			= royal_options.pPost_media.bg_color_tr,
		pPost_media_bg_grad_angle 		= royal_options.pPost_media.bg_grad_angle,
		pPost_media_bg_grad_col_1 		= royal_options.pPost_media.bg_grad_col_1,
		pPost_media_bg_grad_col_1_tr 	= royal_options.pPost_media.bg_grad_col_1_tr,
		pPost_media_bg_grad_col_1_ps 	= royal_options.pPost_media.bg_grad_col_1_ps,
		pPost_media_bg_grad_col_2 		= royal_options.pPost_media.bg_grad_col_2,
		pPost_media_bg_grad_col_2_tr 	= royal_options.pPost_media.bg_grad_col_2_tr,
		pPost_media_bg_grad_col_2_ps 	= royal_options.pPost_media.bg_grad_col_2_ps,
		pPost_media_bg_img 				= royal_options.pPost_media.bg_img,
		pPost_media_bg_img_att 			= royal_options.pPost_media.bg_img_att,
		pPost_media_bg_img_sz 			= royal_options.pPost_media.bg_img_sz,
		pPost_media_rad					= royal_options.pPost_media.radius,
		pPost_media_shad_h				= royal_options.pPost_media.shad_h,
		pPost_media_shad_v				= royal_options.pPost_media.shad_v,
		pPost_media_shad_bl				= royal_options.pPost_media.shad_bl,
		pPost_media_shad_sp				= royal_options.pPost_media.shad_sp,
		pPost_media_shad_col			= royal_options.pPost_media.shad_col,
		pPost_media_shad_col_tr			= royal_options.pPost_media.shad_col_tr;

	// border 4x live update
	var pPost_media_bd_tp = [
			royal_options.pPost_media.bd_size_tp,
			royal_options.pPost_media.bd_style_tp,
			royal_options.pPost_media.bd_col_tp 
		],
		pPost_media_bd_rt = [
			royal_options.pPost_media.bd_size_rt,
			royal_options.pPost_media.bd_style_rt,
			royal_options.pPost_media.bd_col_rt
		],
		pPost_media_bd_bt = [
			royal_options.pPost_media.bd_size_bt,
			royal_options.pPost_media.bd_style_bt,
			royal_options.pPost_media.bd_col_bt
		],
		pPost_media_bd_lt = [
			royal_options.pPost_media.bd_size_lt,
			royal_options.pPost_media.bd_style_lt,
			royal_options.pPost_media.bd_col_lt
		];

	// info hovers
		var pPost_media_hover_fade 			 = royal_options.pPost_media.hover_fade,
			pPost_media_hover_grow 			 = royal_options.pPost_media.hover_grow,
			pPost_media_hover_slide 		 = royal_options.pPost_media.hover_slide,
			pPost_media_hover_skew 			 = royal_options.pPost_media.hover_skew,
			pPost_media_hover_skew_full 	 = royal_options.pPost_media.hover_skew_full,
			pPost_media_hover_skew_full_fade = royal_options.pPost_media.hover_skew_full_fade;

	// all info hovers in array
		var mediaHoversArray = [
			'media-hover-fade',
			'media-hover-fade-out',
			'media-hover-center-grow',
			'media-hover-center-grow-full',
			'media-hover-top-left-grow',
			'media-hover-top-right-grow',
			'media-hover-bottom-left-grow',
			'media-hover-bottom-right-grow',
			'media-hover-top-slide',
			'media-hover-bottom-slide',
			'media-hover-left-slide',
			'media-hover-right-slide',
			'media-hover-skew-top',
			'media-hover-skew-bottom',
			'media-hover-skew-left',
			'media-hover-skew-right',
			'media-hover-skew-full-top',
			'media-hover-skew-full-bottom',
			'media-hover-skew-full-left',
			'media-hover-skew-full-right',
			'media-hover-skew-full-fade-top',
			'media-hover-skew-full-fade-bottom',
			'media-hover-skew-full-fade-left',
			'media-hover-skew-full-fade-right'
		];

/* ----------------- Media General Options ----------------- */

	royalLivePreview( 'pPost_media', 'hover_link', function() {
		royalLoading();
	});
	
	function royalMediaHovers( exclude ) {
		var mediaHovers = mediaHoversArray.join(' ');
		return mediaHovers.replace( exclude, '' );
	}

	royalLivePreview( 'pPost_media', 'info_hovers_select', function( nValue ) {

		if ( nValue === 'fade' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_fade ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_fade );

		} else if ( nValue === 'grow' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_grow ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_grow );

		} else if ( nValue === 'slide' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_slide ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_slide );

		} else if ( nValue === 'skew' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew );

		} else if ( nValue === 'sk-full' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew_full ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew_full );

		} else if ( nValue === 'skfull-fd' ) {
			portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew_full_fade ) );
			portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew_full_fade );

		} else {

			portfolioMediaHovers.each(function() {

				var rand = Math.floor( Math.random() * mediaHoversArray.length - 1 ) + 1;

				$(this).removeClass( royalMediaHovers( mediaHoversArray[rand] ) );
				$(this).addClass( mediaHoversArray[rand] );

				if ( mediaHoversArray[rand] === 'media-hover-fade-out' ) {
					$(this).removeClass( 'media-hover-fade-out' );
					$(this).addClass( 'media-hover-fade' );
				}

			});

		}

	});

	royalLivePreview( 'pPost_media', 'hover_fade', function( nValue ) {
		pPost_media_hover_fade = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_fade ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_fade );
	});

	royalLivePreview( 'pPost_media', 'hover_grow', function( nValue ) {
		pPost_media_hover_grow = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_grow ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_grow );
	});

	royalLivePreview( 'pPost_media', 'hover_slide', function( nValue ) {
		pPost_media_hover_slide = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_slide ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_slide );
	});

	royalLivePreview( 'pPost_media', 'hover_skew', function( nValue ) {
		pPost_media_hover_skew = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew );
	});

	royalLivePreview( 'pPost_media', 'hover_skew_full', function( nValue ) {
		pPost_media_hover_skew_full = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew_full ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew_full );
	});

	royalLivePreview( 'pPost_media', 'hover_skew_full_fade', function( nValue ) {
		pPost_media_hover_skew_full_fade = nValue;
		portfolioMediaHovers.removeClass( royalMediaHovers( 'media-hover-'+ pPost_media_hover_skew_full_fade ) );
		portfolioMediaHovers.addClass( 'media-hover-'+ pPost_media_hover_skew_full_fade );
	});

	royalLivePreview( 'pPost_media', 'info_hover_trans', function( nValue ) {
		portfolioMediaHovers.css({
			'-webkit-transition' : 'all '+ nValue +'ms ease 0s',
			'transition' 		 : 'all '+ nValue +'ms ease 0s'
		});
	});


/* ----------------- Media Spacing Options ----------------- */

	royalLivePreview( 'pPost_media', 'padding_tp', function( nValue ) {
		portfolioMediaWrap.css( 'padding-top', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_media', 'padding_rt', function( nValue ) {
		portfolioMediaWrap.css( 'padding-right', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_media', 'padding_bt', function( nValue ) {
		portfolioMediaWrap.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_media', 'padding_lt', function( nValue ) {
		portfolioMediaWrap.css( 'padding-left', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_media', 'info_padding_tp', function( nValue ) {
		portfolioMediaHovers.css( 'padding-top', nValue +'%' );
	});

	royalLivePreview( 'pPost_media', 'info_padding_rt', function( nValue ) {
		portfolioMediaHovers.css( 'padding-right', nValue +'%' );
	});

	royalLivePreview( 'pPost_media', 'info_padding_bt', function( nValue ) {
		portfolioMediaHovers.css( 'padding-bottom', nValue +'%' );
	});

	royalLivePreview( 'pPost_media', 'info_padding_lt', function( nValue ) {
		portfolioMediaHovers.css( 'padding-left', nValue +'%' );
	});


/* ----------------- Media Styling Options ----------------- */

	royalLivePreview( 'pPost_media', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			portfolioMediaHovers,
			nValue,
			[
				pPost_media_bg_color,
				pPost_media_bg_color_tr
			], [
				pPost_media_bg_grad_angle,
				pPost_media_bg_grad_col_1,
				pPost_media_bg_grad_col_1_tr,
				pPost_media_bg_grad_col_1_ps,
				pPost_media_bg_grad_col_2,
				pPost_media_bg_grad_col_2_tr,
				pPost_media_bg_grad_col_2_ps,
			], [
				pPost_media_bg_img,
				pPost_media_bg_img_sz,
				pPost_media_bg_img_att
			]
		);

	});

	royalLivePreview( 'pPost_media', 'bg_color', function( nValue ) {
		pPost_media_bg_color = nValue;
		portfolioMediaHovers.css( 'background-color', royalHex2Rgba( pPost_media_bg_color, pPost_media_bg_color_tr ) );
	});

	royalLivePreview( 'pPost_media', 'bg_color_tr', function( nValue ) {
		pPost_media_bg_color_tr = nValue;
		portfolioMediaHovers.css( 'background-color', royalHex2Rgba( pPost_media_bg_color, pPost_media_bg_color_tr ) );
	});

	function portfolioMediaHoversGradient() {
		portfolioMediaHovers.css({
			'background-image' : royalGradient( [ 
				pPost_media_bg_grad_angle,
				pPost_media_bg_grad_col_1,
				pPost_media_bg_grad_col_1_tr,
				pPost_media_bg_grad_col_1_ps,
				pPost_media_bg_grad_col_2,
				pPost_media_bg_grad_col_2_tr,
				pPost_media_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'pPost_media', 'bg_grad_angle', function( nValue ) {
		pPost_media_bg_grad_angle = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_1', function( nValue ) {
		pPost_media_bg_grad_col_1 = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_1_tr', function( nValue ) {
		pPost_media_bg_grad_col_1_tr = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_1_ps', function( nValue ) {
		pPost_media_bg_grad_col_1_ps = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_2', function( nValue ) {
		pPost_media_bg_grad_col_2 = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_2_tr', function( nValue ) {
		pPost_media_bg_grad_col_2_tr = nValue;
		portfolioMediaHoversGradient();
	});

	royalLivePreview( 'pPost_media', 'bg_grad_col_2_ps', function( nValue ) {
		pPost_media_bg_grad_col_2_ps = nValue;
		portfolioMediaHoversGradient();
	});


	royalLivePreview( 'pPost_media', 'bg_img', function( nValue ) {

		pPost_media_bg_img = nValue;
		portfolioMediaHovers.css({
			'background-image' : 'url( '+ pPost_media_bg_img +' )'
		});

	});

	royalLivePreview( 'pPost_media', 'bg_img_sz', function( nValue ) {

		pPost_media_bg_img_sz = nValue;

		royalBgImgSize( portfolioMediaHovers, pPost_media_bg_img_sz );

	});

	royalLivePreview( 'pPost_media', 'bg_img_att', function( nValue ) {

		pPost_media_bg_img_att = nValue;
		portfolioMediaHovers.css({
			'background-attachment' : pPost_media_bg_img_att
		});

	});

	royalLivePreview( 'pPost_media', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( portfolioMedia, pPost_media_bd_tp, pPost_media_bd_rt, pPost_media_bd_bt, pPost_media_bd_lt );
		} else {
			portfolioMedia.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( portfolioMedia, 'pPost_media', 'top', pPost_media_bd_tp, 'isotopeFn' );

	royalBorderLivePreview( portfolioMedia, 'pPost_media', 'right', pPost_media_bd_rt, 'isotopeFn' );

	royalBorderLivePreview( portfolioMedia, 'pPost_media', 'bottom', pPost_media_bd_bt, 'isotopeFn' );

	royalBorderLivePreview( portfolioMedia, 'pPost_media', 'left', pPost_media_bd_lt, 'isotopeFn' );

	royalLivePreview( 'pPost_media', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			portfolioMedia.css({
				'border-radius' : pPost_media_rad + '%'
			});

		} else {

			portfolioMedia.css( 'border-radius', '0' );

		}
	});

	royalLivePreview( 'pPost_media', 'radius', function( nValue ) {
		pPost_media_rad = nValue;
		portfolioMedia.css( 'border-radius', pPost_media_rad + '%' );
	});

	function portfolioMediaShadow() {
		portfolioMedia.css( 'box-shadow', royalShadow( [
			pPost_media_shad_h,
			pPost_media_shad_v,
			pPost_media_shad_bl,
			pPost_media_shad_sp,
			pPost_media_shad_col,
			pPost_media_shad_col_tr
		] ) );
	}

	royalLivePreview( 'pPost_media', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			portfolioMediaShadow();
		} else {
			portfolioMedia.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pPost_media', 'shad_h', function( nValue ) {
		pPost_media_shad_h = nValue;
		portfolioMediaShadow();
	});

	royalLivePreview( 'pPost_media', 'shad_v', function( nValue ) {
		pPost_media_shad_v = nValue;
		portfolioMediaShadow();
	});

	royalLivePreview( 'pPost_media', 'shad_bl', function( nValue ) {
		pPost_media_shad_bl = nValue;
		portfolioMediaShadow();
	});

	royalLivePreview( 'pPost_media', 'shad_sp', function( nValue ) {
		pPost_media_shad_sp = nValue;
		portfolioMediaShadow();
	});

	royalLivePreview( 'pPost_media', 'shad_col', function( nValue ) {
		pPost_media_shad_col = nValue;
		portfolioMediaShadow();
	});

	royalLivePreview( 'pPost_media', 'shad_col_tr', function( nValue ) {
		pPost_media_shad_col_tr = nValue;
		portfolioMediaShadow();
	});



// define variables
	var pPostTitle 		= $('.portfolio-post .post-title'),
		pPostTitleLink	= pPostTitle.find('a'),
		pPost_tt_col	= royal_options.pPost_title.color,
		pPost_tt_hcol	= royal_options.pPost_title.hcolor;

	// border 1x live update
	var pPost_tt_bd_bt = [
			royal_options.pPost_title.bd_size_bt,
			royal_options.pPost_title.bd_style_bt,
			royal_options.pPost_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'pPost_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostTitle.css( 'display', 'block' );
		} else {
			pPostTitle.css( 'display', 'none' );
		}
		
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_title', 'position', function( nValue ) {

		pPostTitle.each(function() {

			// define variables
			var textBlock 	= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				hoverBlock 	= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpTitle 	= $(this).remove();


			// move title to
			if ( nValue === 'above' ) {
				textBlock.first().prepend( tmpTitle );

			} else if ( nValue === 'below' ) {
				textBlock.last().prepend( tmpTitle );

			} else {
				hoverBlock.prepend( tmpTitle );
			}

		});

		pPostTitleLinkHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_title', 'align', function( nValue ) {
		pPostTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'pPost_title', 'padding_bt', function( nValue ) {
		pPostTitleLink.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_title', 'margin_bt', function( nValue ) {
		pPostTitleLink.css( 'margin-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Title Styling Options ----------------- */

	function pPostTitleLinkHover() {
		pPostTitleLink.hover(function() {

			$(this).css( 'color', pPost_tt_hcol );

		}, function() {

			pPostTitleLink.css( 'color', pPost_tt_col );

		});
	}


	royalLivePreview( 'pPost_title', 'color', function( nValue ) {
		pPost_tt_col = nValue;
		pPostTitleLink.css( 'color', nValue );
		pPostTitleLinkHover();
	});

	royalLivePreview( 'pPost_title', 'hcolor', function( nValue ) {
		pPost_tt_hcol = nValue;
		pPostTitleLinkHover();
	});

	royalLivePreview( 'pPost_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pPostTitleLink, 'bottom', pPost_tt_bd_bt );
		} else {
			pPostTitleLink.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostTitleLink, 'pPost_title', 'bottom', pPost_tt_bd_bt, 'isotopeFn' );

	royalLivePreview( 'pPost_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			pPostTitleLink.css( 'display', 'block' );
		} else {
			pPostTitleLink.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'pPost_title', 'font_family', pPostTitleLink );

	royalLivePreview( 'pPost_title', 'font_size', function( nValue ) {
		pPostTitleLink.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_title', 'line_height', function( nValue ) {
		pPostTitleLink.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_title', 'letter_space', function( nValue ) {
		pPostTitleLink.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_title', 'font_weight', function( nValue ) {
		pPostTitleLink.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostTitleLink.css( 'font-style', 'italic' );
		} else {
			pPostTitleLink.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostTitleLink.css( 'text-transform', 'uppercase' );
		} else {
			pPostTitleLink.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});



// define variables
	var pPostCatsWrap = $('.portfolio-post .post-categories'),
		pPostCatsIn	  = pPostCatsWrap.find('.post-cats-in');

	// border 1x live update
	var pPost_cat_bd_bt = [
			royal_options.pPost_cats.bd_size_bt,
			royal_options.pPost_cats.bd_style_bt,
			royal_options.pPost_cats.bd_col_bt 
		];

/* ----------------- Category General Options ----------------- */

	royalLivePreview( 'pPost_cats', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostCatsWrap.css( 'display', 'block' );
		} else {
			pPostCatsWrap.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_cats', 'before_cats', function( nValue ) {
		pPostCatsWrap.find('.before-cats').text( nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'separator', function( nValue ) {

		// remove old separators
		pPostCatsIn.contents().filter(function() {
			return this.nodeType == 3;
		}).remove();

		// add new ones
		pPostCatsIn.find('a').not(':last-child').after(nValue);

		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_cats', 'position', function( nValue ) {

		pPostCatsWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move Cat to
			if ( nValue === 'above' ) {
				if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {
				if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {
				if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}
			}

		});

		pPostLinkHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_cats', 'align', function( nValue ) {
		pPostCatsWrap.css( 'text-align', nValue );
	});


/* ----------------- Category Spacing Options ----------------- */

	royalLivePreview( 'pPost_cats', 'padding_bt', function( nValue ) {
		pPostCatsIn.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'margin_bt', function( nValue ) {
		pPostCatsIn.css( 'margin-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Category Styling Options ----------------- */

	royalLivePreview( 'pPost_cats', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pPostCatsIn, 'bottom', pPost_cat_bd_bt );
		} else {
			pPostCatsIn.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostCatsIn, 'pPost_cats', 'bottom', pPost_cat_bd_bt, 'isotopeFn' );

	royalLivePreview( 'pPost_cats', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			pPostCatsIn.css( 'display', 'block' );
		} else {
			pPostCatsIn.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Category Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', pPostCatsIn );

	royalLivePreview( 'pPost_cats', 'font_size', function( nValue ) {
		pPostCatsIn.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'line_height', function( nValue ) {
		pPostCatsIn.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'letter_space', function( nValue ) {
		pPostCatsIn.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'font_weight', function( nValue ) {
		pPostCatsIn.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_cats', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostCatsIn.css( 'font-style', 'italic' );
		} else {
			pPostCatsIn.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_cats', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostCatsIn.css( 'text-transform', 'uppercase' );
		} else {
			pPostCatsIn.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});



// define variables
	var pPostMeta = $('.portfolio-post .time-and-author');

	// border 1x live update
	var pPost_meta_bd_bt = [
			royal_options.pPost_meta.bd_size_bt,
			royal_options.pPost_meta.bd_style_bt,
			royal_options.pPost_meta.bd_col_bt 
		];

/* ----------------- Meta General Options ----------------- */

	royalLivePreview( 'pPost_meta', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostMeta.css( 'display', 'block' );
		} else {
			pPostMeta.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_meta', 'date', function( nValue ) {

		if ( nValue === true ) {
			pPostMeta.find('.post-date').show();
		} else {
			pPostMeta.find('.post-date').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_meta', 'author', function( nValue ) {

		if ( nValue === true ) {
			pPostMeta.find('.posted-by').show();
		} else {
			pPostMeta.find('.posted-by').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_meta', 'separator', function( nValue ) {

		if ( nValue === true ) {
			pPostMeta.find('.meta-sep').show();
		} else {
			pPostMeta.find('.meta-sep').hide();
		}

		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_meta', 'before_author', function( nValue ) {
		pPostMeta.find('.posted-by span').text( nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'position', function( nValue ) {

		pPostMeta.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {

				if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {

				if ( hoverBlock.find('.post-categories').length > 0 ) {
					hoverBlock.find('.post-categories').after( tmpCat );
				} else if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}	

			}
		});

		pPostLinkHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_meta', 'align', function( nValue ) {
		pPostMeta.css( 'text-align', nValue );
	});


/* ----------------- Meta Spacing Options ----------------- */

	royalLivePreview( 'pPost_meta', 'padding_bt', function( nValue ) {
		pPostMeta.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'margin_bt', function( nValue ) {
		pPostMeta.css( 'margin-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Meta Styling Options ----------------- */

	royalLivePreview( 'pPost_meta', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pPostMeta, 'bottom', pPost_meta_bd_bt );
		} else {
			pPostMeta.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostMeta, 'pPost_meta', 'bottom', pPost_meta_bd_bt, 'isotopeFn' );


/* ----------------- Meta Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', pPostMeta );

	royalLivePreview( 'pPost_meta', 'font_size', function( nValue ) {
		pPostMeta.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'line_height', function( nValue ) {
		pPostMeta.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'letter_space', function( nValue ) {
		pPostMeta.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'font_weight', function( nValue ) {
		pPostMeta.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_meta', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostMeta.css( 'font-style', 'italic' );
		} else {
			pPostMeta.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_meta', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostMeta.css( 'text-transform', 'uppercase' );
		} else {
			pPostMeta.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});



// define variables
	var pPostDesc = $('.portfolio-post .post-description');

	// border 1x live update
	var pPost_desc_bd_bt = [
			royal_options.pPost_desc.bd_size_bt,
			royal_options.pPost_desc.bd_style_bt,
			royal_options.pPost_desc.bd_col_bt 
		];

/* ----------------- Description General Options ----------------- */

	royalLivePreview( 'pPost_desc', 'display_as', function() {
		royalLoading();
	});

	royalLivePreview( 'pPost_desc', 'excerpt_length', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'pPost_desc', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostDesc.css( 'display', 'block' );
		} else {
			pPostDesc.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_desc', 'position', function( nValue ) {
		pPostDesc.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {

				if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {

				if ( hoverBlock.find('.time-and-author').length > 0 ) {
					hoverBlock.find('.time-and-author').after( tmpCat );
				} else if ( hoverBlock.find('.post-categories').length > 0 ) {
					hoverBlock.find('.post-categories').after( tmpCat );
				} else if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}

			}
		});

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_desc', 'align', function( nValue ) {
		pPostDesc.css( 'text-align', nValue );
	});


/* ----------------- Description Spacing Options ----------------- */

	royalLivePreview( 'pPost_desc', 'padding_bt', function( nValue ) {
		pPostDesc.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_desc', 'margin_bt', function( nValue ) {
		pPostDesc.css( 'margin-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Description Styling Options ----------------- */

	royalLivePreview( 'pPost_desc', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pPostDesc, 'bottom', pPost_desc_bd_bt );
		} else {
			pPostDesc.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostDesc, 'pPost_desc', 'bottom', pPost_desc_bd_bt, 'isotopeFn' );


/* ----------------- Description Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', pPostDesc );

	royalLivePreview( 'pPost_desc', 'font_size', function( nValue ) {
		pPostDesc.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_desc', 'line_height', function( nValue ) {
		pPostDesc.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_desc', 'letter_space', function( nValue ) {
		pPostDesc.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_desc', 'font_weight', function( nValue ) {
		pPostDesc.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_desc', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostDesc.css( 'font-style', 'italic' );
		} else {
			pPostDesc.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_desc', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostDesc.css( 'text-transform', 'uppercase' );
		} else {
			pPostDesc.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});



// define variables
	var pPostLikesWrap 		= $('.portfolio-post .likes-and-comments'),
		pPostLikes 			= pPostLikesWrap.find('.rf-likes'),
		pPostComments 		= pPostLikesWrap.find('.post-comments-wrap'),
		pPostSharing 		= pPostLikesWrap.find('.social-share'),
		pPost_likes_align 	= royal_options.pPost_likes.align;
		pPost_more_display 	= royal_options.pPost_more.display;

/* ----------------- Likes, Comments & Sharing General Options ----------------- */

	royalLivePreview( 'pPost_likes', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostLikesWrap.css( 'display', 'block' );
		} else {
			pPostLikesWrap.css( 'display', 'none' );
		}

		pPostMoreWrapAlign();
		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'likes_label', function( nValue ) {

		if ( nValue === true ) {
			pPostLikes.show();
		} else {
			pPostLikes.hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'likes_icon', function( nValue ) {
		pPostLikes.find('i').removeAttr('class');
		pPostLikes.find('i').addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'pPost_likes', 'comments_label', function( nValue ) {

		if ( nValue === true ) {
			pPostComments.show();
		} else {
			pPostComments.hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'comments_icon', function( nValue ) {
		pPostComments.find('i').removeAttr('class');
		pPostComments.find('i').addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'pPost_likes', 'sharing_label', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.parent().show();
		} else {
			pPostSharing.parent().hide();
		}

		royalHideEmpty();
		royalHideSeparators();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_face', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=facebook]').show();
		} else {
			pPostSharing.find('a[href*=facebook]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_twit', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=twitter]').show();
		} else {
			pPostSharing.find('a[href*=twitter]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_gplus', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=google]').show();
		} else {
			pPostSharing.find('a[href*=google]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_linkin', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=linkedin]').show();
		} else {
			pPostSharing.find('a[href*=linkedin]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_pint', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=pinterest]').show();
		} else {
			pPostSharing.find('a[href*=pinterest]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_tumblr', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=tumblr]').show();
		} else {
			pPostSharing.find('a[href*=tumblr]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'share_reddit', function( nValue ) {

		if ( nValue === true ) {
			pPostSharing.find('a[href*=reddit]').show();
		} else {
			pPostSharing.find('a[href*=reddit]').hide();
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_likes', 'open_on', function( nValue ) {
		royalSharingIcons('portfolio-post',nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_likes', 'icon_separator', function( nValue ) {
		pPostLikesWrap.find('.meta-sep').text( nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_likes', 'position', function( nValue ) {

		pPostLikesWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.post-description').length > 0 ) {
					textBlockAbove.find('.post-description').after( tmpCat );
				} else if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {

				if ( textBlockBelow.find('.post-description').length > 0 ) {
					textBlockBelow.find('.post-description').after( tmpCat );
				} else if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {

				if ( hoverBlock.find('.post-description').length > 0 ) {
					hoverBlock.find('.post-description').after( tmpCat );
				} else if ( hoverBlock.find('.time-and-author').length > 0 ) {
					hoverBlock.find('.time-and-author').after( tmpCat );
				} else if ( hoverBlock.find('.post-categories').length > 0 ) {
					hoverBlock.find('.post-categories').after( tmpCat );
				} else if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}

			}
		});

		if ( pPostLikesWrap.siblings('.more-info-wrap').length === 0 ) {
			$('.portfolio-post .more-info-wrap').css( 'padding-top', '0' );
		} else if ( pPost_more_display === 'separate' ) {
			$('.portfolio-post .more-info-wrap').css( 'padding-top', '15px' );
		}

		pPostLikesWrapAlign();
		pPostLinkHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	function pPostLikesWrapAlign() {
		if ( pPost_more_display === 'separate' || pPostLikesWrap.siblings('.more-info-wrap').length === 0 ||( pPost_more_display === 'inline' && pPost_more_label === false ) ) {
			
			if ( pPost_likes_align === 'left' ) {
				pPostLikesWrap.css( 'float', 'left' );
			} else if ( pPost_likes_align === 'right' ) {
				pPostLikesWrap.css( 'float', 'right' );
			} else {
				pPostLikesWrap.css({
					'float' 	 : 'none',
					'text-align' : 'center'
				} );
			}

		} else {
			pPostLikesWrap.css( 'float', 'left' );
		}
	}

	royalLivePreview( 'pPost_likes', 'align', function( nValue ) {
		pPost_likes_align = nValue;
		pPostLikesWrapAlign();
	});


/* ----------------- Likes, Comments & Sharing Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', pPostLikesWrap );

	royalLivePreview( 'pPost_likes', 'font_size', function( nValue ) {
		pPostLikesWrap.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_likes', 'line_height', function( nValue ) {
		pPostLikesWrap.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_likes', 'letter_space', function( nValue ) {
		pPostLikesWrap.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});



// define variables
	var pPostMoreWrap 			= $('.portfolio-post .more-info-wrap'),
		pPostMore 				= pPostMoreWrap.find('.more-info'),
		pPost_more_label 		= royal_options.pPost_more.label,
		pPost_more_display 		= royal_options.pPost_more.display,
		pPost_more_align 		= royal_options.pPost_more.align,
		pPost_more_sep 			= royal_options.pPost_more.separate,
		pPost_more_bg_col		= royal_options.pPost_more.bg_col,
		pPost_more_bg_col_tr	= royal_options.pPost_more.bg_col_tr,
		pPost_more_txt_col		= royal_options.pPost_more.txt_col,
		pPost_more_bg_hcol		= royal_options.pPost_more.bg_hcol,
		pPost_more_bg_hcol_tr	= royal_options.pPost_more.bg_hcol_tr,
		pPost_more_txt_hcol		= royal_options.pPost_more.txt_hcol,
		pPost_more_bd_hcol		= royal_options.pPost_more.bd_hcol,
		pPost_more_rad			= royal_options.pPost_more.radius,
		pPost_more_shad_h		= royal_options.pPost_more.shad_h,
		pPost_more_shad_v		= royal_options.pPost_more.shad_v,
		pPost_more_shad_bl		= royal_options.pPost_more.shad_bl,
		pPost_more_shad_sp		= royal_options.pPost_more.shad_sp,
		pPost_more_shad_col		= royal_options.pPost_more.shad_col,
		pPost_more_shad_col_tr	= royal_options.pPost_more.shad_col_tr,
		pPost_more_shad_in		= royal_options.pPost_more.shad_in;

	// border 4x live update
	var pPost_more_bd_tp = [
			royal_options.pPost_more.bd_size_tp,
			royal_options.pPost_more.bd_style_tp,
			royal_options.pPost_more.bd_col_tp 
		],
		pPost_more_bd_rt = [
			royal_options.pPost_more.bd_size_rt,
			royal_options.pPost_more.bd_style_rt,
			royal_options.pPost_more.bd_col_rt
		],
		pPost_more_bd_bt = [
			royal_options.pPost_more.bd_size_bt,
			royal_options.pPost_more.bd_style_bt,
			royal_options.pPost_more.bd_col_bt
		],
		pPost_more_bd_lt = [
			royal_options.pPost_more.bd_size_lt,
			royal_options.pPost_more.bd_style_lt,
			royal_options.pPost_more.bd_col_lt
		];

/* ----------------- More Info General Options ----------------- */

	royalLivePreview( 'pPost_more', 'info_type', function() {
		royalLoading();
	});

	royalLivePreview( 'pPost_more', 'label', function( nValue ) {
		pPost_more_label = nValue;

		if ( nValue === false ) {
			pPostMoreWrap.hide();
		} else {
			pPostMoreWrap.show();
		}
		
		pPostMoreWrapAlign();
		pPostLikesWrapAlign();
		royalHideEmpty();
		isotopeFn('portfolio');
	});

	function pPostMoreWrapAlign() {
		if ( pPost_more_display === 'inline' ) {

			pPostMoreWrap.css({
				'clear' 	  : 'none',
				'padding-top' : '0',
				'float' 	  : 'right',
			} );

			if ( pPostMoreWrap.siblings('.likes-and-comments:visible').length > 0 ) {
				pPostLikesWrap.css( 'float', 'left' );
			}

		} else {

			if ( pPostMoreWrap.siblings('.likes-and-comments:visible').length > 0 ) {
				pPostMoreWrap.css( 'padding-top', '15px' );
			} else {
				pPostMoreWrap.css( 'padding-top', '0' );
			}

			pPostMoreWrap.css({
				'float' 	 : 'none',
				'clear' 	 : 'both',
				'text-align' : pPost_more_align
			});

			pPostMore.css( 'display', pPost_more_sep );

		}
	}

	royalLivePreview( 'pPost_more', 'display', function( nValue ) {
		pPost_more_display = nValue;

		pPostMoreWrapAlign();
		pPostLikesWrapAlign();
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'align', function( nValue ) {
		pPost_more_align = nValue;

		if ( pPost_more_display === 'separate' ) {
			pPostMoreWrap.css({
				'text-align' : pPost_more_align
			});
		}

		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'separate', function( nValue ) {
		pPost_more_sep = nValue;

		if ( pPost_more_display === 'separate' ) {
			pPostMore.css( 'display', pPost_more_sep );
		}

		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'text', function( nValue ) {
		pPostMoreWrap.find('.read-more span').text( nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'project_text', function( nValue ) {
		pPostMoreWrap.find('.project-link span').text( nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'icon', function( nValue ) {
		pPostMore.find('i').removeAttr('class');
		pPostMore.find('i').addClass( 'rf-button fa fa-' + nValue );
	});

	royalLivePreview( 'pPost_more', 'position', function( nValue ) {

		pPostMoreWrap.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.likes-and-comments').length > 0 ) {
					textBlockAbove.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockAbove.find('.post-description').length > 0 ) {
					textBlockAbove.find('.post-description').after( tmpCat );
				} else if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {

				if ( textBlockBelow.find('.likes-and-comments').length > 0 ) {
					textBlockBelow.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockBelow.find('.post-description').length > 0 ) {
					textBlockBelow.find('.post-description').after( tmpCat );
				} else if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {

				if ( hoverBlock.find('.likes-and-comments').length > 0 ) {
					hoverBlock.find('.likes-and-comments').after( tmpCat );
				} else if ( hoverBlock.find('.post-description').length > 0 ) {
					hoverBlock.find('.post-description').after( tmpCat );
				} else if ( hoverBlock.find('.time-and-author').length > 0 ) {
					hoverBlock.find('.time-and-author').after( tmpCat );
				} else if ( hoverBlock.find('.post-categories').length > 0 ) {
					hoverBlock.find('.post-categories').after( tmpCat );
				} else if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}

			}

		});
		
		pPostMoreWrapAlign();
		pPostMoreHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});


/* ----------------- More Info Spacing Options ----------------- */

	royalLivePreview( 'pPost_more', 'padding_tp', function( nValue ) {
		pPostMore.css( 'padding-top', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'padding_rt', function( nValue ) {
		pPostMore.css( 'padding-right', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'padding_bt', function( nValue ) {
		pPostMore.css( 'padding-bottom', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'padding_lt', function( nValue ) {
		pPostMore.css( 'padding-left', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- More Info Styling Options ----------------- */

	function pPostMoreHover() {

		pPostMore.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( pPost_more_bg_hcol, pPost_more_bg_hcol_tr ),
				'color' 			: pPost_more_txt_hcol,
				'border-color' 		: pPost_more_bd_hcol
			});

		}, function() {

			pPostMore.css({
				'background-color' 	  : royalHex2Rgba( pPost_more_bg_col, pPost_more_bg_col_tr ),
				'color' 			  : pPost_more_txt_col,
				'border-top-color' 	  : pPost_more_bd_tp[2],
				'border-right-color'  : pPost_more_bd_rt[2],
				'border-bottom-color' : pPost_more_bd_bt[2],
				'border-left-color'   : pPost_more_bd_lt[2]
			});

		});

	}

	pPostMoreHover();

	royalLivePreview( 'pPost_more', 'bg_col', function( nValue ) {
		pPost_more_bg_col = nValue;
		pPostMore.css( 'background-color', royalHex2Rgba( pPost_more_bg_col, pPost_more_bg_col_tr ) );
	});

	royalLivePreview( 'pPost_more', 'bg_col_tr', function( nValue ) {
		pPost_more_bg_col_tr = nValue;
		pPostMore.css( 'background-color', royalHex2Rgba( pPost_more_bg_col, pPost_more_bg_col_tr ) );
	});

	royalLivePreview( 'pPost_more', 'txt_col', function( nValue ) {
		pPost_more_txt_col = nValue;
		pPostMore.css( 'color', pPost_more_txt_col );
	});

	royalLivePreview( 'pPost_more', 'bg_hcol', function( nValue ) {
		pPost_more_bg_hcol = nValue;
	});

	royalLivePreview( 'pPost_more', 'bg_hcol_tr', function( nValue ) {
		pPost_more_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'pPost_more', 'txt_hcol', function( nValue ) {
		pPost_more_txt_hcol = nValue;
	});

	royalLivePreview( 'pPost_more', 'bd_hcol', function( nValue ) {
		pPost_more_bd_hcol = nValue;
	});

	royalLivePreview( 'pPost_more', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( pPostMore, pPost_more_bd_tp, pPost_more_bd_rt, pPost_more_bd_bt, pPost_more_bd_lt );
		} else {
			pPostMore.css( 'border', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostMore, 'pPost_more', 'top', pPost_more_bd_tp, 'portfolio' );

	royalBorderLivePreview( pPostMore, 'pPost_more', 'right', pPost_more_bd_rt, 'portfolio' );

	royalBorderLivePreview( pPostMore, 'pPost_more', 'bottom', pPost_more_bd_bt, 'portfolio' );

	royalBorderLivePreview( pPostMore, 'pPost_more', 'left', pPost_more_bd_lt, 'portfolio' );

	royalLivePreview( 'pPost_more', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			pPostMore.css({
				'border-radius' : pPost_more_rad + 'px'
			});

		} else {

			pPostMore.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'pPost_more', 'radius', function( nValue ) {
		pPost_more_rad = nValue;
		pPostMore.css( 'border-radius', pPost_more_rad + 'px' );
	});

	function pPostMoreShadow() {
		pPostMore.css( 'box-shadow', royalShadow( [
			pPost_more_shad_h,
			pPost_more_shad_v,
			pPost_more_shad_bl,
			pPost_more_shad_sp,
			pPost_more_shad_col,
			pPost_more_shad_col_tr,
			pPost_more_shad_in
		] ) );
	}

	royalLivePreview( 'pPost_more', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pPostMoreShadow();
		} else {
			pPostMore.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pPost_more', 'shad_h', function( nValue ) {
		pPost_more_shad_h = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_v', function( nValue ) {
		pPost_more_shad_v = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_bl', function( nValue ) {
		pPost_more_shad_bl = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_sp', function( nValue ) {
		pPost_more_shad_sp = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_col', function( nValue ) {
		pPost_more_shad_col = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_col_tr', function( nValue ) {
		pPost_more_shad_col_tr = nValue;
		pPostMoreShadow();
	});

	royalLivePreview( 'pPost_more', 'shad_in', function( nValue ) {
		pPost_more_shad_in = nValue;
		pPostMoreShadow();
	});


/* ----------------- More Info Font Options ----------------- */

	royalGoogleFontsPreview( 'pPage_post', 'font_family', pPostMore );

	royalLivePreview( 'pPost_more', 'font_size', function( nValue ) {
		pPostMore.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'line_height', function( nValue ) {
		pPostMore.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'letter_space', function( nValue ) {
		pPostMore.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'font_weight', function( nValue ) {
		pPostMore.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_more', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostMore.css( 'font-style', 'italic' );
		} else {
			pPostMore.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_more', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostMore.css( 'text-transform', 'uppercase' );
		} else {
			pPostMore.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_more', 'underline', function( nValue ) {
		if ( nValue === true ) {
			pPostMore.css( 'text-decoration', 'underline' );
		} else {
			pPostMore.css( 'text-decoration', 'none' );
		}
	});



// define variables
	var pPostTest 	 = $('.portfolio-post .testimonial-wrap'),
		pPostTestH5P = $('.testimonial-wrap h5, .testimonial-wrap p');

	// border 1x live update
	var pPost_test_bd_tp = [
			royal_options.pPost_test.bd_size_tp,
			royal_options.pPost_test.bd_style_tp,
			royal_options.pPost_test.bd_col_tp 
		];

/* ----------------- Testimonial General Options ----------------- */

	royalLivePreview( 'pPost_test', 'label', function( nValue ) {

		if ( nValue === true ) {
			pPostTest.css( 'display', 'block' );
		} else {
			pPostTest.css( 'display', 'none' );
		}

		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_test', 'position', function( nValue ) {

		pPostTest.each(function() {

			// define variables
			var textBlock 		= $(this).parents('.portfolio-post').find('.post-text-wrap'),
				textBlockAbove 	= textBlock.first(),
				textBlockBelow 	= textBlock.last(),
				hoverBlock 		= $(this).parents('.portfolio-post').find('.media-hovers'),
				tmpCat 			= $(this).remove();


			// move above or below media
			if ( nValue === 'above' ) {

				if ( textBlockAbove.find('.more-info-wrap').length > 0 ) {
					textBlockAbove.find('.more-info-wrap').after( tmpCat );
				} else if ( textBlockAbove.find('.likes-and-comments').length > 0 ) {
					textBlockAbove.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockAbove.find('.post-description').length > 0 ) {
					textBlockAbove.find('.post-description').after( tmpCat );
				} else if ( textBlockAbove.find('.time-and-author').length > 0 ) {
					textBlockAbove.find('.time-and-author').after( tmpCat );
				} else if ( textBlockAbove.find('.post-categories').length > 0 ) {
					textBlockAbove.find('.post-categories').after( tmpCat );
				} else if ( textBlockAbove.find('.post-title').length > 0 ) {
					textBlockAbove.find('.post-title').after( tmpCat );
				} else {
					textBlockAbove.prepend( tmpCat );
				}

			} else if ( nValue === 'below' ) {

				if ( textBlockBelow.find('.more-info-wrap').length > 0 ) {
					textBlockBelow.find('.more-info-wrap').after( tmpCat );
				} else if ( textBlockBelow.find('.likes-and-comments').length > 0 ) {
					textBlockBelow.find('.likes-and-comments').after( tmpCat );
				} else if ( textBlockBelow.find('.post-description').length > 0 ) {
					textBlockBelow.find('.post-description').after( tmpCat );
				} else if ( textBlockBelow.find('.time-and-author').length > 0 ) {
					textBlockBelow.find('.time-and-author').after( tmpCat );
				} else if ( textBlockBelow.find('.post-categories').length > 0 ) {
					textBlockBelow.find('.post-categories').after( tmpCat );
				} else if ( textBlockBelow.find('.post-title').length > 0 ) {
					textBlockBelow.find('.post-title').after( tmpCat );
				} else {
					textBlockBelow.prepend( tmpCat );
				}

			} else {

				if ( hoverBlock.find('.more-info-wrap').length > 0 ) {
					hoverBlock.find('.more-info-wrap').after( tmpCat );
				} else if ( hoverBlock.find('.likes-and-comments').length > 0 ) {
					hoverBlock.find('.likes-and-comments').after( tmpCat );
				} else if ( hoverBlock.find('.post-description').length > 0 ) {
					hoverBlock.find('.post-description').after( tmpCat );
				} else if ( hoverBlock.find('.time-and-author').length > 0 ) {
					hoverBlock.find('.time-and-author').after( tmpCat );
				} else if ( hoverBlock.find('.post-categories').length > 0 ) {
					hoverBlock.find('.post-categories').after( tmpCat );
				} else if ( hoverBlock.find('.post-title').length > 0 ) {
					hoverBlock.find('.post-title').after( tmpCat );
				} else {
					hoverBlock.prepend( tmpCat );
				}

			}

		});

		pPostLinkHover();
		royalHideEmpty();
		isotopeFn('portfolio');

	});

	royalLivePreview( 'pPost_test', 'align', function( nValue ) {
		pPostTest.css( 'text-align', nValue );
	});


/* ----------------- Testimonial Spacing Options ----------------- */

	royalLivePreview( 'pPost_test', 'padding_tp', function( nValue ) {
		pPostTest.css( 'padding-top', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_test', 'margin_tp', function( nValue ) {
		pPostTest.css( 'margin-top', nValue +'px' );
		isotopeFn('portfolio');
	});


/* ----------------- Testimonial Styling Options ----------------- */

	royalLivePreview( 'pPost_test', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( pPostTest, 'top', pPost_test_bd_tp );
		} else {
			pPostTest.css( 'border', 'none' );
		}
		
		isotopeFn('portfolio');

	});

	royalBorderLivePreview( pPostTest, 'pPost_test', 'top', pPost_test_bd_tp, 'isotopeFn' );


/* ----------------- Testimonial Font Options ----------------- */

	royalGoogleFontsPreview( 'pPost_test', 'font_family', pPostTestH5P );

	royalLivePreview( 'pPost_test', 'font_size', function( nValue ) {
		pPostTestH5P.css( 'font-size', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_test', 'line_height', function( nValue ) {
		pPostTestH5P.css( 'line-height', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_test', 'letter_space', function( nValue ) {
		pPostTestH5P.css( 'letter-spacing', nValue +'px' );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_test', 'font_weight', function( nValue ) {
		pPostTestH5P.css( 'font-weight', nValue );
		isotopeFn('portfolio');
	});

	royalLivePreview( 'pPost_test', 'italic', function( nValue ) {
		if ( nValue === true ) {
			pPostTestH5P.css( 'font-style', 'italic' );
		} else {
			pPostTestH5P.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pPost_test', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			pPostTestH5P.css( 'text-transform', 'uppercase' );
		} else {
			pPostTestH5P.css( 'text-transform', 'none' );
		}

		isotopeFn('portfolio');

	});


// define variables
	var pPostTriangle 			= $('.portfolio-post .triangle-wrap'),
		pPost_triangle_vert_pos = royal_options.pPost_triangle.vert_position,
		pPost_triangle_width 	= royal_options.pPost_triangle.width,
		pPost_triangle_height 	= royal_options.pPost_triangle.height;

/* ----------------- Decorational Triangle General Options ----------------- */

	function pPostTriangleSize() {

		// reset
		pPostTriangle.css({
			'top' 	 : 'auto',
			'bottom' : 'auto'
		});

		if ( pPost_triangle_vert_pos === 'top' ) {

			pPostTriangle.css({
				'top' 				  : '0',
				'border-top-width' 	  : pPost_triangle_height +'px',
				'border-top-style' 	  : 'solid',
				'border-top-color' 	  : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-bottom-width' : '0'
			});

		} else {

			pPostTriangle.css({
				'bottom' 			  : '0',
				'border-bottom-width' : pPost_triangle_height +'px',
				'border-bottom-style' : 'solid',
				'border-bottom-color' : royalHex2Rgba( pPage_post_bg_col, pPage_post_bg_col_tr ),
				'border-top-width' 	  : '0'
			});

		}

		pPostTriangle.css({
			'border-left'  : pPost_triangle_width +'px solid transparent',
			'border-right' : pPost_triangle_width +'px solid transparent'
		});

	}

	royalLivePreview( 'pPost_triangle', 'vert_position', function( nValue ) {
		pPost_triangle_vert_pos = nValue;
		pPostTriangleSize();
	});

	royalLivePreview( 'pPost_triangle', 'label', function( nValue ) {
		if ( nValue === true ) {
			pPostTriangle.css( 'display', 'block' );
		} else {
			pPostTriangle.css( 'display', 'none' );
		}
	});

	royalLivePreview( 'pPost_triangle', 'width', function( nValue ) {
		pPost_triangle_width = nValue;
		pPostTriangleSize();
	});

	royalLivePreview( 'pPost_triangle', 'height', function( nValue ) {
		pPost_triangle_height = nValue;
		pPostTriangleSize();
	});

	royalLivePreview( 'pPost_triangle', 'horz_position', function( nValue ) {
		pPostTriangle.css({
			'left' : nValue +'%'
		});
	});



// define variables
	var pPostFormats 				= $('.portfolio-post .post-format-icon'),
		pPost_formats_width			= royal_options.pPost_formats.width,
		pPost_formats_height		= royal_options.pPost_formats.height,
		pPost_formats_bg_col		= royal_options.pPost_formats.bg_col,
		pPost_formats_bg_col_tr		= royal_options.pPost_formats.bg_col_tr,
		pPost_formats_rad			= royal_options.pPost_formats.radius,
		pPost_formats_shad_h		= royal_options.pPost_formats.shad_h,
		pPost_formats_shad_v		= royal_options.pPost_formats.shad_v,
		pPost_formats_shad_bl		= royal_options.pPost_formats.shad_bl,
		pPost_formats_shad_sp		= royal_options.pPost_formats.shad_sp,
		pPost_formats_shad_col		= royal_options.pPost_formats.shad_col,
		pPost_formats_shad_col_tr	= royal_options.pPost_formats.shad_col_tr;

/* ----------------- Post Format Icons General Options ----------------- */

	royalLivePreview( 'pPost_formats', 'label', function( nValue ) {
		if ( nValue === true ) {
			pPostFormats.show();
		} else {
			pPostFormats.hide();
		}
	});

	royalLivePreview( 'pPost_formats', 'audio_icon', function( nValue ) {
		$('.format-audio .post-format-icon').find('i').removeAttr('class');
		$('.format-audio .post-format-icon').find('i').addClass( 'fa fa-' + nValue );
	});

	royalLivePreview( 'pPost_formats', 'video_icon', function( nValue ) {
		$('.format-video .post-format-icon').find('i').removeAttr('class');
		$('.format-video .post-format-icon').find('i').addClass( 'fa fa-' + nValue );
	});

	royalLivePreview( 'pPost_formats', 'gallery_icon', function( nValue ) {
		$('.format-gallery .post-format-icon').find('i').removeAttr('class');
		$('.format-gallery .post-format-icon').find('i').addClass( 'fa fa-' + nValue );
	});

	royalLivePreview( 'pPost_formats', 'position', function( nValue ) {

		// reset
		pPostFormats.css({
			'top' 		  : 'auto',
			'right' 	  : 'auto',
			'bottom' 	  : 'auto',
			'left' 		  : 'auto',
			'margin-top'  : '0',
			'margin-left' : '0'
		});

		if ( nValue === 'top-left' ) {

			pPostFormats.css({
				'top'  : '10px',
				'left' : '10px'
			});

		} else if ( nValue === 'top-right' ) {

			pPostFormats.css({
				'top' 	: '10px',
				'right' : '10px'
			});

		} else if ( nValue === 'bottom-left' ) {

			pPostFormats.css({
				'bottom' : '10px',
				'left' 	 : '10px'
			});

		} else if ( nValue === 'bottom-right' ) {

			pPostFormats.css({
				'bottom' : '10px',
				'right'  : '10px'
			});

		} else {

			pPostFormats.css({
				'top' 		  : '50%',
				'left' 		  : '50%',
				'margin-top'  : '-'+ ( parseInt( pPost_formats_height, 10 ) / 2 ) +'px',
				'margin-left' : '-'+ ( parseInt( pPost_formats_width, 10 ) / 2 ) +'px'
			});

		}


	});


/* ----------------- Post Format Icons Spacing Options ----------------- */

	royalLivePreview( 'pPost_formats', 'width', function( nValue ) {
		pPost_formats_width = nValue;

		pPostFormats.css( 'width', nValue +'px' );

		if ( parseInt( pPostFormats.css('left'), 10 ) >  10 ) {
			pPostFormats.css( 'margin-left', '-'+ ( nValue / 2 ) +'px' );
		}
	});

	royalLivePreview( 'pPost_formats', 'height', function( nValue ) {
		pPost_formats_height = nValue;

		pPostFormats.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});

		if ( parseInt( pPostFormats.css('top'), 10 ) >  10 ) {
			pPostFormats.css( 'margin-top', '-'+ ( nValue / 2 ) +'px' );
		}
	});


/* ----------------- Post Format Icons Styling Options ----------------- */

	royalLivePreview( 'pPost_formats', 'bg_col', function( nValue ) {
		pPost_formats_bg_col = nValue;
		pPostFormats.css( 'background-color', royalHex2Rgba( pPost_formats_bg_col, pPost_formats_bg_col_tr ) );
	});

	royalLivePreview( 'pPost_formats', 'bg_col_tr', function( nValue ) {
		pPost_formats_bg_col_tr = nValue;
		pPostFormats.css( 'background-color', royalHex2Rgba( pPost_formats_bg_col, pPost_formats_bg_col_tr ) );
	});

	royalLivePreview( 'pPost_formats', 'txt_col', function( nValue ) {
		pPostFormats.css( 'color', nValue );
	});

	royalLivePreview( 'pPost_formats', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			pPostFormats.css({
				'border-radius' : pPost_formats_rad + '%'
			});

		} else {

			pPostFormats.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'pPost_formats', 'radius', function( nValue ) {
		pPost_formats_rad = nValue;
		pPostFormats.css( 'border-radius', pPost_formats_rad + '%' );
	});

	function pPostFormatsShadow() {
		pPostFormats.css( 'box-shadow', royalShadow( [
			pPost_formats_shad_h,
			pPost_formats_shad_v,
			pPost_formats_shad_bl,
			pPost_formats_shad_sp,
			pPost_formats_shad_col,
			pPost_formats_shad_col_tr
		] ) );
	}

	royalLivePreview( 'pPost_formats', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pPostFormatsShadow();
		} else {
			pPostFormats.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pPost_formats', 'shad_h', function( nValue ) {
		pPost_formats_shad_h = nValue;
		pPostFormatsShadow();
	});

	royalLivePreview( 'pPost_formats', 'shad_v', function( nValue ) {
		pPost_formats_shad_v = nValue;
		pPostFormatsShadow();
	});

	royalLivePreview( 'pPost_formats', 'shad_bl', function( nValue ) {
		pPost_formats_shad_bl = nValue;
		pPostFormatsShadow();
	});

	royalLivePreview( 'pPost_formats', 'shad_sp', function( nValue ) {
		pPost_formats_shad_sp = nValue;
		pPostFormatsShadow();
	});

	royalLivePreview( 'pPost_formats', 'shad_col', function( nValue ) {
		pPost_formats_shad_col = nValue;
		pPostFormatsShadow();
	});

	royalLivePreview( 'pPost_formats', 'shad_col_tr', function( nValue ) {
		pPost_formats_shad_col_tr = nValue;
		pPostFormatsShadow();
	});


/* ----------------- Post Format Icons Font Options ----------------- */

	royalLivePreview( 'pPost_formats', 'icon_size', function( nValue ) {
		pPostFormats.css( 'font-size', nValue +'px' );
	});



// define variables
	var pPostOverlay 				= $('.portfolio-post .image-overlay'),
		pPostOverlayIcon 			= pPostOverlay.find('i'),
		pPost_effects_col			= royal_options.pPost_effects.color,
		pPost_effects_col_tr		= royal_options.pPost_effects.col_tr,
		pPost_effects_hcol			= royal_options.pPost_effects.hcol,
		pPost_effects_hcol_tr		= royal_options.pPost_effects.hcol_tr,
		pPost_effects_gray_trans	= royal_options.pPost_effects.grayscale_trans,
		pPost_effects_zoom_reverse	= royal_options.pPost_effects.zoom_reverse,
		pPost_effects_zoom_rate		= royal_options.pPost_effects.zoom_rate;

/* ----------------- Image Effects General Options ----------------- */

	royalLivePreview( 'pPost_effects', 'overlay_click', function() {
		royalLoading();
	});

	royalLivePreview( 'pPost_effects', 'nxt_prev_image', function() {
		royalLoading();
	});

	royalLivePreview( 'pPost_effects', 'overlay_label', function( nValue ) {
		if ( nValue === true ) {
			pPostOverlay.show();
		} else {
			pPostOverlay.hide();
		}
	});

	royalLivePreview( 'pPost_effects', 'overlay_icon', function( nValue ) {
		pPostOverlayIcon.removeAttr('class');
		pPostOverlayIcon.addClass( 'fa fa-' + nValue );
	});

	royalLivePreview( 'pPost_effects', 'overlay_trans', function( nValue ) {
		$('.portfolio-post .image-overlay, .portfolio-post .image-overlay .fa').css({
			'-webkit-transition' : 'opacity '+ nValue +'ms ease 0s, background-color '+ nValue +'ms ease 0s',
			'transition' 		 : 'opacity '+ nValue +'ms ease 0s, background-color '+ nValue +'ms ease 0s'
		});
	});

	royalLivePreview( 'pPost_effects', 'grayscale_label', function( nValue ) {
		if ( nValue === true ) {

			if ( pPost_effects_gray_trans === true ) {
				portfolioMedia.find('img').addClass('grayscale-fade');
			}

			portfolioMedia.find('img').addClass('grayscale');

		} else {

			portfolioMedia.find('img').removeClass('grayscale');
			portfolioMedia.find('img').removeClass('grayscale-fade');

		}
	});

	royalLivePreview( 'pPost_effects', 'grayscale_trans', function( nValue ) {
		pPost_effects_gray_trans = nValue;

		if ( nValue === true ) {
			portfolioMedia.find('img').addClass('grayscale-fade');
		} else {
			portfolioMedia.find('img').removeClass('grayscale-fade');
		}
	});

	var rotateImage = '';
	function imageZoomReverse() {

		if ( pPost_effects_zoom_reverse === true ) {

			portfolioMedia.find('img').css({
				'transform' : 'scale( '+ pPost_effects_zoom_rate +', '+ pPost_effects_zoom_rate +' )'
			});

		} else {

			portfolioMedia.find('img').css({
				'transform' : 'scale( 1, 1 )'
			});

		}

		portfolioMedia.hover(function() {

			if ( pPost_effects_zoom_reverse === true ) {

				$(this).find('img').css({
					'transform' : 'scale( 1, 1 ) '+ rotateImage
				});

			} else {

				$(this).find('img').css({
					'transform' : 'scale( '+ pPost_effects_zoom_rate +', '+ pPost_effects_zoom_rate +' ) '+ rotateImage
				});

			}

		}, function() {

			if ( pPost_effects_zoom_reverse === true ) {

				$(this).find('img').css({
					'transform' : 'scale( '+ pPost_effects_zoom_rate +', '+ pPost_effects_zoom_rate +' )'
				});

			} else {

				$(this).find('img').css({
					'transform' : 'scale( 1, 1 )'
				});

			}

		});

	} // end imageZoomReverse()

	royalLivePreview( 'pPost_effects', 'zoom_label', function( nValue ) {

		if ( nValue === true ) {

			imageZoomReverse();

		} else {

			portfolioMedia.hover(function() {

				$(this).find('img').css({
					'transform' : 'scale( 1, 1 )'
				});

			}, function() {

				$(this).find('img').css({
					'transform' : 'scale( 1, 1 )'
				});

			});

			portfolioMedia.find('img').css({
				'transform' : 'scale( 1, 1 )'
			});

		}

	});

	royalLivePreview( 'pPost_effects', 'zoom_reverse', function( nValue ) {
		pPost_effects_zoom_reverse = nValue;
		imageZoomReverse();
	});

	royalLivePreview( 'pPost_effects', 'rotate', function( nValue ) {
		
		if ( nValue === true ) {
			rotateImage = 'rotate(5deg)';
		} else {
			rotateImage = 'rotate(0deg)';
		}

		imageZoomReverse();

	});

	royalLivePreview( 'pPost_effects', 'zoom_rate', function( nValue ) {
		pPost_effects_zoom_rate = nValue;
		imageZoomReverse();
	});

	royalLivePreview( 'pPost_effects', 'zoom_trans', function( nValue ) {
		portfolioMedia.find('img').css({
			'-webkit-transition' : '-webkit-transform '+ nValue +'ms ease 0s',
			'transition' 		 : 'transform '+ nValue +'ms ease 0s'
		});
	});


/* ----------------- Image Effects Styling Options ----------------- */

	royalLivePreview( 'pPost_effects', 'color', function( nValue ) {
		pPost_effects_col = nValue;
		pPostOverlay.css( 'background-color', royalHex2Rgba( pPost_effects_col, pPost_effects_col_tr ) );
	});

	royalLivePreview( 'pPost_effects', 'col_tr', function( nValue ) {
		pPost_effects_col_tr = nValue;
		pPostOverlay.css( 'background-color', royalHex2Rgba( pPost_effects_col, pPost_effects_col_tr ) );
	});

	royalLivePreview( 'pPost_effects', 'txt_hcol', function( nValue ) {
		pPostOverlayIcon.css( 'color', nValue );
	});

	portfolioMedia.hover(function() {
		$(this).find('.image-overlay').css( 'background-color', royalHex2Rgba( pPost_effects_hcol, pPost_effects_hcol_tr ) );
	}, function() {
		$(this).find('.image-overlay').css( 'background-color', royalHex2Rgba( pPost_effects_col, pPost_effects_col_tr ) );
	});

	royalLivePreview( 'pPost_effects', 'hcol', function( nValue ) {
		pPost_effects_hcol = nValue;
	});

	royalLivePreview( 'pPost_effects', 'hcol_tr', function( nValue ) {
		pPost_effects_hcol_tr = nValue;
	});


/* ----------------- Image Effects Font Options ----------------- */

	royalLivePreview( 'pPost_effects', 'icon_size', function( nValue ) {
		pPostOverlayIcon.css( 'font-size', nValue +'px' );
	});



/*
***************************************************************
* #Portfolio Single
***************************************************************
*/

// define variables
	var pSingleHeader = $('.portfolio-single-header'),
		portfolioTitleAndMeta = pSingleHeader.find('.title-and-meta');

/* ----------------- Header General Options ----------------- */

	royalLivePreview( 'pSingle_header', 'position', function( nValue ) {
		var tmpHeader = $('.portfolio-single-header').remove();

		if ( nValue === 'above' ) {

			$('.single-royal_portfolio .single-wrap').prepend( tmpHeader );
			body.removeClass('single-header-below-p');

			$('.portfolio-single-header').css( 'width', 'auto' );
			$('.title-and-meta').css( 'padding-bottom', '0' );

		} else if ( nValue === 'below' ) {

			if ( $('.single-royal_portfolio .featured-media, .single-royal_portfolio .gallery-slideshow').length > 0 ) {
				$('.single-royal_portfolio .featured-media, .single-royal_portfolio .gallery-slideshow').after( tmpHeader );
			} else {
				$('.single-royal_portfolio .single-wrap').prepend( tmpHeader );
			}

			if ( body.hasClass('project-info-below-right') ) {
				$('.portfolio-single-header').css({
					'width' : '-webkit-calc(100% - '+ pSingle_project_width +'px)',
					'width' : 'calc(100% - '+ pSingle_project_width +'px)'
				});
			}

			body.addClass('single-header-below-p'); 
			$('[class*=single-header-below] .title-and-meta').css( 'padding-bottom', typography_text_margins +'px' );

		}

		pSingleNavPrevNxtHover();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_header', 'align', function( nValue ) {
		portfolioTitleAndMeta.css( 'text-align', nValue );
	});

	royalLivePreview( 'pSingle_header', 'display_date', function( nValue ) {

		if ( nValue === false ) {
			portfolioTitleAndMeta.find('.post-date').hide();
		} else {
			portfolioTitleAndMeta.find('.post-date').show();
		}

		royalHideSeparators();
		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_header', 'display_cats', function( nValue ) {

		if ( nValue === false ) {
			portfolioTitleAndMeta.find('.post-categories').hide();
		} else {
			portfolioTitleAndMeta.find('.post-categories').show();
		}

		royalHideSeparators();
		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_header', 'display_comments', function( nValue ) {

		if ( nValue === false ) {
			portfolioTitleAndMeta.find('.post-comments-wrap').hide();
		} else {
			portfolioTitleAndMeta.find('.post-comments-wrap').show();
		}

		royalHideSeparators();
		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_header', 'display_author', function( nValue ) {

		if ( nValue === false ) {
			portfolioTitleAndMeta.find('.posted-by').hide();
		} else {
			portfolioTitleAndMeta.find('.posted-by').show();
		}

		royalHideSeparators();
		projectInfoEqual();
		sidebarEqual();

	});



// define variables
	var pSingleNavPrev 			 = $('.single-royal_portfolio .previous-post'),
		pSingleNavNxt 			 = $('.single-royal_portfolio .next-post'),
		pSingleNavPrevNxt 		 = $('.single-royal_portfolio .next-post, .single-royal_portfolio .previous-post'),
		pSingle_nav_label 		 = royal_options.pSingle_nav.label,
		pSingle_nav_position 	 = royal_options.pSingle_nav.position,
		pSingle_nav_width 		 = royal_options.pSingle_nav.width,
		pSingle_nav_height 		 = royal_options.pSingle_nav.height,
		pSingle_nav_bg_col		 = royal_options.pSingle_nav.bg_col,
		pSingle_nav_bg_col_tr	 = royal_options.pSingle_nav.bg_col_tr,
		pSingle_nav_txt_col		 = royal_options.pSingle_nav.txt_col,
		pSingle_nav_bg_hcol		 = royal_options.pSingle_nav.bg_hcol,
		pSingle_nav_bg_hcol_tr	 = royal_options.pSingle_nav.bg_hcol_tr,
		pSingle_nav_txt_hcol	 = royal_options.pSingle_nav.txt_hcol,
		pSingle_nav_bd_hcol		 = royal_options.pSingle_nav.bd_hcol,
		pSingle_nav_border_label = royal_options.pSingle_nav.border_label,
		pSingle_nav_border_size	 = royal_options.pSingle_nav.border_size,
		pSingle_nav_border_style = royal_options.pSingle_nav.border_style,
		pSingle_nav_border_color = royal_options.pSingle_nav.border_color,
		pSingle_nav_rad			 = royal_options.pSingle_nav.radius,
		pSingle_nav_shad_h		 = royal_options.pSingle_nav.shad_h,
		pSingle_nav_shad_v		 = royal_options.pSingle_nav.shad_v,
		pSingle_nav_shad_bl		 = royal_options.pSingle_nav.shad_bl,
		pSingle_nav_shad_sp		 = royal_options.pSingle_nav.shad_sp,
		pSingle_nav_shad_col	 = royal_options.pSingle_nav.shad_col,
		pSingle_nav_shad_col_tr	 = royal_options.pSingle_nav.shad_col_tr,
		pSingle_nav_shad_in		 = royal_options.pSingle_nav.shad_in;

/* ----------------- Navigation General Options ----------------- */

	royalLivePreview( 'pSingle_nav', 'label', function( nValue ) {
		pSingle_nav_label = nValue;

		if ( nValue === true ) {
			body.removeClass('hide-nxt-prev-p');
		} else {
			body.addClass('hide-nxt-prev-p');
		}

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});

	function pSingleSharingWidth() {
		if ( pSingle_nav_position === 'sharing' && pSingle_nav_label === true ) {

			$('.single-royal_portfolio .single-socials-wrap').css({
				'width' 	  : '-webkit-calc(100% - '+ ( pSingle_nav_width * 2 ) +'px)',
				'width' 	  : 'calc(100% - '+ ( pSingle_nav_width * 2 ) +'px)',
				'line-height' : pSingle_nav_height +'px'
			});

			pSingleNavPrevNxt.css( 'top', pSingle_share_padding_tp +'px' );

			if ( body.hasClass('project-info-sharing') ||  body.hasClass('hide-single-sharing-p') ) {
				$('.single-royal_portfolio .single-socials-wrap').css({
					'height' : pSingle_nav_height +'px'
				});

			} else {
				$('.single-royal_portfolio .single-socials-wrap').css({
					'height' : 'auto'
				});
			}

		} else {

			$('.single-royal_portfolio .single-socials-wrap').css({
				'width' 	  : '100%',
				'height' 	  : 'auto',
				'line-height' : '1'
			});

			pSingleNavPrevNxt.css( 'top', '' );

		}

	} // end pSingleSharingWidth()

	royalLivePreview( 'pSingle_nav', 'position', function( nValue ) {
		pSingle_nav_position = nValue;

		if ( nValue === 'header' ) {
			body.removeClass('header-nxt-prev-p sharing-nxt-prev-p project-nxt-prev-p');
			body.addClass('header-nxt-prev-p');

		} else if ( nValue === 'sharing' ) {
			body.removeClass('header-nxt-prev-p sharing-nxt-prev-p project-nxt-prev-p');
			body.addClass('sharing-nxt-prev-p');

		} else {
			body.removeClass('header-nxt-prev-p sharing-nxt-prev-p project-nxt-prev-p');
			body.addClass('project-nxt-prev-p');
		}

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_nav', 'prev_text', function( nValue ) {
		pSingleNavPrev.find('span').text( nValue );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_nav', 'next_text', function( nValue ) {
		pSingleNavNxt.find('span').text( nValue );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_nav', 'prev_nxt_icon', function( nValue ) {
		pSingleNavPrev.find('i').not('.back-link i').removeAttr('class');
		pSingleNavPrev.find('i').not('.back-link i').addClass( 'rf-button fa fa-'+ nValue +'-left' );
		pSingleNavNxt.find('i').removeAttr('class');
		pSingleNavNxt.find('i').addClass( 'rf-button fa fa-'+ nValue +'-right' );
	});

	royalLivePreview( 'pSingle_nav', 'back_link', function( nValue ) {
		if ( nValue === true ) {
			body.addClass('p-single-back-link');
		} else {
			body.removeClass('p-single-back-link');
		}
	});


/* ----------------- Navigation Spacing Options ----------------- */

	royalLivePreview( 'pSingle_nav', 'width', function( nValue ) {
		pSingle_nav_width = nValue;
		pSingleNavPrevNxt.css( 'width', nValue +'px' );

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});

	function pSingleNavHeight() {
		var pSingle_nav_Lheight = parseInt( pSingle_nav_height, 10 );

		if ( pSingle_nav_border_label === true ) {
			pSingle_nav_Lheight = parseInt( pSingle_nav_height, 10 ) - parseInt( pSingle_nav_border_size, 10 ) * 2;
		}

		pSingleNavPrevNxt.css({
			'height' 	  : pSingle_nav_height +'px',
			'line-height' : pSingle_nav_Lheight +'px'
		});
	}

	royalLivePreview( 'pSingle_nav', 'height', function( nValue ) {
		pSingle_nav_height = nValue;

		pSingleNavPrevNxt.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});

		pSingleNavHeight();
		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_nav', 'margin_tp', function( nValue ) {
		$('.single-royal_portfolio .nxt-prev-post').css( 'margin-top', nValue +'px' );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_nav', 'space_between', function( nValue ) {
		pSingleNavPrev.css( 'margin-right', nValue +'px' );

		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Navigation Styling Options ----------------- */

	function pSingleNavPrevNxtHover() {
		pSingleNavPrevNxt.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( pSingle_nav_bg_hcol, pSingle_nav_bg_hcol_tr ),
				'color' 			: pSingle_nav_txt_hcol,
				'border-color' 		: pSingle_nav_bd_hcol
			});

		}, function() {

			pSingleNavPrevNxt.css({
				'background-color' 	: royalHex2Rgba( pSingle_nav_bg_col, pSingle_nav_bg_col_tr ),
				'color' 			: pSingle_nav_txt_col,
				'border-color' 		: pSingle_nav_border_color
			});

		});
	}

	pSingleNavPrevNxtHover();

	royalLivePreview( 'pSingle_nav', 'bg_col', function( nValue ) {
		pSingle_nav_bg_col = nValue;
		pSingleNavPrevNxt.css( 'background-color', royalHex2Rgba( pSingle_nav_bg_col, pSingle_nav_bg_col_tr ) );
	});

	royalLivePreview( 'pSingle_nav', 'bg_col_tr', function( nValue ) {
		pSingle_nav_bg_col_tr = nValue;
		pSingleNavPrevNxt.css( 'background-color', royalHex2Rgba( pSingle_nav_bg_col, pSingle_nav_bg_col_tr ) );
	});

	royalLivePreview( 'pSingle_nav', 'txt_col', function( nValue ) {
		pSingle_nav_txt_col = nValue;
		pSingleNavPrevNxt.css( 'color', pSingle_nav_txt_col );
	});

	royalLivePreview( 'pSingle_nav', 'bg_hcol', function( nValue ) {
		pSingle_nav_bg_hcol = nValue;
	});

	royalLivePreview( 'pSingle_nav', 'bg_hcol_tr', function( nValue ) {
		pSingle_nav_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'pSingle_nav', 'txt_hcol', function( nValue ) {
		pSingle_nav_txt_hcol = nValue;
	});

	royalLivePreview( 'pSingle_nav', 'bd_hcol', function( nValue ) {
		pSingle_nav_bd_hcol = nValue;
	});

	royalLivePreview( 'pSingle_nav', 'border_label', function( nValue ) {
		pSingle_nav_border_label = nValue;

		if ( nValue === true ) {

			pSingleNavPrevNxt.css( 'border-width', pSingle_nav_border_size +'px' );
			pSingleNavPrevNxt.css( 'border-style', pSingle_nav_border_style );
			pSingleNavPrevNxt.css( 'border-color', pSingle_nav_border_color );

		} else {

			pSingleNavPrevNxt.css( 'border', 'none' );

		}

		pSingleNavHeight();
	});

	royalLivePreview( 'pSingle_nav', 'border_size', function( nValue ) {
		pSingle_nav_border_size = nValue;
		pSingleNavPrevNxt.css( 'border-width', pSingle_nav_border_size +'px' );
		pSingleNavHeight();
	});

	royalLivePreview( 'pSingle_nav', 'border_style', function( nValue ) {
		pSingle_nav_border_style = nValue;
		pSingleNavPrevNxt.css( 'border-style', pSingle_nav_border_style );
	});

	royalLivePreview( 'pSingle_nav', 'border_color', function( nValue ) {
		pSingle_nav_border_color = nValue;
		pSingleNavPrevNxt.css( 'border-color', pSingle_nav_border_color );
	});

	royalLivePreview( 'pSingle_nav', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			pSingleNavPrevNxt.css({
				'border-radius' : pSingle_nav_rad + 'px'
			});

		} else {

			pSingleNavPrevNxt.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'pSingle_nav', 'radius', function( nValue ) {
		pSingle_nav_rad = nValue;
		pSingleNavPrevNxt.css( 'border-radius', pSingle_nav_rad + 'px' );
	});

	function pSingleNavPrevNxtShadow() {
		pSingleNavPrevNxt.css( 'box-shadow', royalShadow( [
			pSingle_nav_shad_h,
			pSingle_nav_shad_v,
			pSingle_nav_shad_bl,
			pSingle_nav_shad_sp,
			pSingle_nav_shad_col,
			pSingle_nav_shad_col_tr,
			pSingle_nav_shad_in
		] ) );
	}

	royalLivePreview( 'pSingle_nav', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			pSingleNavPrevNxtShadow();
		} else {
			pSingleNavPrevNxt.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pSingle_nav', 'shad_h', function( nValue ) {
		pSingle_nav_shad_h = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_v', function( nValue ) {
		pSingle_nav_shad_v = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_bl', function( nValue ) {
		pSingle_nav_shad_bl = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_sp', function( nValue ) {
		pSingle_nav_shad_sp = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_col', function( nValue ) {
		pSingle_nav_shad_col = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_col_tr', function( nValue ) {
		pSingle_nav_shad_col_tr = nValue;
		pSingleNavPrevNxtShadow();
	});

	royalLivePreview( 'pSingle_nav', 'shad_in', function( nValue ) {
		pSingle_nav_shad_in = nValue;
		pSingleNavPrevNxtShadow();
	});


/* ----------------- Navigation Font Options ----------------- */

	royalLivePreview( 'pSingle_nav', 'font_size', function( nValue ) {
		pSingleNavPrevNxt.css( 'font-size', nValue + 'px' );
	});



// define variables
	var pSingleShareWrap 			= $('.portfolio-single .single-post-sharing'),
		pSingleShareAll 			= $('.portfolio-single .single-socials-wrap span, .info-sharing'),
		pSingle_share_padding_tp 	= royal_options.pSingle_share.padding_tp,
		pSingle_share_bd_size_tp 	= royal_options.pSingle_share.bd_size_tp,
		pSingle_share_bd_style_tp 	= royal_options.pSingle_share.bd_style_tp;

/* ----------------- Sharing General Options ----------------- */

	royalLivePreview( 'pSingle_share', 'label', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareWrap.show();
		} else {
			pSingleShareWrap.hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'position', function( nValue ) {

		if ( nValue === 'content' ) {

			body.removeClass('project-info-sharing');
			$('.portfolio-single .single-socials-wrap span').show();
			$('.info-sharing').hide();

		} else {

			body.addClass('project-info-sharing');
			$('.portfolio-single .single-socials-wrap span').hide();
			$('.info-sharing').show();

		}

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'sharing_label', function( nValue ) {

		if ( nValue === false ) {

			body.addClass('hide-single-sharing-p');
			pSingleShareAll.hide();

		} else {

			body.removeClass('hide-single-sharing-p');

			if ( ! body.hasClass('project-info-sharing') ) {
				$('.portfolio-single .single-socials-wrap span').show();
				$('.info-sharing').hide();
			} else {
				$('.portfolio-single .single-socials-wrap span').hide();
				$('.info-sharing').show();	
			}

		}

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_share', 'label_text', function( nValue ) {

		pSingleShareWrap.find('.social-share').prev().text( nValue );
		$('.info-sharing').find('strong span').text( nValue );

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_face', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=facebook]').show();
		} else {
			pSingleShareAll.find('a[href*=facebook]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_twit', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=twitter]').show();
		} else {
			pSingleShareAll.find('a[href*=twitter]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_gplus', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=google]').show();
		} else {
			pSingleShareAll.find('a[href*=google]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_linkin', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=linkedin]').show();
		} else {
			pSingleShareAll.find('a[href*=linkedin]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_pint', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=pinterest]').show();
		} else {
			pSingleShareAll.find('a[href*=pinterest]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_tumblr', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=tumblr]').show();
		} else {
			pSingleShareAll.find('a[href*=tumblr]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'share_reddit', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareAll.find('a[href*=reddit]').show();
		} else {
			pSingleShareAll.find('a[href*=reddit]').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'align', function( nValue ) {
		pSingleShareWrap.find('.single-socials-wrap').css( 'text-align', nValue );
	});


/* ----------------- Sharing Spacing Options ----------------- */

	royalLivePreview( 'pSingle_share', 'margin_tp', function( nValue ) {
		pSingleShareWrap.css( 'margin-top', nValue +'px' );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_share', 'padding_tp', function( nValue ) {
		pSingle_share_padding_tp = nValue;
		pSingleShareWrap.css( 'padding-top', nValue +'px' );

		pSingleSharingWidth();
		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Sharing Styling Options ----------------- */

	royalLivePreview( 'pSingle_share', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			pSingleShareWrap.css( 'border-top', pSingle_share_bd_size_tp +'px '+ pSingle_share_bd_style_tp +' '+  inner_content_border_color );
		} else {
			pSingleShareWrap.css( 'border', 'none' );
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_share', 'bd_size_tp', function( nValue ) {
		pSingle_share_bd_size_tp = nValue;
		pSingleShareWrap.css( 'border-top', nValue +'px '+ pSingle_share_bd_style_tp +' '+  inner_content_border_color );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_share', 'bd_style_tp', function( nValue ) {
		pSingle_share_bd_style_tp = nValue;
		pSingleShareWrap.css( 'border-top', pSingle_share_bd_size_tp +'px '+ nValue +' '+  inner_content_border_color );
	});



// define variables
	var pSingleProjectInfo 				= $('.portfolio-single .project-info'),
		pSingle_project_width 			= royal_options.pSingle_project.width,
		pSingle_project_position 		= royal_options.pSingle_project.position,
		pSingle_project_equal_height 	= royal_options.pSingle_project.equal_height,
		pSingle_project_margin_lt 		= royal_options.pSingle_project.margin_lt,
		pSingle_project_list_bd_size 	= royal_options.pSingle_project.list_bd_size,
		pSingle_project_list_bd_style 	= royal_options.pSingle_project.list_bd_style;

	// border 4x live update
	var pSingle_project_bd_tp = [
			royal_options.pSingle_project.bd_size_tp,
			royal_options.pSingle_project.bd_style_tp,
			royal_options.pSingle_project.bd_col_tp 
		],
		pSingle_project_bd_rt = [
			royal_options.pSingle_project.bd_size_rt,
			royal_options.pSingle_project.bd_style_rt,
			royal_options.pSingle_project.bd_col_rt
		],
		pSingle_project_bd_bt = [
			royal_options.pSingle_project.bd_size_bt,
			royal_options.pSingle_project.bd_style_bt,
			royal_options.pSingle_project.bd_col_bt
		],
		pSingle_project_bd_lt = [
			royal_options.pSingle_project.bd_size_lt,
			royal_options.pSingle_project.bd_style_lt,
			royal_options.pSingle_project.bd_col_lt
		];

/* ----------------- Project Info General Options ----------------- */

	royalLivePreview( 'pSingle_project', 'label', function( nValue ) {

		if ( nValue === false ) {
			body.addClass('project-info-closed');
		} else {
			body.removeClass('project-info-closed');
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_project', 'position', function( nValue ) {
		pSingle_project_position = nValue;

		body.removeClass('project-info-right project-info-below-right project-info-horz project-info-equal');

		if ( nValue !== 'below_horz' &&  pSingle_project_equal_height === true ) {
			body.addClass('project-info-equal');
		}

		if ( nValue === 'right' ) {
			body.addClass('project-info-right');
		} else if ( nValue === 'below_vert' ) {
			body.addClass('project-info-below-right');
		} else if ( nValue === 'below_horz' ) {
			body.addClass('project-info-horz');
		}

		var tmpProjectInfo = pSingleProjectInfo.remove();

		if ( body.hasClass('project-info-below-right') ) {
			var widthPlusMargin = parseInt( pSingle_project_width, 10 ) + parseInt( pSingle_project_margin_lt, 10 );

			$('.portfolio-single .single-wrap').append( tmpProjectInfo );
			$('.single-royal_portfolio .single-content-wrap, .single-header-below-p .portfolio-single-header').css({
				'width' : '-webkit-calc(100% - '+ widthPlusMargin +'px)',
				'width' : 'calc(100% - '+ widthPlusMargin +'px)'
			} );

		} else {

			$('.portfolio-single .single-wrap').after( tmpProjectInfo );
			$('.single-royal_portfolio .single-content-wrap, .single-header-below-p .portfolio-single-header').css({
				'width' : '100%'
			} );

		}

		pSingleNavPrevNxtHover();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_project', 'equal_height', function( nValue ) {
		pSingle_project_equal_height = nValue;

		if ( nValue !== 'below_horz' &&  nValue === true ) {
			body.addClass('project-info-equal');
		} else {
			body.removeClass('project-info-equal');
		}

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_project', 'align', function( nValue ) {
		pSingleProjectInfo.find('.proj-info-title').css( 'text-align', nValue );
	});

	royalLivePreview( 'pSingle_project', 'list_icons', function( nValue ) {

		if ( nValue === true ) {
			$('.project-info .project-details strong i').show();
		} else {
			$('.project-info .project-details strong i').hide();
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_project', 'link_text', function( nValue ) {
		pSingleProjectInfo.find('.project-link').text( nValue );

		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Project Info Spacing Options ----------------- */
	
	var singleWrapWidth = parseInt( pSingle_project_width, 10 ) + parseInt( pSingle_project_margin_lt, 10 );

	royalLivePreview( 'pSingle_project', 'width', function( nValue ) {
		pSingle_project_width = nValue;

		$('.project-info-right .project-info, .project-info-below-right .project-info').css({
			'width' 	  : nValue +'px',
			'margin-left' : '-webkit-calc(100% - '+ nValue +'px)',
			'margin-left' : 'calc(100% - '+ nValue +'px)'
		});

		singleWrapWidth = parseInt( nValue, 10 ) + parseInt( pSingle_project_margin_lt, 10 );

		$('.project-info-right.single-royal_portfolio .single-wrap').css({
			'width' : '-webkit-calc(100% - '+ singleWrapWidth +'px)',
			'width' : 'calc(100% - '+ singleWrapWidth +'px)'
		});

		if ( body.hasClass('project-info-below-right') ) {
			$('.single-royal_portfolio .single-content-wrap, .single-header-below-p .portfolio-single-header').css({
				'width' : '-webkit-calc(100% - '+ singleWrapWidth +'px)',
				'width' : 'calc(100% - '+ singleWrapWidth +'px)'
			});
		}
		
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_project', 'margin_lt', function( nValue ) {
		pSingle_project_margin_lt = nValue;

		singleWrapWidth = parseInt( pSingle_project_width, 10 ) + parseInt( nValue, 10 );

		$('.project-info-right.single-royal_portfolio .single-wrap').css({
			'width' : '-webkit-calc(100% - '+ singleWrapWidth +'px)',
			'width' : 'calc(100% - '+ singleWrapWidth +'px)'
		});

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_project', 'gutter_vert', function( nValue ) {

		$('.project-details>li').css({
			'padding-top' 	 : nValue +'px',
			'padding-bottom' : nValue +'px'
		});

		projectInfoEqual();
		sidebarEqual();

	});


/* ----------------- Project Info Styling Options ----------------- */

	royalLivePreview( 'pSingle_project', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( pSingleProjectInfo, pSingle_project_bd_tp, pSingle_project_bd_rt, pSingle_project_bd_bt, pSingle_project_bd_lt );
		} else {
			pSingleProjectInfo.css( 'border', 'none' );
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalBorderLivePreview( pSingleProjectInfo, 'pSingle_project', 'top', pSingle_project_bd_tp, 'projectInfoEqual sidebarEqual' );

	royalBorderLivePreview( pSingleProjectInfo, 'pSingle_project', 'right', pSingle_project_bd_rt, 'projectInfoEqual sidebarEqual' );

	royalBorderLivePreview( pSingleProjectInfo, 'pSingle_project', 'bottom', pSingle_project_bd_bt, 'projectInfoEqual sidebarEqual' );

	royalBorderLivePreview( pSingleProjectInfo, 'pSingle_project', 'left', pSingle_project_bd_lt, 'projectInfoEqual sidebarEqual' );

	royalLivePreview( 'pSingle_project', 'list_border_label', function( nValue ) {

		if ( nValue === true ) {
			$('.project-details>li').css( 'border-bottom', pSingle_project_list_bd_size +'px '+ pSingle_project_list_bd_style +' '+  inner_content_border_color );
		} else {
			$('.project-details>li').css( 'border', 'none' );
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'pSingle_project', 'list_bd_size', function( nValue ) {
		pSingle_project_list_bd_size = nValue;
		$('.project-details>li').css( 'border-bottom', nValue +'px '+ pSingle_project_list_bd_style +' '+  inner_content_border_color );

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'pSingle_project', 'list_bd_style', function( nValue ) {
		pSingle_project_list_bd_style = nValue;
		$('.project-details>li').css( 'border-bottom', pSingle_project_list_bd_size +'px '+ nValue +' '+  inner_content_border_color );
	});



/*
***************************************************************
* #Gallery
***************************************************************
*/

/* ----------------- General Options ----------------- */

	royalLivePreview( 'gallery', 'effect', function() {
		royalLoading();
	});

	royalLivePreview( 'gallery', 'transition', function() {
		royalLoading();
	});

	royalLivePreview( 'gallery', 'delay', function() {
		royalLoading();
	});


// define variables
	var slideshowCaption 				= $('.slideshow-caption'),
		slideshow_caption_width 		= royal_options.slideshow_caption.width,
		slideshow_caption_align 		= royal_options.slideshow_caption.align,
		slideshow_caption_position 		= royal_options.slideshow_caption.position,
		slideshow_caption_bg_color 		= royal_options.slideshow_caption.bg_color,
		slideshow_caption_bg_color_tr 	= royal_options.slideshow_caption.bg_color_tr;

/* ----------------- Slideshow Caption General Options ----------------- */

	royalLivePreview( 'slideshow_caption', 'label', function( nValue ) {
		if ( nValue === false ) {
			slideshowCaption.hide();
		} else {
			slideshowCaption.show();
		}
	});

	royalLivePreview( 'slideshow_caption', 'width', function( nValue ) {
		slideshow_caption_width = nValue;

		slideshowCaptionAlign();
		slideshowCaption.css( 'width', nValue );
	});

	function slideshowCaptionAlign() {

		slideshowCaption.css({
			'left' 	: '',
			'right' : ''
		});

		if ( slideshow_caption_width === 'auto' ) {

			slideshowCaption.css({
				'width' : 'auto'
			});

			if ( slideshow_caption_align === 'right' ) {
				slideshowCaption.css({
					'right' : '0'
				});
			} else {
				slideshowCaption.css({
					'left' : '0'
				});
			}

		} else {

			slideshowCaption.css({
				'width' : '100%'
			});

			slideshowCaption.css( 'text-align', slideshow_caption_align );

		}

	} // end slideshowCaptionAlign()

	royalLivePreview( 'slideshow_caption', 'align', function( nValue ) {
		slideshow_caption_align = nValue;
		slideshowCaptionAlign();
	});

	royalLivePreview( 'slideshow_caption', 'position', function( nValue ) {
		slideshow_caption_position = nValue;

		slideshowCaption.css({
			'top' 	 : 'auto',
			'bottom' : 'auto',
			'height' : 'auto'
		});

		if ( nValue === 'top' ) {
			slideshowCaption.css( 'top', '0' );
		} else {
			galleryNavInside();
		}
	});


/* ----------------- Slideshow Caption Spacing Options ----------------- */

	royalLivePreview( 'slideshow_caption', 'padding_tp', function( nValue ) {
		slideshowCaption.css( 'padding-top', nValue +'px' );
	});

	royalLivePreview( 'slideshow_caption', 'padding_rt', function( nValue ) {
		slideshowCaption.css( 'padding-right', nValue +'px' );
	});

	royalLivePreview( 'slideshow_caption', 'padding_bt', function( nValue ) {
		slideshowCaption.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'slideshow_caption', 'padding_lt', function( nValue ) {
		slideshowCaption.css( 'padding-left', nValue +'px' );
	});


/* ----------------- Slideshow Caption Styling Options ----------------- */

	royalLivePreview( 'slideshow_caption', 'bg_color', function( nValue ) {
		slideshow_caption_bg_color = nValue;
		slideshowCaption.css( 'background-color', royalHex2Rgba( slideshow_caption_bg_color, slideshow_caption_bg_color_tr ) );
	});

	royalLivePreview( 'slideshow_caption', 'bg_color_tr', function( nValue ) {
		slideshow_caption_bg_color_tr = nValue;
		slideshowCaption.css( 'background-color', royalHex2Rgba( slideshow_caption_bg_color, slideshow_caption_bg_color_tr ) );
	});

	royalLivePreview( 'slideshow_caption', 'text_color', function( nValue ) {
		slideshowCaption.css( 'color', nValue );
	});



// define variables
	var stackedCaption 			 = $('.stacked-caption'),
		stacked_caption_position = royal_options.stacked_caption.position,
		stacked_caption_gutter 	 = royal_options.stacked_caption.gutter;

/* ----------------- Stacked Caption General Options ----------------- */

	royalLivePreview( 'stacked_caption', 'label', function( nValue ) {

		if ( nValue === false ) {
			stackedCaption.find('span').css( 'display', 'none' );
		} else {
			stackedCaption.find('span').css( 'display', 'inline-block' );
		}

		if ( stacked_caption_gutter === '0' ) {
			stackedCaption.css( 'border', 'none' );
		} else {
			stackedCaption.css( 'border', '1px solid transparent' );
		}

		projectInfoEqual();
		sidebarEqual();

	});

	royalLivePreview( 'stacked_caption', 'align', function( nValue ) {
		stackedCaption.css( 'text-align', nValue );
	});

	function stackedCaptionPosition() {

		$('.stacked-caption').each(function() {

			var parent 		= $(this).parent('.gallery-slide'),
				tmpCaption 	= $(this).remove();

			if ( stacked_caption_position === 'top' ) {
				parent.prepend( tmpCaption );
			} else {
				parent.append( tmpCaption );
			}

		});

		stackedCaption.css({
			'margin-top' 	: '0',
			'margin-bottom' : '0'
		});

		if ( stacked_caption_position === 'top' ) {

			stackedCaption.css( 'margin-top', stacked_caption_gutter +'px' );
			$('.gallery-slideshow .gallery-slide:first-of-type .stacked-caption').css( 'margin-top', '0' );

		} else {

			stackedCaption.css( 'margin-bottom', stacked_caption_gutter +'px' );
			$('.gallery-slideshow .gallery-slide:last-of-type .stacked-caption').css( 'margin-bottom', '0' );

		}

	}

	royalLivePreview( 'stacked_caption', 'position', function( nValue ) {
		stacked_caption_position = nValue;

		stackedCaptionPosition();
		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Stacked Caption Spacing Options ----------------- */

	royalLivePreview( 'stacked_caption', 'gutter', function( nValue ) {
		stacked_caption_gutter = nValue;

		stackedCaptionPosition();

		if ( nValue === '0' ) {
			stackedCaption.css( 'border', 'none' );
		} else {
			stackedCaption.css( 'border', '1px solid transparent' );
		}

		projectInfoEqual();
		sidebarEqual();
	});



// define variables
	var galleryNav 				= $('.gallery-nav'),
		gallery_nav_label 		= royal_options.gallery_nav.label,
		gallery_nav_position 	= royal_options.gallery_nav.position,
		gallery_nav_height 		= royal_options.gallery_nav.height,
		gallery_nav_padding_tp 	= royal_options.gallery_nav.padding_tp,
		gallery_nav_padding_bt 	= royal_options.gallery_nav.padding_bt,
		gallery_nav_bg_color 	= royal_options.gallery_nav.bg_color,
		gallery_nav_bg_color_tr = royal_options.gallery_nav.bg_color_tr,
		gallery_nav_color 		= royal_options.gallery_nav.color,
		gallery_nav_hover_color = royal_options.gallery_nav.hover_color,
		gallery_nav_radius 		= royal_options.gallery_nav.radius;

/* ----------------- Navigation General Options ----------------- */

	royalLivePreview( 'gallery_nav', 'label', function( nValue ) {
		gallery_nav_label = nValue;

		if ( nValue === false ) {
			galleryNav.hide();
		} else {
			galleryNav.show();
		}

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'align', function( nValue ) {
		galleryNav.css( 'text-align', nValue );
	});

	function galleryNavInside() {

		slideshowCaption.css({
			'top' 	 : 'auto',
			'bottom' : 'auto',
			'height' : 'auto'
		});

		if ( gallery_nav_position === 'inside' ) {

			galleryNav.css( 'margin-top', '-'+ ( parseInt(gallery_nav_height,10) + parseInt(gallery_nav_padding_tp,10) + parseInt(gallery_nav_padding_bt,10) ) +'px' );
			
			if ( slideshow_caption_position === 'bottom' ) {

				if ( gallery_nav_label === true ) {
					slideshowCaption.css( 'bottom', ( parseInt(gallery_nav_height,10) + parseInt(gallery_nav_padding_tp,10) + parseInt(gallery_nav_padding_bt,10) ) +'px' );
				} else {
					slideshowCaption.css( 'bottom', '0' );
				}
				
			} else {
				slideshowCaption.css( 'top', '0' );
			}
			
		} else {

			galleryNav.css( 'margin-top', '0' );

			if ( slideshow_caption_position === 'bottom' ) {
				slideshowCaption.css( 'bottom', '0' );
			} else {
				slideshowCaption.css( 'top', '0' );
			}
			
		}
	} // end galleryNavInside()

	royalLivePreview( 'gallery_nav', 'position', function( nValue ) {
		gallery_nav_position = nValue;

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Navigation Spacing Options ----------------- */

	royalLivePreview( 'gallery_nav', 'padding_tp', function( nValue ) {
		gallery_nav_padding_tp = nValue;
		galleryNav.css( 'padding-top', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'padding_rt', function( nValue ) {
		galleryNav.css( 'padding-right', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'padding_bt', function( nValue ) {
		gallery_nav_padding_bt = nValue;
		galleryNav.css( 'padding-bottom', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'padding_lt', function( nValue ) {
		galleryNav.css( 'padding-left', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'width', function( nValue ) {
		galleryNav.find('span').css( 'width', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'height', function( nValue ) {
		gallery_nav_height = nValue;
		galleryNav.find('span').css( 'height', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_nav', 'gutter', function( nValue ) {
		galleryNav.find('span').css( 'margin-right', nValue +'px' );

		galleryNavInside();
		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Navigation Styling Options ----------------- */

	royalLivePreview( 'gallery_nav', 'bg_color', function( nValue ) {
		gallery_nav_bg_color = nValue;
		galleryNav.css( 'background-color', royalHex2Rgba( gallery_nav_bg_color, gallery_nav_bg_color_tr ) );
	});

	royalLivePreview( 'gallery_nav', 'bg_color_tr', function( nValue ) {
		gallery_nav_bg_color_tr = nValue;
		galleryNav.css( 'background-color', royalHex2Rgba( gallery_nav_bg_color, gallery_nav_bg_color_tr ) );
	});

	function galleryNavColor() {

		$('#gallery_nav_color').remove();

		$('head').append('\
			<style id="gallery_nav_color">\
				.gallery-nav span { background-color: '+ gallery_nav_color +'; }\
				.gallery-nav span:hover, .gallery-slideshow .cycle-pager-active { background-color: '+ gallery_nav_hover_color +'; }\
			</style>\
		');

	}

	royalLivePreview( 'gallery_nav', 'color', function( nValue ) {
		gallery_nav_color = nValue;
		galleryNavColor();
	});

	royalLivePreview( 'gallery_nav', 'hover_color', function( nValue ) {
		gallery_nav_hover_color = nValue;
		galleryNavColor();
	});

	royalLivePreview( 'gallery_nav', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			galleryNav.find('span').css({
				'border-radius' : gallery_nav_radius + '%'
			});

		} else {

			galleryNav.find('span').css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'gallery_nav', 'radius', function( nValue ) {
		gallery_nav_radius = nValue;
		galleryNav.find('span').css( 'border-radius', gallery_nav_radius + '%' );
	});



// define variables
	var galleryArrows 			= $('.gallery-arrow'),
		gallery_arrows_color 	= royal_options.gallery_arrows.color,
		gallery_arrows_color_tr = royal_options.gallery_arrows.color_tr;

/* ----------------- Arrows General Options ----------------- */

	royalLivePreview( 'gallery_arrows', 'label', function( nValue ) {
		if ( nValue === false ) {
			galleryArrows.hide();
		} else {
			galleryArrows.show();
		}
	});

	royalLivePreview( 'gallery_arrows', 'default', function( nValue ) {
		galleryArrows.css( 'opacity', nValue );
	});

	royalLivePreview( 'gallery_arrows', 'prev_nxt_icon', function( nValue ) {
		$('.gallery-prev-slide').find('i').removeAttr('class');
		$('.gallery-prev-slide').find('i').addClass( 'fa fa-'+ nValue +'-left' );
		$('.gallery-next-slide').find('i').removeAttr('class');
		$('.gallery-next-slide').find('i').addClass( 'fa fa-'+ nValue +'-right' );
	});


/* ----------------- Arrows Spacing Options ----------------- */

	royalLivePreview( 'gallery_arrows', 'width', function( nValue ) {
		galleryArrows.css( 'width', nValue +'px' );
	});

	royalLivePreview( 'gallery_arrows', 'height', function( nValue ) {

		var topMargin = parseInt( nValue, 10 ) / 2;

		galleryArrows.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px',
			'margin-top'  : '-'+ topMargin +'px',
		});

	});


/* ----------------- Arrows Spacing Options ----------------- */

	royalLivePreview( 'gallery_arrows', 'color', function( nValue ) {
		gallery_arrows_color = nValue;
		galleryArrows.css( 'background-color', royalHex2Rgba( gallery_arrows_color, gallery_arrows_color_tr ) );
	});

	royalLivePreview( 'gallery_arrows', 'color_tr', function( nValue ) {
		gallery_arrows_color_tr = nValue;
		galleryArrows.css( 'background-color', royalHex2Rgba( gallery_arrows_color, gallery_arrows_color_tr ) );
	});

	royalLivePreview( 'gallery_arrows', 'icon_color', function( nValue ) {
		galleryArrows.css( 'color', nValue );
	});


/* ----------------- Arrows Font Options ----------------- */

	royalLivePreview( 'gallery_arrows', 'icon_size', function( nValue ) {
		galleryArrows.css( 'font-size', nValue +'px' );
	});



// define variables
	var lightboxOverlay 			= $('.lightbox-overlay .image-overlay'),
		lightboxOverlayIcon 		= lightboxOverlay.find('i'),
		gallery_lightbox_bg_hcol 	= royal_options.gallery_lightbox.bg_hcol,
		gallery_lightbox_bg_hcol_tr = royal_options.gallery_lightbox.bg_hcol_tr;

/* ----------------- Lightbox Overlay General Options ----------------- */

	royalLivePreview( 'gallery_lightbox', 'label', function( nValue ) {
		if ( nValue === false ) {
			lightboxOverlay.hide();
		} else {
			lightboxOverlay.show();
		}
	});

	royalLivePreview( 'gallery_lightbox', 'icon', function( nValue ) {
		lightboxOverlayIcon.removeAttr('class');
		lightboxOverlayIcon.addClass( 'fa fa-' + nValue );
	});


/* ----------------- Lightbox Overlay Styling Options ----------------- */

	royalLivePreview( 'gallery_lightbox', 'bg_hcol', function( nValue ) {
		gallery_lightbox_bg_hcol = nValue;
		lightboxOverlay.css( 'background-color', royalHex2Rgba( gallery_lightbox_bg_hcol, gallery_lightbox_bg_hcol_tr ) );
	});

	royalLivePreview( 'gallery_lightbox', 'bg_hcol_tr', function( nValue ) {
		gallery_lightbox_bg_hcol_tr = nValue;
		lightboxOverlay.css( 'background-color', royalHex2Rgba( gallery_lightbox_bg_hcol, gallery_lightbox_bg_hcol_tr ) );
	});

	royalLivePreview( 'gallery_lightbox', 'txt_hcol', function( nValue ) {
		lightboxOverlayIcon.css( 'color', nValue );
	});


/* ----------------- Lightbox Overlay Font Options ----------------- */

	royalLivePreview( 'gallery_lightbox', 'icon_size', function( nValue ) {
		lightboxOverlayIcon.css( 'font-size', nValue +'px' );
	});



// define variables
	var royalGallery 				= $('.royal-gallery .gallery-item'),
		gallery_default_gutter_horz	= royal_options.gallery_default.gutter_horz,
		gallery_default_gutter_vert	= royal_options.gallery_default.gutter_vert,
		gallery_default_shad_h		= royal_options.gallery_default.shad_h,
		gallery_default_shad_v		= royal_options.gallery_default.shad_v,
		gallery_default_shad_bl		= royal_options.gallery_default.shad_bl,
		gallery_default_shad_sp		= royal_options.gallery_default.shad_sp,
		gallery_default_shad_col	= royal_options.gallery_default.shad_col,
		gallery_default_shad_col_tr	= royal_options.gallery_default.shad_col_tr;

/* ----------------- Default Shortcode General Options ----------------- */

	royalLivePreview( 'gallery_default', 'captions', function( nValue ) {

		if ( nValue === false ) {
			royalGallery.find('figcaption').hide();
		} else {
			royalGallery.find('figcaption').show();
		}

		projectInfoEqual();
		sidebarEqual();

	});


/* ----------------- Default Shortcode Spacing Options ----------------- */

	function royalGalleryGutter() {

		royalGallery.css({
			'margin-right' 	: gallery_default_gutter_horz +'px',
			'margin-bottom' : gallery_default_gutter_vert +'px'
		});

		$('.gallery-columns-2 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 1)) / 2)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 1)) / 2)'
		});
		$('.gallery-columns-3 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 2)) / 3)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 2)) / 3)'
		});
		$('.gallery-columns-4 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 3)) / 4)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 3)) / 4)'
		});
		$('.gallery-columns-5 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 4)) / 5)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 4)) / 5)'
		});
		$('.gallery-columns-6 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 5)) / 6)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 5)) / 6)'
		});
		$('.gallery-columns-7 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 6)) / 7)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 6)) / 7)'
		});
		$('.gallery-columns-8 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 7)) / 8)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 7)) / 8)'
		});
		$('.gallery-columns-9 .gallery-item').css({
			'width' : '-webkit-calc((100% - ('+ gallery_default_gutter_horz +'px * 8)) / 9)',
			'width' : 'calc((100% - ('+ gallery_default_gutter_horz +'px * 8)) / 9)'
		});

	}

	royalLivePreview( 'gallery_default', 'gutter_horz', function( nValue ) {
		gallery_default_gutter_horz = nValue;
		royalGalleryGutter();

		projectInfoEqual();
		sidebarEqual();
	});

	royalLivePreview( 'gallery_default', 'gutter_vert', function( nValue ) {
		gallery_default_gutter_vert = nValue;
		royalGalleryGutter();

		projectInfoEqual();
		sidebarEqual();
	});


/* ----------------- Default Shortcode Styling Options ----------------- */

	function royalGalleryShadow() {
		royalGallery.css( 'box-shadow', royalShadow( [
			gallery_default_shad_h,
			gallery_default_shad_v,
			gallery_default_shad_bl,
			gallery_default_shad_sp,
			gallery_default_shad_col,
			gallery_default_shad_col_tr
		] ) );
	}

	royalLivePreview( 'gallery_default', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			royalGalleryShadow();
		} else {
			royalGallery.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'gallery_default', 'shad_h', function( nValue ) {
		gallery_default_shad_h = nValue;
		royalGalleryShadow();
	});

	royalLivePreview( 'gallery_default', 'shad_v', function( nValue ) {
		gallery_default_shad_v = nValue;
		royalGalleryShadow();
	});

	royalLivePreview( 'gallery_default', 'shad_bl', function( nValue ) {
		gallery_default_shad_bl = nValue;
		royalGalleryShadow();
	});

	royalLivePreview( 'gallery_default', 'shad_sp', function( nValue ) {
		gallery_default_shad_sp = nValue;
		royalGalleryShadow();
	});

	royalLivePreview( 'gallery_default', 'shad_col', function( nValue ) {
		gallery_default_shad_col = nValue;
		royalGalleryShadow();
	});

	royalLivePreview( 'gallery_default', 'shad_col_tr', function( nValue ) {
		gallery_default_shad_col_tr = nValue;
		royalGalleryShadow();
	});




/*
***************************************************************
* #Similar Posts
***************************************************************
*/

// define variables 
	var similarsWrap 					= $('.similar-items'),
		carouselWrap 					= $('.jcarousel-wrap'),
		similars_general_rad			= royal_options.similars_general.radius,
		similars_general_border_size	= royal_options.similars_general.border_size,
		similars_general_border_style	= royal_options.similars_general.border_style,
		similars_general_border_color	= royal_options.similars_general.border_color;

/* ----------------- General Options ----------------- */

	royalLivePreview( 'similars_general', 'blog_label', function() {
		royalLoading();
	});

	royalLivePreview( 'similars_general', 'blog_showtype', function() {
		royalLoading();
	});

	royalLivePreview( 'similars_general', 'portfolio_label', function() {
		royalLoading();
	});

	royalLivePreview( 'similars_general', 'portfolio_showtype', function() {
		royalLoading();
	});

	royalLivePreview( 'similars_general', 'posts_number', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'similars_general', 'auto_scroll', function() {
		royalLoading();
	});

	royalLivePreview( 'similars_general', 'columns_rate', function( nValue ) {
		similarsWrap.attr( 'data-columns-rate', nValue );
		royalSimilarItems();
	});

	royalLivePreview( 'similars_general', 'auto_scroll_delay', function( nValue ) {
		similarsWrap.attr( 'data-interval', parseInt(nValue,10) );
		royalSimilarItems( true );
	});

	royalLivePreview( 'similars_general', 'scroll_trans', function( nValue ) {
		similarsWrap.attr( 'data-animation',  parseInt(nValue,10) );
		royalSimilarItems( true );
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'similars_general', 'padding', function( nValue ) {

		carouselWrap.css( {
			'padding-left' 	: nValue +'px',
			'padding-right' : nValue +'px'
		} );

		royalSimilarItems();

	});

	royalLivePreview( 'similars_general', 'image_gutter', function( nValue ) {

		carouselWrap.find('li').css( {
			'padding-left' 	: nValue +'px',
			'padding-right' : nValue +'px'
		} );

		$('.jcarousel-prev').css( 'left', nValue +'px' );
		$('.jcarousel-next').css( 'right', nValue +'px' );

		royalSimilarItems();

	});


/* ----------------- Styling Option ----------------- */

	royalLivePreview( 'similars_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			carouselWrap.find('.image-overlay-wrap').css( 'border-width', similars_general_border_size +'px' );
			carouselWrap.find('.image-overlay-wrap').css( 'border-style', similars_general_border_style );
			paginationNav.css( 'border-color', similars_general_border_color );

		} else {
			carouselWrap.find('.image-overlay-wrap').css( 'border', 'none' );
		}

		royalSimilarItems();
	});

	royalLivePreview( 'similars_general', 'border_size', function( nValue ) {
		similars_general_border_size = nValue;
		carouselWrap.find('.image-overlay-wrap').css( 'border-width', similars_general_border_size +'px' );

		royalSimilarItems();
	});

	royalLivePreview( 'similars_general', 'border_style', function( nValue ) {
		similars_general_border_style = nValue;
		carouselWrap.find('.image-overlay-wrap').css( 'border-style', similars_general_border_style );
	});

	royalLivePreview( 'similars_general', 'border_color', function( nValue ) {
		similars_general_border_color = nValue;
		carouselWrap.find('.image-overlay-wrap').css( 'border-color', similars_general_border_color );
	});

	royalLivePreview( 'similars_general', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			carouselWrap.find('.image-overlay-wrap').css({
				'border-radius' : similars_general_rad + '%'
			});

		} else {

			carouselWrap.find('.image-overlay-wrap').css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'similars_general', 'radius', function( nValue ) {
		similars_general_rad = nValue;
		carouselWrap.find('.image-overlay-wrap').css( 'border-radius', similars_general_rad + '%' );
	});



// define variables
	var similarsTitle 				= $('.similar-items h3'),
		similarsTitleIn 			= similarsTitle.find('span'),
		similars_title_bd_size_bt 	= royal_options.similars_title.bd_size_bt,
		similars_title_bd_style_bt 	= royal_options.similars_title.bd_style_bt;

/* ----------------- Title General Option ----------------- */

	royalLivePreview( 'similars_title', 'blog_text', function( nValue ) {

		if ( nValue === '' ) {
			$('.single-post .similar-items h3').hide();
		} else {
			$('.single-post .similar-items h3').show();
		}

		$('.single-post .similar-items h3 span').text( nValue );

	});

	royalLivePreview( 'similars_title', 'portfolio_text', function( nValue ) {

		if ( nValue === '' ) {
			$('.single-royal_portfolio .similar-items h3').hide();
		} else {
			$('.single-royal_portfolio .similar-items h3').show();
		}

		$('.single-royal_portfolio .similar-items h3 span').text( nValue );

	});

	royalLivePreview( 'similars_title', 'align', function( nValue ) {
		similarsTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Option ----------------- */

	royalLivePreview( 'similars_title', 'padding_bt', function( nValue ) {
		similarsTitleIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'similars_title', 'margin_bt', function( nValue ) {
		similarsTitleIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'similars_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			similarsTitleIn.css( 'border-bottom', similars_title_bd_size_bt +'px '+ similars_title_bd_style_bt +' '+  inner_content_border_color );
		} else {
			similarsTitleIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'similars_title', 'bd_size_bt', function( nValue ) {
		similars_title_bd_size_bt = nValue;
		similarsTitleIn.css( 'border-bottom', nValue +'px '+ similars_title_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'similars_title', 'bd_style_bt', function( nValue ) {
		similars_title_bd_style_bt = nValue;
		similarsTitleIn.css( 'border-bottom', similars_title_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});

	royalLivePreview( 'similars_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			similarsTitleIn.css( 'display', 'block' );
		} else {
			similarsTitleIn.css( 'display', 'inline-block' );
		}
	});



// define variables
	var similarsArrowsWrap			= $('.jcarousel-prev, .jcarousel-next'),
		similarsArrows 				= $('.jcarousel-prev i, .jcarousel-next i'),
		similars_arrows_bg_col		= royal_options.similars_arrows.bg_col,
		similars_arrows_bg_col_tr	= royal_options.similars_arrows.bg_col_tr,
		similars_arrows_txt_col		= royal_options.similars_arrows.txt_col,
		similars_arrows_bg_hcol		= royal_options.similars_arrows.bg_hcol,
		similars_arrows_bg_hcol_tr	= royal_options.similars_arrows.bg_hcol_tr,
		similars_arrows_txt_hcol	= royal_options.similars_arrows.txt_hcol,
		similars_arrows_bd_hcol		= royal_options.similars_arrows.bd_hcol,
		similars_arrows_rad			= royal_options.similars_arrows.radius,
		similars_arrows_shad_h		= royal_options.similars_arrows.shad_h,
		similars_arrows_shad_v		= royal_options.similars_arrows.shad_v,
		similars_arrows_shad_bl		= royal_options.similars_arrows.shad_bl,
		similars_arrows_shad_sp		= royal_options.similars_arrows.shad_sp,
		similars_arrows_shad_col	= royal_options.similars_arrows.shad_col,
		similars_arrows_shad_col_tr	= royal_options.similars_arrows.shad_col_tr,
		similars_arrows_shad_in		= royal_options.similars_arrows.shad_in;

	// border 4x live update
	var similars_arrows_bd_gen = [
			royal_options.similars_arrows.bd_size_gen,
			royal_options.similars_arrows.bd_style_gen,
			royal_options.similars_arrows.bd_col_gen 
		];

/* ----------------- Arrows General Options ----------------- */

	royalLivePreview( 'similars_arrows', 'label', function( nValue ) {
		if ( nValue === true ) {
			similarsArrowsWrap.show();
		} else {
			similarsArrowsWrap.hide();
		}
	});

	royalLivePreview( 'similars_arrows', 'prev_nxt_icon', function( nValue ) {
		$('.jcarousel-prev').find('i').removeAttr('class');
		$('.jcarousel-prev').find('i').addClass( 'rf-button fa fa-'+ nValue +'-left' );
		$('.jcarousel-next').find('i').removeAttr('class');
		$('.jcarousel-next').find('i').addClass( 'rf-button fa fa-'+ nValue +'-right' );
	});


/* ----------------- Arrows Spacing Options ----------------- */

	royalLivePreview( 'similars_arrows', 'width', function( nValue ) {
		similarsArrows.css( 'width', nValue +'px' );
	});

	royalLivePreview( 'similars_arrows', 'height', function( nValue ) {

		var topMargin = parseInt( ( nValue / 2 ), 10 );

		similarsArrows.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});

		$('.jcarousel-prev, .jcarousel-next').css({
			'margin-top' :  '-'+ topMargin +'px'
		});

	});


/* ----------------- Arrows Styling Options ----------------- */

	function similarsArrowsHover() {
		similarsArrows.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( similars_arrows_bg_hcol, similars_arrows_bg_hcol_tr ),
				'color' 			: similars_arrows_txt_hcol,
				'border-color' 		: similars_arrows_bd_hcol
			});

		}, function() {

			similarsArrows.css({
				'background-color' 	: royalHex2Rgba( similars_arrows_bg_col, similars_arrows_bg_col_tr ),
				'color' 			: similars_arrows_txt_col,
				'border-color' 		: similars_arrows_bd_gen[2]
			});

		});
	}

	similarsArrowsHover();

	royalLivePreview( 'similars_arrows', 'bg_col', function( nValue ) {
		similars_arrows_bg_col = nValue;
		similarsArrows.css( 'background-color', royalHex2Rgba( similars_arrows_bg_col, similars_arrows_bg_col_tr ) );
	});

	royalLivePreview( 'similars_arrows', 'bg_col_tr', function( nValue ) {
		similars_arrows_bg_col_tr = nValue;
		similarsArrows.css( 'background-color', royalHex2Rgba( similars_arrows_bg_col, similars_arrows_bg_col_tr ) );
	});

	royalLivePreview( 'similars_arrows', 'txt_col', function( nValue ) {
		similars_arrows_txt_col = nValue;
		similarsArrows.css( 'color', similars_arrows_txt_col );
	});

	royalLivePreview( 'similars_arrows', 'bg_hcol', function( nValue ) {
		similars_arrows_bg_hcol = nValue;
	});

	royalLivePreview( 'similars_arrows', 'bg_hcol_tr', function( nValue ) {
		similars_arrows_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'similars_arrows', 'txt_hcol', function( nValue ) {
		similars_arrows_txt_hcol = nValue;
	});

	royalLivePreview( 'similars_arrows', 'bd_hcol', function( nValue ) {
		similars_arrows_bd_hcol = nValue;
	});

	royalLivePreview( 'similars_arrows', 'border_label', function( nValue ) {
		if ( nValue === true ) {
			similarsArrows.css('border', similars_arrows_bd_gen[0] +'px '+ similars_arrows_bd_gen[1] +' '+ similars_arrows_bd_gen[2] );
		} else {
			similarsArrows.css( 'border', 'none' );
		}
	});

	royalLivePreview( 'similars_arrows', 'bd_size_gen', function( nValue ) {
		similars_arrows_bd_gen[0] = nValue;
		similarsArrows.css('border', similars_arrows_bd_gen[0] +'px '+ similars_arrows_bd_gen[1] +' '+ similars_arrows_bd_gen[2] );
	});

	royalLivePreview( 'similars_arrows', 'bd_style_gen', function( nValue ) {
		similars_arrows_bd_gen[1] = nValue;
		similarsArrows.css('border', similars_arrows_bd_gen[0] +'px '+ similars_arrows_bd_gen[1] +' '+ similars_arrows_bd_gen[2] );
	});

	royalLivePreview( 'similars_arrows', 'bd_col_gen', function( nValue ) {
		similars_arrows_bd_gen[2] = nValue;
		similarsArrows.css('border', similars_arrows_bd_gen[0] +'px '+ similars_arrows_bd_gen[1] +' '+ similars_arrows_bd_gen[2] );
	});

	royalLivePreview( 'similars_arrows', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			similarsArrows.css({
				'border-radius' : similars_arrows_rad + '%'
			});

		} else {

			similarsArrows.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'similars_arrows', 'radius', function( nValue ) {
		similars_arrows_rad = nValue;
		similarsArrows.css( 'border-radius', similars_arrows_rad + '%' );
	});

	function similarsArrowsShadow() {
		similarsArrows.css( 'box-shadow', royalShadow( [
			similars_arrows_shad_h,
			similars_arrows_shad_v,
			similars_arrows_shad_bl,
			similars_arrows_shad_sp,
			similars_arrows_shad_col,
			similars_arrows_shad_col_tr,
			similars_arrows_shad_in
		] ) );
	}

	royalLivePreview( 'similars_arrows', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			similarsArrowsShadow();
		} else {
			similarsArrows.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'similars_arrows', 'shad_h', function( nValue ) {
		similars_arrows_shad_h = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_v', function( nValue ) {
		similars_arrows_shad_v = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_bl', function( nValue ) {
		similars_arrows_shad_bl = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_sp', function( nValue ) {
		similars_arrows_shad_sp = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_col', function( nValue ) {
		similars_arrows_shad_col = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_col_tr', function( nValue ) {
		similars_arrows_shad_col_tr = nValue;
		similarsArrowsShadow();
	});

	royalLivePreview( 'similars_arrows', 'shad_in', function( nValue ) {
		similars_arrows_shad_in = nValue;
		similarsArrowsShadow();
	});


/* ----------------- Arrows Font Options ----------------- */

	royalLivePreview( 'similars_arrows', 'font_size', function( nValue ) {
		similarsArrows.css( 'font-size', nValue + 'px' );
	});



// define variables
	var similarsOverlay					= $('.jcarousel .image-overlay-wrap'),
		similars_overlay_bg_hcol		= royal_options.similars_overlay.bg_hcol,
		similars_overlay_bg_hcol_tr		= royal_options.similars_overlay.bg_hcol_tr,
		similars_overlay_txt_bg_hcol	= royal_options.similars_overlay.txt_bg_hcol,
		similars_overlay_txt_bg_hcol_tr	= royal_options.similars_overlay.txt_bg_hcol_tr;

/* ----------------- Image Overlay Styling Options ----------------- */

	royalLivePreview( 'similars_overlay', 'bg_hcol', function( nValue ) {
		similars_overlay_bg_hcol = nValue;
		similarsOverlay.find('.image-overlay').css( 'background-color', royalHex2Rgba( similars_overlay_bg_hcol, similars_overlay_bg_hcol_tr ) );
	});

	royalLivePreview( 'similars_overlay', 'bg_hcol_tr', function( nValue ) {
		similars_overlay_bg_hcol_tr = nValue;
		similarsOverlay.find('.image-overlay').css( 'background-color', royalHex2Rgba( similars_overlay_bg_hcol, similars_overlay_bg_hcol_tr ) );
	});

	royalLivePreview( 'similars_overlay', 'txt_bg_hcol', function( nValue ) {
		similars_overlay_txt_bg_hcol = nValue;
		similarsOverlay.find('h5').css( 'background-color', royalHex2Rgba( similars_overlay_txt_bg_hcol, similars_overlay_txt_bg_hcol_tr ) );
	});

	royalLivePreview( 'similars_overlay', 'txt_bg_hcol_tr', function( nValue ) {
		similars_overlay_txt_bg_hcol_tr = nValue;
		similarsOverlay.find('h5').css( 'background-color', royalHex2Rgba( similars_overlay_txt_bg_hcol, similars_overlay_txt_bg_hcol_tr ) );
	});

	royalLivePreview( 'similars_overlay', 'txt_hcol', function( nValue ) {
		similarsOverlay.find('h5').css( 'color', nValue );
	});

	royalLivePreview( 'similars_overlay', 'reverse', function( nValue ) {

		if ( nValue === true ) {

			similarsOverlay.find('.image-overlay').css( 'opacity', 1 );
			similarsOverlay.find('.image-overlay').hover(function() {
				$(this).css( 'opacity', 0 );
			}, function() {
				$(this).css( 'opacity', 1 );
			});

		} else {

			similarsOverlay.find('.image-overlay').css( 'opacity', 0 );
			similarsOverlay.find('.image-overlay').hover(function() {
				$(this).css( 'opacity', 1 );
			}, function() {
				$(this).css( 'opacity', 0 );
			});

		}

	});



/*
***************************************************************
* #Comments
***************************************************************
*/

// define variables
	var commentsAreaWrap 			 = $('.comments-area-wrap'),
		commentsArea 				 = commentsAreaWrap.find('.comments-area'),
		comments_general_bd_size_bt  = royal_options.comments_general.bd_size_bt,
		comments_general_bd_style_bt = royal_options.comments_general.bd_style_bt;

/* ----------------- General Options ----------------- */

	royalLivePreview( 'comments_general', 'blog_display', function() {
		royalLoading();
	});

	royalLivePreview( 'comments_general', 'portfolio_display', function() {
		royalLoading();
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'comments_general', 'max_width', function( nValue ) {
		commentsAreaWrap.css( 'max-width', nValue +'px' );
	});

	royalLivePreview( 'comments_general', 'padding_bt', function( nValue ) {
		commentsArea.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'comments_general', 'margin_bt', function( nValue ) {
		commentsArea.css( 'margin-bottom', nValue +'px' );
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'comments_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			commentsArea.css( 'border-bottom', comments_general_bd_size_bt +'px '+ comments_general_bd_style_bt +' '+  inner_content_border_color );
		} else {
			commentsArea.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'comments_general', 'bd_size_bt', function( nValue ) {
		comments_general_bd_size_bt = nValue;
		commentsArea.css( 'border-bottom', nValue +'px '+ comments_general_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'comments_general', 'bd_style_bt', function( nValue ) {
		comments_general_bd_style_bt = nValue;
		commentsArea.css( 'border-bottom', comments_general_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});



// define variables
	var commentsCounter 			 = commentsAreaWrap.find('.comments-count'),
		commentsCounterIn 			 = commentsCounter.find('span'),
		comments_counter_bd_size_bt  = royal_options.comments_counter.bd_size_bt,
		comments_counter_bd_style_bt = royal_options.comments_counter.bd_style_bt;

/* ----------------- Counter General Options ----------------- */

	royalLivePreview( 'comments_counter', 'singular_label', function( nValue ) {

		var commentsCount = commentsCounter.text();

		if ( parseInt( commentsCount, 10 ) <= 1 ) {
			commentsCounter.find('span').text( nValue );
		}

	});

	royalLivePreview( 'comments_counter', 'plural_label', function( nValue ) {

		var commentsCount = commentsCounter.text();

		if ( parseInt( commentsCount, 10 ) > 1 ) {
			commentsCounter.find('span').text( nValue );
		}

	});

	royalLivePreview( 'comments_counter', 'align', function( nValue ) {
		commentsCounter.css( 'text-align', nValue );
	});


/* ----------------- Counter Spacing Options ----------------- */

	royalLivePreview( 'comments_counter', 'padding_bt', function( nValue ) {
		commentsCounterIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_counter', 'margin_bt', function( nValue ) {
		commentsCounterIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Counter Styling Options ----------------- */

	royalLivePreview( 'comments_counter', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			commentsCounterIn.css( 'border-bottom', comments_counter_bd_size_bt +'px '+ comments_counter_bd_style_bt +' '+  inner_content_border_color );
		} else {
			commentsCounterIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'comments_counter', 'bd_size_bt', function( nValue ) {
		comments_counter_bd_size_bt = nValue;
		commentsCounterIn.css( 'border-bottom', nValue +'px '+ comments_counter_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'comments_counter', 'bd_style_bt', function( nValue ) {
		comments_counter_bd_style_bt = nValue;
		commentsCounterIn.css( 'border-bottom', comments_counter_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});

	royalLivePreview( 'comments_counter', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			commentsCounterIn.css( 'display', 'block' );
		} else {
			commentsCounterIn.css( 'display', 'inline-block' );
		}
	});



// define variables
	var commentsAuthorImg 			= commentsAreaWrap.find('.comment-author-img'),
		comments_image_size			= royal_options.comments_image.avatar_size,
		comments_image_rad			= royal_options.comments_image.radius,
		comments_image_shad_h		= royal_options.comments_image.shad_h,
		comments_image_shad_v		= royal_options.comments_image.shad_v,
		comments_image_shad_bl		= royal_options.comments_image.shad_bl,
		comments_image_shad_sp		= royal_options.comments_image.shad_sp,
		comments_image_shad_col		= royal_options.comments_image.shad_col,
		comments_image_shad_col_tr	= royal_options.comments_image.shad_col_tr;

/* ----------------- Author Image General Options ----------------- */

	royalLivePreview( 'comments_image', 'avatar_size', function() {
		royalLoading();
	});


/* ----------------- Author Image Spacing Options ----------------- */

	royalLivePreview( 'comments_image', 'margin_rt', function( nValue ) {
		$('.comment-content-wrap').css( 'margin-left', ( parseInt( comments_image_size, 10 ) + parseInt( nValue, 10 ) ) +'px' );
		$('.children .comment-content-wrap').css( 'margin-left', ( parseInt( comments_image_size - 3, 10 ) + parseInt( nValue, 10 ) ) +'px' );
	
		sidebarEqual();
	});


/* ----------------- Author Image Styling Options ----------------- */

	royalLivePreview( 'comments_image', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			commentsAuthorImg.css({
				'border-radius' : comments_image_rad + '%'
			});

		} else {

			commentsAuthorImg.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'comments_image', 'radius', function( nValue ) {
		comments_image_rad = nValue;
		commentsAuthorImg.css( 'border-radius', comments_image_rad + '%' );
	});

	function commentsAuthorImgShadow() {
		commentsAuthorImg.css( 'box-shadow', royalShadow( [
			comments_image_shad_h,
			comments_image_shad_v,
			comments_image_shad_bl,
			comments_image_shad_sp,
			comments_image_shad_col,
			comments_image_shad_col_tr
		] ) );
	}

	royalLivePreview( 'comments_image', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			commentsAuthorImgShadow();
		} else {
			commentsAuthorImg.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'comments_image', 'shad_h', function( nValue ) {
		comments_image_shad_h = nValue;
		commentsAuthorImgShadow();
	});

	royalLivePreview( 'comments_image', 'shad_v', function( nValue ) {
		comments_image_shad_v = nValue;
		commentsAuthorImgShadow();
	});

	royalLivePreview( 'comments_image', 'shad_bl', function( nValue ) {
		comments_image_shad_bl = nValue;
		commentsAuthorImgShadow();
	});

	royalLivePreview( 'comments_image', 'shad_sp', function( nValue ) {
		comments_image_shad_sp = nValue;
		commentsAuthorImgShadow();
	});

	royalLivePreview( 'comments_image', 'shad_col', function( nValue ) {
		comments_image_shad_col = nValue;
		commentsAuthorImgShadow();
	});

	royalLivePreview( 'comments_image', 'shad_col_tr', function( nValue ) {
		comments_image_shad_col_tr = nValue;
		commentsAuthorImgShadow();
	});



// define variables
	var commentsContent 			 = commentsAreaWrap.find('.comment-content-wrap'),
		comments_content_rad		 = royal_options.comments_content.radius,
		comments_content_shad_h		 = royal_options.comments_content.shad_h,
		comments_content_shad_v		 = royal_options.comments_content.shad_v,
		comments_content_shad_bl	 = royal_options.comments_content.shad_bl,
		comments_content_shad_sp	 = royal_options.comments_content.shad_sp,
		comments_content_shad_col	 = royal_options.comments_content.shad_col,
		comments_content_shad_col_tr = royal_options.comments_content.shad_col_tr,
		comments_content_shad_in	 = royal_options.comments_content.shad_in;

	// border 4x live update
	var comments_content_bd_tp = [
			royal_options.comments_content.bd_size_tp,
			royal_options.comments_content.bd_style_tp,
			royal_options.comments_content.bd_col_tp 
		],
		comments_content_bd_rt = [
			royal_options.comments_content.bd_size_rt,
			royal_options.comments_content.bd_style_rt,
			royal_options.comments_content.bd_col_rt
		],
		comments_content_bd_bt = [
			royal_options.comments_content.bd_size_bt,
			royal_options.comments_content.bd_style_bt,
			royal_options.comments_content.bd_col_bt
		],
		comments_content_bd_lt = [
			royal_options.comments_content.bd_size_lt,
			royal_options.comments_content.bd_style_lt,
			royal_options.comments_content.bd_col_lt
		];

/* ----------------- Content Spacing Options ----------------- */

	royalLivePreview( 'comments_content', 'padding_tp', function( nValue ) {
		commentsContent.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_content', 'padding_rt', function( nValue ) {
		commentsContent.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_content', 'padding_bt', function( nValue ) {
		commentsContent.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_content', 'padding_lt', function( nValue ) {
		commentsContent.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_content', 'gutter_vert', function( nValue ) {
		$('.comment, .pingback').css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Content Styling Options ----------------- */

	royalLivePreview( 'comments_content', 'bg_color', function( nValue ) {
		$('.comment .comment-content-wrap').not('.bypostauthor .comment-content-wrap').css( 'background-color', nValue );
	});

	royalLivePreview( 'comments_content', 'author_bg_color', function( nValue ) {
		$('.bypostauthor .comment-content-wrap').css( 'background-color', nValue );
	});

	royalLivePreview( 'comments_content', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( commentsContent, comments_content_bd_tp, comments_content_bd_rt, comments_content_bd_bt, comments_content_bd_lt );
		} else {
			commentsContent.css( 'border', 'none' );
		}
		
		sidebarEqual();

	});

	royalBorderLivePreview( commentsContent, 'comments_content', 'top', comments_content_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( commentsContent, 'comments_content', 'right', comments_content_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( commentsContent, 'comments_content', 'bottom', comments_content_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( commentsContent, 'comments_content', 'left', comments_content_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'comments_content', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			commentsContent.css({
				'border-radius' : comments_content_rad + 'px'
			});

		} else {

			commentsContent.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'comments_content', 'radius', function( nValue ) {
		comments_content_rad = nValue;
		commentsContent.css( 'border-radius', comments_content_rad + 'px' );
	});

	function commentsContentShadow() {
		commentsContent.css( 'box-shadow', royalShadow( [
			comments_content_shad_h,
			comments_content_shad_v,
			comments_content_shad_bl,
			comments_content_shad_sp,
			comments_content_shad_col,
			comments_content_shad_col_tr,
			comments_content_shad_in
		] ) );
	}

	royalLivePreview( 'comments_content', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			commentsContentShadow();
		} else {
			commentsContent.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'comments_content', 'shad_h', function( nValue ) {
		comments_content_shad_h = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_v', function( nValue ) {
		comments_content_shad_v = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_bl', function( nValue ) {
		comments_content_shad_bl = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_sp', function( nValue ) {
		comments_content_shad_sp = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_col', function( nValue ) {
		comments_content_shad_col = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_col_tr', function( nValue ) {
		comments_content_shad_col_tr = nValue;
		commentsContentShadow();
	});

	royalLivePreview( 'comments_content', 'shad_in', function( nValue ) {
		comments_content_shad_in = nValue;
		commentsContentShadow();
	});



// define variables
	var commentsReply 				= commentsAreaWrap.find('.comment-reply-title'),
		comments_reply_bd_size_bt 	= royal_options.comments_reply.bd_size_bt,
		comments_reply_bd_style_bt 	= royal_options.comments_reply.bd_style_bt;

/* ----------------- Reply Spacing Options ----------------- */

	royalLivePreview( 'comments_reply', 'padding_bt', function( nValue ) {
		commentsReply.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'comments_reply', 'margin_bt', function( nValue ) {
		commentsReply.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Reply Styling Options ----------------- */

	royalLivePreview( 'comments_reply', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			commentsReply.css( 'border-bottom', comments_reply_bd_size_bt +'px '+ comments_reply_bd_style_bt +' '+  inner_content_border_color );
		} else {
			commentsReply.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'comments_reply', 'bd_size_bt', function( nValue ) {
		comments_reply_bd_size_bt = nValue;
		commentsReply.css( 'border-bottom', nValue +'px '+ comments_reply_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'comments_reply', 'bd_style_bt', function( nValue ) {
		comments_reply_bd_style_bt = nValue;
		commentsReply.css( 'border-bottom', comments_reply_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});

	royalLivePreview( 'comments_reply', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			commentsReply.css( 'display', 'block' );
		} else {
			commentsReply.css( 'display', 'inline-block' );
		}
	});



/*
***************************************************************
* #Inputs
***************************************************************
*/

// define variables
	var inputs 					= $('.rf-input'),
		inputs_gen_layout 		= royal_options.inputs_general.layout,
		inputs_gen_align 		= royal_options.inputs_general.align,
		inputs_gen_padding_tp 	= royal_options.inputs_general.padding_tp,
		inputs_gen_padding_bt 	= royal_options.inputs_general.padding_bt,
		inputs_gen_gutter 		= royal_options.inputs_general.gutter,
		inputs_gen_bg_col		= royal_options.inputs_general.bg_col,
		inputs_gen_txt_col		= royal_options.inputs_general.txt_col,
		inputs_gen_bg_fcol		= royal_options.inputs_general.bg_fcol,
		inputs_gen_txt_fcol		= royal_options.inputs_general.txt_fcol,
		inputs_gen_bd_fcol		= royal_options.inputs_general.bd_fcol,
		inputs_gen_rad			= royal_options.inputs_general.radius,
		inputs_gen_shad_h		= royal_options.inputs_general.shad_h,
		inputs_gen_shad_v		= royal_options.inputs_general.shad_v,
		inputs_gen_shad_bl		= royal_options.inputs_general.shad_bl,
		inputs_gen_shad_sp		= royal_options.inputs_general.shad_sp,
		inputs_gen_shad_col		= royal_options.inputs_general.shad_col,
		inputs_gen_shad_col_tr	= royal_options.inputs_general.shad_col_tr,
		inputs_gen_shad_in		= royal_options.inputs_general.shad_in;

	// border 4x live update
	var inputs_gen_bd_tp = [
			royal_options.inputs_general.bd_size_tp,
			royal_options.inputs_general.bd_style_tp,
			royal_options.inputs_general.bd_col_tp 
		],
		inputs_gen_bd_rt = [
			royal_options.inputs_general.bd_size_rt,
			royal_options.inputs_general.bd_style_rt,
			royal_options.inputs_general.bd_col_rt
		],
		inputs_gen_bd_bt = [
			royal_options.inputs_general.bd_size_bt,
			royal_options.inputs_general.bd_style_bt,
			royal_options.inputs_general.bd_col_bt
		],
		inputs_gen_bd_lt = [
			royal_options.inputs_general.bd_size_lt,
			royal_options.inputs_general.bd_style_lt,
			royal_options.inputs_general.bd_col_lt
		];

/* ----------------- General Options ----------------- */

	royalLivePreview( 'inputs_general', 'layout', function( nValue ) {

		inputs_gen_layout = nValue;

		// reset
		$('.rf-input').css({
			'display' 		: 'inline',
			'float' 		: 'none',
			'width' 		: '100%',
			'margin-right' 	: '0'
		});

		if ( nValue === 'half' ) {

			$('.comment-reply-title, .comment-form').css({
				'display' : 'inline-block',
				'width'   : '50%'
			});

			$('.comment-respond, .rf-input').css( 'text-align', inputs_gen_align );

		} else {

			$('.comment-reply-title, .comment-form').css({
				'display' : 'block',
				'width'   : '100%'
			});

			$('.comment-respond, .rf-input').css( 'text-align', 'none' );

		}

		 if ( nValue === '3_half_1_full' ) {

			inputs.css( 'display', 'block' );
			$('.pers-name, .pers-email, .pers-email + input').css( 'width', '50%' );

		} else if ( nValue === '2_half_2_full' ) {

			$('.pers-name').css({
				'float' 		: 'left',
				'margin-right' 	: inputs_gen_gutter +'px'
			});

			$('.pers-name, .pers-email').css({
				'width' : '-webkit-calc(50% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 2 ) +'px)',
				'width' : 'calc(50% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 2 ) +'px)'
			});

		} else if ( nValue === '3_third_1_full' ) {

			$('.pers-name, .pers-email, .pers-email + input').css({
				'float' : 'left'
			});

			$('.pers-name, .pers-email, .pers-email + input').css({
				'width' : '-webkit-calc(33.3% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 3 ) +'px)',
				'width' : 'calc(33.3% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 3 ) +'px)'
			});
			$('.pers-name, .pers-email').css({
				'margin-right' : '-webkit-calc('+ inputs_gen_gutter +'px / '+ '2)',
				'margin-right' : 'calc('+ inputs_gen_gutter +'px / '+ '2)'
			});

		}

		sidebarEqual();
	});

	royalLivePreview( 'inputs_general', 'align', function( nValue ) {
		inputs_gen_align = nValue;
		$('.comment-respond, .rf-input').css( 'text-align', nValue );
	});


/* ----------------- Spacing Options ----------------- */

	// display inputs correctly in all browsers
	var typography_p_lh	= royal_options.typography_p.line_height;

	function royalInputsEuqalHeight() {
		
		var iHeight = parseInt( typography_p_lh, 10 ) + parseInt( inputs_gen_padding_tp, 10 ) + parseInt( inputs_gen_padding_bt, 10 ),
			tHeight = parseInt( typography_p_lh, 10 ) * 8 + parseInt( inputs_gen_padding_tp, 10 ) + parseInt( inputs_gen_padding_bt, 10 );

		$('.inner-content input[type="text"].rf-input').css({
			'height' : iHeight +'px'
		});

		$('.inner-content textarea.rf-input').css({
			'height' : tHeight +'px'
		});	

	}

	royalLivePreview( 'inputs_general', 'padding_tp', function( nValue ) {
		inputs_gen_padding_tp = nValue;
		inputs.css( 'padding-top', nValue +'px' );

		royalInputsEuqalHeight();
		sidebarEqual();
	});

	royalLivePreview( 'inputs_general', 'padding_rt', function( nValue ) {
		inputs.css( 'padding-right', nValue +'px' );
	});

	royalLivePreview( 'inputs_general', 'padding_bt', function( nValue ) {
		inputs_gen_padding_bt = nValue;
		inputs.css( 'padding-bottom', nValue +'px' );

		royalInputsEuqalHeight();
		sidebarEqual();
	});

	royalLivePreview( 'inputs_general', 'padding_lt', function( nValue ) {
		inputs.css( 'padding-left', nValue +'px' );
	});

	royalLivePreview( 'inputs_general', 'gutter', function( nValue ) {

		inputs_gen_gutter = nValue;

		$('.rf-input, .submit-btn').css( 'margin-bottom', nValue +'px' );

		if ( inputs_gen_layout === '2_half_2_full' ) {

			$('.pers-name').css( 'margin-right', inputs_gen_gutter +'px' );
			$('.pers-name, .pers-email').css({
				'width' : '-webkit-calc(50% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 2 ) +'px)',
				'width' : 'calc(50% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 2 ) +'px)'
			});

		} else if ( inputs_gen_layout === '3_third_1_full' ) {

			$('.pers-name, .pers-email, .pers-email + input').css({
				'width' : '-webkit-calc(33.3% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 3 ) +'px)',
				'width' : 'calc(33.3% - '+ ( parseInt( inputs_gen_gutter, 10 ) / 3 ) +'px)'
			});
			$('.pers-name, .pers-email').css({
				'margin-right' : '-webkit-calc('+ inputs_gen_gutter +'px / '+ '2)',
				'margin-right' : 'calc('+ inputs_gen_gutter +'px / '+ '2)'
			});

		}

		sidebarEqual();

	});


/* ----------------- Styling Options ----------------- */

	inputs.focus(function() {

		$(this).css( 'background-color', inputs_gen_bg_fcol );
		$(this).css( 'color', inputs_gen_txt_fcol );
		$(this).css( 'border-color', inputs_gen_bd_fcol );

	});

	inputs.blur(function() {

		inputs.css( 'background-color', inputs_gen_bg_col );
		inputs.css( 'color', inputs_gen_txt_col );

		inputs.css({
			'border-top-color' 	  : inputs_gen_bd_tp[2],
			'border-right-color'  : inputs_gen_bd_rt[2],
			'border-bottom-color' : inputs_gen_bd_bt[2],
			'border-left-color'   : inputs_gen_bd_lt[2]
		});

	});

	royalLivePreview( 'inputs_general', 'bg_col', function( nValue ) {
		inputs_gen_bg_col = nValue;
		inputs.css( 'background-color', nValue );
	});

	royalLivePreview( 'inputs_general', 'txt_col', function( nValue ) {
		inputs_gen_txt_col = nValue;
		inputs.css( 'color', nValue );
	});

	royalLivePreview( 'inputs_general', 'bg_fcol', function( nValue ) {
		inputs_gen_bg_fcol = nValue;
	});

	royalLivePreview( 'inputs_general', 'txt_fcol', function( nValue ) {
		inputs_gen_txt_fcol = nValue;
	});

	royalLivePreview( 'inputs_general', 'bd_fcol', function( nValue ) {
		inputs_gen_bd_fcol = nValue;
	});

	royalLivePreview( 'inputs_general', 'border_label', function( nValue ) {
		if ( nValue === true ) {
			royalBorder4x( inputs, inputs_gen_bd_tp, inputs_gen_bd_rt, inputs_gen_bd_bt, inputs_gen_bd_lt );
		} else {
			inputs.css( 'border', 'none' );
		}
	});

	royalBorderLivePreview( inputs, 'inputs_general', 'top', inputs_gen_bd_tp, '' );

	royalBorderLivePreview( inputs, 'inputs_general', 'right', inputs_gen_bd_rt, '' );

	royalBorderLivePreview( inputs, 'inputs_general', 'bottom', inputs_gen_bd_bt, '' );

	royalBorderLivePreview( inputs, 'inputs_general', 'left', inputs_gen_bd_lt, '' );

	royalLivePreview( 'inputs_general', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			inputs.css({
				'border-radius' : inputs_gen_rad + 'px'
			});

		} else {

			inputs.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'inputs_general', 'radius', function( nValue ) {
		inputs_gen_rad = nValue;
		inputs.css( 'border-radius', inputs_gen_rad + 'px' );
	});

	function inputsShadow() {
		inputs.css( 'box-shadow', royalShadow( [
			inputs_gen_shad_h,
			inputs_gen_shad_v,
			inputs_gen_shad_bl,
			inputs_gen_shad_sp,
			inputs_gen_shad_col,
			inputs_gen_shad_col_tr,
			inputs_gen_shad_in
		] ) );
	}

	royalLivePreview( 'inputs_general', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			inputsShadow();
		} else {
			inputs.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'inputs_general', 'shad_h', function( nValue ) {
		inputs_gen_shad_h = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_v', function( nValue ) {
		inputs_gen_shad_v = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_bl', function( nValue ) {
		inputs_gen_shad_bl = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_sp', function( nValue ) {
		inputs_gen_shad_sp = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_col', function( nValue ) {
		inputs_gen_shad_col = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_col_tr', function( nValue ) {
		inputs_gen_shad_col_tr = nValue;
		inputsShadow();
	});

	royalLivePreview( 'inputs_general', 'shad_in', function( nValue ) {
		inputs_gen_shad_in = nValue;
		inputsShadow();
	});



// define variables
	var submitButton 			  = $('.form-submit #submit, .submit-btn'),
		inputs_submit_bg_col	  = royal_options.inputs_submit.bg_col,
		inputs_submit_bg_col_tr	  = royal_options.inputs_submit.bg_col_tr,
		inputs_submit_txt_col	  = royal_options.inputs_submit.txt_col,
		inputs_submit_bg_hcol	  = royal_options.inputs_submit.bg_hcol,
		inputs_submit_bg_hcol_tr  = royal_options.inputs_submit.bg_hcol_tr,
		inputs_submit_txt_hcol	  = royal_options.inputs_submit.txt_hcol,
		inputs_submit_bd_hcol	  = royal_options.inputs_submit.bd_hcol,
		inputs_submit_rad		  = royal_options.inputs_submit.radius,
		inputs_submit_shad_h	  = royal_options.inputs_submit.shad_h,
		inputs_submit_shad_v	  = royal_options.inputs_submit.shad_v,
		inputs_submit_shad_bl	  = royal_options.inputs_submit.shad_bl,
		inputs_submit_shad_sp	  = royal_options.inputs_submit.shad_sp,
		inputs_submit_shad_col	  = royal_options.inputs_submit.shad_col,
		inputs_submit_shad_col_tr = royal_options.inputs_submit.shad_col_tr,
		inputs_submit_shad_in	  = royal_options.inputs_submit.shad_in;

	// border 4x live update
	var inputs_submit_bd_tp = [
			royal_options.inputs_submit.bd_size_tp,
			royal_options.inputs_submit.bd_style_tp,
			royal_options.inputs_submit.bd_col_tp 
		],
		inputs_submit_bd_rt = [
			royal_options.inputs_submit.bd_size_rt,
			royal_options.inputs_submit.bd_style_rt,
			royal_options.inputs_submit.bd_col_rt
		],
		inputs_submit_bd_bt = [
			royal_options.inputs_submit.bd_size_bt,
			royal_options.inputs_submit.bd_style_bt,
			royal_options.inputs_submit.bd_col_bt
		],
		inputs_submit_bd_lt = [
			royal_options.inputs_submit.bd_size_lt,
			royal_options.inputs_submit.bd_style_lt,
			royal_options.inputs_submit.bd_col_lt
		];

/* ----------------- Submit Button General Options ----------------- */

	royalLivePreview( 'inputs_submit', 'style', function( nValue ) {
		submitButton.css( 'width', nValue );
	});

	royalLivePreview( 'inputs_submit', 'align', function( nValue ) {
		$('.form-submit').css( 'text-align', nValue );
	});


/* ----------------- Submit Button Spacing Options ----------------- */

	royalLivePreview( 'inputs_submit', 'padding_tp', function( nValue ) {
		submitButton.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'inputs_submit', 'padding_rt', function( nValue ) {
		submitButton.css( 'padding-right', nValue +'px' );
	});

	royalLivePreview( 'inputs_submit', 'padding_bt', function( nValue ) {
		submitButton.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'inputs_submit', 'padding_lt', function( nValue ) {
		submitButton.css( 'padding-left', nValue +'px' );
	});


/* ----------------- Submit Button Styling Options ----------------- */

	function submitButtonHover() {

		submitButton.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( inputs_submit_bg_hcol, inputs_submit_bg_hcol_tr ),
				'color' 			: inputs_submit_txt_hcol,
				'border-color' 		: inputs_submit_bd_hcol
			});

		}, function() {

			submitButton.css({
				'background-color' 	  : royalHex2Rgba( inputs_submit_bg_col, inputs_submit_bg_col_tr ),
				'color' 			  : inputs_submit_txt_col,
				'border-top-color' 	  : inputs_submit_bd_tp[2],
				'border-right-color'  : inputs_submit_bd_rt[2],
				'border-bottom-color' : inputs_submit_bd_bt[2],
				'border-left-color'   : inputs_submit_bd_lt[2]
			});

		});

	}

	submitButtonHover();

	royalLivePreview( 'inputs_submit', 'bg_col', function( nValue ) {
		inputs_submit_bg_col = nValue;
		submitButton.css( 'background-color', royalHex2Rgba( inputs_submit_bg_col, inputs_submit_bg_col_tr ) );
	});

	royalLivePreview( 'inputs_submit', 'bg_col_tr', function( nValue ) {
		inputs_submit_bg_col_tr = nValue;
		submitButton.css( 'background-color', royalHex2Rgba( inputs_submit_bg_col, inputs_submit_bg_col_tr ) );
	});

	royalLivePreview( 'inputs_submit', 'txt_col', function( nValue ) {
		inputs_submit_txt_col = nValue;
		submitButton.css( 'color', inputs_submit_txt_col );
	});

	royalLivePreview( 'inputs_submit', 'bg_hcol', function( nValue ) {
		inputs_submit_bg_hcol = nValue;
	});

	royalLivePreview( 'inputs_submit', 'bg_hcol_tr', function( nValue ) {
		inputs_submit_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'inputs_submit', 'txt_hcol', function( nValue ) {
		inputs_submit_txt_hcol = nValue;
	});

	royalLivePreview( 'inputs_submit', 'bd_hcol', function( nValue ) {
		inputs_submit_bd_hcol = nValue;
	});

	royalLivePreview( 'inputs_submit', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( submitButton, inputs_submit_bd_tp, inputs_submit_bd_rt, inputs_submit_bd_bt, inputs_submit_bd_lt );
		} else {
			submitButton.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( submitButton, 'inputs_submit', 'top', inputs_submit_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( submitButton, 'inputs_submit', 'right', inputs_submit_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( submitButton, 'inputs_submit', 'bottom', inputs_submit_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( submitButton, 'inputs_submit', 'left', inputs_submit_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'inputs_submit', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			submitButton.css({
				'border-radius' : inputs_submit_rad + 'px'
			});

		} else {

			submitButton.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'inputs_submit', 'radius', function( nValue ) {
		inputs_submit_rad = nValue;
		submitButton.css( 'border-radius', inputs_submit_rad + 'px' );
	});

	function submitButtonShadow() {
		submitButton.css( 'box-shadow', royalShadow( [
			inputs_submit_shad_h,
			inputs_submit_shad_v,
			inputs_submit_shad_bl,
			inputs_submit_shad_sp,
			inputs_submit_shad_col,
			inputs_submit_shad_col_tr,
			inputs_submit_shad_in
		] ) );
	}

	royalLivePreview( 'inputs_submit', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			submitButtonShadow();
		} else {
			submitButton.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'inputs_submit', 'shad_h', function( nValue ) {
		inputs_submit_shad_h = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_v', function( nValue ) {
		inputs_submit_shad_v = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_bl', function( nValue ) {
		inputs_submit_shad_bl = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_sp', function( nValue ) {
		inputs_submit_shad_sp = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_col', function( nValue ) {
		inputs_submit_shad_col = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_col_tr', function( nValue ) {
		inputs_submit_shad_col_tr = nValue;
		submitButtonShadow();
	});

	royalLivePreview( 'inputs_submit', 'shad_in', function( nValue ) {
		inputs_submit_shad_in = nValue;
		submitButtonShadow();
	});



// define variables
	var inputsSearchWrap		= $('.search-wrap'),
		inputsSearch			= inputsSearchWrap.find('#s'),
		inputsSearchIcon		= inputsSearchWrap.find('i'),
		inputs_srch_mar_tp		= royal_options.inputs_search.margin_tp,
		inputs_srch_mar_rt		= royal_options.inputs_search.margin_rt,
		inputs_srch_pad_tp		= royal_options.inputs_search.padding_tp,
		inputs_srch_pad_rt		= royal_options.inputs_search.padding_rt,
		inputs_srch_bg_col		= royal_options.inputs_search.bg_col,
		inputs_srch_txt_col		= royal_options.inputs_search.txt_col,
		inputs_srch_bg_fcol		= royal_options.inputs_search.bg_fcol,
		inputs_srch_txt_fcol	= royal_options.inputs_search.txt_fcol,
		inputs_srch_bd_fcol		= royal_options.inputs_search.bd_fcol,
		inputs_srch_rad			= royal_options.inputs_search.radius,
		inputs_srch_shad_h		= royal_options.inputs_search.shad_h,
		inputs_srch_shad_v		= royal_options.inputs_search.shad_v,
		inputs_srch_shad_bl		= royal_options.inputs_search.shad_bl,
		inputs_srch_shad_sp		= royal_options.inputs_search.shad_sp,
		inputs_srch_shad_col	= royal_options.inputs_search.shad_col,
		inputs_srch_shad_col_tr	= royal_options.inputs_search.shad_col_tr,
		inputs_srch_shad_in		= royal_options.inputs_search.shad_in;

	// border 4x live update
	var inputs_srch_bd_tp = [
			royal_options.inputs_search.bd_size_tp,
			royal_options.inputs_search.bd_style_tp,
			royal_options.inputs_search.bd_col_tp 
		],
		inputs_srch_bd_rt = [
			royal_options.inputs_search.bd_size_rt,
			royal_options.inputs_search.bd_style_rt,
			royal_options.inputs_search.bd_col_rt
		],
		inputs_srch_bd_bt = [
			royal_options.inputs_search.bd_size_bt,
			royal_options.inputs_search.bd_style_bt,
			royal_options.inputs_search.bd_col_bt
		],
		inputs_srch_bd_lt = [
			royal_options.inputs_search.bd_size_lt,
			royal_options.inputs_search.bd_style_lt,
			royal_options.inputs_search.bd_col_lt
		];

/* ----------------- Search General Options ----------------- */

	royalLivePreview( 'inputs_search', 'icon', function( nValue ) {
		inputsSearchIcon.removeAttr('class');
		inputsSearchIcon.addClass( 'search-icon fa fa-'+ nValue );
	});


/* ----------------- Search Spacing Options ----------------- */

	function adjustSidebarSearchIcon() {

		var top   = parseInt( inputs_srch_mar_tp, 10 ) + parseInt( inputs_srch_pad_tp, 10 ) + parseInt( inputs_srch_bd_tp[0], 10 ),
			right = parseInt( inputs_srch_pad_rt, 10 ) + parseInt( inputs_srch_bd_rt[0], 10 ) + parseInt( inputs_srch_mar_rt, 10 );

		inputsSearchIcon.css({
			'top' 	: top +'px',
			'right' : right +'px',
		});

	}

	royalLivePreview( 'inputs_search', 'padding_tp', function( nValue ) {
		inputs_srch_pad_tp = nValue;
		inputsSearch.css( 'padding-top', nValue +'px' );

		adjustSidebarSearchIcon();
		sidebarEqual();
	});

	royalLivePreview( 'inputs_search', 'padding_rt', function( nValue ) {
		inputs_srch_pad_rt = nValue;
		inputsSearch.css( 'padding-right', nValue +'px' );
		
		adjustSidebarSearchIcon();
	});

	royalLivePreview( 'inputs_search', 'padding_bt', function( nValue ) {
		inputsSearch.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'inputs_search', 'padding_lt', function( nValue ) {
		inputsSearch.css( 'padding-left', nValue +'px' );
	});

	royalLivePreview( 'inputs_search', 'margin_tp', function( nValue ) {
		inputs_srch_mar_tp = nValue;
		inputsSearchWrap.css( 'padding-top', nValue +'px' );
		$('.widget_flickr > div').css( 'margin-top', nValue +'px' );

		adjustSidebarSearchIcon();
	});

	royalLivePreview( 'inputs_search', 'margin_rt', function( nValue ) {
		inputs_srch_mar_rt = nValue;
		inputsSearchWrap.css( 'padding-right', nValue +'px' );

		adjustSidebarSearchIcon();
	});

	royalLivePreview( 'inputs_search', 'margin_bt', function( nValue ) {
		inputsSearchWrap.css( 'padding-bottom', nValue +'px' );
	});

	royalLivePreview( 'inputs_search', 'margin_lt', function( nValue ) {
		inputsSearchWrap.css( 'padding-left', nValue +'px' );
	});


/* ----------------- Search Styling Options ----------------- */


	inputsSearch.focus(function() {

		inputsSearch.css( 'background-color', inputs_srch_bg_fcol );
		inputsSearch.css( 'color', inputs_srch_txt_fcol );
		inputsSearchIcon.css( 'color', inputs_srch_txt_fcol );
		inputsSearch.css( 'border-color', inputs_srch_bd_fcol );

	});

	inputsSearch.blur(function() {

		inputsSearch.css( 'background-color', inputs_srch_bg_col );
		inputsSearch.css( 'color', inputs_srch_txt_col );
		inputsSearchIcon.css( 'color', inputs_srch_txt_col );

		inputsSearch.css({
			'border-top-color' 	  : inputs_srch_bd_tp[2],
			'border-right-color'  : inputs_srch_bd_rt[2],
			'border-bottom-color' : inputs_srch_bd_bt[2],
			'border-left-color'   : inputs_srch_bd_lt[2]
		});

	});

	royalLivePreview( 'inputs_search', 'bg_col', function( nValue ) {
		inputs_srch_bg_col = nValue;
		inputsSearch.css( 'background-color', nValue );
	});

	royalLivePreview( 'inputs_search', 'txt_col', function( nValue ) {
		inputs_srch_txt_col = nValue;
		inputsSearch.css( 'color', nValue );
		inputsSearchIcon.css( 'color', nValue );
	});

	royalLivePreview( 'inputs_search', 'bg_fcol', function( nValue ) {
		inputs_srch_bg_fcol = nValue;
	});

	royalLivePreview( 'inputs_search', 'txt_fcol', function( nValue ) {
		inputs_srch_txt_fcol = nValue;
	});

	royalLivePreview( 'inputs_search', 'bd_fcol', function( nValue ) {
		inputs_srch_bd_fcol = nValue;
	});

	royalLivePreview( 'inputs_search', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( inputsSearch, inputs_srch_bd_tp, inputs_srch_bd_rt, inputs_srch_bd_bt, inputs_srch_bd_lt );
		} else {
			inputsSearch.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( inputsSearch, 'inputs_search', 'top', inputs_srch_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( inputsSearch, 'inputs_search', 'right', inputs_srch_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( inputsSearch, 'inputs_search', 'bottom', inputs_srch_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( inputsSearch, 'inputs_search', 'left', inputs_srch_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'inputs_search', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			inputsSearch.css({
				'border-radius' : inputs_srch_rad + 'px'
			});

		} else {

			inputsSearch.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'inputs_search', 'radius', function( nValue ) {
		inputs_srch_rad = nValue;
		inputsSearch.css( 'border-radius', inputs_srch_rad + 'px' );
	});

	function inputsSearchShadow() {
		inputsSearch.css( 'box-shadow', royalShadow( [
			inputs_srch_shad_h,
			inputs_srch_shad_v,
			inputs_srch_shad_bl,
			inputs_srch_shad_sp,
			inputs_srch_shad_col,
			inputs_srch_shad_col_tr,
			inputs_srch_shad_in
		] ) );
	}

	royalLivePreview( 'inputs_search', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			inputsSearchShadow();
		} else {
			inputsSearch.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'inputs_search', 'shad_h', function( nValue ) {
		inputs_srch_shad_h = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_v', function( nValue ) {
		inputs_srch_shad_v = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_bl', function( nValue ) {
		inputs_srch_shad_bl = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_sp', function( nValue ) {
		inputs_srch_shad_sp = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_col', function( nValue ) {
		inputs_srch_shad_col = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_col_tr', function( nValue ) {
		inputs_srch_shad_col_tr = nValue;
		inputsSearchShadow();
	});

	royalLivePreview( 'inputs_search', 'shad_in', function( nValue ) {
		inputs_srch_shad_in = nValue;
		inputsSearchShadow();
	});





/*
***************************************************************
* #Pagination
***************************************************************
*/

// define variables
	var pagination 	 			= $('.pagination-wrap'),
		pagination_bg_color		= royal_options.pagination.bg_color,
		pagination_bg_color_tr	= royal_options.pagination.bg_color_tr,
		pagination_rad			= royal_options.pagination.radius,
		pagination_shad_h		= royal_options.pagination.shad_h,
		pagination_shad_v		= royal_options.pagination.shad_v,
		pagination_shad_bl		= royal_options.pagination.shad_bl,
		pagination_shad_sp		= royal_options.pagination.shad_sp,
		pagination_shad_col		= royal_options.pagination.shad_col,
		pagination_shad_col_tr	= royal_options.pagination.shad_col_tr,
		pagination_shad_in		= royal_options.pagination.shad_in;

	// border 4x live update
	var pagination_bd_tp = [
			royal_options.pagination.bd_size_tp,
			royal_options.pagination.bd_style_tp,
			royal_options.pagination.bd_col_tp 
		],
		pagination_bd_rt = [
			royal_options.pagination.bd_size_rt,
			royal_options.pagination.bd_style_rt,
			royal_options.pagination.bd_col_rt
		],
		pagination_bd_bt = [
			royal_options.pagination.bd_size_bt,
			royal_options.pagination.bd_style_bt,
			royal_options.pagination.bd_col_bt
		],
		pagination_bd_lt = [
			royal_options.pagination.bd_size_lt,
			royal_options.pagination.bd_style_lt,
			royal_options.pagination.bd_col_lt
		];

/* ----------------- Wrapper Spacing Options ----------------- */

	royalLivePreview( 'pagination', 'padding_tp', function( nValue ) {
		pagination.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination', 'padding_rt', function( nValue ) {
		pagination.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination', 'padding_bt', function( nValue ) {
		pagination.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination', 'padding_lt', function( nValue ) {
		pagination.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Wrapper Styling Options ----------------- */

	royalLivePreview( 'pagination', 'bg_color', function( nValue ) {
		pagination_bg_color = nValue;
		pagination.css( 'background-color', royalHex2Rgba( pagination_bg_color, pagination_bg_color_tr ) );
	});

	royalLivePreview( 'pagination', 'bg_color_tr', function( nValue ) {
		pagination_bg_color_tr = nValue;
		pagination.css( 'background-color', royalHex2Rgba( pagination_bg_color, pagination_bg_color_tr ) );
	});

	royalLivePreview( 'pagination', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( pagination, pagination_bd_tp, pagination_bd_rt, pagination_bd_bt, pagination_bd_lt );
		} else {
			pagination.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( pagination, 'pagination', 'top', pagination_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( pagination, 'pagination', 'right', pagination_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( pagination, 'pagination', 'bottom', pagination_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( pagination, 'pagination', 'left', pagination_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'pagination', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			pagination.css({
				'border-radius' : pagination_rad + 'px'
			});

		} else {

			pagination.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'pagination', 'radius', function( nValue ) {
		pagination_rad = nValue;
		pagination.css( 'border-radius', pagination_rad + 'px' );
	});

	function paginationShadow() {
		pagination.css( 'box-shadow', royalShadow( [
			pagination_shad_h,
			pagination_shad_v,
			pagination_shad_bl,
			pagination_shad_sp,
			pagination_shad_col,
			pagination_shad_col_tr,
			pagination_shad_in
		] ) );
	}

	royalLivePreview( 'pagination', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			paginationShadow();
		} else {
			pagination.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pagination', 'shad_h', function( nValue ) {
		pagination_shad_h = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_v', function( nValue ) {
		pagination_shad_v = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_bl', function( nValue ) {
		pagination_shad_bl = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_sp', function( nValue ) {
		pagination_shad_sp = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_col', function( nValue ) {
		pagination_shad_col = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_col_tr', function( nValue ) {
		pagination_shad_col_tr = nValue;
		paginationShadow();
	});

	royalLivePreview( 'pagination', 'shad_in', function( nValue ) {
		pagination_shad_in = nValue;
		paginationShadow();
	});



// define variables
	var paginationNavAll 			= pagination.find('a, span'),
		paginationNav 				= pagination.find('a, span').not('.current'),
		paginationNavCurrent 		= pagination.find('.current'),
		pagination_nav_bg_col		= royal_options.pagination_nav.bg_col,
		pagination_nav_bg_col_tr	= royal_options.pagination_nav.bg_col_tr,
		pagination_nav_txt_col		= royal_options.pagination_nav.txt_col,
		pagination_nav_bg_hcol		= royal_options.pagination_nav.bg_hcol,
		pagination_nav_bg_hcol_tr	= royal_options.pagination_nav.bg_hcol_tr,
		pagination_nav_txt_hcol		= royal_options.pagination_nav.txt_hcol,
		pagination_nav_bd_hcol		= royal_options.pagination_nav.bd_hcol,
		pagination_nav_border_size	= royal_options.pagination_nav.border_size,
		pagination_nav_border_style	= royal_options.pagination_nav.border_style,
		pagination_nav_border_color	= royal_options.pagination_nav.border_color,
		pagination_nav_rad			= royal_options.pagination_nav.radius,
		pagination_nav_shad_h		= royal_options.pagination_nav.shad_h,
		pagination_nav_shad_v		= royal_options.pagination_nav.shad_v,
		pagination_nav_shad_bl		= royal_options.pagination_nav.shad_bl,
		pagination_nav_shad_sp		= royal_options.pagination_nav.shad_sp,
		pagination_nav_shad_col		= royal_options.pagination_nav.shad_col,
		pagination_nav_shad_col_tr	= royal_options.pagination_nav.shad_col_tr,
		pagination_nav_shad_in		= royal_options.pagination_nav.shad_in;

/* ----------------- Navigation General Options ----------------- */

	royalLivePreview( 'pagination_nav', 'prev_nxt_label', function() {
		royalLoading();
	});

	royalLivePreview( 'pagination_nav', 'first_last_label', function() {
		royalLoading();
	});

	royalLivePreview( 'pagination_nav', 'type', function() {
		royalLoading();
	});

	royalLivePreview( 'pagination_nav', 'load_posts', function() {
		royalLoading();
	});

	royalLivePreview( 'pagination_nav', 'align', function( nValue ) {
		pagination.css( 'text-align', nValue );
	});

	royalLivePreview( 'pagination_nav', 'prev_text', function( nValue ) {
		pagination.find('.rf-prev-page').text( nValue );
	});

	royalLivePreview( 'pagination_nav', 'nxt_text', function( nValue ) {
		pagination.find('.rf-next-page').text( nValue );
	});

	royalLivePreview( 'pagination_nav', 'prev_nxt_icon', function( nValue ) {

		pagination.find('.rf-prev-page').prev().removeAttr('class');
		pagination.find('.rf-prev-page').prev().addClass( 'fa fa-'+ nValue +'-left' );
		pagination.find('.rf-next-page').next().removeAttr('class');
		pagination.find('.rf-next-page').next().addClass( 'fa fa-'+ nValue +'-right' );

	});

	royalLivePreview( 'pagination_nav', 'first_text', function( nValue ) {
		pagination.find('.rf-first-page').text( nValue );
	});

	royalLivePreview( 'pagination_nav', 'last_text', function( nValue ) {
		pagination.find('.rf-last-page').text( nValue );
	});

	royalLivePreview( 'pagination_nav', 'first_last_icon', function( nValue ) {

		pagination.find('.rf-first-page').prev().removeAttr('class');
		pagination.find('.rf-first-page').prev().addClass( 'fa fa-'+ nValue +'-left' );
		pagination.find('.rf-last-page').next().removeAttr('class');
		pagination.find('.rf-last-page').next().addClass( 'fa fa-'+ nValue +'-right' );

	});

	royalLivePreview( 'pagination_nav', 'more_text', function( nValue ) {
		pagination.find('a').text( nValue );
	});

	royalLivePreview( 'pagination_nav', 'loading_icon', function( nValue ) {
		pagination.find('div').attr( 'data-load-icon', nValue );
	});

	royalLivePreview( 'pagination_nav', 'prev_page_text', function( nValue ) {

		// get icon
		var paginationLink 	   = pagination.find('.default-prev-link').children(),
			paginationLinkIcon = paginationLink.find('i').remove();

		paginationLink.text( nValue );
		paginationLink.prepend( paginationLinkIcon );

	});

	royalLivePreview( 'pagination_nav', 'next_page_text', function( nValue ) {

		// get icon
		var paginationLink 	   = pagination.find('.default-next-link').children(),
			paginationLinkIcon = paginationLink.find('i').remove();

		paginationLink.text( nValue );
		paginationLink.append( paginationLinkIcon );

	});

	royalLivePreview( 'pagination_nav', 'prev_next_page_icon', function( nValue ) {

		pagination.find('.default-prev-link').find('i').removeAttr('class');
		pagination.find('.default-prev-link').find('i').addClass( 'fa fa-'+ nValue +'-left' );
		pagination.find('.default-next-link').find('i').removeAttr('class');
		pagination.find('.default-next-link').find('i').addClass( 'fa fa-'+ nValue +'-right' );

	});


/* ----------------- Navigation Spacing Options ----------------- */

	royalLivePreview( 'pagination_nav', 'padding_all', function( nValue ) {
		paginationNavAll.css( 'padding', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'horz_gutter', function( nValue ) {
		paginationNavAll.css( 'margin-right', nValue +'px' );
	});


/* ----------------- Navigation Styling Options ----------------- */

	function paginationNavHover() {

		paginationNav.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( pagination_nav_bg_hcol, pagination_nav_bg_hcol_tr ),
				'color' 			: pagination_nav_txt_hcol,
				'border-color' 		: pagination_nav_bd_hcol
			});

		}, function() {

			paginationNav.css({
				'background-color' 	: royalHex2Rgba( pagination_nav_bg_col, pagination_nav_bg_col_tr ),
				'color' 			: pagination_nav_txt_col,
				'border-color' 		: pagination_nav_border_color
			});

		});

	}

	paginationNavHover();

	royalLivePreview( 'pagination_nav', 'bg_col', function( nValue ) {
		pagination_nav_bg_col = nValue;
		paginationNav.css( 'background-color', royalHex2Rgba( pagination_nav_bg_col, pagination_nav_bg_col_tr ) );
	});

	royalLivePreview( 'pagination_nav', 'bg_col_tr', function( nValue ) {
		pagination_nav_bg_col_tr = nValue;
		paginationNav.css( 'background-color', royalHex2Rgba( pagination_nav_bg_col, pagination_nav_bg_col_tr ) );
	});

	royalLivePreview( 'pagination_nav', 'txt_col', function( nValue ) {
		pagination_nav_txt_col = nValue;
		paginationNav.css( 'color', pagination_nav_txt_col );
	});

	royalLivePreview( 'pagination_nav', 'bg_hcol', function( nValue ) {
		pagination_nav_bg_hcol = nValue;
		paginationNavCurrent.css( 'background-color', royalHex2Rgba( pagination_nav_bg_hcol, pagination_nav_bg_hcol_tr ) );
	});

	royalLivePreview( 'pagination_nav', 'bg_hcol_tr', function( nValue ) {
		pagination_nav_bg_hcol_tr = nValue;
		paginationNavCurrent.css( 'background-color', royalHex2Rgba( pagination_nav_bg_hcol, pagination_nav_bg_hcol_tr ) );
	});

	royalLivePreview( 'pagination_nav', 'txt_hcol', function( nValue ) {
		pagination_nav_txt_hcol = nValue;
		paginationNavCurrent.css( 'color', pagination_nav_txt_hcol );
	});

	royalLivePreview( 'pagination_nav', 'bd_hcol', function( nValue ) {
		pagination_nav_bd_hcol = nValue;
		paginationNavCurrent.css( 'border-color', pagination_nav_bd_hcol );
	});

	royalLivePreview( 'pagination_nav', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			paginationNavAll.css( 'border-width', pagination_nav_border_size +'px' );
			paginationNavAll.css( 'border-style', pagination_nav_border_style );
			paginationNav.css( 'border-color', pagination_nav_border_color );
		} else {
			paginationNavAll.css( 'border', 'none' );
		}
		
		sidebarEqual();

	});

	royalLivePreview( 'pagination_nav', 'border_size', function( nValue ) {
		pagination_nav_border_size = nValue;
		paginationNavAll.css( 'border-width', pagination_nav_border_size +'px' );

		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'border_style', function( nValue ) {
		pagination_nav_border_style = nValue;
		paginationNavAll.css( 'border-style', pagination_nav_border_style );
	});

	royalLivePreview( 'pagination_nav', 'border_color', function( nValue ) {
		pagination_nav_border_color = nValue;
		paginationNav.css( 'border-color', pagination_nav_border_color );
	});

	royalLivePreview( 'pagination_nav', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			paginationNavAll.css({
				'border-radius' : pagination_nav_rad + 'px'
			});

		} else {

			paginationNavAll.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'pagination_nav', 'radius', function( nValue ) {
		pagination_nav_rad = nValue;
		paginationNavAll.css( 'border-radius', pagination_nav_rad + 'px' );
	});

	function paginationNavAllShadow() {
		paginationNavAll.css( 'box-shadow', royalShadow( [
			pagination_nav_shad_h,
			pagination_nav_shad_v,
			pagination_nav_shad_bl,
			pagination_nav_shad_sp,
			pagination_nav_shad_col,
			pagination_nav_shad_col_tr,
			pagination_nav_shad_in
		] ) );
	}

	royalLivePreview( 'pagination_nav', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			paginationNavAllShadow();
		} else {
			paginationNavAll.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'pagination_nav', 'shad_h', function( nValue ) {
		pagination_nav_shad_h = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_v', function( nValue ) {
		pagination_nav_shad_v = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_bl', function( nValue ) {
		pagination_nav_shad_bl = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_sp', function( nValue ) {
		pagination_nav_shad_sp = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_col', function( nValue ) {
		pagination_nav_shad_col = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_col_tr', function( nValue ) {
		pagination_nav_shad_col_tr = nValue;
		paginationNavAllShadow();
	});

	royalLivePreview( 'pagination_nav', 'shad_in', function( nValue ) {
		pagination_nav_shad_in = nValue;
		paginationNavAllShadow();
	});


/* ----------------- Navigation Font Options ----------------- */

	royalGoogleFontsPreview( 'pagination_nav', 'font_family', paginationNavAll );

	royalLivePreview( 'pagination_nav', 'font_size', function( nValue ) {
		paginationNavAll.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'line_height', function( nValue ) {
		paginationNavAll.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'letter_space', function( nValue ) {
		paginationNavAll.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'font_weight', function( nValue ) {
		paginationNavAll.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'pagination_nav', 'italic', function( nValue ) {
		if ( nValue === true ) {
			paginationNavAll.css( 'font-style', 'italic' );
		} else {
			paginationNavAll.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'pagination_nav', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			paginationNavAll.css( 'text-transform', 'uppercase' );
		} else {
			paginationNavAll.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'pagination_nav', 'underline', function( nValue ) {
		if ( nValue === true ) {
			paginationNavAll.css( 'text-decoration', 'underline' );
		} else {
			paginationNavAll.css( 'text-decoration', 'none' );
		}
	});



/*
***************************************************************
* #Contact Page
***************************************************************
*/

// define variables
	var contactWrap 			= $('.contact-form-wrap'),
		contactIn 				= contactWrap.find('.contact-form, .contact-info'),
		contactInfoList 		= $('.contact-info ul li span'),
		cPage_gen_layout 		= royal_options.cPage_general.layout,
		cPage_gen_gutter 		= royal_options.cPage_general.gutter,
		cPage_gen_bd_size_bt 	= royal_options.cPage_general.bd_size_bt,
		cPage_gen_bd_style_bt 	= royal_options.cPage_general.bd_style_bt;

/* ----------------- General Options ----------------- */

	function contactPageLayout() {

		contactIn.css({
			'float'  : 'none',
			'margin' : '0'
		});

		if ( cPage_gen_layout === 'form_info' ) {
			contactIn.css( 'float', 'left' );
			contactIn.css({
				'width' : '-webkit-calc(50% - '+ ( parseInt( cPage_gen_gutter, 10 ) / 2 ) +'px)',
				'width' : 'calc(50% - '+ ( parseInt( cPage_gen_gutter, 10 ) / 2 ) +'px)'
			});

			$('.contact-form').css( 'margin-right', cPage_gen_gutter +'px' );
		} else {
			contactIn.css( 'width', '100%' );
			$('.contact-form').css( 'margin-top', cPage_gen_gutter +'px' );
		}

	}

	royalLivePreview( 'cPage_general', 'layout', function( nValue ) {

		cPage_gen_layout = nValue;

		var tmpInfo = $('.contact-info').remove();

		if ( nValue === 'form_info' ) {
			contactWrap.append( tmpInfo );
		} else {
			contactWrap.prepend( tmpInfo );
		}

		contactPageLayout();
		sidebarEqual();

	});

	royalLivePreview( 'cPage_general', 'list_align', function( nValue ) {
		$('.contact-info ul li').css( 'text-align', nValue );
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'cPage_general', 'gutter', function( nValue ) {
		cPage_gen_gutter = nValue;

		contactPageLayout();
		sidebarEqual();
	});

	royalLivePreview( 'cPage_general', 'list_gutter', function( nValue ) {
		contactInfoList.css( 'padding', nValue +'px 0' );
		sidebarEqual();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'cPage_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			contactInfoList.css( 'border-bottom', cPage_gen_bd_size_bt +'px '+ cPage_gen_bd_style_bt +' '+  inner_content_border_color );
		} else {
			contactInfoList.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'cPage_general', 'bd_size_bt', function( nValue ) {
		cPage_gen_bd_size_bt = nValue;
		contactInfoList.css( 'border-bottom', nValue +'px '+ cPage_gen_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'cPage_general', 'bd_style_bt', function( nValue ) {
		cPage_gen_bd_style_bt = nValue;
		contactInfoList.css( 'border-bottom', cPage_gen_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});

	royalLivePreview( 'cPage_general', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			contactInfoList.css( 'display', 'block' );
		} else {
			contactInfoList.css( 'display', 'inline-block' );
		}
	});



// define variables
	var contactTitle 			= $('.contact-title span'),
		cPage_title_bd_size_bt 	= royal_options.cPage_title.bd_size_bt,
		cPage_title_bd_style_bt = royal_options.cPage_title.bd_style_bt;

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'cPage_title', 'align', function( nValue ) {
		$('.contact-title').css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'cPage_title', 'padding_bt', function( nValue ) {
		contactTitle.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'cPage_title', 'margin_bt', function( nValue ) {
		contactTitle.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'cPage_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			contactTitle.css( 'border-bottom', cPage_title_bd_size_bt +'px '+ cPage_title_bd_style_bt +' '+  inner_content_border_color );
		} else {
			contactTitle.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'cPage_title', 'bd_size_bt', function( nValue ) {
		cPage_title_bd_size_bt = nValue;
		contactTitle.css( 'border-bottom', nValue +'px '+ cPage_title_bd_style_bt +' '+  inner_content_border_color );
	
		sidebarEqual();
	});

	royalLivePreview( 'cPage_title', 'bd_style_bt', function( nValue ) {
		cPage_title_bd_style_bt = nValue;
		contactTitle.css( 'border-bottom', cPage_title_bd_size_bt +'px '+ nValue +' '+  inner_content_border_color );
	});

	royalLivePreview( 'cPage_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			contactTitle.css( 'display', 'block' );
		} else {
			contactTitle.css( 'display', 'inline-block' );
		}
	});


// define variables
	var googleMapWrap = $('.google-map-wrap'),
		googleMap = googleMapWrap.find('.google-map');

/* ----------------- Google Map General Options ----------------- */

	royalLivePreview( 'cPage_map', 'location', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'cPage_map', 'tooltip_label', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'cPage_map', 'mousewheel', function() {
		royalLoading();
	});

	royalLivePreview( 'cPage_map', 'label', function( nValue ) {

		if ( nValue === true ) {
			googleMapWrap.show();
		} else {
			googleMapWrap.hide();
		}

		sidebarEqual();

	});

	royalLivePreview( 'cPage_map', 'position', function( nValue ) {

		var tmpMap = $('.google-map-wrap').remove();

		if ( nValue === 'top' ) {
			contactWrap.parent().before( tmpMap );
		} else {
			contactWrap.parent().after( tmpMap );
		}

		sidebarEqual();

	});

	royalLivePreview( 'cPage_map', 'type', function( nValue ) {
		googleMapWrap.attr( 'data-map-type', nValue );
		royalGoogleMaps();
	});

	royalLivePreview( 'cPage_map', 'zoom', function( nValue ) {
		googleMapWrap.attr( 'data-zoom', nValue );
		royalGoogleMaps();
	});

	royalLivePreview( 'cPage_map', 'nav', function( nValue ) {

		if ( nValue === true ) {
			nValue = 1;
		} else {
			nValue = 0;
		}

		googleMapWrap.attr( 'data-nav', nValue );
		royalGoogleMaps();

	});

	royalLivePreview( 'cPage_map', 'type_control', function( nValue ) {

		if ( nValue === true ) {
			nValue = 1;
		} else {
			nValue = 0;
		}

		googleMapWrap.attr( 'data-type-control', nValue );
		royalGoogleMaps();

	});


/* ----------------- Google Map Spacing Options ----------------- */

	royalLivePreview( 'cPage_map', 'height', function( nValue ) {
		googleMap.css( 'height', nValue +'px' );
		sidebarEqual();
	});





/*
***************************************************************
* #Copyright & Socials
***************************************************************
*/

// define variables
	var copyAndSocials 	 		 = $('.copy-and-soc'),
		footerFoldBTN 			 = $('.footer-fold-btn'),
		copy_soc_gen_arr		 = royal_options.copy_soc_general.arrange,
		copy_soc_gen_col		 = royal_options.copy_soc_general.color,
		copy_soc_gen_col_tr		 = royal_options.copy_soc_general.col_tr,
		copy_soc_gen_shad_h		 = royal_options.copy_soc_general.shad_h,
		copy_soc_gen_shad_v		 = royal_options.copy_soc_general.shad_v,
		copy_soc_gen_shad_bl	 = royal_options.copy_soc_general.shad_bl,
		copy_soc_gen_shad_sp	 = royal_options.copy_soc_general.shad_sp,
		copy_soc_gen_shad_col	 = royal_options.copy_soc_general.shad_col,
		copy_soc_gen_shad_col_tr = royal_options.copy_soc_general.shad_col_tr,
		copy_soc_gen_shad_in	 = royal_options.copy_soc_general.shad_in;

	// border 4x live update
	var copy_soc_gen_bd_tp = [
			royal_options.copy_soc_general.bd_size_tp,
			royal_options.copy_soc_general.bd_style_tp,
			royal_options.copy_soc_general.bd_col_tp 
		],
		copy_soc_gen_bd_rt = [
			royal_options.copy_soc_general.bd_size_rt,
			royal_options.copy_soc_general.bd_style_rt,
			royal_options.copy_soc_general.bd_col_rt
		],
		copy_soc_gen_bd_bt = [
			royal_options.copy_soc_general.bd_size_bt,
			royal_options.copy_soc_general.bd_style_bt,
			royal_options.copy_soc_general.bd_col_bt
		],
		copy_soc_gen_bd_lt = [
			royal_options.copy_soc_general.bd_size_lt,
			royal_options.copy_soc_general.bd_style_lt,
			royal_options.copy_soc_general.bd_col_lt
		];

/* ----------------- General Options ----------------- */

	// label
	royalLivePreview( 'copy_soc_general', 'label', function( nValue ) {

		if ( nValue === false ) {
			copyAndSocials.hide();
		} else {
			copyAndSocials.show();
		}

		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	function copyAndSocArrange() {

		body.removeClass('copy-horizontal-1 copy-horizontal-2 copy-fixed');

		if ( copy_soc_gen_arr === 'horizontal1' ) {
			body.addClass('copy-horizontal-1');
		} else if ( copy_soc_gen_arr === 'horizontal2' ) {
			body.addClass('copy-horizontal-2');
		}

	}

	royalLivePreview( 'copy_soc_general', 'position', function( nValue ) {

		if ( nValue === 'fixed' ) {

			body.removeClass('copy-horizontal-1 copy-horizontal-2');
			body.addClass('copy-fixed');

		} else {

			body.removeClass('copy-fixed');
			sidebar.css( 'height', '100%' );
			copyAndSocArrange();

		}

		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
		mobileCopyAndSoc();

	});

	royalLivePreview( 'copy_soc_general', 'arrange', function( nValue ) {
		copy_soc_gen_arr = nValue;

		copyAndSocArrange();
		fixedSidebarHeight();
		sidebarEqual();
	});

	function fixedFooterBTN() {
		if ( footerFoldBTN.css('display') !== 'none' ) {
			copyAndSocials.css( 'bottom', - copyAndSocials.outerHeight() +'px' );
		}
	}

	royalLivePreview( 'copy_soc_general', 'fold_btn_label', function( nValue ) {

		if ( nValue === true ) {

			$('.sidebar-top.copy-fixed .footer-fold-btn').show();
			fixedFooterBTN();

		} else {

			footerFoldBTN.hide();
			copyAndSocials.css( 'bottom', '0' );

		}
	});

	royalLivePreview( 'copy_soc_general', 'fold_btn_icon', function( nValue ) {
		footerFoldBTN.children().removeAttr('class');
		footerFoldBTN.children().addClass( 'fa fa-' + nValue );
	});

/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'copy_soc_general', 'padding_tp', function( nValue ) {
		$('.copy-and-soc').children('div').css( 'padding-top', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copy_soc_general', 'padding_rt', function( nValue ) {
		$('.copy-and-soc').children('div').css( 'padding-right', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copy_soc_general', 'padding_bt', function( nValue ) {
		$('.copy-and-soc').children('div').css( 'padding-bottom', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copy_soc_general', 'padding_lt', function( nValue ) {
		$('.copy-and-soc').children('div').css( 'padding-left', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'copy_soc_general', 'color', function( nValue ) {
		copy_soc_gen_col = nValue;
		copyAndSocials.css( 'background-color', royalHex2Rgba( copy_soc_gen_col, copy_soc_gen_col_tr ) );
	});

	royalLivePreview( 'copy_soc_general', 'col_tr', function( nValue ) {
		copy_soc_gen_col_tr = nValue;
		copyAndSocials.css( 'background-color', royalHex2Rgba( copy_soc_gen_col, copy_soc_gen_col_tr ) );
	});

	royalLivePreview( 'copy_soc_general', 'fold_btn_color', function( nValue ) {
		footerFoldBTN.children().css( 'background-color', nValue );
	});

	royalLivePreview( 'copy_soc_general', 'fold_btn_icon_color', function( nValue ) {
		footerFoldBTN.children().css( 'color', nValue );
	});

	royalLivePreview( 'copy_soc_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( copyAndSocials, copy_soc_gen_bd_tp, copy_soc_gen_bd_rt, copy_soc_gen_bd_bt, copy_soc_gen_bd_lt );
		} else {
			copyAndSocials.css( 'border', 'none' );
		}

		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalBorderLivePreview( copyAndSocials, 'copy_soc_general', 'top', copy_soc_gen_bd_tp, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( copyAndSocials, 'copy_soc_general', 'right', copy_soc_gen_bd_rt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( copyAndSocials, 'copy_soc_general', 'bottom', copy_soc_gen_bd_bt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( copyAndSocials, 'copy_soc_general', 'left', copy_soc_gen_bd_lt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	function copyAndSocialsShadow() {
		copyAndSocials.css( 'box-shadow', royalShadow( [
			copy_soc_gen_shad_h,
			copy_soc_gen_shad_v,
			copy_soc_gen_shad_bl,
			copy_soc_gen_shad_sp,
			copy_soc_gen_shad_col,
			copy_soc_gen_shad_col_tr,
			copy_soc_gen_shad_in
		] ) );
	}

	royalLivePreview( 'copy_soc_general', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			copyAndSocialsShadow();
		} else {
			copyAndSocials.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'copy_soc_general', 'shad_h', function( nValue ) {
		copy_soc_gen_shad_h = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_v', function( nValue ) {
		copy_soc_gen_shad_v = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_bl', function( nValue ) {
		copy_soc_gen_shad_bl = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_sp', function( nValue ) {
		copy_soc_gen_shad_sp = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_col', function( nValue ) {
		copy_soc_gen_shad_col = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_col_tr', function( nValue ) {
		copy_soc_gen_shad_col_tr = nValue;
		copyAndSocialsShadow();
	});

	royalLivePreview( 'copy_soc_general', 'shad_in', function( nValue ) {
		copy_soc_gen_shad_in = nValue;
		copyAndSocialsShadow();
	});



// define variables
	var socialsWrap 		 = $('.socials-wrap'),
		socialsIconLink 	 = socialsWrap.find('a'),
		socialsIcon 		 = socialsWrap.find('i'),
		socials_bg_col		 = royal_options.socials.bg_col,
		socials_bg_col_tr	 = royal_options.socials.bg_col_tr,
		socials_txt_col		 = royal_options.socials.txt_col,
		socials_bg_hcol		 = royal_options.socials.bg_hcol,
		socials_bg_hcol_tr	 = royal_options.socials.bg_hcol_tr,
		socials_txt_hcol	 = royal_options.socials.txt_hcol,
		socials_bd_hcol		 = royal_options.socials.bd_hcol,
		socials_rad			 = royal_options.socials.radius,
		socials_shad_h		 = royal_options.socials.shad_h,
		socials_shad_v		 = royal_options.socials.shad_v,
		socials_shad_bl		 = royal_options.socials.shad_bl,
		socials_shad_sp		 = royal_options.socials.shad_sp,
		socials_shad_col	 = royal_options.socials.shad_col,
		socials_shad_col_tr	 = royal_options.socials.shad_col_tr,
		socials_shad_in		 = royal_options.socials.shad_in,
		socials_txt_shad_h	 = royal_options.socials.txt_shad_h,
		socials_txt_shad_v	 = royal_options.socials.txt_shad_v,
		socials_txt_shad_bl	 = royal_options.socials.txt_shad_bl,
		socials_txt_shad_col = royal_options.socials.txt_shad_col;

	// border 4x live update
	var socials_bd_tp = [
			royal_options.socials.bd_size_tp,
			royal_options.socials.bd_style_tp,
			royal_options.socials.bd_col_tp 
		],
		socials_bd_rt = [
			royal_options.socials.bd_size_rt,
			royal_options.socials.bd_style_rt,
			royal_options.socials.bd_col_rt
		],
		socials_bd_bt = [
			royal_options.socials.bd_size_bt,
			royal_options.socials.bd_style_bt,
			royal_options.socials.bd_col_bt
		],
		socials_bd_lt = [
			royal_options.socials.bd_size_lt,
			royal_options.socials.bd_style_lt,
			royal_options.socials.bd_col_lt
		];

	// wrapper border bottom 1x live update
	var socials_wrap_bd_bt = [
			royal_options.socials.wrap_bd_size_bt,
			royal_options.socials.wrap_bd_style_bt,
			royal_options.socials.wrap_bd_col_bt 
		];

	// label
	royalLivePreview( 'socials', 'label', function( nValue ) {
		if ( nValue === false ) {
			socialsWrap.hide();
		} else {
			socialsWrap.show();
		}
	});

/* ----------------- Socials General Options ----------------- */

	// social url 1
	royalLivePreview( 'socials', 'url_1', function( nValue ) {

		socialsIconLink.eq(0).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(0).show();
		} else {
			socialsIconLink.eq(0).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 1
	royalLivePreview( 'socials', 'icon_1', function( nValue ) {
		socialsIcon.eq(0).removeAttr('class');
		socialsIcon.eq(0).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 2
	royalLivePreview( 'socials', 'url_2', function( nValue ) {

		socialsIconLink.eq(1).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(1).show();
		} else {
			socialsIconLink.eq(1).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 2
	royalLivePreview( 'socials', 'icon_2', function( nValue ) {
		socialsIcon.eq(1).removeAttr('class');
		socialsIcon.eq(1).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 3
	royalLivePreview( 'socials', 'url_3', function( nValue ) {

		socialsIconLink.eq(2).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(2).show();
		} else {
			socialsIconLink.eq(2).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 3
	royalLivePreview( 'socials', 'icon_3', function( nValue ) {
		socialsIcon.eq(2).removeAttr('class');
		socialsIcon.eq(2).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 4
	royalLivePreview( 'socials', 'url_4', function( nValue ) {

		socialsIconLink.eq(3).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(3).show();
		} else {
			socialsIconLink.eq(3).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 4
	royalLivePreview( 'socials', 'icon_4', function( nValue ) {
		socialsIcon.eq(3).removeAttr('class');
		socialsIcon.eq(3).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 5
	royalLivePreview( 'socials', 'url_5', function( nValue ) {

		socialsIconLink.eq(4).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(4).show();
		} else {
			socialsIconLink.eq(4).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 5
	royalLivePreview( 'socials', 'icon_5', function( nValue ) {
		socialsIcon.eq(4).removeAttr('class');
		socialsIcon.eq(4).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 6
	royalLivePreview( 'socials', 'url_6', function( nValue ) {

		socialsIconLink.eq(5).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(5).show();
		} else {
			socialsIconLink.eq(5).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 6
	royalLivePreview( 'socials', 'icon_6', function( nValue ) {
		socialsIcon.eq(5).removeAttr('class');
		socialsIcon.eq(5).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 7
	royalLivePreview( 'socials', 'url_7', function( nValue ) {

		socialsIconLink.eq(6).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(6).show();
		} else {
			socialsIconLink.eq(6).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 7
	royalLivePreview( 'socials', 'icon_7', function( nValue ) {
		socialsIcon.eq(6).removeAttr('class');
		socialsIcon.eq(6).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 8
	royalLivePreview( 'socials', 'url_8', function( nValue ) {

		socialsIconLink.eq(7).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(7).show();
		} else {
			socialsIconLink.eq(7).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 8
	royalLivePreview( 'socials', 'icon_8', function( nValue ) {
		socialsIcon.eq(7).removeAttr('class');
		socialsIcon.eq(7).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 9
	royalLivePreview( 'socials', 'url_9', function( nValue ) {

		socialsIconLink.eq(8).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(8).show();
		} else {
			socialsIconLink.eq(8).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 9
	royalLivePreview( 'socials', 'icon_9', function( nValue ) {
		socialsIcon.eq(8).removeAttr('class');
		socialsIcon.eq(8).addClass( 'fa rf-button fa-' + nValue );
	});

	// social url 10
	royalLivePreview( 'socials', 'url_10', function( nValue ) {

		socialsIconLink.eq(9).attr( 'href', nValue );

		if ( nValue !== '' ) {
			socialsIconLink.eq(9).show();
		} else {
			socialsIconLink.eq(9).hide();
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	// social icon 10
	royalLivePreview( 'socials', 'icon_10', function( nValue ) {
		socialsIcon.eq(9).removeAttr('class');
		socialsIcon.eq(9).addClass( 'fa rf-button fa-' + nValue );
	});

	royalLivePreview( 'socials', 'align', function( nValue ) {
		copyAndSocials.css( 'text-align', nValue );
	});


/* ----------------- Socials Spacing Options ----------------- */

	royalLivePreview( 'socials', 'width', function( nValue ) {
		socialsIcon.css( 'width', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'height', function( nValue ) {
		socialsIcon.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'gutter_horz', function( nValue ) {
		socialsIcon.css( 'margin-right', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'gutter_vert', function( nValue ) {
		socialsIcon.css( 'margin-bottom', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'padding_bt', function( nValue ) {
		socialsWrap.css( 'padding-bottom', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'margin_bt', function( nValue ) {
		socialsWrap.css( 'margin-bottom', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});


/* ----------------- Socials Styling Options ----------------- */

	function socialsIconHover() {
		socialsIcon.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( socials_bg_hcol, socials_bg_hcol_tr ),
				'color' 			: socials_txt_hcol,
				'border-color' 		: socials_bd_hcol
			});

		}, function() {

			$(this).css({
				'background-color'    : royalHex2Rgba( socials_bg_col, socials_bg_col_tr ),
				'color' 			  : socials_txt_col,
				'border-top-color' 	  : socials_bd_tp[2],
				'border-right-color'  : socials_bd_rt[2],
				'border-bottom-color' : socials_bd_bt[2],
				'border-left-color'   : socials_bd_lt[2]
			});

		});
	}

	socialsIconHover();

	royalLivePreview( 'socials', 'bg_col', function( nValue ) {
		socials_bg_col = nValue;
		socialsIcon.css( 'background-color', royalHex2Rgba( socials_bg_col, socials_bg_col_tr ) );
	});

	royalLivePreview( 'socials', 'bg_col_tr', function( nValue ) {
		socials_bg_col_tr = nValue;
		socialsIcon.css( 'background-color', royalHex2Rgba( socials_bg_col, socials_bg_col_tr ) );
	});

	royalLivePreview( 'socials', 'txt_col', function( nValue ) {
		socials_txt_col = nValue;
		socialsIcon.css( 'color', socials_txt_col );
	});

	royalLivePreview( 'socials', 'bg_hcol', function( nValue ) {
		socials_bg_hcol = nValue;
	});

	royalLivePreview( 'socials', 'bg_hcol_tr', function( nValue ) {
		socials_bg_hcol_tr = nValue;
	});

	royalLivePreview( 'socials', 'txt_hcol', function( nValue ) {
		socials_txt_hcol = nValue;
	});

	royalLivePreview( 'socials', 'bd_hcol', function( nValue ) {
		socials_bd_hcol = nValue;
	});

	royalLivePreview( 'socials', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( socialsIcon, socials_bd_tp, socials_bd_rt, socials_bd_bt, socials_bd_lt );
		} else {
			socialsIcon.css( 'border', 'none' );
		}

		fixedFooterBTN();
		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	royalBorderLivePreview( socialsIcon, 'socials', 'top', socials_bd_tp, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( socialsIcon, 'socials', 'right', socials_bd_rt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( socialsIcon, 'socials', 'bottom', socials_bd_bt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalBorderLivePreview( socialsIcon, 'socials', 'left', socials_bd_lt, 'fixedCopyAndSoc fixedSidebarHeight sidebarEqual' );

	royalLivePreview( 'socials', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			socialsIcon.css({
				'border-radius' : socials_rad + '%'
			});

		} else {

			socialsIcon.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'socials', 'radius', function( nValue ) {
		socials_rad = nValue;
		socialsIcon.css( 'border-radius', socials_rad + '%' );
	});

	function socialsIconShadow() {
		socialsIcon.css( 'box-shadow', royalShadow( [
			socials_shad_h,
			socials_shad_v,
			socials_shad_bl,
			socials_shad_sp,
			socials_shad_col,
			socials_shad_col_tr,
			socials_shad_in
		] ) );
	}

	royalLivePreview( 'socials', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			socialsIconShadow();
		} else {
			socialsIcon.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'socials', 'shad_h', function( nValue ) {
		socials_shad_h = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_v', function( nValue ) {
		socials_shad_v = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_bl', function( nValue ) {
		socials_shad_bl = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_sp', function( nValue ) {
		socials_shad_sp = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_col', function( nValue ) {
		socials_shad_col = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_col_tr', function( nValue ) {
		socials_shad_col_tr = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'shad_in', function( nValue ) {
		socials_shad_in = nValue;
		socialsIconShadow();
	});

	royalLivePreview( 'socials', 'wrap_border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( socialsWrap, 'bottom', socials_wrap_bd_bt );
		} else {
			socialsWrap.css( 'border', 'none' );
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	royalLivePreview( 'socials', 'wrap_bd_size_bt', function( nValue ) {
		socials_wrap_bd_bt[0] = nValue;
		socialsWrap.css('border-bottom', socials_wrap_bd_bt[0] +'px '+ socials_wrap_bd_bt[1] +' '+ socials_wrap_bd_bt[2] );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'socials', 'wrap_bd_style_bt', function( nValue ) {
		socials_wrap_bd_bt[1] = nValue;
		socialsWrap.css( 'border-bottom', socials_wrap_bd_bt[0] +'px '+ socials_wrap_bd_bt[1] +' '+ socials_wrap_bd_bt[2] );
	});

	royalLivePreview( 'socials', 'wrap_bd_col_bt', function( nValue ) {
		socials_wrap_bd_bt[2] = nValue;
		socialsWrap.css( 'border-bottom', socials_wrap_bd_bt[0] +'px '+ socials_wrap_bd_bt[1] +' '+ socials_wrap_bd_bt[2] );
	});

	royalLivePreview( 'socials', 'wrap_bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			socialsWrap.css( 'display', 'block' );
		} else {
			socialsWrap.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Socials Font Options ----------------- */

	royalLivePreview( 'socials', 'font_size', function( nValue ) {
		socialsIcon.css( 'font-size', nValue + 'px' );
	});


	function socialsIconTextShadow() {
		socialsIcon.css( 'text-shadow', royalTextShadow( [
			socials_txt_shad_h,
			socials_txt_shad_v,
			socials_txt_shad_bl,
			socials_txt_shad_col
		] ) );
	}

	royalLivePreview( 'socials', 'txt_shadow_label', function( nValue ) {
		if ( nValue === true ) {
			socialsIconTextShadow();
		} else {
			socialsIcon.css( 'text-shadow', 'none' );	
		}
	});

	royalLivePreview( 'socials', 'txt_shad_h', function( nValue ) {
		socials_txt_shad_h = nValue;
		socialsIconTextShadow();
	});

	royalLivePreview( 'socials', 'txt_shad_v', function( nValue ) {
		socials_txt_shad_v = nValue;
		socialsIconTextShadow();
	});

	royalLivePreview( 'socials', 'txt_shad_bl', function( nValue ) {
		socials_txt_shad_bl = nValue;
		socialsIconTextShadow();
	});

	royalLivePreview( 'socials', 'txt_shad_col', function( nValue ) {
		socials_txt_shad_col = nValue;
		socialsIconTextShadow();
	});


// define variables
	var copyrightWrap  	= $('.copyright-wrap'),
		copyrightText  	= copyrightWrap.find('p'),
		copyrightLink  	= copyrightText.find('a'),
		copy_link_col  	= royal_options.copyright.link_col,
		copy_link_hcol 	= royal_options.copyright.link_hcol;

	// label
	royalLivePreview( 'copyright', 'label', function( nValue ) {
		if ( nValue === false ) {
			copyrightWrap.hide();
		} else {
			copyrightWrap.show();
		}
	});

/* ----------------- Copyright General Options ----------------- */

	royalLivePreview( 'copyright', 'text', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'copyright', 'align', function( nValue ) {
		copyrightText.css( 'text-align', nValue );
	});


/* ----------------- Copyright Styling Options ----------------- */

	royalLivePreview( 'copyright', 'txt_col', function( nValue ) {
		copyrightText.css( 'color', nValue );
	});

	copyrightLink.hover(function() {
		$(this).css( 'color', copy_link_hcol );
	}, function() {
		$(this).css( 'color', copy_link_col );
	});

	royalLivePreview( 'copyright', 'link_col', function( nValue ) {
		copy_link_col = nValue;
		copyrightLink.css( 'color', copy_link_col );
	});

	royalLivePreview( 'copyright', 'link_hcol', function( nValue ) {
		copy_link_hcol = nValue;
	});


/* ----------------- Copyright Font Options ----------------- */

	royalGoogleFontsPreview( 'copyright', 'font_family', copyrightText );

	royalLivePreview( 'copyright', 'font_size', function( nValue ) {
		copyrightText.css( 'font-size', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copyright', 'line_height', function( nValue ) {
		copyrightText.css( 'line-height', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copyright', 'letter_space', function( nValue ) {
		copyrightText.css( 'letter-spacing', nValue +'px' );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copyright', 'font_weight', function( nValue ) {
		copyrightText.css( 'font-weight', nValue );

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();
	});

	royalLivePreview( 'copyright', 'italic', function( nValue ) {
		if ( nValue === true ) {
			copyrightText.css( 'font-style', 'italic' );
		} else {
			copyrightText.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'copyright', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			copyrightText.css( 'text-transform', 'uppercase' );
		} else {
			copyrightText.css( 'text-transform', 'none' );
		}

		fixedFooterBTN();
		fixedCopyAndSoc();
		fixedSidebarHeight();
		sidebarEqual();

	});

	royalLivePreview( 'copyright', 'underline', function( nValue ) {
		if ( nValue === true ) {
			copyrightText.find('a').css( 'text-decoration', 'underline' );
		} else {
			copyrightText.find('a').css( 'text-decoration', 'none' );
		}
	});


// define variables
	var backBTN 	 		 = $('.back-to-top'),
		backIcon 			 = backBTN.find('i'),
		back_btn_col		 = royal_options.back_btn.color,
		back_btn_col_tr		 = royal_options.back_btn.col_tr,
		back_btn_txt_col	 = royal_options.back_btn.txt_col,
		back_btn_hcol_tr	 = royal_options.back_btn.hcol_tr,
		back_btn_hcol		 = royal_options.back_btn.hcol,
		back_btn_txt_hcol	 = royal_options.back_btn.txt_hcol,
		back_btn_rad		 = royal_options.back_btn.radius,
		back_btn_shad_h		 = royal_options.back_btn.shad_h,
		back_btn_shad_v		 = royal_options.back_btn.shad_v,
		back_btn_shad_bl	 = royal_options.back_btn.shad_bl,
		back_btn_shad_sp	 = royal_options.back_btn.shad_sp,
		back_btn_shad_col	 = royal_options.back_btn.shad_col,
		back_btn_shad_col_tr = royal_options.back_btn.shad_col_tr,
		back_btn_shad_in	 = royal_options.back_btn.shad_in;

/* ----------------- Back Button General Options ----------------- */

	royalLivePreview( 'back_btn', 'label', function() {
		royalLoading();
	});

	royalLivePreview( 'back_btn', 'show_trans', function( nValue ) {
		backBTN.attr( 'data-duration', nValue );
	});

	royalLivePreview( 'back_btn', 'scroll_trans', function( nValue ) {
		backBTN.attr( 'data-scroll-top', nValue );
	});

	royalLivePreview( 'back_btn', 'icon', function( nValue ) {
		backIcon.removeAttr('class');
		backIcon.addClass( 'fa rf-button fa-' + nValue );
	});


/* ----------------- Back Button Spacing Options ----------------- */

	royalLivePreview( 'back_btn', 'width', function( nValue ) {
		backIcon.css( 'width', nValue +'px' );
	});

	royalLivePreview( 'back_btn', 'height', function( nValue ) {

		backIcon.css({
			'height' 	  : nValue +'px',
			'line-height' : nValue +'px'
		});

	});

	royalLivePreview( 'back_btn', 'pos_rt', function( nValue ) {
		backBTN.css( 'right', nValue +'px' );
	});

	royalLivePreview( 'back_btn', 'pos_bt', function( nValue ) {
		backBTN.css( 'bottom', nValue +'px' );
	});


/* ----------------- Back Button Styling Options ----------------- */

	function backIconHover() {
		backIcon.hover(function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( back_btn_hcol, back_btn_hcol_tr ),
				'color' 			: back_btn_txt_hcol
			});

		}, function() {

			$(this).css({
				'background-color' 	: royalHex2Rgba( back_btn_col, back_btn_col_tr ),
				'color' 			: back_btn_txt_col
			});

		});
	}

	backIconHover();

	royalLivePreview( 'back_btn', 'color', function( nValue ) {
		back_btn_col = nValue;
		backIcon.css( 'background-color', royalHex2Rgba( back_btn_col, back_btn_col_tr ) );
	});

	royalLivePreview( 'back_btn', 'col_tr', function( nValue ) {
		back_btn_col_tr = nValue;
		backIcon.css( 'background-color', royalHex2Rgba( back_btn_col, back_btn_col_tr ) );
	});

	royalLivePreview( 'back_btn', 'txt_col', function( nValue ) {
		back_btn_txt_col = nValue;
		backIcon.css( 'color', back_btn_txt_col );
	});

	royalLivePreview( 'back_btn', 'hcol', function( nValue ) {
		back_btn_hcol = nValue;
	});

	royalLivePreview( 'back_btn', 'hcol_tr', function( nValue ) {
		back_btn_hcol_tr = nValue;
	});

	royalLivePreview( 'back_btn', 'txt_hcol', function( nValue ) {
		back_btn_txt_hcol = nValue;
	});

	royalLivePreview( 'back_btn', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			backIcon.css({
				'border-radius' : back_btn_rad + '%'
			});

		} else {

			backIcon.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'back_btn', 'radius', function( nValue ) {
		back_btn_rad = nValue;
		backIcon.css( 'border-radius', back_btn_rad + '%' );
	});

	function backIconShadow() {
		backIcon.css( 'box-shadow', royalShadow( [
			back_btn_shad_h,
			back_btn_shad_v,
			back_btn_shad_bl,
			back_btn_shad_sp,
			back_btn_shad_col,
			back_btn_shad_col_tr,
			back_btn_shad_in
		] ) );
	}

	royalLivePreview( 'back_btn', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			backIconShadow();
		} else {
			backIcon.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'back_btn', 'shad_h', function( nValue ) {
		back_btn_shad_h = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_v', function( nValue ) {
		back_btn_shad_v = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_bl', function( nValue ) {
		back_btn_shad_bl = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_sp', function( nValue ) {
		back_btn_shad_sp = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_col', function( nValue ) {
		back_btn_shad_col = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_col_tr', function( nValue ) {
		back_btn_shad_col_tr = nValue;
		backIconShadow();
	});

	royalLivePreview( 'back_btn', 'shad_in', function( nValue ) {
		back_btn_shad_in = nValue;
		backIconShadow();
	});


/* ----------------- Back Button Font Options ----------------- */

	royalLivePreview( 'back_btn', 'txt_sz', function( nValue ) {
		backIcon.css( 'font-size', nValue + 'px' );
	});




/*
***************************************************************
* #Typography
***************************************************************
*/


/* ----------------- General Options ----------------- */

	royalLivePreview( 'typography', 'subsets_label', function() {
		royalLoading();
	});

	royalLivePreview( 'typography', 'latin_subset', function() {
		royalLoading();
	});

	royalLivePreview( 'typography', 'cyrillic_subset', function() {
		royalLoading();
	});

	royalLivePreview( 'typography', 'greek_subset', function() {
		royalLoading();
	});

	royalLivePreview( 'typography', 'vietnamese_subset', function() {
		royalLoading();
	});


/* ----------------- Spacing Options ----------------- */
	
	var textMargins = [
		'.inner-content p',
		'.inner-content table',
		'.inner-content pre',
		'.inner-content blockquote',
		'.inner-content address',
		'.inner-content .wp-playlist',
		'.comment-content p', 
		'.single-meta',
		'.project-description-wrap p',
		'.project-details-wrap > ul',
		'.single .gallery',
		'.inner-content.wp-caption',
		'.inner-content ul',
		'.inner-content ol', 
		'.inner-content dl dd',
		'.single-content h1',
		'.single-content h2',
		'.single-content h3',
		'.single-content h4',
		'.single-content h5',
		'.single-content h6',
		'.inner-content .project-info h3',
		'.search-results-wrap h4',
		'.search-query',
		'.project-info h3'
	];
	textMargins = textMargins.join( ', ' );

	var noTextMargins = [
		'.post-text-wrap p',
		'.post-text-wrap h1',
		'.post-text-wrap h2',
		'.post-text-wrap h3',
		'.post-text-wrap h4',
		'.post-text-wrap h5',
		'.post-text-wrap h6',
	];
	noTextMargins = noTextMargins.join( ', ' );

	var typography_text_margins = royal_options.text_margins;

	royalLivePreview( 'typography', 'text_margins', function( nValue ) {

		typography_text_margins = nValue;

		$( textMargins ).not(noTextMargins).css( 'margin-bottom', nValue +'px' );
		$('.stacked-caption span').css( 'margin', nValue +'px 0' );
		$('[class*=single-header-below] .title-and-meta').css( 'padding-bottom', nValue +'px' );

		sidebarEqual();

	});



/* ----------------- Paragraph Font Options ----------------- */

	var paragraphFonts = [
		'.inner-content p:not(.post-text-wrap p)',
		'.inner-content li',
		'.inner-content dt',
		'.inner-content dd',
		'.inner-content table',
		'.inner-content code',
		'.inner-content pre',
		'.inner-content address',
		'.inner-content tt',
		'.inner-content samp',
		'.inner-content kbd',
		'.inner-content var',
		'.inner-content .wp-caption-text',
		'.inner-content .single-meta',
		'.inner-content .single-tags',
		'.comment-reply-title small',
		'.inner-content .rf-input',
		'.slideshow-caption',
		'.stacked-caption span',
		'.comments-pagination',
		'.submit-btn',
		'.form-submit #submit',
		'.inner-content [class^=su-]:not([class$=-icon]):not(.su-dropcap)'
	];
	paragraphFonts = paragraphFonts.join( ', ' );

	var paragraphFontSizes = [
		'.inner-content .single-meta',
		'.inner-content .single-tags',
		'.comment-reply-title small',
		'#cancel-comment-reply-link',
		'.inner-content .rf-input'
	];
	paragraphFontSizes = paragraphFontSizes.join( ', ' );

	royalGoogleFontsPreview( 'typography_p', 'font_family', $( paragraphFonts ) );
	royalGoogleFontsPreview( 'typography_p', 'font_family', $('.inner-content .previous-post, .inner-content .next-post, .inner-content [class^=su-]:not([class$=-icon])') );

	royalLivePreview( 'typography_p', 'font_size', function( nValue ) {

		$( paragraphFonts ).css( 'font-size', nValue +'px' );
		$( paragraphFontSizes ).css( 'font-size', ( parseInt( nValue, 10 ) - 1 ) +'px' );

		sidebarEqual();

	});

	royalLivePreview( 'typography_p', 'line_height', function( nValue ) {
		typography_p_lh = nValue
		$( paragraphFonts ).css( 'line-height', nValue +'px' );

		royalInputsEuqalHeight();
		sidebarEqual();
	});

	royalLivePreview( 'typography_p', 'letter_space', function( nValue ) {
		$( paragraphFonts ).css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_p', 'font_weight', function( nValue ) {
		$( paragraphFonts ).css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_p', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$( paragraphFonts ).css( 'font-style', 'italic' );
		} else {
			$( paragraphFonts ).css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_p', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$( paragraphFonts ).css( 'text-transform', 'uppercase' );
		} else {
			$( paragraphFonts ).css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});



/* ----------------- H1 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h1', 'font_family', $('.inner-content h1') );

	royalLivePreview( 'typography_h1', 'font_size', function( nValue ) {
		$('.inner-content h1').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h1', 'line_height', function( nValue ) {
		$('.inner-content h1').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h1', 'letter_space', function( nValue ) {
		$('.inner-content h1').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h1', 'font_weight', function( nValue ) {
		$('.inner-content h1').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h1', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h1').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h1').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h1', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h1').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h1').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


/* ----------------- H2 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h2', 'font_family', $('.inner-content h2') );

	royalLivePreview( 'typography_h2', 'font_size', function( nValue ) {
		$('.inner-content h2').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h2', 'line_height', function( nValue ) {
		$('.inner-content h2').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h2', 'letter_space', function( nValue ) {
		$('.inner-content h2').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h2', 'font_weight', function( nValue ) {
		$('.inner-content h2').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h2', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h2').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h2').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h2', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h2').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h2').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


/* ----------------- H3 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h3', 'font_family', $('.inner-content h3') );

	royalLivePreview( 'typography_h3', 'font_size', function( nValue ) {
		$('.inner-content h3').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h3', 'line_height', function( nValue ) {
		$('.inner-content h3').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h3', 'letter_space', function( nValue ) {
		$('.inner-content h3').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h3', 'font_weight', function( nValue ) {
		$('.inner-content h3').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h3', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h3').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h3').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h3', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h3').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h3').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


/* ----------------- H4 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h4', 'font_family', $('.inner-content h4') );

	royalLivePreview( 'typography_h4', 'font_size', function( nValue ) {
		$('.inner-content h4').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h4', 'line_height', function( nValue ) {
		$('.inner-content h4').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h4', 'letter_space', function( nValue ) {
		$('.inner-content h4').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h4', 'font_weight', function( nValue ) {
		$('.inner-content h4').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h4', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h4').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h4').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h4', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h4').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h4').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


/* ----------------- H5 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h5', 'font_family', $('.inner-content h5').not('.post-text-wrap h5') );

	royalLivePreview( 'typography_h5', 'font_size', function( nValue ) {
		$('.inner-content h5').not('.post-text-wrap h5').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h5', 'line_height', function( nValue ) {
		$('.inner-content h5').not('.post-text-wrap h5').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h5', 'letter_space', function( nValue ) {
		$('.inner-content h5').not('.post-text-wrap h5').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h5', 'font_weight', function( nValue ) {
		$('.inner-content h5').not('.post-text-wrap h5').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h5', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h5').not('.post-text-wrap h5').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h5').not('.post-text-wrap h5').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h5', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h5').not('.post-text-wrap h5').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h5').not('.post-text-wrap h5').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


/* ----------------- H6 Font Options ----------------- */

	royalGoogleFontsPreview( 'typography_h6', 'font_family', $('.inner-content h6') );

	royalLivePreview( 'typography_h6', 'font_size', function( nValue ) {
		$('.inner-content h6').css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h6', 'line_height', function( nValue ) {
		$('.inner-content h6').css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h6', 'letter_space', function( nValue ) {
		$('.inner-content h6').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h6', 'font_weight', function( nValue ) {
		$('.inner-content h6').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'typography_h6', 'italic', function( nValue ) {
		if ( nValue === true ) {
			$('.inner-content h6').css( 'font-style', 'italic' );
		} else {
			$('.inner-content h6').css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'typography_h6', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			$('.inner-content h6').css( 'text-transform', 'uppercase' );
		} else {
			$('.inner-content h6').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});



/*
***************************************************************
* #Sidebar Widgets
*************************************************************** 
*/

// define variables
	var sWidgetsTitle 	= $('.sid-widget-title'),
		sWidgetsTitleIn = sWidgetsTitle.find('span');

	// border 1x live update
	var sWidgets_tt_bd_bt = [
			royal_options.sWidgets_title.bd_size_bt,
			royal_options.sWidgets_title.bd_style_bt,
			royal_options.sWidgets_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'sWidgets_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			sWidgetsTitle.css( 'display', 'block' );
		} else {
			sWidgetsTitle.css( 'display', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'sWidgets_title', 'align', function( nValue ) {
		sWidgetsTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'sWidgets_title', 'padding_bt', function( nValue ) {
		sWidgetsTitleIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_title', 'margin_bt', function( nValue ) {
		sWidgetsTitleIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'sWidgets_title', 'color', function( nValue ) {
		sWidgetsTitle.css( 'color', nValue );
		sWidgetsTitle.find('a').css( 'color', nValue );
	});


	royalLivePreview( 'sWidgets_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( sWidgetsTitleIn, 'bottom', sWidgets_tt_bd_bt );
		} else {
			sWidgetsTitleIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( sWidgetsTitleIn, 'sWidgets_title', 'bottom', sWidgets_tt_bd_bt, 'sidebarEqual' );

	royalLivePreview( 'sWidgets_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			sWidgetsTitleIn.css( 'display', 'block' );
		} else {
			sWidgetsTitleIn.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'sWidgets_title', 'font_family', sWidgetsTitle );

	royalLivePreview( 'sWidgets_title', 'font_size', function( nValue ) {
		sWidgetsTitle.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_title', 'line_height', function( nValue ) {
		sWidgetsTitle.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_title', 'letter_space', function( nValue ) {
		sWidgetsTitle.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_title', 'font_weight', function( nValue ) {
		sWidgetsTitle.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			sWidgetsTitle.css( 'font-style', 'italic' );
		} else {
			sWidgetsTitle.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'sWidgets_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			sWidgetsTitle.css( 'text-transform', 'uppercase' );
		} else {
			sWidgetsTitle.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


// define variables
	var sWidgetsContent			= $('.sidebar-widget>ul, .sidebar-widget>div'),
		sWidgetsContentTxt		= $('.sidebar-widget'),
		sWidgetsContentLink		= $('.tagcloud a, .textwidget a, .sidebar-widget ul li a, .sidebar-widget tfoot tr td a, .sidebar-widget tbody tr td a'),
		sWidgets_ct_bg_col		= royal_options.sWidgets_content.bg_col,
		sWidgets_ct_bg_col_tr	= royal_options.sWidgets_content.bg_col_tr,
		sWidgets_ct_link_col	= royal_options.sWidgets_content.link_col,
		sWidgets_ct_link_hcol	= royal_options.sWidgets_content.link_hcol,
		sWidgets_ct_rad			= royal_options.sWidgets_content.radius,
		sWidgets_ct_shad_h		= royal_options.sWidgets_content.shad_h,
		sWidgets_ct_shad_v		= royal_options.sWidgets_content.shad_v,
		sWidgets_ct_shad_bl		= royal_options.sWidgets_content.shad_bl,
		sWidgets_ct_shad_sp		= royal_options.sWidgets_content.shad_sp,
		sWidgets_ct_shad_col	= royal_options.sWidgets_content.shad_col,
		sWidgets_ct_shad_col_tr	= royal_options.sWidgets_content.shad_col_tr,
		sWidgets_ct_shad_in		= royal_options.sWidgets_content.shad_in;

/* ----------------- Content General Options ----------------- */

	royalLivePreview( 'sWidgets_content', 'label', function() {
		royalLoading();
	});

	royalLivePreview( 'sWidgets_content', 'align', function( nValue ) {
		sWidgetsContentTxt.css( 'text-align', nValue );
	});


/* ----------------- Content Spacing Options ----------------- */

	royalLivePreview( 'sWidgets_content', 'padding_tp', function( nValue ) {
		sWidgetsContent.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'padding_rt', function( nValue ) {
		sWidgetsContent.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'padding_bt', function( nValue ) {
		sWidgetsContent.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'padding_lt', function( nValue ) {
		sWidgetsContent.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Content Styling Options ----------------- */

	royalLivePreview( 'sWidgets_content', 'bg_col', function( nValue ) {
		sWidgets_ct_bg_col = nValue;
		sWidgetsContent.css( 'background-color', royalHex2Rgba( sWidgets_ct_bg_col, sWidgets_ct_bg_col_tr ) );
	});

	royalLivePreview( 'sWidgets_content', 'bg_col_tr', function( nValue ) {
		sWidgets_ct_bg_col_tr = nValue;
		sWidgetsContent.css( 'background-color', royalHex2Rgba( sWidgets_ct_bg_col, sWidgets_ct_bg_col_tr ) );
	});

	royalLivePreview( 'sWidgets_content', 'txt_col', function( nValue ) {
		sWidgetsContentTxt.css( 'color', nValue );
	});


	sWidgetsContentLink.hover(function() {
		$(this).css( 'color', sWidgets_ct_link_hcol );
	}, function() {
		$(this).css( 'color', sWidgets_ct_link_col );
	});

	royalLivePreview( 'sWidgets_content', 'link_col', function( nValue ) {
		sWidgets_ct_link_col = nValue;
		sWidgetsContentLink.css( 'color', sWidgets_ct_link_col );
	});

	royalLivePreview( 'sWidgets_content', 'link_hcol', function( nValue ) {
		sWidgets_ct_link_hcol = nValue;
	});

	royalLivePreview( 'sWidgets_content', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			sWidgetsContent.css({
				'border-radius' : sWidgets_ct_rad + 'px'
			});

		} else {

			sWidgetsContent.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'sWidgets_content', 'radius', function( nValue ) {
		sWidgets_ct_rad = nValue;
		sWidgetsContent.css( 'border-radius', sWidgets_ct_rad + 'px' );
	});

	function sWidgetsContentShadow() {
		sWidgetsContent.css( 'box-shadow', royalShadow( [
			sWidgets_ct_shad_h,
			sWidgets_ct_shad_v,
			sWidgets_ct_shad_bl,
			sWidgets_ct_shad_sp,
			sWidgets_ct_shad_col,
			sWidgets_ct_shad_col_tr,
			sWidgets_ct_shad_in
		] ) );
	}

	royalLivePreview( 'sWidgets_content', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			sWidgetsContentShadow();
		} else {
			sWidgetsContent.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'sWidgets_content', 'shad_h', function( nValue ) {
		sWidgets_ct_shad_h = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_v', function( nValue ) {
		sWidgets_ct_shad_v = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_bl', function( nValue ) {
		sWidgets_ct_shad_bl = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_sp', function( nValue ) {
		sWidgets_ct_shad_sp = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_col', function( nValue ) {
		sWidgets_ct_shad_col = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_col_tr', function( nValue ) {
		sWidgets_ct_shad_col_tr = nValue;
		sWidgetsContentShadow();
	});

	royalLivePreview( 'sWidgets_content', 'shad_in', function( nValue ) {
		sWidgets_ct_shad_in = nValue;
		sWidgetsContentShadow();
	});


/* ----------------- Content Font Options ----------------- */

	royalGoogleFontsPreview( 'sWidgets_content', 'font_family', $('.sidebar-widget, .sid-block #s') );

	royalLivePreview( 'sWidgets_content', 'font_size', function( nValue ) {
		sWidgetsContentTxt.css( 'font-size', nValue +'px' );
		$( '.sid-block #s, .sid-block .search-icon' ).css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'line_height', function( nValue ) {
		sWidgetsContentTxt.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'letter_space', function( nValue ) {
		sWidgetsContentTxt.css( 'letter-spacing', nValue +'px' );
		$('.sid-block #s').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'font_weight', function( nValue ) {
		sWidgetsContentTxt.css( 'font-weight', nValue );
		$('.sid-block #s').css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'sWidgets_content', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			sWidgetsContentTxt.css( 'text-transform', 'uppercase' );
			sWidgetsContentTxt.find('#s').css( 'text-transform', 'uppercase' );
		} else {
			sWidgetsContentTxt.css( 'text-transform', 'none' );
			sWidgetsContentTxt.find('#s').css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'sWidgets_content', 'underline', function( nValue ) {

		if ( nValue === true ) {
			sWidgetsContentLink.css( 'text-decoration', 'underline' );
		} else {
			sWidgetsContentLink.css( 'text-decoration', 'none' );
		}

		sidebarEqual();

	});



/*
***************************************************************
* #Top & Footer Widgets
*************************************************************** 
*/

// define variables
	var fWidgetWrap						= $('.footer-widgets, .top-widgets'),
		fWidgetsBG 						= $('.top-widgets-bg, .footer-widgets'),
		fWidgets_gen_columns			= royal_options.fWidgets_general.columns,
		fWidgets_gen_gutter_horz		= royal_options.fWidgets_general.gutter_horz,
		fWidgets_gen_gutter_vert		= royal_options.fWidgets_general.gutter_vert,
		fWidgets_gen_bg_color			= royal_options.fWidgets_general.bg_color,
		fWidgets_gen_bg_color_tr		= royal_options.fWidgets_general.bg_color_tr,
		fWidgets_gen_bg_grad_angle 		= royal_options.fWidgets_general.bg_grad_angle,
		fWidgets_gen_bg_grad_col_1 		= royal_options.fWidgets_general.bg_grad_col_1,
		fWidgets_gen_bg_grad_col_1_tr 	= royal_options.fWidgets_general.bg_grad_col_1_tr,
		fWidgets_gen_bg_grad_col_1_ps 	= royal_options.fWidgets_general.bg_grad_col_1_ps,
		fWidgets_gen_bg_grad_col_2 		= royal_options.fWidgets_general.bg_grad_col_2,
		fWidgets_gen_bg_grad_col_2_tr 	= royal_options.fWidgets_general.bg_grad_col_2_tr,
		fWidgets_gen_bg_grad_col_2_ps 	= royal_options.fWidgets_general.bg_grad_col_2_ps,
		fWidgets_gen_bg_img 			= royal_options.fWidgets_general.bg_img,
		fWidgets_gen_bg_img_att 		= royal_options.fWidgets_general.bg_img_att,
		fWidgets_gen_bg_img_sz 			= royal_options.fWidgets_general.bg_img_sz,
		fWidgets_gen_rad				= royal_options.fWidgets_general.radius,
		fWidgets_gen_shad_h				= royal_options.fWidgets_general.shad_h,
		fWidgets_gen_shad_v				= royal_options.fWidgets_general.shad_v,
		fWidgets_gen_shad_bl			= royal_options.fWidgets_general.shad_bl,
		fWidgets_gen_shad_sp			= royal_options.fWidgets_general.shad_sp,
		fWidgets_gen_shad_col			= royal_options.fWidgets_general.shad_col,
		fWidgets_gen_shad_col_tr		= royal_options.fWidgets_general.shad_col_tr,
		fWidgets_gen_shad_in			= royal_options.fWidgets_general.shad_in;

	// border 4x live update
	var fWidgets_gen_bd_tp = [
			royal_options.fWidgets_general.bd_size_tp,
			royal_options.fWidgets_general.bd_style_tp,
			royal_options.fWidgets_general.bd_col_tp 
		],
		fWidgets_gen_bd_rt = [
			royal_options.fWidgets_general.bd_size_rt,
			royal_options.fWidgets_general.bd_style_rt,
			royal_options.fWidgets_general.bd_col_rt
		],
		fWidgets_gen_bd_bt = [
			royal_options.fWidgets_general.bd_size_bt,
			royal_options.fWidgets_general.bd_style_bt,
			royal_options.fWidgets_general.bd_col_bt
		],
		fWidgets_gen_bd_lt = [
			royal_options.fWidgets_general.bd_size_lt,
			royal_options.fWidgets_general.bd_style_lt,
			royal_options.fWidgets_general.bd_col_lt
		];

/* ----------------- General Options ----------------- */

	royalLivePreview( 'fWidgets_general', 'inc_blog', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'inc_blog_single', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'inc_portfolio', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'inc_portfolio_single', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'inc_contact', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'inc_default', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_general', 'icon', function( nValue ) {
		$('.top-widgets-fold-btn').find('i').removeAttr('class');
		$('.top-widgets-fold-btn').find('i').addClass( 'fa fa-' + nValue );
	});


/* ----------------- Spacing Options ----------------- */

	royalLivePreview( 'fWidgets_general', 'padding_tp', function( nValue ) {
		fWidgetWrap.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_general', 'padding_rt', function( nValue ) {
		fWidgetWrap.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_general', 'padding_bt', function( nValue ) {
		fWidgetWrap.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_general', 'padding_lt', function( nValue ) {
		fWidgetWrap.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});

	function topFootWidgetsWidth() {

		// reset
		$('.top-widget, .footer-widget').css({
			'width' 		: '',
			'margin-right' 	: 'initial'
		});

		$('.top-widget, .footer-widget').css({
			'width' : '-webkit-calc( (100% - ( '+ fWidgets_gen_gutter_horz +'px * '+ ( fWidgets_gen_columns - 1 ) +' ) ) / '+ fWidgets_gen_columns +' )',
			'width' : 'calc( (100% - ( '+ fWidgets_gen_gutter_horz +'px * '+ ( fWidgets_gen_columns - 1 ) +' ) ) / '+ fWidgets_gen_columns +' )'
		});
		
		$('.top-widget, .footer-widget').css({
			'margin-right' 	: fWidgets_gen_gutter_horz +'px',
			'margin-bottom' : fWidgets_gen_gutter_vert +'px'
		});

		$('.top-widget:nth-child('+ fWidgets_gen_columns +'n)').css( 'margin-right', '0' );
		$('.footer-widget:nth-child('+ fWidgets_gen_columns +'n)').css( 'margin-right', '0' );

	}
	
	royalLivePreview( 'fWidgets_general', 'columns', function( nValue ) {
		fWidgets_gen_columns = nValue;

		topFootWidgetsWidth();
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_general', 'gutter_horz', function( nValue ) {
		fWidgets_gen_gutter_horz = nValue;

		topFootWidgetsWidth();
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_general', 'gutter_vert', function( nValue ) {
		fWidgets_gen_gutter_vert = nValue;

		topFootWidgetsWidth();
		sidebarEqual();
	});


/* ----------------- Styling Options ----------------- */

	royalLivePreview( 'fWidgets_general', 'background', function( nValue ) {
		
		royalBackgroundSelect( 
			fWidgetsBG,
			nValue,
			[
				fWidgets_gen_bg_color,
				fWidgets_gen_bg_color_tr
			], [
				fWidgets_gen_bg_grad_angle,
				fWidgets_gen_bg_grad_col_1,
				fWidgets_gen_bg_grad_col_1_tr,
				fWidgets_gen_bg_grad_col_1_ps,
				fWidgets_gen_bg_grad_col_2,
				fWidgets_gen_bg_grad_col_2_tr,
				fWidgets_gen_bg_grad_col_2_ps,
			], [
				fWidgets_gen_bg_img,
				fWidgets_gen_bg_img_sz,
				fWidgets_gen_bg_img_att
			]
		);

	});

	royalLivePreview( 'fWidgets_general', 'bg_color', function( nValue ) {
		fWidgets_gen_bg_color = nValue;
		fWidgetsBG.css( 'background-color', royalHex2Rgba( fWidgets_gen_bg_color, fWidgets_gen_bg_color_tr ) );
		$('.top-widgets-fold-btn i').css( 'background-image', 'linear-gradient(225deg, '+ royalHex2Rgba( fWidgets_gen_bg_color, fWidgets_gen_bg_color_tr ) +' 50%, rgba(255, 255, 255, 0) 50%)' );
	});
	royalLivePreview( 'fWidgets_general', 'bg_color_tr', function( nValue ) {
		fWidgets_gen_bg_color_tr = nValue;
		fWidgetsBG.css( 'background-color', royalHex2Rgba( fWidgets_gen_bg_color, fWidgets_gen_bg_color_tr ) );
		$('.top-widgets-fold-btn i').css( 'background-image', 'linear-gradient(225deg, '+ royalHex2Rgba( fWidgets_gen_bg_color, fWidgets_gen_bg_color_tr ) +' 50%, rgba(255, 255, 255, 0) 50%)' );

	});

	function fWidgetWrapGradient() {
		fWidgetsBG.css({
			'background-image' : royalGradient( [ 
				fWidgets_gen_bg_grad_angle,
				fWidgets_gen_bg_grad_col_1,
				fWidgets_gen_bg_grad_col_1_tr,
				fWidgets_gen_bg_grad_col_1_ps,
				fWidgets_gen_bg_grad_col_2,
				fWidgets_gen_bg_grad_col_2_tr,
				fWidgets_gen_bg_grad_col_2_ps
			] )
		});
	}

	royalLivePreview( 'fWidgets_general', 'bg_grad_angle', function( nValue ) {
		fWidgets_gen_bg_grad_angle = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_1', function( nValue ) {
		fWidgets_gen_bg_grad_col_1 = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_1_tr', function( nValue ) {
		fWidgets_gen_bg_grad_col_1_tr = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_1_ps', function( nValue ) {
		fWidgets_gen_bg_grad_col_1_ps = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_2', function( nValue ) {
		fWidgets_gen_bg_grad_col_2 = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_2_tr', function( nValue ) {
		fWidgets_gen_bg_grad_col_2_tr = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_grad_col_2_ps', function( nValue ) {
		fWidgets_gen_bg_grad_col_2_ps = nValue;
		fWidgetWrapGradient();
	});

	royalLivePreview( 'fWidgets_general', 'bg_img', function( nValue ) {
		fWidgets_gen_bg_img = nValue;

		fWidgetsBG.css({
			'background-image' : 'url( '+ fWidgets_gen_bg_img +' )'
		});
	});

	royalLivePreview( 'fWidgets_general', 'bg_img_sz', function( nValue ) {
		fWidgets_gen_bg_img_sz = nValue;
		royalBgImgSize( fWidgetsBG, fWidgets_gen_bg_img_sz );
	});

	royalLivePreview( 'fWidgets_general', 'bg_img_att', function( nValue ) {
		fWidgets_gen_bg_img_att = nValue;

		fWidgetsBG.css({
			'background-attachment' : fWidgets_gen_bg_img_att
		});
	});

	royalLivePreview( 'fWidgets_general', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder4x( fWidgetWrap, fWidgets_gen_bd_tp, fWidgets_gen_bd_rt, fWidgets_gen_bd_bt, fWidgets_gen_bd_lt );
		} else {
			fWidgetWrap.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( fWidgetWrap, 'fWidgets_general', 'top', fWidgets_gen_bd_tp, 'sidebarEqual' );

	royalBorderLivePreview( fWidgetWrap, 'fWidgets_general', 'right', fWidgets_gen_bd_rt, 'sidebarEqual' );

	royalBorderLivePreview( fWidgetWrap, 'fWidgets_general', 'bottom', fWidgets_gen_bd_bt, 'sidebarEqual' );

	royalBorderLivePreview( fWidgetWrap, 'fWidgets_general', 'left', fWidgets_gen_bd_lt, 'sidebarEqual' );

	royalLivePreview( 'fWidgets_general', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			fWidgetWrap.css({
				'border-radius' : fWidgets_gen_rad + 'px'
			});

		} else {

			fWidgetWrap.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'fWidgets_general', 'radius', function( nValue ) {
		fWidgets_gen_rad = nValue;
		fWidgetWrap.css( 'border-radius', fWidgets_gen_rad + 'px' );
	});

	function fWidgetWrapShadow() {
		fWidgetWrap.css( 'box-shadow', royalShadow( [
			fWidgets_gen_shad_h,
			fWidgets_gen_shad_v,
			fWidgets_gen_shad_bl,
			fWidgets_gen_shad_sp,
			fWidgets_gen_shad_col,
			fWidgets_gen_shad_col_tr,
			fWidgets_gen_shad_in
		] ) );
	}

	royalLivePreview( 'fWidgets_general', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			fWidgetWrapShadow();
		} else {
			fWidgetWrap.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'fWidgets_general', 'shad_h', function( nValue ) {
		fWidgets_gen_shad_h = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_v', function( nValue ) {
		fWidgets_gen_shad_v = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_bl', function( nValue ) {
		fWidgets_gen_shad_bl = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_sp', function( nValue ) {
		fWidgets_gen_shad_sp = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_col', function( nValue ) {
		fWidgets_gen_shad_col = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_col_tr', function( nValue ) {
		fWidgets_gen_shad_col_tr = nValue;
		fWidgetWrapShadow();
	});

	royalLivePreview( 'fWidgets_general', 'shad_in', function( nValue ) {
		fWidgets_gen_shad_in = nValue;
		fWidgetWrapShadow();
	});


// define variables
	var fWidgetsTitle 	= $('.top-widget-title, .foot-widget-title'),
		fWidgetsTitleIn = fWidgetsTitle.find('span');

	// border 1x live update
	var fWidgets_tt_bd_bt = [
			royal_options.fWidgets_title.bd_size_bt,
			royal_options.fWidgets_title.bd_style_bt,
			royal_options.fWidgets_title.bd_col_bt 
		];

/* ----------------- Title General Options ----------------- */

	royalLivePreview( 'fWidgets_title', 'label', function( nValue ) {

		if ( nValue === true ) {
			fWidgetsTitle.css( 'display', 'block' );
		} else {
			fWidgetsTitle.css( 'display', 'none' );
		}

		sidebarEqual();

	});

	royalLivePreview( 'fWidgets_title', 'align', function( nValue ) {
		fWidgetsTitle.css( 'text-align', nValue );
	});


/* ----------------- Title Spacing Options ----------------- */

	royalLivePreview( 'fWidgets_title', 'padding_bt', function( nValue ) {
		fWidgetsTitleIn.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_title', 'margin_bt', function( nValue ) {
		fWidgetsTitleIn.css( 'margin-bottom', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Title Styling Options ----------------- */

	royalLivePreview( 'fWidgets_title', 'color', function( nValue ) {
		fWidgetsTitle.css( 'color', nValue );
		fWidgetsTitle.find('a').css( 'color', nValue );
	});


	royalLivePreview( 'fWidgets_title', 'border_label', function( nValue ) {

		if ( nValue === true ) {
			royalBorder1x( fWidgetsTitleIn, 'bottom', fWidgets_tt_bd_bt );
		} else {
			fWidgetsTitleIn.css( 'border', 'none' );
		}

		sidebarEqual();

	});

	royalBorderLivePreview( fWidgetsTitleIn, 'fWidgets_title', 'bottom', fWidgets_tt_bd_bt, 'sidebarEqual' );

	royalLivePreview( 'fWidgets_title', 'bd_full_width', function( nValue ) {
		if ( nValue === true ) {
			fWidgetsTitleIn.css( 'display', 'block' );
		} else {
			fWidgetsTitleIn.css( 'display', 'inline-block' );
		}
	});


/* ----------------- Title Font Options ----------------- */

	royalGoogleFontsPreview( 'fWidgets_title', 'font_family', fWidgetsTitle );

	royalLivePreview( 'fWidgets_title', 'font_size', function( nValue ) {
		fWidgetsTitle.css( 'font-size', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_title', 'line_height', function( nValue ) {
		fWidgetsTitle.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_title', 'letter_space', function( nValue ) {
		fWidgetsTitle.css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_title', 'font_weight', function( nValue ) {
		fWidgetsTitle.css( 'font-weight', nValue );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_title', 'italic', function( nValue ) {
		if ( nValue === true ) {
			fWidgetsTitle.css( 'font-style', 'italic' );
		} else {
			fWidgetsTitle.css( 'font-style', 'normal' );
		}
	});

	royalLivePreview( 'fWidgets_title', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			fWidgetsTitle.css( 'text-transform', 'uppercase' );
		} else {
			fWidgetsTitle.css( 'text-transform', 'none' );
		}

		sidebarEqual();

	});


// define variables
	var fWidgetsContent			= $('.top-widget > ul, .top-widget > div, .footer-widget > ul, .footer-widget > div'),
		fWidgetsContentTxt		= $('.top-widget, .footer-widget'),
		fWidgetsContentLink		= $('.top-widget .tagcloud a, .top-widget .textwidget a, .top-widget ul li a, .top-widget tfoot tr td a, .top-widget tbody tr td a, .footer-widget .tagcloud a, .footer-widget .textwidget a, .footer-widget ul li a, .footer-widget tfoot tr td a, .footer-widget tbody tr td a'),
		fWidgets_ct_bg_col		= royal_options.fWidgets_content.bg_col,
		fWidgets_ct_bg_col_tr	= royal_options.fWidgets_content.bg_col_tr,
		fWidgets_ct_link_col	= royal_options.fWidgets_content.link_col,
		fWidgets_ct_link_hcol	= royal_options.fWidgets_content.link_hcol,
		fWidgets_ct_rad			= royal_options.fWidgets_content.radius,
		fWidgets_ct_shad_h		= royal_options.fWidgets_content.shad_h,
		fWidgets_ct_shad_v		= royal_options.fWidgets_content.shad_v,
		fWidgets_ct_shad_bl		= royal_options.fWidgets_content.shad_bl,
		fWidgets_ct_shad_sp		= royal_options.fWidgets_content.shad_sp,
		fWidgets_ct_shad_col	= royal_options.fWidgets_content.shad_col,
		fWidgets_ct_shad_col_tr	= royal_options.fWidgets_content.shad_col_tr,
		fWidgets_ct_shad_in		= royal_options.fWidgets_content.shad_in;

/* ----------------- Content General Options ----------------- */

	royalLivePreview( 'fWidgets_content', 'label', function() {
		royalLoading();
	});

	royalLivePreview( 'fWidgets_content', 'align', function( nValue ) {
		fWidgetsContentTxt.css( 'text-align', nValue );
	});


/* ----------------- Content Spacing Options ----------------- */

	royalLivePreview( 'fWidgets_content', 'padding_tp', function( nValue ) {
		fWidgetsContent.css( 'padding-top', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'padding_rt', function( nValue ) {
		fWidgetsContent.css( 'padding-right', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'padding_bt', function( nValue ) {
		fWidgetsContent.css( 'padding-bottom', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'padding_lt', function( nValue ) {
		fWidgetsContent.css( 'padding-left', nValue +'px' );
		sidebarEqual();
	});


/* ----------------- Content Styling Options ----------------- */

	royalLivePreview( 'fWidgets_content', 'bg_col', function( nValue ) {
		fWidgets_ct_bg_col = nValue;
		fWidgetsContent.css( 'background-color', royalHex2Rgba( fWidgets_ct_bg_col, fWidgets_ct_bg_col_tr ) );
	});

	royalLivePreview( 'fWidgets_content', 'bg_col_tr', function( nValue ) {
		fWidgets_ct_bg_col_tr = nValue;
		fWidgetsContent.css( 'background-color', royalHex2Rgba( fWidgets_ct_bg_col, fWidgets_ct_bg_col_tr ) );
	});

	royalLivePreview( 'fWidgets_content', 'txt_col', function( nValue ) {
		fWidgetsContentTxt.css( 'color', nValue );
		$('.top-widgets-fold-btn i').css( 'color', nValue );
	});

	fWidgetsContentLink.hover(function() {
		$(this).css( 'color', fWidgets_ct_link_hcol );
	}, function() {
		$(this).css( 'color', fWidgets_ct_link_col );
	});

	royalLivePreview( 'fWidgets_content', 'link_col', function( nValue ) {
		fWidgets_ct_link_col = nValue;
		fWidgetsContentLink.css( 'color', fWidgets_ct_link_col );
	});

	royalLivePreview( 'fWidgets_content', 'link_hcol', function( nValue ) {
		fWidgets_ct_link_hcol = nValue;
	});

	royalLivePreview( 'fWidgets_content', 'radius_label', function( nValue ) {
		if ( nValue === true ) {

			fWidgetsContent.css({
				'border-radius' : fWidgets_ct_rad + 'px'
			});

		} else {

			fWidgetsContent.css( 'border-radius', '0' );	

		}
	});

	royalLivePreview( 'fWidgets_content', 'radius', function( nValue ) {
		fWidgets_ct_rad = nValue;
		fWidgetsContent.css( 'border-radius', fWidgets_ct_rad + 'px' );
	});

	function fWidgetsContentShadow() {
		fWidgetsContent.css( 'box-shadow', royalShadow( [
			fWidgets_ct_shad_h,
			fWidgets_ct_shad_v,
			fWidgets_ct_shad_bl,
			fWidgets_ct_shad_sp,
			fWidgets_ct_shad_col,
			fWidgets_ct_shad_col_tr,
			fWidgets_ct_shad_in
		] ) );
	}

	royalLivePreview( 'fWidgets_content', 'shadow_label', function( nValue ) {
		if ( nValue === true ) {
			fWidgetsContentShadow();
		} else {
			fWidgetsContent.css( 'box-shadow', 'none' );	
		}
	});

	royalLivePreview( 'fWidgets_content', 'shad_h', function( nValue ) {
		fWidgets_ct_shad_h = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_v', function( nValue ) {
		fWidgets_ct_shad_v = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_bl', function( nValue ) {
		fWidgets_ct_shad_bl = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_sp', function( nValue ) {
		fWidgets_ct_shad_sp = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_col', function( nValue ) {
		fWidgets_ct_shad_col = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_col_tr', function( nValue ) {
		fWidgets_ct_shad_col_tr = nValue;
		fWidgetsContentShadow();
	});

	royalLivePreview( 'fWidgets_content', 'shad_in', function( nValue ) {
		fWidgets_ct_shad_in = nValue;
		fWidgetsContentShadow();
	});


/* ----------------- Content Font Options ----------------- */

	royalGoogleFontsPreview( 'fWidgets_content', 'font_family', $('.top-widget, .top-widget #s, .footer-widget, .footer-widget #s') );

	royalLivePreview( 'fWidgets_content', 'font_size', function( nValue ) {
		fWidgetsContentTxt.css( 'font-size', nValue +'px' );
		sidebarEqual();
		$( '.top-widget #s, .top-widget .search-icon, .footer-widget #s, .footer-widget .search-icon' ).css( 'font-size', nValue +'px' );
	});

	royalLivePreview( 'fWidgets_content', 'line_height', function( nValue ) {
		fWidgetsContentTxt.css( 'line-height', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'letter_space', function( nValue ) {
		fWidgetsContentTxt.css( 'letter-spacing', nValue +'px' );
		$('.top-widget #s, .footer-widget #s').css( 'letter-spacing', nValue +'px' );
		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'font_weight', function( nValue ) {
		fWidgetsContentTxt.css( 'font-weight', nValue );
		$('.top-widget #s, .footer-widget #s').css( 'font-weight', nValue );

		sidebarEqual();
	});

	royalLivePreview( 'fWidgets_content', 'uppercase', function( nValue ) {

		if ( nValue === true ) {
			fWidgetsContentTxt.css( 'text-transform', 'uppercase' );
			fWidgetsContentTxt.find('#s').css( 'text-transform', 'uppercase' );
		} else {
			fWidgetsContentTxt.css( 'text-transform', 'none' );
			fWidgetsContentTxt.find('#s').css( 'text-transform', 'none' );
		}
		
		sidebarEqual();

	});

	royalLivePreview( 'fWidgets_content', 'underline', function( nValue ) {
		if ( nValue === true ) {
			fWidgetsContentLink.css( 'text-decoration', 'underline' );
		} else {
			fWidgetsContentLink.css( 'text-decoration', 'none' );
		}
	});




/*
***************************************************************
* #Custom CSS | JS/GA
***************************************************************
*/

	royalLivePreview( 'custom_css', 'textarea', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});

	royalLivePreview( 'custom_js', 'textarea', function( nValue ) {
		if ( nValue.match('___$') ) {
			royalLoading();
		}
	});



/*
***************************************************************
* #Reusable Functions
***************************************************************
*/

// Live Preview - See changes in real time
	function royalLivePreview( db, name, changeFunc ) {

		// wp.customize object - works only on 'transport' => 'postMessage'
		wp.customize( 'royal_'+ db +'['+ name +']', function( value ) {

			value.bind( function( nValue ) {

				// don't trigger when new design is loading
				if ( $('.style-load').length > 0 ) {
					return;
				}

				// callback function
				changeFunc( nValue );

			} );

		} );

	}

// convert hex color to rgba
	function royalHex2Rgba( hex, opacity ) {
		if ( typeof(hex) === 'undefined' ) {
		 return;
		}

	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex ),
	    	rgba = 'rgba( '+ parseInt( result[1], 16 ) +', '+ parseInt( result[2], 16 ) +', '+ parseInt( result[3], 16 ) +', '+ opacity +')';

	    // return converted RGB
	    return rgba;

	}

// background type select - used to change backgrounds in live
	function royalBackgroundSelect( selector, value, color, grad, img ) {

		if ( value === 'color' ) {

			selector.css({
				'background-color' : royalHex2Rgba( color[0], color[1] ),
				'background-image' : 'none'
			});

		} else if ( value === 'gradient' ) {

			selector.css({
				'background-color' : 'transparent',
				'background-image' : royalGradient( [ grad[0], grad[1], grad[2], grad[3], grad[4], grad[5], grad[6] ] )
			});

		} else {

			selector.css({
				'background-image' : 'url('+ img[0] +')'
			});

			if ( img[1] == 'cover' ) {

				selector.css({
					'background-repeat' 	: 'no-repeat',
					'background-position' 	: 'center center',
					'background-size' 		: 'cover'
				});	

			} else {

				selector.css({
					'background-repeat' 	: 'repeat',
					'background-position' 	: 'left top'
				});

			}

		}

	} // end royalBackgroundSelect()

// gradient generator
	function royalGradient( args ) {
		return 'linear-gradient( '+ args[0] +'deg, '+ royalHex2Rgba( args[1], args[2] ) +' '+ args[3] +'%, '+ royalHex2Rgba( args[4], args[5] ) +' '+ args[6] +'% )';
	}

// background image size
	function royalBgImgSize( selector, value ) {

		if ( value == 'cover' ) {

			selector.css({
				'background-size' 		: 'cover',
				'background-repeat' 	: 'no-repeat',
				'background-position' 	: 'center center'
			});

		} else {

			selector.css({
				'background-size' 		: 'auto',
				'background-repeat' 	: 'repeat',
				'background-position' 	: 'left top'
			});

		}

	}

// border 4x - used to disable/enable borders
	function royalBorder4x( selector, top, right, bottom, left ) {

		selector.css({
			'border-top' 	: top[0] +'px '+ top[1] +' '+ top[2],
			'border-right' 	: right[0] +'px '+ right[1] +' '+ right[2],
			'border-bottom' : bottom[0] +'px '+ bottom[1] +' '+ bottom[2],
			'border-left' 	: left[0] +'px '+ left[1] +' '+ left[2],
		});

	}

// border 1x - used to disable/enable single border
	function royalBorder1x( selector, direction, args ) {
		selector.css( 'border-'+ direction, args[0] +'px '+ args[1] +' '+ args[2] );
	}

// border live preview depending on direction
	function royalBorderLivePreview( selector, db, direction, args, scripts ) {

		// short direction
		var dir;
		if ( direction === 'top') {
			dir = 'tp';
		} else if ( direction === 'right') {
			dir = 'rt';
		} else if ( direction === 'bottom') {
			dir = 'bt';
		} else {
			dir = 'lt';
		}

		// size
		royalLivePreview( db, 'bd_size_'+ dir, function( nValue ) {

			args[0] = nValue;
			selector.css('border-'+ direction, args[0] +'px '+ args[1] +' '+ args[2] );

			// run adjustment functions
			if ( scripts.match('sidebarTopWidth') ) {
				sidebarTopWidth();
			}

			if ( scripts.match('sidebarTopHeight') ) {
				sidebarTopHeight();
			}

			if ( scripts.match('isotopeFn') ) {
				isotopeFn('portfolio');
				isotopeFn('blog');
			}

			if ( scripts.match('projectInfoEqual') ) {
				projectInfoEqual();
			}

			if ( scripts.match('sidebarEqual') ) {
				sidebarEqual();
			}

			if ( scripts.match('royalSimilarItems') ) {
				royalSimilarItems();
			}

			if ( scripts.match('fixedSidebarHeight') ) {
				fixedSidebarHeight();
			}

			if ( scripts.match('fixedCopyAndSoc') ) {
				fixedCopyAndSoc();
			}

			if ( scripts.match('menuActiveItems') ) {
				menuActiveItems();
			}

			if ( scripts.match('filterActiveItems') ) {
				filterActiveItems();
			}
			
		});

		// style
		royalLivePreview( db, 'bd_style_'+ dir, function( nValue ) {
			args[1] = nValue;
			selector.css( 'border-'+ direction, args[0] +'px '+ args[1] +' '+ args[2] );
		});

		// color
		royalLivePreview( db, 'bd_col_'+ dir, function( nValue ) {

			args[2] = nValue;
			selector.css( 'border-'+ direction, args[0] +'px '+ args[1] +' '+ args[2] );

			if ( scripts.match('menuActiveItems') ) {
				menuActiveItems();
			}

			if ( scripts.match('filterActiveItems') ) {
				filterActiveItems();
			}

		});

	}

// box shadow
	function royalShadow( args ) {

		if ( args[6] === true || args[6] === 'true' ) {
			args[6] = 'inset';
		} else {
			args[6] = '';
		}

		return args[0] +'px '+ args[1] +'px '+ args[2] +'px '+ args[3] +'px '+ royalHex2Rgba( args[4], args[5] ) + args[6];

	}

// Text shadow
	function royalTextShadow( args ) {
		return args[0] +'px '+ args[1] +'px '+ args[2] +'px '+ args[3];
	}

// google fonts live preview
	function royalGoogleFontsPreview( db, name, selector ) {

		// get subsets from database
		var label 		= royal_options.typography.subsets_label,
			latin 		= royal_options.typography.latin_subset,
			cyrillic 	= royal_options.typography.cyrillic_subset,
			greek 		= royal_options.typography.greek_subset,
			vietnamese 	= royal_options.typography.vietnamese_subset;

		// subsets in array
		var subsets = [];
		if ( label === true ) {

			if ( latin === true ) {
				subsets.push('latin');
				subsets.push('latin-ext');
			}
			if ( cyrillic === true ) {
				subsets.push('cyrillic');
				subsets.push('cyrillic-ext');
			}	
			if ( greek === true ) {
				subsets.push('greek');
				subsets.push('greek-ext');
			}
			if ( vietnamese === true ) {
				subsets.push('vietnamese');
			}

			subsets = '&subset='+ subsets.join(',');

		} else {
			subsets = '';
		}


		// font live preview
		royalLivePreview( db, name, function( nValue ) {

			// get font link and CSS font family value
			var fontId = nValue.split('+').join('_'),
				fontLink = '<link id="royal_enqueue_'+ fontId +'-css" rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family='+ nValue +':100,200,300,400,500,600,700,800,900'+ subsets +'">',
				familyCSS = nValue.split('+').join(' ');

			// load font if it's not already loaded
			if ( $('head').find( '#royal_enqueue_'+ fontId +'-css' ).length === 0 ) {
				$('head').append( fontLink );
			}

			selector.css( 'font-family', '"'+ familyCSS +'", "sans-serif"' );

		});

	}

// get custom value
	function royalGetValue(value) {
		return value.slice( value.indexOf('[') + 1, value.indexOf(']'));
	}


/*
***************************************************************
* #Adjustments
***************************************************************
*/

// Sidebar Top Width
	function sidebarTopWidth() {

		if ( body.hasClass('sidebar-top-fixed') ) {

			if( parseInt( sidebarTop.attr('data-fullwidth'), 10 ) === 1) {

				sidebarTop.children('div').css({
					'width'  	: mainWrap.outerWidth() +'px',
					'margin' 	: '0 auto'
				});

				sidebarTop.css({
					'left'		: '0',
					'width' 	: '100%',
					'max-width' : 'none'
				});

			} else {

				sidebarTop.css({
					'width' 	: mainWrap.outerWidth() +'px',
					'max-width' : 'none',
					'left' 		: 'auto',
				});

				// reset
				sidebarTop.children('div').css({
					'width' 	: '100%',
					'margin' 	: '0 auto'
				});

			}

		} else {

			sidebarTop.css( 'width', '100%' );

			sidebarTop.children('div').css({
				'width' 	: '100%',
				'margin' 	: '0 auto'
			});

		}

	}

// Sidebar Top Height
	function sidebarTopHeight() {

		var outerHeight = parseInt( sidebarTop.outerHeight(), 10 ) + parseInt( sidebarTop.attr('data-margin'), 10 ) - 1;

		// reset
		mainWrap.css( 'margin-top', '0' );

		if ( body.hasClass('sidebar-top-fixed') ) {
			sidebarTop.css( 'position', 'fixed' );
			mainWrap.css( 'margin-top', outerHeight +'px' );
		} else {
			sidebarTop.css( 'position', 'static' );
		}

	}

// Sidebar equal height to Content (#main-wrap)
	var CopyAndSoc = $('.copy-and-soc');

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

	} // sidebarEqual()

// fixedSidebarHeight(), small fix for sidebar scroll
	function fixedSidebarHeight() {

		if ( body.hasClass('sidebar-fixed') && body.hasClass('copy-fixed') && CopyAndSoc.css('display') !== 'none' && ! body.hasClass('sidebar-equal') ) {

			var sidebarHeight = $(window).height() - CopyAndSoc.outerHeight();

			if ( body.hasClass('admin-bar') ) {
				sidebarHeight -= 32;
			}

			sidebar.outerHeight( sidebarHeight );
			sidebar.perfectScrollbar('update');

		} else {
			sidebar.css( 'height', '100%' );
		}

	} // end fixedSidebarHeight()

// fixedCopyAndSoc(), small fix for sidebar height
	function fixedCopyAndSoc() {

		// HTML
		if ( ! body.hasClass('sidebar-fixed') && body.hasClass('copy-fixed') && $('.tmp-copy-soc').length === 0 ) {
			sidebar.append('<div class="tmp-copy-soc"></div>');
		}

		// CSS
		if ( CopyAndSoc.css('display') !== 'none' ) {
			$('.tmp-copy-soc').height( CopyAndSoc.outerHeight() );
		} else {
			$('.tmp-copy-soc').height( 0 );
		}
		
	}

// isotope function
	function isotopeFn ( page ) {

	// define variables
		var bodyWidth 	= $('#page-wrap').width(),
			container 	= $('#'+ page +'-container'),
			item 		= $('.'+ page +'-post'),
			itemVisible = item.filter(":visible"),
			layout 		= ( container.attr('data-layout') !== '' ) ? container.attr('data-layout') : 'masonry',
			gutterHorz 	= parseInt( container.attr('data-gutter-horz'), 10 ),
			gutterVert 	= parseInt( container.attr('data-gutter-vert'), 10 ),
			columns 	= 0,
			x			= 0,
			columnsRate = container.attr('data-columns-rate'),
			contWidth 	= Math.floor( container.width() + gutterHorz ),
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
			} else if ( $('#sidebar, #sidebar-top').css('display') === 'none' ) {
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
			var thisHieght = $(this).outerHeight(),
				thisTop = parseInt( $(this).css('top') , 10 );

			if ( ( index + 1 ) % columns === 0 ) {
				$(this).addClass('rf-last-item');
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

				if ( parseInt( $(this).css('top') ) === maxTop  ) {
					$(this).addClass('rf-last-row');
				}

				$(this).css('min-height', maxHieght);

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

	} // end isotopeFn()

// isotope masonry-metro gutter
	function masonryMetroGutter( page, gutter, pRight, pLeft ) {

		if ( $('#'+ page +'-container').data('layout') === 'masonry-metro' ) {

			// remove if exists
			$('head').children('#'+ page +'-masonry-metro').remove();

			// -1px for correct adjustment
			var metro2xPixel = ' - 1px ';
			if ( parseInt( gutter, 10 ) === 0 ) {
				metro2xPixel = '';
			}

			// append
			$('head').append('\
				<style id="'+ page +'-masonry-metro">\
					.'+ page +'-grid-sizer,\
					.'+ page +'-post.post-width1x {\
						width: -webkit-calc( (100% - '+ pRight +'px - '+ pLeft +'px - '+ gutter +'.1px * 2) / 3 );\
						width: calc( (100% - '+ pRight +'px - '+ pLeft +'px - '+ gutter +'.1px * 2) / 3 );\
					}\
					.'+ page +'-post.post-width2x {\
						width: -webkit-calc( ( (100% - '+ pRight +'px - '+ pLeft +'px) * 2 / 3 ) - '+ gutter +'.1px / 3'+ metro2xPixel +');\
						width: calc( ( (100% - '+ pRight +'px - '+ pLeft +'px) * 2 / 3 ) - '+ gutter +'.1px / 3'+ metro2xPixel +');\
					}\
				</style>\
				\
			');

		}

	} // end masonryMetroGutter()

// Project Info equal height to portfolio content
	var projectInfo = $('.project-info');
	
	function projectInfoEqual() {

		var portfolioSingleHeight 	= $('.single-wrap').height(),
		 	SingleContentHeight 	= $('.single-content-wrap').outerHeight();

		if ( body.hasClass('project-info-equal') ) {

			projectInfo.css( 'min-height', '' );
			projectInfo.css( 'min-height', portfolioSingleHeight +'px' );

			if ( body.hasClass('project-info-below-right') && ! body.hasClass('single-header-below-p') ) {
				projectInfo.css( 'min-height','');
				projectInfo.css( 'min-height', SingleContentHeight +'px' );

			} else if ( body.hasClass('project-info-below-right') && body.hasClass('single-header-below-p') ) {
				projectInfo.css( 'min-height','');
				projectInfo.css( 'min-height', SingleContentHeight + $('.single-header').outerHeight()  +'px' );
			}

		} else {

			projectInfo.css( 'min-height', '' );

		}

	} // end projectInfoEqual()

// hide empty blocks
	function royalHideEmpty() {
		$('.post-text-wrap, .media-hovers').each(function() {

			// show at first
			$(this).show();

			var count = 0;

			$(this).children().not('.clear').each(function() {
				if ( $(this).css('display') !== 'none' ) {
					count += 1;
				}
			});

			// if current block has visible children
			if ( $(this).children().length === 0 || count < 1 ) {
				$(this).hide();
			}

		});

	} // end royalHideEmpty()

// hide meta separators
	function royalHideSeparators() {

		$('.likes-and-comments, .post-meta-info').each(function() {
			$(this).find('.meta-sep').show();
		});

		$('.likes-and-comments, .post-meta-info').each(function() {
			$(this).children().not(':hidden').last().find('.meta-sep').hide();
		});

	}

// royalSharingIcons(), show/hide - hover | click
	function royalSharingIcons( post, value ) {

		var shareWrap = $( '.'+ post ).find('.social-share-wrap'),
			share 	  = shareWrap.find('.social-share');

		// reset
		shareWrap.children('i').show();

		if ( value === 'hover' ) {

			// hide first
			share.hide();

			// open on hover
			shareWrap.hover(function() {
				$(this).find('.social-share').stop().fadeIn();
			}, function() {
				$(this).find('.social-share').stop().fadeOut();
			});

		} else if ( value === 'click' ) {

			// reset hover
			shareWrap.hover(function() {
				$(this).find('.social-share').stop().fadeOut();
			}, function() {
				$(this).find('.social-share').stop().fadeOut();
			});

			// hide first
			share.hide();

			// show on click
			shareWrap.click(function() {
				$(this).find('.social-share').stop().fadeIn();
			});

		} else {

			// reset hover
			shareWrap.hover(function() {
				$(this).find('.social-share').stop().fadeIn();
			}, function() {
				$(this).find('.social-share').stop().fadeIn();
			});

			// show icons already
			shareWrap.children('i').hide();
			share.show();

		}

	} // end royalSharingIcons()

// Similar items - jcarousel
	function royalSimilarItems( click ) {

		setTimeout(function() {

			$('.jcarousel').on('jcarousel:create jcarousel:reload', function() {
				
			var bodyWidth = $('.inner-content-wrap').width(),
				width 	  = $(this).innerWidth(),
				colRate   = parseInt( $('.similar-items').attr('data-columns-rate'), 10 );

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

		    $(this).jcarousel('items').css('width', width + 'px');

		    }).jcarousel({
		       wrap: 'circular'

		    }).jcarouselAutoscroll({
		            interval: parseInt( $('.similar-items').attr('data-interval'), 10 ),
		            target: '+=1',
		            autostart: $('.similar-items').attr('data-autostart')
		    });

			$('.jcarousel').jcarousel({
			    animation: parseInt( $('.similar-items').attr('data-animation'), 10 )
			});

			$('.jcarousel-prev').jcarouselControl({
			    target: '-=1'
			});

			$('.jcarousel-next').jcarouselControl({
			    target: '+=1'
			});

			if ( click === true ) {

				$('.jcarousel').jcarousel('reload').fadeOut().fadeIn();

				setTimeout(function() {
					$('.jcarousel-next').trigger('click');
				}, 500 );
			}

		}, 300 );

	} // end royalSimilarItems()

// google maps live preview
	function royalGoogleMaps() {
		$('.google-map-wrap').each( function() {
			
			// define variables	
			var mapObj,
				geocoderObj,
				mapLocation = $(this).attr('data-location'),
				mapType 	= $(this).attr('data-map-type'),
				markerTitle = $(this).attr('data-title'),
				mouseScroll = $(this).attr('data-scroll'),
				navigation	= $(this).attr('data-nav'),
				typeControl	= $(this).attr('data-type-control'),
				zoomLevel	= parseInt( $(this).attr('data-zoom'), 10 );
			
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
			
			if ( $('#sidebar, #sidebar-top').css('display') === 'none' ) {
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
					
					mapObj = new google.maps.Map( $('#cufo-gmap .google-map')[0], mapOptions );
					
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
					$('#cufo-gmap').html( "Geocode was not successful: " + status );
				}

			});
			
		});
	} // end royalGoogleMaps

// show Copyright & Socials in footer on small devices
	function mobileCopyAndSoc() {

		if ( sidebar.css('display') === 'none' && body.hasClass('copy-fixed') ) {
			body.removeClass('copy-closed');
			CopyAndSoc.addClass('copy-mobile');

		} else if ( sidebar.css('display') !== 'none'  && body.hasClass('copy-fixed') && body.hasClass('sidebar-closed') ) {

			body.addClass('copy-closed');
			CopyAndSoc.removeClass('copy-mobile');

		} else if ( sidebar.css('display') !== 'none'  && body.hasClass('copy-fixed') && !body.hasClass('sidebar-closed') ) {

			CopyAndSoc.removeClass('copy-mobile');

		}

	} // end mobileCopyAndSoc



/*
***************************************************************
* #Loading
***************************************************************
*/

	function royalLoading() {

		// HTML
		if ( $('.royal-loading').length === 0 ) {
			$('<div class="royal-loading"><i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;&nbsp;Loading<div>').appendTo('body');
		}

		// define
		var loading = $('.royal-loading');

		// CSS
		loading.css({
			'display' 		: 'none',
			'position' 		: 'fixed',
			'z-index' 		: '1000',
			'top' 			: '30px',
			'right' 		: '30px',
			'padding' 		: '13px 21px',
			'background' 	: 'rgba(0, 0, 0, 0.85)',
			'color' 		: '#fff',
			'box-shadow' 	: '0 0 2px 0px #000',
			'font-family' 	: 'arial, sans-serif',
			'font-size'     : '14px',
			'font-weight'   : 'bold',
			'text-transform': 'uppercase',
			'letter-spacing': '1px',
		});

		// show on change
		loading.fadeIn('slow');

		// hide when done
		$(window).on( 'load', function() {
			loading.fadeOut('slow');
		});

	}

	royalLoading();



}); // end document ready