#pragma strict

private var _attacking:boolean=false;
private var _attackingTime:float=0;
private var _damaged:boolean=false;
private var _delay:float=0;
private var _evolve:int=0;
private var _greet:boolean=false;
private var _offsetX:float;	// Offset for y
private var _offsetY:float;	// Offset for x
private var _x:float=0;		// holder for columns'th frame
private var _player:Transform;
private var _playerPC: scr_all_PlatformerController;	
private var _y:float=0;		// holder for rows'th frame

var rate : float;
var columns:int;			// number of columns of the spritesheet
var rows:int;				// number of rows of the spritesheet

function Start () {
	var temp:float=1;
	_offsetX=temp/columns;
	_offsetY=temp/rows;
	
	// divides texture to 'columns' columns
	renderer.material.mainTextureScale.x=_offsetX;
	// divides texture to 'rows' rows
	renderer.material.mainTextureScale.y=_offsetY;
	// remove this if you dont wan't to set shader as Transparent/Diffuse
	renderer.material.shader=Shader.Find("Transparent/Diffuse");
	_player=transform.parent.FindChild("pre_all_Player").transform;
	_playerPC=_player.gameObject.GetComponent(scr_all_PlatformerController);
	//print(_playerPC.getDirection());
}

function Update () {
	transform.position=_player.position;
	_delay+=(Time.deltaTime * rate);
	if(_greet){
		if(_delay<.5){
			setX(3);
			setY(2);
			
		}else if(_delay<1){
			setX(3);
			setY(3);
		}else _delay=0;

		renderer.material.mainTextureOffset= Vector2(_x,_y);
	}else if(_attacking){
		_attackingTime+=Time.deltaTime;
		if(_playerPC.getDirection().x==1){
			setY(1+5*_evolve);
			if(_attackingTime<.1) setX(0);
			else setX(1);
		}else{
			setY(0+5*_evolve);
			if(_attackingTime<.1) setX(0);
			else setX(1);
		}
		renderer.material.mainTextureOffset= Vector2(_x,_y);
	// DAMAGED
	}else if(_damaged){
		
		
	// JUMPING
	}else if(_playerPC.getController().isGrounded==false){
		_attackingTime=0;
		if(_playerPC.getDirection().x==-1){
			setX(2);
			setY(0+5*_evolve);
			renderer.material.mainTextureOffset= Vector2(_x,_y);
		}else{
			setX(2);
			setY(1+5*_evolve);
			renderer.material.mainTextureOffset= Vector2(_x,_y);
		}
	// MOVING ON GROUND
	}else if(_playerPC.isMoving()==true && _playerPC.getDirection().x!=0){
		_attackingTime=0;
		if(_playerPC.getDirection().x==1 ){
			setY(3+5*_evolve);
			if(_delay<.3) setX(0);
			else if(_delay<.5) setX(1);
			else if(_delay<.8) setX(2);
			else if(_delay<1)setX(1);
			else _delay=0;
		}else if(_playerPC.getDirection().x==-1){
			setY(2+5*_evolve);
			if(_delay<.3) setX(0);
			else if(_delay<.5) setX(1);
			else if(_delay<.8) setX(2);
			else if(_delay<1)setX(1);
			else _delay=0;
		}
		renderer.material.mainTextureOffset= Vector2(_x,_y);
	// NEUTRAL
	}else if(_playerPC.isMoving()==false && _playerPC.getController().isGrounded==true){
		_attackingTime=0;
		if(_playerPC.getDirection().x==-1){
			if(_delay<=1){
				setX(3);
				setY(4+5*_evolve);
				renderer.material.mainTextureOffset= Vector2(_x,_y);
			}else {
				setX(2);
				setY(4+5*_evolve);
				renderer.material.mainTextureOffset= Vector2(_x,_y);
			}
		}else{
			if(_delay<=1){
				setX(1);
				setY(4+5*_evolve);
				renderer.material.mainTextureOffset= Vector2(_x,_y);
			}else{
				setX(0);
				setY(4+5*_evolve);
				renderer.material.mainTextureOffset= Vector2(_x,_y);
			}
		}
		if(_delay>2) _delay=0;
	}
}

// sets the next column frame
function nextFrameX(){
	if(_x<(1-_offsetX*2) && _x>=0) _x+=_offsetX;
	else _x=0;
	renderer.material.mainTextureOffset= Vector2(_x,_y);
}

// sets the next rows frame
function nextFrameY(){
	if(_y<(1-_offsetY*2) && _y>=0) _y+=_offsetY;
	else _y=0;
	renderer.material.mainTextureOffset= Vector2(_x,_y);
}

// set previous columns frame
function prevFrameX(){
	if(_x<=1 && _x>0) _x-=_offsetX;
	else _x=1-_offsetX;
	renderer.material.mainTextureOffset= Vector2(_x,_y);
}

// sets the previous rows frame
function prevFrameY(){
	if(_y<=1 && _y>0) _y-=_offsetY;
	else _y=1-_offsetY;
	renderer.material.mainTextureOffset= Vector2(_x,_y);
}

// sets what row you want to highlight
// rows start from bottom of spritesheet
function setY(i:int){
	if(i<0 || i>rows) print("Invalid size!");
	else{
		_y=i*_offsetY;
	}
}

// sets what column you want to highlight
// columns start from left of spritesheet
function setX(i:int){
	if(i<0 || i>columns) print("Invalid size!");
	else{
		_x=i*_offsetX;
	}
}

function setAttacking(bool:boolean){
	_attacking=bool;
}

function setDamaged(bool:boolean){
	_damaged=bool;
}

function setEvolution(evolve:int){
	_evolve=evolve;
}

function setGreet(bool:boolean){
	_greet=bool;
}