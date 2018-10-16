
// Sélection d'éléments selon leur balise

/* Tous les éléments du DOM possèdent une méthode getElementsByTagName. celle-ci rensvoie une liste des éléments qui portent le nom de la balise 
qui a été passée en paramètre lors de l'appel.*/

/* La recherche s'effectue sur l'ensemble des sous-éléments du noeud sur lequel la méthode est appelée, et pas seulement ses enfants directs. */

/* Avec cette méthode, la selection du premier titre h2 de notre page d'exemple devient plus facile ! */

var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

/* Le nom de la variable titresElts stockant la liste des titres se termine par Elts, abréviation des "éléments". Cela permet d'indiquer que le contenu
de cette variable correspond à des éléments du DOM, et non à de simples valeurs. Il s'agit d'une bonne pratique. Une variable stockant un seul élément 
du DOM sera suffixée par Elt, abréviation de "élément".

// SELECTION D'ELEMENTS SELON LEUR CLASSE

/* Les éléments du DOM disposent également d'une méthode getElementsByClassName. Elle renvoie une liste des éléments ayant le nom de classe passée en 
pramètre.Là encore, la recherche concerne l'ensemble des sous-éléments du noeud sur laquelle la méthode est appelée. Pour selectionner et afficher l'ensemble 
des éléments du document ayant pour classe "merveilles", on peut écrire le code ci-dessous */

var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
	console.log(merveillesElts[i]);
}

// SELECTION D'UN ELEMENT SELON SON IDENTIFIANT 

/* Chaque élément du DOM propose une methode getElementById qui renvoie parmi tous ses sous éléments celui qui possédant l'identifiant passé en 
paramètre. Le code ci-dessous permet de sélectionner et d'afficher la liste portant l'identifiant "nouvelles"*/

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

/* Contrairement au deux précédentes, la méthode getElementById ne contient pas de "s" après le mot "Element".*/ 

// SELECTION D'ELEMENTS A PARTIR D'UN SELECTEUR CSS

/* Les méthodes de sélection que nous venons d'étudier constituent un net progrès par rapport à un parcours noeud par noeud du DOM. Malgré tout, il
existe des cas de figure pour lesquels on souhaiterait plus de souplesse. 
Pour faciliter la selection d'éléments suivant des critères complexes, le DOM s'est enrichi de deux nouvelles méthodes. La première, nommée querySelectorAll
permet de rechercher des éléments à partir d'un selecteur CSS. 
Grâce à cette méthode, on peut rechercher des éléments du DOM en définissant un sélecteur identique à celui qu'on utilisait dans une feuille de style css.

Voici quelques exemples ci-dessous */

// Tous les paragraphes 
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Voici comment on peut utiliser querySelectorAll pour sélectionner les merveilles antiques qui existent toujours.
// tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

/*l'autre méthode de recherche d'éléments à partir d'un sélecteur CSS s'appelle queryselector. Elle fonctionne de manière identique à querySelectorAll, 
mais renvoie uniquement le premier élément correspondant au selcteur passé en paramètre.*/

// Le premier Paragraphe
console.log(document.queryselector("p"));

// Nombre d'éléments à obtenir    // Critère de sélection      // Méthode à utiliser
/*       Plusieurs   					Par Balise                    getElementsByTagName
         Plusieurs						Par Classe                    getElementsByClassName
         Plusieurs						Autre que Balise ou Classe    querySelectorAll
         Un seul                        Par identifiant               qetElementById
         Un seul (le premier)           Autre que par identifiant     querySelector */

// OBTENIR DES INFORMATIONS SUR LES ELEMENTS

// Le DOM permet également d'obtenir des informations sur des éléments sélectionnés. 

// a°) Sur le contenu HTML

// La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM
// ex : 
console.log(document.getElementById("contenu").innerHTML);

// b°) Sur le contenu Textuel

// La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans l'éventuel balisage HTML
// ex :
console.log(document.getElementById("contenu").textContent);

// c°) Les Attributs

// La methode getAttribute peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre
// ex :
console.log(document.querySelector("a").getAttribute("href"));

// Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs id, href et value

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

// On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute
if (document.querySelector("a").hasAttribute("target")){
	console.log("Le premier lien possède l'attribut target");
} else {
	console.log("Le premier lien ne possède pas l'attribut target");
}

// LES CLASSES
/* Dans une page web, une balise peut posséder plusieurs classes. La propriété classList permet de récupérer la liste des classes d'un élément
du DOM. Elle s'utilise comme un tableau */

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classlist;
console.log(classes.length); // Affiche 1 : L'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

// On a aussi la possibilité de tester la présence d'une classe dans un élément en appelant la méthode contains sur la liste des classes.
if (document.getElementById("antiques").classlist.contains("merveille")) {
	console.log("L'élément identifié par antiques possède la classe merveille");
} else {
	console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}

// EN RESUME

// Ce chapitre nous a permis de découvrir comment parcourir la structure DOM d'une page web. Voici les informations à retenir :

	// Plutôt que de parcourir le DOM noeud par noeud, on peut accéder rapidement à un ou plusieurs éléments en utilisant des méthodes de selection.
	
	/* Les méthodes getElementsByTagName, getElementsByClassName et getElementById permettent respectivement de rechercher des éléments par nom de balise,
	par classe et par identifiant. Les deux premières méthodes renvoient une liste, la dernière renvoie un seul élément. */

	/* Les méthodes querySelectorAll et querySelector permettent de rechercher des éléments en utilisant un sélecteur CSS. La première méthode renvoie 
	tous les éléments correspondants, la seconde renvoie uniquement le premier. */

	// La propriété innerHTML renvoie le contenu HTML d'un élément. La propriété textContent renvoie son contenu textuel, sans le balisage HTML. 

	// Les méthodes getAttribute et hasAttribute permettent d'accèder aux attributs d'un élément. 

	// La propriété classList et sa méthode contains permettent d'accéder aux classes d'un élément. 

