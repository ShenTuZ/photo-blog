<script setup>
import { Star, ArrowRight } from 'lucide-vue-next'

const scrollToPortfolio = () => {
  const element = document.querySelector('#portfolio')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="home" class="min-h-screen bg-neo-bg pt-16 relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-30"></div>
    
    <div class="container mx-auto px-4 py-16 md:py-32 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-block bg-neo-secondary border-4 border-neo-ink px-4 py-2 shadow-neo-sm rotate-1">
            <span class="font-black text-sm uppercase tracking-widest">自我名言</span>
          </div>
          
          <h1 class="font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
            <span class="block">热爱</span>
            <span class="block">探索</span>
            <span class="block text-neo-accent">分享</span>
          </h1>
          
          <p class="font-bold text-lg md:text-xl max-w-lg leading-relaxed">
            用镜头记录生活中的美好瞬间，分享那些让我心动的时刻。
            每一次快门，都是一次与世界的对话。
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="scrollToPortfolio"
              class="neo-btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              查看照片
              <ArrowRight class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -top-8 -left-8 w-32 h-32 bg-neo-accent border-4 border-neo-ink rotate-12 opacity-80"></div>
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-neo-secondary border-4 border-neo-ink -rotate-6"></div>
          
          <div class="relative bg-neo-white border-8 border-neo-ink shadow-neo-xl p-4 rotate-2">
            <img 
              src="/images/photographer.jpg" 
              alt="摄影师" 
              class="w-full h-auto border-4 border-neo-ink"
            />
            
            <div class="absolute -top-6 -right-6 bg-neo-muted border-4 border-neo-ink px-4 py-2 shadow-neo-md rotate-12">
              <Star class="w-6 h-6 fill-neo-ink" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-8 h-12 border-4 border-neo-ink flex items-start justify-center p-2">
        <div class="w-2 h-3 bg-neo-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
