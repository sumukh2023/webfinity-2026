import { Section, SectionHeading } from '@/components/Section';
import { Gallery } from '@/components/Gallery';
import { PiazzaScene } from '@/components/assets/PiazzaScene';

const items = [
  {
    node: <PiazzaScene variant="skyline" />,
    caption: 'A Florentine skyline at dusk',
    tall: true,
    alt: 'Illustrated Italian skyline with a duomo and campanile',
  },
  {
    node: <PiazzaScene variant="arches" />,
    caption: 'Renaissance colonnade',
    alt: 'Illustrated row of Roman arches',
  },
  {
    node: <PiazzaScene variant="stage" />,
    caption: 'On the main stage',
    alt: 'Illustrated theatre stage under warm light',
  },
  {
    node: <PiazzaScene variant="coast" />,
    caption: 'Evening on the coast',
    alt: 'Illustrated Amalfi coastline with terraced houses',
  },
  {
    node: <PiazzaScene variant="skyline" />,
    caption: 'Lantern light over the piazza',
    tall: true,
    alt: 'Illustrated Italian skyline with lit windows',
  },
  {
    node: <PiazzaScene variant="arches" />,
    caption: 'Under the loggia',
    alt: 'Illustrated arched loggia',
  },
];

export function GallerySection() {
  return (
    <Section spacing="lg">
      <SectionHeading
        title="A glimpse of the evening ahead"
        description="Streets, arches, stages and light: a first look at the Italy we are bringing to Malleswaram."
      />
      <div className="mt-14">
        <Gallery items={items} columns={3} />
      </div>
    </Section>
  );
}
