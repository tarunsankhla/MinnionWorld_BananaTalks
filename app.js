// console.log("hello mf");

// var username = prompt("ou name");
// alert("ok"+username);

// linkedin requesr acceptor
// document.querySelectorAll("").forEach(item => setTimeout(item.click(), Math.random +1000));


// document.querySelector("testares");
// document.querySelector("#translate_button");
// document.querySelector(".translate_button");
// document.querySelector("input[name='translate_button']");

// document.getElementById("Input_item").value;

var btnTranslate  = document.querySelector("#translate_button");
var input  = document.querySelector("#Input_item");
var outputdiv  = document.querySelector("#output");
//  outputdiv.innerText = "hell";

btnTranslate.addEventListener("click",function clickEventHandler(){
    outputdiv.innerHTML = "Translated" + input.value    ;
})