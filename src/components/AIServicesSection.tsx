import { Phone, Workflow, Bot, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const AIServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI-vastaanottovirkailija puheluihin',
      description: 'Vastaa puheluihin 24/7, kirjaa viestit, ohjaa oikealle henkilölle ja vastaa peruskysymyksiin. Vapauttaa työntekijöiden aikaa tuottavampaan työhön.',
      implementation: 'Käyttöönotto alk. 2 500 €',
      plans: [
        { name: 'Essential', price: '99 €/kk', desc: 'Perus virtuaalivaihde yhdellä kielellä' },
        { name: 'Pro', price: '399 €/kk', desc: 'Monikielisyys ja 2 000 min/kk' }
      ],
      highlight: '24/7 puhelinpalvelu'
    },
    {
      icon: Workflow,
      title: 'Prosessiautomaatit ja integraatiot',
      description: 'Automatisoi toistuvia työtehtäviä ja yhdistä järjestelmät toimimaan saumattomasti. Säästä työaikaa ja vähennä virheitä.',
      implementation: 'Kertamaksu 1 500–3 000 €',
      plans: [
        { name: 'Ylläpito', price: '200–400 €/kk', desc: 'Riippuu säästetyn työajan määrästä' }
      ],
      highlight: 'ROI-perusteinen'
    },
    {
      icon: Bot,
      title: 'AI-chatbotit ja sisäiset avustajat',
      description: 'Palvelee asiakkaitasi ja henkilökuntaasi 24/7. Vastaa kysymyksiin, auttaa tiedonhaussa ja automatisoi rutiinitehtäviä.',
      implementation: 'Kertamaksu alk. 1 500 €',
      plans: [
        { name: 'Ylläpito', price: '150–300 €/kk', desc: 'Sisältää päivitykset ja kehityksen' }
      ],
      highlight: '24/7 asiakaspalvelu'
    }
  ];

  return (
    <section id="ai-automaatiot" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      {/* Accent gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            AI-automaatiot
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            AI-automaatiot ja{' '}
            <span className="text-gradient">tekoälyvastaanottajat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tekoälypohjaiset ratkaisut, jotka vapauttavat aikaasi ja resurssejasi 
            tuottavampaan työhön – ympäri vuorokauden.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card rounded-2xl p-8 hover-lift group opacity-0 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(174,100%,50%/0.3)] transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
              
              <div className="text-primary font-semibold mb-4">{service.implementation}</div>
              
              <div className="space-y-2">
                {service.plans.map((plan) => (
                  <div key={plan.name} className="bg-secondary/50 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-primary font-bold">{plan.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{plan.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing logic explanation */}
        <div className="mt-16 glass-card rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold mb-4">Hinnoittelun logiikka</h3>
          <p className="text-muted-foreground mb-4">
            Hinnoitteluni perustuu työajan säästöön – käytän 100 €/h kokonaiskustannusta laskentaperusteena. 
            Jos automaatio säästää 20 tuntia kuukaudessa (2 000 € työaikaa), projekti maksaa itsensä nopeasti takaisin.
          </p>
          <p className="text-muted-foreground">
            Yksinkertaiset verkkosivujen ylläpidot maksavat tyypillisesti 50 €/kk, kun taas monimutkaiset 
            kokonaisuudet voivat olla useita satoja euroja kuukaudessa. AI-vastaanottopalvelujen 
            Essential (99 €/kk) ja Pro (399 €/kk) -paketit ovat linjassa markkinahintojen kanssa.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            Varaa AI-kartoitus
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
