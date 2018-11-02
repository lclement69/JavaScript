// INTEGREZ DES EVENEMENTS

/*

Faire bouger les éléments sur une page lorsqu'un utilisateur interagit avec est l'une des choses les plus satisfaisantes à faire en jQuery. 
L'utilisateur clique sur un élément ? Boom ! La page change de couleur. L'utilisateur déplace la souris ? Bim ! Tout disparaît, sauf une citation. 
Les combinaisons sont infinies. Voyons comment utiliser les événements en jQuery pour faire des choses impressionnantes avec vos éléments et 
les méthodes qui les accompagnent.

La méthode jQuery .on() est votre clé pour travailler avec les événements. Vous passez l'événement désiré (par exemple, « click ») en tant que 
paramètre à la méthode .on , suivi d'un second paramètre contenant ce qu'on appelle une fonction "gestionnaire". Au sein de la fonction, vous 
écrivez votre code jQuery qui sera exécuté quand l'événement a lieu.

Quand vous utilisez .on(), vous créez ce qu'on appelle "un écouteur d'événement" ("event listener" en anglais), ce qui signifie que le code 
attend l'arrivée de l'événement. JavaScript utilise aussi des écouteurs d'événements, ce qui fait de JavaScript et jQuery des outils de choix 
pour la construction de pages avec lesquelles l'utilisateur peut interagir. jQuery le fait simplement d'une manière plus courte que 
du JavaScript pur.

Voici une liste des événements courants que vous pouvez passer à la méthode .on. Vous pouvez facilement deviner leurs fonctionnalités 
grâce à leurs noms :

.on("click", function() { … }

.on("scroll", function() { … }

.on("hover", function() { … }

.on("mouseover", function() { … }

.on("mouseenter", function() { … }

.on("mouse leave", function() { … }

.on("keydown", function() { … }

.on("keyup", function() { … }

.on("keypress", function() { … }

.on("focus", function() { … }

.on("blur", function() { … }

.on("resize", function() { … }

Auparavant, au lieu de passer le nom de l'événement comme un paramètre, jQuery utilisait des méthodes spécifiques pour chaque événement. 
Vous pourrez voir ces méthodes dans certains fichiers de code ; techniquement, vous pouvez toujours les utiliser, mais utiliser .on( ) 
avec des paramètres est un meilleur choix.

.click()
.scroll()
.hover()
.mouseover()
.mouseout()
.mouseenter()
.mouseleave()
.keydown()
.keyup()
.keypress()
.focus()
.blur()
.resize()

Comparons les deux. Par exemple, pour provoquer une alerte quand quelqu'un clique sur un élément de paragraphe, vous devez écrire :

$('p').on( 'click', function () {
    alert("Quelqu'un a cliqué sur un paragraphe!")
});

En raccourci, ce serait:

$('p').click(function () {
    alert ("Quelqu'un a cliqué sur un paragraphe!")
});

Si vous utilisez la méthode .on()  votre code est plus lisible de gauche à droite. Comme c'est aussi une fonctionnalité moderne de jQuery, 
vous devriez choisir cette option !

L'OBJET "EVENT"

Parfois, vous aurez besoin d'informations sur l'événement lui-même pour accomplir ce que vous voulez faire dans votre code. 
Par exemple, imaginons que vous voulez que l'heure apparaisse à côté d'un élément lorsque l'événement a lieu.

L'objet "event" a plusieurs types de propriétés. Bien sûr, vous avez le type, qui décrit le type d'événement. 
Il y a également le target de l'événement (l'élément qui a lancé l'événement, comme p ), 
pageX et pageY (la position de la souris à partir de la gauche et le haut de ce que l'utilisateur voit de la page), 
timeStamp  (l'événement a eu lieu x millisecondes après le 1/1/1970, une base que vous pouvez utiliser pour calculer la date et l'heure exactes), 
et plus encore.

Pour interagir avec l'objet "event" dans votre fonction, passez l'événement en tant que paramètre dans la fonction. 
Écrivez un paragraphe en HTML qui, quand un utilisateur clique dessus, se transforme en texte qui 
indique à l'utilisateur à quel moment il a cliqué.

1. Déclarez une variable qui référence tous les paragraphes.
2. Passez l'événement en tant que paramètre à la fonction.
3. Créez une variable de Date.
4. Remplacer le paragraphe par le texte "You clicked on [date]".

var $p = $('p');
$p.on('click', function(event) {
  var date = new Date(event.timeStamp);
    $p.text("You clicked on: " + date)
});

http://codepen.io/eclairereese/pen/GZOKer

Une application simple, oui, mais passer l'objet "event" peut être très utile. 
Si vous avez une liste sur une page (des choses à acheter au supermarché par exemple), et que vous voulez que les utilisateurs 
puissent déplacer certains éléments dans une section différente (par exemple, dans une liste dédiée aux fruits à acheter) en cliquant dessus, 
vous aurez besoin de connaître les éléments exacts sur lesquels ils ont cliqué. Vous pouvez obtenir cela avec l'object "event."



