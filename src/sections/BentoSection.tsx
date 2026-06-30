import { Castle, Drama, Ship, Sparkles } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { SlideUp } from '@/components/animations';

export function BentoSection() {
  return (
    <Section id="piazza" spacing="lg" className="bg-secondary/20">
      <SectionHeading
        title="Wander the piazza"
        description="Five zones, each a different corner of Italy. Follow the bunting and let your nose lead the way."
      />

      <SlideUp className="mt-14">
        <BentoGrid className="auto-rows-[minmax(200px,auto)]">
          <BentoCard
            colSpan={2}
            rowSpan={2}
            eyebrow="Main stage, Roma"
            title="The Colosseum arena"
            description="Bounce-castle gladiators by day, live band and tarantella by night. Hourly games with prizes drawn on the big screen."
            className="justify-between"
          >
            <div className="mt-6 flex items-end gap-2">
              {[40, 65, 50, 80, 70, 95].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-full rounded-md bg-gradient-to-t from-primary/40 to-accent/60"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            eyebrow="Napoli"
            title="Pizza alley"
            description="Stretch, top and fire your own margherita."
          >
            <Sparkles className="mt-4 h-8 w-8 text-primary" />
          </BentoCard>

          <BentoCard
            eyebrow="Venezia"
            title="Mask studio"
            description="Decorate a Carnevale mask to take home."
          >
            <Drama className="mt-4 h-8 w-8 text-accent" />
          </BentoCard>

          <BentoCard
            colSpan={2}
            eyebrow="Riviera"
            title="Games on the lungomare"
            description="Gondola ring toss, bocce lanes and the Trevi Fountain coin-toss. Trade your winning tickets at the prize cart."
          >
            <Ship className="mt-4 h-8 w-8 text-primary" />
          </BentoCard>

          <BentoCard
            eyebrow="Firenze"
            title="Art piazza"
            description="Mosaic wall, gelato lab & quiet shade."
          >
            <Castle className="mt-4 h-8 w-8 text-accent" />
          </BentoCard>
        </BentoGrid>
      </SlideUp>
    </Section>
  );
}
