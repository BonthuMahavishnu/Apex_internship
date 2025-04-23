// To-Do List App
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  let category = document.getElementById("filter").value;
  if (taskInput) {
    tasks.push({ task: taskInput, category: category });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

function filterTasks() {
  let category = document.getElementById("filter").value;
  let filteredTasks = category === 'all' ? tasks : tasks.filter(task => task.category === category);
  renderTasks(filteredTasks);
}

function renderTasks(filteredTasks = tasks) {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    taskList.innerHTML += `<li>${task.task} <button onclick="deleteTask(${index})">Delete</button></li>`;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
