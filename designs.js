// This funtion will make grid when user inputs sizes
function makeGrid() {
	// console.log("make_Grid")

	// Select input size

	var canvas, cell, inputHeight, inputWidth, rows;

	canvas = $('#pixel_canvas');
	inputHeight = $('#inputHeight').val();
	inputWidth = $('#inputWidth').val();

// Select canvas
	canvas.children().remove()

	for (x = 0; x < inputHeight; x++) {
	canvas.append('<tr></tr>');
	}

	rows = $('tr');

	for (y = 0; y < inputWidth; y++) {
	rows.append('<td></td>');
	}

	cell = canvas.find('td');

	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});

}

// call makeGrid() when size is submitted by user
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
