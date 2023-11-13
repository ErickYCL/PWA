let taskList = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskListContainer = document.getElementById('taskList');

  if (taskInput.value !== '') {
    taskList.push(taskInput.value);
    renderTasks();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskListContainer = document.getElementById('taskList');
  taskListContainer.innerHTML = '';

  taskList.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Eliminar</button>
    `;
    taskListContainer.appendChild(listItem);
  });
}
