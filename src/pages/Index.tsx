import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PricingModelsSection from '@/components/PricingModelsSection';
import WebServicesSection from '@/components/WebServicesSection';
import ProblemsSection from '@/components/ProblemsSection';
import AIServicesSection from '@/components/AIServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WebServicesSection />
      <PricingModelsSection />
      <ProblemsSection />
      <AIServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
