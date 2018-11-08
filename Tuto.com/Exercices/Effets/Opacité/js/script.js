// L'opacité

$(document).ready(function() {
	$("#div1").fadeOut();
	$("#bt").click(function() {
		$("#div1").fadeIn(2000);
	});
});

/* On peut aussi faire 

$(document).ready(function() {
	$("#bt").click(function() {
		$("#div1").fadeToggle(2000);
	});
});


ou encore 


$(document).ready(function() {
	$("#bt").click(function() {
		$("#div1").fadeTo(2000; 0.5); (il lui faut deux arguments)
	});
});

*/