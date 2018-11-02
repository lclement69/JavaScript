// UTILISEZ DES METHODES JQUERY

/* 

Après avoir sélectionné vos éléments dans jQuery, je suppose que vous voulez leur donner vie ! Pour cela, vous devrez utiliser des méthodes jQuery. 
Commençons à étudier ces méthodes dans une approche théorique. Si vous n'avez fait que du HTML et du CSS avant ce cours, 
les méthodes sont un nouveau concept pour vous. Mais pas d'inquiétude, elles ressemblent aux fonctions JavaScript que nous avons étudiées 
un peu plus tôt dans ce cours.

On "appelle" une méthode sur un ensemble d'objets, leur appliquant ainsi les actions de la méthode. Voici le format standard d'une instruction jQuery :

1.Sélection d'un élément converti en un objet jQuery avec $()
2.Point
3.Nom de la méthode
4.Parenthèses, vides ou contenant des paramètres

Les points 1 et deux sont déjà faits, et le 3 sera une méthode prédéfinie de jQuery. Mais les concepts que j'ai toujours trouvés les plus difficiles 
à enseigner en programmation, ce sont les paramètres que vous envoyez à la méthode. Les paramètres sont des INFORMATIONS que vous envoyez 
à la méthode pour qu'elle puisse exécuter une action particulière. Dans la vraie vie, on peut par exemple imaginer que je veuille engager 
quelqu'un pour peindre mon bureau. Je lui donne une action à faire – peindre – mais si je ne lui donne pas d'information supplémentaire, 
je ne vais pas obtenir le résultat que je veux. Les informations que je devrais fournir seraient la couleur de peinture, le motif, quels murs 
il faut peindre, etc. Ce genre d'informations est l'équivalent d'un paramètre en programmation.

Dans les parenthèses à côté du nom de la méthode jQuery, vous pouvez transmettre des paramètres si vous en avez besoin. 
Ces paramètres peuvent être un nom de couleur, une durée pour un effet, du texte, et bien d'autres choses encore. 
Cela dépend de la méthode. Si vous n'en avez pas besoin, laissez les parenthèses vides.


LES EFFETS

Nous allons évoquer les méthodes les plus amusantes en premier. Grâce à du jQuery fondé sur les animations et les effets, 
il est possible de déclencher des choses très sympa sur les objets sélectionnés, comme faire en sorte qu'un élément :

- Apparaisse après le clic sur un bouton.
- Apparaisse lentement sur une page.
- Glisse vers le haut ou le bas de la page.
- Exécute vos propres animations personnalisées.

.show() : affiche le(s) élément(s) sélectionné(s).

.hide() : masque le(s) élément(s) sélectionné(s).

.toggle() : affiche ou masque le(s) élément(s) sélectionné(s) en fonction de son/leur état actuel.

.fadeIn() : fait apparaître en fondu le(s) élément(s) sélectionné(s).

.fadeOut() : fait disparaître en fondu le(s) élément(s) sélectionné(s).

.fadeTo() : amène progressivement le(s) élément(s) sélectionné(s) à une opacité donnée.

.slideUp() : masque le(s) élément(s) sélectionné(s) avec un défilement vers le haut.

.slideDown() : masque le(s) élément(s) sélectionné(s) avec un défilement vers le bas.

.slideToggle() : affiche ou masque le(s) élément(s) sélectionné(s) avec un défilement en fonction de son/leur état actuel.

Pour chaque élément ci-dessus, vous avez la possibilité de transmettre plusieurs paramètres optionnels. 
Très souvent, ce sera la DUREE DE L'EFFET EN MILLISECONDES. 
Par exemple, .fadeIn(1000)  fera apparaître l'élément en fondu sur une durée de 1000 millisecondes (1 seconde). 
On peut aussi envoyer les chaînes 'fast'  ou  'slow' à la place d'un nombre.'slow' représente une durée de 600 millisecondes, 
et  'fast' représente une durée de 200 millisecondes.

Si vous n'envoyez aucun paramètre, la durée de l'effet sera de 400 millisecondes.

MANIPULATION DE CONTENU

Grâce aux méthodes jQuery dédiées au contenu, il est possible de changer le texte, les éléments et les attributs d'une page. 
Cela peut être utile lorsqu'on souhaite que le contenu change au clic sur un bouton, quand l'utilisateur effectue une action donnée, 
si quelque chose se produit sur la page, etc.

.html() : remplace le contenu HTML de la page

.text() : remplace le texte de la page

.replaceWith() : remplace le(s) élément(s) sélectionné(s) entièrement, pas juste le texte ou le HTML à l'intérieur

.remove() : supprime les éléments de la page

.before() : insère du contenu avant le(s) élément(s) sélectionné(s)

.after() : insère du contenu après le(s) élément(s) sélectionné(s)

.prepend() : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (après la balise HTML ouvrante)

.append() : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (avant la balise HTML fermante)

.attr() : définit un attribut et sa valeur ou simplement récupère sa valeur

.removeAttr() : supprime un attribut, RIP

.addClass() : ajoute une nouvelle classe à/aux élément(s) sélectionné(s) (sans remplacer sa classe actuelle)

.removeClass() : supprime une classe du/des élément(s) sélectionné(s)

.css() : mon préféré. Récupère ou définit les propriétés CSS d'un élément, même plusieurs propriétés à la fois.

PARCOURS DU DOM

Parfois, on a besoin de modifier des éléments relatifs à d'autres éléments au sein du DOM. En identifiant les éléments de cette manière, 
il est possible de modifier UNIQUEMENT ceux qui sont à l'intérieur d'autres éléments, ceux qui descendent d'autres éléments, etc. 
Voici quelques méthodes pour faire ça :

.find() : trouve un/des élément(s) correspondant au paramètre dans la sélection actuelle

.parent() : accède au parent direct d'un/des élément(s) ou à ses parents si on utilise .parents()

.children() : accède aux enfants de(s) élément(s)

TAILLE ET POSITION

Les méthodes jQuery dédiées aux dimensions et à la position permettent d'ajuster les proportions et la disposition des éléments.

.height() : hauteur d'un cadre sans les marges intérieures, extérieurs ni les bords

.width (): largeur d'un cadre sans les marges intérieures, extérieurs ni les bords

Si vous voulez vraiment pousser à fond votre utilisation des dimensions et du redimensionnement des éléments, 
il existe aussi des méthodes jQuery qui prennent en compte les bords, les marges intérieures et extérieures, ensemble ou séparément.

.innerHeight() : hauteur en comptant les marges intérieures

.innerWidth() : largeur en comptant les marges intérieures

.outerHeight() : hauteur en comptant les marges intérieures et les bords

.outerWidth() : largeur en comptant les marges intérieures et les bords

.outerHeight(true) : même méthode que ci-dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.

.outerWidth(true) : même méthode que ci-dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.

Le positionnement des éléments peut être géré grâce à deux méthodes :

.offset() : définit les coordonnées d'un élément relativement au coin en haut à gauche de l'objet document
.position() : définit les coordonnées d'un élément relativement à son parent direct, ce qui peut être utile 
pour positionner des éléments au sein du même élément DOM. Mais vous utiliserez probablement .offset plus souvent.

