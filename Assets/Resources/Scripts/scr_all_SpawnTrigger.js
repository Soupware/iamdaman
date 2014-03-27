#pragma strict
var hasLink : boolean = false;
var spawnTrigger : GameObject;

function OnTriggerEnter(obj : Collider) {
	if (obj.CompareTag("Player"))
		spawnTrigger.GetComponent(scr_all_MobSpawnPoint).Spawn();
		//print("mobtrigga!");
	
}

function linkTrigger(trig : GameObject) {
	hasLink = true;
	spawnTrigger =  trig;
	//print ("link!");
}