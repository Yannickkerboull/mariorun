$(document).ready(function(){
	$(document).keydown(function(e){
	
		var p = $( ".perso" );
		var offset = p.offset();
		
		switch (e.which){
			case 37:
				$(".perso").css( "transform" , "scaleX(-1)" );
				if (offset.left > 330)
				{				
					$(".perso").animate({ "left": "-=2px" }, 10); 
				}
				break;
			case 38:
				$(".perso").animate({ "top": "-=40px" }, 500);
				$(".perso").animate({ "top": "+=40px" }, 500); break;
			case 39:
				$(".perso").css( "transform" , "scaleX(+1)" );
				if (offset.left < 730)
				{				
					$(".perso").animate({ "left": "+=2px" }, 10);
				}
				else
				{
					$(".maps").animate({ "background-position": "-=2px" }, 1);
				}
				break;
		  }
   });
});