# 📝 Product Requirements Document (PRD)
# 📝 产品需求文档（PRD）

## 🎯 Product Title  
**Vibe Coding – Launch Your MVP in 30 Days**  
**Vibe Coding – 在30天内发布你的最小可行产品（MVP）**

---

## 🧩 Overview  
A clean, minimalistic landing page designed to collect user interest via a form, introduce the Vibe Coding course, and dynamically display the number of submitted interest forms (powered by Supabase).  
一个简洁、极简风格的登录页面，用于通过表单收集用户兴趣，介绍 Vibe Coding 课程，并实时显示已有的报名人数（由 Supabase 提供支持）。

The form submission data will be stored in a Supabase database, and the total count will be displayed on the landing page.  
表单提交的数据将保存在 Supabase 数据库中，并在页面上动态显示总报名人数。

---

## 🎯 Goal  
Build a **responsive, deployable landing page** that:  
构建一个**响应式、可部署的登录页面**，实现以下目标：

- Clearly communicates the Vibe Coding value proposition  
  - 清晰传达 Vibe Coding 的价值主张  
- Collects name and email from interested users  
  - 收集用户的姓名和电子邮箱  
- Submits data to Supabase  
  - 将数据提交到 Supabase  
- Displays the current number of total interest signups dynamically  
  - 实时动态显示总报名人数  

---

## 🧑‍💻 Target Audience  
## 🧑‍💻 目标用户

- Aspiring startup founders  
  - 有志创业者  
- Indie hackers  
  - 独立开发者  
- Solo developers or designers  
  - 单人开发者或设计师  
- Creatives with an idea but no tech experience  
  - 有创意但没有技术背景的人  
- Startup teams looking to build MVPs fast  
  - 想要快速构建 MVP 的初创团队  

---

## 📐 Features & Functional Requirements  
## 📐 功能与需求说明

### 🔹 Hero Section  
### 🔹 主视觉区（Hero Section）

**Left Side**  
**左侧内容**  

- **Headline**: `Build Your MVP in 30 Days with Vibe Coding`  
  - **标题**：使用 Vibe Coding 在30天内构建你的 MVP  
  - *Font*: `Inter`, `IBM Plex Sans`, or `Work Sans`  
    - *字体建议*：Inter、IBM Plex Sans 或 Work Sans（专业且简洁）  
  - *Tailwind Classes*: `text-4xl font-semibold`  
    - *Tailwind 类名*：`text-4xl font-semibold`（可响应式）  

- **Subtext**:  
  `A course designed to help you release your MVP fast—with weekly coaching, coding patterns, and real-world tools.`  
  - **副标题**：一个帮助你快速发布 MVP 的课程——包含每周辅导、实用编程模式与真实工具。  
  - Tailwind: `text-gray-600 text-lg mt-4`  
    - Tailwind 样式：`text-gray-600 text-lg mt-4`  

- **Interest Count Text**:  
  `🚀 126 people have signed up for early access!`  
  - **人数提示文本**：🚀 已有 126 人注册获取抢先体验！（动态展示）  

**Right Side (Form)**  
**右侧内容（表单）**

- Name (input)  
  - 姓名输入框  
- Email (input)  
  - 电子邮件输入框  
- Checkbox: Subscribe to updates, release notes, newsletter  
  - 复选框：订阅更新、版本公告与电子报  
- Submit Button: “Notify Me”  
  - 提交按钮：通知我  
- Layout: vertical stack with spacing  
  - 布局：垂直排列并带有间距  
- Styling:  
  - Input fields: `rounded-lg px-4 py-2 border border-gray-300`  
    - 输入框样式：圆角、内边距、边框  
  - Submit button: `bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800`  
    - 提交按钮样式：黑底白字、圆角、悬停变色  

---

## 📊 Supabase Integration  
## 📊 Supabase 数据集成

### Table: `interests`  
### 表格：`interests`

| Column       | Type       | Description                        |
|--------------|------------|------------------------------------|
| id           | UUID       | Primary key, auto-generated        |
| name         | Text       | User name                          |
| email        | Text       | User email                         |
| subscribed   | Boolean    | Whether subscribed to updates      |
| created_at   | Timestamp  | Auto-generated submission time     |

| 列名         | 类型       | 描述                                |
|--------------|------------|-------------------------------------|
| id           | UUID       | 主键，自动生成                      |
| name         | Text       | 用户姓名                            |
| email        | Text       | 用户电子邮件                        |
| subscribed   | Boolean    | 是否勾选订阅更新                    |
| created_at   | Timestamp  | 自动记录的提交时间                  |

---

### SQL Example  
### SQL 示例

```sql
create table interests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subscribed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
