/*
 * Donovan Alexander (donalexa) 5/11/15 : Program 3 - Transformable Sharks
 This program renders 3D Models of sharks and allows the user to manipulate them by translating, rotating,
 and scaling them.
 */
function getModelVals(){
	//this function retrieves the model values from the given input files poly.js and coords.js
	shapePoly = initPoly();
	shapeCoord = initCoord();
}

function getPoly(index){
	/*
	 * this function takes the indices given by one element in poly.js and retrieves the correct values from coords.js
	 * (ex: poly.js gives index 2043 of coords.js; push the x,y,z components of that to temp)
	 * it then sticks them in an array for later use
	 */
	var temp   = [];
	var adj    = [];
	for(var i=1; i<shapePoly[index].length; i++){
		temp.push(shapeCoord[(shapePoly[index][i])-1][0]);
		temp.push(shapeCoord[(shapePoly[index][i])-1][1]);
		temp.push(shapeCoord[(shapePoly[index][i])-1][2]);
		for(var j=0; j<shapePoly.length; j++){
			if(shapePoly[j].indexOf(shapePoly[index][i]) != -1){
				adj.push(j);
			}
		}
	}
	return [temp, adj];
}

function getNorm(tri){
	//this function returns the normal for a given triangle
	var vecAB = new Array(tri[3]-tri[0], tri[4]-tri[1], tri[5]-tri[2]);
	var vecAC = new Array(tri[6]-tri[0], tri[7]-tri[1], tri[8]-tri[2]);
	var cp = cross(vecAB, vecAC);
	var temp = [cp, cp, cp];
	return temp;
}

function updateUniforms(xTheta, yTheta, zTheta, perspD, xScale, yScale, zScale, transX, transY, transZ, vec){
    //This function updates all of the matrices and other uniform values to give the sharks new values for drawing
	rotations(xTheta, yTheta, zTheta);
	perspectives(perspD);
	scales(xScale, yScale, zScale);
	translations(transX, transY, transZ);
    var surfColorLoc = gl.getUniformLocation(program, "surfaceColor");
    gl.uniform4fv(surfColorLoc, vec);
}

function drawTris(){
    //This function loops over the glArrays and draws the elements in them
    for(var i=0; i<numTris; i++) {
        gl.drawArrays(gl.TRIANGLES, i*3, 3);
    }
    //This part of the function grabs the color data used by handleInput to pick sharks
    var arraysize = canvas.width * canvas.height * 4;
    var pixelData = new Uint8Array (arraysize);
    gl.readPixels ( 0,0, canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, pixelData);
    colorData = new Uint32Array (pixelData.buffer);
    // pixelData looks like this: [R, G, B, A, R, G, B, A, ...]
    // colorData looks like this: [ABGR, ABGR, ...]
}