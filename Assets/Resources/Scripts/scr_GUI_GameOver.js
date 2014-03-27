var WhiteTexture: Texture2D;
var BlackTexture: Texture2D;
var customButton : GUIStyle;
var logo: GUIStyle;
var bg : GUIStyle;
var footer : GUIStyle;
private var isContinue = false;
private var hasQuit = false;
private var doLoad: boolean = false;

//var toLoad: String;
var toLoad : int;

function OnGUI () {
	var posx = Screen.width - 280;
	var posy = 210;
	var centerx = Screen.width / 2 - 190;
	var centery = Screen.height / 2 - 320;
	
	GUI.Label(Rect(0,0,Screen.width, Screen.height),"",bg);
	
	var conty = isContinue? (posy + 85): posy;

	//GUI.Box(Rect(posx,posy,220,290),"");
	//GUI.Label (Rect(centerx,centery,370,500),"", logo);
	
	if (doLoad) {
		Camera.main.SendMessage("fadeOut");
		//print(Camera.main.GetComponent(scr_camera_FadeInOut).getAlpha());
		if  (Camera.main.GetComponent(scr_camera_FadeInOut).getAlpha() == 1)
			Application.LoadLevel (toLoad); 
	}
	
	if (GUI.Button (Rect (centerx + 60,centery + 500,250,75), "Retry", customButton)) {
		Camera.main.GetComponent(scr_camera_FadeInOut).changeTexture(WhiteTexture);
		//toLoad = "sne_lvl0_Test_tmp";
		doLoad = true;
	}
	if (isContinue) {
		if (GUI.Button (Rect (posx,conty,250,75), "Continue", customButton)) {
			doLoad = true; 
		}
	}
	//if (GUI.Button (Rect (posx,conty+85,250,75), "Quit Game", customButton)) {
	//	Application.Quit(); 
	//}
	if (hasQuit) {
		if (GUI.Button (Rect (posx,conty+170,250,75), "Quit Game", customButton)) {
		//	Application.Quit(); 
		}
	}
	//GUI.Label (Rect(30,Screen.height - 42,154,22),"", footer);
}