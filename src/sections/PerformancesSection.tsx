import { Section } from '@/components/Section';
import { PiazzaScene } from '@/components/assets/PiazzaScene';
import { SlideUp, StaggerChildren, StaggerItem } from '@/components/animations';

const acts = [
  {
    title: 'Orchestra',
    description:
      'A full student orchestra opens and closes the day with Italian classics and cinematic scores.',
  },
  {
    title: 'Choir',
    description:
      'Voices in harmony, from sacred Renaissance polyphony to the songs of modern Italian cinema.',
  },
  {
    title: 'Dance',
    description:
      'Ensemble choreography that moves between classical grace and contemporary energy.',
  },
  {
    title: 'Fashion Show',
    description:
      'A Milanese-inspired runway styled and walked entirely by students.',
  },
  {
    title: 'Theatre',
    description:
      'Short dramatic pieces drawing on commedia dell’arte and Italian storytelling.',
  },
  {
    title: 'Instrumental Ensembles',
    description:
      'Strings, winds and small groups performing throughout the piazza all day.',
  },
];

export function PerformancesSection() {
  return (
    <Section id="performances" spacing="lg" className="bg-secondary/30">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SlideUp className="lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">On stage</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Performances inspired by Italian music, cinema and tradition
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Months of rehearsal come to life across the day. Every act on the
            Flash @ Brigade stage is created and performed by our students: a
            tribute to the artistry of Italy, told in their own voice.
          </p>
          <div
            role="img"
            aria-label="An illustrated Italian theatre stage under warm light"
            className="ring-gold/20 mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border ring-1 ring-inset"
          >
            <PiazzaScene variant="stage" />
          </div>
        </SlideUp>

        <StaggerChildren className="divide-y divide-border border-t border-border">
          {acts.map((act, i) => (
            <StaggerItem key={act.title}>
              <div className="group flex items-baseline gap-6 py-7 transition-colors">
                <span className="font-display text-lg font-semibold tabular-nums text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                    {act.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {act.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}
