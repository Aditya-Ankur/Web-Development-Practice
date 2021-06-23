const startButton = document.querySelector('#startTimer');
const resetButton = document.querySelector('#resetTimer');
const stopButton = document.querySelector('#stopTimer');
const laps = document.querySelector('#laps')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const miliseconds = document.querySelector('#miliseconds')
var sectime = 0;
var milisectime = 0;
var minstime = 0;
var hrstime = 0;
var interval;
var clicks = 0;
var n = 1;

function addZero(selector, time){
    if (time < 10){
        selector.innerHTML = '0' + time;
    }
    else{
        selector.innerHTML = time
    }
}

function startTimer(){
    if (clicks == 0){
        clicks++;
        interval = setInterval(()=>{
            milisectime++;
            addZero(miliseconds, milisectime);
            if (milisectime > 299){
                milisectime = 0;
                sectime++;
                addZero(seconds, sectime);
                if (sectime > 59){
                    sectime = 0;
                    minstime++;
                    addZero(minutes, minstime);
                }
                if (minstime > 59){
                        minstime = 0;
                        hrstime++;
                        addZero(hours, hrstime);
                    }
            }
        },1)
    }
};

function stopTimer(){
    clicks = 0;
    clearInterval(interval);
};

function resetTimer(){
    clicks = 0;
    clearInterval(interval);
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    miliseconds.innerHTML = '000';
    laps.innerHTML = '00 : 00 : 00 : 000 <br>'
    n = 1;
};

function lapTime(){
    if (n == 1){
        laps.innerHTML = '';
    }
    let str = `${hrstime} : ${minstime} : ${sectime} : ${milisectime}`
    laps.innerHTML += `${n} - ${str} <br>`;
    n++;
};