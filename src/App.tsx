import { RootLayout } from '@/layouts/RootLayout';
import { Hero } from '@/components/Hero';
import {
  FeaturesSection,
  BentoSection,
  MetricsSection,
  FoodSection,
  GallerySection,
  TimelineSection,
  TestimonialsSection,
  TicketsSection,
  FAQSection,
  CTASection,
} from '@/sections';

export default function App() {
  return (
    <RootLayout>
      <Hero
        label="Festa Italiana 2026"
        title="A whole day of Italy, at Lincoln High."
        subtitle="Street food, carnival games, gelato, live music and an art piazza. One Saturday, the whole quad becomes a festival."
        primaryCta={{ label: 'Get tickets', href: '#tickets' }}
        secondaryCta={{ label: 'See the schedule', href: '#schedule' }}
        image={{
          src: 'https://picsum.photos/seed/festa-hero-piazza/1000/1250',
          alt: 'A lively Italian street festival',
        }}
      />
      <MetricsSection />
      <FeaturesSection />
      <BentoSection />
      <FoodSection />
      <GallerySection />
      <TimelineSection />
      <TestimonialsSection />
      <TicketsSection />
      <FAQSection />
      <CTASection />
    </RootLayout>
  );
}
