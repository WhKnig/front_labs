<template>
  <div class="message-container">
    <h1>Task deleted</h1>
    <p>The task has been successfully removed from your list using Pinia.</p>
    <router-link to="/" class="btn">Back to List</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const route = useRoute()
const store = useTodoStore()

onMounted(() => {
  store.deleteTask(route.params.id)
})
</script>

<style scoped>
.message-container {
  text-align: center;
  padding: 3rem;
}

.btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: #6366f1;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
}
</style>
