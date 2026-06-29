import { Check } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    description: 'The full day in one tap — best value if you plan to eat and play.',
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
        eyebrow="Tickets"
        title="Choose your festa"
        description="Every wristband supports the Lincoln High arts and exchange-trip fund. Pick a tier and we’ll see you on October 17."
      />

      <StaggerChildren className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <GlassCard
              spotlight={tier.featured}
              className={cn(
                'flex h-full flex-col',
                tier.featured && 'border-primary/40 shadow-glow'
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {tier.name}
                </h3>
                {tier.featured && <Badge variant="accent">Most popular</Badge>}
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold tracking-tightest">
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
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-foreground/90">{perk}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? 'gradient' : 'outline'}
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
