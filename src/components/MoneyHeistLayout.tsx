'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import MoneyHeistMask from './MoneyHeistMask';

export default function MoneyHeistLayout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern Grid */}
      <div className="fixed inset-0 grid grid-cols-3 gap-4 p-8 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="opacity-[0.03] text-red-600"
            animate={{
              y: [0, 10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <MoneyHeistMask />
          </motion.div>
        ))}
      </div>

      {/* Animated Gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 40%)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Red Laser Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-[1px] bg-red-600/20"
          style={{
            top: mouseYSpring,
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)'
          }}
        />
        <motion.div
          className="absolute h-full w-[1px] bg-red-600/20"
          style={{
            left: mouseXSpring,
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)'
          }}
        />
      </div>

      {/* Glitch Effect */}
      <div className="fixed inset-0 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 animate-glitch-1 bg-red-600/5" />
        <div className="absolute inset-0 animate-glitch-2 bg-blue-600/5" />
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-scanline opacity-5" />

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>

      <style jsx global>{`
        @keyframes glitch-1 {
          0%, 100% { transform: none; opacity: 0.7; }
          50% { transform: translate3d(10px, 0, 0); opacity: 0.5; }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: none; opacity: 0.3; }
          50% { transform: translate3d(-10px, 0, 0); opacity: 0.5; }
        }

        .animate-glitch-1 {
          animation: glitch-1 4s infinite linear alternate-reverse;
        }

        .animate-glitch-2 {
          animation: glitch-2 4s infinite linear alternate-reverse;
        }

        .bg-scanline {
          background-image: repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 2px
          );
        }
      `}</style>
    </div>
  );
} 