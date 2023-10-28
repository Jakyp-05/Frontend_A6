const products = [
    {
        image: "assets/png..1.png",
        id:1,
        title: 'Red Bench',
        bestSeller: "Best Seller",
        price: "$3.89",
        category: "People"
    },
    {
        image: "assets/png23.png",
        id: 2,
        title: "Egg Balloon",
        bestSeller:"",
        price: "$93.89",
        category: "Food"
    },
    {
        image: "assets/png23.png",
        id: 3,
        title: "Egg Balloon",
        bestSeller:"",
        price: "$93.89",
        category: "Food"
    },
    {
        image: "assets/man.png",
        id: 4,
        title: "Man",
        bestSeller: "",
        price : "$100.00",
        category: "People"
    },
    {
        image: "assets/date.png",
        id: 5,
        title: "Architecture",
        bestSeller: "",
        price: "$101.00",
        category: "Landmarks",
    },
    {
        image: "assets/date.png",
        id: 6,
        title: "Architecture",
        bestSeller: "",
        price: "$101.00",
        category: "Landmarks",
    },
     {
        image: "assets/date.png",
        id: 7,
        title: "Architecture",
        bestSeller: "",
        price: "$101.00",
        category: "Landmarks",
    },
     {
        image: "assets/date.png",
        id: 8,
        title: "Architecture",
        bestSeller: "",
        price: "$101.00",
        category: "Landmarks",
    },
     {
        image: "assets/date.png",
        id: 9 ,
        title: "Architecture",
        bestSeller: "",
        price: "$101.00",
        category: "Landmarks",
    }
];
let mainProduct = document.querySelector(".products__main__body");

let cartArray = []


let showProductHtml = products.map((item) => {
    let bestSellerLabel = item.bestSeller ? `<p>${item.bestSeller}</p>` : ""
    return `
       <div class="product__item">
            <div class="product__image">
                <img src=${item.image} alt="Photo">
                ${bestSellerLabel}
                <button onclick = "addCart('${item.id}')" class="product__item__add">ADD TO CART</button>
            </div>
            <p class="product__category">${item.category}</p>
            <h3 class="product__title">${item.title}</h3>
            <div class="product__item__price">${item.price}</div>
         </div>
    `;
});

mainProduct.innerHTML = showProductHtml.join("");

let cartCount = document.querySelector(".cart__count");
cartCount.innerHTML = cartArray.length;
let modalMain = document.querySelector(".modal__products")

function updateCartCount() {
    cartCount.innerHTML = cartArray.length;
}

function displayCartItems() {
    let showMainProduct = cartArray.map((data) => {
        return`
            <div class="modal__main">
                <div class="modal__category">
                    <h4 class="modal__title">${data.title}</h4>
                    <p class="modal__price">${data.price}</p>
                </div>
                <img src="${data.image}" alt="" class="modal__image">
            </div>
        `
    });
    modalMain.innerHTML = showMainProduct.join("")
}

function addCart(id) {
    let findProduct = products.find((x) => x.id == id)
    if(findProduct) {
        cartArray.push(findProduct);
        updateCartCount()
        displayCartItems();
    }
}

// function Remove () {
//     const removeButton = document.querySelector(".modal__btn");
//     removeButton.addEventListener("click", (e)=>{
//         e.preventDefault(); 
//     })
// }


let cartBtn = document.getElementById("cart");
let modal = document.querySelector(".modal");
let closeBtn = document.getElementById("close");
let modalBtn = document.querySelector(".modal__btn")

cartBtn.onclick = function() {
    modal.style.display = "block"
}
closeBtn.onclick = function() {
    modal.style.display = "none"
}
modalBtn.onclick = function() {
    cartArray = [];
    updateCartCount();
    displayCartItems();   
}






// function Remove() {
//     var modalBtn = document.getElementById(".modal__btn")
//     modalBtn.forEach(addCart(id) => {

//     })
// }
// function Remove($id) {
//     let modalBtn = document.querySelector(".modal");
//     modalBtn.forEach(modal => {
//         if(modal.getAtribute("id") == $id) {
//             console.log(remove);
//         }
//     })
// }

// примеры

// let b = [{age:12}, {age: 3}, {age: 23}];

// let r = b.map((item) => item.age * 2);

// console.log(r);
