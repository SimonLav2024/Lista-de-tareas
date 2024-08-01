// Seleccionamos los elementos del DOM
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Función para añadir una nueva tarea
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        // Crear un nuevo elemento li para la tarea
        const li = document.createElement('li');
        li.textContent = taskText;

        // Crear un botón para eliminar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.onclick = function() {
            li.remove();
        };

        // Añadir el botón al li y luego el li a la lista de tareas
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Limpiar el input
        newTaskInput.value = '';
    }
}

// Añadir un evento al botón para añadir la tarea
addTaskBtn.addEventListener('click', addTask);

// Añadir la tarea también al presionar la tecla Enter
newTaskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
