/*
 * Donovan Alexander (donalexa) 5/18/15 : Lab 5 - Textured Shark
                                          This lab assignment takes our shark model and applies a tiger texture to it.
 */
//initialize global vars
var canvas;
var gl;

//init drawing vars
var numTris = 0;
var program;
var vPosition, vNormal;
var theta, perspD, scale, transX, transY, transZ, renderReps = 0;
var shapeCoord = [], shapePoly = [];
var flatNormArray = [], triArray = [];
//init drawing buffers
var vBuffer, nBuffer;
//picking vars
var activeShark = "none";
var input = document.getElementById("form1");
var colorData;
function init() {
	//setup canvas
	canvas = document.getElementById("gl-canvas");
	canvas.addEventListener("mousedown", handleInput);
	gl = WebGLUtils.setupWebGL(canvas);
	//assign GL to the canvas
	if (!gl) {
		alert("WebGL isn't available");
	}

	gl.viewport(0, 0, canvas.width, canvas.height);
	//set the GL window's size
	gl.clearColor(0.5, 0.5, 1.0, 1.0);
	//set the GL window's
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	//init shaders
    program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	//set the rendering contexts
	
	//Get rid of depth based lighting errors
	gl.enable(gl.DEPTH_TEST);

	//Set the rotation variable
	//allows us to view the model from different angles
	theta = -Math.PI / 4;

	//Initialize the rotation matrices based on given values in class
	//These rotate about their respective axes with respect to the right hand rule
	rotations(theta, theta, theta);

    //Initialize the perspective matrix
    //Allows the model to be viewed in a realistic manner
	perspD = 1;
	perspectives(perspD);

	//Scale the model to fit the canvas
	scale = 0.01;
	scales(scale);

    //Initialize the translation matrix
    //Moves the model a given point across the respective axis
	transX = 10;
	transY = 0;
	transZ = 0;
	translations(transX, transY, transZ);

    //Initialize the Normal Transformation Matrix
    //This allows lighting to be calculated for the model
    normalMats(theta, scale, transX, transY, transZ);

    surfColorLoc = gl.getUniformLocation(program, "surfaceColor");
    gl.uniform4fv(surfColorLoc, vec4(0.5, 0.5, 0.5,1.0));
	
	//get shader attribs
	vPosition = gl.getAttribLocation(program, "vPosition");
	gl.enableVertexAttribArray(vPosition);
	vNormal = gl.getAttribLocation(program, "vNormal");
	gl.enableVertexAttribArray(vNormal);

	//get shape vars
	getModelVals();
	//initialize the buffers to handle drawing the points
	//vert pos buffer
	/*pair = 
	   gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	   gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
	 */
	vBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
		
	//normal buffer
	/*pair = 
	gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
	gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
	 */
	nBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
	gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(flatNormArray), gl.STATIC_DRAW);
}

function sharkify(){
	for(var i=0; i<shapePoly.length; i++){
		//this for loop begins iterating over the entire poly file
		if(shapePoly[i].length == 4){
			/*this case handles poly indices which are made up only of a single triangle
			 * it also generates the surface normals for the triangle
			 */
			var temp = getPoly(i)[0];
			flatNormArray = flatNormArray.concat(getNorm(temp));
			triArray = triArray.concat(temp);
			numTris++;
		}
		else if(shapePoly[i].length > 4){
			/*this case handles polygons that need to be broken up into a number of triangls
			 * 
			 */
			var poly = getPoly(i)[0];
			var points = [];
			var polyInd = 0;
			for(var k=0; k<poly.length/3; k++){
				//this loop creates an array the holds arrays of point values
				//ex: points[0] = (x, y, z) for the first point in the polygon
				//polyInd keeps track of how many points the polygon is made up of
				points[polyInd] = poly.slice(k*3, k*3+3);
				polyInd++;
			}
			for(var j=0; j<points.length-2; j++){
				/*this loop makes a triangle out of the given points in the points array
				 * it also generates the surface normals for each triangle in the polygon
				 */
				var temp = [points[0], points[j+1], points[j+2]];
				var tri = [];
                tri = tri.concat(temp[0]);
                tri = tri.concat(temp[1]);
                tri = tri.concat(temp[2]);
				flatNormArray = flatNormArray.concat(getNorm(tri));
				triArray = triArray.concat(tri);
				numTris++;
			}
		}
	}
}

function render(){
    //This function draws the sharks with the given variables
    //First, set the draw data for the shark models
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(flatNormArray), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(triArray), gl.STATIC_DRAW);
    if(renderReps == 0) {
        //If this is the first time drawing, draw the sharks with their default values
        //Shark One(pink) vars
        oneXTheta = oneYTheta = oneZTheta = -Math.PI / 4;
        onePerspD = 1;
        oneXScale = oneYScale = oneZScale = 0.01;
        oneTransX = 10;
        oneTransY = 0;
        oneTransZ = 0;
        oneColor = vec4(0.5, 0.5, 0.5, 1.0);
        updateUniforms(oneXTheta, oneYTheta, oneZTheta, onePerspD,
            oneXScale, oneYScale, oneZScale, oneTransX, oneTransY, oneTransZ, oneColor);
        drawTris();
        renderReps++;
    } else{
        //If this isn't your first time drawing, update the shark vars if you need to, draw the sharks
        switch(activeShark){
            //This determines which shark we need to update
            case "pink":
                /*oneTransX += parseFloat(input.elements[0].value);
                oneTransY += parseFloat(input.elements[1].value);
                oneTransZ += parseFloat(input.elements[2].value);
                oneXTheta += parseFloat(input.elements[3].value);
                oneYTheta += parseFloat(input.elements[4].value);
                oneZTheta += parseFloat(input.elements[5].value);
                oneXScale += parseFloat(input.elements[6].value);
                oneYScale += parseFloat(input.elements[7].value);
                oneZScale += parseFloat(input.elements[8].value);*/
                updateUniforms(oneXTheta, oneYTheta, oneZTheta, onePerspD,
                    oneXScale, oneYScale, oneZScale, oneTransX, oneTransY, oneTransZ, oneColor);
                drawTris();
                break;

            case "none":
                //Here, no sharks are updated, so we just redraw them
                updateUniforms(oneXTheta, oneYTheta, oneZTheta, onePerspD,
                    oneXScale, oneYScale, oneZScale, oneTransX, oneTransY, oneTransZ, oneColor);
                drawTris();
                break;
        }
    }
    document.getElementById("shark").innerHTML = activeShark;
}

