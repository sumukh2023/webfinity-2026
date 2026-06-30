import { ArrowRight, CalendarPlus } from 'lucide-react';
import { Section } from '@/components/Section';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ScaleIn } from '@/components/animations';

export function CTASection() {
  return (
    <Section id="cta" spacing="lg">
      <ScaleIn>
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-20 text-center text-primary-foreground">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Andiamo. Save your spot.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
              One day, all of Italy, right here at Lincoln High. Grab a wristband
              now and skip the line on October 17.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AnimatedButton
                size="lg"
                className="group bg-card text-foreground hover:brightness-100 hover:bg-card"
              >
                <span className="inline-flex items-center gap-2">
                  Get tickets
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                shine={false}
                className="border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
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
