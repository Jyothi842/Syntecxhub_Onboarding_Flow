import { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

interface SelectionCardProps {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  onClick: () => void;
  gradient: string;
  delay?: number;
}

export function SelectionCard({
  icon: Icon,
  label,
  selected,
  onClick,
  gradient,
  delay = 0,
}: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
      className={`group relative flex items-center gap-3.5 rounded-2xl p-4 text-left transition-all duration-400 animate-fade-in-up active:scale-[0.97] ${
        selected
          ? 'glass-premium border-transparent animate-glow-border'
          : 'glass-card hover:bg-white/12 hover:-translate-y-0.5'
      }`}
    >
      {/* Selected brighter gradient fill */}
      {selected && (
        <span
          className="absolute inset-0 rounded-2xl opacity-90 -z-10 transition-opacity duration-400"
          style={{ background: gradient }}
        />
      )}

      {/* Glowing border on selected */}
      {selected && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/40" />
      )}

      {/* Icon container */}
      <div
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-400 ${
          selected
            ? 'bg-white/30 shadow-inner-glow scale-105'
            : 'bg-white/8 group-hover:bg-white/12'
        }`}
      >
        <Icon
          className={`h-5 w-5 transition-all duration-300 ${
            selected ? 'text-white scale-110' : 'text-white/65 group-hover:text-white/85'
          }`}
          strokeWidth={2}
        />
      </div>

      {/* Label */}
      <span
        className={`flex-1 text-[15px] font-medium transition-colors duration-300 ${
          selected ? 'text-white' : 'text-white/80'
        }`}
      >
        {label}
      </span>

      {/* Check indicator with animated appearance */}
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          selected
            ? 'border-transparent bg-white text-primary-600 scale-110 shadow-md'
            : 'border-white/20 text-transparent group-hover:border-white/40'
        }`}
      >
        {selected && <Check className="h-3.5 w-3.5 animate-check-pop" strokeWidth={3.5} />}
      </div>
    </button>
  );
}
