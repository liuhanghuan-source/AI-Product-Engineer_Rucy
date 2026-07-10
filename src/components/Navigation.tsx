import { motion } from 'framer-motion';
import { Command, Cpu, LayoutGrid, Map } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
    >
      <div className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-zinc-200/50 shadow-sm shadow-zinc-200/20 rounded-full px-6 py-3 flex items-center gap-8">
        <a href="#hero" className="flex items-center gap-2 text-zinc-900 font-medium">
          <Command size={18} className="text-zinc-900" />
          <span>AI Engineer OS</span>
        </a>
        
        <div className="w-px h-4 bg-zinc-200"></div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
          <a href="#workflow-lab" className="hover:text-zinc-900 transition-colors flex items-center gap-1.5">
            <Cpu size={14} />
            Lab
          </a>
          <a href="#case-studies" className="hover:text-zinc-900 transition-colors flex items-center gap-1.5">
            <LayoutGrid size={14} />
            Cases
          </a>
          <a href="#roadmap" className="hover:text-zinc-900 transition-colors flex items-center gap-1.5">
            <Map size={14} />
            Roadmap
          </a>
        </div>
      </div>
    </motion.nav>
  );
}