// JAVASCRIPT, JQUERY : C'EST QUOI LA DIFFERENCE ?

/* jQuery permet d'économiser une tonne d'énergie en effectuant des choses qui prendraient une éternité en JavaScript ordinaire. 

JavaScript est un langage de programmation (inventé par Brendan Eich en 1995) et jQuery est une bibliothéque JavaScript open-source (inventée
par John Resig en 2006) 

Insérer du JavaScript pur (le langage de programmation) dans les projets peut changer le comportement des sites, qui déterminent le contenu
et l'apparence des pages, en y ajoutant une couche d'interactivité.

jQuery (la fameuse bibliothèque JavaScript open) permet d'exploiter la puissance de JavaScript. On peut par exemple :

 - Ajouter, supprimer ou modifier des éléments HTML au sein d'une page,
 - Changer les styles des éléments de la page en modifiant le CSS qui leur est associé,
 - Animer des éléments d'une page,
 - Envoyer et recevoir des données depuis un serveur grâce à AJAX (asynchronous JavaScript and XML, c'est à dire JavaScript et asynchrones) pour
 ne plus avoir besoin de recharger les pages après validation d'un formulaire,
 - Et bien plus encore !!

Utiliser jQuery permet de profiter d'une plus grande compatibilité avec les différents navigateurs. Le JavaScript pur est réputé pour avoir des 
spécificités dans chaque navigateur comme Internet Explorer, Chrome, Safari, etc ... qui vont potentiellement exécuter le code JavaScript
différemment les uns des autres. Jquery écite cette prise de tête car il est conçu dans un esprit de compatibilité maximale.

Cette compatibilité est rendue possible par l'utilisation que fait jQuery des SELECTEURS CSS. Sélectionner des éléments devient plus rapide
et plus direct qu'en JavaScript classique, la plupart des développeurs web comprennent déjà les sélecteurs CSS, ils n'ont aucun mal à se 
servir de jQuery.

A QUOI RESSEMBLE JAVASCRIPT ET JQUERY ?

Exemple : En JavaScript puis en dessous l'équivalent en jQuery, le bout de code sert à ajouter une classe "starred" à chaque élément de la liste*/

// En JavaScript

var listItems = document.querySelectorAll('li');
var i;
for ( i = 0; i < listItems.length; i++) {
	listItems[i].className = 'starred';
}

// En jQuery

$("i").addClass("starred");

/* On remarque qu'il y a beaucoup de POINTS-VIRGULES, de parenthèses, crochets et autres accolades en JavaScript, tandis qu'il y a
de nombreux $ (signe dollard) en jQuery. 

A l'aide de tous ces symboles on peut accomplir les mêmes taches en JavaScript et jQuery. Mais en générale jQuery demandera moins d'efforts et de code 
que le JavaScript pur.

// SUPER MAIS COMMENT UTILISER JAVASCRIPT ET JQUERY ?

/* jQuery a beau offrir une foule de fonctionnalités, CE N'EST NI PLUS NI MOINS QU'UN SIMPLE FICHIER JAVASCRIPT ! Pour l'utiliser dans les projets
on doit l'inclure dans nos pages web, ce que l'on apprendra à faire dans la deuxième partie. En incluant le fichier jQuery dans nos projets on pourra :

 1°) Sélectionner des éléments en utilisant les sélecteurs,
 2°) Faire des choses aux éléments sélectionnés grâce à des méthodes

Ces deux actions de base vont nous permettre d'accomplir tous les cas d'usage de jQuery mentionnés précédemment. On organisera ensuite les fichiers 
JavaScript de la même manière que l'on organisera le CSS ou d'autres langages dans nos projets; 
Soit via des fichiers externes, soit directement dans notre HTML.   




