// LES VARIABLES ET LES FONCTIONS

/* Il s'agit de deux concepts de JavaScript dont nous allons avoir besoin en jQuery. Il faut comprendre les fonctions et les variables avant
de passer sur jQuery. 

LES VARIABLES

Une variable est une donnée sous un nom différent ou "identifiant". en stockant cette donnée, on permet à nos scripts de conserver une information
dans le but de s'y référer par la suite. Il est très simple de déclarer une variable. */

var monPrenom = "Emily";

/* "Emily" est à présent stocké en tant que valeur de monPrenom. 
Définition de CamelCase : CamelCase désigne le fait de condenser plusieurs mpts ou expressions en un seul élément, comme OpenClassRooms. Le standard, 
lorsqu'on définit des variables est de laisser le premier mot en minuscules, et de mettre la première lettre de tous les mots suivants en majuscules 
(par exemple : ceciEstUneVariable).

LES FONCTIONS

Une fonction est un morceau de code qui exécute ou accomplit une ation. Voici une fonction qui crée une alerte navigateur pour vous dire bonjour :*/

function saluerEtudiants(){
	alerte("Bonjour les étudiants !");
}
saluerEtudiants();

/* Pour définir une fonction en JavaScript, il faut (1) écrire le mot function, (2) suivi du nom que vous souhaitez donner à votre fonction. Ensuite,
vous devez(3) ajouter les parenthèses qui vont vous permettre de passer des parenthèses (des données) à la fonction si besoin. Je n'en avais pas besoin 
pour la fonction ci-dessus, donc les parenthèses sont vides. Il faut aussi (4) écrire une accolade pour "commencer" l'esnemble d'instructions qui vont 
constituer votre fonction. Une fois que vous avez listé les instructions, (5) refermez la définition de la fonction avec une autre accolade.

La dernière ligne, saluerEtudiants(); est celle qui lance la fonction. Définir une fonction et la faire effectivement fonctionner sont deux étapes 
différentes.
On doit comprendre que la ou les fonctions représentent une manière de définir des actions. 

// COMBINER DES FONCTIONS ET DES VARIABLES

Ci dessous, dans le code nous retrouvons une déclaration de variable, une déclaration de fonction qui inclut cette variable, et un appel à cette même
fonction. */

function saluerEtudiants(){
	alerte("Bonjour les étudiants !");
}
saluerEtudiants();

// Autre exemple qui met à jour la biographie hypothétique d'un utilisateur tout aussi hypothétique :

function actualiserBiographie() {
	var bio = document.getElementById("biographie");
	bio.textContent = "nouvelle biographie";
}
actualiserBiographie();

/* Encore une fois j'ai défini la fonction (1) et je l'ai nommé (2). Les variables (informations stockées) et les fonctions 
(instructions définissant des actions) peuvent être combinés en du JavaScript clair et lisible. Vous utiliserez ces concepts de JavaScript 
pour donner vie à vos pages web. 


