const taskInfoDiv = document.querySelector('.task-info');
const statusDiv = document.querySelector('.status');
const clearHistory = document.querySelector('.clear-history');

var completed = sessionStorage.getItem('completed');
var aborted = sessionStorage.getItem('aborted');
completed = JSON.parse(completed);
aborted = JSON.parse(aborted);

console.log(completed, aborted);


// creating content for history
completed.forEach(element => {
    let task = document.createElement('div');
    task.classList.add('task');
    let newTodoContent = document.createElement('div');
    newTodoContent.classList.add('content');
    newTodoContent.innerHTML = element;
    
    let newStatus = document.createElement('div');
    newStatus.classList.add('status');
    newStatus.innerHTML = 'Completed';
    newStatus.id = 'completed';
    
    task.appendChild(newTodoContent);
    task.appendChild(newStatus);
    taskInfoDiv.appendChild(task);
    clearHistory.style.visibility = 'visible';
});

aborted.forEach(element => {
    let task = document.createElement('div');
    task.classList.add('task');
    let newTodoContent = document.createElement('div');
    newTodoContent.classList.add('content');
    newTodoContent.innerHTML = element;
    
    let newStatus = document.createElement('div');
    newStatus.classList.add('status');
    newStatus.innerHTML = 'Aborted';
    newStatus.id = 'aborted';
    
    task.appendChild(newTodoContent);
    task.appendChild(newStatus);
    taskInfoDiv.appendChild(task);
    clearHistory.style.visibility = 'visible';
});

clearHistory.addEventListener('click', () => {
    sessionStorage.clear();
    completed = null;
    aborted = null;
    let taskDiv = document.querySelectorAll('.task');
    taskDiv.forEach(element => {
        element.remove();
    });
    clearHistory.style.visibility = 'hidden';
});