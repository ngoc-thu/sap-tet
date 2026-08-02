import { useState, useEffect, useRef } from 'react';

// Reliable audio track URLs
const TRACK_SOURCES = [
  'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chinese-oriental-flute-1052.mp3',
  'https://actions.google.com/sounds/v1/ambiences/asian_flute.ogg',
];

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize HTML5 Audio element
  useEffect(() => {
    const audio = new Audio(TRACK_SOURCES[trackIndex]);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleError = () => {
      console.warn('Audio source failed to load, switching fallback source...');
      if (trackIndex < TRACK_SOURCES.length - 1) {
        setTrackIndex((prev) => prev + 1);
      }
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, [trackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Synthesize Traditional Pentatonic Melody (Đàn Tranh / Sáo Trúc) using Web Audio API as guaranteed fallback
  const startSynthMelody = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Vietnamese traditional pentatonic scale notes (C, D, F, G, A in Hz)
      const scale = [261.63, 293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 698.46];
      let step = 0;

      if (synthTimerRef.current) clearInterval(synthTimerRef.current);

      synthTimerRef.current = window.setInterval(() => {
        if (!isPlaying) return;
        const freq = scale[Math.floor(Math.random() * scale.length)];
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = step % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Envelope: soft attack & decay
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.15 * volume, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.2);
        step++;
      }, 600);
    } catch (e) {
      console.warn('Synth audio failed:', e);
    }
  };

  const stopSynthMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('HTML5 Audio play failed, starting Web Audio synth fallback:', err);
            setIsPlaying(true);
            startSynthMelody();
          });
      } else {
        setIsPlaying(true);
        startSynthMelody();
      }
    }
  };

  // Synthesize Web Audio API sound for fireworks explosion
  const playFireworkSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      
      gain.gain.setValueAtTime(0.3 * volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // AudioContext not allowed before user gesture
    }
  };

  // Synthesize sound for fortune tube shake
  const playShakeSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300 + Math.random() * 200, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.2 * volume, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.08);
      }
    } catch {
      // ignore
    }
  };

  return {
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    playFireworkSound,
    playShakeSound,
  };
}
