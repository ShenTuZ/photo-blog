<script setup>
import { ref, onMounted } from 'vue'
import { MessageCircle, Send, User } from 'lucide-vue-next'

const props = defineProps({
  path: { type: String, required: true }
})

const comments = ref([])
const nick = ref('')
const content = ref('')
const loading = ref(true)
const submitting = ref(false)

const fetchComments = async () => {
  try {
    const res = await fetch(`/api/comment?path=${encodeURIComponent(props.path)}`)
    const data = await res.json()
    comments.value = data.comments || []
  } catch (e) {
    console.error('Failed to fetch comments:', e)
  } finally {
    loading.value = false
  }
}

const submitComment = async () => {
  if (!nick.value.trim() || !content.value.trim()) return
  submitting.value = true
  try {
    const res = await fetch('/api/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: props.path,
        nick: nick.value.trim(),
        content: content.value.trim()
      })
    })
    if (res.ok) {
      const data = await res.json()
      comments.value.unshift(data.comment)
      content.value = ''
    }
  } catch (e) {
    console.error('Failed to submit comment:', e)
  } finally {
    submitting.value = false
  }
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  const now = new Date()
  const diff = now - d
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

onMounted(fetchComments)
</script>

<template>
  <div class="comment-section">
    <!-- 标题 -->
    <div class="flex items-center gap-2 mb-6">
      <div class="bg-neo-accent border-4 border-neo-ink p-2 shadow-neo-sm">
        <MessageCircle class="w-5 h-5 text-neo-white" />
      </div>
      <h3 class="font-black text-xl uppercase">留言</h3>
      <span class="bg-neo-secondary border-4 border-neo-ink px-2 py-1 font-black text-xs">{{ comments.length }}</span>
    </div>

    <!-- 提交表单 -->
    <form @submit.prevent="submitComment" class="comment-form border-4 border-neo-ink p-5 shadow-neo-sm bg-neo-white mb-8">
      <div class="mb-4">
        <label class="block font-black text-sm uppercase mb-2">
          <User class="w-4 h-4 inline-block mr-1" />
          昵称
        </label>
        <input
          v-model="nick"
          type="text"
          maxlength="50"
          placeholder="你的昵称"
          required
          class="comment-input w-full border-4 border-neo-ink px-4 py-3 font-bold text-sm bg-neo-bg focus:bg-neo-secondary focus:shadow-neo-sm transition-all outline-none"
        />
      </div>
      <div class="mb-4">
        <label class="block font-black text-sm uppercase mb-2">
          <MessageCircle class="w-4 h-4 inline-block mr-1" />
          内容
        </label>
        <textarea
          v-model="content"
          maxlength="2000"
          placeholder="写下你的想法..."
          required
          rows="4"
          class="comment-input w-full border-4 border-neo-ink px-4 py-3 font-bold text-sm bg-neo-bg focus:bg-neo-secondary focus:shadow-neo-sm transition-all outline-none resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="submitting || !nick.trim() || !content.trim()"
        class="inline-flex items-center gap-2 bg-neo-accent text-neo-white border-4 border-neo-ink px-6 py-3 font-black text-sm uppercase shadow-neo-sm transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <Send class="w-4 h-4" />
        {{ submitting ? '发送中...' : '发表留言' }}
      </button>
    </form>

    <!-- 评论列表 -->
    <div v-if="loading" class="text-center py-8">
      <p class="font-bold text-neo-muted">加载中...</p>
    </div>

    <div v-else-if="comments.length === 0" class="text-center py-12 border-4 border-dashed border-neo-ink">
      <MessageCircle class="w-10 h-10 mx-auto mb-3 text-neo-muted" />
      <p class="font-bold text-neo-muted">还没有留言，来抢沙发吧！</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment-item border-4 border-neo-ink p-5 shadow-neo-sm bg-neo-white"
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <div class="bg-neo-secondary border-4 border-neo-ink w-8 h-8 flex items-center justify-center font-black text-sm">
              {{ comment.nick.charAt(0).toUpperCase() }}
            </div>
            <span class="font-black text-sm uppercase">{{ comment.nick }}</span>
          </div>
          <span class="font-bold text-xs text-neo-muted">{{ formatDate(comment.created_at) }}</span>
        </div>
        <p class="font-bold text-sm leading-relaxed whitespace-pre-line">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>
