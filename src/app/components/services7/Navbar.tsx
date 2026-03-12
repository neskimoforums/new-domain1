export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[90] bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter">IT<span className="text-blue-600">Guide</span></a>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600 uppercase tracking-widest">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#demand" className="hover:text-blue-600 transition-colors">Demand</a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#cases" className="hover:text-blue-600 transition-colors">Cases</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">Download PDF</a>
      </div>
    </nav>
  );
}
 