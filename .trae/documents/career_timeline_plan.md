# 职业轨迹 (Career Timeline) 模块实施计划

## 1. 目标概述
根据用户的反馈，无需在页面最后添加“AI 思考”相关的冗余内容，而是回归求职网页的本质，补充**“职业轨迹 (Career Timeline)”**。
需要将用户提供的三段经历（教育背景、实习、全职）转化为符合当前“AI OS”系统感设计的视觉模块，作为系统的“执行日志 (Execution Trace)”或“生命周期 (Lifecycle)”展示。

## 2. 需求分析与数据映射
用户提供的经历数据：
1. **基座 (Education)**：虚拟现实技术专业 —— 游戏开发方向（Unity / C# / C++ / MySQL）
2. **初始化 (Internship)**：Unity 开发实习（6个月）—— 熟悉 AI 在游戏中的应用
3. **主进程 (Full-time)**：AI 产品工程师（14个月）—— 应用开发 / 低代码 / 工作流搭建，并熟悉研发项目管理

## 3. 具体修改方案

### 3.1 创建新组件 `src/components/CareerSection.tsx`
- **设计理念**：采用“系统运行日志 (System Log / Execution Trace)”的垂直时间线设计，使用左侧连线（类似 Git 分支或进程线）串联起三段经历。
- **UI 风格**：
  - 背景色：延续系统的深色或浅色卡片风格（建议采用白底/灰底以衔接上下文）。
  - 动效：利用 `framer-motion` 实现向下滚动时各个时间节点依次点亮/滑入的效果。
  - 图标：使用 `lucide-react` 的相关图标（如 `GraduationCap` 对应教育，`Gamepad2` 对应游戏实习，`Terminal` 或 `Cpu` 对应 AI 产品工程师）。
- **内容结构**：将上述三段经历定义为一个常量数组 `careerSteps` 进行循环渲染。

### 3.2 更新入口文件 `src/App.tsx`
- **引入组件**：`import CareerSection from './components/CareerSection';`
- **页面布局**：将 `<CareerSection />` 插入到 `<ExperienceSection />` (Case Studies) 和 `<FutureVisionSection />` 之间，形成从“项目落地”到“个人发展轨迹”再到“未来愿景”的平滑过渡。

## 4. 验证步骤
1. 保存代码后，在集成的开发浏览器中预览 `http://localhost:5173/` (或当前运行端口)。
2. 向下滚动到 Case Study 之后，确认时间线组件成功渲染。
3. 检查上下滚动的 Framer Motion 动画是否流畅，连线对齐是否准确。
4. 确认文案的拼写和中英混排符合规范（如“AI Product Engineer”、“Unity”、“MySQL”等）。