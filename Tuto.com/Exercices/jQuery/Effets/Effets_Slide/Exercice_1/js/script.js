// Les effets de slide

$(document).ready(function() {
	
	$("#bt").click(function() {
		$("#div1").slideUp(3000);
	});
	$("#bt2").click(function() {
		$("#div1").slideDown(3000);
	});
});
