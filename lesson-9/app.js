let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let contDisplay = document.getElementById("count")
let reset = document.getElementById("reset")
let multiply = document.getElementById("multiply")
let del = document.getElementById("del")

let count = 0;

increment.onclick = function (){
    count++;
    contDisplay.textContent = count
};

decrement.onclick = function () {
    if (count > 0) {
        count--;
        contDisplay.textContent = count
    }else{
        count = 0;
    }
};

reset.onclick = function() {
    count = 0
    contDisplay.textContent = count
}

multiply.onclick = function() {
    const factor = parseInt(prompt("сан жаз"))

    if(!isNan (factor)){
        count *= factor;
        contDisplay.textContent = count;
    }else {
        alert("жараксыз сан")
    }
}
del.onclick = function() {
     const number = parseInt(prompt ("сан жазыныз"));


    if(!isNaN (number)){
        count /= number;
        contDisplay.textContent= count;
}  else{
    alert("сан")
}
}





// let Aibek = 18;
// let Jakyp = 17;

// console.log(Aibek == Jakyp);
// console.log(Aibek != Jakyp);
// console.log(Aibek > Jakyp);
