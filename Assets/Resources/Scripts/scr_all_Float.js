#pragma strict
var Amplitude: float = 1.0f;
var HoverSpeed: float = 1.0f;
private var y0: float;
function Start () {
	y0 = transform.position.y;
}

function Update () {
	transform.position.y = y0+Amplitude*Mathf.Sin(HoverSpeed*Time.time);
}