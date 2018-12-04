// Chaîner les animations

$(document).ready(function() {
	
	$("#bt").click(function() {
		$("#div1").animate({left: "500px"}, 3000).animate({left: "50px"}, 1000);
	});
});
