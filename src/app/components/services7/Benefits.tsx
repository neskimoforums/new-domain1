export default function Benefits() {
  const benefits = [
    { title: "Reduced IT Costs", desc: "Eliminates the need for large internal IT teams and expensive infrastructure, converting capital expenditure to predictable operational costs.", icon: "💰" },
    { title: "Access to Expert Support", desc: "MSPs employ specialists across multiple domains — from cloud architects to security analysts — giving you enterprise-grade expertise.", icon: "🧠" },
    { title: "Improved Security", desc: "Continuous monitoring and proactive security management dramatically reduces the risk of costly cyberattacks and data breaches.", icon: "🛡️" },
    { title: "Increased Productivity", desc: "Employees focus on core business tasks while IT professionals handle all technology systems, boosting overall efficiency.", icon: "⚡" },
    { title: "Scalable Solutions", desc: "Managed IT services scale seamlessly with your business growth, adding capacity and capabilities without major capital investment.", icon: "📈" },
    { title: "Business Continuity", desc: "Disaster recovery planning and backup services ensure operations continue even after major incidents, minimizing revenue loss.", icon: "🔄" }
  ];

  return (
    <section id="benefits" className="reveal max-w-7xl mx-auto md:px-0 px-4 py-17 border-t border-gray-300 ">
      {/* SECTION LABEL*/}
      <div 
        className="text-[12px] font-bold text-blue-600 uppercase tracking-wider mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Why Choose MSPs
      </div>

      {/* SECTION TITLE - Exact clamp and font from your CSS */}
      <h2 
        className="font-extrabold text-gray-900 mb-4 tracking-tight"
        style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          lineHeight: "1.15" 
        }}
      >
        Key Benefits of Managed IT Services
      </h2>

      {/* BENEFITS GRID - Using repeat(auto-fill, minmax(240px, 1fr)) logic */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4 mt-8">
        {benefits.map((b, i) => (
          <div 
            key={i} 
            className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl transition-all duration-250 ease-in-out hover:-translate-y-0.75 hover:border-green-500"
          >
            {/* BENEFIT ICON */}
            <div className="text-[1.6rem] shrink-0 mt-0.5">
              {b.icon}
            </div>

            <div>
              {/* BENEFIT TITLE */}
              <h3 
                className="text-[0.95rem] font-bold max-w-36 text-gray-900 mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {b.title}
              </h3>
              
              {/* BENEFIT DESC */}
              <p className="text-[11.3px] text-gray-600 leading-[1.6]">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}