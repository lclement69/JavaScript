
if (document.body,nodeType === document.ELEMENT_NODE) { 
// Chaque objet du DOM à une propriété nodeType qui indique son type. 
// === veut dire égalité stricte, == veut dire égalité abstraite. On préférera prendre l'égalité stricte. 
/* La valeur de la propriété nodeType indique son type, la valeur de cette propriété est soit document.ELEMENT_NODE (Noeud élément / balise html),
soit document.TEXT_NODE pour un noeud textuel.*/
	console.log("Body est un noeud élément");
} else {
	console.log("Body est un noeud textuel");
}
// Seuls les noeuds de type élément peuvent avoir des sous-noeuds (appelés enfants).
// FIN




var h = document.head; 
console.log(h);
// La variable document correspond à l'élément <html>
// La variable h contient l'objet head du DOM

var b = document.body; 
console.log(b);
// La variable b contient l'objet body du DOM

// FIN



/* La propriété childNodes n'est pas un véritable tableau de JavaScript mais on peut tout de même connaitre sa taille avec length, accéder à ses
éléments grâce à leur indice et parcourir la collection avec une boucle for. */

console.log(document.body.childNodes[0]);
// Accès au premier enfant du noeud body
console.log(document.body.childNodes[1]);
// Accès au deuxième enfant du noeud body

// Nous allons parcourir la liste des noeuds enfants, pour cela nous allons recourir à la boucle for comme dans l'exemple ci-dessous
for (var i = 0; i <document.body.childNodes.length; i++) {
	console.log(document.Body.childNodes[i]);
}
// On obtient donc la liste des noeuds enfants du noeud Body

// ATTENTION LES ESPACES, LES RETOURS A LA LIGNE ENTRE LES BALISES CORRESPONDENT A DES NOEUDS TEXTUELS DANS LE DOM

// FIN


var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud de body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent

/* Chaque objet du DOM possède une propriété parentNode qui renvoie son noeud parent sous la forme d'un objet DOM. Pour qu'un noeud racine de DOM 
(La variable document), la valeur de parentNode est null : document n'a aucun noeud parent. */



// RESUME DU CHAPITRE 

	/* Une page web est un document structuré contenant à la fois du texte et des balises HTML. Grâce à JavaScript, on peut acccéder à la structure
	d'une page affichée dans un navigateur, et même la modifier.*/

	/* Le DOM (DOCUMENT OBJECT MODEL), définit de manière standardisée la structure d'une page web comme une hérarichie d'objets reflétant sa structure.
	Chaque objet du DOM correspond à un noeud dans l'arborescence de la page web.*/

	/* La variable JavaScript document permet d'accéder à la racine de l'arborescence du DOM et correspond à l'élément <html> de la page. */

	/* Les objets du DOM disposent de propriétés et de méthodes utilisables avec JavaScript. Parmi ces propriétés, nodeType renvoie le type de noeud,
	childNodes contient une collection de noeuds enfants et parentNode renvoie le noeud parent. */



