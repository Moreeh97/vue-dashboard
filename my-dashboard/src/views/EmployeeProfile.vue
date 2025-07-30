<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Employee profile</h2>

    <div class="mb-4">
      <label class="block mb-1 text-gray-700">Enter employee :</label>
      <input v-model="searchName" type="text" placeholder="full name"
        class="border border-gray-300 rounded px-3 py-2 w-full" />
      <button @click="searchEmployee"
        class="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">show profile</button>
    </div>

    <div v-if="employee" class="bg-white shadow rounded p-4 mt-4">
      <h3 class="text-lg font-semibold mb-2">Employee Data:</h3>
      <p><strong>Name:</strong> {{ employee.name }}</p>
      <p><strong>Department:</strong> {{ employee.department }}</p>
      <p><strong>Base salary :</strong> {{ employee.baseSalary }}</p>
      <p><strong>Bonus:</strong> {{ employee.bonus }}</p>
      <p><strong>Deductions:</strong> {{ employee.deductions }}</p>
    </div>

    <div v-else-if="searched">
      <p class="text-red-500 mt-4">Not Founded.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchName = ref('')
const employee = ref(null)
const searched = ref(false)

const searchEmployee = () => {
  const employees = JSON.parse(localStorage.getItem('employees') || '[]')
  const found = employees.find(emp => emp.name.trim().toLowerCase() === searchName.value.trim().toLowerCase())

  if (found) {
    employee.value = found
  } else {
    employee.value = null
  }

  searched.value = true
}
</script>

<style scoped>
input {
  direction: ltr;
}
</style>
