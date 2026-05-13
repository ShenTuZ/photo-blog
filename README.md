# 光影记录 - 我的摄影博客

一个简约风格的个人摄影分享网站，使用 Vue 3 + Vite + Tailwind CSS 构建。

## 功能特点

- 📷 **照片展示** - 精美的照片墙布局，支持点击查看大图
- 📝 **照片详情** - 每张照片配有描述和拍摄感受
- 📧 **联系方式** - 页脚展示邮箱和微信联系方式
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Tailwind CSS 3** - 实用优先的 CSS 框架
- **Lucide Icons** - 精美的图标库

## 快速开始

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

## 项目结构

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
└── index.html        # HTML 入口
```

## 自定义照片

将照片放入 `public/images/` 目录，然后编辑 `src/store/portfolioStore.js` 添加照片信息：

```js
{
  id: 1,
  title: '照片标题',
  image: '/images/your-photo.jpg',
  description: '照片介绍',
  feeling: '拍摄感受'
}
```

## 许可证

MIT License