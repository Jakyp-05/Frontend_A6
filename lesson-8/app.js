// DOM (Document Object Modal)

// document.body.style.backgroundColor = "red";

let title = document.getElementsByTagName("h1");
title[0].innerText = "Green";

let Aibek = document.getElementById("btn");

Aibek.onclick = function() {
    alert("Hi Aibek");
};

let box = document.querySelector(".box");
let leftBtn = document.querySelector(".left")
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

red.onclick = function() {
    box.style.backgroundColor = "red"
    box.style.border = "10px solid #000000"
    box.style.marginLeft = "580px"

}
blue.onclick = function() {
    box.style.backgroundColor = "blue"
    box.style.border = "10px solid black"
    box.style.marginTop = "580px"
}
yellow.onclick = function () {
    box.style.backgroundColor="yellow"
    box.style.border = "10px solid black"
    box.style.marginLeft = "0"
}
green.onclick = function(){
    box.style.backgroundColor = "#2ecc71"
    box.style.border = "10px solid black"
    box.style.marginTop = "0"
}
leftBtn.onclick = function() {
    box.style.backgroundColor = "#000000"
    box.style.border = "10px solid red"
    box.style.marginLeft = "270px"
    box.style.marginTop = "270px"
    leftBtn.onclick = function(){
        box.style.backgroundColor = "#000000"
        box.style.border = "10px solid red"
        box.style.marginLeft = "0"
        box.style.marginTop = "0"
    }
}