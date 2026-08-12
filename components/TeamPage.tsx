"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TeamPage() {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const referralLevels = [
    { level: 1, name: "লেভেল ১", commission: "২০%", icon: "fa-crown", gradient: "from-amber-400 to-amber-600", members: 12 },
    { level: 2, name: "লেভেল ২", commission: "৮%", icon: "fa-star", gradient: "from-orange-400 to-orange-600", members: 48 },
    { level: 3, name: "লেভেল ৩", commission: "৫%", icon: "fa-award", gradient: "from-yellow-400 to-yellow-600", members: 156 },
    { level: 4, name: "লেভেল ৪", commission: "৩%", icon: "fa-medal", gradient: "from-green-400 to-green-600", members: 432 },
    { level: 5, name: "লেভেল ৫", commission: "২%", icon: "fa-gem", gradient: "from-blue-400 to-blue-600", members: 876 },
    { level: 6, name: "লেভেল ৬", commission: "১.৫%", icon: "fa-diamond", gradient: "from-purple-400 to-purple-600", members: 1243 },
    { level: 7, name: "লেভেল ৭", commission: "১%", icon: "fa-certificate", gradient: "from-pink-400 to-pink-600", members: 2156 },
  ];

  const totalMembers = referralLevels.reduce((acc, level) => acc + level.members, 0);
  const totalEarnings = "১,২৩,৪৫৬";

  return (
    <div className="container-padding pt-6 safe-area-top pb-4">
      {/* Header Section */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          রেফারেল টিম
        </motion.h2>
        <p className="text-gray-500 text-sm">আপনার নেটওয়ার্ক এবং আয়</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div
          className="bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl p-4 border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-users text-white text-lg"></i>
            </div>
            <div>
              <p className="text-xs text-gray-500">মোট সদস্য</p>
              <p className="text-2xl font-black text-white">{totalMembers.toLocaleString('bn-BD')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl p-4 border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-coins text-white text-lg"></i>
            </div>
            <div>
              <p className="text-xs text-gray-500">মোট আয়</p>
              <p className="text-2xl font-black text-amber-400">৳{totalEarnings}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Referral Code Card */}
      <motion.div
        className="bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl p-5 border border-white/10 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">আপনার রেফারেল কোড</p>
            <p className="text-xl font-black text-white tracking-wider">CROWN2024</p>
          </div>
          <motion.button
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-copy mr-2"></i>কপি
          </motion.button>
        </div>
        <motion.button
          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="fas fa-share-nodes mr-2"></i>শেয়ার করুন
        </motion.button>
      </motion.div>

      {/* Commission Structure Title */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-bold text-white mb-1">কমিশন স্ট্রাকচার</h3>
        <p className="text-xs text-gray-500">৭ স্তর পর্যন্ত আয় করুন</p>
      </motion.div>

      {/* Referral Levels - Tree Structure */}
      <div className="space-y-3">
        {referralLevels.map((level, index) => (
          <motion.div
            key={level.level}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            onHoverStart={() => setHoveredLevel(level.level)}
            onHoverEnd={() => setHoveredLevel(null)}
            className="relative"
            style={{ paddingLeft: `${level.level * 12}px` }}
          >
            {/* Connection Line */}
            {index > 0 && (
              <motion.div
                className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                style={{ left: `${(level.level - 1) * 12 + 20}px` }}
              />
            )}

            {/* Level Card */}
            <div
              className="relative bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl p-4 border border-white/10 overflow-hidden"
              style={{
                boxShadow: hoveredLevel === level.level
                  ? '0 8px 25px rgba(0, 0, 0, 0.4)'
                  : '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${level.gradient} opacity-0`}
                animate={{
                  opacity: hoveredLevel === level.level ? 0.1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex items-center justify-between">
                {/* Left Side - Icon & Info */}
                <div className="flex items-center gap-3 flex-1">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${level.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    animate={{
                      rotateY: hoveredLevel === level.level ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`fas ${level.icon} text-white text-lg`}></i>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-white mb-0.5">{level.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        <i className="fas fa-users mr-1"></i>
                        {level.members.toLocaleString('bn-BD')} জন
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Commission Badge */}
                <motion.div
                  className={`bg-gradient-to-r ${level.gradient} px-4 py-2 rounded-xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-lg font-black text-white">{level.commission}</p>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <motion.div
                className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${level.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(level.members / totalMembers) * 100}%` }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Card at Bottom */}
      <motion.div
        className="mt-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fas fa-info text-white text-sm"></i>
          </div>
          <div>
            <p className="text-xs text-gray-400 leading-relaxed">
              আপনার রেফারকৃত প্রতিটি সদস্য থেকে ৭ স্তর পর্যন্ত কমিশন পাবেন। 
              যত বেশি সদস্য রেফার করবেন, তত বেশি আয় হবে।
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
