import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Gamepad2, Cpu, Activity } from 'lucide-react';

const careerSteps = [
  {
    id: 'step-1',
    type: 'BASE_SYSTEM',
    title: '虚拟现实技术专业',
    subtitle: '游戏开发方向',
    duration: 'Education',
    description: '构建计算机图形学与软件工程基础。',
    tags: ['Unity', 'C#', 'C++', 'MySQL'],
    icon: GraduationCap,
    color: 'text-zinc-500',
    bgColor: 'bg-zinc-100',
    borderColor: 'border-zinc-200'
  },
  {
    id: 'step-2',
    type: 'MODULE_INIT',
    title: 'Unity 开发实习',
    subtitle: '游戏开发与智能体探索',
    duration: '6 个月',
    description: '深入游戏引擎底层机制，并开始熟悉 AI 算法在游戏 NPC 与环境交互中的初步应用。',
    tags: ['Game Engine', 'Game AI', 'Scripting'],
    icon: Gamepad2,
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'step-3',
    type: 'MAIN_PROCESS',
    title: 'AI Product Engineer',
    subtitle: '核心系统研发与架构设计',
    duration: '14 个月',
    description: '负责核心应用开发、低代码平台搭建与自动化工作流设计，同时熟悉并主导了整体研发项目管理，完成从“写代码”到“造系统”的跨越。',
    tags: ['App Dev', 'Low-Code', 'Workflow', 'Project Management'],
    icon: Cpu,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];

export default function CareerSection() {
  return (
    <section id="career" className="bg-white py-32 border-t border-zinc-200/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-md mb-6"
          >
            <Terminal size={14} className="text-zinc-500" />
            <span className="text-xs font-medium text-zinc-600 font-mono">EXECUTION_TRACE</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight"
          >
            Career Trajectory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-zinc-500 font-light"
          >
            系统生命周期日志：从底层游戏引擎基座，到 AI 产品工程引擎的主进程。
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[28px] md:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent transform md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 relative z-10">
            {careerSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node / Icon */}
                <div className="absolute left-[8px] md:left-[50%] md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-zinc-200 shadow-sm z-20">
                  <step.icon size={18} className={step.color} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
                }`}>
                  <div className="bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                      <span className="text-[10px] font-mono text-zinc-400 mb-2 flex items-center gap-1">
                        <Activity size={10} /> {step.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">{step.title}</h3>
                      <div className="text-brand-blue font-medium text-sm mb-1">{step.subtitle}</div>
                      <div className="text-xs text-zinc-400 font-mono bg-zinc-50 px-2 py-0.5 rounded mt-1">{step.duration}</div>
                    </div>
                    
                    <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {step.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-mono px-2 py-1 rounded-md border ${step.bgColor} ${step.borderColor} ${step.color}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
