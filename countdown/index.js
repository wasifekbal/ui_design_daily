var toDate = new Date("1 Jan 2022")

const Months = document.getElementById("Months");
const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

function countDown() {
    let currentDate = new Date();
    let totalSeconds = (toDate - currentDate) / 1000;
    let days = repairSeconds(Math.floor(totalSeconds / 3600 / 24));
    let months = repairSeconds((Math.floor(days / 30.4167)));
    let hours = repairSeconds(Math.floor(totalSeconds / 3600)%24);
    let minutes = repairSeconds(Math.floor(totalSeconds/60) % 60);
    let seconds = repairSeconds(Math.floor(totalSeconds%60));

    Months.innerHTML = months;
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

function repairSeconds(sec){
    return sec < 10 ? `0${sec}`: sec;
}

countDown();
setInterval(countDown, 1000);