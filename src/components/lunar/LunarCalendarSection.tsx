import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Sun, Moon, Info } from 'lucide-react';
import { getLunarDateInfo } from '../../utils/lunarCalendar';

export const LunarCalendarSection: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDay, setSelectedDay] = useState(() => new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  // First day of month & total days
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Adjust for Monday starting calendar (0 = Mon, 6 = Sun)
  const startOffset = (firstDayIndex + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDay(today);
  };

  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  const selectedLunar = getLunarDateInfo(selectedDay);

  const isToday = (dayNum: number) => {
    const today = new Date();
    return (
      dayNum === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (dayNum: number) => {
    return (
      dayNum === selectedDay.getDate() &&
      month === selectedDay.getMonth() &&
      year === selectedDay.getFullYear()
    );
  };

  return (
    <section id="calendar-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Title */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-300 font-bold px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/30">
          📅 LỊCH VẠN NIÊN & LỊCH ÂM DƯƠNG
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient mt-3 mb-2">
          Tra Cứu Lịch Âm Dương Ngày Tốt Xấu
        </h2>
        <p className="text-sm text-amber-200/70 max-w-xl mx-auto">
          Xem ngày âm lịch, can chi, ngày hoàng đạo và sự kiện Tết Nguyên Đán Việt Nam.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Calendar Grid Box */}
        <div className="lg:col-span-7 glass-card-gold rounded-3xl p-6 border border-amber-500/40 shadow-2xl">
          
          {/* Calendar Header Controls */}
          <div className="flex items-center justify-between mb-6 border-b border-amber-500/20 pb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-xl bg-red-950/60 text-amber-300 hover:bg-red-900 border border-amber-500/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-gold-gradient">
                {monthNames[month]} - NĂM {year}
              </h3>
              <p className="text-xs text-amber-300/70">
                Lịch Âm Dương Việt Nam
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleToday}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 text-white text-xs font-bold shadow-md"
              >
                Hôm Nay
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-red-950/60 text-amber-300 hover:bg-red-900 border border-amber-500/30 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Weekdays Header */}
          <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-amber-300 uppercase tracking-wider mb-3">
            <div>T2</div>
            <div>T3</div>
            <div>T4</div>
            <div>T5</div>
            <div>T6</div>
            <div className="text-amber-400">T7</div>
            <div className="text-red-400">CN</div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {/* Blank leading cells */}
            {Array.from({ length: startOffset }).map((_, idx) => (
              <div key={`blank-${idx}`} className="h-14 sm:h-16 rounded-xl bg-transparent" />
            ))}

            {/* Days of Month */}
            {Array.from({ length: totalDays }).map((_, idx) => {
              const dayNum = idx + 1;
              const dateObj = new Date(year, month, dayNum);
              const lunarInfo = getLunarDateInfo(dateObj);
              const todayFlag = isToday(dayNum);
              const selectedFlag = isSelected(dayNum);

              return (
                <button
                  key={`day-${dayNum}`}
                  onClick={() => setSelectedDay(dateObj)}
                  className={`h-14 sm:h-16 rounded-xl p-1.5 flex flex-col justify-between items-center transition-all border ${
                    selectedFlag
                      ? 'bg-gradient-to-br from-red-600 to-amber-600 border-yellow-300 text-white shadow-lg scale-105 z-10'
                      : todayFlag
                      ? 'bg-red-950/80 border-amber-400 text-amber-200 shadow-md'
                      : 'bg-black/40 border-amber-500/10 text-amber-100 hover:border-amber-400/50 hover:bg-red-900/30'
                  }`}
                >
                  <span className={`text-sm sm:text-base font-bold font-serif ${todayFlag && !selectedFlag ? 'text-yellow-300 animate-pulse' : ''}`}>
                    {dayNum}
                  </span>
                  
                  {/* Lunar Day Display */}
                  <span className={`text-[10px] font-sans ${selectedFlag ? 'text-yellow-200' : 'text-amber-300/70'}`}>
                    {lunarInfo.lunarDay === 1 ? `${lunarInfo.lunarDay}/${lunarInfo.lunarMonth}` : lunarInfo.lunarDay}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Date Detail Info Card */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-amber-500/30 shadow-2xl space-y-6">
          
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider border-b border-amber-500/20 pb-3">
            <Info className="w-4 h-4 text-yellow-400" />
            <span>CHI TIẾT NGÀY ĐƯỢC CHỌN</span>
          </div>

          {/* Big Solar Date Display */}
          <div className="text-center bg-red-950/50 rounded-2xl p-6 border border-amber-500/30">
            <div className="text-xs text-amber-300/70 uppercase mb-1 flex items-center justify-center space-x-1">
              <Sun className="w-3.5 h-3.5 text-yellow-400" />
              <span>Dương Lịch</span>
            </div>
            <div className="text-5xl font-serif font-extrabold text-gold-gradient mb-1">
              {selectedDay.getDate()}
            </div>
            <div className="text-sm font-semibold text-amber-200">
              Tháng {selectedDay.getMonth() + 1}, Năm {selectedDay.getFullYear()}
            </div>
          </div>

          {/* Lunar Info Card */}
          <div className="red-paper-bg rounded-2xl p-5 text-center text-yellow-100 shadow-inner space-y-2">
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-widest flex items-center justify-center space-x-1">
              <Moon className="w-3.5 h-3.5 text-yellow-300" />
              <span>Âm Lịch Việt Nam</span>
            </div>

            <div className="text-2xl font-serif font-bold text-yellow-200">
              Ngày {selectedLunar.lunarDay} Tháng {selectedLunar.lunarMonth}
            </div>

            <div className="text-xs text-yellow-100/90 font-serif italic">
              {selectedLunar.lunarDateStr}
            </div>
          </div>

          {/* Can Chi Details */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-amber-500/10">
              <span className="text-amber-300 font-bold">Năm Can Chi:</span>
              <span className="text-amber-100 font-semibold">{selectedLunar.yearCanChi}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-amber-500/10">
              <span className="text-amber-300 font-bold">Tháng Can Chi:</span>
              <span className="text-amber-100 font-semibold">{selectedLunar.monthCanChi}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-amber-500/10">
              <span className="text-amber-300 font-bold">Ngày Can Chi:</span>
              <span className="text-amber-100 font-semibold">{selectedLunar.dayCanChi}</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-amber-500/10">
              <span className="text-amber-300 font-bold">Tiết Khí:</span>
              <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span>Hoàng Đạo (Ngày Tốt)</span>
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
