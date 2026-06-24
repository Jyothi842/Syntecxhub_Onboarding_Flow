import { useState } from 'react';
import { Button } from '../components/Button';
import { ScreenShell } from '../components/ScreenShell';
import { SelectionCard } from '../components/SelectionCard';
import { Palette, Code2, Layers, BrainCircuit, ShieldCheck, ArrowRight } from 'lucide-react';

interface PersonalizationScreenProps {
  onNext: () => void;
}

const GOALS = [
  { id: 'uiux', label: 'UI/UX Design', icon: Palette, gradient: 'linear-gradient(135deg, #00D4FF, #7C3AED)' },
  { id: 'python', label: 'Python Development', icon: Code2, gradient: 'linear-gradient(135deg, #00D4FF, #00A8CC)' },
  { id: 'fullstack', label: 'Full Stack Development', icon: Layers, gradient: 'linear-gradient(135deg, #7C3AED, #FF4D9D)' },
  { id: 'aiml', label: 'AI/ML', icon: BrainCircuit, gradient: 'linear-gradient(135deg, #FF4D9D, #7C3AED)' },
  { id: 'security', label: 'Cyber Security', icon: ShieldCheck, gradient: 'linear-gradient(135deg, #00D4FF, #7C3AED)' },
];

export function PersonalizationScreen({ onNext }: PersonalizationScreenProps) {
  const [selected, setSelected] = useState<string[]>(['uiux']);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <ScreenShell current={3} total={5} showProgress>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="shrink-0 space-y-2.5 mb-5 animate-fade-in-up">
          <h1 className="text-[24px] font-bold leading-tight text-white">
            Personalize Your Experience
          </h1>
          <p className="text-sm text-white/55">
            Select your learning goals.{' '}
            <span className="text-white/80 font-medium">
              {selected.length} selected
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="flex-1 min-h-0 space-y-3 overflow-y-auto no-scrollbar pb-2">
          {GOALS.map((goal, i) => (
            <SelectionCard
              key={goal.id}
              icon={goal.icon}
              label={goal.label}
              selected={selected.includes(goal.id)}
              onClick={() => toggle(goal.id)}
              gradient={goal.gradient}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="shrink-0 pt-4 animate-fade-in-up animate-delay-400">
          <Button onClick={onNext} disabled={selected.length === 0}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScreenShell>
  );
}
