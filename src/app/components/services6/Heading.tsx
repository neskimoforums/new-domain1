type SectionHeadingProps = {
    tag: string;
    title: string;
    highlight?: string;
    lead?: string;
  };
  
  export function SectionHeading({
    tag,
    title,
    highlight,
    lead,
  }: SectionHeadingProps) {
    return (
      <div className="mb-10 md:mb-12">
        <p className="font-mono mb-3 text-[11px] uppercase tracking-[0.35em] text-cyan-300">
          {tag}
        </p>
  
        <h2 className="mb-4 [font-family:var(--font-syne)] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.15] tracking-[-1px] text-white">
            {title} {highlight ? <span className="text-(--accent) text-cyan-300">{highlight}</span> : null}
        </h2>
  
        {lead ? (
          <p className="text-muted tracking-wide mt-4 max-w-3xl text-[var(--muted)] text-base leading-8 md:text-[17px]">
            {lead}
          </p>
        ) : null}
      </div>
    );
  }