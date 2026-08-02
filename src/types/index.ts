export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isTet: boolean;
}

export interface LunarDateInfo {
  solarDateStr: string;
  lunarDateStr: string;
  lunarDay: number;
  lunarMonth: number;
  lunarYear: number;
  yearCanChi: string;
  monthCanChi: string;
  dayCanChi: string;
  isLeapMonth?: boolean;
}

export interface FortuneItem {
  id: number;
  title: string;          // e.g. "Quẻ Số 01 - ĐẠI CÁT"
  type: 'Đại Cát' | 'Trung Cát' | 'Tiểu Cát' | 'Thượng Thượng';
  poem: string;           // Bài thơ phán quẻ
  meaning: string;        // Giải nghĩa chi tiết
  luckScore: number;      // 100%
  aspects: {
    career: string;
    love: string;
    health: string;
    wealth: string;
  };
}

export interface WishItem {
  id: string;
  category: 'gia-dinh' | 'ban-be' | 'dong-nghiep' | 'thay-co' | 'hai-huoc';
  title: string;
  content: string;
}

export interface TetFoodItem {
  id: string;
  name: string;
  region: 'Bắc' | 'Trung' | 'Nam' | 'Cả 3 miền';
  image: string;
  meaning: string;
  description: string;
}

export interface CalligraphyWord {
  character: string;      // e.g. "Phúc", "Lộc", "Thọ", "Tâm", "Nhẫn", "An"
  pinyinName: string;
  meaning: string;
  wishSentence: string;
}
