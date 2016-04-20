$(document).ready(function(){
	compteur = 0;//Compteur du nb de décalage de px de l'écran pour arrivé au bout!
	//Déclaration de mes sons
	var audio = new Audio("./songs/saut.wav");
	var audio1 = new Audio("./songs/Mario.mp3");
	var audio2 = new Audio("./songs/hurry-up.wav");
	//Déclaration de mes trous dans le terrain :)
	
	
	audio1.play();//Je lance ma musique d'ambiance de boucle
	
	
	$(document).keydown(function(e){//Fonction qui récupere les touches entrées au clavier
		//Je récupere la position de mon perso sur le terrain
		var p = $( ".perso" );
		var offset = p.offset();
		
		//Donnes de récup pour les tests
		var p1 = $( ".maps" );
		var offset1 = p1.offset();
		
		//Je traite les touches entrées
		switch (e.which){
			case 37://touche correspondant à la fléche de gauche
				$(".perso").css( "transform" , "scaleX(-1)" );//J'inverse le sens de mon image en css
				if (offset.left > 330)//Je vérifie que je ne sois pas au bout de l'écran
				{//Si c'est pas le cas, je peux reculer
					$(".perso").animate({ "left": "-=2px" }, 10); 
				}
				break;
			case 38://touche correspondant à la fléche du haut
				//alert(compteur);
				audio.play();//Je lance la musique de saut
				$(".perso").animate({ "top": "-=40px" }, 500);//Je fais up mon personnage
				$(".perso").animate({ "top": "+=40px" }, 500);//Je le fais descendre
				audio.stop();//Je stop la musique de saut
				break;
			case 39://touche correspondant à la fléche de droite
				$(".perso").css( "transform" , "scaleX(+1)" );//je met mon personnage dans sa position initiale.
				if (offset.left < 730)//Test de si je suis arrivé à la limite de mon écran avant le défillement du paysage
				{				
					$(".perso").animate({ "left": "+=2px" }, 10);
				}
				else
				{
					//imgWidth = $('#hiddenImg').width();
					compteur = compteur + 2;//Je suis fait donc défiler mon paysage, donc je le décale d'autant de px que le personnage bouge 
					if (compteur < 4190)//Test de si je suis arrivé à la fin
					{
						$(".maps").animate({ "background-position": "-=2px" }, 1);
					}
					else
					{//C'est la fin
						audio1.pause();//Je stop la musique d'ambiance
						audio2.play();//Je lance la musique de fin
						//Je fais des sauts de victoire !
						$(".perso").animate({ "top": "-=40px" }, 500);
						$(".perso").animate({ "top": "+=40px" }, 500); 
					}
				}
				break;
		  }
   });
});