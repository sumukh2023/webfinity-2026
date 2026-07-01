import { Section, SectionHeading } from '@/components/Section';
import { Timeline } from '@/components/Timeline';

const items = [
  {
    time: '10:00',
    title: 'Opening Ceremony',
    description:
      'The gates swing open onto the piazza. A ribbon-cutting, a welcome from the Principal, and the tricolore rises over the campus.',
  },
  {
    time: '10:45',
    title: 'School Orchestra',
    description:
      'Our student orchestra opens the main stage with a programme of Italian classics, from Vivaldi to film scores.',
  },
  {
    time: '12:00',
    title: 'Italian Fashion Showcase',
    description:
      'A student-styled runway celebrating Milanese elegance: a moving gallery of colour, tailoring and confidence.',
  },
  {
    time: '13:30',
    title: 'Dance Productions',
    description:
      'Ensemble dance pieces choreographed by students, weaving classical and contemporary movement across the stage.',
  },
  {
    time: '15:00',
    title: 'Live Music',
    description:
      'Choir, strings and instrumental ensembles take turns through the afternoon as the food street hits full swing.',
  },
  {
    time: '16:30',
    title: 'Street Performers',
    description:
      'Roaming acts spill into the piazza: living statues, jugglers and mime bringing every corner to life.',
  },
  {
    time: '17:30',
    title: 'Food Festival',
    description:
      'The golden hour of the food street: tastings, the great bake-off and the aroma of wood-fired ovens everywhere.',
  },
  {
    time: '19:00',
    title: 'Evening Finale',
    description:
      'The full company returns to the stage for a headline performance as lanterns light up across the campus.',
  },
  {
    time: '20:00',
    title: 'Closing Celebration',
    description:
      'A shared toast to the day, the total raised revealed, and a warm buonanotte until next November.',
  },
];

export function TimelineSection() {
  return (
    <Section id="schedule" spacing="lg">
      <SectionHeading
        eyebrow="Saturday, 14 November 2026"
        title="The day, hour by hour"
        description="Ten hours of performance, food and celebration. Arrive for a moment or stay from the first note to the last lantern."
      />
      <div className="mt-16">
        <Timeline items={items} />
      </div>
    </Section>
  );
}
