var ice:GameObject;

function Start(){
   for(var k=0; k<10;k++)
	for(var j=0;j<5;j++){
	 for(var i=0;i<5;i++){
		var newIce = Instantiate (ice, transform.TransformDirection(Vector3(-125+i*50,25+k*50,-125+j*50)) , Quaternion.identity); 
		newIce.name = "ice";
		newIce.transform.parent = transform;
	}
	}
}