import { Sparkles } from 'lucide-react';

interface SkillUpLogoProps {
  size?: 'sm' | 'md';
}

export function SkillUpLogo({ size = 'md' }: SkillUpLogoProps) {
  const box = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const icon = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const text = size === 'sm' ? 'text-base' : 'text-lg';

  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative flex ${box} items-center justify-center rounded-xl gradient-primary shadow-glow-cyan`}>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-white/15" />
        <Sparkles className={`${icon} text-white relative z-10`} />
      </div>
      <span className={`${text} font-bold text-white tracking-tight`}>SkillUp</span>
    </div>
  );
}
