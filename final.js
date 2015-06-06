/**
 * Created by Donovan on 6/1/2015.
 */
var lamp = new THREE.Group();
var data = {
    name: ""
}
var scene = new THREE.Scene();
scene.add(lamp);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0));
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;

spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;

scene.add( spotLight );
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*var jsonLoader = new THREE.JSONLoader();
jsonLoader.load("lamp_joined.js", createScene);
function createScene(geometry, materials){
    var mat = new THREE.MeshPhongMaterial({
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, mat);
    console.log(mesh);
    lamp.add(mesh);
}*/
data.name = "lamp_base";
loadPart(data.name);
data.name = "top_neck_sides";
loadPart(data.name);
data.name = "top_neck_pin_top"
loadPart(data.name);
data.name = "top_neck_pin_bottom"
loadPart(data.name);
data.name = "top_neck_pin_back"
loadPart(data.name);
data.name = "right_spring"
loadPart(data.name);
data.name = "right_bands"
loadPart(data.name);
data.name = "neck_pin_back"
loadPart(data.name);
data.name = "left_spring"
loadPart(data.name);
data.name = "left_bands"
loadPart(data.name);
data.name = "head_to_neck"
loadPart(data.name);
data.name = "head_to_bulb"
loadPart(data.name);
data.name = "head_case"
loadPart(data.name);
data.name = "front_spring_pin"
loadPart(data.name);
data.name = "center_pin_mid"
loadPart(data.name);
data.name = "center_pin_front"
loadPart(data.name);
data.name = "center_pin_back"
loadPart(data.name);
data.name = "center_neck_front"
loadPart(data.name);
data.name = "center_neck_back"
loadPart(data.name);
data.name = "bulb"
loadPart(data.name);
data.name = "bottom_pin_mid"
loadPart(data.name);
data.name = "bottom_pin_front"
loadPart(data.name);
data.name = "bottom_pin_back"
loadPart(data.name);
data.name = "bottom_neck_to_base"
loadPart(data.name);
data.name = "bottom_neck_sides"
loadPart(data.name);
data.name = "bottom_brace_sides"
loadPart(data.name);
data.name = "base_to_neck_sides"
loadPart(data.name);
data.name = "base_to_neck_tower"
loadPart(data.name);
function loadPart(name){
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("./modelData/"+name+".js", addData);
}
function addData(geometry, materials){
    var mat = new THREE.MeshPhongMaterial({
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, mat);
    mesh.name = data.name;
    lamp.add(mesh);
}
console.log(lamp);
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();