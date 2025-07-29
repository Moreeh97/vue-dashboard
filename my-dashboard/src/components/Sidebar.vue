<script setup>
import DashboardCard from '@/components/DashboardCard.vue'
</script>

<template>
  <div class="flex h-screen">
    <h2>Employees management</h2>
    <aside class="bg-white shadow-sm fixed top-0 left-0 h-screen ">
    
    <ul class="space-y-2 p-6">
      <li><a href="#/employees" class="block py-2 px-4 hover:bg-orange-600 rounded">📋 Employees</a></li>
      <li><a href="#/add-employee" class="block py-2 px-4 hover:bg-orange-600 rounded">➕ Add Employee </a></li>
      <li><a href="#/employee-profile" class="block py-2 px-4 hover:bg-orange-600 rounded">👤 Employee profile </a></li>
      <li><a href="#/leaves-management" class="block py-2 px-4 hover:bg-orange-600 rounded"> 📋  leaves management</a></li>
      <li><a href="#/salary-summary" class="block py-2 px-4 hover:bg-orange-600 rounded">💰 salary summary</a></li>
    </ul>
    </aside>


      <!-- محتوى لوحة التحكم -->
      <h1 class="text-2xl font-bold mb-4">لوحة التحكم</h1>
      <DashboardCard />
 
  </div>
</template>
