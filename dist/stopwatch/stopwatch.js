// VARIABLES //
let startTime;
let stopTime;
let resetTime;
let timeDisplay;
let timeTrack;
let timeStart;
let timing;
let timeAction;
let stopStart;
let stopTrack;
let stopAccum;


// INITIALIZE SETUP //
const init = () => {
    startTime   = document.getElementById("start")
    stopTime    = document.getElementById("stop")
    resetTime   = document.getElementById("reset")
    timeDisplay = document.getElementById("time-display")
    timeTrack   = 0;
    timeAction  = "reset"
    stopStart   = 0
    stopTrack   = 0
    stopAccum   = 0
    window.requestAnimationFrame(gameLoop)
}
window.onload = init;


// STOPWATCH LOGIC //
const stopwatch = () => {
    console.log("Stopwatch function")

    if (timing) {
        timeTrack = Date.now() - timeStart
    } 
    else if (timeAction === "stopped") {
        stopTrack = Date.now() - stopStart
    } 

    if (timeAction === "started" || timeAction === "reset"){
        let actualTime = new Date((timeTrack - (1*60*60*1000)) - stopAccum);
        timeDisplay.textContent = actualTime.toString().slice(16, 24)
    }
}

window.start = () => {
    if (timing) return // If the timer is already counting then skip
    if (timeAction === "reset"){ // If the timer is reset then set the start time
        timeStart = Date.now()
    }
    stopAccum += stopTrack
    timing = true
    timeAction = "started"
    console.log("start")
    console.log(
        timeTrack,
        timeStart,
        timing,
        timeAction,
        stopStart,
        stopTrack
    )
}

window.stop = () => {
    timing = false
    if (timeAction === "started"){ 
        stopStart = Date.now()
    }
    timeAction = "stopped"
    console.log("stop")
    console.log(
        timeTrack,
        timeStart,
        timing,
        timeAction,
        stopStart,
        stopTrack
    )
}

window.reset = () => {
    timeTrack = 0
    timeStart = 0
    stopTrack = 0
    stopStart = 0
    stopAccum = 0
    timing = false
    timeAction = "reset"
    console.log("reset")
    console.log(
        timeTrack,
        timeStart,
        timing,
        timeAction,
        stopStart,
        stopTrack
    )
}


// GAME LOOP //
const gameLoop = () => {
    stopwatch()
    window.requestAnimationFrame(gameLoop);
}