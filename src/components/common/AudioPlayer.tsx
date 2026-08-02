import React from 'react';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
  volume: number;
  setVolume: (v: number) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  togglePlay,
  volume,
  setVolume,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="glass-card-gold rounded-full p-2 sm:px-4 sm:py-2.5 border border-amber-400/50 shadow-2xl flex items-center space-x-3 transition-all hover:scale-105">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-full font-bold text-xs transition-all ${
            isPlaying
              ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg shadow-amber-500/30 animate-pulse'
              : 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:bg-yellow-300'
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">Đang Phát Nhạc Xuân</span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4" />
              <span>Bật Nhạc Tết 🧧</span>
            </>
          )}
        </button>

        {/* Equalizer or Sparkle Indicator */}
        {isPlaying && (
          <div className="hidden sm:flex items-center space-x-1">
            <span className="w-1 h-3 bg-yellow-400 animate-pulse rounded-full" />
            <span className="w-1 h-5 bg-red-500 animate-pulse delay-75 rounded-full" />
            <span className="w-1 h-2 bg-amber-300 animate-pulse delay-150 rounded-full" />
          </div>
        )}

        {!isPlaying && (
          <span className="hidden sm:inline text-[11px] text-amber-200/70 italic">
            <Sparkles className="w-3.5 h-3.5 inline text-yellow-400 mr-1" />
            Nhấp để nghe nhạc Xuân
          </span>
        )}

        {/* Volume Slider */}
        <div className="hidden md:flex items-center space-x-2 pl-2 border-l border-amber-500/20">
          {volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 text-amber-400/60" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-16 h-1 accent-amber-400 bg-red-950 rounded-lg cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};
