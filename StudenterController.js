// Studenter

function goToStudenter() {
    model.app.currentPage = 'studenter';
    updateView();
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    show();
}

inputs = {
    description: '',
    isDone: false,
    person: '',
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {

    const task = tasks[index];
    console.log(index);
    console.log(task);
    task.description = inputs.description;
    task.person = inputs.person;
    task.editMode = false;
    show();
}


show();

var taskDescriptionInput = document.getElementById('taskDescription');
taskPersonInput = document.getElementById('taskPerson')

function addTask() {
         
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
        person: taskPersonInput.value,

    });

    taskDescriptionInput.value = '';
       show();

   }


   

   



