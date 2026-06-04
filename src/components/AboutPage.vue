<script setup>
import { Camera, Heart, MapPin, Aperture, Image, Coffee } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-neo-bg min-h-screen pt-24 pb-16 relative">
    <div class="absolute inset-0 grid-bg opacity-10"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-neo-accent border-4 border-neo-ink px-4 py-2 shadow-neo-sm mb-6">
          <Heart class="w-5 h-5 text-neo-white" />
          <span class="font-black text-sm uppercase text-neo-white">关于我</span>
        </div>
        <h1 class="font-black text-4xl md:text-6xl tracking-tighter">
          用镜头记录世界
        </h1>
      </div>

      <!-- 个人介绍 -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="neo-card overflow-hidden">
          <div class="relative">
            <img
              src="/images-optimized/mine/photographer.webp"
              alt="摄影师"
              width="1600"
              height="1066"
              loading="lazy"
              class="w-full h-80 object-cover"
            />
            <div class="absolute top-4 right-4 bg-neo-secondary border-4 border-neo-ink px-3 py-1 shadow-neo-sm">
              <span class="font-black text-xs uppercase">摄影师</span>
            </div>
          </div>
          <div class="p-6 border-t-4 border-neo-ink">
            <h2 class="font-black text-2xl uppercase tracking-tight mb-2">光影记录</h2>
            <div class="flex items-center gap-2 text-neo-muted">
              <MapPin class="w-4 h-4" />
              <span class="font-bold text-sm">云南·昆明</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="neo-card p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-neo-accent border-4 border-neo-ink p-2 shadow-neo-sm">
                <Camera class="w-5 h-5 text-neo-white" />
              </div>
              <h3 class="font-black text-lg uppercase">自我介绍</h3>
            </div>
            <p class="font-bold text-base leading-loose">
              你好！我是一个热爱摄影的普通人，喜欢用镜头捕捉生活中的美好瞬间。
              从校园到远方，从日出到星空，每一次按下快门都是一次与世界的对话。
            </p>
            <p class="font-bold text-base leading-loose mt-4">
              摄影对我来说不只是记录，更是一种表达。
              我相信每一张照片都有它独特的故事，每一个瞬间都值得被珍藏。
            </p>
          </div>

          <div class="bg-neo-secondary border-4 border-neo-ink p-6 shadow-neo-md">
            <p class="font-black text-lg italic">
              "生活中不缺少美，只是缺少发现美的眼睛。"
            </p>
            <p class="font-bold text-sm text-neo-muted mt-2">— 罗丹</p>
          </div>
        </div>
      </div>

      <!-- 摄影偏好 -->
      <div class="mb-16">
        <h2 class="font-black text-3xl md:text-4xl tracking-tighter text-center mb-8">
          摄影偏好
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="neo-card p-6 text-center">
            <div class="bg-neo-muted border-4 border-neo-ink w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
              <Image class="w-8 h-8" />
            </div>
            <h3 class="font-black text-lg uppercase mb-2">风光摄影</h3>
            <p class="font-bold text-sm text-neo-muted">
              山川湖海、日出日落，大自然是最伟大的艺术家
            </p>
          </div>

          <div class="neo-card p-6 text-center">
            <div class="bg-neo-secondary border-4 border-neo-ink w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
              <Coffee class="w-8 h-8" />
            </div>
            <h3 class="font-black text-lg uppercase mb-2">生活记录</h3>
            <p class="font-bold text-sm text-neo-muted">
              一杯咖啡、一束阳光，平凡日子里的小确幸
            </p>
          </div>

          <div class="neo-card p-6 text-center">
            <div class="bg-neo-accent border-4 border-neo-ink w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
              <MapPin class="w-8 h-8 text-neo-white" />
            </div>
            <h3 class="font-black text-lg uppercase mb-2">旅行随拍</h3>
            <p class="font-bold text-sm text-neo-muted">
              走过的路、遇见的人，都是旅途中最美的风景
            </p>
          </div>
        </div>
      </div>

      <!-- 常用器材 -->
      <div class="max-w-2xl mx-auto">
        <h2 class="font-black text-3xl md:text-4xl tracking-tighter text-center mb-8">
          常用器材
        </h2>
        <div class="neo-card overflow-hidden">
          <div class="divide-y-4 divide-neo-ink">
            <div class="p-6 flex items-center gap-4">
              <div class="bg-neo-secondary border-4 border-neo-ink p-3 shadow-neo-sm flex-shrink-0">
                <Aperture class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-black text-base uppercase">相机</h3>
                <p class="font-bold text-sm text-neo-muted">Sony A7M3</p>
              </div>
            </div>
            <div class="p-6 flex items-center gap-4">
              <div class="bg-neo-muted border-4 border-neo-ink p-3 shadow-neo-sm flex-shrink-0">
                <Aperture class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-black text-base uppercase">镜头</h3>
                <p class="font-bold text-sm text-neo-muted">FE 24-70mm F2.8 GM</p>
              </div>
            </div>
            <div class="p-6 flex items-center gap-4">
              <div class="bg-neo-accent border-4 border-neo-ink p-3 shadow-neo-sm flex-shrink-0">
                <Aperture class="w-6 h-6 text-neo-white" />
              </div>
              <div>
                <h3 class="font-black text-base uppercase">三脚架</h3>
                <p class="font-bold text-sm text-neo-muted">Peak Design Travel Tripod</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
