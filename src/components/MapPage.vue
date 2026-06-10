<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { MapPin } from 'lucide-vue-next'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useBlogStore } from '../store/blogStore.js'
import { useRouter } from '../store/router.js'
import { useThemeStore } from '../store/themeStore.js'

const { blogPosts, openPost } = useBlogStore()
const { navigateTo } = useRouter()
const { isDark } = useThemeStore()

const mapContainer = ref(null)
let map = null
let tileLayer = null

// 按地名去重
const seen = new Set()
const allLocations = []

blogPosts.value.forEach(post => {
  if (!seen.has(post.locationName)) {
    seen.add(post.locationName)
    allLocations.push({
      lat: post.location[0],
      lng: post.location[1],
      title: post.title,
      locationName: post.locationName,
      image: post.cover,
      type: 'story',
      id: post.id,
      date: post.date,
      post
    })
  }
})

const handlePopupClick = (item) => {
  if (item.type === 'story') {
    openPost(item.post)
    navigateTo('blog')
  }
}

onMounted(async () => {
  await nextTick()
  if (!mapContainer.value || typeof L === 'undefined') return

  map = L.map(mapContainer.value, {
    zoomControl: false
  }).setView([28, 110], 4)

  L.control.zoom({ position: 'topright' }).addTo(map)

  const tileUrl = isDark.value
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

  tileLayer = L.tileLayer(tileUrl, {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://osm.org/copyright">OSM</a>',
    maxZoom: 18
  }).addTo(map)

  const customIcon = L.divIcon({
    className: 'map-marker',
    html: `<div style="
      width: 28px;
      height: 28px;
      background: #FF6B6B;
      border: 3px solid #000;
      box-shadow: 4px 4px 0px 0px #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(45deg);
    "><div style="
      width: 10px;
      height: 10px;
      background: #fff;
      transform: rotate(-45deg);
    "></div></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -32]
  })

  const markers = []

  allLocations.forEach(item => {
    const popupContent = document.createElement('div')
    popupContent.className = 'map-popup-content'
    popupContent.innerHTML = `
      <div style="font-family: 'Space Grotesk', sans-serif; min-width: 200px;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 140px; object-fit: cover; border-bottom: 3px solid #000;" loading="lazy" />
        <div style="padding: 10px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
            <span style="
              background: ${item.type === 'photo' ? '#FFD93D' : '#C4B5FD'};
              border: 2px solid #000;
              padding: 2px 8px;
              font-size: 11px;
              font-weight: 900;
              text-transform: uppercase;
            ">${item.type === 'photo' ? '照片' : '故事'}</span>
            ${item.date ? `<span style="font-size: 12px; font-weight: 700; color: #888;">${item.date}</span>` : ''}
          </div>
          <h4 style="font-weight: 900; font-size: 15px; margin: 0 0 4px 0; text-transform: uppercase;">${item.title}</h4>
          <p style="font-size: 12px; font-weight: 700; color: #666; margin: 0;">
            <span style="color: #FF6B6B;">📍</span> ${item.locationName}
          </p>
          ${item.type === 'story' ? '<p style="font-size: 11px; font-weight: 700; color: #FF6B6B; margin: 6px 0 0 0; cursor: pointer;">阅读故事 →</p>' : ''}
        </div>
      </div>
    `

    if (item.type === 'story') {
      popupContent.style.cursor = 'pointer'
      popupContent.addEventListener('click', () => handlePopupClick(item))
    }

    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent, {
        maxWidth: 280,
        className: 'neo-popup'
      })

    markers.push(marker)
  })

  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.3))
  }

})

// 深色模式切换时更新地图瓦片
watch(isDark, (dark) => {
  if (!tileLayer) return
  const newUrl = dark
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  tileLayer.setUrl(newUrl)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<template>
  <section class="bg-neo-bg py-16 md:py-32 relative">
    <div class="absolute inset-0 grid-bg opacity-10"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="bg-neo-accent border-4 border-neo-ink p-3 shadow-neo-sm">
            <MapPin class="w-8 h-8 text-neo-white" />
          </div>
        </div>
        <h2 class="font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter">
          拍摄地图
        </h2>
        <p class="font-bold text-lg mt-4 text-neo-muted">
          记录每一个按下快门的地方
        </p>
      </div>

      <!-- 地图容器 -->
      <div class="neo-card overflow-hidden">
        <div
          ref="mapContainer"
          class="w-full h-[500px] md:h-[600px] lg:h-[700px]"
        ></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
:deep(.neo-popup .leaflet-popup-content-wrapper) {
  border: 4px solid #000;
  box-shadow: 8px 8px 0px 0px #000;
  border-radius: 0;
  padding: 0;
  overflow: hidden;
}

:deep(.neo-popup .leaflet-popup-content) {
  margin: 0;
  min-width: 220px;
}

:deep(.neo-popup .leaflet-popup-tip) {
  background: #fff;
  border: 3px solid #000;
  border-top: none;
  border-right: none;
  box-shadow: none;
}

:deep(.leaflet-control-zoom a) {
  background: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px 0px #000;
  color: #000;
  font-weight: 900;
  width: 36px;
  height: 36px;
  line-height: 30px;
  border-radius: 0;
}

:deep(.leaflet-control-zoom a:hover) {
  background: #FFD93D;
}

:deep(.leaflet-control-zoom) {
  border: none;
  box-shadow: none;
}

:deep(.leaflet-control-zoom-in) {
  border-bottom: none !important;
}

:deep(.map-marker) {
  background: transparent;
  border: none;
}
</style>
