jQuery(document).ready(function(){
    jQuery("body a").hover(function(){
        if( jQuery(this).attr("data-img-src").length > 0  ){
            $img = jQuery(this).attr("data-img-src");
            jQuery(".main_container").css("background-image","url('"+$img+"')");
        }
    }, function() {
            jQuery(".main_container").css("background-image","url('https://emmanueltoppo.com/wp-content/themes/my-theme/assets/img/background.png')");
    });
});
