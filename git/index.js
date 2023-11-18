let products = [
    {
        id: 1,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        title: "Зоопарк",
        description: "Приключение в зоопарке",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
        title: "Lorem Ipsum",
        description: "logo",
    },
    {
        id: 3,
        image: "https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg",
        title: "Logo",
        description: "Приключение в зоопарке",
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg",
        title: "Quill Pen",
        description: "logo",
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-vector/colorful-gradient-kangaroo-logo-design-illustration_343694-2466.jpg",
        title: "Kangaroo",
        description: "logo",
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-vector/gradient-abstract-logo_52683-8518.jpg",
        title: "Abstract Logo",
        description: "Companyslogan",
    },
]
let shopping = document.querySelector(".shopping")
let ShoppingCart = products.map((item) => {
    return `
       <div class="box">
          <img src="${item.image}"/>
          <div class="box_title">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
          </div>
        </div>
    `
})

shopping.innerHTML = ShoppingCart.join("")

let btn = document.getElementById("btn")

btn.onclick = () => {
    alert("hello")
}