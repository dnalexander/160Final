/**
 * Created by Donovan on 6/1/2015.
 */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
var loader = new THREE.OBJLoader();
loader.load('lamp.', function(object){
    scene.add(object);
});
camera.position.z = 5;
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();