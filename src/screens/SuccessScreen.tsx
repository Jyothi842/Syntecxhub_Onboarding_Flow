import { useMemo } from 'react';
import { Button } from '../components/Button';
import { ScreenShell } from '../components/ScreenShell';
import { SuccessIllustration } from '../components/illustrations/SuccessIllustration';
import { LayoutDashboard, Target, Zap, GraduationCap } from 'lucide-react';

interface SuccessScreenProps {
  onNext: () => void;
}

const CONFETTI_COLORS = ['#00D4FF', '#7C3AED', '#FF4D9D', '#33C3FF', '#A78BFA', '#FF6FB5', '#C4A8FF'];
const PARTICLE_COLORS = ['#00D4FF', '#A78BFA', '#FF4D9D', '#33C3FF', '#C4A8FF'];

const ACHIEVEMENTS = [
  { icon: Target, value: '5+', label: 'Goals Selected', gradient: 'from-primary-400 to-secondary-500' },
  { icon: Zap, value: '8+', label: 'Skills Chosen', gradient: 'from-accent-400 to-primary-500' },
  { icon: GraduationCap, value: 'Ready', label: 'To Learn', gradient: 'from-accent-500 to-secondary-500' },
];

export function SuccessScreen({ onNext }: SuccessScreenProps) {
  const confetti = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 2.5 + Math.random() * 2.5,
        size: 5 + Math.random() * 10,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rounded: Math.random() > 0.5,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        bottom: 10 + Math.random() * 40,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
        size: 4 + Math.random() * 6,
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      })),
    []
  );

  return (
    <ScreenShell current={5} total={5} showProgress>
      {/* Confetti layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="absolute top-0 animate-confetti-fall"
            style={{
              left: `${c.left}%`,
              width: `${c.size}px`,
              height: `${c.size * 1.4}px`,
              backgroundColor: c.color,
              borderRadius: c.rounded ? '50%' : '2px',
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              boxShadow: `0 0 8px ${c.color}80`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="flex h-full flex-col">
        {/* Illustration with success glow */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <div className="animate-scale-in animate-success-glow">
            <SuccessIllustration />
          </div>
        </div>

        {/* Text + Achievement cards + CTA */}
        <div className="shrink-0 space-y-4">
          <div className="space-y-2 text-center animate-fade-in-up animate-delay-200">
            <h1 className="text-[28px] font-bold leading-tight text-white">
              You're Ready!{' '}
              <span className="inline-block animate-bounce-soft">🎉</span>
            </h1>
            <p className="text-sm text-white/60 leading-relaxed px-4">
              Your personalized learning journey starts now.
            </p>
          </div>

          {/* Achievement summary cards */}
          <div className="grid grid-cols-3 gap-2.5 animate-fade-in-up animate-delay-300">
            {ACHIEVEMENTS.map((stat, i) => (
              <div
                key={i}
                className="glass-premium rounded-2xl p-3 flex flex-col items-center gap-1.5 animate-stat-pop"
                style={{ animationDelay: `${0.4 + i * 0.12}s` }}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-glow`}>
                  <stat.icon className="h-4.5 w-4.5 text-white" strokeWidth={2} style={{ width: '18px', height: '18px' }} />
                </div>
                <div className="text-lg font-bold text-white leading-none">{stat.value}</div>
                <div className="text-[10px] text-white/50 text-center leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up animate-delay-500 pt-1">
            <Button onClick={onNext}>
              <LayoutDashboard className="h-4 w-4" />
              Go To Dashboard
            </Button>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
