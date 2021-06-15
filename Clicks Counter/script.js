const increasebutton = document.querySelector('#increase-count');
const resetbutton = document.querySelector('#reset-count');
const decreasebutton = document.querySelector('#decrease-count');

increasebutton.addEventListener('click', function(){
    let currentcount = document.querySelector('#counts').innerHTML;
    let newcount = Number(currentcount) + 1;
    document.querySelector('#counts').innerHTML = newcount;
});

resetbutton.addEventListener('click', function(){
    document.querySelector('#counts').innerHTML = 0;
});

decreasebutton.addEventListener('click', function(){
    let currentcount = document.querySelector('#counts').innerHTML;
    let newcount = Number(currentcount) - 1;
    document.querySelector('#counts').innerHTML = newcount;
});