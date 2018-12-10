// Exemple de boucle while

console.log("Début du programme");
let nombre = 1;
while (nombre <= 5) {
	console.log(nombre);
	nombre++;
}
console.log("Fin du programme");

// Exemple d'une boucle for

let compteur;
for (compteur = 1; compteur <= 5; compteur++) {
	console.log(compteur);
}

// Déclaration d'une variable compteur en initialisant la boucle for

for (let i = 1; i <= 5; i++) {
	console.log(i); // ok
}
console.log(i); // erreur : la variable i n'est pas visible ici


// Boucle while car nous ne connaisons pas à l'avance le nombre de tours de la boucle

let lettre = "";
while (lettre !== "x") {
	lettre = prompt("Tapez une lettre ou x pour sortir : ");
}

// Programme pour 10 tours de manège

const nbTours = 10;

console.log("Le manège démarre");

for (let tour = 1; tour <= nbTours; tour++) {
  console.log(`C'est le tour numéro ${tour}`);
}

console.log("Le manège s'arrête");

// Programme pour une table de multiplication

const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Solution alternative avec un while
let i = 1;
while (i <= 10) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
  i++;
}

// FizzBuzz

// Solution avec des if/else

for (let nombre = 1; nombre <= 100; nombre++) {
  if (nombre % 3 === 0 && nombre % 5 === 0) console.log("FizzBuzz");
  else if (nombre % 3 === 0) console.log("Fizz");
  else if (nombre % 5 === 0) console.log("Buzz");
  else console.log(nombre);
}

// Solution alternative construisant le message par concaténation
/* for (let nombre = 1; nombre <= 100; nombre++) {
  let message = ""; // Message initial vide
  if (nombre % 3 === 0) {
    // on ajoute "Fizz" au message
    message += "Fizz";
  }
  if (nombre % 5 === 0) {
    // on ajoute "Buzz" au message
    message += "Buzz";
  }
  if (message === "") {
    // Message vide : on affiche le nombre
    message = nombre;
  }
  console.log(message);
} */