<template>
    <div class="min-h-screen flex items-center justify-center">
    <button id="toggleDark" class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded shadow">
      mode change
    </button>
  </div>
</template>

<script setup>
 const toggleBtn = document.getElementById('toggleDark');
    const html = document.documentElement;

    toggleBtn.addEventListener('click', () => {
      html.classList.toggle('dark');

    
      if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

  
    window.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
      }
    });
</script>