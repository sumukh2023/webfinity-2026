import { Section, SectionHeading } from '@/components/Section';
import { FAQ } from '@/components/FAQ';

const items = [
  {
    question: 'When and where is Flash @ Brigade?',
    answer:
      'Saturday, 14 November 2026, from 10:00 to 20:00 on the campus of The Brigade School @ Malleswaram. The stage and food street run rain or shine.',
  },
  {
    question: 'How does entry work?',
    answer:
      'Entry is by carnival pass, available online in advance and at the gate on the day. Current families and alumni receive a priority entry lane, and details are shared through the school office.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Limited parking is available on and around campus, with marshals directing traffic near the Malleswaram entrance. We warmly encourage carpooling or the nearby metro, as spaces fill quickly.',
  },
  {
    question: 'How do tickets and credit work?',
    answer:
      'Your pass includes entry to the whole piazza and every stage performance. Food and games run on a tap-to-pay carnival card you top up at the entrance, so there is no need to carry cash between stalls.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'Come as you are, though many guests embrace the theme with a touch of Italian elegance. Comfortable shoes are a good idea, as there is a lot of beautiful piazza to wander.',
  },
  {
    question: 'What food options are there?',
    answer:
      'A full Italian food street, from wood-fired pizza and fresh pasta to gelato and espresso. Every stall clearly labels vegetarian, vegan and gluten-free dishes. Just ask a volunteer in a green apron.',
  },
  {
    question: 'Is the carnival accessible?',
    answer:
      'Yes. The main routes and stage areas are step-free and wheelchair accessible, with accessible restrooms on site and volunteers ready to help. Reach out ahead of the day and we will make sure you are looked after.',
  },
  {
    question: 'Can I take photographs, and how do I pay?',
    answer:
      'Personal photography is welcome across the piazza. Payments are cashless throughout. Top up your carnival card with UPI or card at any entry point, then simply tap to pay at every stall and game.',
  },
];

export function FAQSection() {
  return (
    <Section id="faq" spacing="lg" className="bg-secondary/30">
      <SectionHeading
        title="Good to know before you come"
        description="The practical details, answered. Anything else, our volunteers will be glad to help on the day."
      />
      <div className="mt-12">
        <FAQ items={items} />
      </div>
    </Section>
  );
}
