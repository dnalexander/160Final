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