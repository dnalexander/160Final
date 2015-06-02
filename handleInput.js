/*
 * Donovan Alexander (donalexa) 5/11/15 : Program 3 - Transformable Sharks
 This program renders 3D Models of sharks and allows the user to manipulate them by translating, rotating,
 and scaling them.
 */
function handleInput(e){
    //This function handles mouse clicks on the canvas to determine where you clicked and if a shark was selected
	var rect = canvas.getBoundingClientRect();
    //Set color picking vars
	var bgColor = 4294934656;
    var sharkOneColor = 4294902015;
    var sharkTwoColor = 4294901760;
	mouseXPos = (e.clientX-rect.left);
	mouseYPos = (-(e.clientY-rect.top-canvas.width));
	//left click
	if(e.button == 0){
        //on left click, set the active shark according to which one was clicked
		var pixelColor = colorData[(canvas.width*mouseYPos)+mouseXPos];
		if(pixelColor != bgColor && pixelColor == sharkOneColor){
            activeShark = "pink";
		} else if(pixelColor != bgColor && pixelColor == sharkTwoColor){
            activeShark = "blue";
        } else{
            activeShark = "none";
        }
	}
}
