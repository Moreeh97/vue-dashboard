<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">employees mnue</h2>

   
    <div v-if="!viewingDetails">
      <table class="min-w-full table-auto border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-4 py-2">id</th>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">department</th>
            <th class="border px-4 py-2">Base salary</th>
            <th class="border px-4 py-2">bonus</th>
            <th class="border px-4 py-2">deductions</th>
            <th class="border px-4 py-2">Final salary</th>
            <th class="border px-4 py-2">Actions</th>
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
              <button @click="showDetails(emp, index)" class="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded">
                view details
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="employees.length === 0" class="mt-6 text-center text-gray-500">
        No employees.
      </div>
    </div>

   
    <div v-if="viewingDetails" class="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4"> Employee Details</h3>

      <div class="space-y-4">
        <div>
          <label class="block mb-1">Name:</label>
          <input v-model="selectedEmployee.name" class="w-full border px-3 py-2 rounded" type="text">
        </div>

        <div>
          <label class="block mb-1">Email:</label>
          <input v-model="selectedEmployee.email" class="w-full border px-3 py-2 rounded" type="text">
        </div>

        <div>
          <label class="block mb-1">Phone Number:</label>
          <input v-model="selectedEmployee.phoneNumber" class="w-full border px-3 py-2 rounded" type="text">
        </div>

        <div>
          <label class="block mb-1">Education:</label>
          <input v-model="selectedEmployee.education" class="w-full border px-3 py-2 rounded" type="text">
        </div>

        <div>
          <label class="block mb-1">Department:</label>
          <input v-model="selectedEmployee.department" class="w-full border px-3 py-2 rounded" type="text">
        </div>

        <div>
          <label class="block mb-1"> Basic salary:</label>
          <input v-model.number="selectedEmployee.baseSalary" class="w-full border px-3 py-2 rounded" type="number">
        </div>

        <div>
          <label class="block mb-1">Bonus:</label>
          <input v-model.number="selectedEmployee.bonus" class="w-full border px-3 py-2 rounded" type="number">
        </div>

        <div>
          <label class="block mb-1">Deductions:</label>
          <input v-model.number="selectedEmployee.deductions" class="w-full border px-3 py-2 rounded" type="number">
        </div>

        <div>
          <label class="block mb-1">Note:</label>
          <input v-model.number="selectedEmployee.note" class="w-full border px-3 py-2 rounded" type="number">
        </div>

        <div>
          <label class="block mb-1">Contruct:</label>
          <input v-model.number="selectedEmployee.contract" class="w-full border px-3 py-2 rounded" type="number">
        </div>

        <div class="mt-4 flex justify-between">
          <button @click="updateEmployee" class="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded">
            Update
          </button>
          <button @click="backToList" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const selectedEmployee = ref({})
const viewingDetails = ref(false)
let currentIndex = ref(-1)

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('employees') || '[]')
  employees.value = stored
})

const showDetails = (emp, index) => {
  selectedEmployee.value = { ...emp }
  currentIndex.value = index
  viewingDetails.value = true
}

const updateEmployee = () => {
  if (currentIndex.value !== -1) {
    employees.value[currentIndex.value] = { ...selectedEmployee.value }
    localStorage.setItem('employees', JSON.stringify(employees.value))
    alert('data updated !')
    viewingDetails.value = false
  }
}

const backToList = () => {
  viewingDetails.value = false
}
</script>
