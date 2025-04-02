'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

// interface MoneyHeistButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'>, HTMLMotionProps<'button'> {
//   variant?: 'primary' | 'outline';
//   children: React.ReactNode;
// }
interface MoneyHeistButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<'button'>>,
    HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}


export default function MoneyHeistButton({
  variant = 'primary',
  children,
  className = '',
  ...props
}: MoneyHeistButtonProps) {
  const baseStyles = "relative px-8 py-3 text-lg font-bold tracking-wider overflow-hidden";
  const variantStyles = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    outline: "border-2 border-red-600 text-white hover:bg-red-600/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Glitch Effect */}
      <div className="absolute inset-0 glitch-effect" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        .glitch-effect {
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(220, 38, 38, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 200%;
          animation: glitch 2s linear infinite;
        }

        @keyframes glitch {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </motion.button>
  );
}
