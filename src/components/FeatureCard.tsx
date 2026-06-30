import { type LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { cn } from '@/utils/cn';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/** An icon + title + copy card with a gradient icon chip. */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <GlassCard className={cn('h-full transition-transform', className)}>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </GlassCard>
  );
}
