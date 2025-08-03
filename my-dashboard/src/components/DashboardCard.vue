<template>
  <div class="p-6 dark:bg-gray-700 dark:text-white">
    <h1 class="text-2xl font-bold mb-4">puplic summary </h1>

    <!-- madals botuns -->
    <div class="space-x-4 mb-6">
      <button @click="showAddModal = true" class="bg-green-500 text-white px-4 py-2 rounded"> Add employee</button>
      <button @click="showDeletedModal = true" class="bg-red-500 text-white px-4 py-2 rounded"> Trash </button>
    </div>

    <!-- summary cards  -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded shadow"> total employee : {{ employees.length }}</div>
      <div class="bg-white p-4 rounded shadow">max salary : {{ maxSalary }}</div>
      <div class="bg-white p-4 rounded shadow">min salary : {{ minSalary }}</div>
      <div class="bg-white p-4 rounded shadow">total salaries : {{ totalSalary }}</div>
    </div>

    <!-- employees table -->
    <div class="mt-8">
      <table class="w-full table-auto border">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="p-2">name</th>
            <th class="p-2">department</th>
            <th class="p-2">salary</th>
            <th class="p-2">options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(emp, index) in employees" :key="index" class="border-b">
            <td class="p-2">{{ emp.name }}</td>
            <td class="p-2">{{ emp.department }}</td>
            <td class="p-2">{{ emp.baseSalary }}</td>
            <td class="p-2 space-x-2">
              <button @click="openDetails(emp)" class="bg-blue-500 text-white px-2 py-1 rounded"> show</button>
              <button @click="openEdit(emp)" class="bg-yellow-500 text-white px-2 py-1 rounded"> edit</button>
              <button @click="confirmDelete(emp)" class="bg-red-500 text-white px-2 py-1 rounded"> delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add employee modal-->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2 class="text-lg font-bold mb-4">Add employee</h2>
        <!-- entery modal-->
        <input v-model="newEmployee.name" placeholder="name" class="input" />
        <input v-model="newEmployee.department" placeholder="department" class="input" />
        <input v-model="newEmployee.baseSalary" placeholder="salary" type="number" class="input" />
        <div class="space-x-2 mt-4">
          <button @click="addEmployee" class="bg-green-600 text-white px-4 py-2 rounded">Save</button>
          <button @click="showAddModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">Cancle</button>
        </div>
      </div>
    </div>

    <!-- Edit employee -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h2 class="text-lg font-bold mb-4">Edit employee</h2>
        <input v-model="editEmployee.name" placeholder="name" class="input" />
        <input v-model="editEmployee.department" placeholder="department" class="input" />
        <input v-model="editEmployee.baseSalary" type="number" placeholder="salary" class="input" />
        <div class="space-x-2 mt-4">
          <button @click="saveEdit" class="bg-yellow-600 text-white px-4 py-2 rounded">Update</button>
          <button @click="showEditModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">Cancle</button>
        </div>
      </div>
    </div>

    <!-- employee Details-->
    <div v-if="showDetailsModal" class="modal">
      <div class="modal-content">
        <h2 class="text-lg font-bold mb-4">employee Details </h2>
        <p>Name: {{ detailsEmployee.name }}</p>
        <p>Department: {{ detailsEmployee.department }}</p>
        <p> basic salary: {{ detailsEmployee.baseSalary }}</p>
        <div class="mt-4">
          <button @click="showDetailsModal = false" class="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
        </div>
      </div>
    </div>

    <!-- confirm delete   -->
    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <h2 class="text-lg font-bold mb-4 text-red-600"> confirm Delete</h2>
        <p> Are you sure want to delete employee : {{ deleteTarget.name }}؟</p>
        <div class="space-x-2 mt-4">
          <button @click="deleteEmployee" class="bg-red-600 text-white px-4 py-2 rounded">Yes </button>
          <button @click="showDeleteModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const employees = ref([])
const showAddModal = ref(false)
const showEditModal = ref(false)
const showDetailsModal = ref(false)
const showDeleteModal = ref(false)
const showDeletedModal = ref(false)

const newEmployee = ref({ name: '', department: '', baseSalary: 0 })
const editEmployee = ref({})
const detailsEmployee = ref({})
const deleteTarget = ref({})

// summary
const totalSalary = computed(() => employees.value.reduce((sum, e) => sum + Number(e.baseSalary), 0))
const maxSalary = computed(() => Math.max(...employees.value.map(e => Number(e.baseSalary))))
const minSalary = computed(() => Math.min(...employees.value.map(e => Number(e.baseSalary))))

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('employees') || '[]')
  employees.value = saved
})

// add
const addEmployee = () => {
  employees.value.push({ ...newEmployee.value })
  localStorage.setItem('employees', JSON.stringify(employees.value))
  showAddModal.value = false
  newEmployee.value = { name: '', department: '', baseSalary: 0 }
}

// edit
const openEdit = (emp) => {
  editEmployee.value = { ...emp }
  showEditModal.value = true
}
const saveEdit = () => {
  const index = employees.value.findIndex(e => e.name === editEmployee.value.name)
  if (index !== -1) {
    employees.value[index] = { ...editEmployee.value }
    localStorage.setItem('employees', JSON.stringify(employees.value))
  }
  showEditModal.value = false
}

// detailes
const openDetails = (emp) => {
  detailsEmployee.value = { ...emp }
  showDetailsModal.value = true
}

// delete
const confirmDelete = (emp) => {
  deleteTarget.value = emp
  showDeleteModal.value = true
}
const deleteEmployee = () => {
  employees.value = employees.value.filter(e => e !== deleteTarget.value)
  localStorage.setItem('employees', JSON.stringify(employees.value))
  showDeleteModal.value = false
}
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

</style>