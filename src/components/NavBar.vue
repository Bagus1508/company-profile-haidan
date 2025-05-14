<template>
  <nav id="navbar" :class="[
    'fixed top-0 z-20 flex h-[60px] w-full max-lg:mr-auto lg:justify-around transition-colors duration-300',
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  ]">
    <div class="absolute left-0 top-0 z-[-1] h-0 w-full bg-white shadow-md" id="expanding-header-bg">
      <!-- expands the white background as scroll -->
    </div>

    <div class="flex w-max place-items-center gap-3">
      <!-- <img src="./assets/public accountant.jpg"
                alt="Stroemer logo" class="w-full h-full object"> -->
      <div class="h-[50px] w-[50px] p-[4px]">
        <img src="/src/assets/logo.png" alt="logo" class="object h-full w-full bg-white rounded-full" />
      </div>
    </div>
    <div class="collapsible-header animated-collapse flex items-center justify-between gap-4" id="collapsed-items">
      <div
        :class="['flex h-full w-max gap-5 text-base text-white max-lg:mt-[30px] max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center', isScrolled ? 'text-gray-800' : 'text-white']">
        <a :class="['header-links', isScrolled ? 'text-gray-800 max-sm:text-white' : 'text-white']" href="#about_us"
          @click.prevent="goToSection('about_us', '/about')">
          Tentang Kami
        </a>
        <a :class="['header-links', isScrolled ? 'text-gray-800 max-sm:text-white' : 'text-white']"
          href="#vision_mission" @click.prevent="goToSection('vision_mission', '/vision')">
          Visi Misi
        </a>
        <a :class="['header-links', isScrolled ? 'text-gray-800 max-sm:text-white' : 'text-white']" href="#services"
          @click.prevent="goToSection('services', '/services')">
          Layanan Kami
        </a>
        <a :class="['header-links', isScrolled ? 'text-gray-800 max-sm:text-white' : 'text-white']" href="#contact_us"
          @click.prevent="goToSection('contact_us', '/contact')">
          Hubungi Kami
        </a>
      </div>
      <div
        :class="['flex place-items-center gap-[20px] text-xl max-lg:w-full max-lg:place-content-center max-lg:!text-white', isScrolled ? 'text-gray-800' : 'text-white']">
        <!-- <a href="https://www.instagram.com/" target="_blank" rel="no-referrer" area-label="instagram"
                    class="header-links transition-colors duration-[0.3s]">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/pauls_freeman" target="_blank" rel="no-referrer" area-label="twitter"
                    class="header-links transition-colors duration-[0.3s]">
                    <i class="bi bi-twitter"></i>
                </a> -->
        <a href="https://www.facebook.com/share/18nbDrazZo/" target="_blank" rel="no-referrer" area-label="facebook"
          class="header-links transition-colors duration-[0.3s]">
          <i class="bi bi-facebook"></i>
        </a>
      </div>
    </div>
    <button @click="toggleHeader"
      :class="['bi bi-list absolute right-3 top-3 z-50 text-3xl lg:hidden', isScrolled ? 'text-gray-800' : 'text-white']"
      aria-label="menu" id="collapse-btn">
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RESPONSIVE_WIDTH = 1024
let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH

let collapseHeaderItems = null
let collapseBtn = null

function onHeaderClickOutside(e) {
  if (!collapseHeaderItems.contains(e.target)) {
    toggleHeader()
  }
}

function toggleHeader() {
  if (isHeaderCollapsed) {
    collapseHeaderItems.classList.add("!opacity-100")
    collapseHeaderItems.style.width = "60vw"
    collapseBtn.classList.remove("bi-list", "primary-text-color")
    collapseBtn.classList.add("bi-x", "text-white")
    isHeaderCollapsed = false

    setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)
  } else {
    collapseHeaderItems.classList.remove("!opacity-100")
    collapseHeaderItems.style.width = "0vw"
    collapseBtn.classList.remove("bi-x", "text-white")
    collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)
    isHeaderCollapsed = true
    window.removeEventListener("click", onHeaderClickOutside)
  }
}

function responsive() {
  if (window.innerWidth > RESPONSIVE_WIDTH) {
    collapseHeaderItems.style.width = ""
  } else {
    isHeaderCollapsed = true
    collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)
  }
}

onMounted(() => {
  collapseHeaderItems = document.getElementById("collapsed-items")
  collapseBtn = document.getElementById("collapse-btn")

  window.addEventListener("resize", responsive)
})

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('popstate', () => {
    const path = window.location.pathname.replace('/', '')
    const id =
      path === '' ? 'home' :
        path === 'about' ? 'about_us' :
          path === 'vision' ? 'vision_mission' :
            path === 'services' ? 'services' :
              path === 'contact' ? 'contact_us' :
                null

    if (id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function goToSection(id, path) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', path)
  }
}
</script>