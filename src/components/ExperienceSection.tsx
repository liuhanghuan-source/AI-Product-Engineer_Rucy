import { motion } from 'framer-motion';
import { LayoutGrid, ArrowRight, BarChart3, Zap, BrainCircuit, Database, Bot, Layers, FolderGit2, ShieldCheck, Workflow, Stethoscope, FileSearch, ArrowDownToLine } from 'lucide-react';

const cases = [
  {
    id: 'pimax-play-service',
    title: 'Pimax Play',
    subtitle: 'Intelligent Service & Diagnostic System',
    role: 'System Analyst / AI Product Engineer',
    period: '2023 - 2024',
    description: '针对传统硬件售后“排查难、流转慢、断层多”的痛点，我为 Pimax PC 端管理软件（Pimax Play）重新规划了服务架构。通过构建端侧自检引擎与 AI 驱动的售后工作流闭环，实现了从“被动响应”到“主动诊断”的体验升级，并在实践中持续突破性能瓶颈完成架构演进。',
    methodologies: [
      {
        icon: Stethoscope,
        title: '端侧自检引擎',
        desc: '梳理软硬件映射模型，建立 CPU/GPU 算力评级与头显驱动知识库。实现本地一键硬件兼容性诊断与自动化配置建议。'
      },
      {
        icon: Workflow,
        title: '服务流程闭环',
        desc: '重构售后链路：整合 Freshchat (IM) 与飞书低代码平台，实现 IM 对话与工单系统的无缝流转，打破大文件传输与跨端协作瓶颈。'
      },
      {
        icon: BrainCircuit,
        title: 'AI 工作流编排',
        desc: '引入飞书 Aily 搭建智能客服 Agent。通过知识库 RAG 匹配与诊断日志解析，在人工介入前实现高比例的工单自动拦截与方案输出。'
      },
      {
        icon: FileSearch,
        title: '架构优化：群聊分析 Agent',
        desc: '发现传统工作流分析复杂日志耗时过长，将其重构为“群聊智能体”模式。由各模块开发负责人针对各自代码提供定制化 Skill 接入 Agent，在飞书中实现低延迟、多方协同的日志排查。'
      }
    ],
    metrics: [
      { label: 'Issue Resolution', value: 'Automated' },
      { label: 'Service Workflow', value: 'Closed-Loop' },
      { label: 'Agent Integration', value: 'Feishu Aily' }
    ],
    tags: ['System Analysis', 'Workflow', 'RAG', 'Low-Code'],
    color: 'from-emerald-500 to-teal-600',
    architectureType: 'service-arch',
    hideVisual: false
  },
  {
    id: 'pimax-app',
    title: 'Pimax App',
    subtitle: 'Official Mobile Companion App',
    role: 'AI Product Engineer',
    period: '2023 - 2024',
    description: '作为 Pimax 硬件生态的官方移动端枢纽，该应用承载了全球用户的服务与体验闭环。在此项目中，我主导了从 0 到 1 的工程基建，将重心前置于架构设计与工作流规范，确保后续业务的高效演进。',
    methodologies: [
      {
        icon: Layers,
        title: '架构选型与分层',
        desc: '确立 React Native (Expo) + TS 技术栈，设计严谨的 11 层架构（路由、业务、服务等），实现业务模块的高度解耦。'
      },
      {
        icon: Bot,
        title: 'AI 协作工作流',
        desc: '预设全局 AI 协作指令（AGENTS.md），将“边写边想”转化为“先写 Prompt 再编码”的现代化开发链路。'
      },
      {
        icon: ShieldCheck,
        title: '全链路自动化测试',
        desc: '构建坚实质量防线：Jest (单元) -> RNTL (组件) -> Appium (E2E)，并接入 GitLab CI 实现持续交付闭环。'
      }
    ],
    metrics: [
      { label: 'Layered Arch', value: '11-Tier' },
      { label: 'Delivery', value: '2-Phase' },
      { label: 'E2E Testing', value: 'Appium' }
    ],
    tags: ['React Native', 'Expo', 'Architecture', 'AI Coding'],
    color: 'from-blue-600 to-indigo-600',
    architectureType: 'mobile-arch',
    hideVisual: true
  },
  {
    id: 'ga',
    title: 'GA Data Automation',
    subtitle: 'Automated Analytics Data Pipeline',
    role: 'AI Product Engineer',
    period: '2023',
    description: '由于 Google Analytics (GA4) 默认的 Explore 报表灵活性不足，无法满足团队定制化、多维度的分析需求。我主导设计了一条完全自动化的数据工程管道，将繁琐的手动取数转化为“无感且定制”的日报/周报体系，实现了核心业务数据的流转闭环。',
    methodologies: [
      {
        icon: Zap,
        title: '自动化调度引擎',
        desc: '摒弃人工操作，利用飞书低代码平台配置定时触发器（Cron Job），每日定时启动数据获取流程。'
      },
      {
        icon: Database,
        title: 'API 数据获取与清洗',
        desc: '直接对接 GA4 Data API 获取原始 JSON 数据，并通过定制脚本进行数据清洗与结构转换，生成符合业务分析逻辑的定制化格式。'
      },
      {
        icon: BarChart3,
        title: '多端展现与刷新',
        desc: '将清洗后的结构化数据自动写入飞书数据表，支持实时多维展现（类 Excel、看板），并触发页面自动刷新，实现数据消费的“最后一公里”闭环。'
      }
    ],
    metrics: [
      { label: 'Data Retrieval', value: 'Automated' },
      { label: 'Report Generation', value: 'Daily/Weekly' },
      { label: 'Platform', value: 'Feishu Low-Code' }
    ],
    tags: ['Data Pipeline', 'GA4 API', 'ETL', 'Automation'],
    color: 'from-amber-500 to-orange-500',
    architectureType: 'data-arch',
    hideVisual: false
  }
];

