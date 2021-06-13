const days = {
    0 : "Sun",
    1 : "Mon",
    2 : "Tue",
    3 : "Wed",
    4 : "Thu",
    5 : "Fri",
    6 : "Sat",
}
const months = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December",
}
setInterval(function(){
    let time = new Date();
    let dayElement = document.querySelector("#day");
    let monthElement = document.querySelector("#month");
    let dateElement = document.querySelector("#actual-date");
    let hourElement = document.querySelector("#hours");
    let minuteElement = document.querySelector("#minutes");
    let secondElement = document.querySelector("#seconds");
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    dayElement.innerHTML = `${days[day]}`;
    monthElement.innerHTML = `${months[month]}`;
    dateElement.innerHTML = `${date}`;
    hourElement.innerHTML = `${hours}`;
    minuteElement.innerHTML = `${minutes}`;
    secondElement.innerHTML = `${seconds}`;
},1000);