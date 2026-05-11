<template>
  <div class="form-container">
    <h1>Add New Task</h1>
    <form @submit.prevent="handleSubmit">
      <input 
        v-model="title" 
        type="text" 
        placeholder="Enter task title..." 
        required
        class="form-input"
      />
      <button type="submit" class="btn-submit">Add Task</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const title = ref('')
const router = useRouter()
const store = useTodoStore()

const handleSubmit = () => {
  if (title.value.trim()) {
    store.addTask(title.value)
    router.push('/')
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  color: white;
  box-sizing: border-box;
}

.btn-submit {
  width: 100%;
  padding: 0.8rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
