// SELECTIONNER LES ELEMENTS

/* Parmi les joies de jQuery, il y a l'extrême simplicité de la façon dont on sélectionne des élémentsdans une page. Vous aurez peut-être besoin 
d'identifier un élément individuel, de multiples éléments, des éléments qui satisfont certinas critéres, etc...pour le ou les modifier. jQuery permet
d'identifier et de selectionner des éléments en utilisant un concept que vous connaissez peut-être déjà si vous avez construit des pages web 
auparavant : Les seclecteurs CSS. 

La bonne nouvelle, c'est que vous pouvez sélectionner des éléments en jQuery de la même façon que vous séectionnez des éléments en CSS, notamment
par type, class et ID. Mais la liste est bien plus étendue que ça...

Exemple :

- En CSS

h1 {
	Régle de style ici
}

Avec jQuery, il faut passer par une étape supplémentaire. Entrer le fameux signe dollar de jQuery $() est un raccourci vers une fonction appelée 
jQuery() qui trouve un élément dans une page et crée des objets qui référencent les éléments trouvés.

$("p") : Sélectionne tous mes éléments p(paragraphe)

jQuery ne peut pas être utilisé sur les éléments tant que ceux-ci ne sont pas des objets jQuery, ce qui leur donne accès à l'ensemble du monde jQuery. 
Les envelopper dans la méthode $() les trnasforme en OBJETS JQUERY, sur lesquels vous pouvez appeler des METHODES JQUERY. Avant cela, ils sont 
simplement des élements du DOM et ne vont pas répondre aux méthodes jQuery. 

1°) SELECTION PAR RELATION

Les éléments qui sont "liés" sont souvent désignés par du vocabulaire familial. Vous avez des éléments PARENT, ENFANT et frères dans votre structure
de balises, et déterminer quel élément est quel membre de la famille revient à déterminer la structure tout entière. On utilise souvent cela pour 
selectionner les éléments en fonction de leur relation à d'autres éléments, à la fois en CSS et en jQuery ; voyons ensemble comment faire 
(ou dépoussiérons nos connaissances, si vous en avez déjà vu ça).

Les descendants

$("ancêtre descendant") : sélectionne tous les éléments qui sont au sein d'un élément ancêtre :
(exemple : https://codepen.io/eclairereese/pen/EKbORj)

exemple : sélectionne tous les li au sein d'un ol dans la structure de balises.

jQuery : $("ol li")

HTML : 

<ol>
    <li>Premier élément</li> <!-- sélectionné -->
    <li>Second élément</li> <!-- sélectionné -->
    <ul>
        <li>Élément sans ordre</li> <!-- sélectionné -->
    </ul>
</ol>

PARENTS ET ENFANTS

$("parent > enfant") : sélectionne tous les enfants qui sont descendants immédiats d'un élément parent (aussi appelé combinateur d'enfant)
(exemple : https://codepen.io/eclairereese/pen/QNOJxJ)

Exemple : sélectionner tous les li qui descendent directement de ol

jQuery : $ ("ol > li")

HTML :

<ol>
    <li>Premier élément</li> <!-- sélectionné -->
    <li>Second élément</li> <!-- sélectionné -->
    <ul>
        <li>Élément sans ordre</li>
    </ul>
</ol>

LES JUMEAUX

$(élément * frères) : sélectionne tous les frères de premier élément spécifié. 

Exemple : sélectionner les frères li du premier li

jQuery : $("li#premier * li")

HTML :

<ul>
    <li id="premier">Un</li>
    <li id="deuxième">Deux</li> <!-- sélectionné -->
    <li id="troisième">Trois</li> <!-- sélectionné -->
</ul>

$ (élément + frère) : sélectionne l'élément frère qui suit immédiatemment l'élément spécifié.

Exemple : sélectionner le premier frère d'un li donné

jQuery : $("li#premier + li")

HTML :

<ul>
    <li id="premier">Un</li>
    <li id="deuxième">Deux</li> <!-- sélectionné -->
    <li id="troisième">Trois</li>
</ul>

exemples : https://codepen.io/eclairereese/pen/zqPMLx et https://codepen.io/eclairereese/pen/WwXYKa

2°) LES FILTRES

Les selecteurs CSS c'est super, mais jQuery fournit même des selecteurs supplémentaires !!

:first Sélectionne la première occurence d'un élément (exemple : https://codepen.io/eclairereese/pen/MyOzBM)

jQuery : $("p:first")

HTML :

<p>Premier texte</p> <!-- sélectionné -->
<p>Deuxième texte</p>
<p>Troisième texte</p>

:last Sélectionne la dernière occurence d'un élément (exemple : https://codepen.io/eclairereese/pen/VarVGb)

jQuery : $("p:last")

HTML : 

<p>Premier texte</p>
<p>Deuxième texte</p>
<p>Troisième texte</p> <!-- sélectionné -->

:eq(indice) Sélectionne l'élément à un indice donné (c'est là que les tableaux deviennent bien pratiques !!
(Exemple : https://codepen.io/eclairereese/pen/bpYQxx)

jQUERY : $("li:eq(1)")

HTML :

<ul>
    <li>Premier (donc indice 0)</li>
    <li>Deuxième (donc indice 1)</li> <!-- sélectionné-->
    <li>Troisième (donc indice 2)</li>
</ul>

:gt(indice) Sélectionne le ou les éléments situés à un indice supérieur au nombre spécifié

exemple https://codepen.io/eclairereese/pen/XdzyxJ

jQuery : $("li:gt(0)")

HTML : 

<ul>
    <li>Premier (donc indice 0)</li>
    <li>Deuxième (donc indice 1)</li> <!-- sélectionné-->
    <li>Troisième (donc indice 2)</li> <!-- sélectionné-->
</ul>

:lt(indice) Même concept mais pour les éléments à un indice plus petit que le nombre spécifié.
Exemple : https://codepen.io/eclairereese/pen/pydQOB

jQuery : $("li:lt(2)")

HTML :

<ul>
    <li>Premier (donc indice 0)</li> <!-- sélectionné-->
    <li>Deuxième (donc indice 1)</li> <!-- sélectionné-->
    <li>Troisième (donc indice 2)</li>
</ul>

:not(sélecteur) Sélectionne les éléments qui ne sont pas ... eh bien, le selecteur !!
Exemple : https://codepen.io/eclairereese/pen/xVPQyV

jQuery : $("li:not('.legume')")

HTML : 

<ul id="courses">
    <li class="legume">Aubergine</li>
    <li class="legume">Carotte</li>
    <li class="fruit">Pomme</li> <!-- sélectionné -->
</ul>

Comme lorsque l'on cite en français, lorsque vous utilisez plusieurs paires de guillemets imbriquées dans une phrase, 
vos guillemets intérieurs 
doivent être différents des guillemets extérieurs. (d'où l'utilisation de guillemets simples et doubles dans $("li:not('.legume')") , 
comme 
dans "Il a dit : 'Bonjour.'").

LES FILTRES ADDITIONNELS

Vous commencez à comprendre comment utiliser les filtres (deux points, nom du filtre, paramètres si nécessaire) ; sachez que la liste des 
possibilité est assez grande ! Il y a les filtres de visibilité, les filtres de contenu, les filtres d'attribut, et 
même des filtres de formulaires.

Voici quelques exemples couramment utilisés :

:hidden : sélectionne les éléments cachés (les éléments dont la valeur CSS display est none, qui sont detype="hidden", ont une hauteur et 
une largeur nulles, ou ont un ancêtre lui-même invisible)

:visible : sélectionne les éléments visibles

:contains("texte") : éléments qui contiennent le texte spécifié

:has("élément") : éléments qui contiennent l'élément spécifié

[attribut] : éléments qui ont l'attribut spécifié, par exemple $("[align]")

[attribut="valeur"] : éléments qui ont l'attribut et la valeur spécifiés, par exemple $("[align=center]")

[attribut!="valeur"] : Les éléments qui n'ont pas l'attribut et la valeur spécifiés, par exemple $("[align!=center]")

Il y a même un ensemble de sélecteurs pour les éléments de formulaires, ce qui est très utile lorsque vous utilisez jQuery pour valider 
des formulaires avant que les utilisateurs ne les envoient (c'est assez courant). Ces filtres sont des raccourcis pour $("type=XXXXXXX]"). 
Par exemple, $(":checkbox") est la même chose que $( "[type=checkbox]" ), mais le raccourci du filtre vous permet d'en écrire moins !

:input : sélectionne les éléments input

:password : sélectionne les zones de mot de passe

:text : sélectionne les zones de teste

:checkbox : sélectionne les cases à cocher

:radio : sélectionne les boutons d'option

:submit : sélectionne les boutons de validation


Rappelez-vous qu'il n'est pas important de se souvenir de tous ces sélecteurs. Lorsque vous aurez besoin d'utiliser jQuery sur 
certains éléments, consultez la documentation jQuery pour trouver le meilleur moyen de les sélectionner, maintenant que vous comprenez 
globalement comment on fait pour sélectionner des éléments !



















