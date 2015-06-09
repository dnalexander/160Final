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

function focusCam(){
    if(temp[0]){
        camera.lookAt(new THREE.Vector3(temp[0].position.x, temp[0].position.y, temp[0].position.z));
    }else{
        alert("You can't focus on a non-existent lamp! Make the lamp first.");
    }
}

function loadPart(name){
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("./modelData/"+name+".js", function(geometry){
        var mat = new THREE.MeshPhongMaterial({
            shading: THREE.SmoothShading
        });
        var mesh = new THREE.Mesh(geometry, mat);
        mesh.name = name;
        lamp.add(mesh);
    });
}
var demo=false;
var i=0;
var j=0;
var k=0;
var m=0;
var n=0;
function render() {
    requestAnimationFrame( render );
    if(demo && temp[0]){
        if(i<20){
            temp[0].position.x += 0.1;
            i++;
        }
        if(j<32 && i==20){
            temp[1].rotation.y+= Math.PI/32;
            j++;
        }
        if(k<15 && j==32){
            temp[2].rotation.z+= Math.PI/32;
            k++;
        }
        if(m<15 && k==15){
            temp[20].rotation.z-=Math.PI/32;
            m++;
        }
        if(n<32 && m==15){
            temp[27].rotation.x+=Math.PI/32;
            n++;
        }
    }
    renderer.render( scene, camera );
}

var temp = [];
function childify(){
    //connect base to base_to_neck_tower
    for(var i=0; i<lamp.children.length; i++){
        temp.push(lamp.children[i]);
    }
    temp[0].add(temp[1]);

    //connect base_to_neck_tower to bottom_neck_to_base
    temp[1].add(temp[2]);

    //connect bottom_neck_to_base to:
    //bottom_pin_back
    //base_to_neck_sides
    //center_pin_back
    //bottom_neck_sides
    temp[2].add(temp[4]);
    temp[2].add(temp[3]);
    temp[2].add(temp[8]);
    temp[2].add(temp[7]);

    /* connect base_to_neck_sides to:
     bottom_pin_front
     bottom_pin_mid
     */
    temp[3].add(temp[5]);
    temp[3].add(temp[6]);

    //connect bottom_pin_front to bottom_brace_sides
    temp[5].add(temp[9]);

    //connect bottom_pin_mid to bands
    temp[6].add(temp[10]);
    temp[6].add(temp[11]);

    //connect bands to center_pin_mid
    temp[10].add(temp[12]);
    temp[11].add(temp[12]);

    /*connect bottom_neck_sides to:
     center_pin_front
     neck_pin_back
     */
    temp[7].add(temp[13]);
    temp[7].add(temp[17]);

    /* connect neck_pin_back to:
     springs
     center_neck_back
     */
    temp[17].add(temp[18]);
    temp[17].add(temp[19]);
    temp[17].add(temp[15]);

    //connect center_pin_front to center_neck_front
    temp[13].add(temp[14]);

    /*connect center_neck_front to:
     front_spring_pin
     top_neck_pin_bottom
     */
    temp[14].add(temp[16]);
    temp[14].add(temp[22]);

    //connect center_neck_back to top_neck_pin_back
    temp[15].add(temp[23]);

    //connect top_neck_pin_back to top_neck_sides
    temp[23].add(temp[20]);

    //connect top_neck_sides to top_neck_pin_top
    temp[20].add(temp[21]);

    //connect top_neck_pin_top to head_to_neck
    temp[21].add(temp[27]);

    //connect head_to_neck to head_case
    temp[27].add(temp[25]);

    //connect head_case to head_to_bulb
    temp[25].add(temp[24]);

    //connect head_to_bulb to bulb
    temp[24].add(temp[26]);
}