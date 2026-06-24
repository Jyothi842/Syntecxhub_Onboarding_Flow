import { useState, useCallback } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { NotificationScreen } from './screens/NotificationScreen';
import { PersonalizationScreen } from './screens/PersonalizationScreen';
import { InterestsScreen } from './screens/InterestsScreen';
import { SuccessScreen } from './screens/SuccessScreen';
import { Sparkles, RotateCcw } from 'lucide-react';

const TOTAL_SCREENS = 5;

export default function App() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [transitioning, setTransitioning] = useState(false);

  const goNext = useCallback(() => {
    setDirection('forward');
    setTransitioning(true);
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL_SCREENS - 1));
      setTransitioning(false);
    }, 350);
  }, []);

  const restart = useCallback(() => {
    setDirection('backward');
    setTransitioning(true);
    setTimeout(() => {
      setStep(0);
      setTransitioning(false);
    }, 350);
  }, []);

  const screens = [
    <WelcomeScreen onNext={goNext} />,
    <NotificationScreen onNext={goNext} />,
    <PersonalizationScreen onNext={goNext} />,
    <InterestsScreen onNext={goNext} />,
    <SuccessScreen onNext={restart} />,
  ];

  return (
    <div className="min-h-screen w-full bg-[#0B1020] flex flex-col items-center justify-center py-6 px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-500/15 blur-[120px] animate-mesh-shift" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px] animate-mesh-shift" style={{ animationDelay: '5s' }} />
      <div className="pointer-events-none absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-secondary-500/15 blur-[120px] animate-mesh-shift" style={{ animationDelay: '10s' }} />

      {/* Mobile frame */}
      <div className="relative z-10">
        <div className="relative w-[390px] max-w-full h-[780px] max-h-[90vh] rounded-[48px] p-[4px] shadow-[0_30px_80px_-10px_rgba(0,212,255,0.35),0_0_0_1px_rgba(255,255,255,0.08)]">
          {/* Frame border gradient */}
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/25 via-white/5 to-white/15 p-[4px]">
            <div className="relative h-full w-full rounded-[44px] overflow-hidden bg-[#0B1020]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-7 w-36 rounded-b-2xl bg-black/70 backdrop-blur-sm" />

              {/* Screen content with spring transition */}
              <div
                className={`h-full w-full transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  transitioning
                    ? direction === 'forward'
                      ? 'opacity-0 translate-x-[-40px] scale-0.92'
                      : 'opacity-0 translate-x-[40px] scale-0.92'
                    : 'opacity-100 translate-x-0 scale-100'
                }`}
              >
                {screens[step]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer label */}
      <div className="relative z-10 mt-5 flex items-center gap-2 text-white/30">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="text-xs font-medium tracking-wide">SkillUp Onboarding</span>
        {step === TOTAL_SCREENS - 1 && (
          <button
            onClick={restart}
            className="ml-2 flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
