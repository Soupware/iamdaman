#pragma strict

private var _delay:float=0;
private var _offsetX:float;	// Offset for y
var speed : float = 0;

function Start(){
	var temp:float=1;
	var columns:int=4;
	var material;
	if(transform.CompareTag("Wolf")){
		material = Resources.Load("Materials/Lil Hood", Material);
		speed = 2;
	}
	else if(transform.CompareTag("Unicorn")){
		material = Resources.Load("Materials/Pony", Material);
		speed = 3;
	}
	else if(transform.CompareTag("Screamer")){
		material = Resources.Load("Materials/Harp", Material);
		speed = 1;
	}
	/*
	if(transform.name.Equals("Pony")){
		material = Resources.Load("Materials/Pony", Material);
	}else if (transform.name.Equals("Lil Hood"))
		material = Resources.Load("Materials/Lil Hood", Material);
	else if (transform.name.Equals("Harp"))
		material = Resources.Load("Materials/Harp", Material);
	*/
	renderer.material=material;
	renderer.material.shader=Shader.Find("Transparent/Diffuse");
	_offsetX=temp/columns;
	renderer.material.mainTextureScale.x=_offsetX;
	renderer.material.mainTextureScale.y=1;
}

function Update(){
	_delay+=Time.deltaTime;
	if(_delay<=.75) renderer.material.mainTextureOffset= Vector2(0,0);
	else if(_delay<=1.5) renderer.material.mainTextureOffset= Vector2(_offsetX,0);
	else if(_delay<=2.25) renderer.material.mainTextureOffset= Vector2(_offsetX*2,0);
	else if(_delay<=3) renderer.material.mainTextureOffset= Vector2(_offsetX*3,0);
	else _delay=0;
	
		if(gameObject.CompareTag("Unicorn")){
			transform.parent.transform.position.x -= (speed * Time.deltaTime / 2);
		}
		else if(gameObject.CompareTag("Wolf")){
			transform.parent.transform.position.x -= (speed * Time.deltaTime / 2);
		}
		else if(gameObject.CompareTag("Screamer")){
			transform.parent.transform.position.x -= (speed * Time.deltaTime / 2);

	}
}