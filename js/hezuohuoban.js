jQuery(document).ready(function($){
	$('.hui').mouseover(function(e) {
        $(this).siblings().stop().fadeTo(500,0.5);
    });
	$('.hui').mouseout(function(e) {
        $(this).siblings().stop().fadeTo(500,1);
    });
});