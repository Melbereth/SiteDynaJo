INIT = {
  init: function() {
    MENUMOB.init();
    CONNEXION.init();
  }

},

MENUMOB = { // MENU MOBILE
	init: function() {
    $('#menu > a').on('click', MENUMOB.cache);
		$('#menu').hide(); // ON CACHE LE MENU PAR DEFAUT
		$(window).resize(function() { // ON CACHE LE MENU AU REDIMENSIONNEMENT
			$('#menu').hide();
			$('section').show(); // ON REFAIT APPARAITRE LE CONTENT
      $('footer').show();
		});
		$('#menuBar').on('click', function() {
			MENUMOB.toggler();
			MENUMOB.hideContainer();
		});
	},

	 toggler: function() { // TOGGLE DU MENU
		$('#menu').toggle("slide", {direction: "left"}, 1000);
	},

	hideContainer: function() { // TOGLE DU CONTAINER
		$('section').toggle();
    $('footer').toggle();
	},

  cache: function(e){
    $('#menu').hide();
    $('section').show();
    $('footer').show();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(e.target.getAttribute("href")).offset().top
    }, 2000);
  }
},

CONNEXION = {

  init: function () {
    var BTNenvoi = document.getElementById('BTNenvoi');
    BTNenvoi.addEventListener('click', CONNEXION.formulaire);
  },

  formulaire: function(){
    var recupN = document.getElementById('nom').value;
    var recupE = document.getElementById('mail').value;
    var recupM = document.getElementById('message').value;
    var variables = "nom=".concat(recupN);
    variables = variables.concat("&mail=");
    variables = variables.concat(recupE);
    variables = variables.concat("&message=");
    variables = variables.concat(recupM);
    CONNEXION.requete(variables);

  },

  requete : function(variables) {
   var xhrw = new XMLHttpRequest();
   xhrw.onreadystatechange = function() {
       if (xhrw.readyState === 4 && xhrw.status === 200) {
         // ici on peut traiter la réponse qui est  contenue dans :  xhrw.responseText
         rep = xhrw.responseText;

       } else if (xhrw.readyState < 4) {
           //wait and see;
       }//endif
   };//end function associated to onreadystatechange


   xhrw.open("POST", "indexeval.php", true);
   xhrw.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhrw.send(variables);
 }


};

window.onload = INIT.init();
