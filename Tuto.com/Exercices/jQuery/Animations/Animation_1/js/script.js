// Animation Simple

$(document).ready(function() {
	
	$("#bt").click(function() {
		$("#div1").animate({left: "500px"}, 3000, function() {
			$("#div1").hide(2000);
		});
	});
});
