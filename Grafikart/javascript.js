/* EXEMPLE COURS JAVASCRIPT

BOUCLE WHILE - Boucle Tant que une condition est vrai alors */

var = i   // Je déclare ma variable
while (i < 11) {  // Je demande à ce que ma boucle soit jouée entre 0 et 10 maximum
	console.log(i)  // Je demande l'affichage dans ma console
	i = i + 1  // (ou 1 +=1 ) Surtout ne jamais oublier car sinon la boucle est sans fin. Ma variable i reste à valeur 0 si on oublie
}

// BOUCLE FOR

var eleves = ["jean", "Marc", "Marion", "Antoine"]

for (var i = 0; i< eleves.lenght; i++) {
	console.log("bonjour " + eleves[i])
}

/* 
Un nombre est premier s'il n'est divisible que par 1 ou lui-même
Un nombre n'est pas premier s'il est divisible par un nombre compris entre 2 et lui-même -1 */

var nombre = 31
var estPremier = true

for (var i = 2; i < nombre; i++) {
	if (nombre % i === 0) {
		estPremier = false
		console.log("Ce nombre n'est pas premier")
		console.log(nombre + " est divisible par " + i)
		break
	}
}