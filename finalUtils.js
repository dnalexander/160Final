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

function loadOrdered(){
    requestAnimationFrame(loadOrdered);
    loadBase();
    loadBTNT();
    loadBNTB();
}