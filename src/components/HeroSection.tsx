import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Pause, Play } from 'lucide-react';

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

      <div className="relative z-10 container mx-auto px-6">
        {/* Left: Product Value Prop */}
        <div className="flex flex-col items-start text-left max-w-4xl">
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
