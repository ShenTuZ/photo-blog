<script setup>
import { ref } from 'vue'
import { Menu, X, Camera, Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '../store/themeStore.js'
import { useNavigation } from '../composables/useNavigation.js'

const isMenuOpen = ref(false)
const { isDark, toggleTheme } = useThemeStore()
const { currentPage, navLinks, handleNav: nav } = useNavigation()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleNav = (link) => {
  isMenuOpen.value = false
  nav(link)
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
          <button
            v-for="link in navLinks"
            :key="link.name"
            @click="handleNav(link)"
            :class="[
              'font-bold text-sm uppercase tracking-wider hover:bg-neo-accent hover:text-neo-white hover:px-3 hover:py-1 hover:border-4 hover:border-neo-ink hover:shadow-neo-sm cursor-pointer transition-all duration-100',
              currentPage === link.page && link.name !== '首页' && link.name !== '照片' ? 'bg-neo-accent text-neo-white px-3 py-1 border-4 border-neo-ink shadow-neo-sm' : ''
            ]"
          >
            {{ link.name }}
          </button>

          <!-- 深色模式切换按钮 -->
          <button
            @click="toggleTheme"
            class="bg-neo-secondary border-4 border-neo-ink p-2 shadow-neo-sm hover:bg-neo-accent hover:text-neo-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
            :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
          >
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <!-- 移动端深色模式切换按钮 -->
          <button
            @click="toggleTheme"
            class="bg-neo-secondary border-4 border-neo-ink p-3 shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
            :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
          >
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <button
            @click="toggleMenu"
            class="bg-neo-secondary border-4 border-neo-ink p-3 shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
            aria-label="菜单"
          >
            <Menu v-if="!isMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        v-if="isMenuOpen" 
        class="md:hidden bg-neo-bg border-t-4 border-neo-ink py-4"
      >
        <div class="flex flex-col gap-2">
          <button
            v-for="link in navLinks"
            :key="link.name"
            @click="handleNav(link)"
            :class="[
              'font-bold text-sm uppercase tracking-wider text-left px-4 py-3 border-4 border-neo-ink shadow-neo-sm hover:bg-neo-accent hover:text-neo-white transition-all duration-100',
              currentPage === link.page && link.name !== '首页' && link.name !== '照片' ? 'bg-neo-accent text-neo-white' : 'bg-neo-white'
            ]"
          >
            {{ link.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
