/*
/!**
 * Created by Donny on 6/5/2015.
 *!/
var lamp = new THREE.Group();
var data = {
    name: ""
}
/!*function loadModel(){
    var jsonLoader = new THREE.JSONLoader();
    data.name = "lamp_base";
    jsonLoader.load("./modelData/lamp_base.js", addData);
    data.name = "top_neck_sides";
    jsonLoader.load("./modelData/top_neck_sides.js", addData);
    data.name = "top_neck_pin_top"
    jsonLoader.load("./modelData/top_neck_pin_top.js", addData);
    data.name = "top_neck_pin_bottom"
    jsonLoader.load("./modelData/top_neck_pin_bottom.js", addData);
    data.name = "top_neck_pin_back"
    jsonLoader.load("./modelData/top_neck_pin_back.js", addData);
    data.name = "right_spring"
    jsonLoader.load("./modelData/right_spring.js", addData);
    data.name = "right_bands"
    jsonLoader.load("./modelData/right_bands.js", addData);
    data.name = "neck_pin_back"
    jsonLoader.load("./modelData/neck_pin_back.js", addData);
    data.name = "left_spring"
    jsonLoader.load("./modelData/left_spring.js", addData);
    data.name = "left_bands"
    jsonLoader.load("./modelData/left_bands.js", addData);
    data.name = "head_to_neck"
    jsonLoader.load("./modelData/head_to_neck.js", addData);
    data.name = "head_to_bulb"
    jsonLoader.load("./modelData/head_to_bulb.js", addData);
    data.name = "head_case"
    jsonLoader.load("./modelData/head_case.js", addData);
    data.name = "front_spring_pin"
    jsonLoader.load("./modelData/front_spring_pin.js", addData);
    data.name = "center_pin_mid"
    jsonLoader.load("./modelData/center_pin_mid.js", addData);
    data.name = "center_pin_front"
    jsonLoader.load("./modelData/center_pin_front.js", addData);
    data.name = "center_pin_back"
    jsonLoader.load("./modelData/center_pin_back.js", addData);
    data.name = "center_neck_front"
    jsonLoader.load("./modelData/center_neck_front.js", addData);
    data.name = "center_neck_back"
    jsonLoader.load("./modelData/center_neck_back.js", addData);
    data.name = "bulb"
    jsonLoader.load("./modelData/bulb.js", addData);
    data.name = "bottom_pin_mid"
    jsonLoader.load("./modelData/bottom_pin_mid.js", addData);
    data.name = "bottom_pin_front"
    jsonLoader.load("./modelData/bottom_pin_front.js", addData);
    data.name = "bottom_pin_back"
    jsonLoader.load("./modelData/bottom_pin_back.js", addData);
    data.name = "bottom_neck_to_base"
    jsonLoader.load("./modelData/bottom_neck_to_base.js", addData);
    data.name = "bottom_neck_sides"
    jsonLoader.load("./modelData/bottom_neck_sides.js", addData);
    data.name = "bottom_brace_sides"
    jsonLoader.load("./modelData/bottom_brace_sides.js", addData);
    data.name = "base_to_neck_sides"
    jsonLoader.load("./modelData/base_to_neck_sides.js", addData);
    data.name = "base_to_neck_tower"
    jsonLoader.load("./modelData/base_to_neck_tower.js", addData);
}*!/
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
}*/
var lamp = new THREE.Group();