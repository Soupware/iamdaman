#pragma strict
var powerupTime : float;
private var player : GameObject;
private var spriteComp:scr_all_SpriteManager;
private var isActive: boolean;
private var maxTime : float = 10;
function Start () {
	//this.enabled = false;
	isActive = false;
	player = GameObject.FindWithTag("Player");
	spriteComp = transform.parent.parent.FindChild("Sprite").GetComponent(scr_all_SpriteManager);
}

function Update () {
	//print("Scream! ");
	//print(powerupTime);
	if (isActive) {
		powerupTime = powerupTime - Time.deltaTime;
		scr_all_SkillHandler.setTime(powerupTime/maxTime);
		if (powerupTime < 0){
		    powerupTime = 0;
		    player.GetComponent(scr_all_HeartDecay).enabled = true;
			gameObject.GetComponent(scr_all_Attack).enabled = true;
			player.GetComponent(scr_all_SkillHandler).reset();
			spriteComp.setEvolution(0);
			powerupTime = 10;
			gameObject.tag = "Untagged";
			//this.enabled = false;
			isActive = false;
		}
		if(Input.GetButtonDown ("Fire1")){
			var colliders : Collider[] = Physics.OverlapSphere (player.transform.position, 2);
			for (var hit : Collider in colliders) {
				if(hit.gameObject.CompareTag("Enemy")){
					hit.gameObject.GetComponent(scr_all_Enemy).damage(5);
				}
			}
		}
	}
}

function activateScreamer(){
	isActive = true;
	gameObject.tag = "Screamer";
}

function getPowerupRatio() {
	return powerupTime / 10;
}
/*
function OnTriggerStay(col:Collider){
	if(gameObject.tag == "Screamer"){
		if(Input.GetButtonDown ("Fire1")){
			if(col.gameObject.CompareTag("Enemy")){
				print("b");
				col.gameObject.GetComponent(scr_all_Enemy).damage(5);
			}
		}
	}
}
*/