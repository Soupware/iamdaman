var blockPrefabs:GameObject[] = new GameObject[2]; //Lets say you have only 2 different blocks.
var lastBlock:GameObject; // Store the last/current block. Remember that the first block shoul be in scene and assigned to this variable.
var spawnPrefab : GameObject;
var spawnBlock : GameObject;
var lastAnchor : GameObject;
var floorThreshold : int = 10;
private var currPos: Vector3;
private var nextStop:Vector3;
private var tileLimit : boolean;
private var floorCount : int;
var countDown : int = 99;
private var timer : float;
private var playerPos : float;
private var updateThreshold : boolean = false;
var willSpawnMob : int = 99;
function Start(){
	nextStop = transform.position + Vector3.forward *0.1;
	lastAnchor = lastBlock.transform.Find("Anchor").gameObject;
	lastBlock.transform.Find("Anchor").transform.localScale.y = 200;
	countDown = 99;
	willSpawnMob = 99;
}

function Update () {
	timer += Time.deltaTime;
	playerPos = Mathf.Floor(transform.position.x);
	//print("pos: " + playerPos + " floorThreshold: " + floorThreshold + " updateThreshold:" + updateThreshold);
	if (floorThreshold > 6) {
		if (playerPos > 0 && !updateThreshold && playerPos % 50 == 0) {
			floorThreshold -= 2;
			updateThreshold = true;
		}
	}

	if (playerPos > 0 && playerPos % 50 > 0) {
		updateThreshold = false;
	}
	//RollCamera();
	currPos =transform.position;
	//print(Vector3.Distance(nextStop,currPos));
	if(Vector3.Distance(nextStop,currPos)>4){
		CreateNewBlock();
		nextStop = transform.position + Vector3.forward *0.1;
	}
}
 
function CreateNewBlock(){

	var insPos:Vector3 = lastBlock.transform.Find("Anchor").transform.position;
	var index : int = Mathf.Floor(Random.Range(0,2));
	var dist : float;
	if (willSpawnMob == 8) {
		//dist = Vector3.Distance(lastBlock.transform.Find("Anchor").transform.position, currPos);
		print ("countdown: " + countDown);
		if (countDown < 3) {
			spawnBlock = Instantiate(spawnPrefab,lastBlock.transform.position + Vector3(4*(floorThreshold-2),2,0), lastBlock.transform.rotation) as GameObject;
			lastAnchor.GetComponent(scr_all_SpawnTrigger).linkTrigger(spawnBlock);
			willSpawnMob = 9;
		}
		countDown--;
	}
	if (index == 1) {
		if (tileLimit == false) {
			tileLimit = true;
			
			willSpawnMob = Mathf.Floor(Random.Range(0,7));
			print("random" + willSpawnMob);
			if (willSpawnMob < 5) {
				lastAnchor = lastBlock.transform.Find("Anchor").gameObject;
				lastBlock.transform.Find("Anchor").transform.localScale.y = 200;
				lastAnchor.AddComponent(scr_all_SpawnTrigger);
				countDown = floorCount;
				willSpawnMob = 8;
			}
		} else {
			index = 0;
			floorCount++;
			
		}
	} else {
		floorCount++;
		if (floorCount >= floorThreshold) {
			tileLimit = false;
			floorCount = 0;
		}
	}
	
	var newBlock:GameObject = Instantiate(blockPrefabs[index],insPos, lastBlock.transform.rotation);
	lastBlock = newBlock;
}
 
function RollCamera(){
	transform.Translate(Input.GetAxis("Horizontal") * Vector3.right * 0.2);
}