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

var serve_url_ ="https://lesson4apitarun-1.tarunsankhla.repl.co/translate/yoda.json";
var minionurl ="https://api.funtranslations.com/translate/minion.json";

// btnTranslate.addEventListener("click",function clickEventHandler(){
//     outputdiv.innerHTML = "Translated" + input.value    ;
// })
function clickEventHandler(){
    var inputtext =input.value;
    fetch(getTranslationURL(inputtext)).then(res => res.json()).then(json =>  outputdiv.innerHTML = "Translated : "+json.contents.translated ).catch(e => console.log(e))
}

btnTranslate.addEventListener("click",clickEventHandler)
function getTranslationURL(text){
    return minionurl +"?text=" + text ;
}