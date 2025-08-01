<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Home - summary </h1>

    <div class="grid grid-cols-3 md:grid-cols-3 gap-6">

      <div class="bg-white shadow rounded p-4">
        <h2 class="text-lg font-semibold mb-2">employees total</h2>
        <p class="text-3xl font-bold text-orange-400">{{ employees.length }}</p>
      </div>

      <div class="bg-white shadow rounded p-4">
        <h2 class="text-lg font-semibold mb-2">salary total</h2>
        <p class="text-3xl font-bold text-orange-400">{{ totalSalaries.toLocaleString() }}</p>
      </div>

      <div class="bg-white shadow rounded p-4">
        <h2 class="text-lg font-semibold mb-2">employees active</h2>
        <p class="text-3xl font-bold text-orange-400">{{ employees.length }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const totalSalaries = ref(0)

onMounted(() => {
  const data = localStorage.getItem('employees')
  if (data) {
    try {
      employees.value = JSON.parse(data)
      
    } catch (e) {
      console.error('No Data in localStorage:', e)
      employees.value = []
    }
  }
})

onMounted(() => {
  const stored = localStorage.getItem('employees')
  if (stored) {
    try {
      employees.value = JSON.parse(stored)

      totalSalaries.value = employees.value.reduce((sum, emp) => {
        const base = parseFloat(emp.baseSalary) || 0
        const bonus = parseFloat(emp.bonus) || 0
        const deductions = parseFloat(emp.deductions) || 0
        return sum + (base + bonus - deductions)
      }, 0)

    } catch (e) {
      console.error(' erorr to read employees data   :', e)
      employees.value = []
      totalSalaries.value = 0
    }
  }
})

</script>
