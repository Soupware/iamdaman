#pragma strict
var lifespan : float;
function Start () {

}

function Update () {
	while(lifespan != 0){
		lifespan -= Time.deltaTime;
	}
	Destroy(gameObject);
}