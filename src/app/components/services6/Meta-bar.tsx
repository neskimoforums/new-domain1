export function MetaBar() {
    return (
      <div className="border-b border-cyan-300/10 bg-cyan-300/5 relative z-10">
        <div className="container-shell flex flex-wrap items-center gap-4 py-3 text-xs text-slate-400 md:gap-6">
          <div className="flex items-center gap-2 font-mono-custom">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            <span>Published: January 15, 2025</span>
          </div>
          <div className="font-mono-custom">Last Updated: <span className="text-lime-300">March 10, 2026</span></div>
          <div className="flex items-center gap-2">
            <span className="text-amber-300">★★★★★</span>
            <span className="font-mono-custom text-amber-300">4.9 / 5.0</span>
            <span className="text-slate-500">(2,847 reviews)</span>
          </div>
          <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-[11px] text-lime-300">Expert Reviewed</span>
          <span className="rounded-full border border-pink-400/30 bg-pink-400/10 px-3 py-1 text-[11px] text-pink-300">E-E-A-T Verified</span>
        </div>
      </div>
      
    );
  }