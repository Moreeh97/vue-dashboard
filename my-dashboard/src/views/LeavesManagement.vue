<template>
  <div class="p-6  mx-auto space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Leaves Management</h2>

    <div class="bg-white shadow p-4 rounded">
      <h3 class="text-lg font-semibold mb-2">Request Leave</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-sm">Select Employee:</label>
          <select v-model="leaveRequest.name" class="w-full border p-2 rounded">
            <option value="" disabled>Select employee</option>
            <option v-for="emp in employees" :key="emp.name" :value="emp.name">
              {{ emp.name }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm">From Date:</label>
          <input type="date" v-model="leaveRequest.from" class="w-full border p-2 rounded" />
        </div>

        <div>
          <label class="block text-sm">To Date:</label>
          <input type="date" v-model="leaveRequest.to" class="w-full border p-2 rounded" />
        </div>

        <div>
          <label class="block text-sm">Reason:</label>
          <textarea v-model="leaveRequest.reason" class="w-full border p-2 rounded"></textarea>
        </div>

        <button @click="submitLeave"
          class="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Submit</button>
      </div>
    </div>

    <!-- Filter -->
    <div class="flex items-center gap-4">
      <label class="text-sm">Filter by Employee:</label>
      <input v-model="filterName" type="text" class="border p-2 rounded" placeholder="Employee name..." />
    </div>

    <!-- Leave Requests List -->
    <div class="bg-white shadow p-4 rounded">
      <h3 class="text-lg font-semibold mb-2">Leave Requests</h3>
      <div v-if="filteredLeaves.length > 0" class="space-y-4">
        <div v-for="(leave, index) in filteredLeaves" :key="index" class="border p-3 rounded bg-gray-50">
          <p><strong>Employee:</strong> {{ leave.name }}</p>
          <p><strong>From:</strong> {{ leave.from }} | <strong>To:</strong> {{ leave.to }}</p>
          <p><strong>Reason:</strong> {{ leave.reason }}</p>
          <button @click="deleteLeave(index)"
            class="mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
        </div>
      </div>
      <p v-else class="text-gray-500">No leave requests found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Employees from localStorage
const employees = ref([])

// All leave requests
const leaves = ref([])

// Form data
const leaveRequest = ref({
  name: '',
  from: '',
  to: '',
  reason: ''
})

// Filter text
const filterName = ref('')

// Load data on mount
onMounted(() => {
  employees.value = JSON.parse(localStorage.getItem('employees') || '[]')
  leaves.value = JSON.parse(localStorage.getItem('leaves') || '[]')
})

// Submit leave
const submitLeave = () => {
  if (!leaveRequest.value.name || !leaveRequest.value.from || !leaveRequest.value.to || !leaveRequest.value.reason) {
    alert('Please fill all fields.')
    return
  }

  leaves.value.push({ ...leaveRequest.value })
  localStorage.setItem('leaves', JSON.stringify(leaves.value))

  // Reset form
  leaveRequest.value = { name: '', from: '', to: '', reason: '' }
}

// Delete leave
const deleteLeave = (index) => {
  if (confirm('Are you sure you want to delete this leave request?')) {
    leaves.value.splice(index, 1)
    localStorage.setItem('leaves', JSON.stringify(leaves.value))
  }
}

// Filtered leaves
const filteredLeaves = computed(() => {
  if (!filterName.value.trim()) return leaves.value
  return leaves.value.filter(l => l.name.toLowerCase().includes(filterName.value.toLowerCase()))
})
</script>
