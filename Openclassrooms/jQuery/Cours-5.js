// AJOUTEZ JQUERY A VOTRE PROJET

/* Il va tout d'abord falloir inclure jQuery dans vos projets web. jQuery est disponible dans deux formats différents.

 - Le format de DEVELOPPEMENT
 - Le format de PRODUCTION

 Le format de développement est le plus gros, car il est annoté de manière à faciliter aux développeurs la compréhension du fonctionnement du code. 
 Il y a des commentaires dans le code, des blancs utiles pour séparer les sections, et d'autres choses encore. Ces annotations, parsemées tout au long
 du code, vous aident à intégrer jQuery de façon intelligente, comme si vous aviez des conseils directement au sein du code. Le fichier contenant le 
 format de développement de jQuery est simplement jquery-1.12.2.js (les nombres peuvent différer si vous n'utilisez pas la même version de jQuery).

 Le format de production est plus petit, et donc plus rapide à utiliser sur vos pages web en ligne. La plupart des annotations que l'on trouve dans
 le format développement ont été retirées, puisque l'utilisateur final sera une page web, et non un être humain qui trouverait un interêt à ces 
 remarques additionnelles dans le code. Le fichier contenant le format de production de jQuery est jquery-1.12.2.min.js. La seule différence dans 
 le nom du fichier est .min, qui indique que le contenu est compressé.

 Le format de production de jQuery comporte même tout son code sur une seule ligne pour le rendre plus petit !

 En résumé :

  - Utilisez le format de développement lorsque vous travaillez sur votre projet, afin de pouvoir voir les commentaires et annotations utiles.
  - Utilisez le format de production seulement une fois que vous aurez déployé votre projet en ligne, afin de le rendre plus performant. 

  INCLURE LES FICHIERS

  Pour inclure les fichiers jQuery dans votre code, vous disposez également de deux options (que le site soit en développement ou en production). 
  La première est un scénario classique : il faut télécharger une copie du format de développement ou de production, et l'inclure dans les fichiers de 
  votre projet. 

  Référencez-le dans votre HTML de la façon suivante  : 

  <script src="folder_name/jquery-1.12.0.js"></script>

  Il faut également mettre le fichier sur le serveur qui héberge votre site.

  Mais je VOUS RECOMMANDE plûtot la deuxième option, qui consiste à inclure jQuery via un CDN (CONTENT DELIVERY NETWORK). Les fichiers jQuery sont 
  hébergés sur des serveurs du monde entier, vous n'avez donc pas besoin de les mettre sur le vôtre ! Cela permet une meilleure performance, et qu'un
  utilisateur ait déjà le fichier dans sa mémoire lolcale ("en cache") après avoir visité un autre site qui utilise la même version de jQuery. 

  Pour inclure jQuery de cette façon, vous devrez inclure le script suivant dans votre HTML

  <script src="//code.jquery.com/jquery-1.12.0.min.js">

  un document HTML type ressemble donc finalement à ceci :

<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
        <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body>
        <p>Page content here</p>
        <!-- on inclut jQuery via CDN -->
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
        <!-- votre propre fichier dans le dossier de votre projet -->
        <script src="js/javascript_fichier_ou_vous_ecrivez_votre_jquery.js"></script>
    </body>
</html>

