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

// fetch(url)
// .then(res => res.json())
// .then(json =>  console.log(json))

// fetch(url)
// .then(function responseHandler(response){return response.json()})
// .then(function LogJSON(json){ console.log(json)})

// var url_ ="https://lesson4apitarun-1.tarunsankhla.repl.co/translate/yoda.json?text= I am tarun"

var btnTranslate  = document.querySelector("#translate_button");
var input  = document.querySelector("#Input_item");
var outputdiv  = document.querySelector("#output");
//  outputdiv.innerText = "hell";

btnTranslate.addEventListener("click",function clickEventHandler(){
    outputdiv.innerHTML = "Translated" + input.value    ;
})