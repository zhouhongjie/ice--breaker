var glass : Texture2D;

function OnGUI () {
	var padPos:Vector2 = Vector2(Screen.width-200, Screen.height*0.7);
	GUI.DrawTexture(Rect(padPos.x , padPos.y ,200  ,250), 
		  								glass, ScaleMode.StretchToFill, true, 0);
}