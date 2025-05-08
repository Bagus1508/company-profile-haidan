import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

createApp(App).mount('#app')

const RESPONSIVE_WIDTH = 1024

gsap.registerPlugin(ScrollTrigger)

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")


const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown => new Dropdown(`#${dropdown.id}`))


gsap.to("#hero-image", {
    scale: 1,
    duration: 5
})

const reviewContainer = document.querySelector(".review-container")