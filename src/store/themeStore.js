import { ref, watch } from 'vue'

const isDark = ref(false)

// 从 localStorage 读取保存的主题
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  isDark.value = true
}

// 监听变化并保存到 localStorage
watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', val)
})

// 初始化时设置 class
if (isDark.value) {
  document.documentElement.classList.add('dark')
}

export function useThemeStore() {
  return {
    isDark,
    toggleTheme: () => { isDark.value = !isDark.value }
  }
}
