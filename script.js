const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;
  const taskTime = timeInput.value;

  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task-item');

  const taskContent = document.createElement('div');
  taskContent.textContent = taskText;

  if (taskDate || taskTime) {
    const dateTime = document.createElement('small');
    dateTime.textContent = `${taskDate} ${taskTime}`;
    taskContent.appendChild(document.createElement('br'));
    taskContent.appendChild(dateTime);
  }

  li.appendChild(taskContent);

  const actions = document.createElement('div');
  actions.classList.add('task-actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editTask(li));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);

  taskList.appendChild(li);

  // Clear form
  taskInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
}

function editTask(taskItem) {
  const taskContent = taskItem.firstChild;
  const oldText = taskContent.childNodes[0].nodeValue.trim();
  const newText = prompt('Edit your task:', oldText);

  if (newText !== null && newText.trim() !== '') {
    taskContent.childNodes[0].nodeValue = newText.trim();
  }
}
