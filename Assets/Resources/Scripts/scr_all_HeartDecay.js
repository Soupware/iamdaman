#pragma strict

var maxHP : float;
var textMesh : TextMesh;
var script : scr_all_PlatformerController;
var meshRenderer : MeshRenderer;


private var hpLeft : float;
 
function Start()
{	
	hpLeft = maxHP;
}
 
function Update()
{
	if(script.doDecay) {
		var decay : int;
		if(script.isMoving()){
			decay = 2;
		}
		else{
			decay = 6;
		}
	    hpLeft = hpLeft - (Time.deltaTime * decay);
	    if (hpLeft < 0){
	    	hpLeft = 0;
	    	meshRenderer.enabled = false;
    		gameObject.active = false;
    		Application.LoadLevel(3);
    		//Destroy(gameObject);
	    }
	    textMesh.text = hpLeft.ToString();
	}
}

function decreaseTime(decrease : int){
	hpLeft -= decrease;
}

function increaseTime(increase : int){
	if(hpLeft + increase > 120){
		hpLeft = 120;
	} else {
		hpLeft += increase;
	}
}

function setFullHP(){
	hpLeft = 120;
}

function getHP() {
	return hpLeft;
}