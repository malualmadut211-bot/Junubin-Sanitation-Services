import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-charcoal/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/a87e1470c28e32ab11a349878884b9c215afb1cf/ju.png" alt="Junubin Sanitation Services Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-semibold transition-colors ${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>About</Link>
            <Link to="/services" className={`text-sm font-semibold transition-colors ${isActive('/services') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>Services</Link>
            <Link to="/projects" className={`text-sm font-semibold transition-colors ${isActive('/projects') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>Projects</Link>
            <Link to="/contact" className={`text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a className="hidden lg:flex items-center gap-2 text-sm font-bold text-charcoal dark:text-white" href="tel:0911459117">
              <span className="material-symbols-outlined text-primary">call</span>
              0911 459 117
            </a>
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
