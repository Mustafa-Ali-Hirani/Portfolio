import { FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-brand-textPrimary tracking-tight">
              Mustafa<span className="text-brand-accent">.</span>Ali
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#projects" 
                className="text-brand-textSecondary hover:text-brand-accent transition-colors px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-brand-textSecondary hover:text-brand-accent transition-colors px-3 py-2 text-sm font-medium"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-brand-textSecondary hover:text-brand-accent transition-colors px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Resume Link */}
          <div className="flex items-center">
            <a 
              href="/Mustafa_Ali_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-brand-accent/30 text-sm font-medium rounded-md text-brand-textPrimary hover:bg-brand-accent/10 transition-all gap-2"
            >
              <FileText size={18} className="text-brand-accent" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
