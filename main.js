window.onload = function () {
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