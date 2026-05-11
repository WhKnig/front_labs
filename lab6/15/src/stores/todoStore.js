import { defineStore } from 'pinia'

const KEY = 'todo_tasks_pinia_lab_15'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem(KEY)) || []
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem(KEY, JSON.stringify(this.tasks))
    },

    addTask(title) {
      const newTask = {
        id: this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
        title,
        completed: false
      }
      this.tasks.push(newTask)
      this.saveToLocalStorage()
      return newTask
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== parseInt(id))
      this.saveToLocalStorage()
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === parseInt(id))
      if (task) {
        task.completed = !task.completed
        this.saveToLocalStorage()
      }
    }
  },

  getters: {
    getTaskById: (state) => (id) => {
      return state.tasks.find(t => t.id === parseInt(id))
    }
  }
})
