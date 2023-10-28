let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let Select = document.querySelector(".select");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

function sum(a,b) {
    return a + b
}
function substract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divison(a, b) {
    return a / b
}
const OPERATION = {
    sum: "+",
    substract: "-",
    multiply: "*",
    divison: "/"
}

function calculate({a,b,operation}) {
    let result = null;

    switch(operation){
        case OPERATION.sum:
            result = sum(a, b);
            break;
        case OPERATION.substract:
            result = substract(a, b);
            break;
        case OPERATION.multiply:
            result = multiply(a, b)
            break;
        case OPERATION.divison:
            result = divison(a, b)
            break;
    }
    return result

}

function handleClick() {
    const a = Number(input1.value);
    const b = Number(input2.value);
    const operation = Select.value;

    let getResult = calculate({a, b, operation})

    // alert(getResult)
    output.innerHTML = `${getResult}`
    input1.value = ""
    input2.value = ""
}

btn.addEventListener("click", handleClick)

// let values = [10, 22, 8, 5, 12, 11, 4, 7, 9, 3, 6];

// let minNum = values[0];

// for (let i = 1; i < values.length; i++) {
//     if (values[i] < minNum) {
//         minNum = values[i];
//     }
// }

// alert(minNum)

let swit = [22, 25, 30, 40, 23, 43, 33, 45, 50, 52, 34];

let maxNum = swit[0];


for (let i = 1; i < swit.length; i++) {
    if (swit[i] > maxNum) {
        maxNum = swit[i];
    }
} 
alert(maxNum)