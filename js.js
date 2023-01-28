let display=document.getElementById("display");
 
function reset() {
display.value = "";
}

function press(x){
display.value += x;
}

function calc() {
display.value = eval(display.value);
}

function del() {
display.value = display.value.slice(0,-1);
} 