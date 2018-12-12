// Déclaration d'une fonction

function maFonction(){
	// Instructions de la fonction
}
maFonction(); // Appel de la fonction maFonction


// Affectation d'une fonction anonyme à la variable maVariable

const maVariable = function(param1, param2,...){
	// Instructions pouvant utiliser param1, param2,...
}
// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);


// Affectation d'une fonction anonyme à la variable maVariable

const maVariable = (param1, param2,...) => {
	// Instruction pouvant utiliser param1, param2, ...
}
// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);


// Exemple basic utilisant une fonction

function direBonjour() { // Déclaration d'une fonction nommée direBonjour
	console.log("Bonjour !!");
}
console.log("début du programme"); 
direBonjour(); // Appel de la fonction direBonjour
console.log("fin du programme");


// Valeur de retour d'une fonction

function direBonjour() {
	return "Bonjour !!";
}
console.log("Début du programme");
const resultat = direBonjour();
console.log(resultat); // "Bonjour !"
console.log("Fin du programme");


//Déclaration de variables à l'interieur d'une fonction 

function direBonjour() {
	const message = "Bonjour !";
	return message;
}
console.log(direBonjour()); // "Bonjour !"


// Passage de paramètre

function direBonjour(prenom) {
	const message = `Bonjour, ${prenom} !`;
	return message;
}
console.log(direBonjour("Baptiste")); // "Bonjour, Baptiste !" (Baptiste est le 1er argument)
console.log(direBonjour("Sophie")); // "Bonjour, Sophie !" (Sophie est le 2ème argument)


// Déclaration d'une fonction acceptant des paramètres

// Déclaration de la fonction maFonction
function maFonction(param1, param2, ....) {
	//instructions pouvant utiliser parma1, param2, ...
}
// Appel de la fonction maFonction
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maFonction(arg1, arg2,...)


/* La portée des paramètres d'une fonction se limite au corps de cette fonction. Ainsi, on peut utiliser comme argument une variable externe portant le même nom qu'un
paramètre. L'exemple ci dessous est donc parfaitement valide : */

function direBonjour(prenom) {
	//ici, prenom est le paramètre de la fonction
	const message = `bonjour, ${prenom} !`;
	return message;
}
//ici, prenom est une variable utilisée comme argument
let prenom = "Baptiste";
console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
prenom = "Thomas";
console.log(direBonjour(prenom)); // "Bonjour, Thomas !"


/* Lors d'un appel à une fonction acceptant des paramètres, le nombre et l'ordre des paramètres doivent être respectés. 
Exemple : */

function presentation(prenom, age) {
	console.log(`Tu t'appelles ${prenom} et tu as ${age} ans`);
}
presentation("Garance", 10); // "Tu t'appelles Garance et tu as 10 ans"
presentation(6, "prosper"); // "Tu t'appelles 6 et tu as Proper ans"


/* La fonction créée ci-dessous est anonyme et directement affectée à la variable bonjour. La valeur de cette variable est donc une fonction. 
Cette manière de créer une fonction est appelée expression de fonction. */

const bonjour = function(prenom) {
	const message = `Bonjour, ${prenom} !`
	return message;
}
console.log(Bonjour("Thomas")); // "Bonjour, Thomas !"


// La syntaxe pour créer une fonction anonyme et l'affecter à une variable est :

// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = function(param1, param2, ...) {
// instruction pouvant utiliser param1, param2, ...
}
// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de param2..
maVariable(arg1, arg2, ...);


// Carré d'un nombre, exercice 1

// Renvoie le carré de x
function carre1(x) {
  return x * x;
}

// Renvoie le carré de x
const carre2 = x => x * x;

console.log(carre1(0)); // 0
console.log(carre1(2)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(2)); // 4
console.log(carre2(5)); // 25


// Renvoie le minimum entre a et b, exercice 2
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

// Solution alternative avec une déclaration de fonction
/* function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
} */

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9)); // 9
console.log(min(1, 1)); // 1


// Calculatrice, exercice 3

// Effectue les 4 opérations arithmétiques de base
function calculer(nbGauche, operation, nbDroite) {
  let resultat;
  switch (operation) {
    case "+":
      resultat = nbGauche + nbDroite;
      break;
    case "-":
      resultat = nbGauche - nbDroite;
      break;
    case "*":
      resultat = nbGauche * nbDroite;
      break;
    case "/":
      resultat = nbGauche / nbDroite;
      break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6)); // 10
console.log(calculer(4, "-", 6)); // -2
console.log(calculer(2, "*", 0)); // 0
console.log(calculer(12, "/", 0)); // Infinity










