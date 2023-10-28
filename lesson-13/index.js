let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let number = document.querySelector(".number");
let red1 = document.querySelector(".red1");
let yellow1 = document.querySelector(".yellow1");
let green1 = document.querySelector(".green1");
let number1 = document.querySelector(".number1")

let timer = 15;

function getTimer() {
    timer--;
    if(timer <= 0){
        red.style.backgroundColor = red.style.backgroundColor == "black" ? "red" : "black"
        green.style.backgroundColor = green.style.backgroundColor   == "green" ? "black" : "green"
        red1.style.backgroundColor = red1.style.backgroundColor == "red" ? "black" : "red"
        green1.style.backgroundColor = green1.style.backgroundColor == "black" ? "green" : "black"
        yellow.style.backgroundColor = "yellow"
        yellow.style.color = "black"
        yellow1.style.backgroundColor = "yellow"
        yellow1.style.color = "black"
        timer = 15
    } 
    else if (timer === 3){
        yellow.style.backgroundColor = "black"
        yellow.style.color = "#fff"
        yellow1.style.backgroundColor = "black"
        yellow1.style.color = "#fff"
        // console.log(red,red1);
    }
    else if(timer === 2) {
            yellow.style.backgroundColor = "yellow";
            yellow.style.color = "black"
            yellow1.style.backgroundColor = "yellow";
            yellow1.style.color = "black"
    }
    else if(timer === 1) {
            yellow.style.backgroundColor = "black";
            yellow.style.color = "#fff"
            yellow1.style.backgroundColor = "black";
            yellow1.style.color = "#fff"
    }
    else {
        yellow.style.backgroundColor = "yellow"
        yellow.style.color = "black"
    }
  
    number.innerHTML = timer
    number1.innerHTML = timer
}

setInterval(getTimer, 1000)


// let user = 21 === 26 ? alert("yes") : alert("no");