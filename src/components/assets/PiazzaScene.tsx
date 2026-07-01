import { useId } from 'react';
import { cn } from '@/utils/cn';

export type PiazzaVariant = 'coast' | 'skyline' | 'arches' | 'stage';

export interface PiazzaSceneProps {
  variant?: PiazzaVariant;
  className?: string;
}

/**
 * Cinematic, self-contained Italian scenes rendered as token-driven SVG.
 * Architectural silhouettes under a warm evening sky with a fine grain:
 * sophisticated editorial art, not clipart, and never a broken photo.
 * Fills its container via preserveAspectRatio="xMidYMid slice".
 */
export function PiazzaScene({
  variant = 'skyline',
  className,
}: PiazzaSceneProps) {
  const uid = useId().replace(/:/g, '');
  const sky = `sky-${uid}`;
  const grain = `grain-${uid}`;
  const ink = 'hsl(var(--foreground))';
  const olive = 'hsl(var(--accent))';
  const gold = 'hsl(var(--gold))';

  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      className={cn('h-full w-full', className)}
      role="img"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(var(--background))" />
          <stop offset="0.42" stopColor="hsl(var(--gold) / 0.28)" />
          <stop offset="0.72" stopColor="hsl(var(--primary) / 0.42)" />
          <stop offset="1" stopColor="hsl(var(--primary) / 0.62)" />
        </linearGradient>
        <filter id={grain}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="800" height="1000" fill={`url(#${sky})`} />

      {/* Low sun */}
      <circle cx="560" cy="360" r="120" fill={gold} opacity="0.35" />
      <circle cx="560" cy="360" r="70" fill={gold} opacity="0.45" />

      {/* Distant olive hills */}
      <path
        d="M0 560 Q200 500 400 545 T800 520 V1000 H0 Z"
        fill={olive}
        opacity="0.18"
      />

      {variant === 'coast' && (
        <g>
          {/* headland */}
          <path
            d="M0 640 Q160 560 340 620 L340 780 H0 Z"
            fill={ink}
            opacity="0.9"
          />
          {/* terraced houses */}
          {[
            [60, 600],
            [110, 632],
            [175, 596],
            [230, 640],
            [285, 610],
          ].map(([x, y], i) => (
            <g key={i} fill="hsl(var(--card))" opacity="0.85">
              <rect x={x} y={y} width="34" height="30" rx="2" />
              <rect
                x={x + 8}
                y={y + 8}
                width="7"
                height="9"
                fill={ink}
                opacity="0.5"
              />
              <rect
                x={x + 20}
                y={y + 8}
                width="7"
                height="9"
                fill={ink}
                opacity="0.5"
              />
            </g>
          ))}
          {/* sea */}
          <rect
            x="0"
            y="780"
            width="800"
            height="220"
            fill={ink}
            opacity="0.14"
          />
          {[820, 860, 900].map((y, i) => (
            <path
              key={i}
              d={`M0 ${y} Q200 ${y - 12} 400 ${y} T800 ${y}`}
              fill="none"
              stroke={ink}
              strokeWidth="2"
              opacity="0.12"
            />
          ))}
          <rect
            x="0"
            y="960"
            width="800"
            height="40"
            fill="hsl(var(--foreground) / 0.85)"
          />
        </g>
      )}

      {variant === 'skyline' && (
        <g fill={ink}>
          {/* rooftops */}
          <rect x="0" y="720" width="800" height="280" opacity="0.92" />
          {/* campanile */}
          <rect x="120" y="470" width="46" height="250" opacity="0.92" />
          <polygon points="120,470 143,430 166,470" opacity="0.92" />
          {/* duomo */}
          <path d="M470 720 V620 a90 90 0 0 1 180 0 V720 Z" opacity="0.92" />
          <path
            d="M560 500 l0 40 M540 540 h40"
            stroke={gold}
            strokeWidth="5"
            opacity="0.7"
          />
          {/* smaller towers */}
          <rect x="300" y="560" width="34" height="160" opacity="0.9" />
          <rect x="700" y="600" width="40" height="120" opacity="0.9" />
          {/* lit windows */}
          {Array.from({ length: 22 }).map((_, i) => (
            <rect
              key={i}
              x={30 + (i % 11) * 70}
              y={i < 11 ? 760 : 830}
              width="10"
              height="16"
              fill={gold}
              opacity="0.5"
            />
          ))}
        </g>
      )}

      {variant === 'arches' && (
        <g fill={ink}>
          <rect x="0" y="760" width="800" height="240" opacity="0.92" />
          <rect x="0" y="300" width="800" height="40" opacity="0.92" />
          {[70, 270, 470, 670].map((x, i) => (
            <path
              key={i}
              d={`M${x} 760 V500 a80 80 0 0 1 160 0 V760 Z`}
              fill="hsl(var(--card))"
              opacity="0.14"
              stroke={ink}
              strokeWidth="10"
            />
          ))}
          {[150, 350, 550, 750].map((x, i) => (
            <rect
              key={i}
              x={x - 6}
              y="340"
              width="12"
              height="160"
              opacity="0.9"
            />
          ))}
        </g>
      )}

      {variant === 'stage' && (
        <g>
          {/* proscenium arch */}
          <path
            d="M90 900 V430 a310 200 0 0 1 620 0 V900 Z"
            fill="none"
            stroke={ink}
            strokeWidth="14"
            opacity="0.9"
          />
          {/* curtains */}
          <path
            d="M104 900 V440 q60 20 60 120 V900 Z"
            fill={ink}
            opacity="0.85"
          />
          <path
            d="M696 900 V440 q-60 20 -60 120 V900 Z"
            fill={ink}
            opacity="0.85"
          />
          {/* spotlights */}
          {[300, 400, 500].map((x, i) => (
            <polygon
              key={i}
              points={`${x},300 ${x - 60},900 ${x + 60},900`}
              fill={gold}
              opacity="0.12"
            />
          ))}
          {/* stage floor */}
          <rect
            x="0"
            y="900"
            width="800"
            height="100"
            fill={ink}
            opacity="0.9"
          />
        </g>
      )}

      {/* Fine grain */}
      <rect
        width="800"
        height="1000"
        filter={`url(#${grain})`}
        opacity="0.06"
      />
    </svg>
  );
}
