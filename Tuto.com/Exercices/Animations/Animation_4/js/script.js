// Arrêter les animations

$(document).ready(function() {
	
	$("#bt").click(function() {
		$("#div1").animate({left: "500px"}, 3000);
		$("#div1").animate({height: "300px"}, 3000);
		$("#div1").animate({opacity: "0.2"}, 3000);
		$("#div1").animate({width: "200px"}, 3000);
	});

	$("#bt2").click(function() {
		$("#div1").stop(true, true);
	})
});
