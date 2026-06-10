import { ref } from 'vue'

const blogPosts = ref([
  {
    id: 1,
    title: '洱海边的小屋',
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
    date: '2023-11-29',
    category: '校园',
    cover: '/images-optimized/mine/campus2.webp',
    excerpt: '秋天的校园，钟楼是一个特殊的建筑，宏伟而威严...',
    content: `在秋末时，校园里的银杏叶变成了金黄色，枫叶则是热烈的红。

那天中午去上课，发现一个位置非常适合，想结合一下。阳光透过树叶洒下斑驳的光影，。

我蹲下来，用低角度拍摄了一张落叶特写。背景是清晰的学校钟楼，前景是一片模糊的银杏叶。

有时候，最简单的画面反而最打动人。

📷 拍摄参数：手机拍摄 ISO 50`,
    tags: ['秋天', '校园', '落叶'],
    location: [25.03, 102.68],
    locationName: '青城山'
  },
  {
    id: 3,
    title: '生活中的小确幸',
    date: '2024-02-22',
    category: '生活',
    cover: '/images-optimized/mine/life.webp',
    excerpt: '不需要远行，生活处处是风景...',
    content: `应该是在过年后，一次和朋友们的聚会后，发现餐馆旁边街道的周围都是彩灯。整体采用朦胧感的意境。感受当下吃完火锅的快乐。

📷 拍摄参数：手机拍摄 ISO 280`,
    tags: ['生活', '日常', '随拍'],
    location: [25.03, 102.68],
    locationName: '攀枝花'
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
