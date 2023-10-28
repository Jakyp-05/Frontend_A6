// let array = [];
// let newArray = new Array ();

// console.log(array);
// console.log(newArray); 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'hi'];

// arr[4] = 5;
// arr[11] = 'hello'

// console.log(arr);
// console.log(arr.length);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let user = ["Ulukman", "Aibek", "Baibolsun"];
// // user[0] = "jakyp"
// // user[2] = "Aman"
// // user[3] = "Bolot"
// user.push("Nurel"); // кошуу артынан
// user.push("Aman");
// user.push("Esen");
// user.push("Bolot");

// user.pop() //алуу артынан
// user.pop()
// user.pop()

// user.unshift("Тилек") // алдынан кошуу
// user.unshift("Кабыл")
// user.unshift("Марлен")

// user.shift(); //алдынан очуруу
// user.shift();
// user.shift();

// console.log( user)

// let number1 = [1, 2, 3];
// let number2 = [4, 5, 6];

// let number3 = number1.concat(number2)
// console.log(number3);

// let matrix = [
//     [1,2,3], 
//     [4,5,6], 
//     [10,11,12,13]
// ];
// console.log(matrix.length);

let main = [
    [1,2,3],
    [5,6,7],
    [10,11,12,13],
];


main[0][1] = 15;
main[2].push(30,40);
main[1].unshift(100,200);


console.log(main);
