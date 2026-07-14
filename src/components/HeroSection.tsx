import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import heroVideo from '../assets/hero.mp4';
import heroPoster from '../assets/hero-poster.jpg';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // iOS Safari 需要 muted 既作为 attribute 也作为 property 才真正允许自动播放
    video.muted = true;
    video.setAttribute('muted', '');
    video.play().catch(() => {
      // 某些移动浏览器/低电量模式下仍可能拒绝自动播放，忽略错误
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroPoster}
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-6">
        {/* Left: Product Value Prop */}
        <div className="flex flex-col items-start text-left max-w-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
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
            <p className="text-sm text-white/85 font-light">
              不是为了 AI 而用 AI，而是为不同的问题选择最合适的 AI 架构。
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg text-white/85 font-light leading-relaxed mb-10"
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
    </section>
  );
}
