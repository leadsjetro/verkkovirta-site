import { Globe, TrendingUp, Image, Sparkles } from 'lucide-react';

const WebServicesSection = () => {
  const packages = [
    {
      icon: Globe,
      title: 'Perustason yrityssivut',
      description: '4–6 sivua, selkeä rakenne, perus-SEO ja yhteydenottolomake. Toimiva pohja yrityksellesi verkossa.',
      examples: 'Pienyritykset, aloittavat yritykset, palveluntarjoajat',
      price: 'Kertamaksu alk. 2 900 €',
      maintenance: '+ ylläpito alk. 89 €/kk',
      features: ['4–6 sivua', 'Responsiivinen design', 'Perus-SEO', 'Yhteydenottolomake']
    },
    {
      icon: TrendingUp,
      title: 'Kasvua hakevan yrityksen sivusto',
      description: '6–10 sivua, myyntiä tukeva rakenne, blogi/uutiset ja konversio-optimoidut CTA:t.',
      examples: 'Kasvuyritykset, B2B-palvelut, konsulttiyritykset',
      price: 'Kertamaksu alk. 4 500 €',
      maintenance: '+ ylläpito alk. 129 €/kk',
      features: ['6–10 sivua', 'Blogi/uutiset', 'Konversio-optimointi', 'Analytiikka-integraatio']
    },
    {
      icon: Image,
      title: 'Visuaalinen portfolio- ja referenssisivusto',
      description: 'Paljon kuvia ja videoita, tarinallinen esitystapa luoville aloille ja asiantuntijoille.',
      examples: 'Valokuvaajat, arkkitehdit, suunnittelijat',
      price: 'Kertamaksu alk. 3 500 €',
      maintenance: '+ ylläpito alk. 129 €/kk',
      features: ['Kuvagalleria', 'Videot', 'Tarinallinen rakenne', 'Portfolio-näkymät']
    },
    {
      icon: Sparkles,
      title: 'Premium 3D- ja animaatiosivusto',
      description: 'Räätälöity 3D- ja animaatiosivusto integraatioineen (ajanvaraus, CRM tms.).',
      examples: 'Luovat toimistot, teknologia-yritykset, premium-brändit',
      price: 'Kertamaksu alk. 7 000 €',
      priceNote: '(tyypillisesti 7 000–12 000 €)',
      maintenance: '+ ylläpito alk. 249 €/kk',
      features: ['3D-elementit', 'Scroll-animaatiot', 'Integraatiot', 'Premium-design']
    }
  ];

  return (
    <section id="palvelut" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Verkkosivupalvelut
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Verkkosivut{' '}
            <span className="text-gradient">yrityksesi tarpeisiin</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jokainen sivusto suunnitellaan yrityksesi tavoitteiden mukaan. 
            Yksinkertaisista esittelysivuista monimutkaisiin 3D-animaatiosivustoihin – 
            toteutus räätälöidään juuri sinulle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.title}
              className="glass-card rounded-2xl p-6 hover-tilt group opacity-0 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(174,100%,50%/0.3)] transition-all duration-300">
                <pkg.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">{pkg.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
              
              <div className="text-xs text-primary/80 mb-4 font-medium">
                {pkg.examples}
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/30">
                <div className="text-primary font-bold text-lg">{pkg.price}</div>
                {pkg.priceNote && (
                  <div className="text-xs text-muted-foreground">{pkg.priceNote}</div>
                )}
                <div className="text-sm text-muted-foreground">{pkg.maintenance}</div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServicesSection;
