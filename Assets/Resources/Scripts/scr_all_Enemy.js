#pragma strict
var hp : int;
var dieSFX : AudioClip;
var smoothTime : float;
var player : GameObject;
var tagz : String;
//var t:float=0;
function Start () {
	player = GameObject.FindWithTag("Player");
	//playerPC= 
	//print();
}

function Update () {
	if(hp <= 0){
		AudioSource.PlayClipAtPoint(dieSFX, transform.position);
		var enemy_tag = gameObject.transform.FindChild("enemy_sprite").gameObject.tag;
		switch(enemy_tag){
			case "Wolf" :
				scr_all_HUD.addScore(60);
				if(!scr_all_SkillHandler.isPowered){
					player.GetComponent(scr_all_SkillHandler).increaseSkill(1);
				}
				break;
			case "Unicorn" :
				scr_all_HUD.addScore(100);
				if(!scr_all_SkillHandler.isPowered){
					player.GetComponent(scr_all_SkillHandler).increaseSkill(2);
				}
				break;
			case "Screamer" :
				scr_all_HUD.addScore(40);
				if(!scr_all_SkillHandler.isPowered){
					player.GetComponent(scr_all_SkillHandler).increaseSkill(3);
				}
				break;
		}
		Destroy(gameObject);
	}
}

function damage(damage : int){
	hp -= damage;
	print(hp);
}

function OnTriggerEnter(col:Collider){
	if (col.CompareTag("Trigger")) {
		rigidbody.useGravity = true;
		rigidbody.WakeUp();
	}
}
	/*
function OnTriggerEnter(col:Collider){
	var controller : CharacterController = col.gameObject.GetComponent(CharacterController);
	print(controller);
	var speed : int = 42;
    // Move forward / backward
    var forward : Vector3 = transform.TransformDirection(Vector3.forward);
    var curSpeed : float = speed * Input.GetAxis ("Vertical");
    controller.SimpleMove(Vector3(1,1,1) * curSpeed);
}

function SlamBack(slamDistance : Vector3, charController : CharacterController)
{
    var slamTime = Time.time;
    while (slamTime+smoothTime > Time.time)
    {
        charController.Move(slamDistance*(slamTime+smoothTime-Time.time)/smoothTime*Time.deltaTime);
        yield;
    }
}*/