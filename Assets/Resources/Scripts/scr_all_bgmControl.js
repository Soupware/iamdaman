#pragma strict

var leadIn : AudioSource;

//453600
//1663200

function Update () {
	if (leadIn.timeSamples >= 1663200)
		leadIn.timeSamples = 453600;
}