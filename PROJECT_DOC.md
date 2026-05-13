# 光影记录 - 个人摄影博客

## 项目概述

基于 Neo-brutalism 设计风格开发的个人摄影分享网站，使用 Vue 3 + Vite + Tailwind CSS 构建，纯静态网站无需后端支持。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3 + 自定义组件类
- **图标**: Lucide Vue Next
- **字体**: Space Grotesk (Google Fonts)

## 项目结构

```
src/
├── components/
│   ├── NavBar.vue        # 导航栏
│   ├── Hero.vue          # 首页英雄区域
│   ├── Gallery.vue       # 照片展示（含灯箱预览）
│   └── Footer.vue        # 页脚（含联系方式）
├── store/
│   └── portfolioStore.js # 照片数据管理
├── App.vue               # 主应用组件
├── main.js               # 入口文件
└── style.css             # 全局样式和组件类
```

## 页面结构

### 1. 首页 (Hero)
- 品牌 Logo 和标语
- 主标题："热爱 探索 分享"
- 摄影师形象展示
- CTA 按钮："查看照片"

### 2. 照片墙 (Gallery)
- 照片卡片网格布局（支持精选作品跨列展示）
- 灯箱预览功能（显示标题、描述、拍摄感受）
- 其他摄影师照片推荐板块

### 3. 页脚 (Footer)
- 品牌 Logo
- 快速导航链接
- 社交媒体图标（Instagram、Twitter、Facebook）
- 联系方式（QQ邮箱、微信）
- 回到顶部按钮
- 版权信息

## 设计系统 (Neo-brutalism)

### 颜色系统

| 名称 | 色值 | 用途 |
|------|------|------|
| Background | `#FFFDF5` | 页面背景（奶油色） |
| Ink | `#000000` | 所有边框、阴影、文本 |
| Accent | `#FF6B6B` | 主要按钮、强调色（Hot Red） |
| Secondary | `#FFD93D` | 次要按钮、装饰（Vivid Yellow） |
| Muted | `#C4B5FD` | 次要装饰（Soft Violet） |
| White | `#FFFFFF` | 卡片背景、对比元素 |

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
| neo-sm | `4px 4px 0px 0px #000` | 小元素、按钮 |
| neo-md | `8px 8px 0px 0px #000` | 卡片、容器 |
| neo-lg | `12px 12px 0px 0px #000` | 大卡片 |
| neo-xl | `16px 16px 0px 0px #000` | 特色元素 |

### 边框系统

- **默认边框**: `border-4 border-neo-ink` (4px solid black)
- **圆角**: `rounded-none` (锐角) 或 `rounded-full` (圆形)

## 组件类库

### 按钮

```css
.neo-btn         /* 基础按钮样式 */
.neo-btn-primary /* 红色主按钮 */
.neo-btn-secondary /* 黄色次要按钮 */
.neo-btn-outline /* 轮廓按钮 */
```

**交互效果**: 按下时 `translate-x-[2px] translate-y-[2px]` + 阴影消失

### 卡片

```css
.neo-card  /* 悬停上移 + 阴影加深 */
```

### 输入框

```css
.neo-input  /* 聚焦时背景变黄 + 阴影 */
```

### 徽章

```css
.neo-badge  /* 标签徽章 */
```

## 背景纹理

| 类名 | 效果 |
|------|------|
| `halftone-bg` | 半调点阵图案 |
| `grid-bg` | 网格纸图案 |
| `noise-bg` | 噪点纹理 |
| `radial-dots-bg` | 放射状点图案 |

## 动画效果

- **过渡时长**: `duration-100` (100ms) 或 `duration-200` (200ms)
- **悬停效果**:
  - 按钮: 按下效果
  - 卡片: 上移 + 阴影加深
- **循环动画**: `animate-bounce`, `animate-pulse`

## 响应式断点

| 断点 | 宽度 | 用途 |
|------|------|------|
| sm | 640px | 小平板 |
| md | 768px | 平板 |
| lg | 1024px | 桌面 |
| xl | 1280px | 大桌面 |

## 交互设计

### 导航
- 固定顶部导航栏
- 平滑滚动到锚点

### 照片墙
- 点击卡片打开灯箱
- ESC 或点击遮罩关闭灯箱
- 灯箱显示照片描述和拍摄感受

### 无障碍设计
- 语义化 HTML 标签
- ARIA 标签用于图标按钮
- 键盘导航支持
- 高对比度颜色组合

## 开发命令

```bash
npm install          # 安装依赖
npm run dev         # 启动开发服务器
npm run build       # 构建生产版本
npm run preview     # 预览生产版本
```

## 部署

构建后的文件位于 `dist/` 目录，可部署到任意静态服务器。

### 构建输出
- `dist/index.html`
- `dist/assets/index-*.css` (约 24KB)
- `dist/assets/index-*.js` (约 225KB gzip)
- `dist/images/` - 照片资源

## 文件清单

### 配置文件
- `package.json` - 项目依赖和脚本
- `vite.config.js` - Vite 配置
- `tailwind.config.js` - Tailwind 配置
- `postcss.config.js` - PostCSS 配置
- `README.md` - 项目说明

### 源代码
- `index.html` - HTML 入口
- `src/main.js` - Vue 应用入口
- `src/App.vue` - 根组件
- `src/style.css` - 全局样式

### 组件文件
- `src/components/NavBar.vue`
- `src/components/Hero.vue`
- `src/components/Gallery.vue`
- `src/components/Footer.vue`

### 数据文件
- `src/store/portfolioStore.js` - 照片数据

### 静态资源
- `public/favicon.ico` - 网站图标
- `public/images/` - 照片目录

## 更新日志

### v3.0
- 移除上传功能，改为纯静态网站
- 移除"关于我"页面
- 移除年份筛选功能
- 添加照片描述和拍摄感受字段
- 添加其他摄影师照片推荐板块
- 更新联系方式（QQ邮箱、微信）
- 支持自定义 favicon

### v2.0
- 新增图片上传功能
- 集成阿里云 OSS
- 添加状态管理 store
- 新增分类：2025、2026
- 空状态友好提示
- 精选作品标记

### v1.0
- 初始版本
- Neo-brutalism 设计风格
- 首页、作品集、关于、页脚
- 按年度分类的作品展示
- 响应式设计
- 中文界面

---

*最后更新: 2026*
