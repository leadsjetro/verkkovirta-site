import { Button } from './ui/button';
import Triangle3D from './Triangle3D';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient orbs - subtle background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase">
                Verkkovirta – Verkkosivut & AI-automaatiot
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Räätälöidyt verkkosivut ja{' '}
                <span className="text-gradient">AI-automaatiot</span>{' '}
                jotka säästävät aikaa ja tuovat lisää kauppaa
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Suunnittelen ja toteutan tuloksellisia verkkosivuja yksinkertaisista esittelysivuista 
              monimutkaisiin 3D-animaatiosivustoihin. AI-automaatiot vapauttavat aikasi tuottavampaan työhön.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl" className="group">
                Varaa verkkosivukartoitus
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Varaa AI-kartoitus
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI-tuki</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Räätälöity</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">ROI</div>
                <div className="text-sm text-muted-foreground">Takuulla</div>
              </div>
            </div>
          </div>
          
          {/* Right - 3D Triangle - clean, no ring */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Triangle3D size={380} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scrollaa</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;