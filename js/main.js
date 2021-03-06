
$(document).ready(function() {
     $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
     });
	
	if (!(Modernizr.touch)){
		$('.navigation li a').hover(  
			function() {  
				$(this).stop().animate({'paddingLeft': '1.2em', 'paddingRight': '1.2em'}, 'fast');  
			},  
			function() {
				$(this).stop().animate({'paddingLeft': '0.5em', 'paddingRight': '0.5em'}, 'fast');  
			}
		); 		
	}
	
	$(function() {	
		$('.roll').css('opacity','0');
		$('.roll').hover(function () {
				$(this).stop().animate({opacity: .7}, 'slow');
			},
			function () {
				$(this).stop().animate({opacity: 0}, 'slow');
			});
	});
	
	$(function() {
		if (window.PIE) {
			$('.rounded').each(function() {
				PIE.attach(this);
			});
		}
	});
});