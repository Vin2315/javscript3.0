// console.log ('HolA a todos como estan'); 
// copnsol.log (Hola como vas );

// lef prenom = "Marc & simon"
// let age = 21

// console.log(age); 



/////////////////////////////////

//Exercice 1 : Inverser les valeurs de deux variables

// let a = 1, b = 2;
// console.log(`${a} ${b}`); 
// console.log("la valeur de a : " +a); 
// console.log("la valeur de b : " +b); 
// [a, b] = [b, a];
// console.log("Apres inversion, la valeur de a devient "+a +" et la valeur de b devient : " +b );
// console.log(`${a} ${b}`);
// console.log("la valeur de a devient "+a); 
// console.log("la valeur de b devient "+b); 


// Exercice 2 : Afficher des variables

// A partir des variables suivantes :
// const    prenom = "Vinicio" ; 
// const    nom =    "Toto" ; 
// const    age =    "30" ; 
// console.log("Bonjour" + ' ' + prenom + ' ' + nom + ' ' + age + ' ' +'!'); 


// Exercice 3:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.

// let nombreUn = 8, nombreDeux = 4, result; 
// result = (nombreUn + nombreDeux); 
// console.log (result);


// Exercice 3.1:
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

// var minute = 2;
// function minuteToSecond(minutes) { 
// return  minutes * 60;
// }
// console.log(minute+" minutes egal à : " + minuteToSecond(minute)+" secondes");

// let nombreUn = 8, result; 
// result = (nombreUn * 60 ); 
// console.log (result);



//  Exercice 4: Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le
// résultat.

// let nombreUn = 2,  result; 
// result = (nombreUn ) ; 
// result  ++ ;   
// console.log (result);


// Exercice 5:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez
// que la surface d’un triangle est: (base * hauteur) / 2

// let nombreBase = 8, nombreHauteur = 4, result; 
// result = (nombreBase * nombreHauteur) /2 ; 
// console.log (result);


// Exercice 6:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH

// var chaineDeCarctere = "VINICIOVILLALTA"; 
// function strReverse(str) {
// return str.split("").reverse().join("");
// }
// console.log(strReverse(chaineDeCarctere));

// Exercice 7:
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

// let nombreUn = 8, nombreDeux = 4, nombreTrois = 1, result; 
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
// console.log("mes valeurs a ecrir sont: " + nombreUn + " / " +nombreDeux + " / " + nombreTrois );
// console.log("le plus grand est : "+getMax(nombreUn,nombreDeux,nombreTrois)); 


// Exercice 8:
// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier
// élément d’un tableau commence toujours par l’index 0.
// Exemple:
// getFirst([1, 2, 3]) ➞ 1
// getFirst([50, 60, 70]) ➞ 50

// var MonTableau = ["tableau 2", "tableau 3", "tableau 4"];
// function getFirst(tab) {
// return tab[0];
// }
// console.log(MonTableau);
// console.log("Mon tableau...... : "+getFirst(MonTableau));

// Exercice 9:
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web

// function getURL() {
//     alert("page is: " + window.location.href);
// }
// //htlm//
// <button type="button" onclick="getURL();">Get Page URL</button>   

    
// Exercice 10:
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul
// opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis
// comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
// Exemple:
// resteDiv(1, 3) ➞ 1
// resteDiv(2, 4) ➞ 2
// resteDiv(3, 3) ➞ 0

// var numdiv1 = 10 , numdiv2 = 3 ; 
// function resteDiv(a, b) {return a % b;}
// console.log("le reste division est  " + numdiv1 + " par "+ numdiv2 + " est : " + 
// resteDiv(numdiv1,numdiv2));

// Exercice 11: < 100
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon,
// retournez FALSE.
// Exemple:
// check(5, 20) ➞ true
// // 5 + 20 = 25
// check(60, 55) ➞ false
// // 60 + 55 = 115

