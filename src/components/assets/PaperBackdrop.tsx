import { cn } from '@/utils/cn';

export interface PaperBackdropProps {
  className?: string;
  /** Show the radiating sunburst behind the content. */
  sunburst?: boolean;
  /** Fade the bottom edge into the page background. */
  fade?: boolean;
}

/**
 * Vintage-poster hero/section backdrop: a faded litho sunburst, halftone
 * corners, and film grain on aged paper. Replaces the old neon "aurora".
 */
export function PaperBackdrop({
  className,
  sunburst = true,
  fade = true,
}: PaperBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      {sunburst && (
        <div
          className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
          style={{
            background:
              'repeating-conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)) 0deg 5deg, transparent 5deg 11deg)',
          }}
        />
      )}

      {/* Halftone in opposite corners for a printed feel */}
      <div className="halftone absolute -left-10 -top-10 h-56 w-56 opacity-[0.5] [mask-image:radial-gradient(circle_at_top_left,black,transparent_70%)]" />
      <div className="halftone absolute -bottom-10 -right-10 h-56 w-56 opacity-[0.5] [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]" />

      {/* Paper grain */}
      <div className="noise absolute inset-0 opacity-[0.06] mix-blend-multiply" />

      {fade && (
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </div>
  );
}
