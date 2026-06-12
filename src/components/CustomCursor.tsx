import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Use motion values directly for ultra-smooth 60fps+ performance without React re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the trailing elements
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.5 });

  const slowX = useSpring(cursorX, { damping: 40, stiffness: 150, mass: 0.8 });
  const slowY = useSpring(cursorY, { damping: 40, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Trigger hover effect on links, buttons, and main headings
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive') ||
        target.tagName === 'H1' || 
        target.tagName === 'H2'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      {/* Deep Ambient Glow (Slowest) */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-[80px] pointer-events-none z-30"
        style={{
          x: slowX,
          y: slowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Hollow Trailing Ring (Medium) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-primary/50 mix-blend-screen"
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          opacity: isHovering ? 0 : 1, // Fade out when hovering to let the main dot shine
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Main Solid Dot with Difference Blend (Fastest/Instant) */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          width: isHovering ? 80 : 12,
          height: isHovering ? 80 : 12,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
