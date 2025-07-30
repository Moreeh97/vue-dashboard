import './assets/main.css'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import Footer from '@/components/Footer.vue'
import Employees from '@/views/Employees.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(router)


app.mount('#app')