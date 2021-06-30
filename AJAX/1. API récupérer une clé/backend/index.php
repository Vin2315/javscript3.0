<?php

// permet de spécifier que le serveur accepte toutes les connections peu importe l'origine (pour l'exemple uniquement, déconseillé en production)
header('Access-Control-Allow-Origin: *');

// vérifie si le champ username du formulaire a bien été reçu et si sa valeur n'est pas vide  
// GET transmite la informacion y son visible en url //(POST recupero username en mi ejercicio)
//POST recupera la infomacion de un formulario sin que sea visible en el URL  
// isset verifica la variable exista y no se quiere que emputy que no sea bacio 
// $_POS  recibe las bariables

//verifico si recibo lo que espero en la cual pongo una condiciôn  
if (isset($_POST['username']) && !empty($_POST['username'])) {
    // si tout est ok on traite l'information

    // on stocke le contenu de l'input username reçu dans la variable $name
    $name = $_POST['username'];

    // on va envoyer une réponse à notre client sous forme de tableau associatif qu'on transforme au format JSON
    // tableau associatif PHP : "nom_de_la_clé" => valeur
    echo json_encode(['name' => $name]); // json trasforma y cambia a lo que quiero.

    //  
} else {
    // si la variable n'a pas été reçue ou est vide on renvoie la réponse correspondante
    echo json_encode(['name' => 'inconnu']);
}