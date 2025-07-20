<<<<<<< HEAD
# Vibe Coding Landing Page

一个简洁、极简风格的登录页面，用于收集用户兴趣，介绍 Vibe Coding 课程，并实时显示报名人数。

## 🚀 功能特性

- ✅ **响应式设计** - 完美适配桌面、平板和手机
- ✅ **现代UI** - 使用渐变背景和流畅动画
- ✅ **表单收集** - 收集用户姓名和邮箱
- ✅ **Supabase集成** - 数据存储和实时计数
- ✅ **动态统计** - 实时显示总报名人数
- ✅ **表单验证** - 邮箱格式验证和重复检查
- ✅ **加载状态** - 提交时的用户反馈
- ✅ **错误处理** - 完善的错误提示机制

## 📁 项目结构

```
demo/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── README.md           # 项目说明
└── vibe-coding-landing-prd.md  # 产品需求文档
```

## 🛠️ 快速开始

### 1. 本地运行

直接在浏览器中打开 `index.html` 文件即可预览页面。

### 2. 配置 Supabase（可选）

要启用完整的数据存储功能，需要配置 Supabase：

1. 访问 [Supabase](https://supabase.com) 创建新项目
2. 在 SQL Editor 中创建表：

```sql
CREATE TABLE interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subscribed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
```

3. 在 `script.js` 中替换以下配置：

```javascript
const SUPABASE_URL = '你的_SUPABASE_URL';
const SUPABASE_ANON_KEY = '你的_SUPABASE_ANON_KEY';
```

### 3. 部署

#### 方法一：GitHub Pages
1. 创建 GitHub 仓库并推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vibe-coding-landing.git
   git push -u origin main
   ```

2. 启用 GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 系统会自动使用 `.github/workflows/pages.yml`

3. 访问你的网站：
   - URL 格式：`https://yourusername.github.io/repository-name`
   - 部署需要几分钟时间

#### 方法二：Netlify
1. 注册 [Netlify](https://netlify.com)
2. 拖拽项目文件夹到 Netlify 部署区域
3. 获得可访问的 URL

#### 方法三：Vercel
1. 注册 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库
3. 自动部署完成

## 🎨 自定义

### 修改颜色主题

在 `styles.css` 中修改以下变量：

```css
/* 主背景渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 按钮颜色 */
background: linear-gradient(135deg, #ff6b6b, #ee5a24);
```

### 修改文案

在 `index.html` 中直接修改相应的文本内容。

### 添加新功能

- 在 `script.js` 中添加新的 JavaScript 功能
- 在 `styles.css` 中添加对应的样式
- 在 `index.html` 中添加相应的 HTML 结构

## 📱 响应式断点

- **桌面**: > 768px
- **平板**: 768px - 480px
- **手机**: < 480px

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互逻辑
- **Supabase** - 后端数据库服务
- **Google Fonts** - Inter 字体

## 🚀 性能优化

- ✅ 使用 CDN 加载 Supabase 客户端
- ✅ 图片懒加载（如有图片）
- ✅ CSS 和 JS 文件压缩
- ✅ 响应式图片
- ✅ 平滑滚动

## 🔒 安全考虑

- ✅ 邮箱格式验证
- ✅ 重复邮箱检查
- ✅ 表单数据清理
- ✅ XSS 防护

## 📊 数据统计

页面会自动统计并显示：
- 总报名人数
- 实时更新（需要 Supabase 配置）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 📞 支持

如有问题，请通过以下方式联系：
- 提交 GitHub Issue
- 发送邮件至：[your-email@example.com]

---

=======
# Vibe Coding Landing Page

一个简洁、极简风格的登录页面，用于收集用户兴趣，介绍 Vibe Coding 课程，并实时显示报名人数。

## 🚀 功能特性

- ✅ **响应式设计** - 完美适配桌面、平板和手机
- ✅ **现代UI** - 使用渐变背景和流畅动画
- ✅ **表单收集** - 收集用户姓名和邮箱
- ✅ **Supabase集成** - 数据存储和实时计数
- ✅ **动态统计** - 实时显示总报名人数
- ✅ **表单验证** - 邮箱格式验证和重复检查
- ✅ **加载状态** - 提交时的用户反馈
- ✅ **错误处理** - 完善的错误提示机制

## 📁 项目结构

```
demo/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── README.md           # 项目说明
└── vibe-coding-landing-prd.md  # 产品需求文档
```

## 🛠️ 快速开始

### 1. 本地运行

直接在浏览器中打开 `index.html` 文件即可预览页面。

### 2. 配置 Supabase（可选）

要启用完整的数据存储功能，需要配置 Supabase：

1. 访问 [Supabase](https://supabase.com) 创建新项目
2. 在 SQL Editor 中创建表：

```sql
CREATE TABLE interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subscribed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
```

3. 在 `script.js` 中替换以下配置：

```javascript
const SUPABASE_URL = '你的_SUPABASE_URL';
const SUPABASE_ANON_KEY = '你的_SUPABASE_ANON_KEY';
```

### 3. 部署

#### 方法一：GitHub Pages
1. 创建 GitHub 仓库并推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vibe-coding-landing.git
   git push -u origin main
   ```

2. 启用 GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 系统会自动使用 `.github/workflows/pages.yml`

3. 访问你的网站：
   - URL 格式：`https://yourusername.github.io/repository-name`
   - 部署需要几分钟时间

#### 方法二：Netlify
1. 注册 [Netlify](https://netlify.com)
2. 拖拽项目文件夹到 Netlify 部署区域
3. 获得可访问的 URL

#### 方法三：Vercel
1. 注册 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库
3. 自动部署完成

## 🎨 自定义

### 修改颜色主题

在 `styles.css` 中修改以下变量：

```css
/* 主背景渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 按钮颜色 */
background: linear-gradient(135deg, #ff6b6b, #ee5a24);
```

### 修改文案

在 `index.html` 中直接修改相应的文本内容。

### 添加新功能

- 在 `script.js` 中添加新的 JavaScript 功能
- 在 `styles.css` 中添加对应的样式
- 在 `index.html` 中添加相应的 HTML 结构

## 📱 响应式断点

- **桌面**: > 768px
- **平板**: 768px - 480px
- **手机**: < 480px

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互逻辑
- **Supabase** - 后端数据库服务
- **Google Fonts** - Inter 字体

## 🚀 性能优化

- ✅ 使用 CDN 加载 Supabase 客户端
- ✅ 图片懒加载（如有图片）
- ✅ CSS 和 JS 文件压缩
- ✅ 响应式图片
- ✅ 平滑滚动

## 🔒 安全考虑

- ✅ 邮箱格式验证
- ✅ 重复邮箱检查
- ✅ 表单数据清理
- ✅ XSS 防护

## 📊 数据统计

页面会自动统计并显示：
- 总报名人数
- 实时更新（需要 Supabase 配置）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 📞 支持

如有问题，请通过以下方式联系：
- 提交 GitHub Issue
- 发送邮件至：[your-email@example.com]

---

>>>>>>> 1c91fd7f6a78733f222f646d2a928cbfa3893d34
**Vibe Coding** - 让编程更有趣，让产品更成功 🚀 