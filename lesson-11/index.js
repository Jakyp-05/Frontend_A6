let input = document.getElementById("input");
let addButton = document.getElementById("add");
let box = document.getElementById("box");
// let textItem = document.getElementById("text-item");
// let buttonItem = document.getElementById("button-item");
// let div = document.getElementById("div");


function wrapper() {
    if (input.value < 5) {
        // alert("no")
        box.innerHTML = `сиздин сан 5тен кичине`
        box.style.color = "red"
        box.style.fontSize = "30px"
        box.style.marginTop = "20px"
        box.style.marginLeft = "10px"
        input.value =""
    } 
    else if(input.value < 10){
        // alert("var")
        box.innerHTML = `сиздин сан 10дон кичине`
        box.style.color = "blue"
        box.style.fontSize = "30px"
        box.style.marginTop = "20px"
        input.value =""
    }  
    else {
        // alert('yes')
        box.innerHTML = `сиздин сан 10дон чон`
        box.style.color = "green"
        box.style.fontSize = "30px"
        box.style.marginTop = "20px"
        input.value =""
    }
}
addButton.addEventListener("click", wrapper)




// function sendText() {
    
//     if (textItem) {
//         div.innerText = `Salam ${sendText}` 
//         textItem.value = ""

//     }


// }


// buttonItem.addEventListener("click", sendText)
    
    
const textItem = document.getElementById("text-item");
let buttonItem = document.getElementById("button-item");
let Div = document.getElementById("div");

function Alert () {
    Div.innerHTML = `Атынызды жазыныз`
    Div.style.color = "green"
    Div.style.fontSize = "30px"
    Div.style.marginTop = "50px"
    for(Alert in textItem.value) {
        if(Alert) {
            Div.innerHTML = `Salam, ${textItem.value}`
            Div.style.color = "green";
            Div.style.fontSize = "30px"
            Div.style.marginTop = "50px"
        }
        else{
            prompt("undefined")
        }
    }
    textItem.value = "";
    // if(Alert ){
    //     Div.innerHTML = (`Salam, ${textItem.value}`)
    //     Div.style.fontSize = "20px";
    //     Div.style.color = "green"
    //     textItem.value = ""
        
    // }
    // else{

    //     Alert = ` Сан  ${buttonItem.value}`
    // }
    // Div.innerHTML = `Salam ${textItem.value}`

    // alert(textItem.value)
}
buttonItem.addEventListener("click", Alert)

input.addEventListener("keydown", (e) => {
    if(e.keyCode === 18){
        wrapper()
    }
})

textItem.addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
        Alert()
    }
})