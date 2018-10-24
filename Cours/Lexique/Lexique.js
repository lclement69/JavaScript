/* Lexique JS rencontré dans mes différents cours

1°) nodeType

* La propriété en lecture seule Node.nodeType représente le type de noeud.
* La propriété nodeType peut être utilisée pour distinguer les uns des autres les différents genres de noeuds tels que Element, Text et Comment.
* document.ELEMENT_NODE est utilisé pour un noeud élément (balise HTML)
* document.TEXT_NODE est utilisé pour un noeud textuel

2°) childNodes

* L'interface childNode contient des méthodes propres aux objets Node pouvant avoir un parent.
* childNode est une interface de flux et aucun objet de ce type ne peut être créé ; elle est implémentée par les objets Element, DocumentType et CharacterData.
* Chaque objet du DOM de type élément possède une propriété childNotes. 
* Il s'agit d'une collection ordonnée regroupant tous les noeuds enfants sous la forme d'objets DOM. On peut utiliser cette collection un peu comme un tableau 
pour accéder aux différents enfants d'un noeud. 
* La propriété childNodes n'est pas un véritable tableau JavaScript, mais on peut tout de même connaître sa taille avec length et accéder à ses éléments
grâce à leur indice et parcourir la collection avec une boucle for.

3°) parentNode

* Chaque objet du DOM possède une propriété parentNode qui renvoie son noeud parent sous la forme d'un objet DOM.
* Pour le noeud racine du DOM (la variable document), la valeur de parentNode est null.
* document n'a aucun noeud parent. 

4°) DOM

* Document Objet Model
* Il définit de manière standardisée la structure d'une page web et le moyen d'interagir avec elle via JavaScript.
* Le DOM représente une page web comme une hiérarchie d'objets reflétant sa structure.
* Chaque objet du DOM correspond à un noeud dans l'arborescence de la page web. 