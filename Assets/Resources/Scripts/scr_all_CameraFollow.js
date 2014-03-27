#pragma strict
var target : Transform;
var offset : float;
var factor : float;
function Start () {
	transform.position.x = target.position.x;
}

function Update () {
	if(target != null){
		if (target.position.x >= transform.position.x)
			transform.position.x = target.position.x;
		transform.position.y = (target.position.y + offset) / factor;
	}
}