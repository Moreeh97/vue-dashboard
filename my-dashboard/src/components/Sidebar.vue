<template>
  <div class="flex h-screen">
    <aside class="bg-white shadow-sm fixed top-0 left-0 h-screen">
      <ul class="space-y-2 p-10">
        <h2>Employees management</h2>
        
        <li><router-link to="/home" class="block py-2 px-4 hover:bg-orange-400 rounded">🏠                                                                     Dashboard</router-link></li>
        <li><router-link to="/employees" class="block py-2 px-4 hover:bg-orange-400 rounded">📋 Employees</router-link></li>
        <li><router-link to="/add-employee" class="block py-2 px-4 hover:bg-orange-400 rounded">➕ Add Employee </router-link></li>
        <li><router-link to="/employee-profile" class="block py-2 px-4 hover:bg-orange-400 rounded">👤 Employee profile </router-link></li>
        <li><router-link to="/leave-management" class="block py-2 px-4 hover:bg-orange-400 rounded">📋 Leaves Management</router-link></li>
        <li><router-link to="/salary-summary" class="block py-2 px-4 hover:bg-orange-400 rounded">💰 Salary Summary</router-link></li>
      </ul>
    </aside>
  </div>
</template>
