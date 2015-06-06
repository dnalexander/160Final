/*
 * Donovan Alexander (donalexa) 5/27/15 : Program 4 - Camera Functionality
 This program renders 3D Models of sharks and allows the user to manipulate them by translating, rotating,
 and scaling them. It also allows the user to move the camera as they choose.
 */
//This holds the variables for the starting position of a click
var source = {
    mouseXPos:-1,
    mouseYPos:-1
};
var pressed;
var windowHalfX = window.innerWidth/2;
var windowHalfY = window.innerHeight/2;
function inputDown(e){
    //This function handles mouse clicks on the canvas to determine where you clicked and if a shark was selected\
    source.mouseXPos = (e.clientX-windowHalfX) * 10;
    source.mouseYPos = (-(e.clientY-windowHalfX)) * 10;
    if(e.type == "mousedown"){
        pressed = true;
        /*//Set color picking vars
        var bgColor = 4294934656;
        var sharkOneColor = 4294902015;
        var sharkTwoColor = 4294901760;
        //left click
        if(e.button == 0){
            //on left click, set the active shark according to which one was clicked
            var pixelColor = colorData[(canvas.width*source.mouseYPos)+source.mouseXPos];
            if(pixelColor != bgColor && pixelColor == sharkOneColor){
                activeShark = "Pink";
            } else if(pixelColor != bgColor && pixelColor == sharkTwoColor){
                activeShark = "Blue";
            } else{
                activeShark = "None";
            }
            document.getElementById("shark").innerHTML = activeShark;*/
    }
}

function inputUp(e){
    //if you release the mouse button, let the program know
    pressed = false;
}

function inputMove(e){
    //This function handles the dragging of the moues
    if(e.button == 0 && pressed) {
        //This is the case where you have left clicked and are holding the button
        //We calculate the new (x, y) of the mouse
        var newX = (e.clientX - windowHalfX) * 10;
        var newY = (-(e.clientY - windowHalfY)) * 10;
        //change the camera position based on where you drag the mouse
        //X-axis movement is determined by moving the mouse left/right of its originally clicked point
        //Y-axis movement is determined by moving the mouse above/below its originally clicked point
        if (newX > source.mouseXPos) {
            camera.position.x += 0.01;
        } else if (newX < source.mouseXPos) {
            camera.position.x -= 0.01;
        }
        if (newY > source.mouseYPos) {
            camera.position.y += 0.01;
        } else if (newY < source.mouseYPos) {
            camera.position.y -= 0.01;
        }
    }
    if(e.button == 2 && pressed){
        //This is the case where you have right clicked and are holding the button
        //We only need a new y position because we move up and down to zoom
        var newY = (-(e.clientY-windowHalfY)) * 10;
        //If we move up, move the camera "forward", if we move down, move the camera "backwards"
        if(newY > source.mouseYPos){
            camera.position.z += 0.01;
        } else if(newY < source.mouseYPos){
            camera.position.z -= 0.01;
        }
    }
}