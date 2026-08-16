
export function Moon() {
  return (
    <div
      className="fixed top-20 right-6 sm:right-16 z-[1] pointer-events-none moon-glow"
      aria-hidden="true"
    >
      <svg width="110" height="110" viewBox="0 0 120 120">
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="moonBody" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fdfaf1" />
            <stop offset="100%" stopColor="#cfd8de" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#moonGlow)" />
        <circle cx="60" cy="60" r="30" fill="url(#moonBody)" />
        <circle cx="50" cy="48" r="4" fill="#b8c2c9" opacity="0.5" />
        <circle cx="68" cy="58" r="6" fill="#b8c2c9" opacity="0.4" />
        <circle cx="55" cy="70" r="3" fill="#b8c2c9" opacity="0.45" />
      </svg>
    </div>
  );
}
