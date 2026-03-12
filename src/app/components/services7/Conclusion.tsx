export default function Conclusion() {
    const pillars = [
      { label: "Efficiency", color: "bg-blue-50 text-blue-700 border-blue-400 ", desc: "Improved operations efficiency" },
      { label: "Security", color: "bg-emerald-50 text-emerald-700 border-emerald-400", desc: "Strengthened cybersecurity defenses" },
      { label: "Performance", color: "bg-orange-50 text-orange-700 border-orange-400", desc: "Continuous system performance" },
      { label: "Growth", color: "bg-purple-50 text-purple-700 border-purple-400", desc: "Focus on innovation & expansion" }
    ];
  
    return (
      <section className=" flex w-full px-6 flex-col items-center justify-center py-17">
        <div className="flex flex-col max-w-7xl ">
        <span className="text-blue-600 font-mono text-sm uppercase tracking-widest font-bold">Summary</span>
        <h2 className="text-4xl font-extrabold mt-2 mb-8 tracking-tight">Conclusion</h2>
        <div className="relative p-10 bg-white border border-gray-300 rounded-3xl  overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-purple-600"></div>
          <div className="space-y-6 text-lg text-gray-700 tracking-tight leading-relaxed">
            <p>Managed IT services have become essential for businesses that rely on digital technologies. By outsourcing IT management to specialized providers, organizations can improve operational efficiency, strengthen cybersecurity defenses, and ensure continuous system performance.</p>
            <p>From <strong className="text-gray-900">network management and cloud infrastructure to cybersecurity monitoring and technical support</strong>, managed IT services cover every aspect of modern IT environments.</p>
          </div>
          <div className="space-y-6 text-lg text-gray-700 tracking-tight leading-relaxed">
            <p>Businesses that invest in reliable managed IT solutions gain access to expert support, scalable technology, and proactive system monitoring — allowing them to focus on growth and innovation.</p>
           </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {pillars.map((p, i) => (
              <div key={i} className={`p-4 pb-12 border rounded-2xl  ${p.color}`}>
                <div style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl font-extrabold">✓ {p.label}</div>
                <div className="text-[12px] font-semibold text-gray-700 tracking-wider opacity-80 mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    );
  }