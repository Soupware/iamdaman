#pragma strict
var mobPrefabs : GameObject[];
//var spawnTrigger : GameObject;
//var hasLink : boolean = false;
function Start () {

}

function Update () {
	
}



function Spawn() {
	var i = 0;
	while (i < 10) {
		var index = Mathf.Floor(Random.Range(0,5)) % 3;
		Instantiate(mobPrefabs[index], transform.position + (Vector3(1,0,0) * Random.Range(-20,5)), Quaternion.identity);
		i++;
	}
}