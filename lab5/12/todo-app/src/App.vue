<template>
  <div class="todo-container">
    <header>
      <h1>Premium Todo</h1>
      <p>Laboratory 12 - Advanced Vue</p>
    </header>

    <div class="input-group">
      <input 
        v-model="newTaskText" 
        @keyup.enter="addTask" 
        placeholder="What needs to be done?"
        :disabled="isProcessing"
      >
      <button @click="addTask" :disabled="isProcessing || !newTaskText.trim()">
        <span v-if="!isProcessing">Add Task</span>
        <span v-else class="loader"></span>
      </button>
    </div>

    <TransitionGroup name="list" tag="ul" class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <label class="checkbox-container">
          <input 
            type="checkbox" 
            :checked="todo.completed" 
            @change="toggleTodo(todo)"
            :disabled="isProcessing"
          >
          <span class="checkmark"></span>
        </label>
        <span class="todo-text">{{ todo.title }}</span>
        <button class="delete-btn" @click="confirmDelete(todo)" :disabled="isProcessing">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19V4M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>
        </button>
      </li>
    </TransitionGroup>

    <div v-if="todos.length === 0 && !loading" class="empty-state">
      No tasks yet. Add one above!
    </div>

    <Popup :isOpen="isPopupOpen" @close="cancelDelete">
      <div class="confirm-dialog">
        <div class="icon-warning">!</div>
        <h2>Delete Task?</h2>
        <p>This action cannot be undone. Are you sure you want to remove "{{ todoToDelete?.title }}"?</p>
        <div class="actions">
          <button class="btn-cancel" @click="cancelDelete">No, Keep it</button>
          <button class="btn-confirm" @click="handleDelete">Yes, Delete it!</button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Popup from './components/Popup.vue';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const LOCAL_STORAGE_KEY = 'vue_todo_lab_12';

const todos = ref<Todo[]>([]);
const newTaskText = ref('');
const isProcessing = ref(false);
const loading = ref(true);

const isPopupOpen = ref(false);
const todoToDelete = ref<Todo | null>(null);

// Load from localStorage or API
onMounted(async () => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    todos.value = JSON.parse(saved);
    loading.value = false;
  } else {
    try {
      const resp = await fetch(`${API_URL}?_limit=5&userId=1`);
      todos.value = await resp.json();
    } catch (e) {
      console.error('Failed to fetch initial data', e);
    } finally {
      loading.value = false;
    }
  }
});

// Sync with localStorage
watch(todos, (newVal) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newVal));
}, { deep: true });

const addTask = async () => {
  if (!newTaskText.value.trim() || isProcessing.value) return;
  
  isProcessing.value = true;
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        title: newTaskText.value,
        completed: false,
        userId: 1
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });
    
    if (response.ok) {
      const data = await response.json();
      // JSONPlaceholder always returns id 201, we need unique keys for v-for
      todos.value.unshift({ ...data, id: Date.now() });
      newTaskText.value = '';
    }
  } catch (e) {
    alert('Failed to add task');
  } finally {
    isProcessing.value = false;
  }
};

const toggleTodo = async (todo: Todo) => {
  isProcessing.value = true;
  try {
    const response = await fetch(`${API_URL}/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });
    
    if (response.ok) {
      todo.completed = !todo.completed;
    }
  } catch (e) {
    alert('Failed to update task');
  } finally {
    isProcessing.value = false;
  }
};

const confirmDelete = (todo: Todo) => {
  todoToDelete.value = todo;
  isPopupOpen.value = true;
};

const cancelDelete = () => {
  isPopupOpen.value = false;
  todoToDelete.value = null;
};

const handleDelete = async () => {
  if (!todoToDelete.value) return;
  
  isProcessing.value = true;
  const id = todoToDelete.value.id;
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      todos.value = todos.value.filter(t => t.id !== id);
      isPopupOpen.value = false;
      todoToDelete.value = null;
    }
  } catch (e) {
    alert('Failed to delete task');
  } finally {
    isProcessing.value = false;
  }
};
</script>

<style>
:root {
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Outfit', sans-serif;
}

.todo-container {
  max-width: 600px;
  margin: 4rem auto;
  background: #1e1e1e;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.05);
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

header p {
  color: #888;
  margin-top: 0.5rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

input[type="text"] {
  flex: 1;
  background: #2a2a2a;
  border: 1px solid #3d3d3d;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  outline: none;
  border-color: #f5576c;
}

button {
  padding: 0 1.5rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  transform: translateY(-2px);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  background: #2a2a2a;
  margin-bottom: 1rem;
  padding: 1.2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}

.todo-list li:hover {
  background: #323232;
  border-color: rgba(255,255,255,0.1);
}

.todo-list li.completed .todo-text {
  text-decoration: line-through;
  color: #666;
}

.todo-text {
  flex: 1;
  font-size: 1.1rem;
}

.delete-btn {
  background: transparent;
  color: #ff4d4d;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.delete-btn:hover {
  background: rgba(255, 77, 77, 0.1);
  transform: none !important;
}

/* Custom Checkbox */
.checkbox-container {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #3d3d3d;
  border-radius: 6px;
  transition: all 0.2s;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #4d4d4d;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #f5576c;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Modal Content */
.confirm-dialog {
  text-align: center;
}

.icon-warning {
  width: 60px;
  height: 60px;
  border: 4px solid #f5576c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #f5576c;
  margin: 0 auto 1.5rem;
}

.confirm-dialog h2 {
  margin: 0 0 1rem;
  color: white;
}

.confirm-dialog p {
  color: #aaa;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.btn-cancel {
  flex: 1;
  background: transparent;
  border: 1px solid #3d3d3d;
  color: white;
}

.btn-confirm {
  flex: 1;
}

/* Animations */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
