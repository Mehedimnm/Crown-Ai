"use client";

interface BadgeIconProps {
  icon: string;
  gradient: string;
  level: number;
}

export default function BadgeIcon({ icon, gradient, level }: BadgeIconProps) {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Soft glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-md opacity-40`}></div>
      
      {/* Main badge */}
      <div className={`relative w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl shadow-xl flex items-center justify-center`}>
        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
        
        {/* Icon */}
        <i className={`fas ${icon} text-white text-lg relative z-10`}></i>
      </div>
    </div>
  );
}
