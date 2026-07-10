## 1. 架构设计
```mermaid
graph TD
    A["Frontend (React Single Page App)"]
    subgraph UI Layer
        B["Framer Motion (动画与滚动控制)"]
        C["Tailwind CSS (样式与响应式)"]
    end
    subgraph Components
        D["Hero Section"]
        E["Philosophy Section (Sticky)"]
        F["Experience Section (Scroll/Cards)"]
        G["Future Vision Section"]
    end
    A --> UI Layer
    UI Layer --> Components
```

## 2. 技术说明
- **前端框架**: React@18 + Vite
- **样式方案**: Tailwind CSS@3
- **动画库**: Framer Motion (极其适合实现复杂的基于滚动的动画、视差效果和进入视口的动画)
- **图标与字体**: Lucide React (图标), 引入 Google Fonts (如 Space Grotesk 或 Inter)
- **初始化工具**: vite-init (使用标准 `npm create vite@latest` 初始化 React + TS)
- **部署结构**: 静态站点，无需后端服务。

## 3. 路由定义
由于是单页滚动网站，实际上无需复杂的客户端路由管理器（如 react-router）。整个应用运行在根路径 `/`，通过锚点 `#` 进行页面内快速跳转（可选）。
| 路由 | 目的 |
|-------|---------|
| `/` | 承载所有模块的单页应用 |

## 4. API 定义
纯静态展示网站，无后端 API 交互。所有内容（项目经历、文案）以 JSON 或常量形式配置在前端代码中。

## 5. 数据模型
由于是纯静态展示页，不需要数据库。前端会维护一个静态数据结构用于渲染页面：

```typescript
// 静态数据结构示例
interface ProjectExperience {
  id: string;
  title: string;       // e.g., "Pimax Play"
  description: string; // 项目简介
  tags: string[];      // e.g., ["Workflow", "知识工程"]
  highlights: string[];// 核心贡献点
}

interface Philosophy {
  id: string;
  concept: string;     // e.g., "Workflow & Agent"
  description: string; // 理念阐述
}
```
