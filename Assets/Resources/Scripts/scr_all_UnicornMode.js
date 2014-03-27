#pragma strict
var powerupTime : float = 6;
private var player : GameObject;
private var spriteComp:scr_all_SpriteManager;
private var isActive: boolean;
private var maxTime : float = 6;
function Start () {
	//this.enabled = false;
	isActive = false;
	player = GameObject.FindWithTag("Player");
	spriteComp = transform.parent.parent.FindChild("Sprite").GetComponent(scr_all_SpriteManager);
}

function Update () {
	if (isActive) {
		//print(powerupTime);
		powerupTime = powerupTime - Time.deltaTime;
		scr_all_SkillHandler.setTime(powerupTime/maxTime);
		if (powerupTime < 0){
		    powerupTime = 0;
		    player.GetComponent(scr_all_HeartDecay).enabled = true;
			gameObject.GetComponent(scr_all_Attack).enabled = true;
			gameObject.transform.localScale.z = 0.64;
			player.GetComponent(scr_all_SkillHandler).reset();
			spriteComp.setEvolution(0);
			powerupTime = 6;
			gameObject.tag = "Untagged";
			//this.enabled = false;
			isActive = false;
		}
		if (Input.GetButton("Fire1")){
			transform.parent.GetComponent(scr_all_PlatformerController).Dash(Vector3(15,5,0));			
		} else {
			transform.parent.GetComponent(scr_all_PlatformerController).Run(20);
		}
	}
}

function OnTriggerStay(col : Collider){
	if(gameObject.tag == "Unicorn"){
		if(transform.parent.GetComponent(scr_all_PlatformerController).getDash()){
			//print(col.gameObject.tag);
			col.gameObject.GetComponent(scr_all_Enemy).damage(99999);
		}
	}
}

function activateUnicorn(){
	isActive = true;
	gameObject.tag = "Unicorn";
	gameObject.transform.localScale.z = 6;
	return this;
}