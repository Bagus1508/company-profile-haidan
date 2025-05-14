import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/AboutUs.vue'
import Services from './components/Services.vue'
import Contact from './components/ContactUs.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
