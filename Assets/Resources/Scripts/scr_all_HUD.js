#pragma strict

var barDisplay : float = 0;
var pos : Vector2;
var size : Vector2;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;

var _player:Transform;
private var HUDText : GUIText;
private var _playerPC: scr_all_HeartDecay;
private var maxHP : float;
private var camDistance : int;
private static var score : int = 0;
private static var fscore : int = 0;;

function Start() {
		//_player=transform.parent.FindChild("pre_all_Player").transform;
	_playerPC=_player.gameObject.GetComponent(scr_all_HeartDecay);
	maxHP = _playerPC.maxHP;
	HUDText = transform.FindChild("GUI Text").gameObject.guiText;
	score = 0;
	fscore = 0;
	//barDisplay = 1.0;
}
 
function OnGUI() {
	pos = new Vector2(Screen.width*0.1,Screen.height*0.1);
	size = new Vector2(Screen.width*0.8,20);
	HUDText.pixelOffset = Vector2(Screen.width*0.9,Screen.height*0.9+25);
	HUDText.text = "SCORE " + fscore;
	// draw the background:
	
	GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
	GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
	 
	// draw the filled-in part:
	GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
	GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
	GUI.EndGroup ();
	 
	GUI.EndGroup ();
 
}
 
static function addScore(s : int){
	score += s; 
}

function Update()
{
// for this example, the bar display is linked to the current time,
// however you would set this value based on your desired display
// eg, the loading progress, the player's health, or whatever.
//barDisplay = Time.time * 0.05;
	barDisplay = _playerPC.getHP() / maxHP;
	camDistance = Mathf.Floor(Camera.main.transform.position.x);
	fscore = camDistance + score;
}