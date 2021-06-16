const value = document.querySelector('#display');
const equals = document.querySelector('#equals');
var index = 0;

function removezero(){
    while (index != 1){
    let arr = value.innerHTML.split('');
    arr.shift();
    let cleanedargument = arr.join('');
    value.innerHTML = cleanedargument;
    index++;    
    };
}

function clearall(){
    value.innerHTML = 0;
    index = 0;
};

function clearbefore(){
    removezero();
    let argument = value.innerHTML;
    var arr = argument.split("");
    arr.pop();
    let cleanedargument = arr.join('');
    value.innerHTML = cleanedargument;
};

function insertvalue(val){
    removezero();
    let previoushtml = document.querySelector('#display').innerHTML;
    value.innerHTML = previoushtml + val;
};

function insertoperator(val){
    let previoushtml = document.querySelector('#display').innerHTML;
    value.innerHTML = previoushtml + val;
    index = 1;
};

equals.addEventListener('click', function(){
    removezero();
    try{
        let argument = value.innerHTML;
        let solution = eval(argument);
        value.innerHTML = solution;
    }
    catch(error){
        value.innerHTML = 'Invalid'
    };
});