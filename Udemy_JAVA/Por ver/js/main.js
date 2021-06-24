// Exercice 1 : Inverser les valeurs de deux variables

// function exercice1() {
//     let a = 2; 
//     let b = 3; 
//     console.log ('a =', a); 
//     console.log ('b =', b); 
    

//     [a, b] = [b , a]
//     console.log ('a=', a); 
//     console.log ('b=', b); 
// };

// Exercice 2 Afficher des variables A partir des variables suivantes :

// function exercice2() {
    
//     var Nom = "toto";
//     var Age = 30; 
//     var Homme = true; 

//     document.write("mon nom est : "+Nom +" /Mon age est :" + Age );

//     if (Homme){
//         document.write(" \n je suis un homme");
//     }
//     else {document.write("je suis une femme");}
//     console.log ('3333 Afficher des variablesA partir des variables suivantes : 3333');


//     function squared(num) {
//     return num * num;
//     }
// };

// // Exercice 3 Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

// function exercice3() {

//     let minute = 10;
//     let second = 60;
//     let minuteToSecond = minute * second;    
//     document.getElementById("result-3").innerHTML = (minuteToSecond);

// }

// Exercice 4:
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le
// résultat.
// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

// function exercice4() {
//     let number = 10
//     document.getElementById ("result-4").innerHTML = (number + 1); 
//     console.log(number+1)
// };

// Exercice 5:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez
// que la surface d’un triangle est: (base * hauteur) / 2
// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5


// function exercice5() {

//     let base = 10;
//     let hauteur = 4
//     let getSurface = (base * hauteur) / 2;
//     document.getElementById("result-5").innerHTML = getSurface
// };

// Exercice 6:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH




// Exercice 9:
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web











// /*
// split(): cette méthode divisera la chaîne en un tableau de caractères.
// reverse(): cette méthode inverse tous les éléments d'un tableau.
// join(): Cette méthode joint tous les éléments du tableau pour créer une chaîne de caractères.*/
// var chaineDeCarctere = "Hello"; 
// function strReverse(str) {

// return str.split("").reverse().join("");

// }
// console.log(strReverse(chaineDeCarctere));

// console.log("***********FONCTION getMax : le plus grand des trois entiers donnés ****************");
// var nombre1 = 1 , nombre2 = 20 , nombre3 = 9 ; 
// function getMax(a,b,c){
// var max; 
//     if (a>b)
//     { 
//         if (a>c){max=a;}
//         else /*a<c*/  { max=c;}
//     }
//     else{/*a<b*/
//         if(b>c){max=b;}
//         else /*b<c*/  {max = c ; }
//     }

//    return max; 
// }
// console.log("mes 3 valeurs sont : " + nombre1 + " / " +nombre2 + " / " + nombre3 );
// console.log("le plus grand nombre est : "+getMax(nombre1,nombre2,nombre3)); 

// console.log("***********FONCTION qui prend un tableau et renvoie le premier élément ****************");
// var MonTableau = ["donnée 1", "donnée 2", "donnée 3"];
// function getFirst(tab) {
// return tab[0];
// }
// console.log(MonTableau);
// console.log("le 1er element de mon tableau est : "+getFirst(MonTableau));

// console.log("***********ex9 : récupérer l’URL d’un site Web ****************");
// console.log(document.URL);


// console.log("*********** fonction reste d’une division ****************");
// var nbdiv1 = 5 , nbdiv2 = 2 ; 
// function resteDiv(a, b) {return a % b;}
// console.log("le reste de la  division de " + nbdiv1 + " par "+ nbdiv2 + " est : " + resteDiv(nbdiv1,nbdiv2));

// console.log("*********** ex 11 ****************");
// /*Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon,
// retournez FALSE*/
// var e1=50; e2=20 ; 
// function verif(a, b) {
  
//   return a + b < 100;
// }
// console.log("les 2 nombres a additionner sont : " +e1 + " et "+e2);
// console.log(verif(e1,e2));

