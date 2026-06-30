/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from 'react';

/**
 * Six flat, vintage-poster scene illustrations (hand-built SVG) used in place
 * of photographs. Each fills its tile via preserveAspectRatio="slice".
 * Colours are token-driven so they restyle with the theme.
 */

const INK = 'hsl(var(--foreground))';
const CREAM = 'hsl(var(--card))';
const RED = 'hsl(var(--primary))';
const TEAL = 'hsl(var(--accent))';
const GOLD = 'hsl(var(--gold))';

function Frame({
  bg,
  children,
}: {
  bg: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
    >
      <rect width="400" height="300" fill={bg} />
      {children}
    </svg>
  );
}

function Dots({ color, n = 9 }: { color: string; n?: number }) {
  const out: ReactNode[] = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < n; c++) {
      out.push(
        <circle
          key={`${r}-${c}`}
          cx={20 + c * 48}
          cy={24 + r * 52}
          r={4}
          fill={color}
        />
      );
    }
  }
  return <g opacity={0.18}>{out}</g>;
}

const Pizza = (
  <Frame bg={TEAL}>
    <Dots color={CREAM} />
    <circle cx={200} cy={150} r={104} fill={CREAM} stroke={INK} strokeWidth={5} />
    <circle cx={200} cy={150} r={84} fill={RED} />
    <circle cx={168} cy={120} r={13} fill={INK} />
    <circle cx={236} cy={132} r={13} fill={INK} />
    <circle cx={186} cy={186} r={13} fill={INK} />
    <circle cx={232} cy={186} r={11} fill={GOLD} />
    <circle cx={150} cy={168} r={10} fill={GOLD} />
    <ellipse cx={210} cy={150} rx={12} ry={7} fill={TEAL} />
  </Frame>
);

const Gelato = (
  <Frame bg={RED}>
    <Dots color={CREAM} />
    <polygon points="200,290 150,150 250,150" fill={GOLD} stroke={INK} strokeWidth={5} />
    <line x1="170" y1="180" x2="230" y2="180" stroke={INK} strokeWidth={3} opacity={0.5} />
    <line x1="182" y1="210" x2="218" y2="210" stroke={INK} strokeWidth={3} opacity={0.5} />
    <circle cx={175} cy={135} r={40} fill={CREAM} stroke={INK} strokeWidth={5} />
    <circle cx={225} cy={135} r={40} fill={TEAL} stroke={INK} strokeWidth={5} />
    <circle cx={200} cy={95} r={36} fill={CREAM} stroke={INK} strokeWidth={5} />
    <circle cx={200} cy={70} r={9} fill={RED} stroke={INK} strokeWidth={3} />
  </Frame>
);

const Mask = (
  <Frame bg={GOLD}>
    <Dots color={INK} />
    <path
      d="M120 130 Q200 90 280 130 Q290 175 250 195 Q200 215 150 195 Q110 175 120 130 Z"
      fill={TEAL}
      stroke={INK}
      strokeWidth={5}
    />
    <ellipse cx={165} cy={150} rx={22} ry={15} fill={CREAM} stroke={INK} strokeWidth={4} />
    <ellipse cx={235} cy={150} rx={22} ry={15} fill={CREAM} stroke={INK} strokeWidth={4} />
    <path d="M200 95 Q210 60 200 30 Q190 60 200 95" fill={RED} stroke={INK} strokeWidth={3} />
    <path d="M200 95 Q230 70 250 45" fill="none" stroke={RED} strokeWidth={6} />
    <path d="M200 95 Q170 70 150 45" fill="none" stroke={RED} strokeWidth={6} />
  </Frame>
);

const Gondola = (
  <Frame bg={TEAL}>
    <g stroke={CREAM} strokeWidth={4} opacity={0.4} fill="none">
      <path d="M0 230 Q50 220 100 230 T200 230 T300 230 T400 230" />
      <path d="M0 258 Q50 248 100 258 T200 258 T300 258 T400 258" />
    </g>
    <path
      d="M70 200 Q200 245 330 200 L300 215 Q200 240 100 215 Z"
      fill={INK}
    />
    <line x1="120" y1="205" x2="120" y2="120" stroke={INK} strokeWidth={5} />
    <path d="M120 120 q22 6 14 26" fill="none" stroke={INK} strokeWidth={5} />
    <rect x="170" y="170" width="60" height="22" rx="4" fill={RED} stroke={INK} strokeWidth={3} />
  </Frame>
);

const Lanterns = (
  <Frame bg="hsl(var(--accent) / 1)">
    <rect width="400" height="300" fill="hsl(186 50% 18%)" />
    <Dots color={GOLD} />
    <path d="M0 50 Q200 95 400 50" fill="none" stroke={GOLD} strokeWidth={2} />
    {[80, 160, 240, 320].map((x, i) => (
      <g key={x}>
        <line x1={x} y1={62} x2={x} y2={78} stroke={GOLD} strokeWidth={2} />
        <rect
          x={x - 18}
          y={78}
          width={36}
          height={48}
          rx={10}
          fill={i % 2 ? RED : GOLD}
          stroke={INK}
          strokeWidth={3}
        />
        <line x1={x - 18} y1={92} x2={x + 18} y2={92} stroke={INK} strokeWidth={2} opacity={0.5} />
      </g>
    ))}
  </Frame>
);

const Music = (
  <Frame bg={RED}>
    <Dots color={CREAM} />
    <g fill={CREAM} stroke={INK} strokeWidth={4}>
      <circle cx={150} cy={200} r={26} />
      <circle cx={250} cy={180} r={26} />
    </g>
    <g stroke={CREAM} strokeWidth={8} fill="none">
      <path d="M174 200 V110" />
      <path d="M274 180 V90" />
      <path d="M174 110 Q224 95 274 90" />
    </g>
    <g stroke={GOLD} strokeWidth={5} fill="none" opacity={0.8}>
      <path d="M300 150 Q330 150 330 120" />
      <path d="M300 170 Q345 170 345 120" />
    </g>
  </Frame>
);

export interface CarnivalScene {
  caption: string;
  node: ReactNode;
  tall?: boolean;
}

export const carnivalScenes: CarnivalScene[] = [
  { caption: 'Wood-fired pizza alley', node: Pizza, tall: true },
  { caption: 'The gelato lab', node: Gelato },
  { caption: 'Venetian mask studio', node: Mask },
  { caption: 'Gondola ring toss', node: Gondola },
  { caption: 'Evening lantern walk', node: Lanterns, tall: true },
  { caption: 'Tarantella on the main stage', node: Music },
];
