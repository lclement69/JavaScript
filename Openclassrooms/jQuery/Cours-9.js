// COMBINEZ TOUT CE QUE VOUS AVEZ APPRIS

/*

Prenez un moment pour traiter le code HTML et JavaScript suivant (et dans une certaine mesure, CSS). 
Pensez à la façon dont ils pourraient travailler ensemble. Il y a un lien vers un aperçu du code à la fin de la page.

Ici notre HTML :

<html>
  <head>
    <title>Course example</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <div id="list_section">
      <h1 id="header">To-do list</h1>
      <ul>
        <li class="item">Buy movie tickets</li>
      </ul>
      <div id="newItemButton"><button href="#">new item</button></div>
      <form id="newItemForm">
        <input type="text" id="itemField" placeholder="Item" />
        <input type="submit" id="add" value="add" />
      </form>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.3.js"   integrity="sha256-1XMpEtA4eKXNNpXcJ1pmMPs8JV+nwLdEqwiJeCQEkyc="   crossorigin="anonymous"></script>
    <script src="js/your_js_file.js"></script>
  </body>
</html>

Ici notre JavaScript :

$(function() {
  
  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
  });

  $list.on('click', 'li', function() {
    var $this = $(this);
    $this.remove();
  });

});

Ici notre CSS :

body {
  background-color: #85cff7;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

#list_section {
  text-align: center;
}

h1 {
  color: white;
  margin: 0px auto;
  padding: 20px;}

ul {
  padding: 0;
}

li {
  background-color: #fff;
  color: #000;
  font-size: 20px;
  list-style-type: none;
  width: 20%;
  margin: 0px auto;
  border-radius: 3px;
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 10px;
}

p {
  background-color: #fff;
  color: #666; 
  padding: 10px;
  display: inline-block;
  margin: 20px auto 20px auto;
  width: 80%;
  border-radius: 5px;
  text-align: center;}

.item {
  background-color: #fff;
  color: #000;
}

input[type='text'] {
  font-size: 12px;
  padding: 6px;
  border: 1px solid #000;
  border-radius: 3px;
}

input[type='submit'] {
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  border: none;
  padding: 5px;
}

#newItemButton {
  display: none;
}

#itemField {
  margin-top: 60px; 
  width: 10%;
}
Testez le code ici : http://codepen.io/eclairereese/pen/qZxvPz

Essayez d'identifier les variables, les effets, les événements, et plus encore ! 
Prenez au moins 30 minutes pour lire et jouer avec ce code.



