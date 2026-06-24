export function SuccessIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[240px] aspect-square">
      {/* Burst rays */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          ))}
        </svg>
      </div>

      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-44 w-44 rounded-full bg-white/8 animate-pulse-ring" />
        <div className="absolute h-44 w-44 rounded-full bg-white/8 animate-pulse-ring" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/40 via-secondary-500/30 to-accent-500/30 blur-2xl" />

      {/* Outer glass ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-40 w-40 rounded-full glass-premium flex items-center justify-center shadow-premium animate-scale-in">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/15 to-transparent" />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />

          {/* Inner gradient circle */}
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-primary-400 via-secondary-500 to-accent-500 flex items-center justify-center shadow-glow-cyan">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-white/20" />

            {/* Checkmark */}
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative drop-shadow-lg">
              <path
                d="M20 6 9 17l-5-5"
                className="animate-check-pop"
                style={{ strokeDasharray: 30, strokeDashoffset: 0 }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Orbiting sparkles */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s' }}>
        <div className="absolute top-1 left-6 text-primary-200/80 animate-bounce-soft">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
        </div>
        <div className="absolute top-4 right-4 text-accent-300/80 animate-bounce-soft" style={{ animationDelay: '0.4s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
        </div>
        <div className="absolute bottom-6 left-2 text-primary-300/80 animate-bounce-soft" style={{ animationDelay: '0.8s' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
        </div>
        <div className="absolute bottom-4 right-8 text-secondary-300/60 animate-bounce-soft" style={{ animationDelay: '1.1s' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
        </div>
      </div>
    </div>
  );
}
