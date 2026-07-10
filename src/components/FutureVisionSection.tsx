import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

// Simple particle network background
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {x: number, y: number, vx: number, vy: number}[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 30);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & draw particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist/150)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const techRadar = [
  { category: "Architecture", title: "Multi-Agent Systems", status: "Production Applied", statusColor: "green" },
  { category: "Platform", title: "Low-Code AI Platforms", status: "Core Stack", statusColor: "blue" },
  { category: "Integration", title: "Model Context Protocol (MCP)", status: "Deep Exploring", statusColor: "purple" },
  { category: "DevTools", title: "AI Coding Assistants", status: "Daily Workflow", statusColor: "amber" },
  { category: "Domain", title: "Enterprise AI Applications", status: "Continuous Focus", statusColor: "zinc" }
];

export default function FutureVisionSection() {
  return (
    <section id="roadmap" className="relative bg-[#0A0A0A] py-40 overflow-hidden text-white border-t border-zinc-800">
      {/* Background dark grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <ParticleNetwork />
      
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md mb-6"
          >
            <Terminal size={14} className="text-brand-blue" />
            <span className="text-xs font-medium text-zinc-400 font-mono">TECH_RADAR</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Engineering Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-zinc-400 font-light max-w-2xl mx-auto"
          >
            系统持续运行，架构永不停止演进。欢迎连接，共同构建下一代 AI 基础设施。
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {techRadar.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="w-32 font-mono text-sm text-zinc-500 group-hover:text-brand-blue transition-colors">
                {item.category}
              </div>
              <div className="flex-1 text-xl font-medium text-zinc-200">
                {item.title}
              </div>
              <div className="hidden md:flex items-center">
                <span className={`text-xs font-mono px-3 py-1.5 rounded border ${
                  item.statusColor === 'green' ? 'text-green-400 border-green-400/30 bg-green-400/10' :
                  item.statusColor === 'blue' ? 'text-brand-blue border-brand-blue/30 bg-brand-blue/10' :
                  item.statusColor === 'purple' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' :
                  item.statusColor === 'amber' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
                  'text-zinc-400 border-zinc-700 bg-zinc-800/50'
                }`}>
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}

          {/* End of System Marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 text-center flex flex-col items-center justify-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-600">SYSTEM_IDLE // WAITING_FOR_INPUT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}