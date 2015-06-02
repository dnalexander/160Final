/*
 * Donovan Alexander (donalexa) 5/11/15 : Program 3 - Transformable Sharks
 This program renders 3D Models of sharks and allows the user to manipulate them by translating, rotating,
 and scaling them.
 */
//These functions are mostly straight forward
//They update the respective matrices in the GLSL portion of the HTML file.
function rotations(xTheta, yTheta, zTheta){
	xRotLoc = gl.getUniformLocation(program, "xRot");
	gl.uniformMatrix4fv(xRotLoc, false, [1, 0, 0, 0, 
										0, Math.cos(xTheta), Math.sin(xTheta), 0,
										0, -Math.sin(xTheta), Math.cos(xTheta), 0,
										0, 0, 0, 1]);

	yRotLoc = gl.getUniformLocation(program, "yRot");
	gl.uniformMatrix4fv(yRotLoc, false, [Math.cos(yTheta), 0, -Math.sin(yTheta), 0,
										0, 1, 0, 0, 
										Math.sin(yTheta), 0, Math.cos(yTheta), 0,
										0, 0, 0, 1]);

	zRotLoc = gl.getUniformLocation(program, "zRot");
	gl.uniformMatrix4fv(zRotLoc, false, [Math.cos(zTheta), Math.sin(zTheta), 0, 0,
										-Math.sin(zTheta), Math.cos(zTheta), 0, 0,
										0, 0, 1, 0, 
										0, 0, 0, 1]);
}

function perspectives(d){
	pMatLoc = gl.getUniformLocation(program, "pMatrix");
	//d is the perspecfive factor; increase to increase view length
	gl.uniformMatrix4fv(pMatLoc, false, [1,0,0,0,
										 	 0,1,0,0,
										 	 0,0,1,(1/d),
										 	 0,0,0,1]);
}

function scales(xScale, yScale, zScale){
	scaleMatLoc = gl.getUniformLocation(program, "scale");
	gl.uniformMatrix4fv(scaleMatLoc, false, [xScale, 0, 0, 0,
											 0, yScale, 0, 0,
											 0, 0, zScale, 0,
											 0, 0, 0, 1]);
}

function translations(tX, tY, tZ){
	transMatLoc = gl.getUniformLocation(program,"transMat");
	gl.uniformMatrix4fv(transMatLoc, false, [1,0,0,0,
											 0,1,0,0,
											 0,0,1,0,
											 tX, tY, tZ, 1]);
}

function normalMats(theta, scale, transX, transY, transZ){
    var normXRMat = mat4(1, 0, 0, 0,
        0, Math.cos(theta), -Math.sin(theta), 0,
        0, Math.sin(theta), Math.cos(theta), 0,
        0, 0, 0, 1);

    var normYRMat = mat4(Math.cos(theta), 0, Math.sin(theta), 0,
        0, 1, 0, 0,
        -Math.sin(theta), 0, Math.cos(theta), 0,
        0, 0, 0, 1);

    var normSMat = mat4(1/scale, 0, 0, 0,
        0, 1/scale, 0, 0,
        0, 0, 1/scale, 0,
        0, 0, 0, 1);

    var normTMat = mat4(1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        -transX, -transY, -transZ, 1);

    var tempMatOne = mult(normYRMat, normXRMat);
    var tempMatTwo = mult(normTMat, normSMat);
    var totalNormMat = mult(tempMatOne, tempMatTwo);
    totalNMLoc = gl.getUniformLocation(program, "totalNormMatrix");
    var finalMat = transpose(totalNormMat);
    gl.uniformMatrix4fv(totalNMLoc, false, flatten(finalMat));
}