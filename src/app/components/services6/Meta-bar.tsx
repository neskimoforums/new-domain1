'use client';

export function MetaBar() {
  return (
    <div className="relative z-50 border-b border-[#00e5ff1a] bg-[#00e5ff0d] py-[10px]">
      <div className="container-shell">
        <div 
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="flex flex-wrap items-center md:gap-[20px] gap-[10px] text-[12px] tracking-wider text-[#94a3b8]"
        >
          {/* Published Item */}
          <div className="flex items-center gap-[6px] md:text-sm text-[11px]">
            <span className="relative flex h-[6px] w-[6px] ">
              {/* The Pulse Animation */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bef264] opacity-40"></span>
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#bef264]"></span>
            </span>
            <span className="">Published: January 15, 2025</span>
          </div>

          {/* Last Updated - Using #bef264 (Accent 3) for the Brightness */}
          <div className="flex items-center gap-[6px]">
            <span className="md:text-sm text-[10px]">Last Updated:</span>
            <strong className="font-bold md:text-sm text-[10px] text-[#a3ff57] drop-shadow-[0_0_8px_rgba(190,242,100,0.3)]">
              March 10, 2026
            </strong>
          </div>

          {/* Rating Wrap */}
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center md:text-sm text-[11px] gap-[6px]">
              <span className="text-[#ffb800] ">★★★★★</span>
              <span className="font-bold text-[#ffb800]">4.9 / 5.0</span>
              <span className="text-[12px] text-[#94a3b8]">(2,847 reviews)</span>
            </div>
          </div>

          {/* Expert Badge */}
          <span className="rounded-full border border-[#bef2644d] bg-[#bef2641f] px-[10px] py-[2px] text-[12px] font-bold drop-shadow-[0_0_8px_rgba(190,242,100,0.3)] text-[#a3ff57]">
            Expert Reviewed
          </span>

          {/* E-E-A-T Badge - Using #ff3c6e (Accent 2) */}
          <span 
            className="rounded-full border border-[#ff3c6e4d] bg-[#ff3c6e1a] px-[10px] py-[2px] text-[12px] font-medium text-[#ff3c6e] drop-shadow-[0_0_8px_rgba(190,242,100,0.3)]"
          >
            E-E-A-T Verified
          </span>
        </div>
      </div>
    </div>
  );
}