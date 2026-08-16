interface PineTreeProps {
  x: number;
  scale: number;
}

function PineTree({ x, scale }: PineTreeProps) {
  return (
    <g transform={`translate(${x}, ${400 - 220 * scale}) scale(${scale})`}>
      <polygon points="40,0 0,70 80,70" />
      <polygon points="40,35 -5,110 85,110" />
      <polygon points="40,75 -12,160 92,160" />
      <rect x="34" y="155" width="12" height="30" />
    </g>
  );
}

const BACK_TREES = [40, 160, 280, 420, 560, 720, 880, 1040, 1200, 1360];
const FRONT_TREES = [0, 130, 260, 390, 520, 680, 840, 1000, 1160, 1320, 1440];

export function ForestSilhouette() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[2] pointer-events-none h-[40vh] overflow-hidden">
      <div className="mist-layer" />
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 w-full h-full"
        aria-hidden="true"
      >
        <g className="pine-back">
          {BACK_TREES.map((x, i) => (
            <PineTree key={`back-${i}`} x={x} scale={0.9 + (i % 3) * 0.15} />
          ))}
        </g>
        <g className="pine-front">
          {FRONT_TREES.map((x, i) => (
            <PineTree key={`front-${i}`} x={x} scale={1.1 + (i % 4) * 0.2} />
          ))}
        </g>
      </svg>
    </div>
  );
}
