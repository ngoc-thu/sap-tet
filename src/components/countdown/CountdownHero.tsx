import React from 'react';
import type { TimeLeft } from '../../types';
import { getLunarDateInfo } from '../../utils/lunarCalendar';
import { Calendar, Sparkles, Compass, ScrollText, HeartHandshake } from 'lucide-react';

interface CountdownHeroProps {
  timeLeft: TimeLeft;
  targetYear: number;
  targetCanChi: string;
  targetDate: Date;
  onOpenFortune: () => void;
  onOpenCalligraphy: () => void;
}

export const CountdownHero: React.FC<CountdownHeroProps> = ({
  timeLeft,
  targetYear,
  targetCanChi,
  targetDate,
  onOpenFortune,
  onOpenCalligraphy,
}) => {
  const lunarToday = getLunarDateInfo();

  const formattedTargetDate = `${targetDate.getDate().toString().padStart(2, '0')}/${(
    targetDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${targetDate.getFullYear()}`;

  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      
      {/* Decorative Top Lantern & Banner */}
      <div className="flex justify-center items-center space-x-2 mb-4">
        <span className="text-2xl animate-bounce">🏮</span>
        <span className="text-xs uppercase tracking-widest text-amber-300/80 bg-red-950/80 px-4 py-1 rounded-full border border-amber-500/30">
          Xuân Đón Bình An • Vạn Sự Như Ý
        </span>
        <span className="text-2xl animate-bounce">🏮</span>
      </div>

      {/* Main Hero Title */}
      <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gold-gradient leading-tight mb-4">
        Đếm Ngược Đến Tết Nguyên Đán <br className="hidden sm:inline" />
        <span className="text-red-500 drop-shadow-[0_4px_12px_rgba(200,16,46,0.8)]">{targetYear}</span> – Năm {targetCanChi}
      </h1>

      <p className="max-w-2xl mx-auto text-amber-200/80 text-sm sm:text-base font-light mb-8">
        Cùng theo dõi khoảnh khắc đất trời giao hòa, đón rước may mắn và chuẩn bị một năm mới rực rỡ hạnh phúc.
      </p>

      {/* Glassmorphic Info Badge Card */}
      <div className="glass-card-gold rounded-2xl p-4 sm:p-6 mb-10 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left text-sm border-b border-amber-500/20 pb-4 mb-4">
          <div className="flex items-center space-x-2.5">
            <Calendar className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-xs text-amber-200/60 uppercase">Mùng 1 Tết Nguyên Đán</p>
              <p className="font-bold text-amber-200 text-base">{formattedTargetDate} (Dương Lịch)</p>
            </div>
          </div>

          <div className="w-full sm:w-px h-px sm:h-8 bg-amber-500/20" />

          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-xs text-amber-200/60 uppercase">Hôm nay Lịch Âm</p>
              <p className="font-semibold text-amber-300 text-sm">{lunarToday.lunarDateStr}</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-amber-100/90 font-medium">
          ⏳ Còn đúng <span className="text-amber-400 font-extrabold text-lg px-1">{timeLeft.days}</span> ngày nữa là đến Giao Thừa Tết {targetYear}!
        </p>
      </div>

      {/* 3D Glowing Glass Countdown Timer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
        
        {/* Days */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-amber-500/40 relative group hover:border-amber-400 transition-all shadow-xl">
          <div className="text-4xl sm:text-6xl font-extrabold font-serif text-gold-gradient mb-1">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200/70 uppercase">
            NGÀY
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-b-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Hours */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-amber-500/40 relative group hover:border-amber-400 transition-all shadow-xl">
          <div className="text-4xl sm:text-6xl font-extrabold font-serif text-gold-gradient mb-1">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200/70 uppercase">
            GIỜ
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-b-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Minutes */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-amber-500/40 relative group hover:border-amber-400 transition-all shadow-xl">
          <div className="text-4xl sm:text-6xl font-extrabold font-serif text-gold-gradient mb-1">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200/70 uppercase">
            PHÚT
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-b-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Seconds */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-amber-500/40 relative group hover:border-amber-400 transition-all shadow-xl">
          <div className="text-4xl sm:text-6xl font-extrabold font-serif text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] mb-1 animate-pulse">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200/70 uppercase">
            GIÂY
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-b-2xl opacity-80" />
        </div>

      </div>

      {/* Quick Action Interactive Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
        
        <button
          onClick={onOpenFortune}
          className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-900/50 border border-amber-400/40"
        >
          <Compass className="w-5 h-5 text-amber-300 animate-spin-slow" />
          <span>🔮 Gieo Quẻ Xăm Đầu Năm</span>
        </button>

        <button
          onClick={onOpenCalligraphy}
          className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-slate-950 font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-600/30 border border-yellow-300/60"
        >
          <ScrollText className="w-5 h-5 text-slate-950" />
          <span>🖌️ Xin Chữ Thầy Đồ 4.0</span>
        </button>

        <a
          href="#wishes-section"
          className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-red-950/80 text-amber-200 border border-amber-500/30 font-bold text-sm hover:bg-red-900/60 transition-all"
        >
          <HeartHandshake className="w-5 h-5 text-red-400" />
          <span>💌 Tra Cứu Lời Chúc Tết</span>
        </a>

      </div>

    </section>
  );
};
