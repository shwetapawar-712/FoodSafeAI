import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RiskIndicatorSection from '@/components/RiskIndicatorSection';
import SearchSection from '@/components/SearchSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <RiskIndicatorSection />
      <SearchSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
