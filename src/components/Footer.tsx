import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/a87e1470c28e32ab11a349878884b9c215afb1cf/ju.png" alt="Junubin Sanitation Services Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">Dedicated to raising the standards of sanitation and construction across South Sudan with integrity and innovation.</p>
            <div className="flex gap-4">
              <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">chat</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/projects">Project Gallery</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Support</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-primary">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link className="hover:text-primary transition-colors" to="/services">Biodigester Installation</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">General Construction</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Industrial Cleaning</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Plumbing Maintenance</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/services">Emergency Repairs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-primary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-white/60">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Main Road, Juba,<br/>South Sudan</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>0911 459 117</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>info@junubinss.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Junubin Sanitation Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
