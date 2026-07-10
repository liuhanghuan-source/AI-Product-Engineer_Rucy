import { motion } from 'framer-motion';
import { Terminal, Database, ArrowRight, Activity, MapPin, Mail, Briefcase } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      {/* OS Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-blue opacity-[0.08] blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Product Value Prop */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-md border border-zinc-200/60 shadow-sm mb-6"
          >
            <Activity size={14} className="text-brand-blue" />
            <span className="text-xs font-medium text-zinc-600 font-mono tracking-tight">SYSTEM_STATUS: ONLINE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-zinc-900 tracking-tight leading-[1.1] mb-8"
          >
            The Operating System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500">AI Products.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 pl-5 border-l-[3px] border-brand-blue/60"
          >
            <p className="text-xl font-medium text-zinc-800 tracking-tight mb-2">
              "Design the right AI architecture for the right problem."
            </p>
            <p className="text-sm text-zinc-500 font-light">
              不是为了 AI 而用 AI，而是为不同的问题选择最合适的 AI 架构。
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg text-zinc-500 font-light leading-relaxed mb-10"
          >
            专注于通过 Workflow、Agent、知识工程和数据工程，将复杂业务沉淀为可持续演进的 AI 系统。这不是一份简历，而是一个正在运行的产品引擎。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <a href="#workflow-lab" className="group flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
              Explore Capabilities
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#case-studies" className="flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors shadow-sm">
              View Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right: Abstract System UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-1000"
        >
          <div className="relative bg-white/60 backdrop-blur-xl border border-zinc-200/50 rounded-2xl shadow-2xl overflow-hidden transform-gpu rotate-y-[-5deg] rotate-x-[5deg]">
            {/* Window Header */}
            <div className="h-10 bg-zinc-100/50 border-b border-zinc-200/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs text-zinc-400 font-mono bg-white/50 px-2 py-1 rounded">
                <Terminal size={12} />
                <span>profile_config.json</span>
              </div>
            </div>
            
            {/* Window Content - Personal Profile */}
            <div className="p-6">
              <div className="flex flex-col gap-5 relative">
                {/* Header: Name & Role with large avatar */}
                <div className="flex items-start gap-4 pb-4 border-b border-zinc-100">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-zinc-900">Rucy</h2>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-cyan-400 flex items-center justify-center text-white text-sm font-bold shadow-inner flex-shrink-0">
                        <Briefcase size={14} />
                      </div>
                    </div>
                    <div className="text-sm text-brand-blue font-medium ml-11">
                      AI Product Engineer
                    </div>
                  </div>
                  {/* Large Avatar - Positioned in top-right corner */}
                  <div className="absolute top-0 right-0 -mt-8 -mr-2">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue to-cyan-400 flex items-center justify-center text-white text-3xl font-bold shadow-inner border-4 border-white">
                      R
                    </div>
                  </div>
                </div>

                {/* Body: Info List */}
                <div className="flex flex-col gap-3">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-zinc-600 p-2 hover:bg-zinc-50 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
                      <MapPin size={16} />
                    </div>
                    <span>杭州, 中国</span>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-zinc-600 p-2 hover:bg-zinc-50 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400">
                      <Mail size={16} />
                    </div>
                    <a href="mailto:liuhanghuan@qq.com" className="hover:text-brand-blue transition-colors">Liuhanghuan@qq.com</a>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 text-sm text-zinc-600 p-2 hover:bg-zinc-50 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-400 flex-shrink-0">
                      <Database size={16} />
                    </div>
                    <div className="leading-relaxed">
                      <p className="mb-2">专注于 AI 应用、智能体系统开发，具备产品规划、技术方案设计以及项目落地经验，致力于探索 AI 与各项工作相结合的新型产品体验。</p>
                      <p className="font-medium text-zinc-700">关注方向：</p>
                      <ul className="list-disc list-inside text-xs text-zinc-500 mt-1 space-y-0.5">
                        <li>AI 应用开发</li>
                        <li>Agent智能体系统</li>
                        <li>VR交互体验</li>
                        <li>自动化工程</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                {/* Footer: Tech Stack Tags */}
                <div className="pt-4 border-t border-zinc-100">
                  <div className="text-xs text-zinc-400 font-mono mb-2">CURRENT_STACK</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">Workflow</span>
                    <span className="text-[10px] font-mono bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-100">Multi-Agent</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100">Low-Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}