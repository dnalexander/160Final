/**
 * Created by Donny on 6/8/2015.
 */
function moveCam(dir){
    switch(dir){
        case "left":
            camera.position.x-=1;
            break;
        case "right":
            camera.position.x+=1;
            break;
        case "up":
            camera.position.y+=1;
            break;
        case "down":
            camera.position.y-=1;
            break;
        case "in":
            camera.position.z-=1;
            break;
        case "out":
            camera.position.z+=1;
            break;
        case "rotLeft":
            camera.rotation.y+=Math.PI/32;
            break;
        case "rotRight":
            camera.rotation.y-=Math.PI/32;
            break;
        case "rotUp":
            camera.rotation.x+=Math.PI/32;
            break;
        case "rotDown":
            camera.rotation.x-=Math.PI/32;
            break;
    }
}

function loadPart(name){
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("./modelData/"+name+".js", function(geometry, materials){
        var mat = new THREE.MeshPhongMaterial({
            shading: THREE.SmoothShading
        });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.name = name;
        lamp.add(mesh);
    });
}

function addData(geometry, materials){
    var mat = new THREE.MeshPhongMaterial({
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, mat);
    mesh.name = name;
    lamp.add(mesh);
}

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}

function childify(){
    //connect base to base_to_neck_tower
    lamp.children[0].add(lamp.children[1]);

    //connect base_to_neck_tower to bottom_neck_to_base
    lamp.children[1].add(lamp.children[2]);

    //connect bottom_neck_to_base to:
    //bottom_pin_back
    //base_to_neck_sides
    //center_pin_back
    //bottom_neck_sides
    lamp.children[2].add(lamp.children[4]);
    lamp.children[2].add(lamp.children[3]);
    lamp.children[2].add(lamp.children[8]);
    lamp.children[2].add(lamp.children[7]);

    /* connect base_to_neck_sides to:
    bottom_pin_front
    bottom_pin_mid
     */
    lamp.children[3].add(lamp.children[5]);
    lamp.children[3].add(lamp.children[6]);

    //connect bottom_pin_front to bottom_brace_sides
    lamp.children[5].add(lamp.children[9]);

    //connect bottom_pin_mid to bands
    lamp.children[6].add(lamp.children[10]);
    lamp.children[6].add(lamp.children[11]);

    //connect bands to center_pin_mid
    lamp.children[10].add(lamp.children[12]);
    lamp.children[11].add(lamp.children[12]);

    /*connect bottom_neck_sides to:
    center_pin_front
    neck_pin_back
     */
    lamp.children[7].add(lamp.children[13]);
    lamp.children[7].add(lamp.children[17]);

    /* connect neck_pin_back to:
    springs
    center_neck_back
     */
    lamp.children[17].add(lamp.children[18]);
    lamp.children[17].add(lamp.children[19]);
    lamp.children[17].add(lamp.children[15]);

    //connect center_pin_front to center_neck_front
    lamp.children[13].add(lamp.children[14]);

    /*connect center_neck_front to:
     front_spring_pin
     top_neck_pin_bottom
     */
    lamp.children[14].add(lamp.children[16]);
    lamp.children[14].add(lamp.children[22]);

    //connect center_neck_back to top_neck_pin_back
    lamp.children[15].add(lamp.children[23]);

    //connect top_neck_pin_back to top_neck_sides
    lamp.children[23].add(lamp.children[20]);

    //connect top_neck_sides to top_neck_pin_top
    lamp.children[20].add(lamp.children[21]);

    //connect top_neck_pin_top to head_to_neck
    lamp.children[21].add(lamp.children[27]);

    //connect head_to_neck to head_case
    lamp.children[27].add(lamp.children[25]);

    //connect head_case to head_to_bulb
    lamp.children[25].add(lamp.children[24]);

    //connect head_to_bulb to bulb
    lamp.children[24].add(lamp.children[26]);
}