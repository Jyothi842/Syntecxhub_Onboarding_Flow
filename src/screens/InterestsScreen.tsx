import { useState } from 'react';
import { Button } from '../components/Button';
import { ScreenShell } from '../components/ScreenShell';
import { Check } from 'lucide-react';

interface InterestsScreenProps {
  onNext: () => void;
}

const INTERESTS = [
  { id: 'figma', label: 'Figma', color: '#F24E1E', emoji: '🎨' },
  { id: 'canva', label: 'Canva', color: '#00C4CC', emoji: '🖌️' },
  { id: 'bolt', label: 'Bolt AI', color: '#00D4FF', emoji: '⚡' },
  { id: 'html', label: 'HTML', color: '#E34F26', emoji: '📄' },
  { id: 'css', label: 'CSS', color: '#1572B6', emoji: '🎯' },
  { id: 'js', label: 'JavaScript', color: '#F7DF1E', emoji: '✨' },
  { id: 'github', label: 'GitHub', color: '#181717', emoji: '🐙' },
  { id: 'python', label: 'Python', color: '#3776AB', emoji: '🐍' },
];

export function InterestsScreen({ onNext }: InterestsScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <ScreenShell current={4} total={5} showProgress>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="shrink-0 space-y-2.5 mb-5 animate-fade-in-up">
          <h1 className="text-[24px] font-bold leading-tight text-white">
            Choose Your Interests
          </h1>
          <p className="text-sm text-white/55">
            Pick the skills you want to learn.{' '}
            <span className="text-white/80 font-medium">
              {selected.length} selected
            </span>
          </p>
        </div>

        {/* Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pb-2">
          <div className="grid grid-cols-2 gap-3">
            {INTERESTS.map((interest, i) => {
              const isSelected = selected.includes(interest.id);
              return (
                <button
                  key={interest.id}
                  onClick={() => toggle(interest.id)}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  className={`group relative flex flex-col items-center justify-center gap-2.5 rounded-2xl p-5 transition-all duration-400 animate-fade-in-up active:scale-[0.96] ${
                    isSelected
                      ? 'glass-premium animate-glow-border'
                      : 'glass-card hover:bg-white/12 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Selected brighter gradient overlay */}
                  {isSelected && (
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/60 via-secondary-500/50 to-accent-500/50 -z-10" />
                  )}
                  {/* Glowing border on selected */}
                  {isSelected && (
                    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/40" />
                  )}

                  {/* Emoji badge */}
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-400 ${
                      isSelected
                        ? 'bg-white/25 scale-110 shadow-inner-glow'
                        : 'bg-white/8 group-hover:bg-white/12'
                    }`}
                  >
                    {isSelected ? (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
                        <Check className="h-4 w-4 text-primary-600 animate-check-pop" strokeWidth={3.5} />
                      </div>
                    ) : (
                      <span className="group-hover:scale-110 transition-transform duration-300">{interest.emoji}</span>
                    )}
                  </div>

                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-white/75'
                    }`}
                  >
                    {interest.label}
                  </span>

                  {/* Color indicator bar */}
                  <div
                    className={`h-1 w-8 rounded-full transition-all duration-400 ${
                      isSelected ? 'opacity-100 scale-110' : 'opacity-25'
                    }`}
                    style={{ backgroundColor: isSelected ? interest.color : 'rgba(255,255,255,0.3)' }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="shrink-0 pt-4 animate-fade-in-up animate-delay-400">
          <Button onClick={onNext} disabled={selected.length === 0}>
            Finish Setup
          </Button>
        </div>
      </div>
    </ScreenShell>
  );
}
