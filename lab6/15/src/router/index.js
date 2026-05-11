import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '../views/AddTask.vue'
import TaskDetail from '../views/TaskDetail.vue'
import About from '../views/About.vue'
import DeleteTask from '../views/DeleteTask.vue'
import CompleteTask from '../views/CompleteTask.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddTask },
  { path: '/about', component: About },
  { path: '/task/:id', component: TaskDetail },
  { path: '/task/:id/delete', component: DeleteTask },
  { path: '/task/:id/complete', component: CompleteTask }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
