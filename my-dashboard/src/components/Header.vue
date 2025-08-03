<template>
  <header class="flex items-center justify-between bg-white text-black p-4 rounded shadow pl-20 dark:bg-gray-900 dark:text-white">
    <div class="flex items-center space-x-10">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="px-3 py-1 rounded text-gray-900 border"
      />
      <button @click="doSearch" class="bg-orange-400 px-3 py-1 rounded hover:bg-orange-400">
        Search
      </button>
    </div>

    <!-- User Profile + Notifications + Time + Dark Mode -->
    <div class="flex items-center space-x-6 relative">
      <!-- Notifications -->
      <div class="relative cursor-pointer" @click="clearNotifications">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span
          v-if="notifications > 0"
          class="absolute -top-1 -right-1 bg-orange-400 text-xs rounded-full px-1"
        >
          {{ notifications }}
        </span>
      </div>

      <!-- Current Time -->
      <div class="font-mono text-sm min-w-[90px] text-center">
        {{ currentTime }}
      </div>

      <!-- زر الوضع الداكن -->
      <button @click="toggleDarkMode" class="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
        {{ isDarkMode ? '☀️' : '🌙' }}
      </button>

      <!-- User Profile -->
      <div class="flex items-center space-x-2 cursor-pointer" @click="toggleProfileMenu">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full"
        />
        <span>{{ userName }}</span>

        <!-- Dropdown -->
        <div
          v-if="profileMenuOpen"
          class="absolute right-0 top-14 bg-white dark:bg-gray-800 text-orange-400 rounded shadow-lg py-2 w-40"
        >
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 hover:text-white">profile</a>
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 hover:text-white">setting</a>
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 hover:text-white">Log out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const searchQuery = ref('')
const doSearch = () => alert('Search about: ' + searchQuery.value)

const notifications = ref(3)
const clearNotifications = () => (notifications.value = 0)

const userName = ref('Moreeh')
const profileMenuOpen = ref(false)
const toggleProfileMenu = () => (profileMenuOpen.value = !profileMenuOpen.value)

const currentTime = ref(new Date().toLocaleTimeString('en-ye', { hour12: false }))
let timer = null
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('en-ye', { hour12: false })
  }, 1000)
})

// الوضع الداكن
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  const html = document.documentElement
  if (isDarkMode.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
