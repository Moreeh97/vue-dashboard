<template>

  <div class="flex min-h-screen">
    <aside class="w-64 bg-white shadow-sm">
      <Sidebar/>
    </aside>

    <div class="flex flex-col flex-1">
      <Header/>

      <main class="flex-1 p-4 bg-gray-100 overflow-auto">
        <router-view />
      </main>

      <Footer/>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

