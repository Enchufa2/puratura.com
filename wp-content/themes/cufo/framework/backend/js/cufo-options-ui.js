jQuery(document).ready(function($) {
    "use strict";

/*
***************************************************************
* Design Select
***************************************************************
*/

    $('[id*=select_group]').before('<h3>Select Group of Designs</h3>');
    $('[id*=select_group]').prev('h3').append('<p><span style="color: #ff6d3f;" class="dashicons dashicons-flag"></span>&nbsp;&nbsp;Please click on "Save Changes" Button <span style="text-decoration: underline;">before</span> you Activate or Import any of Designs.</p>');

    var saveChanges = $('p.submit').clone();
    $('[id*=select_group]').after(saveChanges);

    // define variables
    var designSelect = $('select[id*=select_group]');

    // on load
    $('#'+ designSelect.val()).show();
    
    // on change
    designSelect.change(function(){
        $('.design-list').hide();
        $('#'+ designSelect.val()).fadeIn();
    });


/*
***************************************************************
* Thumbnail Hovers
***************************************************************
*/

$('.thumbnail-wrapper').hover(function(){
    $(this).find('a').stop().fadeIn();
}, function(){
    $(this).find('a').stop().fadeOut();
});


/*
***************************************************************
* Design Activation
***************************************************************
*/

    var activeDesign = $('select[id*=active_design]').val();
    $('.royal-design-activate[data-title*='+ activeDesign.replace(/^(.)|\s(.)/g, function($1){ return $1.toUpperCase( ); }) +']').addClass('button-primary disabled').val('Active');
    $('.disabled').closest('li').find('h3').css('color', '#298cba');

    $('.royal-design-activate').click(function() {

        var currentDesign = $(this).attr('data-title');

        if ( $(this).hasClass('disabled') ) {
            alert('"'+ currentDesign +'" Design is already activated!')
            return;
        }

        if ( ! confirm('Are you sure you want to activate "'+ currentDesign +'" Design?\n\nNOTE!\nPlease press "Save Changes" Button before Activation.\n\nNOTE!\nPrevious changes in the Theme Customizer will be lost and overwritten by this design.') ) {
            return;
        }

        $('select[id*=active_design]').val( currentDesign.toLowerCase() );

        if ( $('.import-message').length === 0 ) {
            $('.form-table').before('<div class="updated import-message"><p><span class="dashicons dashicons-update rf-spin"></span>&nbsp;&nbsp;Activating <strong>'+ currentDesign +'</strong> Design...</p></div>');
        } else {
            $('.import-message').html('<p><span class="dashicons dashicons-update rf-spin"></span>&nbsp;&nbsp;Activating <strong>'+ currentDesign +'</strong> Design...</p>');
        }

        $(window).scrollTop(0);

        var data = {
            action: 'royal_design_activate',
            active_design: currentDesign.toLowerCase()
        };

        // run ajax callback
        $.post(ajaxurl, data, function(response) {
            $('.import-message').html('<p><span class="dashicons dashicons-yes"></span>&nbsp;&nbsp;<strong>'+ currentDesign +'</strong> Design has been activated!</p>');
            $(window).scrollTop(0);
            $('.royal-design-activate').removeClass('button-primary disabled');
            $('.design-list li h3').css('color', '#23282d');
            $('.royal-design-activate[data-title='+ currentDesign +']').addClass('button-primary disabled').val('Active');
            $('.disabled').closest('li').find('h3').css('color', '#298cba');
        });

    });


/*
***************************************************************
* Demo Data Import
***************************************************************
*/

    $('.royal-import').click(function() {

        var currentBTN = $(this);

        if ( ! confirm('Are you sure you want to Import "'+ currentBTN.prev().attr('data-title') +'" Demo Content?\n\nNOTE!\nPlease press "Save Changes" Button before Import.\n\nNOTE!\nTo make a full Demo Import you will need to install/activate following plugins: Visual Composer, Ultimate Addons for VC and Slider Revolution.\n\nRECOMENDED!\nMake this action on the fresh installation of Wordpress. In the other case this will affect on your current website content.') ) {
            return;
        }

        if ( $('.import-message').length === 0 ) {
            $('.form-table').before('<div class="updated import-message"></div>');
        }

        $('.import-message').html('<p><span class="dashicons dashicons-update rf-spin"></span>&nbsp;&nbsp;Importing Demo Content... Please be patient while content is being imported! It may take several minutes.</p>');
        $('.import-message').css('border-color', '#ffba00');
        currentBTN.val('Importing ...');
        $(window).scrollTop(0);

        var data = {
            action: 'royal_import',
            design: $(this).attr('data-title')
        };

        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {
                action: 'royal_import',
                design: $(this).attr('data-title')
            },
            success: function(data, textStatus, XMLHttpRequest){
                $('.import-message').html('<p><span class="dashicons dashicons-yes"></span>&nbsp;&nbsp;Import Was Sucessfull, Have Fun!</p>');
                $('.import-message').css('border-color', '#7ad03a');
                currentBTN.val('Import Content');
                $(window).scrollTop(0);
            },
            error: function(MLHttpRequest, textStatus, errorThrown){
                setTimeout(function(){
                    $('.import-message').html('<p><span class="dashicons dashicons-yes"></span>&nbsp;&nbsp;Import Was Sucessfull, Have Fun!</p>');
                    $('.import-message').css('border-color', '#7ad03a');
                    currentBTN.val('Import Content');
                    $(window).scrollTop(0);                    
                }, 15000);
            }
        });

    });


}); // end dom ready