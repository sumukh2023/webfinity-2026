import {
  Drama,
  PartyPopper,
  Pizza,
  Car,
  Store,
  Blocks,
  Palette,
  Music4,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { SlideUp } from '@/components/animations';

export function BentoSection() {
  return (
    <Section id="carnival" spacing="lg" className="bg-secondary/30">
      <SectionHeading
        eyebrow="Wander the carnival"
        title="Eight worlds, one Italian evening"
        description="Follow the lantern light from a Venetian masquerade to a Renaissance gallery, a Ferrari paddock to a food street that never ends."
      />

      <SlideUp className="mt-14">
        <BentoGrid className="auto-rows-[minmax(190px,auto)]">
          <BentoCard
            colSpan={2}
            rowSpan={2}
            eyebrow="Main piazza"
            title="Piazza Performances"
            description="The beating heart of the carnival: a grand open-air stage where orchestras, dancers and fashion give way to a live band as the sun goes down."
            className="justify-between"
          >
            {/* a quiet Roman colonnade instead of a chart */}
            <div aria-hidden className="mt-8 flex items-end gap-2 opacity-80">
              {[60, 88, 72, 96, 68, 84, 76].map((h, i) => (
                <div key={i} className="flex-1">
                  <div
                    style={{ height: `${h}px` }}
                    className={
                      i % 2 === 0
                        ? 'rounded-t-full bg-primary/25'
                        : 'rounded-t-full bg-accent/25'
                    }
                  />
                  <div className="h-1 rounded-sm bg-foreground/20" />
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            eyebrow="Venezia"
            title="Venetian Carnival"
            description="Masquerade alley, feathered masks and mystery."
          >
            <PartyPopper className="mt-4 h-8 w-8 text-primary" />
          </BentoCard>

          <BentoCard
            eyebrow="Modena"
            title="Ferrari Zone"
            description="A paddock of prancing horses and roaring engines."
          >
            <Car className="mt-4 h-8 w-8 text-accent" />
          </BentoCard>

          <BentoCard
            colSpan={2}
            eyebrow="Napoli"
            title="Italian Food Street"
            description="A ribbon of stalls from wood-fired pizza to fresh gelato, cannoli carts and an all-day espresso bar."
          >
            <Pizza className="mt-4 h-8 w-8 text-primary" />
          </BentoCard>

          <BentoCard
            eyebrow="Firenze"
            title="Renaissance Gallery"
            description="Student masterworks under warm gallery light."
          >
            <Palette className="mt-4 h-8 w-8 text-accent" />
          </BentoCard>

          <BentoCard
            eyebrow="Mercato"
            title="Artisan Market"
            description="Handmade crafts, ceramics and keepsakes."
          >
            <Store className="mt-4 h-8 w-8 text-primary" />
          </BentoCard>

          <BentoCard
            colSpan={2}
            eyebrow="Live music stage"
            title="Live Music Stage"
            description="From choir and strings to an evening set: the soundtrack to the whole piazza, playing right through to the finale."
          >
            <Music4 className="mt-4 h-8 w-8 text-accent" />
          </BentoCard>

          <BentoCard
            colSpan={3}
            eyebrow="Piccola Italia"
            title="Little Italy for Kids"
            description="A gentle corner for our youngest guests: pizza-dough play, storytelling gondolas, face painting and games, all at kid height."
            className="sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="mt-4 flex gap-3 sm:mt-0">
              <Blocks className="h-8 w-8 text-primary" />
              <Drama className="h-8 w-8 text-accent" />
            </div>
          </BentoCard>
        </BentoGrid>
      </SlideUp>
    </Section>
  );
}
