jQuery(document).ready(function($){
	$(".cusmoter-main ul li").hover(function(){
			$(this).find(".txt").stop().animate({height:"100px"},400);
			$(this).find(".txt h3").stop().animate({paddingTop:"6px"},400);
		},function(){
			$(this).find(".txt").stop().animate({height:"30px"},400);
			$(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
		})
	});