import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { motion } from 'motion/react';
import * as THREE from 'three';
import {
  SiTypescript, SiReact, SiNodedotjs, SiPython, SiHtml5, SiCss,
  SiGit, SiSpringboot, SiPostgresql, SiMongodb, SiFigma, SiBlender
} from 'react-icons/si';
import { FaJava, FaPalette, FaAward, FaAws } from 'react-icons/fa';
import { MdOutlineDesignServices, MdMovieFilter } from 'react-icons/md';
import { TbBox } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const DEV_SKILLS: Skill[] = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JAVA', icon: FaJava, color: '#007396' },
  { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];

const DESIGN_SKILLS: Skill[] = [
  { name: 'Graphics Design', icon: FaPalette, color: '#FF61F6' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Motion Graphics', icon: MdMovieFilter, color: '#FFD600' },
  { name: 'Branding', icon: FaAward, color: '#FFB800' },
  { name: '3D Modeling', icon: TbBox, color: '#00FF85' },
];

function SkillIcon3D({ color, Icon }: { color: string; Icon: IconType }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.4;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <group ref={groupRef}>
        <Html transform center scale={0.5}>
          <div 
            className="pointer-events-none flex items-center justify-center"
            style={{ 
              color: color,
              filter: `
                drop-shadow(1px 1px 0px ${color}80)
                drop-shadow(2px 2px 0px ${color}60)
                drop-shadow(3px 3px 0px ${color}40)
                drop-shadow(0px 10px 15px rgba(0,0,0,0.5))
                drop-shadow(0px 0px 30px ${color}60)
              `
            }}
          >
            <Icon size={120} />
          </div>
        </Html>
      </group>
    </Float>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex flex-col items-center p-6 rounded-2xl glass border border-outline-variant hover:border-primary/50 transition-all duration-500"
    >
      <div className="w-24 h-24 mb-4">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillIcon3D color={skill.color} Icon={skill.icon} />
        </Canvas>
      </div>

      <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ color: skill.color }}>
        <skill.icon />
      </div>

      <h4 className="text-sm font-display font-bold tracking-wider text-foreground/80 group-hover:text-primary transition-colors">
        {skill.name}
      </h4>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.4em] text-primary mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
          >
            TECHNICAL <span className="text-primary italic">SKILLS</span>
          </motion.h2>
        </div>

        <div className="space-y-20">
          {/* Development Skills */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 text-foreground/40 uppercase tracking-widest border-l-2 border-primary pl-4">
              Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {DEV_SKILLS.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 text-foreground/40 uppercase tracking-widest border-l-2 border-tertiary pl-4">
              Design & Creative
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {DESIGN_SKILLS.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
