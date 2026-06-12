import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import ThreeScene from './ThreeScene';
import MovingGlassBackground from './MovingGlassBackground';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-white dark:bg-[#020510]">
      {/* Deep dark overlay for dark mode to make the glass effect pop */}
      <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent to-black/40 hidden dark:block pointer-events-none -z-10" />
      
      <ThreeScene />
      <MovingGlassBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-6 border border-primary/20">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter">
            CRAFTING <span className="text-primary italic">DIGITAL</span><br />
            EXPERIENCES
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-foreground/60 font-medium mb-10 h-8"
        >
          <TypeAnimation
            sequence={[
              'I am Daniel Mojekwu',
              2000,
              'I am a Full-Stack Developer',
              2000,
              'I am a UI/UX Designer',
              2000,
              'I build multi-dimensional web apps',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-on-primary font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowDownRight size={20} className="group-hover:rotate-45 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 glass border border-outline-variant text-foreground font-medium rounded-xl hover:bg-surface-container-highest transition-all"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
