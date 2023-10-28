let title = document.getElementById("title");
let item = document.getElementById("item");
let text = document.getElementById("text");

console.log(title);
title.innerText = "Hello world";
item.innerHTML = "Hi okurmen";
// text.textContent = "I love Bishkek";
//    let san = 2;

//    san = 4;
//    san = san + 10;
//    san = san + 40;
//    console.log(san);

//    for (let number = 1; number < 8; number = number + 3){
//     console.log(number);
//    }

//  let user = "Ulukman";
//  let number = 0;
//  let number2 = 0;

//  for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         // console.log(i, "i", j, "j");
//         number2++
//     }
//     number++
//  }
//  console.log(number);
//  console.log(number2);
let number1 = prompt("san jazynyz")
let number2 = prompt("san jazynyz")
let input1 = parseInt(number1)
let input2 = parseInt(number2)

for (let i = 1; i <= input1; i++){
    for (let j = 1; j <= input2; j++){
        text.innerHTML += `${i} * ${j} = ${i * j} <br>`;
    }
    text.innerHTML += "<hr>"
} 