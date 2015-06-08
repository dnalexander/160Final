/**
 * Created by Donovan on 6/1/2015.
 */

var lamp = new THREE.Group();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var spotLight = new THREE.SpotLight(0xffffff);
var light = new THREE.PointLight(0xffffff, 1, 100);
var renderer = new THREE.WebGLRenderer();

function init() {
    scene.add(lamp);
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    spotLight.position.set(100, 1000, 100);

    spotLight.castShadow = true;

    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;

    spotLight.shadowCameraNear = 500;
    spotLight.shadowCameraFar = 4000;
    spotLight.shadowCameraFov = 30;

    scene.add(spotLight);
    light.position.set(0, 0, 0);
    scene.add(light);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    document.addEventListener("mousedown", inputDown);
    document.addEventListener("mouseup", inputUp);
    document.addEventListener("mousemove", inputMove);
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
    loadPart("lamp_base");
    loadPart("top_neck_sides");
    loadPart("top_neck_pin_top");
    loadPart("top_neck_pin_bottom");
    loadPart("top_neck_pin_back");
    loadPart("right_spring");
    loadPart("right_bands");
    loadPart("neck_pin_back");
    loadPart("left_spring");
    loadPart("left_bands");
    loadPart("head_to_neck");
    loadPart("head_to_bulb");
    loadPart("head_case");
    loadPart("front_spring_pin");
    loadPart("center_pin_mid");
    loadPart("center_pin_front");
    loadPart("center_pin_back");
    loadPart("center_neck_front");
    loadPart("center_neck_back");
    loadPart("bulb");
    loadPart("bottom_pin_mid");
    loadPart("bottom_pin_front");
    loadPart("bottom_pin_back");
    loadPart("bottom_neck_to_base");
    loadPart("bottom_neck_sides");
    loadPart("bottom_brace_sides");
    loadPart("base_to_neck_sides");
    loadPart("base_to_neck_tower");
}
