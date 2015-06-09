/**
 * Created by Donny on 6/8/2015.
 */
function loadBase(){
    loadPart('lamp_base');
    setTimeout(loadBTNT, 100);
}
function loadBTNT(){
    loadPart('base_to_neck_tower');
    setTimeout(loadBNTB, 100);
}
function loadBNTB(){
    loadPart('bottom_neck_to_base');
    setTimeout(loadBTNS, 100);
}
function loadBTNS(){
    loadPart('base_to_neck_sides');
    setTimeout(loadBPB, 100);
}
function loadBPB(){
    loadPart('bottom_pin_back');
    setTimeout(loadBPF, 100);
}
function loadBPF(){
    loadPart('bottom_pin_front');
    setTimeout(loadBPM, 100);
}
function loadBPM(){
    loadPart('bottom_pin_mid');
    setTimeout(loadBNS, 100);
}
function loadBNS(){
    loadPart('bottom_neck_sides');
    setTimeout(loadCPB, 100);
}
function loadCPB(){
    loadPart('center_pin_back');
    setTimeout(loadBBS, 100);
}
function loadBBS(){
    loadPart('bottom_brace_sides');
    setTimeout(loadLB, 100);
}
function loadLB(){
    loadPart('left_bands');
    setTimeout(loadRB, 100);
}
function loadRB(){
    loadPart('right_bands');
    setTimeout(loadCPM, 100);
}
function loadCPM(){
    loadPart('center_pin_mid');
    setTimeout(loadCPF, 100);
}
function loadCPF(){
    loadPart('center_pin_front');
    setTimeout(loadCNF, 100);
}
function loadCNF(){
    loadPart('center_neck_front');
    setTimeout(loadCNB, 100);
}
function loadCNB(){
    loadPart('center_neck_back');
    setTimeout(loadFSP, 100);
}
function loadFSP(){
    loadPart('front_spring_pin');
    setTimeout(loadNPB, 100);
}
function loadNPB(){
    loadPart('neck_pin_back');
    setTimeout(loadLS, 100);
}
function loadLS(){
    loadPart('left_spring');
    setTimeout(loadRS, 100);
}
function loadRS(){
    loadPart('right_spring');
    setTimeout(loadTNS, 100);
}
function loadTNS(){
    loadPart('top_neck_sides');
    setTimeout(loadTNPT, 100);
}
function loadTNPT(){
    loadPart('top_neck_pin_top');
    setTimeout(loadTNPBottom, 100);
}
function loadTNPBottom(){
    loadPart('top_neck_pin_bottom');
    setTimeout(loadTNPBack, 100);
}
function loadTNPBack(){
    loadPart('top_neck_pin_back');
    setTimeout(loadHTB, 100);
}
function loadHTB(){
    loadPart('head_to_bulb');
    setTimeout(loadHC, 100);
}
function loadHC(){
    loadPart('head_case');
    setTimeout(loadBulb, 100);
}
function loadBulb(){
    loadPart('bulb');
    setTimeout(loadHTN, 100);
}
function loadHTN(){
    loadPart('head_to_neck');
}