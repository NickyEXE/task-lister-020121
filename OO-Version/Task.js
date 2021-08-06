class Task {
  static all = []

  constructor(task){
    this.task = task
    this.task.priorityNumber = {green: 0, yellow: 1, red: 2}[this.task.priority]
    this.constructor.all.push(this)
    this.constructor.handleSort()
  }

  render = () => {
    const { description, priority, date } = this.task
    const taskLi = document.createElement("li")
    taskLi.innerText = `${date}: ${description}`
    taskLi.classList.add(priority)
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    taskLi.appendChild(deleteButton)
    deleteButton.addEventListener("click", () => taskLi.remove())
    tasksUl.append(taskLi)
  }

  static renderAll = () => {
    tasksUl.innerHTML = ""
    this.all.forEach(task => task.render())
  }

  static setEventListeners = () => {
    sortForm.addEventListener("change", this.handleSort)
    form.addEventListener("submit", this.handleSubmit)
  }

  static handleSubmit = (e) => {
    e.preventDefault()
    const description = form["new-task-description"].value
    const priority = form.priority.value
    const date = form.date.value
    const task = new Task({ description, priority, date })
    form.reset()
  }

  static handleSort = () => {
    switch (sortForm.value){
      case 'lowest':
        this.all = this.sortLowestToHighest();
        break;
      case 'highest':
        this.all = this.sortHighestToLowest();
        break;
      case 'alphabetical':
        this.all = this.sortAlphabetically();
        break;
      case 'earliest':
        this.all = this.earliestFirst();
        break;
      case 'latest':
        this.all = this.latestFirst();
        break;
    }
    this.renderAll()
  }

  static sortLowestToHighest = () => this.all.sort((taskA, taskB) => taskA.task.priorityNumber - taskB.task.priorityNumber)

  static sortHighestToLowest = () => this.all.sort((taskA, taskB) => taskB.task.priorityNumber - taskA.task.priorityNumber)

  static sortAlphabetically = () => this.all.sort((taskA, taskB) => taskA.task.description.localeCompare(taskB.task.description))

  static earliestFirst = () => this.all.sort((taskA, taskB) => new Date(taskA.task.date) - new Date(taskB.task.date))

  static latestFirst = () => this.all.sort((taskA, taskB) => new Date(taskB.task.date) - new Date(taskA.task.date))
}
