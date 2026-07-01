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
  /**
   * Custom hero media (e.g. an inline SVG scene). Rendered in the framed
   * portrait slot in place of `image` — self-contained, never a broken img.
   * Provide `mediaLabel` for the accessible name.
   */
  media?: React.ReactNode;
  mediaLabel?: string;
}

export function Hero({
  label = 'Webfinity 2026',
  title = 'A premium frontend starter, ready before the clock starts.',
  subtitle = 'A reusable foundation with an animation system, component library and design tokens, so competition day is pure design and build.',
  primaryCta = { label: 'Explore components', href: '#features' },
  secondaryCta = { label: 'See the bento', href: '#bento' },
  image,
  media,
  mediaLabel,
}: HeroProps) {
  return (
    <section
      id="top"
      className="marble relative overflow-hidden pt-24 sm:pt-28"
    >
      {/* soft top vignette so the marble reads as stone, not a flat fill */}
      <div
        aria-hidden
        className="rule-gold pointer-events-none absolute inset-x-0 top-0 h-px"
      />
      <div className="container grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        <motion.div
          variants={containerVariants(0.1, 0.08)}
          initial="hidden"
          animate="visible"
        >
          {label && (
            <motion.p
              variants={childVariants}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
            >
              <span className="bg-gold/70 h-px w-8" aria-hidden />
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

        {(media || image) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="ring-gold/20 relative overflow-hidden rounded-2xl border border-border shadow-[0_28px_70px_-28px_hsl(22_18%_14%/0.4)] ring-1 ring-inset">
              {media ? (
                <div
                  role="img"
                  aria-label={mediaLabel}
                  className="aspect-[4/5] w-full"
                >
                  {media}
                </div>
              ) : (
                image && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/5] w-full object-cover"
                  />
                )
              )}
              {/* cinematic warm wash over the photograph */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
              />
            </div>
            {/* two quiet accent blocks anchoring the image, not floating chips */}
            <div className="absolute -bottom-4 -left-4 -z-10 hidden h-32 w-32 rounded-2xl bg-primary/10 sm:block" />
            <div className="absolute -right-3 -top-3 -z-10 hidden h-20 w-20 rounded-2xl bg-accent/10 sm:block" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
