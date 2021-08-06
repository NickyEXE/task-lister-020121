const form = document.getElementById("create-task-form")
form.addEventListener("submit", handleSubmit)
const tasks = document.getElementById("tasks")

//This solution keeps track of tasks as data objects, rerendering every time that array gets updated
const taskObjects = []

function handleSubmit(e){
  e.preventDefault()
  // form == e.target
  const description = e.target["new-task-description"].value
  const priority = e.target.priority.value
  addTask(description, priority)
  e.target.reset()
}

// Useful little workaround to the fact that I wanted to pass both "green" and "0"
const colorToNumber = {
  green: 0, yellow: 1, red: 2
}

function addTask(description, priority){
  taskObject = {description: description, priority: priority, priorityNumber: colorToNumber[priority]}
  taskObjects.push(taskObject)
  renderTasks()
}

function renderTasks(){
  //clear out previous HTML
  tasks.innerHTML = ""
  //reappend every element from the array I had earlier
  taskObjects.forEach(task => {
    tasks.innerHTML += `<li class=${task.priority}>${task.description}<button>Delete</button></li>`
  })
}

tasks.addEventListener("click", handleClick)

function handleClick(e){
  if (e.target.tagName == "BUTTON"){
    // e.target.parentElement.remove()
    // if I don't want brittle code that manually moves up the dom tree then I do the below
    // which says "find the closest parent that is an LI, then remove it"
    e.target.closest("li").remove()
  }
}

// destructively sort the array of tasks on button click
document.getElementById("sort").addEventListener("click", function(){
  taskObjects.sort(function(a, b){
    return a.priorityNumber - b.priorityNumber
  })
  renderTasks()
})
