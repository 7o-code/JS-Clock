'use strict';

function currentTime(){
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const midNight = document.getElementById('midNight')
    
    const dates = new Date
    let lHours = dates.getHours() - 12
    let lMinutes = dates.getMinutes()
    let lSeconds = dates.getSeconds()
    let lmidNight = (lHours > 12) ? "AM" : "PM";

    hours.textContent = lHours
    minutes.textContent = lMinutes
    seconds.textContent = lSeconds
    midNight.textContent = lmidNight
}


setInterval(currentTime, 100)

