<template>
    <section class="relative flex h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden" id="hero-section">
        <transition name="fade" mode="out-in">
            <img :src="images[currentIndex]" :key="images[currentIndex]" alt=""
                class="h-full w-full scale-[1.3] object-cover absolute inset-0 z-0" id="hero-image" />
        </transition>

        <div class="overlay-gradient absolute top-0 h-full w-full bg-[#1c1c1ca2] z-[1]"></div>

        <div
            class="absolute z-[5] top-[50%] flex min-w-[320px] max-w-[500px] -translate-y-1/2 flex-col gap-4 p-2 text-white lg:mx-20 max-sm:mx-10">
            <h1 class="text-xl font-semibold">Layanan Profesional • Cepat • Higienis</h1>
            <h2 class="text-6xl font-bold uppercase">AHLI MAMPET DAN SEDOT WC</h2>
            <span class="mt-2 text-lg text-justify">
                Kami adalah spesialis layanan sedot WC, perbaikan saluran mampet, dan pengurasan septic tank
            </span>
            <div class="mt-3 flex w-full gap-2">
                <a href="http://wa.me/6287810816155" target="_blank"
                    class="bg-green-500 text-white p-3 hover:bg-green-600 hover:text-white transition rounded-sm">
                    <i class="bi bi-telephone pr-2"></i>Whatsapp
                </a>
                <a href="tel:6282145300565" target="_blank"
                    class="bg-white text-black p-3 hover:bg-black hover:text-white transition rounded-sm">
                    <i class="bi bi-telephone pr-2"></i>Telepon
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = [
  new URL('@/assets/images/homepage/plumbing-service-1.jpg', import.meta.url).href,
  new URL('@/assets/images/homepage/vector-truck.png', import.meta.url).href,
  new URL('@/assets/images/homepage/plumbing-service-2.png', import.meta.url).href,
  new URL('@/assets/images/homepage/vector-truck-2.jpg', import.meta.url).href,
];

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
    }, 4000); // 4 detik
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>