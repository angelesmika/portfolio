!(function(jQuery) {
  // Initialize AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  jQuery(window).on('load', function() {
    aos_init();
  });
})(jQuery);

// Back to top - smooth scroll
jQuery(document).ready(function(){
	jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 50) {
				jQuery('#back-to-top').fadeIn();
			} else {
				jQuery('#back-to-top').fadeOut();
			}
		});
		
		jQuery('#back-to-top').click(function () {
			jQuery('body, html').animate({
				scrollTop: 0
			}, 400);
			return false;
    });
});