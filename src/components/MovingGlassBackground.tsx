import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';

export default function MovingGlassBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stable random shapes so they don't jump on re-renders
  const shapes = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    width: Math.random() * 200 + 150,
    height: Math.random() * 200 + 150,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    xArray: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
    yArray: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
  })), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-[2rem] btn-3d-glass pointer-events-auto cursor-default"
          style={{
            width: shape.width,
            height: shape.height,
            left: shape.left,
            top: shape.top,
            marginLeft: -shape.width / 2,
            marginTop: -shape.height / 2,
          }}
          animate={{
            x: shape.xArray,
            y: shape.yArray,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
