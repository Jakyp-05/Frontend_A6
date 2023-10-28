let taskInput = document.getElementById("input-task");
let addButton = document.getElementById("addTodo");
let addFuture = document.getElementById("addFuture");
let taskList = document.getElementById("todayList");
let futureList = document.getElementById("futureList");


function addTask () {
    let taskText = taskInput.value.trim();
    addTask += 1;
    if(taskText !==""){
        // <li></li>
        let taskItem = document.createElement("li");
        
        // <li>Hello</li>
        taskItem.innerHTML = `
        <input type="checkbox"/>
        <span>${taskText}</span>
        <button id="remove">Remove</button>
        `
        
        
        // <ul>
        //    <li>Hello</li>
        // </ul>
        taskList.appendChild(taskItem);
        taskInput.value = "";

        let remove = taskItem.querySelectorAll("#remove");
        remove.forEach((click) => {
            click.addEventListener("click", function() {
                taskItem.remove()
            });
        })
    }
    else{
        alert ("Please enter a valid Task");
    };
    
};
addButton.addEventListener("click", addTask);

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) {
        addTask();
    }
});

function number () {
    let numberText = taskInput.value.trim();
    
    if(numberText !==""){
        let numberItem = document.createElement("li");
        numberItem.innerHTML = `
          <input type ="checkbox"/>
          <span>${numberText}</span>
          <button id="remove">Remove</button>
          
        `
        futureList.appendChild(numberItem);
        taskInput.value = "";


        let removeBtn = numberItem.querySelectorAll("#remove");
        removeBtn.forEach((btn) => {
            btn.addEventListener("click", function(){
                numberItem.remove()
            });
        })
    }
    else{
        alert('Please enter a valid Number')
    };
    
};
addFuture.addEventListener("click", number);

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 18) {
        number()
    }
})


