"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BadgeProps {
  id: number;
  level: string;
  name: string;
  price: string;
  daily: string;
  duration: string;
  referral: string;
  icon: string;
  gradient: string;
  glowColor: string;
  tasksPerDay: string;
  taskReward: string;
  totalReturn: string;
  isPopular?: boolean;
  isVIP?: boolean;
}

export default function PremiumBadgeCard({ badge, index }: { badge: BadgeProps; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.01, y: -2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Main Card - Minimalist Border */}
      <div className="relative bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl p-5 border border-white/10 overflow-hidden"
           style={{
             boxShadow: isHovered 
               ? '0 4px 20px rgba(0, 0, 0, 0.4)'
               : '0 2px 10px rgba(0, 0, 0, 0.3)'
           }}
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              {/* Level Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${badge.gradient} text-white shadow-lg`}>
                  {badge.level}
                </span>
                
                {badge.isPopular && (
                  <motion.span
                    className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    জনপ্রিয়
                  </motion.span>
                )}
                
                {badge.isVIP && (
                  <motion.span
                    className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    VIP
                  </motion.span>
                )}
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {badge.name}
              </h3>

              {/* Price with Animation */}
              <motion.div
                className="flex items-baseline gap-2"
                whileHover={{ x: 5 }}
              >
                <span className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ৳{badge.price}
                </span>
              </motion.div>
            </div>

            {/* Premium Badge Icon */}
            <motion.div
              className="relative"
              animate={{
                rotateY: isHovered ? 180 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={`relative w-16 h-16 bg-gradient-to-br ${badge.gradient} rounded-xl shadow-lg flex items-center justify-center`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <i className={`fas ${badge.icon} text-white text-2xl relative z-10`}></i>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <motion.div
              className="bg-white/5 rounded-xl p-2.5 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-[10px] text-gray-500 mb-0.5">দৈনিক আয়</p>
              <p className="text-base font-bold text-emerald-400">৳{badge.daily}</p>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-xl p-2.5 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-[10px] text-gray-500 mb-0.5">মেয়াদ</p>
              <p className="text-base font-bold text-blue-400">{badge.duration}</p>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-xl p-2.5 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-[10px] text-gray-500 mb-0.5">রেফারেল</p>
              <p className="text-base font-bold text-purple-400">{badge.referral}</p>
            </motion.div>
          </div>

          {/* Task Details */}
          <motion.div
            className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-3 border border-white/10 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">দৈনিক কাজ</span>
              <span className="text-sm font-bold text-white">{badge.tasksPerDay}টি</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">প্রতি কাজে</span>
              <span className="text-sm font-bold text-amber-400">৳{badge.taskReward}</span>
            </div>
            <div className="pt-2 border-t border-white/5">
              <p className="text-[10px] text-gray-500 leading-relaxed">
                প্রতিদিন {badge.tasksPerDay}টি কাজ কমপ্লিট করে ৳{badge.daily} আয় করুন
              </p>
            </div>
          </motion.div>

          {/* Total Return Section - Minimalist */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-sm p-3 rounded-xl mb-4 border border-white/10"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">মোট রিটার্ন</p>
            <span className="text-xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ৳{badge.totalReturn}
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className={`w-full bg-gradient-to-r ${badge.gradient} text-white font-bold py-3.5 rounded-xl shadow-lg relative overflow-hidden`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>আপগ্রেড করুন</span>
              <motion.i
                className="fas fa-arrow-right"
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
