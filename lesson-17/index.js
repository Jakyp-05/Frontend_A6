// const array = [
//     {
//         id: 1,
//         title: 'Ocurmen',
//         body: 'this is a simple text',
//         price: '120',
//         date: '21/10/2023',
//         category: 2,
//         address: 'Manas',
//     },
//     {
//         id: 2,
//         title: 'Bishkek',
//         body: 'this is a simple text',
//         price: '120',
//         date: '21/10/2023',
//         category: 4,
//         address: 'Chui',
//     },
// ];
// let box = document.getElementById("box");

// let showArray = array.map((item) => {
//     return `
//         <div>
//             <h2>${item.title}</h2>
//             <p>${item.body}</p>
//             <p>${item.price}</p>
//             <span>${item.date}</span>
//             <div>${item.address}</div>
//             <p>${item.category}</p>
//         </div>
//     `
// });
// box.innerHTML = showArray.join("");

// Fetch

let table = document.querySelector(".table")


const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
       .then((response) => {
        return response.json();
       })
       .then((data) => {
           let showPost = data.slice(0,15).map((todo) => {
               return  `
                   <div class="item">
                       <h3>${todo.title}</h3>
                       <p>${todo.id}</p>
                       <p>User Id:${todo.userId}</p>
                       <input type="checkbox" value="${todo.completed}"/>
                   </div>
                `;
           });
           table.innerHTML = showPost.join("")
        });
}

getPost()

let icon = document.querySelector(".icon")

const getItem = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((wrapper) => {
            return wrapper.json();
        })
        .then((photo) => {
            let itemPost = photo.slice(0,14).map((content) => {
                return `
                    <div class="container">
                        <p>${content.albumId}</p>
                        <p>${content.id}</p>
                        <h3>${content.title}</h3>
                        <img src="${content.url}"/>
                        <img src="${content.thumbnailUrl}"/>
                    </div>
                `;
            });
            icon.innerHTML = itemPost.join("")
        });
};
getItem()


let users = document.getElementById("users")
async function getUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        await showUsers(data);
    }catch(error) {
        console.log( error);
    }
}

getUsers();

function showUsers(data) {
    console.log(data);

    let showUsersHtml = data.map((item) => {
        return `
            <div class="user-info">
                <p>${item.name}</p>
                <p>${item.username}</p>
                <p>${item.email}</p>
                <p>${item.phone}</p>
                <p>${item.website}</p>
                <div class="address">
                   <p>${item.address.city}</p>
                   <p>${item.address.street}</p>
                   <p>${item.address.suite}</p>
                   <p>${item.address.zipcode}</p>
                    <div class="geo">
                       <p>${item.address.geo.lat}</p>
                       <p>${item.address.geo.lng}</p>
                   </div>
                </div>
                <div class="company">
                    <p>${item.company.bs}</p>
                    <p>${item.company.catchPhrase}</p>
                    <p>${item.company.name}</p>
                </div>
            </div>
        `
    });

    users.innerHTML = showUsersHtml.join("")
}



const title_input = document.getElementById("title");
const body_input = document.getElementById("body");
const userId_input = document.getElementById("userId");
const sendBtn = document.getElementById("btn");
const result = document.getElementById("result");


const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function createUser() {
    const payload = {
        title: title_input.value,
        body: body_input.value,
        userId: userId_input.value
    };

    try {
        const response = await fetch(API_URL, {
             method: 'POST',
             headers: {
                    "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
         });

        const data = await response.json();
        // console.log(data);
        result.innerHTML = `
            <div>${data.title}</div>
            <div>${data.body}</div>
            <div>${data.userId}</div>
        `;
    }catch(error) {
        console.log(error);
    }   
}


sendBtn.addEventListener("click", createUser)

// let result = document.getElementById("result");

// function(result) {
//     if (sendBtn.clicked == true) {
//         createUser();
//     } else {
//         alert('Please fill all fields');
//     }
    
// }

// sendBtn.onclick = () => {
//     if ((title_input.value != '')) {
//         sendData()
//     }
// }
// sendBtn.addEventListener("click", createUser)

// sendBtn.onclick =  () => {
//     return `
//         <div class=""result>
//             p
//         </div>
//     `
// }
// const result = array.filter(item => item.category === 2);
// console.log(result);


let userS = [
    {
        title: "hello",
        age: 24
    },
    {
        title: "okurman",
        age: 24
    },
    {
        title: "hi",
        age: 24
    },
]

let a = userS.map((item) => console.log(item.title))

let item = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
}
console.log(item.address);
console.log(a);