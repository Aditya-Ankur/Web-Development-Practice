const button = document.querySelector('.changeBackground');
const upper = document.querySelector('#bgname-upper');
const lower = document.querySelector('#bgname-lower');

var arr = [
    'linear-gradient(to right, #136a8a, #267871)',
    'linear-gradient(to right, #00bf8f, #001510)',
    'linear-gradient(to right, #ff0084, #33001b)',
    'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
    'linear-gradient(to right, #6441a5, #2a0845)',
    'linear-gradient(to right, #ff00cc, #333399)',
    'linear-gradient(to right, #de6161, #2657eb)',
    'linear-gradient(to right, #ef32d9, #89fffd)',
    'linear-gradient(to right, #3a6186, #89253e)',
    'linear-gradient(to right, #4ecdc4, #556270)',
    'linear-gradient(to right, #be93c5, #7bc6cc)',
    'linear-gradient(to right, #bdc3c7, #2c3e50)',
    'linear-gradient(to right, #ffd89b, #19547b)',
    'linear-gradient(to right, #2c3e50, #fd746c)',
    'linear-gradient(to right, #e96443, #904e95)',
    'linear-gradient(to right, #00d2ff, #928dab)',
    'linear-gradient(to right, #2196f3, #f44336)',
    'linear-gradient(to right, #16bffd, #cb3066)',
    'linear-gradient(to right, #1d4350, #a43931)',
    'linear-gradient(to right, #ba5370, #f4e2d8)',
    'linear-gradient(to right, #4ca1af, #c4e0e5)',
    'linear-gradient(to right, #114357, #f29492)',
    'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
    'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
    'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)'
]
var names = [
    'Space',
    'Moss',
    'Purple',
    'Shine',
    'Twitch',
    'Fusion',
    'Nepal',
    'Azure',
    'Coupe',
    'Disco',
    'Dania',
    'Shades',
    'Jupiter',
    'Dusk',
    'Grapes',
    'Vault',
    'Coolwave',
    'Tranquil',
    'RedOcean',
    'Pinks',
    'Decent',
    'Havoc',
    'Relay',
    'Sunset',
    'Lips'
]

function addBackgroundName(index){
    let nameArr = names[index].split("");
    let upperNameArray = [];
    let lowerNameArray = [];
    for (let i = 0; i < nameArr.length/2; i++){
        upperNameArray.push(nameArr[i]);
    };
    for (let i = Math.round(nameArr.length/2); i < nameArr.length; i++){
        lowerNameArray.push(nameArr[i]);
    };
    upper.innerHTML = upperNameArray.join("");
    lower.innerHTML = lowerNameArray.join("");
};

function changeBackground(){
    let index = Math.floor(Math.random()* arr.length);
    document.body.style.backgroundImage = arr[index];
    console.log(`background: ${arr[index]};`);
    addBackgroundName(index);
};

button.addEventListener('click', changeBackground);