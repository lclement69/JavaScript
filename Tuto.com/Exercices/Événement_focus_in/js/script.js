// Événement focus in  et focus out !

$(document).ready(function() {
	
	$("#nom").focusin(function() {
		$("#span_nom").html("Entrez votre nom ici !");
	});
	$("#nom").focusout(function() {
		$("#span_nom").html("");
	});


	$("#prenom").focusin(function() {
		$("#span_prenom").html("Entrez votre prénom ici !");
	});
	$("#prenom").focusout(function() {
		$("#span_prenom").html("");
	});

});