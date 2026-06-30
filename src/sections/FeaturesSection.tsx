import {
  Pizza,
  IceCream2,
  Music4,
  Palette,
  Ticket,
  Trophy,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { StaggerChildren, StaggerItem } from '@/components/animations';

const features = [
  {
    icon: Pizza,
    title: 'Street food from every region',
    description:
      'Wood-fired pizza, fresh arancini, focaccia and cannoli, cooked on-site by our culinary club and local nonni.',
  },
  {
    icon: Trophy,
    title: 'Carnival games & prizes',
    description:
      'Gondola ring toss, bocce, “pin the moustache on the Mario” and a Colosseum bounce arena. Win tickets, redeem for prizes.',
  },
  {
    icon: Music4,
    title: 'Live music & tarantella',
    description:
      'Our school band plays Italian classics on the main stage, with a beginner-friendly tarantella dance lesson at noon.',
  },
  {
    icon: Palette,
    title: 'Art & craft piazza',
    description:
      'Paint a Venetian mask, fold origami gondolas, and add a tile to the giant collaborative mosaic of the Bay of Naples.',
  },
  {
    icon: IceCream2,
    title: 'The gelato lab',
    description:
      'Twelve flavours churned fresh, from stracciatella to blood-orange sorbetto. Senior science class explains the chemistry.',
  },
  {
    icon: Ticket,
    title: 'All for a good cause',
    description:
      'Every dollar goes to the Lincoln High arts and exchange-trip fund. Have fun, support your school.',
  },
];

export function FeaturesSection() {
  return (
    <Section id="attractions" spacing="lg">
      <SectionHeading
        eyebrow="What’s on"
        title="One day. All of Italy."
        description="From the first espresso to the evening lantern walk, the whole quad becomes a Mediterranean piazza for a day."
      />
      <StaggerChildren className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <FeatureCard {...f} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
