import { CalendarHeart, Users, HandHeart, Sparkles } from 'lucide-react';
import { Section } from '@/components/Section';
import { SlideUp, StaggerChildren, StaggerItem } from '@/components/animations';

const pillars = [
  {
    icon: CalendarHeart,
    title: 'An annual tradition',
    description:
      'Every November the whole school comes together to build a festival from scratch. A day families across Malleswaram plan their year around.',
  },
  {
    icon: Users,
    title: 'Student-led, start to finish',
    description:
      'From the stage to the stalls, our students design, produce and run the carnival, mentored by staff and parents.',
  },
  {
    icon: HandHeart,
    title: 'A fundraiser with purpose',
    description:
      'Ticketing, food and games raise funds for the education and healthcare of children through our community outreach.',
  },
  {
    icon: Sparkles,
    title: 'A celebration of culture',
    description:
      'This year we travel to Italy: its music, cuisine, fashion and art reimagined across a single, cinematic campus.',
  },
];

export function AboutSection() {
  return (
    <Section id="about" spacing="lg">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <SlideUp>
          <p className="kicker">About the carnival</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Flash @ Brigade turns the campus into an Italian piazza
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Flash @ Brigade is the flagship carnival of The Brigade School @
              Malleswaram, a student-organised celebration that fills the campus
              with music, performance, food and light for one unforgettable
              Saturday.
            </p>
            <p>
              This year’s edition, <em>Namma Mia Carpisa</em>, draws on the
              warmth and artistry of Italy: evening piazzas and Renaissance
              galleries, food streets and fashion, all crafted by our own
              students. Every experience you enjoy helps fund a brighter future
              for children in our wider community.
            </p>
          </div>
        </SlideUp>

        <StaggerChildren className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="paper-card h-full p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}
