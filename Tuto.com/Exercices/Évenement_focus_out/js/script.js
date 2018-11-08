// Événement focus out !

$(document).ready(function() {
	
	$("#nom").focus(function() {
		$(this).css("background-color", "grey");
	});
	$("#nom").focusout(function() {
		$(this).css("background-color", "white");
	});

	$("#prenom").focus(function() {
		$(this).css("background-color", "grey");
	});
	$("#prenom").focusout(function() {
		$(this).css("background-color", "white");
	});
});