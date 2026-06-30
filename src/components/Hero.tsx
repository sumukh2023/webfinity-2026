import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { containerVariants, childVariants } from '@/utils/motion';

export interface HeroProps {
  /** Small plain label above the headline (no pill chip). */
  label?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src: string; alt: string };
}

export function Hero({
  label = 'Webfinity 2026',
  title = 'A premium frontend starter, ready before the clock starts.',
  subtitle = 'A reusable foundation with an animation system, component library and design tokens, so competition day is pure design and build.',
  primaryCta = { label: 'Explore components', href: '#features' },
  secondaryCta = { label: 'See the bento', href: '#bento' },
  image,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28"
    >
      <div className="container grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        <motion.div
          variants={containerVariants(0.1, 0.08)}
          initial="hidden"
          animate="visible"
        >
          {label && (
            <motion.p
              variants={childVariants}
              className="font-heading text-sm font-semibold text-primary"
            >
              {label}
            </motion.p>
          )}

          <motion.h1
            variants={childVariants}
            className="mt-4 max-w-[15ch] font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="default" size="lg" className="group" asChild>
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </motion.div>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_-24px_hsl(222_24%_14%/0.35)]">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* one accent block anchoring the image, not a floating chip */}
            <div className="absolute -bottom-4 -left-4 -z-10 hidden h-32 w-32 rounded-2xl bg-primary/10 sm:block" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
