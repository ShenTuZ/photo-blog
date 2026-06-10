import { ref } from 'vue'

const blogPosts = ref([
  {
    id: 1,
    title: '洱海边的日出',
    date: '2025-01-30',
    category: '风景',
    cover: '/images-optimized/mine/erhai.webp',
    excerpt: '中午时的洱海，骑车去逛洱海的时候的小屋...',
    content: `和朋友骑车逛洱海，是难得的十分快乐的时候，小屋就安置在洱海旁的一个长道外，与世无争，宁静而祥和，按下快门，保存这悠闲一刻。

📷 拍摄参数：大疆pokert3设备 直出`,
    tags: ['日出', '洱海', '风光'],
    location: [25.78, 100.19],
    locationName: '云南大理·洱海'
  },
  {
    id: 2,
    title: '校园里的秋天',
    date: '2023-11-08',
    category: '校园',
    cover: '/images-optimized/mine/campus2.webp',
    excerpt: '秋天的校园，是色彩最丰富的季节...',
    content: `秋天是我最喜欢的拍摄季节。校园里的银杏叶变成了金黄色，枫叶则是热烈的红。

那天下午，我带着相机在校园里漫步。阳光透过树叶洒下斑驳的光影，落叶铺满了小径。

我蹲下来，用低角度拍摄了一张落叶特写。背景是模糊的金色光斑，前景是一片清晰的银杏叶。

有时候，最简单的画面反而最打动人。

📷 拍摄参数：f/2.8 | 1/250s | ISO 200`,
    tags: ['秋天', '校园', '落叶'],
    location: [25.03, 102.68],
    locationName: '昆明'
  },
  {
    id: 3,
    title: '生活中的小确幸',
    date: '2024-02-22',
    category: '生活',
    cover: '/images-optimized/mine/life.webp',
    excerpt: '不需要远行，生活处处是风景...',
    content: `很多人问我，你最喜欢的拍摄题材是什么？

我的回答是：生活。

不需要去远方，不需要壮丽的风景。一杯咖啡、一束阳光、一个微笑，都可以成为最美的画面。

那天下午，我在阳台上喝咖啡，阳光正好洒在桌面上。我随手拿起相机，拍下了这个瞬间。

这就是摄影的意义——记录生活中那些不经意的美好。

📷 拍摄参数：f/4 | 1/60s | ISO 400`,
    tags: ['生活', '日常', '随拍'],
    location: [25.03, 102.68],
    locationName: '昆明'
  }
])

const selectedPost = ref(null)

export function useBlogStore() {
  return {
    blogPosts,
    selectedPost,
    openPost: (post) => { selectedPost.value = post },
    closePost: () => { selectedPost.value = null }
  }
}
