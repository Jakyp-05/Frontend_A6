let KeyDisplay = document.getElementById("key-display");

function handleKeyDown(event) {
    let keyCode = event.keyCode;
    let key = event.key;

    KeyDisplay.value = `key Code: ${keyCode} \n Key: ${key}`
}

document.addEventListener('keydown',  handleKeyDown);