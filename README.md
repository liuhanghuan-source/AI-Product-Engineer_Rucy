# AI Operating System Portfolio

这是一个以"AI操作系统"为设计理念的个人作品集网站，展示AI产品工程师的工作流程、系统思维和工程能力。

## 项目概述

本网站旨在展示作为AI产品工程师的专业技能，专注于：
- Workflow设计与实现
- 多智能体系统（Multi-Agent Systems）
- 知识工程
- 数据工程
- 系统架构设计

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式设计
- **Framer Motion** - 动画效果
- **Lenis** - 平滑滚动
- **Lucide React** - 图标库

## 开发环境设置

1. 确保已安装 Node.js (版本 >= 18.x)

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 在浏览器中访问 `http://localhost:5173`

## 项目结构

```
src/
├── components/          # 可复用UI组件
│   ├── HeroSection.tsx  # 首页个人资料
│   ├── PhilosophySection.tsx  # 能力展示区
│   ├── ExperienceSection.tsx  # 项目案例
│   ├── CareerSection.tsx      # 职业历程
│   ├── FutureVisionSection.tsx # 技术焦点
│   └── Navigation.tsx   # 导航栏
├── pages/               # 页面组件
├── assets/              # 静态资源
├── hooks/               # 自定义hooks
└── lib/                 # 工具函数
```

## 生产构建

生成生产版本：
```bash
npm run build
```

这将在 `dist/` 目录中生成生产版本的文件。

## 预览生产版本

本地预览生产构建：
```bash
npm run preview
```

## 扩展指南

此项目采用高度模块化的架构，便于扩展：

1. **添加新项目案例**：在 `ExperienceSection.tsx` 中添加新的案例对象
2. **添加新技能展示**：在 `PhilosophySection.tsx` 中添加新的能力卡片
3. **添加职业里程碑**：在 `CareerSection.tsx` 中添加新的时间线节点
4. **更新技术焦点**：在 `FutureVisionSection.tsx` 中调整技术雷达

## 配置域名

要在生产环境中部署并配置域名，请遵循以下步骤：

1. 构建项目：`npm run build`
2. 将 `dist/` 目录中的文件上传到你的托管服务（如 Netlify、Vercel、AWS S3 等）
3. 在你的域名注册商处配置 DNS 记录指向托管服务
4. 在托管服务中配置自定义域名

## 故障排除

如果遇到问题，请尝试：

1. 清除缓存：`npm run clean`（如存在）
2. 重新安装依赖：删除 `node_modules` 和 `package-lock.json`，然后运行 `npm install`
3. 检查端口冲突：如果默认端口被占用，Vite 会自动选择其他端口

## 贡献

该项目现在完全独立于TRAE环境，可以在任何支持Node.js的环境中进行开发和维护。