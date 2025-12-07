import { Clock, MessageSquareX, Cog } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Hitaat ja vanhanaikaiset sivut',
      description: 'Vanhat, hitaasti latautuvat sivut karkottavat asiakkaat ennen kuin he ehtivät tutustua tarjontaasi. Rakennan modernit, salamannopeat sivut, jotka pitävät kävijät sivustolla ja parantavat hakukonenäkyvyyttä.',
      solution: 'Ratkaisu: Modernit teknologiat ja optimoitu suorituskyky'
    },
    {
      icon: MessageSquareX,
      title: 'Epäselvä viesti ja heikko konversio',
      description: 'Jos sivusto ei kerro selkeästi mitä teet ja miksi, potentiaaliset asiakkaat lähtevät kilpailijalle. Suunnittelen sivuston, jossa arvolupaus ja toimintakehotukset ohjaavat kävijöitä kohti yhteydenottoa.',
      solution: 'Ratkaisu: Selkeä rakenne ja konversio-optimointi'
    },
    {
      icon: Cog,
      title: 'Liikaa manuaalista työtä ja sähköpostirumbaa',
      description: 'Toistuvat rutiinitehtävät – puhelinvastaukset, sähköpostit, tiedonhaku – vievät aikaa ydinliiketoiminnalta. AI-automaatiot hoitavat nämä puolestasi 24/7.',
      solution: 'Ratkaisu: AI-automaatiot ja tekoälyavustajat'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Ongelmat joita ratkon
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Tunnistetko nämä{' '}
            <span className="text-gradient">haasteet?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="relative group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-lift flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <problem.icon className="w-8 h-8 text-destructive group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{problem.description}</p>
                
                <div className="pt-4 border-t border-border/30">
                  <span className="text-primary text-sm font-medium">{problem.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
