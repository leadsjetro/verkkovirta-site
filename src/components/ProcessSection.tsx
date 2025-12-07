import { useEffect, useRef, useState } from 'react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ballAngle, setBallAngle] = useState(-90); // Start at top (step 1 position)
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  
  const steps = [
    {
      title: 'Alkukartoitus',
      description: 'Selvitän liiketoimintasi tarpeet, tavoitteet ja kohderyhmän.'
    },
    {
      title: 'Suunnittelusessio',
      description: 'Luon visuaalisen suunnitelman ja rakennesuunnitelman.'
    },
    {
      title: 'Toteutus',
      description: 'Rakennan sivuston tai automaation sovitun suunnitelman mukaan.'
    },
    {
      title: 'Käyttöönotto',
      description: 'Julkaisen ratkaisun ja varmistan toimivuuden.'
    },
    {
      title: 'Jatkuva kehitys',
      description: 'Seuraan tuloksia ja optimoin jatkuvasti.'
    }
  ];

  // Ball animation - 12 second full rotation
  useEffect(() => {
    const rotationDuration = 12000; // 12 seconds per full rotation
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = (elapsed % rotationDuration) / rotationDuration;
      const angle = -90 + progress * 360; // Start from top, go clockwise
      setBallAngle(angle);
      
      // Calculate which step is active based on ball position
      // Each step is 72 degrees apart (360 / 5)
      const normalizedAngle = ((angle + 90) % 360 + 360) % 360;
      const stepIndex = Math.floor((normalizedAngle + 36) / 72) % 5; // +36 for centering on each step
      setActiveStep(stepIndex);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate position for each step card
  const getStepPosition = (index: number) => {
    const angle = (index * (360 / steps.length) - 90) * (Math.PI / 180);
    const radius = 300;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle: (index * (360 / steps.length) - 90)
    };
  };

  // Calculate triangle rotation to point toward the ball
  const triangleRotation = ballAngle + 90; // Offset so one tip points toward ball

  return (
    <section id="prosessi" className="py-32 relative" style={{ overflow: 'visible' }}>
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Prosessi
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Miten{' '}
            <span className="text-gradient">työskentelen</span>
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto min-h-[700px]">
          {/* Main orbit circle */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-primary/30"
            style={{
              boxShadow: '0 0 40px hsl(174, 100%, 50%, 0.1), inset 0 0 40px hsl(174, 100%, 50%, 0.05)'
            }}
          />
          
          {/* Orbiting ball - smooth continuous motion synced with active step */}
          <div 
            className="absolute left-1/2 top-1/2 w-[520px] h-[520px] pointer-events-none"
            style={{
              transform: `translate(-50%, -50%) rotate(${ballAngle + 90}deg)`,
            }}
          >
            {/* The ball */}
            <div 
              className="absolute w-5 h-5 rounded-full bg-primary"
              style={{
                top: '0px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px hsl(174, 100%, 50%), 0 0 40px hsl(174, 100%, 50%, 0.6), 0 0 60px hsl(174, 100%, 50%, 0.3)'
              }}
            />
          </div>
          
          {/* Center 2D Triangle - clean neon style matching hero */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              style={{
                transform: `rotate(${triangleRotation}deg)`,
                transition: 'transform 0.3s ease-out',
                filter: 'drop-shadow(0 0 15px hsl(174, 100%, 50%)) drop-shadow(0 0 30px hsl(174, 100%, 50%, 0.5))'
              }}
            >
              <defs>
                <linearGradient id="processTriangleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(174, 100%, 50%)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(200, 100%, 60%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(174, 100%, 50%)" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              
              {/* Main triangle with glow */}
              <polygon
                points="50,12 88,78 12,78"
                fill="url(#processTriangleGrad)"
                stroke="hsl(174, 100%, 50%)"
                strokeWidth="2.5"
              />
              
              {/* Inner subtle triangle for depth */}
              <polygon
                points="50,22 78,72 22,72"
                fill="none"
                stroke="hsl(174, 100%, 55%)"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
            
            {/* Pulsing glow overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}
            >
              <svg
                width="140"
                height="140"
                viewBox="0 0 100 100"
                style={{
                  transform: `rotate(${triangleRotation}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <polygon
                  points="50,12 88,78 12,78"
                  fill="none"
                  stroke="hsl(174, 100%, 60%)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
          
          {/* Process steps around the circle - Desktop */}
          <div className="hidden lg:block">
            {steps.map((step, index) => {
              const pos = getStepPosition(index);
              const isActive = index === activeStep;
              
              return (
                <div 
                  key={step.title}
                  className={`
                    absolute w-48 glass-card rounded-xl p-4 transition-all duration-500 ease-out cursor-pointer
                    ${isActive 
                      ? 'border-primary/70 z-20' 
                      : 'border-border/30 hover:border-primary/30 z-10'
                    }
                  `}
                  style={{
                    left: `calc(50% + ${pos.x}px - 96px)`,
                    top: `calc(50% + ${pos.y}px - 45px)`,
                    boxShadow: isActive 
                      ? '0 0 30px hsl(174, 100%, 50%, 0.25), 0 0 60px hsl(174, 100%, 50%, 0.1), inset 0 0 20px hsl(174, 100%, 50%, 0.05)'
                      : 'none',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ease-out
                        ${isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-muted-foreground'
                        }
                      `}
                      style={{
                        boxShadow: isActive ? '0 0 15px hsl(174, 100%, 50%, 0.6)' : 'none'
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className={`font-display font-bold text-sm transition-colors duration-500 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground pl-11">{step.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Mobile: simple step list */}
          <div className="lg:hidden mt-8 space-y-4">
            <div className="flex justify-center mb-8">
              {/* Mobile 2D triangle */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                style={{
                  filter: 'drop-shadow(0 0 10px hsl(174, 100%, 50%)) drop-shadow(0 0 20px hsl(174, 100%, 50%, 0.5))',
                  animation: 'mobileRotate 20s linear infinite'
                }}
              >
                <defs>
                  <linearGradient id="mobileProcessTriangleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(174, 100%, 50%)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(200, 100%, 60%)" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,15 85,75 15,75"
                  fill="url(#mobileProcessTriangleGrad)"
                  stroke="hsl(174, 100%, 50%)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={step.title}
                  className={`
                    glass-card rounded-xl p-4 transition-all duration-500 ease-out cursor-pointer
                    ${isActive ? 'border-primary/50' : 'border-border/30'}
                  `}
                  style={{
                    boxShadow: isActive ? '0 0 20px hsl(174, 100%, 50%, 0.15)' : 'none'
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                      ${isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}
                    `}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes mobileRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;