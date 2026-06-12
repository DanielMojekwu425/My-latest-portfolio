import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant hover:border-primary/30 transition-all duration-500"
    >
      {/* Image/Video Container */}
      <div className="relative aspect-video overflow-hidden">
        {project.video ? (
          <div className="relative w-full h-full">
            <video
              src={project.video}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              muted
              loop
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                <Play className="text-primary fill-primary" size={24} />
              </div>
            </div>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-surface-container text-foreground/60 border border-outline-variant"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
        >
          Explore Project <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}
