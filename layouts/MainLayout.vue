<template>
  <div class="main-layout">
    <header>
      <!-- Your header content here -->
      <h1>My Nuxt App</h1>
    </header>
    <main>
      <!-- Your main content here -->
      <slot />
    </main>
    <footer>
      <!-- Your footer content here -->
      <p>&copy; 2024 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup>
const userStore = useUserStore();
</script>