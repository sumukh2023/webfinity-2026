import { Section, SectionHeading } from '@/components/Section';
import { Timeline } from '@/components/Timeline';

const items = [
  {
    time: '10:00',
    title: 'Gates open · Buongiorno!',
    description:
      'Espresso and cornetti at the entrance, live accordion, and the ribbon-cutting by the principal in the main piazza.',
  },
  {
    time: '12:00',
    title: 'Tarantella dance lesson',
    description:
      'Everyone welcome on the main stage — no experience needed. Pizza alley fires up its first margheritas.',
  },
  {
    time: '15:00',
    title: 'The Great Bake-Off',
    description:
      'Students and families go head-to-head in the cannoli and tiramisù contest. Public tasting (and voting) right after.',
  },
  {
    time: '17:00',
    title: 'Prize draw & gelato hour',
    description:
      'Cash in your game tickets at the prize cart, then cool down — all twelve gelato flavours, half price.',
  },
  {
    time: '19:30',
    title: 'Lantern walk & finale',
    description:
      'The band plays out the night as the quad fills with paper lanterns. Buonanotte — see you next year.',
  },
];

export function TimelineSection() {
  return (
    <Section id="schedule" spacing="lg" className="bg-secondary/20">
      <SectionHeading
        eyebrow="Saturday, October 17"
        title="The day, hour by hour"
        description="Ten hours of festa, from the first espresso to the last lantern. Come for an hour or stay for it all."
      />
      <div className="mt-16">
        <Timeline items={items} />
      </div>
    </Section>
  );
}
