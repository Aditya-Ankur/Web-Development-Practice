const buttonAddEvent = document.querySelector('#addevent');
const taskDiv = document.querySelector('.tasks');
const taskHeading = document.querySelector('#sub-heading');
const historyButton = document.querySelector('.show-history');

// variables
var deleteButton;
var doneButton;
var divId = 0;
var buttonId = 0;
var todoDivCount = 1;
var completed = [];
var aborted = [];


function addEvent(event){
    event.preventDefault();
    let todoInput = document.querySelector('#textbox');
    
    if (todoInput.value == ""){
        Swal.fire({
            title: 'Enter some task you idiot!',
            icon: 'question',
            confirmButtonText : 'Alright!'
        });
    }
    else {
        // creates a new element when clicked
        let newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('task-info');
        newTodoDiv.id = divId;
        divId++;
        todoDivCount++;

        taskHeading.style.visibility = 'visible';
        // content of that element (the todo input)
        let newTodoContent = document.createElement('div');
        newTodoContent.classList.add('content');
        newTodoContent.innerHTML = todoInput.value;
        todoInput.value = "";
        
        // delete button of that created element
        let newDeleteButton = document.createElement('button');
        newDeleteButton.classList.add('delete');
        newDeleteButton.innerHTML = `<i class="fas fa-trash-alt" id="${buttonId}">`; // so that when it is clicked, its container gets deleted
        newDeleteButton.id = buttonId;
        
        // done button of that created element
        let newDoneButton = document.createElement('button');
        newDoneButton.classList.add('done');
        newDoneButton.innerHTML = `<i class="fas fa-check" id="${buttonId}"></i>`;
        newDoneButton.id = buttonId;
        buttonId++;
        
        // adding all the contents to the element
        newTodoDiv.appendChild(newTodoContent);
        newTodoDiv.appendChild(newDeleteButton);
        newTodoDiv.appendChild(newDoneButton);
        taskDiv.appendChild(newTodoDiv);
        
        deleteButton = document.querySelectorAll('.delete');
        doneButton = document.querySelectorAll('.done');
        
        deleteButton.forEach(item => {
            item.addEventListener('click', deleteEvent);
        });
        
        doneButton.forEach(item => {
            item.addEventListener('click', doneEvent)
        });
    };
};

function deleteEvent(e){
    let id = e.target.id;
    let elements = document.querySelectorAll(`div`);
    for (let index = 0; index < elements.length; index++){
        let element = elements[index];
        if (element.id == String(id)){
            let content = element.querySelector('.content').innerHTML;
            element.remove();
            todoDivCount--;
            
            Swal.fire({
                title : `Can't ${content}? Haha, Loser!!`,
                confirmButtonText : 'Guess I\'ll die',
                icon : 'success'
            });
            // saving the task in sessionstorage to access later on
            saveEvent(content, 'aborted');
        };
    };
    if (todoDivCount == 1){
        taskHeading.style.visibility = 'hidden';
    };
};

function doneEvent(e){
    let id = e.target.id;
    let elements = document.querySelectorAll('div');
    for (let index = 0; index < elements.length; index++){
        let element = elements[index];
        if (element.id == String(id)){
            let content = element.querySelector('.content').innerHTML;
            element.remove();
            todoDivCount--;
            
            Swal.fire({
                title : `Even I can ${content}`,
                confirmButtonText : 'Ok Boomer!',
                icon : 'success'
            });
            // saving the task in sessionstorage to access later on
            saveEvent(content, 'done');
        };
    };
    if (todoDivCount == 1){
        taskHeading.style.visibility = 'hidden';
    };
};

function saveEvent(event, status){
    if (status == 'done') {
        completed.push(event);
    }
    else {
        aborted.push(event);
    };
};

buttonAddEvent.addEventListener('click', addEvent);

historyButton.addEventListener('click', () => {
    var prevCompleted;
    var prevAborted;
    try {
        prevCompleted = sessionStorage.getItem('completed');
        prevAborted = sessionStorage.getItem('aborted');
        prevCompleted = JSON.parse(prevCompleted);
        prevAborted = JSON.parse(prevAborted);
        prevCompleted.forEach(item => {
            completed.push(item);
        });
        prevAborted.forEach(item => {
            aborted.push(item);
        });
    }
    catch (error) {
        prevCompleted = [];
        prevAborted = [];
    };
    sessionStorage.setItem('completed', JSON.stringify(completed));
    sessionStorage.setItem('aborted', JSON.stringify(aborted));
    prevCompleted = completed;
    prevAborted = aborted;
});