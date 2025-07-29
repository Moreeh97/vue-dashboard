import './assets/main.css'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import Footer from '@/components/Footer.vue'

import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)


app.component('Navbar' , Navbar)
app.component('Sidebar' , Sidebar)
app.component('DashboardCard' , DashboardCard)
app.component('Footer' , Footer)

app.mount('#app')