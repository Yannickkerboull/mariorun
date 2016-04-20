$(document).ready(function(){
	compteur = 0;
	var audio = new Audio("./songs/saut.wav");
	var audio1 = new Audio("./songs/Mario.mp3");
	var audio2 = new Audio("./songs/hurry-up.wav");
	audio1.play();
	
	$(document).keydown(function(e){
	
		var p = $( ".perso" );
		var offset = p.offset();
		
		var p1 = $( ".maps" );
		var offset1 = p1.offset();
		
		switch (e.which){
			case 37:
				$(".perso").css( "transform" , "scaleX(-1)" );
				if (offset.left > 330)
				{				
					$(".perso").animate({ "left": "-=2px" }, 10); 
				}
				break;
			case 38:
				//alert(compteur);
				audio.play();
				$(".perso").animate({ "top": "-=40px" }, 500);
				$(".perso").animate({ "top": "+=40px" }, 500); 
				$( ".mus3" ).hide(1);
				audio.stop();
				break;
			case 39:
				$(".perso").css( "transform" , "scaleX(+1)" );
				if (offset.left < 730)
				{				
					$(".perso").animate({ "left": "+=2px" }, 10);
				}
				else
				{
					//imgWidth = $('#hiddenImg').width();
					compteur = compteur + 2;
					if (compteur < 4190)
					{
						$(".maps").animate({ "background-position": "-=2px" }, 1);
					}
					else
					{
						audio1.pause();
						audio2.play();
						$(".perso").animate({ "top": "-=40px" }, 500);
						$(".perso").animate({ "top": "+=40px" }, 500); 
					}
				}
				break;
		  }
   });
});
