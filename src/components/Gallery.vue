<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Star, ExternalLink } from 'lucide-vue-next'
import { usePortfolioStore } from '../store/portfolioStore.js'

const { portfolioItems } = usePortfolioStore()

const selectedItem = ref(null)

const openLightbox = (item) => {
  selectedItem.value = item
}

const closeLightbox = () => {
  selectedItem.value = null
}

const featuredPhotographers = [
  {
    id: 1,
    name: '富士山',
    title: '花海富士',
    image: '/images/fushishan.jpg',
    description: '樱花季的富士山美景'
  },
  {
    id: 2,
    name: '下关',
    title: '悬崖海岸',
    image: '/images/xiaguer.jpg',
    description: '雾气缭绕的海岸悬崖'
  },
  {
    id: 3,
    name: '峡谷',
    title: '碧海青山',
    image: '/images/xiagu.jpg',
    description: '山海之间的壮丽景色'
  }
]
</script>

<template>
  <section id="portfolio" class="bg-neo-secondary py-16 md:py-32 relative">
    <div class="absolute inset-0 halftone-bg opacity-20"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 class="font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter">
          我的照片
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div 
          v-for="(item, index) in portfolioItems" 
          :key="item.id"
          :class="[
            'neo-card cursor-pointer overflow-hidden group',
            item.featured ? 'lg:col-span-2' : ''
          ]"
          :style="{ transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)` }"
          @click="openLightbox(item)"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            <div class="absolute inset-0 bg-neo-ink bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
              <div class="bg-neo-accent border-4 border-neo-white p-4 shadow-neo-md opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight class="w-8 h-8 text-neo-white" />
              </div>
            </div>

            <div v-if="item.featured" class="absolute top-4 left-4 bg-neo-secondary border-4 border-neo-ink px-3 py-1 shadow-neo-sm rotate-3">
              <Star class="w-5 h-5 fill-neo-ink" />
            </div>
          </div>
          
          <div class="p-4 border-t-4 border-neo-ink">
            <h3 class="font-black text-lg uppercase tracking-tight">{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-16 border-t-4 border-neo-ink">
        <div class="text-center mb-12">
          <h3 class="font-black text-3xl md:text-5xl tracking-tighter mb-4">
            其他摄影师照片
          </h3>
          <p class="font-bold text-lg">来自世界各地摄影师的精彩作品</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="photographer in featuredPhotographers" 
            :key="photographer.id"
            class="bg-neo-white border-4 border-neo-ink shadow-neo-lg overflow-hidden hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-200"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="photographer.image" 
                :alt="photographer.title" 
                class="w-full h-48 object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neo-ink/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="bg-neo-accent text-neo-white font-bold text-sm px-3 py-1 inline-block">
                  {{ photographer.name }}
                </span>
              </div>
            </div>
            <div class="p-4">
              <h4 class="font-black text-lg uppercase">{{ photographer.title }}</h4>
              <p class="font-bold text-sm text-neo-muted mt-2">{{ photographer.description }}</p>
              <button class="mt-4 flex items-center gap-2 font-bold text-sm text-neo-accent hover:underline">
                <span>查看更多</span>
                <ExternalLink class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div 
        v-if="selectedItem" 
        class="fixed inset-0 bg-neo-ink bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl w-full bg-neo-white border-4 border-neo-ink shadow-neo-xl" @click.stop>
          <button 
            @click="closeLightbox"
            class="absolute -top-4 -right-4 bg-neo-accent border-4 border-neo-ink w-12 h-12 flex items-center justify-center shadow-neo-sm hover:bg-red-600 transition-colors"
            aria-label="关闭"
          >
            <span class="font-black text-2xl text-neo-white">&times;</span>
          </button>
          
          <img 
            :src="selectedItem.image" 
            :alt="selectedItem.title" 
            class="w-full h-auto max-h-[60vh] object-contain"
          />
          
          <div class="p-6 border-t-4 border-neo-ink">
            <h3 class="font-black text-2xl uppercase tracking-tight">{{ selectedItem.title }}</h3>
            <p v-if="selectedItem.description" class="mt-4 font-bold text-base leading-relaxed">{{ selectedItem.description }}</p>
            <p v-if="selectedItem.feeling" class="mt-3 font-bold text-base text-neo-muted italic">"{{ selectedItem.feeling }}"</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
