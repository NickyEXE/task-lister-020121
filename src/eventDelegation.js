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

const colorToNumber = {
  green: 0, yellow: 1, red: 2
}

function addTask(description, priority){
  tasks.innerHTML += `<li class=${priority} data-priority=${colorToNumber[priority]}>${description}<button>Delete</button></li>`
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
