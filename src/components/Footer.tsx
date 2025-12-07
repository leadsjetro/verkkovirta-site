const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <polygon 
                  points="20,5 35,30 5,30" 
                  fill="none" 
                  stroke="hsl(174, 100%, 50%)" 
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-lg font-display font-bold text-foreground">
              Verkkovirta
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Verkkovirta. Kaikki oikeudet pidätetään.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#palvelut" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Palvelut
            </a>
            <a href="#hinnoittelu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Hinnoittelu
            </a>
            <a href="#yhteystiedot" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Yhteystiedot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
