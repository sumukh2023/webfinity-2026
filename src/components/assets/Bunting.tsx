import { cn } from '@/utils/cn';

export interface BuntingProps {
  className?: string;
  /** Number of pennants to draw. */
  count?: number;
}

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent))',
  'hsl(var(--gold))',
];

/**
 * A string of triangular festival pennants in the tricolore-ish poster
 * palette. Hangs in a gentle swag across its container width.
 */
export function Bunting({ className, count = 14 }: BuntingProps) {
  const W = 1000;
  const span = W / count;
  const dip = 26; // how low the string sags in the middle
  const y = (x: number) => 8 + Math.sin((x / W) * Math.PI) * dip;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} 80`}
      preserveAspectRatio="none"
      className={cn('h-12 w-full', className)}
    >
      <path
        d={`M0 ${y(0)} Q ${W / 2} ${y(W / 2) + dip} ${W} ${y(W)}`}
        fill="none"
        stroke="hsl(var(--foreground) / 0.55)"
        strokeWidth={2}
      />
      {Array.from({ length: count }).map((_, i) => {
        const x = i * span + span / 2;
        const top = y(x) + 4;
        const half = span * 0.4;
        return (
          <polygon
            key={i}
            points={`${x - half},${top} ${x + half},${top} ${x},${top + 30}`}
            fill={COLORS[i % COLORS.length]}
            stroke="hsl(var(--foreground) / 0.5)"
            strokeWidth={1.5}
          />
        );
      })}
    </svg>
  );
}
