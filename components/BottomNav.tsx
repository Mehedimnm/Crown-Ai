"use client";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'হোম', icon: 'fa-house' },
    { id: 'invest', label: 'ইনভেস্ট', icon: 'fa-chart-line' },
    { id: 'wallet', label: 'ওয়ালেট', icon: 'fa-wallet' },
    { id: 'team', label: 'টিম', icon: 'fa-users' },
    { id: 'profile', label: 'প্রোফাইল', icon: 'fa-user' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 container-padding safe-area-bottom">
      <div className="glass-card rounded-3xl border border-white/5 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-around py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'text-amber-400'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              <i className={`fas ${item.icon} text-2xl`}></i>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
