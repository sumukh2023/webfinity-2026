import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaperBackdrop } from '@/components/assets/PaperBackdrop';
import { Bunting } from '@/components/assets/Bunting';
import { containerVariants, childVariants } from '@/utils/motion';

export interface HeroProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Small uppercase line beneath the CTAs (e.g. tech stack, location, tags). */
  meta?: React.ReactNode;
}

export function Hero({
  badge = 'Webfinity 2026 Starter',
  title = (
    <>
      Ship <span className="text-gradient-brand">award-winning</span> sites
      <br className="hidden sm:block" /> before the clock runs out.
    </>
  ),
  subtitle = 'A premium, reusable frontend foundation — animation system, component library, and design tokens — so competition day is pure design and build.',
  primaryCta = { label: 'Explore components', href: '#features' },
  secondaryCta = { label: 'View the bento', href: '#bento' },
  meta = 'React · Vite · Tailwind · Framer Motion · GSAP · Lenis',
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] items-center overflow-hidden pt-24"
    >
      <PaperBackdrop />

      <div className="container relative z-10">
        {/* The poster */}
        <motion.div
          variants={containerVariants(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="poster-frame mx-auto max-w-3xl rounded-md bg-card/70 px-6 py-12 text-center backdrop-blur-[2px] sm:px-12 sm:py-16"
        >
          <div className="-mt-2 mb-8">
            <Bunting />
          </div>

          <motion.div
            variants={childVariants}
            className="flex items-center justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            <Star className="h-3.5 w-3.5 fill-primary" />
            {badge}
            <Star className="h-3.5 w-3.5 fill-primary" />
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tightest sm:text-7xl md:text-8xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="gradient" size="lg" className="group" asChild>
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </motion.div>

          <motion.p
            variants={childVariants}
            className="mt-8 border-t border-foreground/15 pt-6 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {meta}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
