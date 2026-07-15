import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, Database, Network, Code2, Zap } from 'lucide-react';

const capabilities = [
  {
    id: 'workflow',
    title: 'Workflow Orchestration',
    description: '设计与编排复杂的业务工作流，将非结构化人工经验转化为确定性的系统执行路径。',
    icon: Workflow,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    tags: ['BPMN', 'DAG', 'State Machine']
  },
  {
    id: 'agent',
    title: 'Autonomous Agents',
    description: '开发具备感知、规划与执行能力的智能体，实现从被动响应到主动解决问题。',
    icon: BrainCircuit,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    tags: ['ReAct', 'Multi-Agent', 'Tool Use']
  },
  {
    id: 'knowledge',
    title: 'Knowledge Engineering',
    description: '构建 RAG 架构与知识图谱，为 AI 系统注入精准的业务上下文与长期记忆。',
    icon: Network,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    tags: ['Vector DB', 'Graph', 'RAG']
  },
  {
    id: 'data',
    title: 'Data Pipelines',
    description: '搭建高吞吐量的数据管道与反馈飞轮，通过高质量数据驱动模型持续迭代。',
    icon: Database,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    tags: ['ETL', 'Stream', 'Data Quality']
  },
  {
    id: 'coding',
    title: 'AI Coding & DevTools',
    description: '构建辅助开发的 AI 工具链，提升研发团队的整体交付效率与代码质量。',
    icon: Code2,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    tags: ['Copilot', 'CLI', 'IDE Extension']
  },
  {
    id: 'lowcode',
    title: 'Low-Code AI Platforms',
    description: '设计并实现低代码平台架构，让业务人员能够可视化地搭建和部署 AI 应用。',
    icon: Zap,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
    tags: ['Visual Editor', 'DSL', 'Platform']
  }
];

export default function WorkflowLab() {
  return (
    <section id="workflow-lab" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight"
            >
              Capabilities Lab
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-zinc-500 font-light leading-relaxed"
            >
              作为 AI Product Engineer 与系统分析师，我擅长将复杂的业务需求解构并转化为可靠的系统蓝图。以下是我在架构设计、工作流编排、Agent 开发与数据工程等领域的核心能力矩阵，它们构成了我落地 AI 产品的底层引擎。
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-zinc-100 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`w-12 h-12 rounded-xl ${cap.bgColor} ${cap.color} flex items-center justify-center mb-6 relative z-10`}>
                <cap.icon size={24} strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-3 relative z-10">{cap.title}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8 relative z-10">
                {cap.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {cap.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono bg-zinc-50 border border-zinc-100 text-zinc-500 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
