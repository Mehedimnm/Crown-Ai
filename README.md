# Crown AI - Premium Investment Platform

একটি প্রিমিয়াম ইনভেস্টমেন্ট প্ল্যাটফর্ম যা শুধুমাত্র মোবাইল ডিভাইসের জন্য ডিজাইন করা হয়েছে।

## ✨ বৈশিষ্ট্য

- 🎨 **প্রিমিয়াম ডিজাইন**: Glass morphism এবং gradient effects
- 📱 **শুধুমাত্র মোবাইল**: ডেস্কটপে সীমাবদ্ধতা বার্তা দেখায়
- 🌟 **৭টি ইনভেস্টমেন্ট ব্যাজ**: স্টার্টার থেকে VIP Ultimate পর্যন্ত
- 💎 **বাংলা ভাষা সাপোর্ট**: সম্পূর্ণ বাংলায়
- 🎯 **মোবাইল বটম নেভিগেশন**: ৫টি প্রধান সেকশন
- ⚡ **Next.js 14**: সর্বশেষ ফ্রেমওয়ার্ক
- 🎭 **টাইপস্ক্রিপ্ট**: টাইপ সেফটি
- 🎨 **Tailwind CSS**: দ্রুত স্টাইলিং

## 🚀 ইনস্টলেশন

```bash
# Dependencies ইনস্টল করুন
npm install

# Development সার্ভার চালু করুন
npm run dev

# Production build তৈরি করুন
npm run build

# Production সার্ভার চালু করুন
npm start
```

## 📱 ব্যবহার

ব্রাউজারে `http://localhost:3000` খুলুন এবং মোবাইল ভিউ সিলেক্ট করুন।

**গুরুত্বপূর্ণ**: এই সাইটটি শুধুমাত্র মোবাইল স্ক্রিনে (≤768px) কাজ করবে।

## 📂 প্রজেক্ট স্ট্রাকচার

```
crownai-mobile/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── BadgesSection.tsx # Investment badges
│   ├── Marquee.tsx      # Scrolling marquee
│   ├── BottomNav.tsx    # Bottom navigation
│   └── MobileOnly.tsx   # Mobile restriction
├── public/              # Static files
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 রঙ স্কিম

- **প্রাইমারি**: Amber/Gold (#F59E0B)
- **ব্যাকগ্রাউন্ড**: Dark (#030305)
- **Glass**: RGBA transparency with backdrop blur

## 🔧 কাস্টমাইজেশন

`components/BadgesSection.tsx` ফাইলে ব্যাজের তথ্য পরিবর্তন করতে পারবেন।
`components/BottomNav.tsx` ফাইলে নেভিগেশন আইটেম পরিবর্তন করতে পারবেন।

## 📄 লাইসেন্স

© ২০২৬ Crown AI. All rights reserved.
