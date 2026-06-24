import { Button } from '../components/Button';
import { ScreenShell } from '../components/ScreenShell';
import { WelcomeIllustration } from '../components/illustrations/WelcomeIllustration';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <ScreenShell>
      <div className="flex h-full flex-col">
        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-2">
          <div className="animate-scale-in">
            <WelcomeIllustration />
          </div>
        </div>

        {/* Text + CTA */}
        <div className="shrink-0 space-y-5">
          <div className="space-y-3 text-center">
            <h1 className="text-[30px] font-bold leading-[1.15] text-white animate-fade-in-up animate-delay-100">
              Welcome to SkillUp{' '}
              <span className="inline-block animate-bounce-soft">🚀</span>
            </h1>
            <p className="text-base font-medium gradient-text animate-fade-in-up animate-delay-200">
              Learn Skills. Build Projects. Grow Faster.
            </p>
            <p className="text-sm text-white/55 leading-relaxed px-4 animate-fade-in-up animate-delay-300">
              Join thousands of learners improving their careers through practical, project-based learning.
            </p>
          </div>

          <div className="animate-fade-in-up animate-delay-400">
            <Button onClick={onNext}>
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in animate-delay-500">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {['#4F46E5', '#9333EA', '#EC4899'].map((c, i) => (
                  <div
                    key={i}
                    className="h-5 w-5 rounded-full border-2 border-[#1a1340]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="text-xs text-white/50 ml-1">10K+ learners</span>
            </div>
            <div className="h-3 w-px bg-white/15" />
            <span className="text-xs text-white/50">Free to start</span>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
