export default function MetaBar() {
    return (
      <div className="bg-ink text-gray-300 py-4 px-6 md:px-20 flex gap-8 flex-wrap text-[0.8rem] font-mono border-y border-white/10">
        <div className="flex items-center gap-2">📅 <strong>Published:</strong> January 15, 2025</div>
        <div className="flex items-center gap-2">🔄 <strong>Last Updated:</strong> June 10, 2025</div>
        <div className="flex items-center gap-2">✍️ <strong>Reviewed by:</strong> IT Industry Experts</div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 tracking-[2px]">★★★★★</span> 
          <strong className="text-accent2">4.9/5</strong> (2,847 reviews)
        </div>
        <div className="flex items-center gap-2">⏱️ <strong>Read time:</strong> ~18 min</div>
      </div>
    );
  }