
import { createRouter, createWebHistory } from 'vue-router'

import AddEmployee from '@/views/AddEmployee.vue'
import Employees from '@/views/Employees.vue'
import EmployeeProfile from '@/views/EmployeeProfile.vue'
import DashboardCard from '@/components/DashboardCard.vue'


const routes = [
  { path: '/', name: 'DashboardCard', component: DashboardCard },
  { path: '/add-employee', name: 'AddEmployee', component: AddEmployee },
  { path: '/employees', name: 'Employees', component: Employees },
  { path: '/employee-profile', name: 'EmployeeProfile', component: EmployeeProfile },
]




const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
