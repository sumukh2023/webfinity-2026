import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface MenuItem {
  name: string;
  note: string;
  price: string;
  tag?: string;
}

interface Stall {
  region: string;
  title: string;
  items: MenuItem[];
}

const stalls: Stall[] = [
  {
    region: 'La Cucina',
    title: 'Savoury stalls',
    items: [
      { name: 'Margherita pizza', note: 'wood-fired, made to order', price: '$6' },
      { name: 'Arancini', note: 'crispy saffron rice balls', price: '$4', tag: 'V' },
      { name: 'Focaccia genovese', note: 'rosemary and sea salt', price: '$3', tag: 'V' },
      { name: 'Porchetta panino', note: 'slow-roast pork, salsa verde', price: '$7' },
    ],
  },
  {
    region: 'I Dolci',
    title: 'Sweets and gelato',
    items: [
      { name: 'Gelato, 2 scoops', note: 'twelve flavours, churned fresh', price: '$5' },
      { name: 'Cannoli siciliani', note: 'ricotta and candied orange', price: '$4' },
      { name: 'Tiramisù cup', note: 'from the bake-off kitchen', price: '$4' },
      { name: 'Blood-orange sorbetto', note: 'dairy-free', price: '$4', tag: 'VG' },
    ],
  },
  {
    region: 'Il Bar',
    title: 'Drinks',
    items: [
      { name: 'Espresso or cappuccino', note: 'pulled all day', price: '$3' },
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
        title="Eat your way across Italy"
        description="Every dish is cooked on-site by our culinary club, families and a few visiting nonni. Tap your festa wristband to pay, no cash needed."
      />

      <StaggerChildren className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {stalls.map((stall) => (
          <StaggerItem key={stall.title}>
            <div className="border-t-2 border-foreground pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {stall.region}
              </p>
              <h3 className="mt-1 font-heading text-xl font-bold tracking-tight">
                {stall.title}
              </h3>

              <ul className="mt-5 divide-y divide-border">
                {stall.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 py-3"
                  >
                    <div>
                      <p className="flex items-center gap-2 font-medium text-foreground">
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
                    <span className="font-heading font-bold text-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <p className="mt-10 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">V</span> vegetarian,{' '}
        <span className="font-semibold text-foreground">VG</span> vegan.
        Gluten-free options at every stall.
      </p>
    </Section>
  );
}
