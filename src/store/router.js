import { ref } from 'vue'

const currentPage = ref('home')

export function useRouter() {
  return {
    currentPage,
    navigateTo: (page) => {
      currentPage.value = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
