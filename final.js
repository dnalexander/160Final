/**
 * Created by Donovan on 6/1/2015.
 */
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
}
