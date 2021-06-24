
// // let crie = "Toujours plus mieu";// bariable global 

// function crieDeGerre() {     // variable de condicion que retorna un valor 
    
//     let crie = prompt("Toujours plus loin, Toujours plus haut, toujours plus fort ");  // esta sera el grito de gerra (let es vqriqble local  
 
//     alert ( + crie +); 
// }

//     crieDeGerre();   // llama al grito; 
 



 

// function direBonjour(prenom) {
   
//     alert("Bonjour Vinicio como Tu el ..... :)" + prenom ); 
// }
//         direBonjour("  Villalta ");




// if (hore = 11) {
//     console.log ("sera vientot midi");
// }






// let age = 30;  


//     if (age < 18 ) {      
    
//         console.log("VOUS EST MINOR ."); 
//     }
//     else if (age < 21) {
//         console.log("Vous etes majeur en France");
//     }

//     else  {
//         console.log("Vous etes majeur partout, a vous les casino");

//     }





// let heur = 20;     //let es una variable 

// heure = 11 (si pongo solo 1= indica voy a poner la variable heure el valor 11 )( hay q poner comparar una igualdad es con 2 ==)
// heure != 11 (si hora es diferente de 11 ! no negal significa ) 
// heure < 11 (inferior a 11)
// heure > 11 (superior a 11)
// heure < = 11 (inferior a 11)
// heure > = 11 (superior a 11)

// (escojo ifteament) esta es una funcion minimal para una condicion if (condition) pongo si es Vo F  
  
// let heur = 20;     //let es una variable 

// if (heur < 12) {      
   
//     console.log("c'est le matain."); 
// }

// else if (heur = 18) {
//     console.log("C'est l'apre-midi");
// }

// else  {
//     console.log("C'est la soiree");

// }
    





// function calculerIMC(poids, taille ) {
    
//     // //calcule la taille en metre 
//     // let tailleEnMetres = taille / 100;
//     // let tailleCalculee = Math.pow(tailleEnMetres, 2);
//     // let resultat       = poids / tailleCalculee;

//     return poids / Math.pow((taille/100),2);    
// }

// let poids = prompt("Quelle est votre poids ? (en KG)");
// let taille = prompt("Quelle est votre taille ? (en cm)"); 

// alert(calculerIMC(poids, taille));




















// function abracadabra () {
   
//      let prenom = prompt('Quelle es votre prenom ?');
//      let nom    = prompt('Quelle es votrte nom ?');
//      let age    = prompt('Quelle est votre age ?');
    
//      alert("Sapristi  ! On ne m'avait pas prévenu que c'était vous..." 
//      + prenom 
//      + "  ! Euh..... Je veux dire..... Monsieur le grand magicien    " 
//      + nom 
//      + "  ! Cela fait déjà " 
//      + age 
//      + " ans que vous faites rayonner notre contrée !");
     
// } 

// let a = prompt('Tape le  1 er # svp ?');
//  let b = prompt('Tape le  2 er # svp ?');
//  let c = prompt('Tape le  3 er # svp ?');

//  alert("Vous avez Tate les numero corectemon et je les inverser pour vous ..." 

//  + a 
//       + "  ! Euh..... Je veux dire..... Monsieur le grand magicien    " 
//       + nom 
//       + "  ! Cela fait déjà " 
//       + age 
//       + " ans que vous faites rayonner notre contrée !");


// abracadabra();

// function prevoirAge() {
   
//    let age = prompt("Quelle est votre age ?"); 
//    age = parseInt (age); // esta variable parseInt permite cambiar en parametros la bariable  
//    alert ("Bientot vous aurez   " + (age + 1) + " ans. "); 
// } 
//     prevoirAge();




















// let preparation = 10, cuisson = 15;

// function cuisiner(nombreDeGateaux, minustesDePreparation =10, minutesDeCuisson =15) {

//     let resultat = nombreDeGateaux * (minutesDeCuisson + minustesDePreparation); 
//     return resultat;  
// }

// // CREAMOQ VARIABLE DE TIMPO DE PREPARACION DE CHOCOLATE Y EL DE FRESA 

// let tempsDepreparationChocolat = cuisiner(4); // la funcion cuisine es de 4 gatos de chocolat 
// let temDePreparationFraisier   = cuisiner(1); // tiempo de cosinarce las fresas 1 GATO Y 20 MINUTOS
// console.log(temDePreparationFraisier); // imprimo lmis resultados 





















// let nombreUn = 8, nombreDeux = 2;

// function division(nombreA, nombreB) {

//     let result = nombreA / nombreB; 
//     return result;  
// }
// console.log(division(nombreUn, nombreDeux)); 






// function direBonjou(prenom) {  // toma el parametro el apellido 
     
//     alert("Bonjour " + prenom);  // alerta que aparece el apellido 
// }

// direBonjou (Villalta);  // imprime el apellido 











// let crie = "Toujours plus mieu";// bariable global 

// function crieDeGerre() {     // variable de condicion que retorna un valor 
    
