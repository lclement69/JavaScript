// Événement au clic mousedown et mouseup

$(document).ready(function() {
	$("p").hide();
	$("#titre").mousedown(function() {
		$("p").show();
	});
	$("#titre").mouseup(function() {
		$("p").hide();
	});
});