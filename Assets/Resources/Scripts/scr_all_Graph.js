#pragma strict

var graphSize : int = 1;
var graph = new Array ();
var index : int;
var timer : float;
var gap : int = 5;

var width = 1.0;
var color = Color.black;
 
function OnGUI () {
   var i : int = 0;
   var graphbi : int[] = graph.ToBuiltin(int);
   while (i+1 < graphSize) {
   		var fromPt : Vector2 = Vector2(Screen.width*0.1 + i*gap, Screen.width*0.1 + graphbi[i]*gap);
   		var toPt : Vector2 = Vector2(Screen.width*0.1 + (i+1)*gap, Screen.width*0.1 + graphbi[i+1]*gap);
   		scr_all_DrawLine.DrawLine(fromPt, toPt);
   		i++;

   }
}

function Start () {
	graph = new int[graphSize];
}

function Update () {
	timer += Time.deltaTime;
	index++;
	if (timer == 1.0) {
		graph.Push(5);
		if (index >= graphSize) {
			graph.RemoveAt(0);
		}
		timer = 0;
	}
}