const form = document.getElementById("create-task-form")
const sortForm = document.getElementById("sort")
const tasksUl = document.getElementById("tasks")
Task.setEventListeners()


// For testing:
new Task({description: "Do laundry", priority: "green"})
new Task({description: "Do crimes", priority: "yellow"})
new Task({description: "Get Revenge", priority: "red"})
new Task({description: "Develop clever catchphrase", priority: "yellow"})
new Task({description: "Pick up costume", priority: "green"})
new Task({description: "Kill the Batman", priority: "yellow"})
