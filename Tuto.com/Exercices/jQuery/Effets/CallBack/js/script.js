// Les fonctions Callback

$(document).ready(function() {
	$("#bt").click(function() {
		$("#div1").hide(3000, function() {
			$("#bt").hide(2000, function() {
				$("#div1").show(3000, function() {
					$("#bt").show(3000);
				});
			});
		}); 
	});
});