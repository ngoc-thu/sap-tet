import React, { useState } from 'react';
import { CALLIGRAPHY_WORDS } from '../../data/tetData';
import type { CalligraphyWord } from '../../types';
import { X, Share2, Sparkles, Check } from 'lucide-react';

interface CalligraphyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalligraphyModal: React.FC<CalligraphyModalProps> = ({ isOpen, onClose }) => {
  const [selectedWord, setSelectedWord] = useState<CalligraphyWord>(CALLIGRAPHY_WORDS[0]);
  const [customName, setCustomName] = useState<string>('Kính Chúc Gia Đình');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const shareText = `🧧 Bức Thư Pháp Chữ "${selectedWord.character}" - ${selectedWord.meaning}\n"${selectedWord.wishSentence}"\n(Tặng: ${customName})`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#1c080b] border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-amber-100 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-red-950/80 text-amber-300 hover:text-white border border-amber-500/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-gradient mb-1">
            🖌️ XIN CHỮ THẦY ĐỒ 4.0
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/70">
            Tạo bức thư pháp may mắn, khai xuân đại phát, mang lộc vào nhà
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Word Selection & Customization */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                1. Chọn Chữ Muốn Xin:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {CALLIGRAPHY_WORDS.map((item) => (
                  <button
                    key={item.character}
                    onClick={() => setSelectedWord(item)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      selectedWord.character === item.character
                        ? 'bg-gradient-to-br from-red-600 to-amber-600 text-white font-serif font-bold text-lg border-yellow-300 shadow-md scale-105'
                        : 'bg-red-950/40 text-amber-200/80 border-amber-500/20 hover:border-amber-400 font-serif text-base'
                    }`}
                  >
                    {item.character}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                2. Dành Tặng Cho (Tùy chỉnh tên):
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Nhập tên người nhận (ví dụ: Cha Mẹ, Bạn Bè...)"
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="bg-red-950/30 p-4 rounded-xl border border-amber-500/20 text-xs space-y-2">
              <h4 className="font-bold text-amber-300 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Ý Nghĩa Chữ "{selectedWord.character}":</span>
              </h4>
              <p className="text-amber-100/80 leading-relaxed">{selectedWord.meaning}</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleCopyText}
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Đã Sao Chép!' : 'Sao Chép Lời Chúc'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Red Paper Calligraphy Artifact Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md red-paper-bg rounded-2xl p-8 text-center shadow-2xl relative border-8 border-[#6b0f1a]">
              
              {/* Outer Decorative Gold Corners */}
              <div className="absolute top-2 left-2 text-amber-300 text-xs">🈴</div>
              <div className="absolute top-2 right-2 text-amber-300 text-xs">🈴</div>
              <div className="absolute bottom-2 left-2 text-amber-300 text-xs">🈴</div>
              <div className="absolute bottom-2 right-2 text-amber-300 text-xs">🈴</div>

              {/* Year Stamp */}
              <div className="inline-block px-3 py-0.5 mb-6 rounded-full border border-yellow-400/60 bg-red-950/80 text-yellow-300 text-[11px] font-sans">
                TẾT ĐINH MÙI • 2027
              </div>

              {/* Main Calligraphy Big Character */}
              <div className="my-6">
                <span className="font-cursive text-7xl sm:text-8xl font-black text-yellow-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest block leading-none">
                  {selectedWord.character}
                </span>
              </div>

              {/* Wish Sentence */}
              <div className="my-6 px-4">
                <p className="font-serif italic text-base sm:text-lg text-yellow-100/90 leading-relaxed">
                  "{selectedWord.wishSentence}"
                </p>
              </div>

              {/* Dedicated To Name */}
              <div className="mt-8 pt-4 border-t border-yellow-400/30 flex items-center justify-between text-xs text-amber-200/80">
                <span className="font-sans font-semibold">Tặng: {customName || 'Gia Đình'}</span>
                <span className="font-serif italic text-amber-300">Thầy Đồ 4.0 ✨</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
