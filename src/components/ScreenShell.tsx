import { ReactNode } from 'react';
import { SkillUpLogo } from './SkillUpLogo';

interface ScreenShellProps {
  children: ReactNode;
  showProgress?: boolean;
  current?: number;
  total?: number;
}

export function ScreenShell({
  children,
  showProgress = false,
  current = 1,
  total = 5,
}: ScreenShellProps) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      {/* Mesh gradient backdrop */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Animated aurora orbs */}
      <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary-500/35 blur-[80px] animate-mesh-shift" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-secondary-500/30 blur-[80px] animate-mesh-shift" style={{ animationDelay: '5s' }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent-500/25 blur-[80px] animate-mesh-shift" style={{ animationDelay: '10s' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 rounded-full bg-primary-400/15 blur-[80px] animate-mesh-shift" style={{ animationDelay: '7s' }} />

      {/* Top vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/50 via-transparent to-[#0B1020]/20" />

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-6 pt-7 pb-8">
        {/* Logo — consistent branding on all screens */}
        <div className="shrink-0 mb-4 animate-fade-in-up">
          <SkillUpLogo size="sm" />
        </div>

        {showProgress && (
          <div className="mb-6 shrink-0 animate-fade-in">
            <ProgressIndicatorLocal current={current} total={total} />
          </div>
        )}
        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </div>
  );
}

function ProgressIndicatorLocal({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i < current
                  ? 'w-6 bg-white'
                  : i === current - 1
                  ? 'w-6 bg-white/90'
                  : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-white/80 tabular-nums">
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-500 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
