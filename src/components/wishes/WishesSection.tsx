import React, { useState } from 'react';
import { WISHES_LIST } from '../../data/tetData';
import type { WishItem } from '../../types';
import { Heart, Copy, Check, Sparkles } from 'lucide-react';

export const WishesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredWishes =
    selectedCategory === 'all'
      ? WISHES_LIST
      : WISHES_LIST.filter((item) => item.category === selectedCategory);

  const handleCopy = (wish: WishItem) => {
    navigator.clipboard.writeText(wish.content);
    setCopiedId(wish.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="wishes-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-300 font-bold px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30">
          💌 THƯ VIỆN LỜI CHÚC TẾT HAY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient mt-3 mb-2">
          Gửi Trọn Yêu Thương - Đón Xuân Như Ý
        </h2>
        <p className="text-sm text-amber-200/70 max-w-xl mx-auto">
          Tuyển chọn những câu chúc Tết ý nghĩa nhất dành tặng Gia đình, Bạn bè, Thầy cô và Đồng nghiệp.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'Tất Cả' },
          { id: 'gia-dinh', label: '🏡 Gia Đình' },
          { id: 'ban-be', label: '🎉 Bạn Bè' },
          { id: 'dong-nghiep', label: '💼 Đồng Nghiệp' },
          { id: 'thay-co', label: '📚 Thầy Cô' },
          { id: 'hai-huoc', label: '🤣 Hài Hước' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === tab.id
                ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-lg border border-amber-400/40'
                : 'bg-red-950/40 text-amber-200/70 border border-amber-500/20 hover:text-amber-100 hover:bg-red-900/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWishes.map((wish) => (
          <div
            key={wish.id}
            className="glass-card rounded-2xl p-6 border border-amber-500/30 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xl relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-400 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{wish.title}</span>
                </span>
                <Heart className="w-4 h-4 text-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-amber-100/90 leading-relaxed font-light italic">
                "{wish.content}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
              <span className="text-[11px] text-amber-200/50 uppercase">Tết Đinh Mùi 2027</span>
              <button
                onClick={() => handleCopy(wish)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all"
              >
                {copiedId === wish.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Đã Chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao Chép</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
