jQuery(".slider").slide({
	     titCell:".hd ul", 
	     mainCell:".bd ul",
	     effect:"fold",  
	     autoPlay:true, 
	     autoPage:true, 
	     trigger:"click",			
	     mouseOverStop:false,
	     startFun:function(){
	     	var timer = jQuery(".slider .timer");
	     	timer.stop(true,true).animate({ "width":"0%" },0).animate({ "width":"100%" },5000);
             }
	     });	
	      //经典案例切换
jQuery(".cases-list").slide({ mainCell: ".cases-con", effect: "left", autoPlay: false, interTime: 3000, prevCell: ".btn_prev", nextCell: ".btn_next" });