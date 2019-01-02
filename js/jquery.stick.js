(function($, window, document, undefined){

	$.fn.stick = function(userOptions){
		
		var options = $.extend({}, $.fn.stick.defaults, userOptions);
		
		$.fn.stick.defaults = {
			
			
		};
		
		
		
		return this.each(function(){
			
			var navbar = $("#navbar"),
				stick = navbar.offset().top;
				
			
				
			$(window).on("scroll", function(){
								
				if($(window).scrollTop() > stick){
					navbar.addClass("stick");
				}else{
					navbar.removeClass("stick");
				}
			});
		
		});
	};
	
	
	
	
})(jQuery, window, document);