export default function ExperienceSection() {
  return (
    <section id="case-studies" className="bg-[#FAFAFA] py-32 border-t border-zinc-200/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white border border-zinc-200 px-3 py-1 rounded-md mb-6"
            >
              <LayoutGrid size={14} className="text-zinc-500" />
              <span className="text-xs font-medium text-zinc-600 font-mono">CASE_STUDIES</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight"
            >
              Proven in Production
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-zinc-500 font-light"
            >
              这不是一份工作履历，而是系统引擎在真实业务环境中的落地案例与性能指标。
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {cases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className={`grid grid-cols-1 ${study.hideVisual ? '' : 'lg:grid-cols-12'}`}>
                {/* Content Side */}
                <div className={`${study.hideVisual ? 'p-8 md:p-12' : 'lg:col-span-7 p-8 md:p-12 lg:p-16'} flex flex-col justify-center`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-brand-blue">{study.role}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-2">{study.title}</h3>
                  <div className="text-xl text-zinc-400 font-light mb-8">{study.subtitle}</div>
                  
                  <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                    {study.description}
                  </p>

                  {study.methodologies && (
                    <div className={`grid grid-cols-1 ${study.methodologies.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 mb-10`}>
                      {study.methodologies.map((method, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 transition-colors cursor-default"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-brand-blue shadow-sm">
                            <method.icon size={18} />
                          </div>
                          <h4 className="font-bold text-zinc-900 mb-2 text-sm">{method.title}</h4>
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {method.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-2xl font-bold text-zinc-900 mb-1">{metric.value}</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-zinc-500 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual/Architecture Side */}
                {!study.hideVisual && (
                  <div className="lg:col-span-5 relative bg-zinc-900 overflow-hidden min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
                    {/* Abstract Graphic Background */}
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${study.color}`}></div>
                    
                    {/* Mockup Architecture Diagram */}
                    <div className="relative z-10 w-full max-w-sm">
                      {study.architectureType === 'mobile-arch' ? (
                        <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-xl p-6 shadow-2xl">
                          <div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
                            <div className="text-zinc-300 font-mono text-xs flex items-center gap-2">
                              <Layers size={14} className="text-brand-blue" />
                              System Architecture
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center text-xs text-zinc-400 font-mono">
                              React Native (Expo) Client
                            </div>
                            <div className="flex justify-center">
                              <div className="w-px h-6 bg-zinc-700"></div>
                            </div>
                            <div className="bg-zinc-800 border border-zinc-600 p-4 rounded-lg flex items-center justify-center gap-3 shadow-inner">
                              <Bot size={20} className="text-purple-400" />
                              <span className="text-zinc-200 text-sm font-medium">Global AI Instructions</span>
                            </div>
                            <div className="flex justify-center gap-16">
                              <div className="w-px h-6 bg-zinc-700"></div>
                              <div className="w-px h-6 bg-zinc-700"></div>
                            </div>
                            <div className="flex justify-between gap-4">
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <FolderGit2 size={16} className="text-zinc-500" />
                                <span className="text-[10px] text-zinc-500 font-mono">11-Tier Routing</span>
                              </div>
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <Database size={16} className="text-zinc-500" />
                                <span className="text-[10px] text-zinc-500 font-mono">Service Layer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : study.architectureType === 'service-arch' ? (
                        <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-xl p-6 shadow-2xl">
                          <div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
                            <div className="text-zinc-300 font-mono text-xs flex items-center gap-2">
                              <Workflow size={14} className="text-emerald-400" />
                              Service Workflow Engine
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between gap-3">
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <span className="text-[10px] text-zinc-400 font-mono">Freshchat IM</span>
                              </div>
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <span className="text-[10px] text-zinc-400 font-mono">PC Diagnostic Logs</span>
                              </div>
                            </div>
                            <div className="flex justify-center my-1">
                              <div className="w-px h-4 bg-zinc-700"></div>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-lg flex flex-col items-center justify-center gap-2 shadow-inner relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 blur-xl rounded-full"></div>
                              <BrainCircuit size={20} className="text-emerald-400" />
                              <span className="text-zinc-200 text-sm font-medium">Feishu Aily Agent</span>
                              <span className="text-[10px] text-zinc-400 font-mono">RAG / Intent Matching</span>
                            </div>
                            <div className="flex justify-center gap-16 my-1">
                              <div className="w-px h-4 bg-zinc-700"></div>
                              <div className="w-px h-4 bg-zinc-700"></div>
                            </div>
                            <div className="flex justify-between gap-3">
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2 opacity-60">
                                <span className="text-[10px] text-zinc-500 font-mono">Auto Resolved</span>
                              </div>
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2 border-dashed">
                                <span className="text-[10px] text-amber-400 font-mono">Low-Code Ticket</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : study.architectureType === 'data-arch' ? (
                        <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-xl p-6 shadow-2xl">
                          <div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
                            <div className="text-zinc-300 font-mono text-xs flex items-center gap-2">
                              <Database size={14} className="text-amber-400" />
                              Automated Data Pipeline
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex items-center justify-between gap-2">
                              <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1"><Zap size={12}/> Cron Trigger (09:00)</span>
                            </div>
                            <div className="flex justify-center my-0.5">
                              <ArrowDownToLine size={14} className="text-zinc-600" />
                            </div>
                            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg flex items-center justify-between shadow-inner">
                              <span className="text-zinc-200 text-sm font-medium">GA4 Data API</span>
                              <span className="text-[10px] text-amber-400 font-mono bg-amber-400/10 px-2 py-1 rounded">Fetch JSON</span>
                            </div>
                            <div className="flex justify-center my-0.5">
                              <ArrowDownToLine size={14} className="text-zinc-600" />
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-1">
                              <span className="text-zinc-300 text-xs font-mono">Format Transformation</span>
                              <span className="text-[10px] text-zinc-500">Custom Business Logic</span>
                            </div>
                            <div className="flex justify-center my-0.5">
                              <ArrowDownToLine size={14} className="text-zinc-600" />
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg flex items-center justify-between shadow-inner">
                              <span className="text-zinc-200 text-sm font-medium">Feishu Data Table</span>
                              <span className="text-[10px] text-blue-400 font-mono bg-blue-400/10 px-2 py-1 rounded">Auto Refresh</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 rounded-xl p-6 shadow-2xl">
                          <div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
                            <div className="text-zinc-300 font-mono text-xs flex items-center gap-2">
                              <Zap size={14} className="text-amber-400" />
                              Architecture Overview
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center text-xs text-zinc-400 font-mono">
                              Client Interface
                            </div>
                            <div className="flex justify-center">
                              <div className="w-px h-6 bg-zinc-700"></div>
                            </div>
                            <div className="bg-zinc-800 border border-zinc-600 p-4 rounded-lg flex items-center justify-center gap-3 shadow-inner">
                              <BrainCircuit size={20} className="text-brand-blue" />
                              <span className="text-zinc-200 text-sm font-medium">Core Agent Engine</span>
                            </div>
                            <div className="flex justify-center gap-16">
                              <div className="w-px h-6 bg-zinc-700"></div>
                              <div className="w-px h-6 bg-zinc-700"></div>
                            </div>
                            <div className="flex justify-between gap-4">
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <Database size={16} className="text-zinc-500" />
                                <span className="text-[10px] text-zinc-500 font-mono">Vector Store</span>
                              </div>
                              <div className="flex-1 bg-zinc-900/50 border border-zinc-700 p-3 rounded text-center flex flex-col items-center gap-2">
                                <BarChart3 size={16} className="text-zinc-500" />
                                <span className="text-[10px] text-zinc-500 font-mono">Metrics API</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}