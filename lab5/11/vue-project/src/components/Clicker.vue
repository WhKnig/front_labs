<template>
  <div class="clicker">
    <div class="count">{{ count }}</div>
    <button @click="handleClick">
      <slot>Default Click</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  amount?: number;
}>();

const emit = defineEmits<{
  (e: 'button-clicked'): void;
}>();

const count = ref(0);

const handleClick = () => {
  count.value += (props.amount ?? 1);
  emit('button-clicked');
};
</script>

<style scoped>
.clicker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.2s;
}
.clicker:hover {
  transform: scale(1.05);
}
.count {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
button {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  font-weight: 500;
}
button:hover {
  filter: brightness(1.1);
}
</style>
