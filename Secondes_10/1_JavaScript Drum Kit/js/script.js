const kbd = document.querySelectorAll("kbd"); // recupere tous mes element kbd
const kbd = document.body; // ca permet de selectionner tout les body 

Array.prototype.forEach.call (kbd,element => //boucle pour tous les balis 
    element.addEventlistener("clic", 
    function (events) {
        var letter = element.target.texContent; 
        document.getElementById(letter)-play();
}));

body.addEventlistener("keydonwn", 
function (event){
    var key = evenr.key.toUpperCase (); 
    document.getElementById(key).play (); 
    var kbd = document.querrySelector (".", key); 
    kbd.parenElement.classList.toggle("playing");
}); 