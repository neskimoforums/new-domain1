const links = [
    { href: '#services', label: 'Services' },
    { href: '#stats', label: 'Industry Data' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
  ];
  
  export function Navbar() {
    return (
      <header className="sticky top-0 z-40 border-b border-cyan-300/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between gap-4 py-4">
          <a href="#" className=" font-syne text-lg font-extrabold text-cyan-300">
            ⚡ CyberGuide
          </a>
  
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono-custom text-xs text-slate-400 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }