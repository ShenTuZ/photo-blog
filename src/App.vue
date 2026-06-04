<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import BlogPage from './components/BlogPage.vue'
import MapPage from './components/MapPage.vue'
import AboutPage from './components/AboutPage.vue'
import Footer from './components/Footer.vue'
import { useRouter } from './store/router.js'

const { currentPage } = useRouter()
</script>

<template>
  <div class="min-h-screen bg-neo-bg font-grotesk">
    <NavBar />
    <main>
      <template v-if="currentPage === 'home'">
        <Hero />
        <Gallery />
      </template>
      <BlogPage v-else-if="currentPage === 'blog'" />
      <MapPage v-else-if="currentPage === 'map'" />
      <AboutPage v-else-if="currentPage === 'about'" />
    </main>
    <Footer />
  </div>
</template>
