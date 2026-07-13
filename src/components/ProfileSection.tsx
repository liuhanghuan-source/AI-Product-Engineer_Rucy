import { motion } from 'framer-motion';
import { MapPin, Mail, Cpu, Code, Network, Glasses, Settings, Terminal, Activity, Gamepad2 } from 'lucide-react';

const careerSteps = [
  {
    id: 'step-2',
    type: 'MODULE_INIT',
    title: 'Unity 开发实习',
    subtitle: '游戏开发与智能体探索',
    period: '2024.09 – 2025.05',
    description: '深入游戏引擎底层机制，并开始熟悉 AI 算法在游戏 NPC 与环境交互中的初步应用。',
    tags: ['Game Engine', 'Game AI', 'Scripting'],
    icon: Gamepad2,
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'step-3',
    type: 'MAIN_PROCESS',
    title: 'AI Product Engineer',
    subtitle: '核心系统研发与架构设计',
    period: '2025.06 – 至今',
    description: '负责核心应用开发、低代码平台搭建与自动化工作流设计，同时熟悉并主导了整体研发项目管理，完成从“写代码”到“造系统”的跨越。',
    tags: ['App Dev', 'Low-Code', 'Workflow', 'Project Management'],
    icon: Cpu,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
];

export default function ProfileSection() {
  return (
    <section id="profile" className="relative bg-[#FAFAFA] py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT: Personal Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden"
          >
            {/* Window Header */}
            <div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="ml-3 text-xs font-mono text-zinc-400">profile.json</span>
            </div>

            <div className="p-6 sm:p-8">
              {/* Header: Avatar + Name/Role + Address */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-center">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.png`}
                  alt="Rucy"
                  className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1 min-w-0 text-center sm:text-left space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-zinc-900">Rucy</h2>
                    <div className="text-sm text-brand-blue font-medium flex items-center justify-center sm:justify-start gap-2 mt-1">
                      <Cpu size={16} className="text-brand-blue" />
                      <span>AI Product Engineer</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-zinc-500">
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:text-zinc-900 transition-colors">
                      <MapPin size={16} className="text-zinc-400" />
                      <span className="text-sm font-medium">杭州, 中国</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:text-zinc-900 transition-colors">
                      <Mail size={16} className="text-zinc-400" />
                      <a href="mailto:liuhanghuan@qq.com" className="text-sm font-medium hover:text-brand-blue transition-colors">Liuhanghuan@qq.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me + Tech Stack */}
              <div className="mt-8 pt-8 border-t border-zinc-100 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-3">About Me</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                    专注于 <span className="text-brand-blue">AI 应用</span>、<span className="text-emerald-600">智能体系统</span>开发，具备产品规划、技术方案设计以及项目落地经验，致力于探索 AI 与各项工作相结合的新型产品体验。
                  </p>
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono mb-3">CURRENT_STACK</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono bg-zinc-100 text-zinc-700 px-2 py-1 rounded border border-zinc-200">Workflow</span>
                    <span className="text-[10px] font-mono bg-zinc-100 text-zinc-700 px-2 py-1 rounded border border-zinc-200">Multi-Agent</span>
                    <span className="text-[10px] font-mono bg-zinc-100 text-zinc-700 px-2 py-1 rounded border border-zinc-200">Low-Code</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mt-8">
                <h3 className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-3">Focus Areas</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                      <Code size={16} />
                    </span>
                    <span className="text-zinc-700 font-semibold text-sm">AI 应用开发</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500">
                      <Network size={16} />
                    </span>
                    <span className="text-zinc-700 font-semibold text-sm">Agent 智能体系统</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <Glasses size={16} />
                    </span>
                    <span className="text-zinc-700 font-semibold text-sm">VR 交互体验</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                      <Settings size={16} />
                    </span>
                    <span className="text-zinc-700 font-semibold text-sm">自动化工程</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Career Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden"
          >
            {/* Window Header */}
            <div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="ml-3 text-xs font-mono text-zinc-400">career.log</span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Terminal size={14} className="text-zinc-400" />
                <h3 className="text-xs font-bold text-zinc-500 font-mono tracking-[0.2em] uppercase">Career Trajectory</h3>
              </div>

              {/* Vertical Timeline */}
              <div className="relative">
                <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent"></div>
                <div className="flex flex-col gap-6 relative z-10">
                  {careerSteps.map((step) => (
                    <div key={step.id} className="relative pl-12">
                      {/* Node */}
                      <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-zinc-200 shadow-sm z-20">
                        <step.icon size={18} className={step.color} />
                      </div>
                      {/* Content Card */}
                      <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-base font-bold text-zinc-900 leading-snug">{step.title}</h4>
                          <span className="flex-shrink-0 text-[10px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200 whitespace-nowrap mt-0.5">
                            {step.period}
                          </span>
                        </div>
                        <div className="text-brand-blue font-medium text-xs mb-2">{step.subtitle}</div>
                        <p className="text-zinc-500 font-light text-xs leading-relaxed mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {step.tags.map((tag) => (
                            <span key={tag} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${step.bgColor} ${step.borderColor} ${step.color}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
