"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import BadgesSection from '@/components/BadgesSection';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="min-h-screen bg-[#030305] relative overflow-hidden pb-20">
      {/* Subtle Background Orbs */}
      <div className="glow-orb bg-amber-600/20 w-[300px] h-[300px] top-[-100px] left-[-100px]"></div>
      <div className="glow-orb bg-purple-600/10 w-[400px] h-[400px] bottom-[20%] right-[-150px]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {activeTab === 'home' && (
          <>
            <Hero />
            <Marquee />
            <BadgesSection />
          </>
        )}

        {activeTab === 'invest' && (
          <div className="container-padding pt-6 safe-area-top">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">ইনভেস্টমেন্ট</h2>
              <p className="text-gray-600 text-sm">আপনার বিনিয়োগ ড্যাশবোর্ড</p>
            </div>
            <div className="badge-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <p className="text-gray-500 text-sm">কোনো সক্রিয় ইনভেস্টমেন্ট নেই</p>
              <button className="mt-4 btn-gradient text-black font-medium py-2.5 px-6 rounded-2xl text-sm">
                শুরু করুন
              </button>
            </div>
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="container-padding pt-6 safe-area-top">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">ওয়ালেট</h2>
              <p className="text-gray-600 text-sm">আপনার ওয়ালেট ব্যালেন্স</p>
            </div>
            <div className="space-y-4">
              <div className="badge-card rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">মোট ব্যালেন্স</span>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-wallet text-white text-lg"></i>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">৳ ০.০০</p>
                <p className="text-green-400 text-xs">+০% থেকে গতকাল</p>
              </div>
              <div className="badge-card rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">উপার্জিত মোট</span>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-coins text-white text-lg"></i>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">৳ ০.০০</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="container-padding pt-6 safe-area-top">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">টিম</h2>
              <p className="text-gray-600 text-sm">আপনার রেফারেল টিম</p>
            </div>
            <div className="badge-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <p className="text-gray-500 text-sm mb-2">কোনো টিম মেম্বার নেই</p>
              <p className="text-xs text-gray-600 mb-4">আপনার রেফারেল কোড শেয়ার করুন</p>
              <button className="btn-gradient text-black font-medium py-2.5 px-6 rounded-2xl text-sm">
                শেয়ার করুন
              </button>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="container-padding pt-6 safe-area-top">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">প্রোফাইল</h2>
              <p className="text-gray-600 text-sm">আপনার অ্যাকাউন্ট তথ্য</p>
            </div>
            <div className="badge-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <i className="fas fa-user text-white text-2xl"></i>
              </div>
              <p className="text-gray-500 text-sm mb-4">লগইন করুন</p>
              <div className="space-y-3">
                <button className="w-full btn-gradient text-black font-medium py-3 rounded-2xl text-sm">
                  লগইন
                </button>
                <button className="w-full glass-card border border-white/10 text-gray-300 font-medium py-3 rounded-2xl text-sm hover:border-amber-500/30 transition-all">
                  রেজিস্ট্রেশন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}
