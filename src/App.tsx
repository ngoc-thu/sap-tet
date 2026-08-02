import { useState } from 'react';
import { useCountdown } from './hooks/useCountdown';
import { useAudio } from './hooks/useAudio';
import { BlossomCanvas } from './components/canvas/BlossomCanvas';
import { FireworksCanvas } from './components/canvas/FireworksCanvas';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CountdownHero } from './components/countdown/CountdownHero';
import { FortuneModal } from './components/fortune/FortuneModal';
import { CalligraphyModal } from './components/calligraphy/CalligraphyModal';
import { WishesSection } from './components/wishes/WishesSection';
import { LixiCalculator } from './components/lixi/LixiCalculator';
import { TetFoodSection } from './components/food/TetFoodSection';
import { AudioPlayer } from './components/common/AudioPlayer';

export function App() {
  const { timeLeft, targetYear, targetCanChi, targetDate } = useCountdown();
  const { isPlaying, togglePlay, volume, setVolume, playFireworkSound, playShakeSound } = useAudio();

  const [blossomType, setBlossomType] = useState<'dao' | 'mai' | ' ca-hai'>('dao');
  const [fireworkSignal, setFireworkSignal] = useState(0);
  const [isFortuneOpen, setIsFortuneOpen] = useState(false);
  const [isCalligraphyOpen, setIsCalligraphyOpen] = useState(false);

  const handleLaunchFirework = () => {
    setFireworkSignal((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen relative text-amber-100 selection:bg-red-700 selection:text-yellow-200">
      
      {/* Background Interactive Animations */}
      <FireworksCanvas
        triggerSignal={fireworkSignal}
        onFireworkExplode={playFireworkSound}
      />
      <BlossomCanvas type={blossomType} />

      {/* Main Content Layout */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* Header */}
        <Header
          blossomType={blossomType}
          setBlossomType={setBlossomType}
          isPlayingMusic={isPlaying}
          toggleMusic={togglePlay}
          onLaunchFirework={handleLaunchFirework}
          onOpenCalligraphy={() => setIsCalligraphyOpen(true)}
          onOpenFortune={() => setIsFortuneOpen(true)}
        />

        {/* Main Body */}
        <main className="flex-grow space-y-12">
          {/* Countdown Hero Section */}
          <CountdownHero
            timeLeft={timeLeft}
            targetYear={targetYear}
            targetCanChi={targetCanChi}
            targetDate={targetDate}
            onOpenFortune={() => setIsFortuneOpen(true)}
            onOpenCalligraphy={() => setIsCalligraphyOpen(true)}
          />

          {/* Library of Wishes */}
          <WishesSection />

          {/* Lixi Calculator Tool */}
          <LixiCalculator />

          {/* Tet Culinary Guide */}
          <TetFoodSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Modals */}
      <FortuneModal
        isOpen={isFortuneOpen}
        onClose={() => setIsFortuneOpen(false)}
        onPlayShakeSound={playShakeSound}
      />

      <CalligraphyModal
        isOpen={isCalligraphyOpen}
        onClose={() => setIsCalligraphyOpen(false)}
      />

      {/* Floating Audio Player Widget */}
      <AudioPlayer
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        volume={volume}
        setVolume={setVolume}
      />

    </div>
  );
}

export default App;
