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
        badge="Lincoln High · Saturday, October 17"
        title={
          <>
            Festa <span className="text-gradient-brand">Italiana</span>
            <br className="hidden sm:block" /> 2026
          </>
        }
        subtitle="For one day, the school quad becomes an Italian piazza — wood-fired pizza, carnival games, fresh gelato, live tarantella and an art piazza. Buon divertimento!"
        primaryCta={{ label: 'Get your tickets', href: '#tickets' }}
        secondaryCta={{ label: 'See the schedule', href: '#schedule' }}
        meta="School Quad · 10am–8pm · Rain or shine · All welcome"
      />
      <FeaturesSection />
      <BentoSection />
      <MetricsSection />
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
