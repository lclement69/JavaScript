// Événement mouseenter & mouseleave

$(document).ready(function() {
	$("p").hide();
	$("#titre").mouseenter(function() {
		$("p").show(); //Faire apparaître
	});
	$("#titre").mouseleave(function() {
		$("p").hide();
	});
});