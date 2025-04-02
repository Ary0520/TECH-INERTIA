export default function MoneyHeistMask() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mask-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Main Mask Shape */}
          <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          
          {/* Eyes */}
          <ellipse cx="70" cy="90" rx="15" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="130" cy="90" rx="15" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
          
          {/* Mustache */}
          <path d="M85 120 Q100 140 115 120" fill="none" stroke="currentColor" strokeWidth="2" />
          
          {/* Decorative Lines */}
          <line x1="100" y1="40" x2="100" y2="60" stroke="currentColor" strokeWidth="2" />
          <line x1="160" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="100" y1="160" x2="100" y2="140" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#mask-pattern)" />
    </svg>
  );
} 