import { ref } from 'vue'

const portfolioItems = ref([
  {
    id: 1,
    title: '校园',
    year: '2025',
    image: '/images-optimized/mine/campus.webp',
    description: '校园的午后，阳光洒在操场上，一切都那么宁静美好。',
    feeling: '这张照片让我想起了大学时光，那些无忧无虑的日子。',
    location: [25.03, 102.68],
    locationName: '昆明'
  },
  {
    id: 2,
    title: '洱海',
    year: '2025',
    image: '/images-optimized/mine/erhai.webp',
    description: '洱海的日出，湖面波光粼粼，远处的山峦若隐若现。',
    feeling: '那一刻，我感受到了大自然的宁静与力量。',
    location: [25.78, 100.19],
    locationName: '云南大理·洱海'
  },
  {
    id: 3,
    title: '洱海小屋',
    year: '2025',
    image: '/images-optimized/mine/erhai_house.webp',
    description: '面朝洱海，春暖花开。这间小屋见证了生活的另一种可能。',
    feeling: '多么希望时间能慢下来，就这样静静地坐着看海。',
    location: [25.79, 100.20],
    locationName: '云南大理·洱海边'
  },
  {
    id: 4,
    title: '生活碎片',
    year: '2024',
    image: '/images-optimized/mine/life.webp',
    description: '生活中那些不经意的美好瞬间，值得被记录。',
    feeling: '平凡的日子里，藏着最真实的幸福。',
    location: [25.03, 102.68],
    locationName: '昆明'
  }
])

export function usePortfolioStore() {
  return {
    portfolioItems
  }
}
