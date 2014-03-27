#pragma strict

var rotation = new Vector3(0, 0, 0);

function Start () {
rigidbody.AddForce(new Vector3(Random.Range(-20.0, 20.0), Random.Range(-20.0, 20.0), Random.Range(-10.0, 10.0)));
rotation = new Vector3(0, 0, Random.Range(-10.0, 10.0));
}

function Update () {
transform.Rotate(rotation * Time.deltaTime);
}