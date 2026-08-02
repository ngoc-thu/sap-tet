import { useState, useEffect } from 'react';
import type { TimeLeft } from '../types';
import { getNextTetDate } from '../utils/lunarCalendar';

export function useCountdown() {
  const [targetInfo, setTargetInfo] = useState(() => getNextTetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetInfo.date));

  function calculateTimeLeft(targetDate: Date): TimeLeft {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMs: 0,
        isTet: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      totalMs: difference,
      isTet: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const nextTime = calculateTimeLeft(targetInfo.date);
      setTimeLeft(nextTime);

      // If countdown finished, refresh next target Tet
      if (nextTime.totalMs <= 0 && !nextTime.isTet) {
        setTargetInfo(getNextTetDate());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetInfo.date]);

  return {
    timeLeft,
    targetYear: targetInfo.year,
    targetCanChi: targetInfo.canChi,
    targetDate: targetInfo.date,
  };
}
