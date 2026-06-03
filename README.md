<div align="center">

# 📸 光影记录

**用镜头记录生活，分享那些让我心动的瞬间**

一个基于 Vue 3 构建的个人摄影博客，采用 Neobrutalism 设计风格

[在线预览](https://photoblog-shentuzs-projects.vercel.app/) · [报告问题](https://github.com/ShenTuZi/person/issues)

</div>

---

## ✨ 功能特性

| 功能 | 说明 |
|------|------|
| 🖼️ 作品展示 | 精选摄影作品，统一尺寸网格排列 |
| 📖 摄影故事 | 每张照片背后的故事与拍摄心得 |
| 🌙 深色模式 | 一键切换，自动保存偏好 |
| 📱 响应式布局 | 完美适配桌面端与移动端 |
| 🔍 大图预览 | Lightbox 弹窗查看高清大图 |
| 🎨 Neobrutalism | 粗犷边框与硬阴影的独特视觉风格 |

## 🛠️ 技术栈

<table>
<tr>
<td><strong>框架</strong></td>
<td>Vue 3 + Composition API</td>
</tr>
<tr>
<td><strong>构建</strong></td>
<td>Vite 6</td>
</tr>
<tr>
<td><strong>样式</strong></td>
<td>Tailwind CSS 3</td>
</tr>
<tr>
<td><strong>图标</strong></td>
<td>Lucide Icons</td>
</tr>
<tr>
<td><strong>部署</strong></td>
<td>Vercel</td>
</tr>
</table>

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/ShenTuZi/person.git
cd person

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
├── public/
│   ├── images/              # 原始照片
│   └── images-optimized/    # WebP 压缩照片
├── src/
│   ├── components/
│   │   ├── NavBar.vue       # 导航栏（含深色模式切换）
│   │   ├── Hero.vue         # 首页主视觉
│   │   ├── Gallery.vue      # 作品集展示
│   │   ├── BlogPage.vue     # 摄影故事页
│   │   └── Footer.vue       # 页脚
│   ├── store/
│   │   ├── portfolioStore.js # 作品数据 + 路由状态
│   │   ├── blogStore.js     # 故事数据
│   │   └── themeStore.js    # 主题状态管理
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   └── style.css            # 全局样式 + 深色模式
├── tailwind.config.js       # Tailwind 配置
├── vite.config.js           # Vite 配置
└── package.json
```

## 📝 内容管理

### 添加作品

编辑 `src/store/portfolioStore.js`：

```js
{
  id: 5,
  title: '照片标题',
  image: '/images-optimized/your-photo.webp',
  description: '照片描述',
  feeling: '拍摄感受'
}
```

### 添加故事

编辑 `src/store/blogStore.js`：

```js
{
  id: 5,
  title: '故事标题',
  date: '2025-01-01',
  category: '分类',
  cover: '/images-optimized/cover.webp',
  excerpt: '摘要内容...',
  content: '完整故事内容...',
  tags: ['标签1', '标签2']
}
```

## 🖼️ 图片优化

原图存放于 `public/images/`，运行以下命令生成 WebP 压缩版本：

```bash
npm run optimize:images
```

压缩后的图片输出到 `public/images-optimized/`，页面默认引用优化版本。

## 📄 开源许可

[MIT License](./LICENSE) © 2026 光影记录
