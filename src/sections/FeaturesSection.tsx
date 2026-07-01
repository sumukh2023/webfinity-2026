import {
  Pizza,
  IceCream2,
  Drama,
  Camera,
  Mic2,
  Frame,
  Coffee,
  CookingPot,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { StaggerChildren, StaggerItem } from '@/components/animations';

const experiences = [
  {
    icon: Pizza,
    title: 'Pizza Making',
    description:
      'Stretch, top and fire your own margherita in the wood-oven workshop, guided by our culinary team.',
  },
  {
    icon: IceCream2,
    title: 'Gelato Corner',
    description:
      'Twelve flavours churned fresh, from stracciatella to blood-orange sorbetto. The coolest queue on campus.',
  },
  {
    icon: Drama,
    title: 'Venetian Mask Workshop',
    description:
      'Craft and decorate a Carnevale mask to wear through the piazza and carry home as a keepsake.',
  },
  {
    icon: Camera,
    title: 'Photo Piazza',
    description:
      'Step into a hand-painted Italian streetscape and leave with a portrait worthy of the Amalfi Coast.',
  },
  {
    icon: Mic2,
    title: 'Opera Experience',
    description:
      'Intimate arias performed up close, with a chance to learn the story behind each unforgettable aria.',
  },
  {
    icon: Frame,
    title: 'Italian Art Gallery',
    description:
      'A curated walk through student works inspired by Renaissance masters, framed under warm light.',
  },
  {
    icon: Coffee,
    title: 'Coffee Bar',
    description:
      'A proper Italian espresso bar. Cappuccino, macchiato and affogato pulled all day long.',
  },
  {
    icon: CookingPot,
    title: 'Pasta Kitchen',
    description:
      'Roll and shape fresh pasta by hand, then taste it dressed in a simple, sun-ripe sauce.',
  },
];

export function FeaturesSection() {
  return (
    <Section id="experiences" spacing="lg">
      <SectionHeading
        title="Italian experiences to step into"
        description="More than a show to watch. A day to taste, make and take part in, from the pasta kitchen to the opera stage."
      />
      <StaggerChildren className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((f) => (
          <StaggerItem key={f.title}>
            <FeatureCard {...f} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