// let nombreUn = 8, nombreDeux = 4, result; 
// function exo11 (a,b){
// if (a+b<100)
//     { 
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log (exo11(5,20));
// console.log (exo11(60,55));


// Exercice 12:
// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une
// minute et 60 minutes en une heure.
// Exemple:
// heureSeconde(1) ➞ 3600
// heureSeconde(5) ➞ 18000

// var heure = 2 ; 
// function heureSeconde (h){
//     return h*3600; 
// }
// console.log(heure+"heure"+ " = " + heureSeconde(heure) + "secondes");


// Exercice 13:
// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon
// retournez FALSE.
// Exemple:
// checkNbr(1) ➞ false
// checkNbr(-1) ➞ true                         
// checkNbr(0) ➞ true

// console.log("retourne TRUE si le nombre est inférieur ou égal à zéro, sinon FALSE");
// nbAverifier = -9;
// function verifNbr(x) {
// return x <= 0; /*true*/ 
// }
// console.log("le nombre est : "+nbAverifier);
// console.log(verifNbr(nbAverifier));

   

// Exercice 14:
// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
// Exemple:
// isEqual(3, 6) ➞ false
// isEqual(1, ‘1’) ➞ false
// isEqual(1, 1) ➞ true

// console.log("true si 2 sont égal");
// let nb1 = 1, nb2 = 1 ; 
// function isEqual(nbr1,nbr2){

//     return nbr1===nbr2; /*true*/ 
// }
// console.log (" Votre 2 nombres est : " +nb1 + "  " +nb2);
// console.log("le 1er nombre est de type "+typeof(nb1));
// console.log("le 2eme nombre est de type "+typeof(nb2));
// console.log(isEqual(nb1,nb2));

// Exercice 15:
// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
// Exemple:
// isDivisible(5) ➞ true
// isDivisible(10) ➞ true
// isDivisible(6) ➞ false

// function isDivisible(numero) {
//     return numero % 5 == 0; ("true")      
//   }
// console.log("le nombre est : " +11);
// console.log(isDivisible(11));

// Exercice 16:
// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
// Exemple:
// hmTos(1, 10) ➞ 4200
// hmTos(0, 59) ➞ 3540
// hmTos(0, 0) ➞ 0

// let hh = 1;  let mm = 10;
// function hmTos (h,m){
     
//     return ((h*3600)+(m*60));
// }
// console.log("heure : " +hh);
// console.log("minute: "+mm);
// console.log(hmTos (hh,mm));


// Exercice 17:
// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée
// reverse();
// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]


// var chaineDeCarctere = "1, 2, 3"; 
// function strReverse(str) {
// return str.split("").reverse().join("");
// }
// console.log(strReverse(chaineDeCarctere));
         

     


    



// var reverseTab = "1, 2, 3"; 
//             function varLasElement = table.pop(); 
//             {
//             return table.pop ("last element");
//             nbElement --.; 
//             }  


// Exercice 18:
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
// Exemple:
// getLastElem([1, 2, 3, 4]) ➞ 4
// getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’


// var chaineDeCarctere = ['Alex', 'Bob', 'Emily']; 
// console.log(chaineDeCarctere);

// function getLastElem (tab) {

//     return tab [tab.length -1];

// }

// console.log(getLastElem(chaineDeCarctere));

// Exercice 19:
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de
// paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les
// paramètres sont égaux et FALSE s’ils sont différents.
// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux
// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent
// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent
// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent



// let nombreUn = 5, nombreDeux = 5, result; 
// function exo11 (a,b){
//     return a===b;
// }
// console.log (exo11(nombreUn,nombreDeux));             

// Exercice 20:
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
// Exemple:
// isEmpty("1") ➞ false
// isEmpty("WayToLearnX") ➞ false
// isEmpty(" ") ➞ false
// isEmpty("") ➞ true


// var  chaine = ("UBLIHJB"); 
// function isEmpty(str) {
// return str.length == 0;
// }
// console.log(chaine);
// console.log(isEmpty(chaine));

