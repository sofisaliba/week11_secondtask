
let taskInput = document.getElementById('taskInput');
let button = document.getElementById('button');

let list = document.getElementById('list');

function createTask() {
    let task = document.createElement('li');
    task.textContent = taskInput.value;
    list.append(task);
    taskInput.value = "";
}


function checkTask(evt) {
	list.addEventListener('click', function(evt) {
		if (evt.target.tagName === 'LI') {
		
		evt.target.classList.toggle('completed'); 
	}
	});
}

list.addEventListener('click', checkTask);
