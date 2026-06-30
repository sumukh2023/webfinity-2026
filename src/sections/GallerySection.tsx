import { Section, SectionHeading } from '@/components/Section';
import { Gallery } from '@/components/Gallery';
import { carnivalScenes } from '@/components/assets/CarnivalScenes';

export function GallerySection() {
  return (
    <Section spacing="lg">
      <SectionHeading
        eyebrow="Last year’s festa"
        title="A little taste of the day"
        description="Hand-printed scenes from Festa Italiana — a hint of what’s coming on October 17."
      />
      <div className="mt-14">
        <Gallery items={carnivalScenes} columns={3} />
      </div>
    </Section>
  );
}
