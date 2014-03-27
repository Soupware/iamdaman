#pragma strict


function Start () {
	transform.position.x = Camera.main.transform.position.x;
}

function Update () {
	if (transform.position.x <= Camera.main.transform.position.x)
		transform.position.x = Camera.main.transform.position.x;
}