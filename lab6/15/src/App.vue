<template>
  <div class="app-container">
    <nav class="nav-menu">
      <router-link to="/">Tasks List</router-link>
      <router-link to="/add">Add New Task</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
:root {
  --primary: #6366f1;
  --bg: #0f172a;
  --card: #1e293b;
  --text: #f8fafc;
  --text-muted: #94a3b8;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--text);
}

.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
  padding: 1rem;
  background: var(--card);
  border-radius: 1rem;
}

.nav-menu a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-menu a.router-link-active {
  color: var(--primary);
}

.content {
  background: var(--card);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
</style>
