var num;

$('button').click(function() {
	num = parseInt($('input').val());
	var $plateContainers = $('.plate-container');
	var $srcContainer = $('.src-container').find('.plate-container');
	var initial = 150;

	if (num > 5) {
		alert('The number of plates is 5 at most.');
		return;
	}
	$plateContainers.empty();
	for(var i = 0; i < num; i++) {
		var width = initial - i * 20;
		$srcContainer.append("<div class='plate' style='width:" + width + "px;'></div>");
	}

	$('.plate').draggable();
});

var $srcContainer = $('.src-container'),
	$auxContainer = $('.aux-container'),
	$destContainer = $('.dest-container');

$('.start-button').click(function() {
	 var stepsArray = printSteps(num, $srcContainer, $destContainer, $auxContainer);

	 function step(i) {
	 	if (i < stepsArray.length) {

	 	} 
	 }
	 for(var i = 0; i < stepsArray.length; i++) {
	 	movePlate(stepsArray[i][0], stepsArray[i][1]);
	 }
});

function movePlate($src, $dest) {
	var $topMost = $src.find('.plate-container').children().last();
	$dest.find('.plate-container').append($topMost);
}

function printSteps(n, $srcContainer, $destContainer, $auxContainer) {
	var nthStep = 1,
		stepsArray = [];

	(function innerPrintSteps(n, $srcContainer, $destContainer, $auxContainer) {
		if (1 === n) {
			stepsArray.push([$srcContainer, $destContainer]);
			// movePlate($srcContainer, $destContainer);	
		}
		else {
			innerPrintSteps(n-1, $srcContainer, $auxContainer, $destContainer);
			innerPrintSteps(1, $srcContainer, $destContainer, $auxContainer);
			innerPrintSteps(n-1, $auxContainer, $destContainer, $srcContainer);
		}
	}(n, $srcContainer, $destContainer, $auxContainer));

	return stepsArray;
}