// console.log("hello mf");

// var username = prompt("ou name");
// alert("ok"+username);
var btnTranslate  = document.querySelector("#translate_button");
var input  = document.querySelector("#Input_item");


btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("Clicked" +input.value);
})