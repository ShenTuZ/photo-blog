<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import BlogPage from './components/BlogPage.vue'
import Footer from './components/Footer.vue'
import { useRouter } from './store/portfolioStore.js'

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
    </main>
    <Footer />
  </div>
</template>
