#pragma strict
var target : GameObject;
var targetr : Rigidbody;
var attackSFX : AudioClip;
var hitSFX : AudioClip;
var dir: float;
function Start () {

}

function Update () {
	var player : GameObject = GameObject.FindWithTag ("Player");
	dir = transform.parent.GetComponent(scr_all_PlatformerController).movement.direction.x;
	if(Input.GetButtonDown ("Fire1")){
		print ("attack!");
		if(target == null){
			AudioSource.PlayClipAtPoint(attackSFX, transform.position);
			//player.GetComponent(scr_all_HeartDecay).decreaseTime(10);
			var decrease : scr_all_HeartDecay = player.GetComponent(scr_all_HeartDecay);
			decrease.decreaseTime(8);
		}
		else if(target.CompareTag("Enemy")){
			AudioSource.PlayClipAtPoint(hitSFX, transform.position);
			print ("attacking");
			target.GetComponent(scr_all_Enemy).damage(5);
			if(target.GetComponent(scr_all_Enemy).hp <= 0){
				var increase : scr_all_HeartDecay = player.GetComponent(scr_all_HeartDecay);
				increase.increaseTime(12);
			}
		}
	}
}

function OnTriggerEnter(col:Collider){
	if(!col.CompareTag("Player")) {
		target = col.gameObject;
		targetr = col.rigidbody;
	}
	
}

function OnTriggerExit(){
	target = null;
	print("");
}