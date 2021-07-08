const button = document.querySelectorAll('.start');
const timeElement = document.querySelectorAll('.time');
const balls = document.querySelectorAll('.dot'); 
const timeDiv = document.querySelector('.timer');
const infoDiv = document.querySelector('.info');
const infoButton = document.querySelector('.info-button');
const instructionsDiv = document.querySelector('.instructions');
const backButton = document.querySelector('.back');

var interval;
var isGameStarted = false;
var ballsCount = 7;
const startButton = button[0];
const refreshButton = button[1];

startButton.style.visibility = 'visible';
refreshButton.style.visibility = 'hidden';
infoDiv.style.visibility = 'visible';
instructionsDiv.style.visibility = 'hidden';

window.onload = () => {
    balls.forEach(item => {
        item.style.animationName = 'Loading';
        item.style.animationDuration = '2.7s';
    });
};

function startGame(){
    instructionsDiv.style.left = '-40vw';
    infoDiv.style.visibility = 'visible';
    timeDiv.style.right = 0;
    balls.forEach(item => {
        item.style.animationName = 'moveUpandDown';
        item.style.animationDuration = '0.7s';
        item.style.animationIterationCount = 'infinite';
        item.style.animationDirection = 'alternate-reverse';
    });
    const seconds = timeElement[0];
    const miliseconds = timeElement[1];
    var ms = 0;
    var s = 0;
    interval = setInterval(() => {
        ms++;
        miliseconds.innerHTML = ms;
        if (ms == 250){
            ms = 0;
            s++;
            seconds.innerHTML = s;
        }
    }, 1);
    isGameStarted = true
};

function removeBalls(event){
    if (isGameStarted == true) {
        event.target.remove();
        ballsCount--;
        if (ballsCount == 0) {
            gameOver();
        };
    };
};

function gameOver(){
    clearInterval(interval);
    let timeElement = document.querySelectorAll('.time');
    let sec = timeElement[0].innerHTML;
    let millisec = timeElement[1].innerHTML;
    Swal.fire({
        title : 'Even a noob can do this xD!',
        text : `Completed in ${sec} seconds and ${millisec} miliseconds`,
        icon : 'success',
        confirmButtonText : 'Alright!'
    });
    startButton.style.visibility = 'hidden';
    refreshButton.style.visibility = 'visible';
};

startButton.addEventListener('click', startGame)

refreshButton.addEventListener('click', () => {
    location.reload();
    startGame;
})

balls.forEach(item => {
    item.addEventListener('click', removeBalls)
});

infoButton.addEventListener('click', () => {
    infoDiv.style.visibility = 'hidden';
    instructionsDiv.style.visibility = 'visible';
    instructionsDiv.style.left = '0';
});

backButton.addEventListener('click', () => {
    instructionsDiv.style.left = '-40vw';
    infoDiv.style.visibility = 'visible';
});