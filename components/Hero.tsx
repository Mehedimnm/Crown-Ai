"use client";

export default function Hero() {
  return (
    <section className="container-padding pt-2 pb-6">
      {/* Minimal Balance Card */}
      <div className="badge-card rounded-3xl p-6 mb-6">
        <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">মোট ব্যালেন্স</p>
        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">৳ ০.০০</h2>
        <div className="flex gap-3">
          <button className="flex-1 btn-gradient text-black font-medium py-3 rounded-2xl text-sm">
            ডিপোজিট
          </button>
          <button className="flex-1 glass-card border border-white/10 text-gray-300 font-medium py-3 rounded-2xl text-sm hover:border-amber-500/30 transition-all">
            উত্তোলন
          </button>
        </div>
      </div>

      {/* Minimal Hero Content */}
      <div className="text-center mb-6 px-2">
        <h2 className="text-2xl font-bold mb-3 leading-snug tracking-tight">
          ভবিষ্যতের <span className="text-gradient-gold">আর্থিক স্বাধীনতা</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          ৭টি প্রিমিয়াম ব্যাজ থেকে একটি নির্বাচন করুন এবং দৈনিক আয় শুরু করুন
        </p>
      </div>

      {/* Minimalist Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="badge-card p-4 rounded-2xl text-center">
          <p className="text-2xl font-bold text-amber-400 mb-1">৭</p>
          <p className="text-xs text-gray-600">লেভেল</p>
        </div>
        <div className="badge-card p-4 rounded-2xl text-center">
          <p className="text-2xl font-bold text-green-400 mb-1">২০%</p>
          <p className="text-xs text-gray-600">বোনাস</p>
        </div>
        <div className="badge-card p-4 rounded-2xl text-center">
          <p className="text-2xl font-bold text-cyan-400 mb-1">৪৫</p>
          <p className="text-xs text-gray-600">দিন</p>
        </div>
      </div>
    </section>
  );
}
