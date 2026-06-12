import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

import profileImage from './assets/WhatsApp Image 2026-02-08 at 18.29.06.jpeg';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(aboutScroll, [0, 1], [0, -100]);
  const y2 = useTransform(aboutScroll, [0, 1], [0, 100]);
  const rotate = useTransform(aboutScroll, [0, 1], [0, 15]);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section (Enhanced) */}
        <section id="about" ref={aboutRef} className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
          {/* Decorative Elements */}
          <motion.div 
            style={{ y: y1, rotate }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" 
          />
          <motion.div 
            style={{ y: y2, rotate: -rotate }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl -z-10" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-tertiary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-outline-variant shadow-2xl">
                <img
                  src={profileImage}
                  alt="Daniel Mojekwu"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Stats */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 p-4 glass rounded-2xl border border-outline-variant"
                >
                  <span className="text-3xl font-display font-bold text-primary">5+</span>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/60">Years Experience</p>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-mono uppercase tracking-[0.4em] text-primary mb-6 block"
              >
                The Architect
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-10 leading-[0.9]"
              >
                BEYOND THE <span className="text-primary italic">PIXELS</span> AND THE <span className="text-tertiary italic">CODE</span>
              </motion.h2>
              
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-12">
                <p>
                  I'm <span className="text-foreground font-bold">Daniel Mojekwu</span>, a digital architect who believes that software should be as beautiful as it is functional. 
                  My journey started with a fascination for how things work, which evolved into a passion for how they feel.
                </p>
                <p>
                  I don't just write code; I design systems. I don't just build interfaces; I craft experiences. 
                  Whether it's a high-performance backend or a fluid 3D interaction, I bring a level of precision and soul that sets my work apart.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 glass rounded-xl border border-outline-variant">
                  <span className="text-sm font-mono text-primary">01</span>
                  <h4 className="font-display font-bold">Problem Solver</h4>
                </div>
                <div className="px-6 py-3 glass rounded-xl border border-outline-variant">
                  <span className="text-sm font-mono text-tertiary">02</span>
                  <h4 className="font-display font-bold">Creative Thinker</h4>
                </div>
                <div className="px-6 py-3 glass rounded-xl border border-outline-variant">
                  <span className="text-sm font-mono text-primary">03</span>
                  <h4 className="font-display font-bold">Tech Enthusiast</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />

        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  );
}
