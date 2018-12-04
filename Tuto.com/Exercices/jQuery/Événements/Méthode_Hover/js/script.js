// La méthode hover

$(document).ready(function() {
	$("p").hide();
	$("#titre").hover(
		function(){$("p").show();},
		function(){$("p").hide();},
	);
});