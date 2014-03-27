#pragma strict
var player:Transform;
function Start () {

}

function Update () {
	transform.position.x=player.position.x;
}

function OnTriggerEnter(col:Collider){
	if(col.CompareTag("Player")) Application.LoadLevel(3);
}