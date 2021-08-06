const form = document.getElementById("create-task-form")
const sortForm = document.getElementById("sort")
const tasksUl = document.getElementById("tasks")
Task.setEventListeners()


// For testing:
new Task({description: "Do laundry", priority: "green", date: "2021-07-05"})
new Task({description: "Do crimes", priority: "yellow", date: "2021-07-12"})
new Task({description: "Get Revenge", priority: "red", date: "2021-07-15"})
new Task({description: "Develop clever catchphrase", priority: "yellow", date: "2021-12-25"})
new Task({description: "Pick up costume", priority: "green", date: "2021-05-05" })
new Task({description: "Kill the Batman", priority: "yellow", date: "2021-10-05"})
