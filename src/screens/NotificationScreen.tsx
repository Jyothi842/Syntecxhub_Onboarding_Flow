import { Button } from '../components/Button';
import { ScreenShell } from '../components/ScreenShell';
import { Bell, BookOpen, Briefcase, FolderGit2, Check } from 'lucide-react';

interface NotificationScreenProps {
  onNext: () => void;
}

const FEATURES = [
  { icon: BookOpen, label: 'Learning reminders', color: 'text-accent-300' },
  { icon: FolderGit2, label: 'Project updates', color: 'text-accent-300' },
  { icon: Briefcase, label: 'Career opportunities', color: 'text-primary-300' },
];

export function NotificationScreen({ onNext }: NotificationScreenProps) {
  return (
    <ScreenShell current={2} total={5} showProgress>
      <div className="flex h-full flex-col">
        {/* Bell illustration */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <div className="relative animate-scale-in">
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-white/8 animate-pulse-ring" />
              <div className="h-48 w-48 rounded-full bg-white/8 animate-pulse-ring" style={{ animationDelay: '1.2s' }} />
            </div>

            {/* Bell container */}
            <div className="relative h-44 w-44 rounded-full glass-premium flex items-center justify-center shadow-premium">
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/15 to-transparent" />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />

              {/* Bell with swing animation */}
              <div className="relative origin-top">
                <Bell className="h-18 w-18 text-white animate-bell-ring drop-shadow-lg" strokeWidth={1.3} style={{ width: '68px', height: '68px' }} />
              </div>

              {/* Notification badge */}
              <div className="absolute top-7 right-8 h-6 w-6 rounded-full bg-gradient-to-br from-accent-500 to-secondary-500 border-2 border-white/30 flex items-center justify-center animate-bounce-soft shadow-glow-pink">
                <span className="text-[10px] font-bold text-white">3</span>
              </div>
            </div>

            {/* Floating feature mini-cards */}
            <div className="absolute -top-1 -left-8 glass-premium rounded-2xl px-3 py-2.5 animate-float z-20 shadow-premium" style={{ animationDelay: '0.5s' }}>
              <BookOpen className="h-5 w-5 text-accent-300" />
            </div>
            <div className="absolute -bottom-2 -right-6 glass-premium rounded-2xl px-3 py-2.5 animate-float-slow z-20 shadow-premium">
              <Briefcase className="h-5 w-5 text-accent-300" />
            </div>
            <div className="absolute top-1/2 -right-10 glass-premium rounded-2xl px-3 py-2.5 animate-float z-20 shadow-premium" style={{ animationDelay: '1.2s' }}>
              <FolderGit2 className="h-5 w-5 text-primary-300" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="shrink-0 space-y-3 text-center mb-5 animate-fade-in-up animate-delay-200">
          <h1 className="text-[26px] font-bold leading-tight text-white">
            Stay Connected <span className="inline-block">🔔</span>
          </h1>
          <p className="text-sm text-white/60 leading-relaxed px-4">
            Enable notifications to receive learning reminders, project updates, and career opportunities.
          </p>
        </div>

        {/* Feature pills */}
        <div className="shrink-0 space-y-2 mb-5 animate-fade-in-up animate-delay-300">
          {FEATURES.map((f, i) => (
            <div
              key={f.label}
              className="flex items-center gap-3 glass-card rounded-xl px-4 py-2.5 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <f.icon className={`h-4 w-4 ${f.color}`} />
              </div>
              <span className="text-sm text-white/75 flex-1">{f.label}</span>
              <Check className="h-4 w-4 text-white/40" strokeWidth={2.5} />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="shrink-0 space-y-3 animate-fade-in-up animate-delay-600">
          <Button onClick={onNext}>
            <Bell className="h-4 w-4" />
            Allow Notifications
          </Button>
          <Button variant="ghost" onClick={onNext}>
            Not Now
          </Button>
        </div>
      </div>
    </ScreenShell>
  );
}
