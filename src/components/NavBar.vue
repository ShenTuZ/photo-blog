<script setup>
import { ref } from 'vue'
import { Menu, X, Camera } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { name: '首页', href: '#home' },
  { name: '照片', href: '#portfolio' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href) => {
  isMenuOpen.value = false
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-neo-bg border-b-4 border-neo-ink">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="#home" class="flex items-center gap-2">
          <div class="bg-neo-accent border-4 border-neo-ink p-2 shadow-neo-sm">
            <Camera class="w-6 h-6 text-neo-white" />
          </div>
          <span class="font-black text-xl uppercase tracking-tight">摄影</span>
        </a>

        <div class="hidden md:flex items-center gap-6">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            @click.prevent="scrollToSection(link.href)"
            class="font-bold text-sm uppercase tracking-wider hover:bg-neo-accent hover:text-neo-white hover:px-3 hover:py-1 hover:border-4 hover:border-neo-ink hover:shadow-neo-sm cursor-pointer transition-all duration-100"
          >
            {{ link.name }}
          </a>
        </div>

        <button 
          @click="toggleMenu"
          class="md:hidden bg-neo-secondary border-4 border-neo-ink p-3 shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          aria-label="菜单"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <div 
        v-if="isMenuOpen" 
        class="md:hidden bg-neo-bg border-t-4 border-neo-ink py-4"
      >
        <div class="flex flex-col gap-2">
          <button 
            v-for="link in navLinks" 
            :key="link.name"
            @click="scrollToSection(link.href)"
            class="font-bold text-sm uppercase tracking-wider text-left px-4 py-3 border-4 border-neo-ink bg-neo-white shadow-neo-sm hover:bg-neo-accent hover:text-neo-white transition-all duration-100"
          >
            {{ link.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
