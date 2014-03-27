#pragma strict
private var logoFrames: Texture[];
private var NFRAMES: int = 50;
private var f: int = 0;
private var timer: float = 5.0f;

function Start() {
	Camera.main.SendMessage("fadeIn"); 
}

function OnGUI() {
	var textureColor: Color = guiTexture.color;
	f = (f + 1) % NFRAMES;
	guiTexture.color = textureColor;
	guiTexture.texture = Resources.Load("swlogo (" + (f+1) + ")", Texture);
	
	if (timer > 0)
		timer -= 0.01f;
	else {
		Camera.main.SendMessage("fadeOut");
		//var test = Camera.main.GetComponent(scr_camera_FadeInOut).getAlpha();
		if (Camera.main.GetComponent(scr_camera_FadeInOut).getAlpha() == 1)
		//print (test);
			Application.LoadLevel("sne_Title");
	}
}