<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Add new employee</h2>
    
    <form @submit.prevent="addEmployee" class="grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-1">Full name</label>
        <input v-model="employee.name" type="text" class="w-full border border-gray-300 rounded px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1">Department</label>
        <input v-model="employee.department" type="text" class="w-full border border-gray-300 rounded px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1">Base salary</label>
        <input v-model.number="employee.baseSalary" type="number" class="w-full border border-gray-300 rounded px-3 py-2" required />
      </div>

      <div>
        <label class="block mb-1">Bonus</label>
        <input v-model.number="employee.bonus" type="number" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div>
        <label class="block mb-1">Deductions</label>
        <input v-model.number="employee.deductions" type="number" class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="col-span-2">
        <button type="submit" class="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const employee = ref({
  name: '',
  department: '',
  baseSalary: 0,
  bonus: 0,
  deductions: 0
})

const addEmployee = () => {
  try {
    const existing = JSON.parse(localStorage.getItem('employees') || '[]')
    existing.push({ ...employee.value })
    localStorage.setItem('employees', JSON.stringify(existing))
    router.push('/employees') 
  } catch (err) {
    console.error('Saving failed:', err)
  }
}
</script>
