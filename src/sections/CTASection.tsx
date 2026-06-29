import { ArrowRight, CalendarPlus } from 'lucide-react';
import { Section } from '@/components/Section';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AuroraBackground } from '@/components/assets/AuroraBackground';
import { ScaleIn } from '@/components/animations';

export function CTASection() {
  return (
    <Section id="cta" spacing="lg">
      <ScaleIn>
        <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-20 text-center">
          <AuroraBackground grid={false} />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-gradient font-display text-3xl font-extrabold tracking-tightest sm:text-5xl">
              Andiamo! Save your spot.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              One day, all of Italy, right here at Lincoln High. Grab a wristband
              now and skip the line on October 17.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AnimatedButton variant="gradient" size="lg" className="group">
                <span className="inline-flex items-center gap-2">
                  Get your tickets
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </AnimatedButton>
              <AnimatedButton variant="glass" size="lg" shine={false}>
                <span className="inline-flex items-center gap-2">
                  <CalendarPlus className="h-4 w-4" /> Add to calendar
                </span>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </ScaleIn>
    </Section>
  );
}
