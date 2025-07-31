<template>
    <div>
       <button @click="toggleDarkMode" class="p-2 rounded-full border border-gray-400 dark:border-white">
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button> 
    </div>
</template>

<script setup>

  import { ref, onMounted } from 'vue';

  const isDark = ref(false)

  onMounted(()=>{
    const savedMode = localStorage.getItem('theme')
    if(savedMode==='dark'){
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
    else{
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
  })

  function toggleDarkMode() {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

</script>