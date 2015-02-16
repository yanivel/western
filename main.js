window.onload = function () {
	if (window.DeviceMotionEvent) {
		var xElem = document.getElementById('xCoord'),
			yElem = document.getElementById('yCoord'),
			zElem = document.getElementById('zCoord');

		var deviceMotionHandler = function(e) 
		{
			var acc = e.acceleration;

			xElem.innerHTML = acc.x;
			yElem.innerHTML = acc.y;
			zElem.innerHTML = acc.z;
		}

		var successElt = document.getElementById('success');
		successElt.className = "alert alert-success";
		successElt.innerHTML = "DeviceMotionEvent is supported!";
		window.addEventListener('devicemotion', deviceMotionHandler, false);
	} else {
		var errorElt = document.getElementById("error");
		errorElt.innerHTML = "DeviceMotionEvent not supported!";
		errorElt.className = "alert alert-danger";
	}
}