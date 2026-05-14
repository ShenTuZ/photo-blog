<script setup>
import { ref } from 'vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-neo-bg font-grotesk">
    <NavBar />
    <main>
      <Hero />
      <Gallery />
    </main>
    <Footer />
    <SpeedInsights />
  </div>
</template>
