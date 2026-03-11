'use client';

type FaqItemProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;   
  onToggle: () => void;  
};

export function FaqItem({ index, question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-cyan-300/15 bg-[var(--card)]">
      <button
        type="button"
        onClick={onToggle} // Call the parent's toggle function
        className={`faq-q flex w-full items-center justify-between gap-4 bg-transparent px-7 py-[22px] text-left text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)] hover:cursor-pointer ${isOpen ? 'open' : ''}`}
      >
        <span className="text-base font-semibold leading-[1.4]">
          <span className="mr-3 font-mono text-[13px] text-[var(--accent)]" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
            Q{String(index + 1).padStart(2, '0')}
          </span>
          {question}
        </span>

        <span
          className={`shrink-0 text-lg text-[var(--accent)] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'max-h-[300px]' : 'max-h-0'
        }`}
      >
        <div className="px-7 pb-[22px] text-[15px] leading-[1.75] text-[var(--muted)]">
          {answer}
        </div>
      </div>
    </div>
  );
}