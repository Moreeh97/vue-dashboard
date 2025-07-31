<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">employees mnue</h2>

    <table class="min-w-full table-auto border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-4 py-2">#</th>
          <th class="border px-4 py-2">Name</th>
          <th class="border px-4 py-2">department</th>
          <th class="border px-4 py-2">Base salary</th>
          <th class="border px-4 py-2">bonus</th>
          <th class="border px-4 py-2">deductions</th>
          <th class="border px-4 py-2">Final salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(emp, index) in employees" :key="index" class="hover:bg-gray-50">
          <td class="border px-4 py-2">{{ index + 1 }}</td>
          <td class="border px-4 py-2">{{ emp.name }}</td>
          <td class="border px-4 py-2">{{ emp.department }}</td>
          <td class="border px-4 py-2">{{ emp.baseSalary }}</td>
          <td class="border px-4 py-2">{{ emp.bonus }}</td>
          <td class="border px-4 py-2">{{ emp.deductions }}</td>
          <td class="border px-4 py-2">
            {{ emp.baseSalary + emp.bonus - emp.deductions }}
          </td>
                    <td class="p-3 border">
            <router-link
              :to="`/employees/${index}`"
              class="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded"
            >
               show profile
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="employees.length === 0" class="mt-6 text-center text-gray-500">
        No employees.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('employees') || '[]')
  employees.value = stored

})
</script>
