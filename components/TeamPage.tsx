"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TeamPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const referralLevels = [
    { 
      level: 1, 
      name: "প্রথম স্তর", 
      commission: "২০%", 
      icon: "fa-crown", 
      gradient: "from-amber-400 to-amber-600",
      color: "amber",
      members: 12,
      totalInvested: "১,২০,০০০",
      yourEarnings: "২৪,০০০",
      description: "আপনার সরাসরি রেফারকৃত সদস্যদের ইনভেস্টমেন্ট থেকে ২০% কমিশন পাবেন"
    },
    { 
      level: 2, 
      name: "দ্বিতীয় স্তর", 
      commission: "৮%", 
      icon: "fa-star", 
      gradient: "from-orange-400 to-orange-600",
      color: "orange",
      members: 48,
      totalInvested: "৪,৮০,০০০",
      yourEarnings: "৩৮,৪০০",
      description: "আপনার রেফারদের রেফারকৃত সদস্যদের থেকে ৮% কমিশন"
    },
    { 
      level: 3, 
      name: "তৃতীয় স্তর", 
      commission: "৫%", 
      icon: "fa-award", 
      gradient: "from-yellow-400 to-yellow-600",
      color: "yellow",
      members: 156,
      totalInvested: "১৫,৬০,০০০",
      yourEarnings: "৭৮,০০০",
      description: "তৃতীয় স্তরের সদস্যদের ইনভেস্টমেন্ট থেকে ৫% কমিশন পাবেন"
    },
    { 
      level: 4, 
      name: "চতুর্থ স্তর", 
      commission: "৩%", 
      icon: "fa-medal", 
      gradient: "from-green-400 to-green-600",
      color: "green",
      members: 432,
      totalInvested: "৪৩,২০,০০০",
      yourEarnings: "১,২৯,৬০০",
      description: "চতুর্থ স্তরের নেটওয়ার্ক থেকে ৩% কমিশন আয় করুন"
    },
    { 
      level: 5, 
      name: "পঞ্চম স্তর", 
      commission: "২%", 
      icon: "fa-gem", 
      gradient: "from-blue-400 to-blue-600",
      color: "blue",
      members: 876,
      totalInvested: "৮৭,৬০,০০০",
      yourEarnings: "১,৭৫,২০০",
      description: "পঞ্চম স্তরের বিস্তৃত নেটওয়ার্ক থেকে ২% কমিশন"
    },
    { 
      level: 6, 
      name: "ষষ্ঠ স্তর", 
      commission: "১.৫%", 
      icon: "fa-diamond", 
      gradient: "from-purple-400 to-purple-600",
      color: "purple",
      members: 1243,
      totalInvested: "১,২৪,৩০,০০০",
      yourEarnings: "১,৮৬,৪৫০",
      description: "ষষ্ঠ স্তরের ব্যাপক নেটওয়ার্ক থেকে ১.৫% কমিশন"
    },
    { 
      level: 7, 
      name: "সপ্তম স্তর", 
      commission: "১%", 
      icon: "fa-certificate", 
      gradient: "from-pink-400 to-pink-600",
      color: "pink",
      members: 2156,
      totalInvested: "২,১৫,৬০,০০০",
      yourEarnings: "২,১৫,৬০০",
      description: "সপ্তম স্তরের সর্ববৃহৎ নেটওয়ার্ক থেকে ১% প্যাসিভ ইনকাম"
    },
  ];

  const totalMembers = referralLevels.reduce((acc, level) => acc + level.members, 0);
  const totalEarnings = referralLevels.reduce((acc, level) => {
    const earnings = parseInt(level.yourEarnings.replace(/,/g, ''));
    return acc + earnings;
  }, 0).toLocaleString('bn-BD');

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
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-1">কমিশন স্ট্রাকচার</h3>
        <p className="text-xs text-gray-500">৭ স্তর পর্যন্ত প্যাসিভ ইনকাম সিস্টেম</p>
      </motion.div>

      {/* Referral Tree - Bracket Style */}
      <div className="space-y-4 mb-6">
        {referralLevels.map((level, index) => (
          <motion.div
            key={level.level}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="relative"
          >
            {/* Bracket Connection Line */}
            <div className="flex items-start gap-3">
              {/* Left Bracket Line */}
              <div className="relative flex flex-col items-center pt-6 pb-6">
                <svg width="24" height="100%" className="absolute left-0 top-0" style={{ minHeight: '80px' }}>
                  {/* Vertical line */}
                  <line 
                    x1="12" 
                    y1="0" 
                    x2="12" 
                    y2={index === 0 ? "40" : index === referralLevels.length - 1 ? "40" : "100%"} 
                    stroke={`url(#gradient-${level.color})`}
                    strokeWidth="2"
                    strokeDasharray={index === 0 ? "0" : "4 4"}
                  />
                  {/* Horizontal bracket */}
                  <line 
                    x1="12" 
                    y1="40" 
                    x2="24" 
                    y2="40" 
                    stroke={`url(#gradient-${level.color})`}
                    strokeWidth="2"
                  />
                  
                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id={`gradient-${level.color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={level.color === 'amber' ? '#fbbf24' : 
                                                    level.color === 'orange' ? '#fb923c' :
                                                    level.color === 'yellow' ? '#facc15' :
                                                    level.color === 'green' ? '#4ade80' :
                                                    level.color === 'blue' ? '#60a5fa' :
                                                    level.color === 'purple' ? '#c084fc' : '#f472b6'} 
                            stopOpacity="0.8" />
                      <stop offset="100%" stopColor={level.color === 'amber' ? '#f59e0b' : 
                                                      level.color === 'orange' ? '#f97316' :
                                                      level.color === 'yellow' ? '#eab308' :
                                                      level.color === 'green' ? '#22c55e' :
                                                      level.color === 'blue' ? '#3b82f6' :
                                                      level.color === 'purple' ? '#a855f7' : '#ec4899'} 
                            stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Level Number Badge */}
                <motion.div
                  className={`relative z-10 w-8 h-8 bg-gradient-to-br ${level.gradient} rounded-full flex items-center justify-center shadow-lg border-2 border-[#030305]`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-black text-xs">{level.level}</span>
                </motion.div>
              </div>

              {/* Level Card */}
              <motion.div
                className="flex-1 bg-gradient-to-br from-[#0f0f12] to-[#18181b] rounded-2xl border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.01, y: -2 }}
                onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
              >
                {/* Main Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${level.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <i className={`fas ${level.icon} text-white text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{level.name}</h4>
                        <p className="text-xs text-gray-500">
                          <i className="fas fa-users mr-1"></i>
                          {level.members.toLocaleString('bn-BD')} জন সদস্য
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`bg-gradient-to-r ${level.gradient} px-3 py-1.5 rounded-lg shadow-lg inline-block mb-1`}>
                        <p className="text-lg font-black text-white">{level.commission}</p>
                      </div>
                      <p className="text-[10px] text-gray-600">কমিশন রেট</p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-[10px] text-gray-500 mb-0.5">মোট ইনভেস্টমেন্ট</p>
                      <p className="text-sm font-bold text-white">৳{level.totalInvested}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-[10px] text-gray-500 mb-0.5">আপনার আয়</p>
                      <p className="text-sm font-bold text-emerald-400">৳{level.yourEarnings}</p>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{expandedLevel === level.level ? 'কম দেখুন' : 'বিস্তারিত দেখুন'}</span>
                    <motion.i
                      className="fas fa-chevron-down"
                      animate={{ rotate: expandedLevel === level.level ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedLevel === level.level ? 'auto' : 0,
                    opacity: expandedLevel === level.level ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0 border-t border-white/5">
                    <div className={`bg-gradient-to-br ${level.gradient} bg-opacity-10 rounded-xl p-3 mt-3`}>
                      <div className="flex items-start gap-2 mb-3">
                        <i className="fas fa-info-circle text-white/70 text-sm mt-0.5"></i>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {level.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">প্রতি ১০,০০০৳ এ কমিশন:</span>
                          <span className="font-bold text-white">
                            ৳{(10000 * parseInt(level.commission) / 100).toLocaleString('bn-BD')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">গড় মাসিক আয়:</span>
                          <span className="font-bold text-emerald-400">
                            ৳{(parseInt(level.yourEarnings.replace(/,/g, '')) / 12).toFixed(0).toLocaleString('bn-BD')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">স্ট্যাটাস:</span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-green-400 font-medium">সক্রিয়</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
