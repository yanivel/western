
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


window.addEventListener('devicemotion', deviceMotionHandler, false);