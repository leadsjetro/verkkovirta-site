import { Check, Calendar, CreditCard } from 'lucide-react';

const PricingModelsSection = () => {
  const models = [
    {
      icon: Calendar,
      title: 'Kuukausimalli',
      highlight: 'Ei aloitusmaksua',
      price: '150 €/kk',
      contract: 'Minimi 24 kk sopimus',
      description: 'Sisältää sivuston suunnittelun ja toteutuksen, hostingin, päivitykset ja jatkuvan tuen perustason yrityssivuille.',
      features: [
        'Sivuston suunnittelu ja toteutus',
        'Hosting sisältyy',
        'Jatkuvat päivitykset',
        'Tekninen tuki',
        'Jatkuva kehitys',
        'A/B-testaus'
      ]
    },
    {
      icon: CreditCard,
      title: 'Kertamaksumalli',
      highlight: 'Alk. 1 500 €',
      price: '+ ylläpito alk. 39 €/kk',
      contract: 'Ei pitkää sitoutumista',
      description: 'Sisältää sivuston suunnittelun ja toteutuksen, perusylläpidon ja tekniset päivitykset kevyemmille sivustoille.',
      features: [
        'Sivuston suunnittelu ja toteutus',
        'Perusylläpito',
        'Tekniset päivitykset',
        'Hosting',
        'Varmuuskopiot',
        'Turvallisuuspäivitykset'
      ]
    }
  ];

  return (
    <section id="hinnoittelu" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tarjoan kaksi{' '}
            <span className="text-gradient">hinnoittelumallia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Valitse yrityksellesi sopiva malli – joko kuukausimaksu ilman aloituskustannusta 
            tai perinteinen kertamaksu joustavalla ylläpidolla.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {models.map((model, index) => (
            <div 
              key={model.title}
              className="glass-card rounded-2xl p-8 hover-lift opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <model.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">{model.title}</h3>
                  <span className="text-sm text-muted-foreground">{model.contract}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-primary font-semibold mb-1">{model.highlight}</div>
                <div className="text-2xl font-display font-bold">{model.price}</div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">{model.description}</p>
              
              <ul className="space-y-3">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
          <p>
            Ylläpito sisältää hostingin, varmuuskopiot, turvallisuuspäivitykset ja pienet muutokset. 
            Kuukausimalli kattaa lisäksi jatkuvan kehityksen ja A/B-testauksen – 
            molemmat vaihtoehdot ovat joustavia yrityksesi tarpeiden mukaan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingModelsSection;
