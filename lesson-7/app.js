// let object = {};
// let user = new Object();

// console.log(object);
// console.log(user); 

// let person = { name: "Aibek", age: 19, city: "Bishkek" };

// person.name = "Baiel";
// person.age = 17;
// person.city = "Talas";
// person.isStudent = true;

// console.log(person);


// let info = {};

// info.name = "Okurmen"
// info.name = "Aibek"
// info["name"] = 34;
// info["age"] = 56;

// console.log(info);

// let object = {
//     isAdmin: false,
//     firstname: "Bek",
//     Lastname: "Kadyrov"
// };

// // delete object.firstname;

// for(let key in object){
//     console.log(object[key]);
// }
// console.log(object);

//  let salaries = {
//     Ulukman: 120,
//     Jakyp: 100,
//     Baiel: 135,
//  };
//  let result = 0;

//  for(let key in salaries) {
//     result += salaries[key];
//  }

//  console.log(result);

//  let about = {
//     name: "Ulukman",
//     age: 17,
//     city: "Bishkek",
//     isStudent: true,
//     sibling: ["Nargiza", "Shirin", "Ulukman"]
//  }
// about.sibling[1] = "Nurjamal",
// about.sibling[2] = "Aman",
// about.sibling[0] = "Esen",

// console.log("isStudent" in about);
// //  console.log(about);


//  let  product = [
//     {
//         price: "1200$",
//         title: "Apple",
//         year: 2023,
//         color: "black",
//         marka: "14 pro",
//         memory: 256,
//         akb: "98%", 
//         id: 1,
//         camera: [1,2,3],
//         image: "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png"
//     },
//      {
//         price: "1100$",
//         title: "Apple",
//         year: 2022,
//         color: "red",
//         marka: "13 pro",
//         memory: 512,
//         akb: "100%",
//         id: 2,
//         camera: [1,2],
//         image: "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png"
//     },
//  ];

//  product[1].marka = "12 pro"
//  console.log(product);

let products = [
   {
      title:"car",
      year: 2020,
      color: "black",
      price : "$9000",
      marka:"BMW",
      volume: "2.3",
      id:1,
   },
   {
      title:"car",
      year: 2020,
      color: "black",
      price : "$10000",
      marka:"BMW",
      volume: "2.3",
      id:2,
   }
]
for(let value in products){
    console.log(products[value]);
}
delete products[0].year,
console.log(products);

//  let salaries = {
//     Ulukman: 120,
//     Jakyp: 100,
//     Baiel: 135,
//  };
// //  let result = 0;

//  for(let key in salaries) {
//     result += salaries[key];
//  }
//  console.log(result);

//  let user = {
//    Aman: 100,
//    Esen: 80,
//    Bolot: 120,
//  };

//  let result = 1 ;

//  for(let key in user) {
//    result *=  user [key] * 2; 
//  }
//  console.log(result); 

let users ={
   Aibek: 60,
   Ulukman: 80,
   Almaz: 62,
   Jakyp: "title"
};

function multiplyNumber(obj) {
   for(let key in obj) {
      if(typeof obj[key] == "number"){
      obj[key] *= 2;
      }
   }
   return obj;
}

let result = multiplyNumber(users);

console.log(result);