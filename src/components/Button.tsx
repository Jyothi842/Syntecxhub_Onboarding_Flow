import { ButtonHTMLAttributes, ReactNode, useRef, MouseEvent } from 'react';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  fullWidth = true,
  className = '',
  disabled,
  onMouseMove,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--mx', `${x}px`);
    btn.style.setProperty('--my', `${y}px`);
    onMouseMove?.(e);
  };

  const base =
    'relative h-12 rounded-2xl font-semibold text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.95] active:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed select-none overflow-hidden';

  const variants: Record<Variant, string> = {
    primary:
      'text-white gradient-primary shadow-premium hover:shadow-[0_25px_70px_-10px_rgba(124,58,237,0.65)] hover:-translate-y-1 active:translate-y-0 animate-glow-pulse',
    ghost:
      'text-white/80 glass-premium hover:text-white hover:-translate-y-1 hover:bg-white/12 active:translate-y-0',
  };

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Cursor-following glow (primary only) */}
      {variant === 'primary' && !disabled && (
        <span
          className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.25), transparent 60%)',
          }}
        />
      )}

      {/* Shimmer sweep */}
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 animate-shimmer" />
        </span>
      )}

      {/* Top highlight line */}
      <span className="pointer-events-none absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/15 to-transparent" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
