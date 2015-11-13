jQuery(document).ready(function($){
	/* 下面的代码是一旦DOM加载执行 */
	$('.sponsorFlip').bind("click",function(){
		var elem = $(this);
		if(elem.data('flipped'))
		{
			elem.revertFlip();
			elem.data('flipped',true)
		}
		else
		{
			elem.flip({
				direction:'rl',
				speed: 350,
				onBefore: function(){
					elem.html(elem.siblings('.sponsorData').html());
				}
			});
			elem.data('flipped',true);
		}
	});
	
});