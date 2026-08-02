import React, { useState } from 'react';
import { Gift, Sparkles, Coins } from 'lucide-react';

interface LixiGroup {
  id: string;
  name: string;
  count: number;
  amount: number; // in VNĐ
}

export const LixiCalculator: React.FC = () => {
  const [groups, setGroups] = useState<LixiGroup[]>([
    { id: '1', name: '👴 Ông Bà / Cha Mẹ', count: 4, amount: 500000 },
    { id: '2', name: '👶 Trẻ Em / Cháu Nhỏ', count: 10, amount: 50000 },
    { id: '3', name: '🎉 Bạn Bè / Đồng Nghiệp', count: 6, amount: 100000 },
    { id: '4', name: '🏡 Họ Hàng / Người Thân', count: 5, amount: 200000 },
  ]);

  const updateCount = (id: string, delta: number) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === id ? { ...g, count: Math.max(0, g.count + delta) } : g))
    );
  };

  const updateAmount = (id: string, amount: number) => {
    setGroups((prev) => prev.map((g) => (g.id === id ? { ...g, amount } : g)));
  };

  const totalAmount = groups.reduce((acc, g) => acc + g.count * g.amount, 0);
  const totalEnvelopes = groups.reduce((acc, g) => acc + g.count, 0);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <section id="lixi-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="glass-card-gold rounded-3xl p-6 sm:p-10 shadow-2xl border border-amber-500/40 relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
            <Gift className="w-3.5 h-3.5 text-red-400" />
            <span>CÔNG CỤ TIỆN ÍCH TẾT</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-gold-gradient">
            🧧 MÁY TÍNH LÌ XÌ TẾT ĐINH MÙI
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/70 mt-1">
            Lập ngân sách mừng tuổi đầu năm chu đáo, đong đầy yêu thương và tài lộc
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls List */}
          <div className="lg:col-span-7 space-y-4">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-red-950/40 rounded-2xl p-4 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="w-full sm:w-auto">
                  <h3 className="font-bold text-amber-200 text-sm mb-1">{group.name}</h3>
                  <p className="text-xs text-amber-300/60">
                    Thành tiền: <span className="text-yellow-300 font-bold">{formatVND(group.count * group.amount)}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
                  
                  {/* Amount Select */}
                  <select
                    value={group.amount}
                    onChange={(e) => updateAmount(group.id, Number(e.target.value))}
                    className="bg-black/60 border border-amber-500/30 rounded-lg px-2.5 py-1.5 text-amber-200 text-xs focus:outline-none"
                  >
                    <option value={20000}>20.000 đ</option>
                    <option value={50000}>50.000 đ</option>
                    <option value={100000}>100.000 đ</option>
                    <option value={200000}>200.000 đ</option>
                    <option value={500000}>500.000 đ</option>
                    <option value={1000000}>1.000.000 đ</option>
                  </select>

                  {/* Counter Buttons */}
                  <div className="flex items-center space-x-2 bg-black/50 rounded-lg p-1 border border-amber-500/20">
                    <button
                      onClick={() => updateCount(group.id, -1)}
                      className="w-7 h-7 rounded bg-red-900/60 hover:bg-red-800 text-amber-200 font-bold flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-amber-100 font-bold text-sm">
                      {group.count}
                    </span>
                    <button
                      onClick={() => updateCount(group.id, 1)}
                      className="w-7 h-7 rounded bg-red-900/60 hover:bg-red-800 text-amber-200 font-bold flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Budget Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-red-900/60 via-red-950/80 to-black/80 rounded-2xl p-6 border border-amber-400/40 text-center shadow-xl">
            
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/40">
              <Coins className="w-7 h-7 text-yellow-400 animate-bounce" />
            </div>

            <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
              TỔNG NGÂN SÁCH LÌ XÌ
            </span>

            <div className="text-3xl sm:text-4xl font-serif font-extrabold text-gold-gradient my-3">
              {formatVND(totalAmount)}
            </div>

            <p className="text-xs text-amber-200/70 mb-6">
              Tổng cộng <span className="text-amber-400 font-bold">{totalEnvelopes} bao lì xì</span> may mắn đã được sẵn sàng!
            </p>

            <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-amber-100/90 text-left space-y-1">
              <div className="flex items-center space-x-1 text-yellow-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mẹo Lì Xì May Mắn:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-200/80">
                Ưu tiên chọn tiền mới mệnh giá số cặp (20k, 50k, 200k, 500k) tượng trưng cho hỷ sự song hành, phúc lộc nhân đôi!
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
