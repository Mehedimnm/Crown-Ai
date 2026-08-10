"use client";

export default function Marquee() {
  const withdrawals = [
    { name: "মেহেদী", amount: "১৩,০০০" },
    { name: "তানভীর", amount: "১,২০০" },
    { name: "রাফসান", amount: "৪০,০০০" },
    { name: "সাকিব", amount: "৮,৫০০" },
    { name: "নাফিসা", amount: "২৫,০০০" },
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.01] py-2 mb-6 overflow-hidden">
      <div className="flex gap-6 marquee-animation whitespace-nowrap">
        {[...withdrawals, ...withdrawals].map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
            <i className="fas fa-check-circle text-green-500 text-sm"></i>
            <span>{item.name}</span>
            <span className="text-amber-400 font-medium">৳ {item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
