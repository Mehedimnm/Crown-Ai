"use client";

import { motion } from 'framer-motion';
import PremiumBadgeCard from './PremiumBadgeCard';

export default function BadgesSection() {
  const badges = [
    {
      id: 1,
      level: "স্টার্টার",
      name: "বেসিক প্ল্যান",
      price: "৪,০০০",
      daily: "১৩০",
      duration: "১.৫ বছর",
      referral: "৫%",
      icon: "fa-certificate",
      gradient: "from-slate-400 to-slate-700",
      glowColor: "slate",
      tasksPerDay: "৫",
      taskReward: "২৬",
      totalReturn: "৭১,১৭৫",
    },
    {
      id: 2,
      level: "ব্রোঞ্জ",
      name: "স্ট্যান্ডার্ড প্ল্যান",
      price: "১০,০০০",
      daily: "৩৫০",
      duration: "২ বছর",
      referral: "৭%",
      icon: "fa-medal",
      gradient: "from-orange-400 to-orange-700",
      glowColor: "orange",
      tasksPerDay: "১০",
      taskReward: "৩৫",
      totalReturn: "২,৫৫,৫০০",
    },
    {
      id: 3,
      level: "সিলভার",
      name: "প্রিমিয়াম প্ল্যান",
      price: "২০,০০০",
      daily: "৭৫০",
      duration: "২.৫ বছর",
      referral: "৮%",
      icon: "fa-award",
      gradient: "from-gray-300 to-gray-600",
      glowColor: "gray",
      tasksPerDay: "১৫",
      taskReward: "৫০",
      totalReturn: "৬,৮৪,৩৭৫",
    },
    {
      id: 4,
      level: "গোল্ড",
      name: "এলিট প্ল্যান",
      price: "৪০,০০০",
      daily: "১,৬০০",
      duration: "২.৫ বছর",
      referral: "১০%",
      icon: "fa-crown",
      gradient: "from-amber-400 to-yellow-600",
      glowColor: "amber",
      isPopular: true,
      tasksPerDay: "২০",
      taskReward: "৮০",
      totalReturn: "১৪,৬০,০০০",
    },
    {
      id: 5,
      level: "প্ল্যাটিনাম",
      name: "ডায়মন্ড প্ল্যান",
      price: "৮০,০০০",
      daily: "৩,৪০০",
      duration: "২.৮ বছর",
      referral: "১২%",
      icon: "fa-gem",
      gradient: "from-cyan-400 to-blue-600",
      glowColor: "cyan",
      tasksPerDay: "২৫",
      taskReward: "১৩৬",
      totalReturn: "৩৪,৭৬,৪০০",
    },
    {
      id: 6,
      level: "ডায়মন্ড",
      name: "রয়্যাল প্ল্যান",
      price: "১,৫০,০০০",
      daily: "৬,৫০০",
      duration: "৩ বছর",
      referral: "১৫%",
      icon: "fa-diamond",
      gradient: "from-purple-400 to-purple-700",
      glowColor: "purple",
      tasksPerDay: "৩০",
      taskReward: "২১৭",
      totalReturn: "৭১,১৭,৫০০",
    },
    {
      id: 7,
      level: "VIP",
      name: "আল্টিমেট প্ল্যান",
      price: "২,৮০,০০০",
      daily: "১৩,০০০",
      duration: "৩ বছর",
      referral: "২০%",
      icon: "fa-star",
      gradient: "from-red-500 to-rose-700",
      glowColor: "red",
      isVIP: true,
      tasksPerDay: "৪০",
      taskReward: "৩২৫",
      totalReturn: "১,৪২,৩৫,০০০",
    },
  ];

  return (
    <section className="container-padding pb-8">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-black mb-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ইনভেস্টমেন্ট প্যাকেজ
        </motion.h2>
        <p className="text-gray-500 text-sm">আপনার উপযুক্ত প্ল্যান নির্বাচন করুন এবং আয় শুরু করুন</p>
      </motion.div>

      {/* Badge Cards Grid */}
      <div className="space-y-4">
        {badges.map((badge, index) => (
          <PremiumBadgeCard key={badge.id} badge={badge} index={index} />
        ))}
      </div>
    </section>
  );
}


