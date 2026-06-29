import { Section, SectionHeading } from '@/components/Section';
import { FAQ } from '@/components/FAQ';

const items = [
  {
    question: 'Where and when is it?',
    answer:
      'The Lincoln High School Quad, Saturday October 17, from 10am to 8pm. Rain or shine — the food tents and main stage are all covered.',
  },
  {
    question: 'How does the food and games money work?',
    answer:
      'Buy a wristband or load a festa card at the entrance, then tap to pay at any stall — no cash needed. Games pay out tickets you redeem for prizes at the cart.',
  },
  {
    question: 'Are there vegetarian and allergy-friendly options?',
    answer:
      'Plenty. Every stall labels vegetarian, vegan and gluten-free dishes, and the gelato lab keeps dairy-free sorbetti on a separate counter. Ask any volunteer in a green apron.',
  },
  {
    question: 'Can families and younger siblings come?',
    answer:
      'Absolutely — it’s a community event. Under-12s enter free with a parent, and the Firenze art piazza is built for little hands.',
  },
  {
    question: 'How can I help out?',
    answer:
      'We’d love that. Volunteers, bakers and stall sponsors all keep the festa running — tap “Get involved” in the footer or email the PTA and we’ll find you a spot.',
  },
];

export function FAQSection() {
  return (
    <Section id="faq" spacing="lg">
      <SectionHeading
        eyebrow="Good to know"
        title="Before you come"
        description="The practical stuff, answered. Anything else, just ask a volunteer on the day."
      />
      <div className="mt-12">
        <FAQ items={items} />
      </div>
    </Section>
  );
}
