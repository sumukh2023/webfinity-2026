import { Section } from '@/components/Section';
import { Stats } from '@/components/Stats';
import { Marquee } from '@/components/Marquee';
import { FadeIn } from '@/components/animations';

const stats = [
  { value: 120, suffix: '+', label: 'Student performers' },
  { value: 25, suffix: '+', label: 'Food & drink stalls' },
  { value: 18, suffix: '', label: 'Games & experiences' },
  { value: 8, suffix: '', label: 'Live performances' },
];

const cities = [
  'Roma',
  'Venezia',
  'Firenze',
  'Napoli',
  'Milano',
  'Amalfi',
  'Toscana',
  'Sicilia',
  'Verona',
];

export function MetricsSection() {
  return (
    <Section id="highlights" spacing="lg">
      <FadeIn>
        <Stats stats={stats} />
      </FadeIn>

      <FadeIn delay={0.1} className="mt-16">
        <div className="paper-card flex flex-col items-center gap-5 px-8 py-10 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
          <span className="font-display text-6xl font-semibold leading-none text-primary sm:text-7xl">
            100%
          </span>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            of every rupee raised goes directly to the education and healthcare
            of underprivileged children through the school’s community outreach.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground/70">
          A piazza drawn from every corner of Italy
        </p>
        <Marquee className="mt-6">
          {cities.map((city) => (
            <span
              key={city}
              className="font-display text-3xl font-medium italic text-muted-foreground/40 transition-colors hover:text-foreground"
            >
              {city}
            </span>
          ))}
        </Marquee>
      </FadeIn>
    </Section>
  );
}
