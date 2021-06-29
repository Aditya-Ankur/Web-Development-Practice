const monthElement = document.getElementById('months');
const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');

const target = new Date('1 August 2023 00:00:00').getTime();

function addZero(arr){
    var newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (Number(arr[i]) < 10){
            arr[i] = '0' + String(arr[i]);
            newArr.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        };
    };
    return newArr;
};

timeLeft = () => {
    let now = new Date().getTime();
    let timeRemains = target - now;
    
    // tell the javascript some timing crap
    // .getTime() returns ms so second = 1000ms
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    
    // calculating the crap
    let monthsLeft = Math.floor(timeRemains / month);
    let daysLeft = Math.floor((timeRemains % month) / day);
    let hoursLeft = Math.floor((timeRemains % day) / hour);
    let minutesLeft = Math.floor((timeRemains % hour) / minute);
    let secondsLeft = Math.floor((timeRemains % minute) / second);
    
    // adding the crap into html
    let arr = [monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft];
    let zeroedArr = addZero(arr);

    monthElement.innerHTML = zeroedArr[0];
    dayElement.innerHTML = zeroedArr[1];
    hourElement.innerHTML = zeroedArr[2];
    minuteElement.innerHTML = zeroedArr[3];
    secondElement.innerHTML = zeroedArr[4];
};

setInterval(timeLeft, 1000)