// export default function Footer() {
//     return (
//       <footer>
//         <div className="footer-grid">
//           <div>
//             <div className="footer-brand"><span>IT</span>Guide 2025</div>
//             <p className="footer-desc">The most comprehensive resource for understanding managed IT services — written by industry practitioners with 20+ years of combined experience in MSP operations, cybersecurity, and cloud architecture.</p>
//             <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
//               <span className="f-badge">E-E-A-T Compliant</span>
//               <span className="f-badge">AEO Optimized</span>
//               <span className="f-badge">GEO Ready</span>
//               <span className="f-badge">LLM-SEO</span>
//             </div>
//           </div>
//           <div>
//             <div className="footer-col-title">Services</div>
//             <ul className="footer-links">
//               <li><a href="#">Managed Network</a></li>
//               <li><a href="#">Cloud Services</a></li>
//               <li><a href="#">Cybersecurity</a></li>
//               <li><a href="#">Help Desk</a></li>
//               <li><a href="#">Data Backup</a></li>
//               <li><a href="#">Compliance</a></li>
//             </ul>
//           </div>
//           <div>
//             <div className="footer-col-title">Resources</div>
//             <ul className="footer-links">
//               <li><a href="#">Case Studies</a></li>
//               <li><a href="#">Industry Reports</a></li>
//               <li><a href="#">MSP Buyer's Guide</a></li>
//               <li><a href="#">SLA Templates</a></li>
//               <li><a href="#">Pricing Calculator</a></li>
//               <li><a href="#">Blog</a></li>
//             </ul>
//           </div>
//           <div>
//             <div className="footer-col-title">Company</div>
//             <ul className="footer-links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Expert Team</a></li>
//               <li><a href="#">Editorial Policy</a></li>
//               <li><a href="#">Fact-Check Process</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <span>© 2025 ITGuide. All rights reserved. Content reviewed by certified IT professionals.</span>
//           <div className="footer-badges">
//             <span className="f-badge">📅 Published: Jan 2025</span>
//             <span className="f-badge">🔄 Updated: Jun 2025</span>
//             <span className="f-badge">⭐ 4.9/5 Rating</span>
//           </div>
//         </div>
//       </footer>
//     );
//   }


export default function Footer() {
    return (
      <footer className="bg-slate-950 text-white py-20 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black mb-6">IT<span className="text-blue-400">Guide</span> 2025</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">The most comprehensive resource for understanding managed IT services — written by industry practitioners with 20+ years of experience.</p>
            <div className="flex flex-wrap gap-2">
              {['E-E-A-T', 'AEO', 'LLM-SEO'].map(b => <span key={b} className="bg-slate-900 px-2 py-1 rounded text-[10px] font-bold text-slate-500 uppercase">{b}</span>)}
            </div>
          </div>
          {/* Repeating column pattern for Services, Resources, Company */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Managed Network</li><li>Cloud Services</li><li>Cybersecurity</li><li>Help Desk</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Case Studies</li><li>Industry Reports</li><li>MSP Buyer's Guide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
               <li>About Us</li><li>Expert Team</li><li>Editorial Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <span>© 2025 ITGuide. All rights reserved. Content reviewed by certified IT professionals.</span>
          <div className="flex gap-4 uppercase font-bold">
             <span>Published: Jan 2025</span>
             <span className="text-blue-400">⭐ 4.9/5 Rating</span>
          </div>
        </div>
      </footer>
    );
  }