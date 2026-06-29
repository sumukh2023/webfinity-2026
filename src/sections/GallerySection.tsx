import { Section, SectionHeading } from '@/components/Section';
import { Gallery } from '@/components/Gallery';

const items = [
  { caption: 'Wood-fired pizza alley', tall: true },
  { caption: 'The gelato lab' },
  { caption: 'Venetian mask studio' },
  { caption: 'Gondola ring toss' },
  { caption: 'Evening lantern walk', tall: true },
  { caption: 'Tarantella on the main stage' },
];

export function GallerySection() {
  return (
    <Section spacing="lg">
      <SectionHeading
        eyebrow="Last year’s festa"
        title="A little taste of the day"
        description="Scenes from Festa Italiana 2025 — and a hint of what’s coming on October 17."
      />
      <div className="mt-14">
        <Gallery items={items} columns={3} />
      </div>
    </Section>
  );
}
