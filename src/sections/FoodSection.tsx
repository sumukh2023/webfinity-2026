import { Pizza, IceCream2, Coffee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface MenuItem {
  name: string;
  note: string;
  price: string;
  tag?: string;
}

interface Stall {
  icon: LucideIcon;
  region: string;
  title: string;
  items: MenuItem[];
}

const stalls: Stall[] = [
  {
    icon: Pizza,
    region: 'La Cucina',
    title: 'Savoury stalls',
    items: [
      { name: 'Margherita pizza', note: 'wood-fired, made to order', price: '$6' },
      { name: 'Arancini', note: 'crispy saffron rice balls', price: '$4', tag: 'V' },
      { name: 'Focaccia genovese', note: 'rosemary & sea salt', price: '$3', tag: 'V' },
      { name: 'Porchetta panino', note: 'slow-roast pork, salsa verde', price: '$7' },
    ],
  },
  {
    icon: IceCream2,
    region: 'I Dolci',
    title: 'Sweets & gelato',
    items: [
      { name: 'Gelato — 2 scoops', note: 'twelve flavours, churned fresh', price: '$5' },
      { name: 'Cannoli siciliani', note: 'ricotta & candied orange', price: '$4' },
      { name: 'Tiramisù cup', note: 'from the bake-off kitchen', price: '$4' },
      { name: 'Blood-orange sorbetto', note: 'dairy-free', price: '$4', tag: 'VG' },
    ],
  },
  {
    icon: Coffee,
    region: 'Il Bar',
    title: 'Drinks',
    items: [
      { name: 'Espresso / cappuccino', note: 'pulled all day', price: '$3' },
      { name: 'San Pellegrino', note: 'aranciata or limonata', price: '$2' },
      { name: 'Hot chocolate', note: 'thick, Torino-style', price: '$3' },
      { name: 'Italian soda', note: 'build your own syrup', price: '$3', tag: 'V' },
    ],
  },
];

export function FoodSection() {
  return (
    <Section id="food" spacing="lg">
      <SectionHeading
        eyebrow="A tavola!"
        title="Eat your way across Italy"
        description="Every dish is cooked on-site by our culinary club, families and a few visiting nonni. Tap your festa wristband to pay — no cash needed."
      />

      <StaggerChildren className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {stalls.map((stall) => (
          <StaggerItem key={stall.title}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <stall.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {stall.region}
                  </p>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {stall.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {stall.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                        {item.name}
                        {item.tag && (
                          <Badge variant="muted" className="px-1.5 py-0 text-2xs">
                            {item.tag}
                          </Badge>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                    <span className="font-heading text-sm font-semibold text-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">V</span> vegetarian ·{' '}
        <span className="font-semibold text-foreground">VG</span> vegan · gluten-free
        options at every stall.
      </p>
    </Section>
  );
}
