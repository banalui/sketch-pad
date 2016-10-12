$(document).ready(function(){

	// ********* Create 16x16 Grid *********
	for(i = 1 ; i <= 16 ; i++){
		for(j = 1 ; j <= 16 ; j++){
			$("body").append("<div>Hi" + i + " " + j + "</div>");
		}
		$("body").append("<br>");
	}

	// ********* Set the default properties *****

	$("div").css("display", "inline-block");
	$("div").height(70);
	$("div").width(70);
	$("div").css("background-color", "orange");
	$("div").css("margin", "5px");

	// ********* Change color when hover ********

	$("div").hover(function(){
		$(this).css("background-color", "blue");
	});
});



