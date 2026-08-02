import type { LunarDateInfo } from '../types';

// Known Tet Dates (Solar) in Vietnam Timezone
export const TET_DATES: Record<number, { year: number; month: number; day: number; canChi: string }> = {
  2025: { year: 2025, month: 1, day: 29, canChi: 'Ất Tỵ' },
  2026: { year: 2026, month: 2, day: 17, canChi: 'Bính Ngọ' },
  2027: { year: 2027, month: 2, day: 6, canChi: 'Đinh Mùi' },
  2028: { year: 2028, month: 1, day: 26, canChi: 'Mậu Thân' },
  2029: { year: 2029, month: 2, day: 13, canChi: 'Kỷ Dậu' },
  2030: { year: 2030, month: 2, day: 3, canChi: 'Canh Tuất' },
};

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export function getCanChiYear(year: number): string {
  const canIndex = (year - 4) % 10;
  const chiIndex = (year - 4) % 12;
  return `${CAN[(canIndex + 10) % 10]} ${CHI[(chiIndex + 12) % 12]}`;
}

export function getNextTetDate(now = new Date()): { date: Date; year: number; canChi: string } {
  const currentYear = now.getFullYear();
  
  for (let year = currentYear; year <= 2030; year++) {
    const info = TET_DATES[year];
    if (!info) continue;
    
    // Month in JS Date is 0-indexed (month - 1)
    const tetDate = new Date(info.year, info.month - 1, info.day, 0, 0, 0, 0);
    
    // If Tet date of current year is still in the future or today
    if (tetDate.getTime() >= now.getTime() - 86400000) {
      return {
        date: tetDate,
        year: info.year,
        canChi: info.canChi,
      };
    }
  }

  // Fallback to 2027 Tet
  const fallback = TET_DATES[2027];
  return {
    date: new Date(fallback.year, fallback.month - 1, fallback.day),
    year: fallback.year,
    canChi: fallback.canChi,
  };
}

export function getLunarDateInfo(date = new Date()): LunarDateInfo {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Simple approximations for solar-lunar conversion in Vietnam context
  // Lunar year & month calculation
  const canChiYear = getCanChiYear(year);

  // Day Can Chi approximation
  const dayCanIndex = (Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) + 9) % 10;
  const dayChiIndex = (Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) + 1) % 12;
  const dayCanChi = `${CAN[dayCanIndex]} ${CHI[dayChiIndex]}`;

  // Month Can Chi
  const monthCanIndex = (year * 12 + month + 3) % 10;
  const monthChiIndex = (month + 1) % 12;
  const monthCanChi = `${CAN[monthCanIndex]} ${CHI[monthChiIndex]}`;

  return {
    solarDateStr: `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
    lunarDateStr: `Ngày ${dayCanChi}, Tháng ${monthCanChi}, Năm ${canChiYear}`,
    lunarDay: day,
    lunarMonth: month,
    lunarYear: year,
    yearCanChi: canChiYear,
    monthCanChi,
    dayCanChi,
  };
}
