<script setup>
import { ref, computed } from 'vue'
import { Calendar, Tag, ArrowLeft, BookOpen } from 'lucide-vue-next'
import { useBlogStore } from '../store/blogStore.js'

const { blogPosts, selectedPost, openPost, closePost } = useBlogStore()

const activeCategory = ref('全部')
const categories = ['全部', ...new Set(blogPosts.value.map(p => p.category))]

const filteredPosts = computed(() => {
  if (activeCategory.value === '全部') return blogPosts.value
  return blogPosts.value.filter(p => p.category === activeCategory.value)
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}
</script>

<template>
  <section class="bg-neo-bg min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-neo-accent border-4 border-neo-ink px-4 py-2 shadow-neo-sm mb-6">
          <BookOpen class="w-5 h-5 text-neo-white" />
          <span class="font-black text-sm uppercase text-neo-white">摄影故事</span>
        </div>
        <h1 class="font-black text-4xl md:text-6xl tracking-tighter">
          记录光影背后的故事
        </h1>
        <p class="font-bold text-lg text-neo-muted mt-4 max-w-2xl mx-auto">
          每一张照片都有它的故事，每一次快门都是一段记忆
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 font-bold text-sm uppercase border-4 border-neo-ink transition-all duration-100',
            activeCategory === cat
              ? 'bg-neo-accent text-neo-white shadow-neo-sm'
              : 'bg-neo-white hover:bg-neo-secondary shadow-neo-sm'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 文章列表 -->
      <div v-if="!selectedPost" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          @click="openPost(post)"
          class="neo-card cursor-pointer group overflow-hidden"
        >
          <div class="relative overflow-hidden">
            <img
              :src="post.cover"
              :alt="post.title"
              width="1600"
              height="1200"
              loading="lazy"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-neo-accent border-4 border-neo-ink px-3 py-1 shadow-neo-sm">
              <span class="font-black text-xs text-neo-white uppercase">{{ post.category }}</span>
            </div>
          </div>

          <div class="p-6 border-t-4 border-neo-ink">
            <div class="flex items-center gap-4 mb-3">
              <div class="flex items-center gap-1 text-neo-muted">
                <Calendar class="w-4 h-4" />
                <span class="font-bold text-xs">{{ formatDate(post.date) }}</span>
              </div>
              <div class="flex items-center gap-1 text-neo-muted">
                <Tag class="w-4 h-4" />
                <span class="font-bold text-xs">{{ post.tags[0] }}</span>
              </div>
            </div>

            <h2 class="font-black text-xl uppercase tracking-tight mb-3 group-hover:text-neo-accent transition-colors">
              {{ post.title }}
            </h2>

            <p class="font-bold text-sm text-neo-muted leading-relaxed">
              {{ post.excerpt }}
            </p>

            <div class="mt-4 flex items-center gap-2 font-bold text-sm text-neo-accent">
              <span>阅读故事</span>
              <span class="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </div>
          </div>
        </article>
      </div>

      <!-- 文章详情 -->
      <div v-else class="max-w-3xl mx-auto">
        <button
          @click="closePost"
          class="flex items-center gap-2 mb-8 bg-neo-white border-4 border-neo-ink px-4 py-2 shadow-neo-sm hover:bg-neo-secondary transition-colors"
        >
          <ArrowLeft class="w-5 h-5" />
          <span class="font-bold text-sm uppercase">返回列表</span>
        </button>

        <article class="neo-card overflow-hidden">
          <img
            :src="selectedPost.cover"
            :alt="selectedPost.title"
            width="1600"
            height="1200"
            class="w-full h-64 md:h-96 object-cover"
          />

          <div class="p-6 md:p-10 border-t-4 border-neo-ink">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-neo-accent border-4 border-neo-ink px-3 py-1 font-black text-xs text-neo-white uppercase">
                {{ selectedPost.category }}
              </span>
              <div class="flex items-center gap-1 text-neo-muted">
                <Calendar class="w-4 h-4" />
                <span class="font-bold text-sm">{{ formatDate(selectedPost.date) }}</span>
              </div>
            </div>

            <h1 class="font-black text-3xl md:text-4xl tracking-tight mb-6">
              {{ selectedPost.title }}
            </h1>

            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in selectedPost.tags"
                :key="tag"
                class="bg-neo-secondary border-4 border-neo-ink px-3 py-1 font-bold text-xs"
              >
                #{{ tag }}
              </span>
            </div>

            <div class="font-bold text-base leading-loose whitespace-pre-line">
              {{ selectedPost.content }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
