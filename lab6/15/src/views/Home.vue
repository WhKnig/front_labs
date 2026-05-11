<template>
  <div>
    <h1>Tasks List</h1>
    <ul v-if="store.tasks.length" class="task-list">
      <li v-for="task in store.tasks" :key="task.id" class="task-item">
        <router-link :to="'/task/' + task.id" :class="{ completed: task.completed }">
          {{ task.title }}
        </router-link>
        <div class="task-actions">
          <router-link :to="'/task/' + task.id + '/complete'" class="btn-small">Toggle</router-link>
          <router-link :to="'/task/' + task.id + '/delete'" class="btn-small btn-danger">Delete</router-link>
        </div>
      </li>
    </ul>
    <p v-else class="empty-msg">No tasks found. Try adding some!</p>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore'

const store = useTodoStore()
</script>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #334155;
}

.task-item a {
  color: #f8fafc;
  text-decoration: none;
  font-size: 1.1rem;
}

.task-item a.completed {
  text-decoration: line-through;
  color: #64748b;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-small {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  background: #334155;
  color: white;
  text-decoration: none;
}

.btn-danger {
  background: #ef4444;
}

.empty-msg {
  text-align: center;
  color: #94a3b8;
  margin-top: 2rem;
}
</style>
