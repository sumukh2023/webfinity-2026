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
    title: 'From the ovens',
    items: [
      {
        name: 'Margherita Pizza',
        note: 'wood-fired, made to order',
        price: '₹180',
        tag: 'V',
      },
      {
        name: 'Fresh Pasta',
        note: 'hand-rolled, sauce of the day',
        price: '₹160',
        tag: 'V',
      },
      {
        name: 'Lasagna al Forno',
        note: 'layered and slow-baked',
        price: '₹200',
      },
      {
        name: 'Focaccia',
        note: 'rosemary and sea salt',
        price: '₹90',
        tag: 'V',
      },
      {
        name: 'Bruschetta',
        note: 'tomato, basil, olive oil',
        price: '₹110',
        tag: 'V',
      },
    ],
  },
  {
    region: 'I Dolci',
    title: 'Something sweet',
    items: [
      {
        name: 'Gelato',
        note: 'two scoops, twelve flavours',
        price: '₹120',
        tag: 'V',
      },
      {
        name: 'Cannoli',
        note: 'ricotta and candied orange',
        price: '₹110',
        tag: 'V',
      },
      {
        name: 'Tiramisù',
        note: 'from the bake-off kitchen',
        price: '₹130',
        tag: 'V',
      },
    ],
  },
  {
    region: 'Il Caffè',
    title: 'The espresso bar',
    items: [
      {
        name: 'Espresso',
        note: 'single or double, pulled fresh',
        price: '₹80',
        tag: 'V',
      },
      {
        name: 'Cappuccino',
        note: 'the classic Italian morning',
        price: '₹100',
        tag: 'V',
      },
      {
        name: 'Affogato',
        note: 'gelato drowned in espresso',
        price: '₹140',
        tag: 'V',
      },
    ],
  },
];

export function FoodSection() {
  return (
    <Section id="food" spacing="lg">
      <SectionHeading
        title="A food street that runs all day"
        description="Every dish is cooked on-site by our culinary club, families and visiting chefs. Tap your carnival card to pay, no cash needed."
      />

      <StaggerChildren className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {stalls.map((stall) => (
          <StaggerItem key={stall.title}>
            <div className="border-t-2 border-foreground pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {stall.region}
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight">
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
                          <Badge
                            variant="muted"
                            className="px-1.5 py-0 text-2xs"
                          >
                            {item.tag}
                          </Badge>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                    <span className="font-heading font-semibold text-foreground">
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
        <span className="font-semibold text-foreground">V</span> vegetarian.
        Vegan and gluten-free options at every stall. Just ask a volunteer.
      </p>
    </Section>
  );
}
