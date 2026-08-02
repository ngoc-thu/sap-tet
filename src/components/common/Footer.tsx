import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-amber-500/20 bg-[#0d0305]/95 text-amber-200/70 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-400 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-[#1c080b] rounded-full flex items-center justify-center text-lg">
              🧧
            </div>
          </div>
          <h3 className="font-serif text-xl font-bold text-gold-gradient tracking-wide">
            SẮP TẾT VIỆT NAM • ĐẤT TRỜI GIAO HÒA
          </h3>
          <p className="text-xs text-amber-200/60 max-w-md">
            Ứng dụng đếm ngược Tết Nguyên Đán nghệ thuật, nơi lưu giữ tinh hoa văn hóa truyền thống Việt Nam.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-amber-300 font-medium">
          <a href="#countdown" className="hover:text-amber-100 transition-colors">Đếm Ngược Tết</a>
          <a href="#wishes-section" className="hover:text-amber-100 transition-colors">Lời Chúc Hay</a>
          <a href="#lixi-section" className="hover:text-amber-100 transition-colors">Máy Tính Lì Xì</a>
          <a href="#food-section" className="hover:text-amber-100 transition-colors">Ẩm Thực Ngày Tết</a>
        </div>

        <div className="w-24 h-px bg-amber-500/20 mx-auto" />

        {/* Copyright */}
        <p className="flex items-center justify-center space-x-1 text-amber-300/50">
          <span>Thiết kế bởi tình yêu Tết Việt</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-1" />
          <span>• © {new Date().getFullYear()} Sắp Tết Artistic Edition</span>
        </p>

      </div>
    </footer>
  );
};
