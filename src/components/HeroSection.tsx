import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, MapPin, Mail, Cpu, Code, Network, Glasses, Settings, Pause, Play } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
      </video>

      {/* Overlays for readability */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base darkening */}
        <div className="absolute inset-0 bg-slate-900/70" />
        {/* Left-heavy gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
        {/* Soft top/bottom gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Product Value Prop */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-md shadow-sm mb-6"
          >
            <Activity size={14} className="text-brand-blue" />
            <span className="text-xs font-medium text-white/90 font-mono tracking-tight">SYSTEM_STATUS: ONLINE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            The Operating System for <br />
            <span className="text-cyan-200">AI Products.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 pl-5 border-l-[3px] border-cyan-400/60"
          >
            <p className="text-xl font-medium text-white tracking-tight mb-2">
              "Design the right AI architecture for the right problem."
            </p>
            <p className="text-sm text-zinc-300 font-light">
              不是为了 AI 而用 AI，而是为不同的问题选择最合适的 AI 架构。
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg text-zinc-300 font-light leading-relaxed mb-10"
          >
            专注于通过 Workflow、Agent、知识工程和数据工程，将复杂业务沉淀为可持续演进的 AI 系统。这不是一份简历，而是一个正在运行的产品引擎。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#workflow-lab" className="group flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors">
              Explore Capabilities
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#case-studies" className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors shadow-sm">
              View Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right: Personal Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-1000"
        >
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
            {/* Window Header */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Window Content - Personal Profile */}
            <div className="p-6">
              <div className="flex flex-col gap-5">
                {/* Header: Name & Role + Address, avatar centered across both */}
                <div className="flex items-center gap-5 pb-4 border-b border-white/10">
                  <div className="flex-1 min-w-0 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1.5">Rucy</h2>
                      <div className="text-sm text-brand-blue font-medium flex items-center gap-2">
                        <Cpu size={16} className="text-brand-blue" />
                        <span>AI Product Engineer</span>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-zinc-400">
                          <MapPin size={16} />
                        </div>
                        <span className="text-sm font-medium">杭州, 中国</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-zinc-400">
                          <Mail size={16} />
                        </div>
                        <a href="mailto:liuhanghuan@qq.com" className="text-sm font-medium hover:text-brand-blue transition-colors">Liuhanghuan@qq.com</a>
                      </div>
                    </div>
                  </div>
                  {/* Large Avatar - centered across Name & Address */}
                  <img
                    src={`${import.meta.env.BASE_URL}avatar.png`}
                    alt="Rucy"
                    className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-inner"
                  />
                </div>

                {/* Body: About Me & Focus Areas */}
                <div className="pt-6 space-y-4">
                  {/* About Me Section */}
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-3">About Me</h3>
                    <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                      专注于 <span className="text-brand-blue">AI 应用</span>、<span className="text-emerald-400">智能体系统</span>开发，具备产品规划、技术方案设计以及项目落地经验，致力于探索 AI 与各项工作相结合的新型产品体验。
                    </p>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-3">Focus Areas</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
                          <Code size={16} />
                        </span>
                        <span className="text-zinc-100 font-semibold text-sm">AI 应用开发</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                          <Network size={16} />
                        </span>
                        <span className="text-zinc-100 font-semibold text-sm">Agent 智能体系统</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                          <Glasses size={16} />
                        </span>
                        <span className="text-zinc-100 font-semibold text-sm">VR 交互体验</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300">
                          <Settings size={16} />
                        </span>
                        <span className="text-zinc-100 font-semibold text-sm">自动化工程</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack Tags */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-zinc-400 font-mono mb-2">CURRENT_STACK</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-1 rounded border border-white/20">Workflow</span>
                    <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-1 rounded border border-white/20">Multi-Agent</span>
                    <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-1 rounded border border-white/20">Low-Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Pause / Play control */}
      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? '暂停视频背景' : '播放视频背景'}
        title={isPlaying ? '暂停视频背景' : '播放视频背景'}
        className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </section>
  );
}
