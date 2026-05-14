
# 光影记录 - 个人摄影博客

一个简约风格的摄影分享网站，展示生活中的美好瞬间。

## 🌐 预览

[在线预览](https://photoblog-shentuzs-projects.vercel.app/)

## ✨ 功能特点

- 📷 **照片墙展示** - 精美的瀑布流布局，展现摄影作品
- 🔍 **详情查看** - 点击查看大图及拍摄故事
- 📱 **响应式设计** - 完美适配桌面与移动端
- 🎨 **简约风格** - 清新淡雅的视觉体验

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Tailwind CSS 3** - 实用优先的 CSS 框架
- **Lucide Icons** - 精美的图标库

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
├── public/           # 静态资源
│   ├── favicon.ico   # 网站图标
│   └── images/       # 照片目录
├── src/              # 源代码
│   ├── components/   # Vue 组件
│   ├── store/        # 状态管理
│   ├── App.vue       # 根组件
│   ├── main.js       # 入口文件
│   └── style.css     # 全局样式
├── index.html        # HTML 入口
├── vite.config.js    # Vite 配置
├── tailwind.config.js # Tailwind 配置
└── package.json      # 项目配置
```

## 📝 添加照片

1. 将照片放入 `public/images/` 目录
2. 编辑 `src/store/portfolioStore.js` 添加照片信息：

```js
{
  id: 1,
  title: '照片标题',
  image: '/images/your-photo.jpg',
  description: '照片介绍',
  feeling: '拍摄感受'
}
```

## 📄 许可证

MIT License
