const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 200 120" 
      className={className}
      fill="currentColor"
    >
      {/* Cloud icon with lock */}
      <g transform="translate(100, 30)">
        {/* Cloud shape */}
        <path 
          d="M-20,-10 C-25,-15 -30,-10 -30,-5 C-35,-8 -40,-3 -35,2 L25,2 C30,2 30,-3 25,-8 C25,-12 20,-15 15,-10 C10,-15 5,-12 0,-10 C-5,-15 -15,-12 -20,-10 Z"
          className="fill-primary/20"
        />
        {/* Lock icon */}
        <rect x="-8" y="-2" width="16" height="12" rx="2" className="fill-primary"/>
        <path d="M-5,-8 C-5,-12 -2,-15 2,-15 C6,-15 9,-12 9,-8 L9,-2 L-5,-2 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="2" cy="4" r="2" className="fill-white"/>
      </g>
      
      {/* Company name */}
      <text x="100" y="75" textAnchor="middle" className="fill-current font-bold text-xl">
        2CYBERSEC
      </text>
      <text x="100" y="95" textAnchor="middle" className="fill-current text-xs opacity-70 uppercase tracking-wider">
        Information Security
      </text>
    </svg>
  );
};

export default Logo;