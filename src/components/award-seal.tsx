export function AwardSeal() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="h-40 w-40 sm:h-48 sm:w-48"
      role="img"
      aria-label="TOP Įmonė 2026"
    >
      <defs>
        <linearGradient id="seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e7b2" />
          <stop offset="0.45" stopColor="#d4ae58" />
          <stop offset="1" stopColor="#8d6a22" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="106" fill="url(#seal-gold)" />
      <circle cx="110" cy="110" r="96" fill="#161616" />
      <circle
        cx="110"
        cy="110"
        r="88"
        fill="none"
        stroke="#e6c878"
        strokeWidth="1.5"
      />
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i / 28) * Math.PI * 2;
        const r = 80;
        return (
          <circle
            key={i}
            cx={110 + Math.cos(angle) * r}
            cy={110 + Math.sin(angle) * r}
            r={i % 2 === 0 ? 1.6 : 0.8}
            fill="#e6c878"
          />
        );
      })}
      <text
        x="110"
        y="96"
        textAnchor="middle"
        fill="#f3e2ad"
        fontSize="15"
        letterSpacing="3.2"
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        TOP ĮMONĖ
      </text>
      <text
        x="110"
        y="132"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="36"
        fontWeight="700"
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        2026
      </text>
      <text
        x="110"
        y="156"
        textAnchor="middle"
        fill="#e6c878"
        fontSize="11"
        letterSpacing="1.6"
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        REKVIZITAI.LT
      </text>
    </svg>
  );
}
