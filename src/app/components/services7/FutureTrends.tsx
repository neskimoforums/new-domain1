export default function FutureTrends() {
    const trends = [
      { icon: "🤖", title: "AI-Driven IT Monitoring", desc: "Machine learning models predict and auto-remediate IT issues before they impact users, reducing MTTR by up to 80%." },
      { icon: "⚡", title: "Cybersecurity Automation", desc: "SOAR platforms automate threat detection, containment, and response, enabling 24/7 security without growth." },
      { icon: "☁️", title: "Cloud-Native Infrastructure", desc: "Kubernetes-native and serverless MSP services eliminate traditional server management entirely, reducing overhead." },
      { icon: "🏠", title: "Remote Workforce Support", desc: "Permanent hybrid work models drive demand for advanced remote endpoint management and secure access tools." },
      { icon: "🔒", title: "Zero Trust Architecture", desc: "'Never trust, always verify' security models become the new baseline, replacing perimeter-based network security." },
      { icon: "🌐", title: "Edge Computing MSP", desc: "Managing IoT and edge infrastructure at scale becomes a major MSP growth segment, particularly in healthcare." }
    ];
  
    return (
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-blue-400 font-mono text-sm uppercase tracking-widest font-bold">What's Next</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-12 tracking-tight">Future of Managed IT Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((t, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all">
                <div className="text-4xl mb-6">{t.icon}</div>
                <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }