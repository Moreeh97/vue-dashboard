<template>
  <div class="grid grid-cols-2 sm:p-6 gap-4 p-4">
    <div class="bg-white rounded-xl shadow p-4">
      <h3 class="text-lg font-semibold">Number of Employees</h3>
      <p>{{ employees.length }}</p>
    </div>
    <div class="bg-white rounded-xl shadow p-4">
      <h3 class="text-lg font-semibold">Total of Basic salary</h3>
      <p>{{ totalBaseSalary }}</p>
    </div>
    <div class="bg-white rounded-xl shadow p-4">
      <h3 class="text-lg font-semibold">Total of Bonus </h3>
      <p>{{ totalBonus }}</p>
    </div>
    <div class="bg-white rounded-xl shadow p-4">
      <h3 class="text-lg font-semibold">Total of Deductions</h3>
      <p>{{ totalDeductions }}</p>
    </div>
    <div class="bg-white rounded-xl shadow p-4 col-span-2">
      <h3 class="text-lg font-semibold">Total of Net Salary</h3>
      <p>{{ totalNetSalary }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const totalBaseSalary = ref(0)
const totalBonus = ref(0)
const totalDeductions = ref(0)
const totalNetSalary = ref(0)

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('employees') || '[]')
  employees.value = stored

  totalBaseSalary.value = stored.reduce((sum, emp) => sum + Number(emp.baseSalary || 0), 0)
  totalBonus.value = stored.reduce((sum, emp) => sum + Number(emp.bonus || 0), 0)
  totalDeductions.value = stored.reduce((sum, emp) => sum + Number(emp.deductions || 0), 0)
  totalNetSalary.value = stored.reduce((sum, emp) => {
    const base = Number(emp.baseSalary || 0)
    const bonus = Number(emp.bonus || 0)
    const deductions = Number(emp.deductions || 0)
    return sum + (base + bonus - deductions)
  }, 0)
})
</script>


