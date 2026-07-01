import { RootLayout } from '@/layouts/RootLayout';
import { Hero } from '@/components/Hero';
import { PiazzaScene } from '@/components/assets/PiazzaScene';
import {
  AboutSection,
  GallerySection,
  BentoSection,
  MetricsSection,
  TimelineSection,
  FeaturesSection,
  PerformancesSection,
  FoodSection,
  CharitySection,
  FAQSection,
} from '@/sections';

export default function App() {
  return (
    <RootLayout>
      <Hero
        label="The Brigade School @ Malleswaram · Sat 14 Nov 2026"
        title={
          <>
            <span className="block">Flash @ Brigade</span>
            <span className="mt-3 block font-display text-3xl font-normal italic text-primary sm:text-4xl lg:text-5xl">
              Namma Mia Carpisa
            </span>
          </>
        }
        subtitle="Experience the elegance, flavours, music and timeless charm of Italy at The Brigade School @ Malleswaram’s biggest annual fundraising carnival."
        primaryCta={{ label: 'Explore the Carnival', href: '#carnival' }}
        secondaryCta={{ label: 'View Schedule', href: '#schedule' }}
        media={<PiazzaScene variant="coast" />}
        mediaLabel="A cinematic Italian coastal piazza at golden hour"
      />
      <AboutSection />
      <GallerySection />
      <BentoSection />
      <MetricsSection />
      <TimelineSection />
      <FeaturesSection />
      <PerformancesSection />
      <FoodSection />
      <CharitySection />
      <FAQSection />
    </RootLayout>
  );
}
