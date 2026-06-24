interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-medium text-white/50 tracking-wide">
          Step {current} of {total}
        </span>
        <span className="text-xs font-semibold text-white/70">
          {Math.round((current / total) * 100)}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full gradient-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
