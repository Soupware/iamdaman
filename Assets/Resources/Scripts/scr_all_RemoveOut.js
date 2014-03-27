#pragma strict
var canRemove : boolean;

function OnTriggerEnter(obj: Collider) {
	//print(obj.gameObject.name);
	if(canRemove) {
		//if(obj.gameObject.CompareTag("Tile")) {
			Destroy(obj.gameObject);
		//}
	}
}