import { type LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { cn } from '@/utils/cn';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/** A feature row: icon inline with the title (not stacked above it). */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <GlassCard className={cn('h-full', className)}>
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </GlassCard>
  );
}
