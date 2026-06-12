import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { motion } from 'motion/react';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.4em] text-primary mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
          >
            SELECTED <span className="text-primary italic">WORKS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
