export interface LogoEmblemProps {
  readonly size?: number;
  readonly variant?: 'pink' | 'cream';
}

export function LogoEmblem({ size = 38, variant = 'pink' }: LogoEmblemProps) {
  const fillBg = variant === 'pink' ? '#F5CED8' : '#FFFDFB';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      <circle cx="64" cy="64" r="60" fill={fillBg} stroke="#2B1712" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      <circle
        cx="64"
        cy="64"
        r="52"
        stroke="#4A251B"
        strokeWidth="1.4"
        strokeDasharray="3.2 3.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M42 42c6-9 38-9 44 0M50 38c4-6 24-6 28 0"
        stroke="#D89448"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="64" cy="30" r="2.5" fill="#D89448" />
      <text
        x="64"
        y="66"
        textAnchor="middle"
        fontFamily="Instrument Serif, Georgia, serif"
        fontStyle="italic"
        fontSize="23"
        fill="#2B1712"
      >
        Confeitaria
      </text>
      <text
        x="64"
        y="85"
        textAnchor="middle"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="700"
        fontSize="12"
        letterSpacing="2.2"
        fill="#2B1712"
      >
        PAMPULHA
      </text>
      <circle cx="54" cy="96" r="1.8" fill="#D89448" />
      <circle cx="64" cy="96" r="1.8" fill="#D89448" />
      <circle cx="74" cy="96" r="1.8" fill="#D89448" />
    </svg>
  );
}

export default LogoEmblem;
