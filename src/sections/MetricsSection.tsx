import { Section } from '@/components/Section';
import { Stats } from '@/components/Stats';
import { Marquee } from '@/components/Marquee';
import { FadeIn } from '@/components/animations';

const stats = [
  { value: 30, suffix: '+', label: 'Food & game stalls' },
  { value: 12, suffix: '', label: 'Gelato flavours' },
  { value: 10, suffix: 'h', label: 'Of non-stop festa' },
  { value: 1, suffix: '', label: 'Unforgettable day' },
];

const logos = [
  'Roma',
  'Venezia',
  'Firenze',
  'Napoli',
  'Toscana',
  'Sicilia',
  'Milano',
];

export function MetricsSection() {
  return (
    <Section id="stats" spacing="lg">
      <FadeIn>
        <Stats stats={stats} />
      </FadeIn>

      <FadeIn delay={0.1} className="mt-16">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/70">
          A taste of every region
        </p>
        <Marquee className="mt-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-heading text-2xl font-semibold text-muted-foreground/40 transition-colors hover:text-foreground"
            >
              {logo}
            </span>
          ))}
        </Marquee>
      </FadeIn>
    </Section>
  );
}
