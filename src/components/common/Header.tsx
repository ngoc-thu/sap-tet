import React from 'react';
import { Sparkles, Music, VolumeX, Flame, ScrollText, Gift, UtensilsCrossed, Compass, Calendar } from 'lucide-react';

interface HeaderProps {
  blossomType: 'dao' | 'mai' | ' ca-hai';
  setBlossomType: (type: 'dao' | 'mai' | ' ca-hai') => void;
  isPlayingMusic: boolean;
  toggleMusic: () => void;
  onLaunchFirework: () => void;
  onOpenCalligraphy: () => void;
  onOpenFortune: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  blossomType,
  setBlossomType,
  isPlayingMusic,
  toggleMusic,
  onLaunchFirework,
  onOpenCalligraphy,
  onOpenFortune,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#18070b]/80 border-b border-amber-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/30 animate-pulse-glow">
              <div className="w-full h-full bg-[#200508] rounded-full flex items-center justify-center">
                <span className="text-2xl">🧧</span>
              </div>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-gold-gradient tracking-wide">
                SẮP TẾT <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/60 border border-amber-400/40 text-amber-200 uppercase font-sans">Artistic</span>
              </h1>
              <p className="text-[11px] text-amber-200/70 tracking-widest font-sans">ĐẾM NGƯỢC TẾT VIỆT</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#calendar-section"
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Lịch Vạn Niên</span>
            </a>

            <button
              onClick={onOpenFortune}
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Gieo Quẻ Xăm</span>
            </button>

            <button
              onClick={onOpenCalligraphy}
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <ScrollText className="w-4 h-4 text-red-400" />
              <span>Xin Chữ Thầy Đồ</span>
            </button>

            <a
              href="#wishes-section"
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Lời Chúc Tết</span>
            </a>

            <a
              href="#lixi-section"
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <Gift className="w-4 h-4 text-red-400" />
              <span>Tính Lì Xì</span>
            </a>

            <a
              href="#food-section"
              className="flex items-center space-x-1.5 text-amber-100 hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-900/30"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>Ẩm Thực Tết</span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            
            {/* Blossom type toggle */}
            <div className="hidden sm:flex bg-red-950/60 p-1 rounded-full border border-amber-500/30 text-xs">
              <button
                onClick={() => setBlossomType('dao')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  blossomType === 'dao' ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold shadow' : 'text-amber-200/70 hover:text-amber-100'
                }`}
              >
                🌸 Đào
              </button>
              <button
                onClick={() => setBlossomType('mai')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  blossomType === 'mai' ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-semibold shadow' : 'text-amber-200/70 hover:text-amber-100'
                }`}
              >
                🌼 Mai
              </button>
            </div>

            {/* Firework Button */}
            <button
              onClick={onLaunchFirework}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-slate-950 font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-500/20"
            >
              <Flame className="w-3.5 h-3.5 fill-slate-950" />
              <span>Pháo Hoa</span>
            </button>

            {/* Music Toggle */}
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full border transition-all ${
                isPlayingMusic
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/40 animate-pulse'
                  : 'bg-red-950/60 text-amber-300 border-amber-500/30 hover:border-amber-400'
              }`}
              title={isPlayingMusic ? 'Tắt Nhạc Tết' : 'Bật Nhạc Tết'}
            >
              {isPlayingMusic ? <Music className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
