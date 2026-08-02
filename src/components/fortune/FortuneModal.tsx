import React, { useState } from 'react';
import { FORTUNE_LIST } from '../../data/tetData';
import type { FortuneItem } from '../../types';
import { X, RefreshCw, Sparkles, Award } from 'lucide-react';

interface FortuneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayShakeSound: () => void;
}

export const FortuneModal: React.FC<FortuneModalProps> = ({ isOpen, onClose, onPlayShakeSound }) => {
  const [isShaking, setIsShaking] = useState(false);
  const [currentFortune, setCurrentFortune] = useState<FortuneItem | null>(null);

  if (!isOpen) return null;

  const handleDrawFortune = () => {
    setIsShaking(true);
    setCurrentFortune(null);
    onPlayShakeSound();

    setTimeout(() => {
      const randomItem = FORTUNE_LIST[Math.floor(Math.random() * FORTUNE_LIST.length)];
      setCurrentFortune(randomItem);
      setIsShaking(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#1d080c] border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-amber-100 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-red-950/80 text-amber-300 hover:text-white border border-amber-500/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-gradient mb-1">
            🔮 GIEO QUẺ XĂM ĐẦU NĂM
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/70">
            Thành tâm xin quẻ đón vận may, tài lộc hanh thông cả năm
          </p>
        </div>

        {/* State 1: Before or During Shake */}
        {!currentFortune && (
          <div className="text-center py-10 flex flex-col items-center justify-center">
            
            {/* Tube Animation */}
            <div className={`w-36 h-48 relative flex items-center justify-center transition-transform ${isShaking ? 'animate-bounce rotate-6' : ''}`}>
              <div className="w-28 h-40 bg-gradient-to-b from-amber-800 via-yellow-900 to-amber-950 rounded-b-3xl border-4 border-amber-500 shadow-2xl flex flex-col items-center justify-end p-2 relative">
                <div className="absolute top-2 inset-x-4 h-2 bg-amber-400/50 rounded-full" />
                <span className="text-3xl font-serif text-amber-300 mb-6 font-bold">XĂM</span>
                {/* Bamboo sticks */}
                <div className="absolute -top-10 flex space-x-1">
                  <div className="w-2 h-14 bg-amber-200 rounded-t-sm transform -rotate-12" />
                  <div className="w-2.5 h-16 bg-red-500 rounded-t-sm" />
                  <div className="w-2 h-14 bg-amber-300 rounded-t-sm transform rotate-12" />
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-amber-200/80 italic">
              {isShaking ? 'Đang lắc ống xăm... Cầu chúc vạn sự an lành...' : 'Nhấn nút bên dưới để lắc ống xăm rút quẻ.'}
            </p>

            <button
              onClick={handleDrawFortune}
              disabled={isShaking}
              className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-slate-950 font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-500/30 disabled:opacity-50"
            >
              {isShaking ? 'ĐANG GIEO QUẺ...' : '✨ BẮT ĐẦU GIEO QUẺ'}
            </button>
          </div>
        )}

        {/* State 2: Display Fortune Result */}
        {currentFortune && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Quẻ Header */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-900/60 text-amber-300 text-xs font-semibold border border-amber-400/40">
                  {currentFortune.type}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200 mt-2">
                  {currentFortune.title}
                </h3>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-yellow-400 font-bold text-lg">
                  <Award className="w-5 h-5" />
                  <span>{currentFortune.luckScore}%</span>
                </div>
                <p className="text-[10px] text-amber-300/60 uppercase">Chỉ số may mắn</p>
              </div>
            </div>

            {/* Poem Card */}
            <div className="red-paper-bg rounded-2xl p-5 text-center shadow-inner">
              <p className="font-serif text-base sm:text-lg text-yellow-100 italic whitespace-pre-line leading-relaxed font-semibold">
                "{currentFortune.poem}"
              </p>
            </div>

            {/* Meaning */}
            <div className="bg-red-950/40 rounded-xl p-4 border border-amber-500/20 text-sm">
              <h4 className="font-bold text-amber-400 mb-1 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Giải Nghĩa Quẻ Xăm:</span>
              </h4>
              <p className="text-amber-100/90 leading-relaxed">{currentFortune.meaning}</p>
            </div>

            {/* Aspects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-black/40 p-3 rounded-lg border border-amber-500/10">
                <span className="text-amber-400 font-bold">💼 Công Danh: </span>
                <span className="text-amber-200/80">{currentFortune.aspects.career}</span>
              </div>
              <div className="bg-black/40 p-3 rounded-lg border border-amber-500/10">
                <span className="text-red-400 font-bold">❤️ Tình Duyên: </span>
                <span className="text-amber-200/80">{currentFortune.aspects.love}</span>
              </div>
              <div className="bg-black/40 p-3 rounded-lg border border-amber-500/10">
                <span className="text-yellow-400 font-bold">💰 Tài Lộc: </span>
                <span className="text-amber-200/80">{currentFortune.aspects.wealth}</span>
              </div>
              <div className="bg-black/40 p-3 rounded-lg border border-amber-500/10">
                <span className="text-emerald-400 font-bold">🌿 Sức Khỏe: </span>
                <span className="text-amber-200/80">{currentFortune.aspects.health}</span>
              </div>
            </div>

            {/* Re-draw Button */}
            <div className="text-center pt-2">
              <button
                onClick={handleDrawFortune}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-red-900/60 hover:bg-red-800 text-amber-200 text-xs font-bold border border-amber-500/30 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Gieo Lại Quẻ Khác</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
