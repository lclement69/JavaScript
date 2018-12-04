// Événement focus simple sur les deux champs de recherche 

$(document).ready(function() {
	$("#nom").focus(function() {
		$(this).css("background-color", "grey");
	});
	$("#prenom").focus(function() {
		$(this).css("background-color", "grey");
	});
});