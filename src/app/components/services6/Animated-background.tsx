export function AnimatedBackground() {
    return (
      <>
        <div className="grid-bg pointer-events-none fixed inset-0 z-0" />
        <div className="pointer-events-none fixed -left-32 -top-32 z-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl md:h-[600px] md:w-[600px]" />
        <div className="pointer-events-none fixed -bottom-24 -right-24 z-0 h-[360px] w-[360px] rounded-full bg-pink-500/10 blur-3xl md:h-[500px] md:w-[500px]" />
        <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl md:h-[400px] md:w-[400px]" />
      </>
    );
  }