/**
 * Created by Donovan on 6/1/2015.
 */
var lamp = new THREE.Group();
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

var jsonLoader = new THREE.JSONLoader();
jsonLoader.load("lamp.js", createScene);
/*var objLoader = new THREE.OBJLoader();
objLoader.load("lamp.obj", createScene);*/
function createScene(geometry, materials){
    var mat = new THREE.MeshPhongMaterial({
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, mat);
    lamp.add(mesh);
}
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();