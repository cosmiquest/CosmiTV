
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {
		
					$('.thumb-wrapp').hover(function(){
						$('.folio-image', this).stop().animate({bottom:'20px'},{queue:false,duration:300});
						$('.folio-caption', this).stop().animate({bottom:'-20px'},{queue:false,duration:300});
					}, function() {
						$('.folio-image', this).stop().animate({bottom:'0'},{queue:false,duration:300});
						$('.folio-caption', this).stop().animate({bottom:'0'},{queue:false,duration:300});
					});	
	
				$("a[data-pretty^='prettyPhoto']").prettyPhoto();
				
				$(".video:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
				$(".video:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
	
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});