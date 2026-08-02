import React from 'react';
import { TET_FOODS } from '../../data/tetData';
import { Utensils, Heart } from 'lucide-react';

export const TetFoodSection: React.FC = () => {
  return (
    <section id="food-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-amber-300 font-bold px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30">
          🍲 CẨM NANG VĂN HÓA
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient mt-3 mb-2">
          Hương Vị Ẩm Thực Ngày Tết 3 Miền
        </h2>
        <p className="text-sm text-amber-200/70 max-w-xl mx-auto">
          Khám phá nét đẹp văn hóa mâm cỗ truyền thống Việt Nam cùng ý nghĩa sâu sắc đằng sau từng món ăn.
        </p>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TET_FOODS.map((food) => (
          <div
            key={food.id}
            className="glass-card rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400 transition-all shadow-xl group flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b070b] via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-900/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/40">
                  {food.region}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-amber-200 mb-2">
                  {food.name}
                </h3>
                <p className="text-xs text-amber-300/80 italic mb-3 font-serif">
                  ✨ "{food.meaning}"
                </p>
                <p className="text-xs text-amber-100/70 leading-relaxed">
                  {food.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-amber-200/60 border-t border-amber-500/10">
              <span className="flex items-center space-x-1">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>Mâm Cỗ Tết</span>
              </span>
              <Heart className="w-4 h-4 text-red-500 opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer" />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
