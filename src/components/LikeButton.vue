<script setup>
import { ref, onMounted } from 'vue'
import { Heart } from 'lucide-vue-next'

const props = defineProps({
  path: { type: String, required: true }
})

const count = ref(0)
const liked = ref(false)
const loading = ref(true)

const fetchLike = async () => {
  try {
    const res = await fetch(`/api/like?path=${encodeURIComponent(props.path)}`)
    const data = await res.json()
    count.value = data.count
    liked.value = data.liked
  } catch (e) {
    console.error('Failed to fetch like:', e)
  } finally {
    loading.value = false
  }
}

const toggleLike = async () => {
  try {
    const res = await fetch('/api/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: props.path })
    })
    const data = await res.json()
    count.value = data.count
    liked.value = data.liked
  } catch (e) {
    console.error('Failed to toggle like:', e)
  }
}

onMounted(fetchLike)
</script>

<template>
  <button
    @click="toggleLike"
    :disabled="loading"
    class="like-btn inline-flex items-center gap-2 border-4 border-neo-ink px-5 py-3 font-black text-base shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    :class="liked ? 'bg-neo-accent text-neo-white' : 'bg-neo-white text-neo-ink hover:bg-neo-secondary'"
  >
    <Heart class="w-5 h-5" :class="liked ? 'fill-current' : ''" />
    <span v-if="loading">...</span>
    <span v-else>{{ count }}</span>
  </button>
</template>
