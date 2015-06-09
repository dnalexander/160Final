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
    if(group[0]){
        camera.lookAt(new THREE.Vector3(group[0].position.x, group[0].position.y, group[0].position.z));
    }else{
        alert("You can't focus on a non-existent lamp! Make the lamp first.");
    }
}

function loadPart(name){
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("../data/"+name+".js", function(geometry){
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
    if(demo && group[0]){
        if(i<20){
            group[0].position.x += 0.1;
            i++;
        }
        if(j<32 && i==20){
            group[1].rotation.y+= Math.PI/32;
            j++;
        }
        if(k<15 && j==32){
            group[2].rotation.z+= Math.PI/32;
            k++;
        }
        if(m<15 && k==15){
            group[20].rotation.z-=Math.PI/32;
            m++;
        }
        if(n<32 && m==15){
            group[27].rotation.x+=Math.PI/32;
            n++;
        }
    }
    renderer.render( scene, camera );
}

var group = [];
function childify(){
    //connect base to base_to_neck_tower
    for(var i=0; i<lamp.children.length; i++){
        group.push(lamp.children[i]);
    }
    group[0].add(group[1]);

    //connect base_to_neck_tower to bottom_neck_to_base
    group[1].add(group[2]);

    //connect bottom_neck_to_base to:
    //bottom_pin_back
    //base_to_neck_sides
    //center_pin_back
    //bottom_neck_sides
    group[2].add(group[4]);
    group[2].add(group[3]);
    group[2].add(group[8]);
    group[2].add(group[7]);

    /* connect base_to_neck_sides to:
     bottom_pin_front
     bottom_pin_mid
     */
    group[3].add(group[5]);
    group[3].add(group[6]);

    //connect bottom_pin_front to bottom_brace_sides
    group[5].add(group[9]);

    //connect bottom_pin_mid to bands
    group[6].add(group[10]);
    group[6].add(group[11]);

    //connect bands to center_pin_mid
    group[10].add(group[12]);
    group[11].add(group[12]);

    /*connect bottom_neck_sides to:
     center_pin_front
     neck_pin_back
     */
    group[7].add(group[13]);
    group[7].add(group[17]);

    /* connect neck_pin_back to:
     springs
     center_neck_back
     */
    group[17].add(group[18]);
    group[17].add(group[19]);
    group[17].add(group[15]);

    //connect center_pin_front to center_neck_front
    group[13].add(group[14]);

    /*connect center_neck_front to:
     front_spring_pin
     top_neck_pin_bottom
     */
    group[14].add(group[16]);
    group[14].add(group[22]);

    //connect center_neck_back to top_neck_pin_back
    group[15].add(group[23]);

    //connect top_neck_pin_back to top_neck_sides
    group[23].add(group[20]);

    //connect top_neck_sides to top_neck_pin_top
    group[20].add(group[21]);

    //connect top_neck_pin_top to head_to_neck
    group[21].add(group[27]);

    //connect head_to_neck to head_case
    group[27].add(group[25]);

    //connect head_case to head_to_bulb
    group[25].add(group[24]);

    //connect head_to_bulb to bulb
    group[24].add(group[26]);
}