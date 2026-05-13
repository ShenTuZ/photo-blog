<script setup>
import { Camera, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-vue-next'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' }
]

const quickLinks = ['首页', '作品']

const scrollToSection = (link) => {
  const element = document.querySelector(`#${link}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-neo-ink text-neo-white py-16 relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-10"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#home" class="flex items-center gap-2 mb-6">
            <div class="bg-neo-accent border-4 border-neo-ink p-2 shadow-neo-sm">
              <Camera class="w-6 h-6 text-neo-white" />
            </div>
            <span class="font-black text-2xl uppercase tracking-tight">光影记录</span>
          </a>
          <p class="font-bold leading-relaxed mb-6">
            用镜头记录生活，分享那些让我心动的瞬间。
            摄影是一种态度，也是一种生活方式。
          </p>
          <div class="flex gap-3">
            <a 
              v-for="social in socialLinks" 
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="bg-neo-white text-neo-ink border-4 border-neo-ink w-12 h-12 flex items-center justify-center shadow-neo-sm hover:bg-neo-accent hover:text-neo-white transition-all duration-100"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-black text-xl uppercase mb-6">快速导航</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link">
              <button 
                @click="scrollToSection(link)"
                class="font-bold text-sm uppercase tracking-wider hover:text-neo-accent transition-colors text-left"
              >
                {{ link }}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-black text-xl uppercase mb-6">联系方式</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <div class="bg-neo-accent border-4 border-neo-white w-10 h-10 flex items-center justify-center">
                <span class="font-black text-sm">QQ</span>
              </div>
              <div>
                <p class="font-bold text-sm uppercase text-neo-muted">邮箱</p>
                <p class="font-bold">312578624@qq.com</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <div class="bg-neo-accent border-4 border-neo-white w-10 h-10 flex items-center justify-center">
                <span class="font-black text-xs">WX</span>
              </div>
              <div>
                <p class="font-bold text-sm uppercase text-neo-muted">微信</p>
                <p class="font-bold">c3125478624</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t-4 border-neo-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-bold text-sm uppercase tracking-wider">
          &copy; 2026 光影记录. 用心记录每一天.
        </p>
        <button 
          @click="scrollToTop"
          class="bg-neo-white text-neo-ink border-4 border-neo-ink px-6 py-3 font-bold text-sm uppercase tracking-wider shadow-neo-sm hover:bg-neo-secondary transition-colors"
          aria-label="回到顶部"
        >
          <ArrowUp class="w-5 h-5 inline-block mr-2" />
          回到顶部
        </button>
      </div>
    </div>
  </footer>
</template>
