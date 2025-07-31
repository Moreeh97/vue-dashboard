<template>
      <header class="flex items-center justify-between bg-white text-black p-4 rounded shadow pl-20 dark:bg-gray-500">
    
    <div class="flex items-center space-x-10 ">
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

    <!-- User Profile + Notifications + Time -->
    <div class="flex items-center space-x-6">

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

      <!-- Time -->
      <div class="font-mono text-sm min-w-[90px] text-center">
        {{ currentTime }}
      </div>

      <!-- User Profile -->
      <div class="flex items-center space-x-2 cursor-pointer" @click="toggleProfileMenu">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full"
        />
        <span>{{ userName }}</span>

        <!-- Dropdown menu -->
        <div
          v-if="profileMenuOpen"
          class="absolute right-4 mt-12 bg-white text-white rounded shadow-lg py-2 w-40"
        >
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 text-orange-400">profile</a>
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 text-orange-400">setting</a>
          <a href="#" class="block px-4 py-1 hover:bg-orange-400 text-orange-400">Log out</a>
        </div>
      </div>
    </div>

<DarckMode></DarckMode>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DarckMode from './DarckMode.vue'

const searchQuery = ref('')

function doSearch() {
  alert(' Search about : ' + searchQuery.value)
}

// Notifications count
const notifications = ref(3)
function clearNotifications() {
  notifications.value = 0
}

// User Profile
const userName = ref('Moreeh ')
const profileMenuOpen = ref(false)
function toggleProfileMenu() {
  profileMenuOpen.value = !profileMenuOpen.value
}

// Current Time (تحديث كل ثانية)
const currentTime = ref(new Date().toLocaleTimeString('En-ye', { hour12: false }))

let timer = null
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('en-ye', { hour12: false })
  }, 1000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