// console.log("*********** ex 12 : heureSeconde ****************");
// /*Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une
// minute et 60 minutes en une heure.
// */
// var heure = 1 ; 
// function heureSeconde (h){
//     return h*3600; 
// }
// console.log(heure+"heure"+ " = " +heureSeconde(heure) + " secondes");

// console.log("*********** ex 13 :  ****************");
// /*Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon
// retournez FALSE*/
// console.log("retourne TRUE si le nombre est inférieur ou égal à zéro, sinon FALSE");
// nbAverifier = -9;
// function verifNbr(x) {
// return x <= 0; /*true*/ 
// }
// console.log("le nombre est : "+nbAverifier);
// console.log(verifNbr(nbAverifier));
// console.log("*********** ex 14 : isEqual ****************");
// /*Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.*/
// console.log("true si les 2 nombres sont égaux");
// let nb1 = 5, nb2 = "5" ; 
// function isEqual(nbr1,nbr2){

//     return nbr1===nbr2; /*true*/ 
// }
// console.log ("les 2 nombres sont : " +nb1 + " ET " +nb2);
// console.log("le 1er nombre est de type "+typeof(nb1));
// console.log("le 2eme nombre est de type "+typeof(nb2));
// console.log(isEqual(nb1,nb2));

// console.log("*********** ex 15 :isDivisible ****************");
// console.log("Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.");
// let monNombre = 14 ; 

// function isDivisible(n) {

// return n % 5 == 0; /* true */
// }
// console.log("le nombre est : " +monNombre);
// console.log(isDivisible(monNombre));

// console.log("*********** ex 16 hmTos ****************");
// console.log("Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes");
// let hh = 1;
// let mm = 10;
// function hmTos (h,m){
     
//     return ((h*3600)+(m*60));
// }
// console.log("heure : " +hh);
// console.log("minute: "+mm);
// console.log(hmTos(hh,mm));

// console.log("*********** ex 17 : fonction pour inverser un tableau reverseTab ****************");

// var tableauu = [1,2,3] ; 
// console.log(tableauu);
// function inverseTab(tab) {
//   let res = [];
//   for (let i = tab.length -1; i > -1; i--) {
//     res.push(tab[i]);
//   }
//   return res;
// }
// console.log(inverseTab(tableauu));

// console.log("*********** ex 18 fonction getLastElem ****************");
// /*Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.*/
// var tableau2 = [1,2,3] ; 
// console.log(tableau2);
// function getLastElem(tab) {
// return tab[tab.length - 1]
// }
// console.log("le dernier element est : "+getLastElem(tableau2));

// console.log("*********** ex 19 fonction checkEq ****************");
// var val1 = 5, val2 = false;
// console.log("parametre 1 : " + val1);
// console.log("parametre 1 : " + val2);
// function checkEq(a, b) {
//     return a === b;
// }
// console.log(checkEq(val1,val2)); 

// console.log("*********** ex 20 fonction isEmpty****************");
// console.log("Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.")
// var xx = "hhhhh" ; 
// function isEmpty(str) {
// return str.length == 0;
// }
// console.log(xx);
// console.log(isEmpty(xx));





//     let wordNormal = "WayToLearnX";

//     let reversed = wordNormal.reverse();    

//     document.getElementById("result-6").innerHTML = (reversed)


//. La portée des variables
// let prenom = "Mark"  // representa todo de adentro lo ejecuta en la variable 

let variableLet = "global";   //variabmle local  
var variableVar = "global";   //variabmle global 

if (true) {  // sera valido al interior de las llaves  condicion 
    let variableLet = "local";  //variabmle local  
    var variableVar = "local";   //variabmle global 
    
    console.log("let : " + variableLet);    // Imprime el valor de la variable let 
    console.log("var : " + variableVar);    // Imprime el valor de la variable var    
}
console.log("let : " + variableLet);  // ponemos en este lado para ver que valor estara impreso local o global 
console.log("var : " + variableVar);   // ponemos en este lado para ver que valor estara impreso
    