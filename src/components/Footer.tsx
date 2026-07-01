import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { Section } from '@/components/Section';

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'The carnival',
    links: [
      { label: 'About', href: '#about' },
      { label: 'The piazza', href: '#carnival' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Food street', href: '#food' },
    ],
  },
  {
    title: 'Plan your day',
    links: [
      { label: 'Schedule', href: '#schedule' },
      { label: 'Performances', href: '#performances' },
      { label: 'The cause', href: '#charity' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'flash@brigadeschool.edu.in',
        href: 'mailto:flash@brigadeschool.edu.in',
      },
      { label: 'Malleswaram, Bengaluru', href: '#' },
      { label: 'Volunteer with us', href: '#' },
      { label: 'Sponsor a stall', href: '#' },
    ],
  },
];

export function Footer({
  brand = 'Flash @ Brigade',
  tagline = 'The Brigade School @ Malleswaram’s annual student-led carnival: an Italian piazza raising funds for the education and healthcare of children in our community.',
  columns = defaultColumns,
}: FooterProps) {
  return (
    <Section as="footer" spacing="md" className="border-t border-border">
      <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-lg font-semibold"
          >
            <span className="ring-gold/40 grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-base font-semibold text-primary-foreground ring-1 ring-inset">
              F
            </span>
            {brand}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand} · The Brigade School @
          Malleswaram.
        </p>
        <p>Saturday, 14 November 2026 · 10:00 to 20:00 · School Campus.</p>
      </div>
    </Section>
  );
}
