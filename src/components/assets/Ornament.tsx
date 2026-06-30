import { cn } from '@/utils/cn';

export interface OrnamentProps {
  className?: string;
  /** Optional word set in the middle of the rule (e.g. a star glyph or label). */
  label?: string;
}

/**
 * A centered vintage divider: an inked rule with a small diamond/star
 * flourish in the middle. Use between sections for a printed-programme feel.
 */
export function Ornament({ className, label }: OrnamentProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-md items-center gap-4 text-foreground/70',
        className
      )}
      aria-hidden
    >
      <span className="h-px flex-1 bg-foreground/30" />
      {label ? (
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em]">
          {label}
        </span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      )}
      <span className="h-px flex-1 bg-foreground/30" />
    </div>
  );
}
