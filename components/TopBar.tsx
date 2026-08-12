"use client";

import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <motion.div 
      className="safe-area-top container-padding pt-4 pb-4 sticky top-0 z-40 bg-[#030305]/80 backdrop-blur-xl border-b border-white/5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-1">
        {/* Logo & Name */}
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
            <i className="fas fa-crown text-black text-lg"></i>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Crown<span className="text-amber-400">AI</span>
            </h1>
          </div>
        </motion.div>

        {/* Notification Button */}
        <motion.button 
          className="relative w-9 h-9 glass-card rounded-xl flex items-center justify-center hover:border-amber-400/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-bell text-amber-400 text-sm"></i>
          {/* Notification Badge */}
          <motion.span 
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white font-bold flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            3
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
