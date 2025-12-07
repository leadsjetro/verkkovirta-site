import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="yhteystiedot" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      {/* Gradient accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Yhteystiedot
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Ota yhteyttä ja{' '}
              <span className="text-gradient">aloitetaan yhteistyö</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Varaa maksuton kartoituspuhelu, niin käydään läpi miten voin auttaa yrityksesi kasvussa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact info */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Jetro Tillaeus</h3>
              <p className="text-primary font-medium mb-6">Verkkovirta</p>
              
              <div className="space-y-4">
                <a 
                  href="tel:0452620471" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>045 262 0471</span>
                </a>
                
                <a 
                  href="mailto:verkkovirta.web@outlook.com" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>verkkovirta.web@outlook.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Imatra, Suomi</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Laskutus kevytyrittäjäpalvelun kautta
                </p>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-display font-bold mb-2">Varaa kartoituspuhelu</h3>
              <p className="text-muted-foreground mb-8">
                Käydään läpi tarpeesi ja tavoitteesi – täysin ilman sitoumuksia.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full group">
                  Varaa verkkosivukartoitus
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button variant="heroOutline" size="lg" className="w-full group">
                  Varaa AI-kartoitus
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
