import { Section, SectionHeading } from '@/components/Section';
import { Testimonials } from '@/components/Testimonials';

const items = [
  {
    quote:
      'My kids talked about the gelato lab for a week. It’s the one day a year the whole school feels like a giant family dinner.',
    name: 'Maria Russo',
    role: 'Parent, Grade 9',
    rating: 5,
  },
  {
    quote:
      'I ran the gondola ring toss with my class. Watching everyone learn the tarantella at noon was the best part of my year.',
    name: 'Mr. Bianchi',
    role: 'Italian teacher',
    rating: 5,
  },
  {
    quote:
      'We raised enough at the bake-off stall to fund the spring exchange trip to Florence. Tutto bene — and so much fun.',
    name: 'Sofia Greco',
    role: 'Student council president',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section spacing="lg" className="bg-secondary/20">
      <SectionHeading
        eyebrow="From the community"
        title="Why everyone comes back"
        description="Students, teachers and families on what makes the festa their favourite day of the year."
      />
      <div className="mt-14">
        <Testimonials items={items} />
      </div>
    </Section>
  );
}
