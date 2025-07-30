<!-- App.vue -->
<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-sm">
      <Sidebar />
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-4 bg-gray-100">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>
