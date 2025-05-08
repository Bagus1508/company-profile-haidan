<script setup>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Services from './components/Services.vue';
import VisionMission from './components/VisionMission.vue';
import AboutUs from './components/AboutUs.vue';
import ServiceArea from './components/ServiceArea.vue';
import ContactUs from './components/ContactUs.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <section>
      <Home />
    </section>
    <section>
      <AboutUs />
    </section>
    <section>
      <VisionMission />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <ServiceArea />
    </section>
    <section>
      <ContactUs />
    </section>
  </main>
</template>

<style scoped>

</style>
