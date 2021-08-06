const form = document.getElementById("create-task-form")
form.addEventListener("submit", handleSubmit)
const tasks = document.getElementById("tasks")

function handleSubmit(e){
  e.preventDefault()
  // form == e.target
  const description = e.target["new-task-description"].value
  const priority = e.target.priority.value
  addTask(description, priority)
  e.target.reset()
}

function addTask(description, priority){
  const task = document.createElement("li")
  task.innerText = description
  task.classList.add(priority)
  const button = document.createElement("button")
  button.innerText = "delete"
  button.addEventListener("click", function(){
    task.remove()
  })
  task.appendChild(button)
  tasks.appendChild(task)
}


// // Test data:
// addTask("Do Laundry", "yellow")
// addTask("Leg Day", "red")
// addTask("Do Crime", "red")
// addTask("Eat Food", "green")
