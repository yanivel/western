window.onload = function () {

	var width = 300;
	var height = 300;

	var centerX = 150;
	var centerY = 150;

	var el = document.getElementById("vector"),
    two = new Two({ 
        width: 300,
        height: 300
    });
    two.appendTo(el);
 
	var rect = two.makeRectangle(0, 0, width, height);
    rect.fill = '#81F7BE';
    rect.stroke = 0;
    two.update();


	if (window.DeviceMotionEvent) {
		var xElem = document.getElementById('xCoord'),
			yElem = document.getElementById('yCoord'),
			zElem = document.getElementById('zCoord');

		var x,
			y,
			z;

		var deviceMotionHandler = function(e) 
		{
			var acc = e.acceleration;

			x = acc.x;
			y = acc.y;
			z = acc.z;
		}
		

		var updateElements = function() {
			xElem.innerHTML = x;
			yElem.innerHTML = y;
			zElem.innerHTML = z;

			var line = two.makeLine(centerX, centerY, centerX + x*4, centerY + y*4);
			line.linewidth = 5;
			line.stroke = "rgba(255, 0, 0, 0.5)";
			two.update();
			line.remove();
		}

		var successElt = document.getElementById('success');
		successElt.className = "alert alert-success";
		successElt.innerHTML = "DeviceMotionEvent is supported!";
		window.addEventListener('devicemotion', deviceMotionHandler, false);

		setInterval(updateElements, 500);
	} else {
		var errorElt = document.getElementById("error");
		errorElt.innerHTML = "DeviceMotionEvent not supported!";
		errorElt.className = "alert alert-danger";
	}
}