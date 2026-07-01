import {
  GraduationCap,
  HeartPulse,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { ScaleIn, StaggerChildren, StaggerItem } from '@/components/animations';

const pillars = [
  {
    icon: GraduationCap,
    label: 'Education',
    note: 'School fees, books and supplies',
  },
  {
    icon: HeartPulse,
    label: 'Healthcare',
    note: 'Check-ups and essential care',
  },
  {
    icon: Users,
    label: 'Community service',
    note: 'Outreach beyond our gates',
  },
  {
    icon: Award,
    label: 'Student leadership',
    note: 'Run for good, by students',
  },
];

export function CharitySection() {
  return (
    <Section id="charity" spacing="lg">
      <ScaleIn>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="rule-gold pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
          />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              Why we celebrate
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              A carnival with a purpose behind every ticket
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Flash @ Brigade is a fundraiser at heart. Everything raised on the
              day supports the education and healthcare of children through the
              school’s outreach: a promise our students lead and keep.
            </p>
          </div>

          <StaggerChildren className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.label}>
                <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-left">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-foreground/10">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {p.label}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">
                    {p.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="relative z-10 mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group bg-card text-foreground hover:bg-card hover:brightness-[0.98]"
              asChild
            >
              <a href="#carnival">
                Explore the Carnival
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>
        </div>
      </ScaleIn>
    </Section>
  );
}
