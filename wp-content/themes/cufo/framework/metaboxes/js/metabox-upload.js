jQuery(document).ready(function( $ ) {
    "use strict";


/*
***************************************************************
* #Audio & Video File Upload
***************************************************************
*/

function royalAudioVideoUpload( mediaType, ext) {

    // Media Upload button
    $('#rf_'+ mediaType +'_self_'+ ext +'_upload').click(function( event ) {

        // Prevents default behaviour
        event.preventDefault();

        // frame popup options
        var mediaFrame = wp.media({
            title: royalUploader.mediaTitle,
            library: {
                type: mediaType
            },
            button: {
                text: royalUploader.mediaButton
            }
        });

        // grab value of selected mp3 and place thats url in input
        mediaFrame.on('select', function(){
            var mediaAttachment = mediaFrame.state().get('selection').first().toJSON();
            $('#rf_'+ mediaType +'_self_'+ ext).val( mediaAttachment.url );
        });

        // open popup
        mediaFrame.open();

    });
    
}

// Audio upload buttons
royalAudioVideoUpload( 'audio', 'mp3' );
royalAudioVideoUpload( 'audio', 'ogg' );

// Video upload buttons
royalAudioVideoUpload( 'video', 'mp4' );
royalAudioVideoUpload( 'video', 'ogv' );


/*
***************************************************************
* #Image Upload
***************************************************************
*/

// Media Upload button
$('#rf_block_bg_cover_upload').click(function( event ){

    // Prevents default behaviour
    event.preventDefault();

    // frame popup options
    var mediaFrame = wp.media({
        title: royalUploader.mediaTitle,
        library: {
            type: 'image'
        },
        button: {
            text: royalUploader.mediaButton
        }
    });

    // grab value of selected mp3 and place thats url in input
    mediaFrame.on('select', function() {
        var mediaAttachment = mediaFrame.state().get('selection').first().toJSON();
        $('#rf_block_bg_cover').val( mediaAttachment.url );
    });

    // open popup
    mediaFrame.open();
});


}); // end ready