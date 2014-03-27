#pragma strict
var target : GameObject;
var attackSFX : AudioClip;
var hitSFX : AudioClip;
var powerupTime : float;
private var maxTime : float = 10;
private var player : GameObject;
private var spriteComp:scr_all_SpriteManager;
private var isActive: boolean;
function Start () {
	//this.enabled = false;
	isActive = false;
	player = GameObject.FindWithTag("Player");
	spriteComp = transform.parent.parent.FindChild("Sprite").GetComponent(scr_all_SpriteManager);
}

function Update () {
	//print("Wolf! ");
	//print(powerupTime);
	
	if (isActive) {
		powerupTime = powerupTime - Time.deltaTime;
		scr_all_SkillHandler.setTime(powerupTime/maxTime);
		if (powerupTime < 0){
		    powerupTime = 0;
		    player.GetComponent(scr_all_HeartDecay).enabled = true;
			gameObject.GetComponent(scr_all_Attack).enabled = true;
			gameObject.transform.localScale.z = 0.64;
			player.GetComponent(scr_all_SkillHandler).reset();
			spriteComp.setEvolution(0);
			powerupTime = 10;
			gameObject.tag = "Untagged";
			isActive = false;
		}
	}
}

function OnTriggerStay(col:Collider){
	if(gameObject.tag == "Wolf"){
		if(Input.GetButtonDown ("Fire1")){
			print(col.gameObject.tag);
			col.gameObject.GetComponent(scr_all_Enemy).damage(5);
		}
	}
}

function activateWolf(){
	isActive = true;
	gameObject.tag = "Wolf";
	gameObject.transform.localScale.z = 4;
	return this;
}

function getPowerupRatio() {
	return powerupTime / 10;
}