$(document).ready(function(){

	// ********* Create 16x16 Grid *********
	createGrid(16);
	$(".grid").hover(function(){
		$(this).css("background-color", "blue");
	});
});

function redoSketchPad(){
	var numberOfGridPerSide = prompt("How many boxes you need per side? Please enter a number between 1 and 128");
	createGrid(numberOfGridPerSide);
	$(".grid").hover(function(){
		$(this).css("background-color", "blue");
	});
}

function randomColor(){
	var numberOfGridPerSide = prompt("How many boxes you need per side? Please enter a number between 1 and 128");
	createGrid(numberOfGridPerSide);
	$(".grid").hover(function(){
		var randomColorR = Math.floor((Math.random() * 1000000) % 256);
		var randomColorG = Math.floor((Math.random() * 1000000) % 256);
		var randomColorB = Math.floor((Math.random() * 1000000) % 256);
		var rgbString = "rgb(" + randomColorR + ", " + randomColorG + ", " + randomColorB + ")";
		$(this).css("background-color", rgbString);
	});
}

function trailColor(){
	var numberOfGridPerSide = prompt("How many boxes you need per side? Please enter a number between 1 and 128");
	createGrid(numberOfGridPerSide);
	var randomColorR = 255;
	var randomColorG = 255;
	var randomColorB = 255;
	$(".grid").hover(function(){
		randomColorR = Math.floor(randomColorR - 25);
		randomColorG = Math.floor(randomColorG - 25);
		randomColorB = Math.floor(randomColorB - 25);
		if(randomColorR <= 0){
			randomColorR = 255;
			randomColorG = 255;
			randomColorB = 255;
		}
		var rgbString = "rgb(" + randomColorR + ", " + randomColorG + ", " + randomColorB + ")";
		$(this).css("background-color", rgbString);
	});
}

function createGrid(numberOfElementsPerSide){
	$(".row").remove();
	for(i = 1 ; i <= numberOfElementsPerSide; i++){
		$(".container").append('<div class="row"></div>');
	}
	var gridSize = Math.floor(1100 / numberOfElementsPerSide);
	var newPixelMax = gridSize * numberOfElementsPerSide;
	$(".container").height(newPixelMax);
	$(".container").width(newPixelMax);
	$(".row").height(gridSize);
	for(j = 1 ; j <= numberOfElementsPerSide; j++){
		$(".container").children().append('<div class="grid"></div>');
	}
	$(".grid").height(gridSize);
	$(".grid").width(gridSize);
}



