"use client";

import { useEffect, useState } from 'react';

export default function MobileOnly({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="min-h-screen bg-[#030305] flex items-center justify-center p-6">
        <div className="text-center max-w-sm glass-card p-8 rounded-3xl border border-white/5">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <i className="fas fa-mobile-screen-button text-3xl text-black"></i>
          </div>
          <h1 className="text-2xl font-bold mb-3 text-gradient-gold">Crown AI</h1>
          <p className="text-gray-500 text-sm mb-2">এই প্ল্যাটফর্মটি শুধুমাত্র</p>
          <p className="text-white text-lg font-semibold mb-6">মোবাইল ডিভাইসের জন্য</p>
          <div className="glass-card border border-amber-500/20 rounded-2xl p-4 mb-6">
            <p className="text-amber-400 text-xs">
              <i className="fas fa-info-circle mr-2"></i>
              মোবাইল ব্রাউজার থেকে ভিজিট করুন
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center text-gray-600 text-xs">
            <div>
              <i className="fab fa-android text-xl text-green-400"></i>
              <p className="mt-1">Android</p>
            </div>
            <div className="w-px h-6 bg-gray-800"></div>
            <div>
              <i className="fab fa-apple text-xl text-gray-400"></i>
              <p className="mt-1">iOS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
