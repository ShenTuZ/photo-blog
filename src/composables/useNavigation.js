import { useRouter } from '../store/router.js'

export function useNavigation() {
  const { currentPage, navigateTo } = useRouter()

  const navLinks = [
    { name: '首页', page: 'home' },
    { name: '照片', page: 'home', scrollTo: '#portfolio' },
    { name: '故事', page: 'blog' }
  ]

  const handleNav = (link) => {
    if (link.page === 'blog') {
      navigateTo('blog')
    } else {
      navigateTo('home')
      if (link.scrollTo) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.querySelector(link.scrollTo)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 50)
        })
      }
    }
  }

  return { currentPage, navLinks, handleNav }
}
