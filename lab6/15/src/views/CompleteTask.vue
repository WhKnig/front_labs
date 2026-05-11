<template>
  <div class="message-container">
    <h1>Task status has been changed</h1>
    <p>The completion status of the task was successfully updated via Pinia Action.</p>
    <router-link :to="'/task/' + id" class="btn">View Task</router-link>
    <router-link to="/" class="btn btn-secondary">Back to List</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const route = useRoute()
const store = useTodoStore()
const id = route.params.id

onMounted(() => {
  store.toggleTask(id)
})
</script>

<style scoped>
.message-container {
  text-align: center;
  padding: 3rem;
}

.btn {
  display: inline-block;
  margin: 1rem 0.5rem 0;
  padding: 0.8rem 1.5rem;
  background: #6366f1;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
}

.btn-secondary {
  background: #334155;
}
</style>