//     let crie = "Toujours plus loin, Toujours plus haut, toujours plus fort ";  // esta sera el grito de gerra (let es vqriqble local  
//     console.log(crie);      // imprime en la consola del grito     
// }

//     crieDeGerre();   // llama al grito; 
//     console.log(crie); // senalar la llamda fuera de la funcion pero no finciona 

















// function direBonjour(prenom) {
   
//     alert("Bonjour Vinicio como Tu el ..... :)" + prenom ); 
// }
//         direBonjour("  Villalta ");


// function addition(nombreUn, nombreDeux) {
    
//     console.log(nombreUn + nombreDeux)
// }

// addition(5,4.3);





// camel Case notNomDeFunction

//condicion 
// let consomable = "pain";

// switch(consomable) {

//     case "carotte":  
//     case "pomme de terre":
//     case "curgette":
//     console.log('Ceci est un legume');
//     break;

//     case "banana": 
//     console.log('Ceci est un fruit');
//     break;
    
//     default: 
//     console.log('ceci n\'est pas un fruit ni un legume'); 

// }


// let gareDeDepart = "Valenciennes";
// let gareDArrivee = "Gare du Nort";

// if (gareDeDepart != "" && gareDArrivee != ""); // condiciones 1 y condicion 2
   
//     if(gareDArrivee !="") {
//         console.log ('Le train va dêmarre.');
//     }
 
// let gareDeDepart = "Valenciennes";
// let gareDArrivee = "";

// if (gareDeDepart != "" && gareDArrivee != ""); { // condiciones 1 y condicion 2
//     console.log ('Le train va dêmarre.'); 
// }
// else{
//     console.log ('Le train ne peuu pas demarrerva dêmarre.'); 
// }


// let x = 2; 

// if(!x < 3) {
//     console.log('x est inferior à 5');
// }

// else{
//     console.log('x n\est pas inferior à 5');
// }





// let x = 7; 
// if (x > 3) {
//     console.log('x est superior à trois');
// }

// else {
//     console.log('x est pas inférior à trois');
// }


// let x = 1; 
// x >3 ? console.log('x est superior à trois') : console.log('x est inferior à trois'); 



// let gareDeDepart = "Valenciennes";
// let gareDArrivee = prompt ("Ou souhatez-vous aller?")||"Gare de Nord";
// let chauffeur = "Luis-Nicolas";

// if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur !="") {
//     alert('Le train va demarer destination de' + gareDArrivee + '.'); 
// } // condiciones 1 y condicion 2

// else {

//     alert('Le train ne peut pas demarres.');
    
// }
 

// let i = 1; 

// while (i<10) {
   
//     console.log('Lign : ' + i);
//     i++;  
// }


// let prenom; 

// do {

//     prenom =prompt('Quel es votre prénom ?'); //   al momento de enviarle el dato se fija en el usuario o dato ingresado     

// }  while(prenom=="" || prenom == null); // si la persona pone null reiniciamos la bucle, hasta que ponga el nombre  

// alert('Bonjour' + prenom);  // fija el mensaje mas el nombre de la persona que ingresa el dato; 

 
// do {
//     var prenom =prompt('Quel es votre prénom ?');     
// }  while(prenom=="" || prenom == null);  
    
// alert('Bonjour' + prenom);  


// let i = 4; 

// while (i<10) {
   
//     var 
//     console.log('Lign : ' + i);
//     i++;  
// }

// for (let index = 0; index < array.length; index++) {   // elementos 
//     const element = array[index];    // instrucciones 
    
// }

// for (let i = 4; i < 10; i++) {
//     console.log('Ligne : ' + i);  // a partir de la ligne inicio el incremente  
// }


// let i=0; 

// while(i < 5) {

//    if(i== 3) {
//     i++;
//     continue;
//    }   
//    console.log ('Ligne : ' + i); 
//    i++;
// }

// try {     // hago el remplazo por if / try      si hay error en try pasa a ejecutar catch  
//     let recompense = prompt ("choisissez une recompense: epee, arc, haches" );    

//     switch(recompense){
//         case 'epe': 
//             degats = 40; 
//             break;
//         case 'arc': 
//             degats = 30;
//             break; 
//         case 'haches':
//             degats = 20; 
//             break; 
//         default:
//             throw nuw error('vous ne pouve pas triche '); // creamos un nuevo herror 
//     }

// }
// catch (rror) {    // hago el remplazo por else /cath  ponemos parametro a lado de catch
//     //alert(error.stack);   // stack me da la direcciôn del herror / el messqge entrega el mensaje no definido 
//     // alert('La variable hello n\est existe pas..')  // mensaje personalizado de herror 
    
//     alert(error);
// }


let age = 18, statut = "étudiant";
if(age < 18 || statut == "étudiant") {
    console.log('Partie 1');
}
else if(age == 18 && statut != "étudiant") {
    console.log('Partie 2');
}
else {
    console.log('Partie 3');
}