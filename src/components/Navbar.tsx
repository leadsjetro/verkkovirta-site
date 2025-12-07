import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#palvelut', label: 'Palvelut' },
    { href: '#hinnoittelu', label: 'Hinnoittelu' },
    { href: '#ai-automaatiot', label: 'AI-automaatiot' },
    { href: '#prosessi', label: 'Prosessi' },
    { href: '#yhteystiedot', label: 'Yhteystiedot' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <polygon 
                  points="20,5 35,30 5,30" 
                  fill="none" 
                  stroke="hsl(174, 100%, 50%)" 
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(174,100%,50%)]"
                />
              </svg>
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Verkkovirta
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Varaa kartoitus
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-fit mt-2">
                Varaa kartoitus
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
