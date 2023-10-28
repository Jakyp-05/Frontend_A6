let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let seconds = 0;
let minute = 0;
let hours = 0;
let intervalId;

startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)
function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
    startButton.disabled = true;
}
function  stopTimer () {
    clearInterval(intervalId);
    startButton.disabled = false;
    // if(clearInterval(intervalId)){
    //     console.log('cleared');
    // }else{
    //     console.log('not cleared')
    // }
    // clearInterval(intervalId);
}
function resetTimer () {
    clearInterval(intervalId);  
    timerElement.innerHTML = `00 : 00 : 00`
    seconds = 0;
    minute = 0;
    hours = 0;
    startButton.disabled = false;
}
function updateTimer() {
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minute ++
    }
    if (minute === 60){
        minute = 0;
        hours ++
    }
    if(hours === 24){
        hours = 0
    }
    timerElement.innerHTML = `${formateTime(hours)} : ${formateTime(minute)} : ${formateTime(seconds)}`
}

function formateTime(time) {
    if(time < 10) {
        return "0" + time
    }else {
        return time
    }
}

// stopButton.addEventListener("click", () => {
//     clearInterval(intervalId);
// })