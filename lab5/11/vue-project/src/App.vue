<template>
  <div class="container">
    <h1>Vue Clicker Lab (11)</h1>
    <div class="grid">
      <Clicker
        v-for="n in 100"
        :key="n"
        :amount="n"
        @button-clicked="onClicked(n)"
      >
        Clicker #{{ n }} (+{{ n }})
      </Clicker>
    </div>
  </div>
</template>

<script setup lang="ts">
import Clicker from './components/Clicker.vue';

const onClicked = (index: number) => {
  alert(`Clicker ${index} clicked!`);
};
</script>

<style>
:root {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
h1 {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
}
</style>
