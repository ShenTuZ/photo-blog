# 光影记录 - 个人摄影博客

## 项目概述

基于 Neo-brutalism 设计风格开发的个人摄影分享网站，使用 Vue 3 + Vite + Tailwind CSS 构建，纯静态网站无需后端支持。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3 + 自定义组件类
- **图标**: Lucide Vue Next
- **字体**: Space Grotesk (Google Fonts)
- **地图**: Leaflet 1.9
- **部署**: Vercel

## 项目结构

```
person/
├── public/
│   ├── favicon.ico
│   ├── images/                  # 原始照片（git 忽略）
│   │   ├── mine/                # 个人作品原图
│   │   └── others/              # 其他摄影师原图
│   └── images-optimized/        # WebP 压缩照片
│       ├── mine/                # 个人作品（8 张）
│       └── others/              # 其他摄影师（3 张）
├── scripts/
│   ├── optimize-images.mjs      # 图片压缩脚本（sharp）
│   ├── optimize-images.test.mjs # 图片压缩测试
│   └── vercel-routes.test.mjs   # Vercel 路由测试
├── src/
│   ├── components/
│   │   ├── NavBar.vue           # 导航栏（深色模式切换、响应式汉堡菜单）
│   │   ├── Hero.vue             # 首页主视觉
│   │   ├── Gallery.vue          # 作品集展示（灯箱预览、摄影师推荐）
│   │   ├── BlogPage.vue         # 摄影故事页（分类筛选、文章详情）
│   │   ├── MapPage.vue          # 拍摄地图（Leaflet 地图标记）
│   │   ├── AboutPage.vue        # 关于页面（器材清单、摄影偏好）
│   │   ├── Footer.vue           # 页脚（联系方式、快速导航）
│   │   └── icons/
│   │       ├── QQIcon.vue       # QQ 图标
│   │       └── WeChatIcon.vue   # 微信图标
│   ├── composables/
│   │   └── useNavigation.js     # 导航链接与滚动逻辑
│   ├── store/
│   │   ├── router.js            # 页面路由状态
│   │   ├── themeStore.js        # 深色模式状态（localStorage 持久化）
│   │   ├── portfolioStore.js    # 作品数据
│   │   └── blogStore.js         # 故事数据
│   ├── App.vue                  # 根组件
│   ├── main.js                  # 入口文件
│   └── style.css                # 全局样式 + 深色模式
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── vercel.json                  # Vercel 部署配置
├── index.html                   # HTML 入口（SEO meta 标签）
├── LICENSE                      # MIT 开源许可
├── README.md                    # 项目说明
└── package.json
```

## 页面结构

### 1. 首页 (Hero + Gallery)
- 品牌 Logo 和标语
- 主标题："热爱 探索 分享"
- 摄影师形象展示
- 照片卡片网格布局（支持精选作品跨列展示）
- 灯箱预览功能（显示标题、描述、拍摄感受）
- 其他摄影师照片推荐板块

### 2. 摄影故事 (BlogPage)
- 分类筛选（全部、风光、人文、生活）
- 故事卡片列表
- 文章详情视图（返回按钮、标签展示）

### 3. 拍摄地图 (MapPage)
- Leaflet 地图展示
- 自定义 Neo-brutalism 风格标记
- 照片/故事地点标记
- 点击故事标记跳转阅读
- 深色模式自动切换地图瓦片

### 4. 关于页面 (AboutPage)
- 个人简介
- 摄影偏好（风光、人文、街拍、生活）
- 器材清单

### 5. 页脚 (Footer)
- 品牌 Logo
- 关于我简介
- 快速导航链接
- 联系方式（QQ邮箱、微信）
- 回到顶部按钮

## 设计系统 (Neo-brutalism)

### 颜色系统

| 名称 | 色值 | 用途 |
|------|------|------|
| Background | `#F5EDD8` | 页面背景（羊皮纸色） |
| Ink | `#1A1A1A` | 所有边框、阴影、文本 |
| Accent | `#FF6B6B` | 主要按钮、强调色（Hot Red） |
| Secondary | `#FFD93D` | 次要按钮、装饰（Vivid Yellow） |
| Muted | `#C4B5FD` | 次要装饰（Soft Violet） |
| White | `#FFFFFF` | 卡片背景、对比元素 |

### 深色模式

- 通过 `html.dark` 类切换
- 自动检测系统偏好，支持 localStorage 持久化
- 所有颜色、阴影、背景均有对应的深色模式值
- 地图瓦片随主题自动切换（CARTO light/dark）

### 字体系统

- **字体族**: Space Grotesk
- **加载**: Google Fonts CDN
- **权重规则**:
  - 900 (Black): 标题 h1, h2, h3
  - 700 (Bold): 正文、按钮、标签
  - 500 (Medium): 少量强调使用

### 阴影系统

| 名称 | CSS 值 | 用途 |
|------|--------|------|
| neo-sm | `4px 4px 0px 0px #1A1A1A` | 小元素、按钮 |
| neo-md | `8px 8px 0px 0px #1A1A1A` | 卡片、容器 |
| neo-lg | `12px 12px 0px 0px #1A1A1A` | 大卡片 |
| neo-xl | `16px 16px 0px 0px #1A1A1A` | 特色元素 |

### 边框系统

- **默认边框**: `border-4 border-neo-ink` (4px solid)
- **圆角**: `rounded-none` (锐角) 或 `rounded-full` (圆形)

## 组件类库

```css
.neo-btn           /* 基础按钮样式 */
.neo-btn-primary   /* 红色主按钮 */
.neo-card          /* 卡片（悬停上移 + 阴影加深） */
.footer-bg         /* Footer 专用深色背景 */
```

## 交互设计

### 导航
- 固定顶部导航栏
- 平滑滚动到锚点
- 响应式汉堡菜单（移动端）
- 深色模式一键切换

### 照片墙
- 点击卡片打开灯箱
- ESC 或点击遮罩关闭灯箱
- 灯箱显示照片描述和拍摄感受

### 地图
- 自定义 Neo-brutalism 风格标记
- 弹窗显示照片/故事信息
- 点击故事标记跳转到故事页

### 无障碍设计
- 语义化 HTML 标签
- ARIA 标签用于图标按钮
- 键盘导航支持（ESC 关闭灯箱）
- 高对比度颜色组合
- noscript 降级提示

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览生产版本
npm run optimize:images  # 压缩图片（JPG → WebP）
npm run test         # 运行测试
```

## 部署

构建后的文件位于 `dist/` 目录，部署到 Vercel。

### Vercel 配置
- 静态构建输出 `dist/`
- SPA 路由回退到 `index.html`
- 资源路由：`/assets/`、`/images/`、`/images-optimized/`

## 更新日志

### v4.0
- 新增摄影故事页（BlogPage）：分类筛选、文章详情
- 新增拍摄地图页（MapPage）：Leaflet 地图、地点标记
- 新增关于页面（AboutPage）：器材清单、摄影偏好
- 深色模式支持：全站颜色适配、地图瓦片切换
- 自定义路由系统（router.js）
- 图片优化管线（sharp → WebP）
- SEO meta 标签
- Leaflet 改为本地引入

### v3.0
- 移除上传功能，改为纯静态网站
- 添加照片描述和拍摄感受字段
- 添加其他摄影师照片推荐板块
- 更新联系方式（QQ邮箱、微信）
- 支持自定义 favicon

### v2.0
- 新增图片上传功能
- 集成阿里云 OSS
- 添加状态管理 store

### v1.0
- 初始版本
- Neo-brutalism 设计风格
- 首页、作品集、关于、页脚

---

*最后更新: 2026-06-05*
