'use client';

import { motion } from 'framer-motion';

export default function MoneyHeistLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        {/* Mask */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-32 h-32 border-4 border-red-600 mask-shape"
        />
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-full mt-4 text-red-600 text-xl font-bold tracking-wider"
        >
          LOADING...
        </motion.div>
      </div>

      <style jsx>{`
        .mask-shape {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
} 