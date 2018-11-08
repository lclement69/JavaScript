// Événement keyup et keydown !

$(document).ready(function() {
	$("#nom").keydown(function() {
		$(this).css("background-color", "tomato");
	});
	$("#nom").keyup(function() {
		$(this).css("background-color", "green");
	});
});