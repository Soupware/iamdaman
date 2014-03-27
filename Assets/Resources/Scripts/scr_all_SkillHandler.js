#pragma strict
var wolfMode : int;
var unicornMode : int;
var screamerMode : int;
var powerupTime : int;
var changeSFX : AudioClip;
var hasChanged : boolean = false;

var barDisplay : float = 0;
var pos : Vector2;
var size : Vector2;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
private static var barTimeLeft : float;
static var isPowered : boolean;

private var spriteComp:scr_all_SpriteManager;
function Start () {
	spriteComp=transform.parent.FindChild("Sprite").GetComponent(scr_all_SpriteManager);
}

function Update () {
	if(isPowered){
		//print(barTimeLeft);
		barDisplay = barTimeLeft;
	}
}

function increaseSkill(mode : int){
	switch(mode){
		case 1:
			unicornMode = 0;
			screamerMode = 0;
			if (!isPowered || (isPowered && wolfMode < 2) ) {
				wolfMode++;
			}
			break;
		case 2:
			wolfMode = 0;
			screamerMode = 0;
			if (!isPowered || (isPowered && unicornMode < 2) ) {
				unicornMode++;
			}
			break;
		case 3:
			unicornMode = 0;
			wolfMode = 0;
			if (!isPowered || (isPowered && screamerMode < 2) ) {
				screamerMode++;
			}
			break;
	}
	if(wolfMode == 3){
			changeModeTo(1);
	} else if(unicornMode == 3){
			changeModeTo(2);
	} else if(screamerMode == 3){
			changeModeTo(3);
	}
}

function changeModeTo(mode : int){
	AudioSource.PlayClipAtPoint(changeSFX, transform.position);
	gameObject.GetComponent(scr_all_HeartDecay).setFullHP();
	gameObject.GetComponent(scr_all_HeartDecay).enabled = false;
	gameObject.transform.GetChild(0).GetComponent(scr_all_Attack).enabled = false;
	isPowered = true;
	switch(mode){
		case 1:
			//2
			spriteComp.setEvolution(2);
			gameObject.transform.GetChild(0).GetComponent(scr_all_WolfMode).activateWolf();
			break;
		case 2:
			//1
			spriteComp.setEvolution(1);
			gameObject.transform.GetChild(0).GetComponent(scr_all_UnicornMode).activateUnicorn();
			break;
		case 3:
			//3
			spriteComp.setEvolution(3);
			gameObject.transform.GetChild(0).GetComponent(scr_all_ScreamerMode).activateScreamer();
			break;
	}
}

function OnGUI() {
	if (Mathf.Floor(barDisplay * 100) / 100 > 0) {
		pos = new Vector2(Screen.width*0.1,Screen.height*0.1 + 25);
		size = new Vector2(Screen.width*0.8,10);
		// draw the background:
		
		GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
		GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
		 
		// draw the filled-in part:
		GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
		GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
		GUI.EndGroup ();
		 
		GUI.EndGroup ();
	}
}

static function setTime(timeLeft : float){
	barTimeLeft = timeLeft;
}

function reset(){
	wolfMode = 0;
	unicornMode = 0;
	screamerMode = 0;
	isPowered = false;
}