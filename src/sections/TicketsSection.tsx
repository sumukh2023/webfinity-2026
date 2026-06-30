import { Check } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface Tier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  perks: string[];
  cta: string;
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Passeggiata',
    price: 'Free',
    cadence: 'entry',
    description: 'Wander the piazza, soak up the music, pay-as-you-go at the stalls.',
    perks: [
      'Entry to the whole quad',
      'Live music & main-stage shows',
      'Free for under-12s with a parent',
      'Tap-to-pay at any stall',
    ],
    cta: 'Reserve a free spot',
  },
  {
    name: 'Festa wristband',
    price: '$15',
    cadence: 'per person',
    description: 'The full day in one tap. Best value if you plan to eat and play.',
    perks: [
      'Everything in Passeggiata',
      '$20 of food & game credit',
      'One free gelato',
      'Skip-the-line entry lane',
    ],
    cta: 'Get a wristband',
    featured: true,
  },
  {
    name: 'Famiglia pass',
    price: '$40',
    cadence: 'up to 4 people',
    description: 'Bring the whole family. More credit, more gelato, one easy price.',
    perks: [
      'Four wristbands',
      '$60 of food & game credit',
      'Reserved table at the piazza',
      'A Festa Italiana tote to take home',
    ],
    cta: 'Bring the famiglia',
  },
];

export function TicketsSection() {
  return (
    <Section id="tickets" spacing="lg" className="bg-secondary/20">
      <SectionHeading
        eyebrow="Biglietti"
        title="Choose your festa"
        description="Every wristband supports the Lincoln High arts and exchange-trip fund. Pick a tier and we’ll see you on October 17."
      />

      <StaggerChildren className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <GlassCard
              spotlight={false}
              className={cn(
                'flex h-full flex-col',
                tier.featured &&
                  'border-primary ring-1 ring-primary lg:-mt-4 lg:pb-10'
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold tracking-tight">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{perk}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? 'default' : 'outline'}
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
