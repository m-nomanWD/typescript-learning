import { any } from 'zod'

const input = document.querySelector<HTMLInputElement>('.form-input')!
const form = document.querySelector<HTMLFormElement>('.form')!
const taskList = document.querySelector<HTMLUListElement>('.list')!

type Task = {
  taskInfo: string
  isCompleted: boolean
}
// load form local storage
function loadTasks(): Task[] {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : []
}

const tasks: Task[] = loadTasks()
tasks.forEach((task) => renderTasks(task))

form.addEventListener('submit', (e) => {
  const value: string = input.value
  const task: Task = {
    taskInfo: value,
    isCompleted: false,
  }
  if (value) {
    e.preventDefault()
    addTasks(task)
    renderTasks(task)
    addToLocalStorage()
  } else {
    alert('please enter value')
  }
})
function addTasks(task: Task): void {
  tasks.push({
    taskInfo: task.taskInfo,
    isCompleted: false,
  })
  input.value = ''
}
function renderTasks(task: Task): void {
  const taskItem = document.createElement('li')
  taskItem.innerText = task.taskInfo
  const taskCheckBox = document.createElement('input')
  taskCheckBox.type = 'checkbox'
  taskCheckBox.checked = task.isCompleted

  taskCheckBox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    addToLocalStorage()
  })
  taskItem.appendChild(taskCheckBox)
  taskList.appendChild(taskItem)
}
function addToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
