$(document).ready(function() {
    $(".JS-Button").click(function(){
        $(".JS-Form").css('display', 'block');
        $(".JS-Field").css('display', 'none');
    }); 
});

$(document).ready(function() {
	if ($(window).width() <= 768) {
		$('.JS-TogglerContent').hide('slow'); 
		$('.JS-Toggler').on('click', function(event) { 
		event.preventDefault(); 
		$('.JS-Toggler').not(this).next().slideUp(500); 
		$('.JS-Toggler').removeClass('odivo__form-area_hide'); 
		$(this).toggleClass("odivo__form-header_registration-alt").next('.JS-TogglerContent').slideToggle('slow'); 
		$('.JS-Toggler').not(this).removeClass("odivo__form-header_registration-alt"); 
		}); 
	}
}); 
$(document).ready(function() {
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
}); 

(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);
