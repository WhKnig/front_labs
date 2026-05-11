<template>
  <div v-if="task" class="task-detail">
    <h1>Task Detail</h1>
    <div class="card">
      <h2>{{ task.title }}</h2>
      <p>Status: <span :class="task.completed ? 'status-done' : 'status-pending'">
        {{ task.completed ? 'Completed' : 'Pending' }}
      </span></p>
      <p>ID: {{ task.id }}</p>
      <div class="actions">
        <router-link :to="'/task/' + task.id + '/complete'" class="btn">Toggle Status</router-link>
        <router-link :to="'/task/' + task.id + '/delete'" class="btn btn-danger">Delete Task</router-link>
      </div>
    </div>
    <router-link to="/" class="back-link">← Back to List</router-link>
  </div>
  <div v-else>
    <p>Task not found.</p>
    <router-link to="/">Back to list</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const route = useRoute()
const store = useTodoStore()
const task = computed(() => store.getTaskById(route.params.id))
</script>

<style scoped>
.card {
  background: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.status-done { color: #10b981; }
.status-pending { color: #f59e0b; }

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #6366f1;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.btn-danger { background: #ef4444; }

.back-link {
  display: inline-block;
  color: #94a3b8;
  text-decoration: none;
}
</style>
