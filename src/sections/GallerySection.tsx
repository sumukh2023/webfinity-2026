import { Section, SectionHeading } from '@/components/Section';
import { Gallery } from '@/components/Gallery';

// Real photography. These are stable placeholders (picsum) standing in for
// last year's photos; swap `src` for real or generated images when available.
const PH = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const items = [
  { src: PH('festa-pizza-oven', 800, 1000), caption: 'Wood-fired pizza alley', tall: true, alt: 'Wood-fired pizza being made' },
  { src: PH('festa-gelato'), caption: 'The gelato cart', alt: 'Gelato in a cart' },
  { src: PH('festa-mask-craft'), caption: 'Mask and mosaic studio', alt: 'Decorated carnival masks' },
  { src: PH('festa-games'), caption: 'Games on the green', alt: 'Carnival games' },
  { src: PH('festa-lanterns-night', 800, 1000), caption: 'Evening lantern walk', tall: true, alt: 'Lanterns at dusk' },
  { src: PH('festa-band-stage'), caption: 'Live music on the main stage', alt: 'A band playing' },
];

export function GallerySection() {
  return (
    <Section spacing="lg">
      <SectionHeading
        title="A day that fills the whole quad"
        description="Scenes from the 2025 festa, and a taste of what comes back on October 17."
      />
      <div className="mt-14">
        <Gallery items={items} columns={3} />
      </div>
    </Section>
  );
}
