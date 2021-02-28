let some_variable = "initial string information";
let some_other_variable = 56;
let length = 0;
let width = 0;
let gates = 0;
let total = 0;
let fence_type = "Chainlink";
let price = 0;
let calcForm=document.getElementById('openForm');
let closeCalcBtn=document.getElementById('closeCalcBtn');
function open_closeCalcForm() {
    if (calcForm.style.display==="none"){
        calcForm.style.display='block';
    }else{
        calcForm.style.display='none';
    }
}
function closeModalCalcForm(){
    calcForm.style.display='none';
}
function fence_function() {
    length = document.fen2.len.value;
    width = document.fen3.wid.value;
    gates = document.countGates.count.value;
    let perimeter = 2 * length + 2 * width;
    if (fence_type === "FencingBlinds") {
        price = 77 * perimeter;
    }
    if (fence_type === "MetalFence") {
        price = 87 * perimeter;
    }
    if (fence_type === "RanchoFence") {
        price = 69 * perimeter;
    }
    if (fence_type === "WeldedGridFence") {
        price = 62 * perimeter;
    }
    if (fence_type === "TemporaryFencing") {
        price = 59 * perimeter;
    }
    price = 165 * gates + price;
    disp.value = price;
}