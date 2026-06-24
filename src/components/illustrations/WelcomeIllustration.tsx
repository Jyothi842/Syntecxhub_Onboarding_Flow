export function WelcomeIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] aspect-square">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/30 via-secondary-500/20 to-accent-500/25 blur-3xl animate-pulse" />

      {/* Orbit ring */}
      <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow" />
      <div className="absolute inset-10 rounded-full border border-dashed border-white/8" />

      {/* Orbiting skill badges */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-48 w-48">
          {/* Badge 1 - top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="glass-premium rounded-2xl p-2.5 shadow-premium animate-float">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#wg1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
              </svg>
            </div>
          </div>

          {/* Badge 2 - right */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
            <div className="glass-premium rounded-2xl p-2.5 shadow-premium animate-float" style={{ animationDelay: '1.5s' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#wg2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#FF4D9D" />
                  </linearGradient>
                </defs>
                <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          {/* Badge 3 - bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="glass-premium rounded-2xl p-2.5 shadow-premium animate-float" style={{ animationDelay: '0.8s' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#wg3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
          </div>

          {/* Badge 4 - left */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="glass-premium rounded-2xl p-2.5 shadow-premium animate-float" style={{ animationDelay: '2.2s' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#wg4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="wg4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4D9D" />
                    <stop offset="100%" stopColor="#00D4FF" />
                  </linearGradient>
                </defs>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM12 6v6l4 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Central glass disc with student */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-36 w-36 rounded-full glass-premium flex items-center justify-center shadow-premium animate-scale-in">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/15 to-transparent" />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />

          {/* Student SVG */}
          <svg viewBox="0 0 120 120" className="relative w-full h-full p-4">
            <defs>
              <linearGradient id="wbodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#33C3FF" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
              <linearGradient id="wlaptopG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>

            {/* Body */}
            <path d="M42 82 Q42 68 60 68 Q78 68 78 82 L78 100 L42 100 Z" fill="url(#wbodyGrad)" />

            {/* Head */}
            <circle cx="60" cy="56" r="15" fill="#FFF0E8" />

            {/* Hair */}
            <path d="M45 54 Q46 40 60 40 Q76 40 75 54 Q75 47 60 46 Q48 47 45 54 Z" fill="#0B1020" />

            {/* Eyes */}
            <circle cx="54" cy="57" r="1.8" fill="#0B1020" />
            <circle cx="66" cy="57" r="1.8" fill="#0B1020" />

            {/* Smile */}
            <path d="M55 62 Q60 66 65 62" fill="none" stroke="#0B1020" strokeWidth="1.5" strokeLinecap="round" />

            {/* Laptop */}
            <rect x="40" y="76" width="40" height="24" rx="2" fill="url(#wlaptopG)" />
            <rect x="43" y="79" width="34" height="18" rx="1.5" fill="#0B1020" />
            <rect x="46" y="82" width="14" height="1.5" rx="0.75" fill="rgba(0,212,255,0.8)" />
            <rect x="46" y="85" width="20" height="1.5" rx="0.75" fill="rgba(167,139,250,0.6)" />
            <rect x="46" y="88" width="12" height="1.5" rx="0.75" fill="rgba(0,212,255,0.8)" />
            <rect x="46" y="91" width="18" height="1.5" rx="0.75" fill="rgba(255,77,157,0.6)" />

            {/* Laptop base */}
            <path d="M36 100 L84 100 L88 106 L32 106 Z" fill="#005266" />
          </svg>
        </div>
      </div>

      {/* Sparkles */}
      <div className="absolute top-6 left-2 text-primary-200/60 animate-bounce-soft" style={{ animationDelay: '0.3s' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
      </div>
      <div className="absolute bottom-12 right-2 text-primary-300/70 animate-bounce-soft" style={{ animationDelay: '1s' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
      </div>
      <div className="absolute top-1/3 right-0 text-accent-300/50 animate-bounce-soft" style={{ animationDelay: '1.8s' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z" /></svg>
      </div>
    </div>
  );
}
