<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p>This is a Premium TodoList application built for Laboratory 6 (Task 15).</p>
    <p>In this version, we use <strong>Pinia</strong> for centralized state management. All task data and operations are handled through Pinia store and actions.</p>
    <div class="features">
      <h3>Key Changes:</h3>
      <ul>
        <li>State moved from LocalStorage logic in components to Pinia Store.</li>
        <li>Task operations (add, delete, toggle) implemented as Pinia Actions.</li>
        <li>Components use store getters and state reactively.</li>
        <li>Navigation remains consistent with previous lab requirements.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  line-height: 1.6;
}

.features {
  margin-top: 2rem;
  padding: 1rem;
  background: #0f172a;
  border-radius: 0.5rem;
}

ul {
  padding-left: 1.5rem;
}
</style>
