// Plusieurs animations en même temps !

$(document).ready(function() {
	
	$("#bt").click(function() {
		$("#div1").animate({
			left: "500px",
			height: "300px",
			opacity: "0.2",
			width: "200px" // On peut aussi l'écrire "-=300px"
		},3000);
	});
});
