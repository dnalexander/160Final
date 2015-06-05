/**
 * Created by Donny on 6/5/2015.
 */
var lamp = new THREE.Group();
function loadModel(){
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("./modelData/lamp_base.js", addData);
    jsonLoader.load("./modelData/top_neck_sides.js", addData);
    jsonLoader.load("./modelData/top_neck_pin_top.js", addData);
    jsonLoader.load("./modelData/top_neck_pin_bottom.js", addData);
    jsonLoader.load("./modelData/top_neck_pin_back.js", addData);
    jsonLoader.load("./modelData/right_spring.js", addData);
    jsonLoader.load("./modelData/right_bands.js", addData);
    jsonLoader.load("./modelData/neck_pin_back.js", addData);
    jsonLoader.load("./modelData/left_spring.js", addData);
    jsonLoader.load("./modelData/left_bands.js", addData);
    jsonLoader.load("./modelData/head_to_neck.js", addData);
    jsonLoader.load("./modelData/head_to_bulb.js", addData);
    jsonLoader.load("./modelData/head_case.js", addData);
    jsonLoader.load("./modelData/front_spring_pin.js", addData);
    jsonLoader.load("./modelData/center_pin_mid.js", addData);
    jsonLoader.load("./modelData/center_pin_front.js", addData);
    jsonLoader.load("./modelData/center_pin_back.js", addData);
    jsonLoader.load("./modelData/center_neck_front.js", addData);
    jsonLoader.load("./modelData/center_neck_back.js", addData);
    jsonLoader.load("./modelData/bulb.js", addData);
    jsonLoader.load("./modelData/bottom_pin_mid.js", addData);
    jsonLoader.load("./modelData/bottom_pin_front.js", addData);
    jsonLoader.load("./modelData/bottom_pin_back.js", addData);
    jsonLoader.load("./modelData/bottom_neck_to_base.js", addData);
    jsonLoader.load("./modelData/bottom_neck_sides.js", addData);
    jsonLoader.load("./modelData/bottom_brace_sides.js", addData);
    jsonLoader.load("./modelData/base_to_neck_sides.js", addData);
    jsonLoader.load("./modelData/base_to_neck_tower.js", addData);
}
function addData(geometry, materials){
    var mat = new THREE.MeshPhongMaterial({
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, mat);
    lamp.add(mesh);
}