import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-scanning.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Know What You Eat.{' '}
              <span className="text-primary">Stay Safe</span>, Instantly.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Scan, Detect & Stay Protected from Allergens with One Click.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="font-semibold px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 py-6 text-lg border-2"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-status-safe rounded-full"></div>
              <span className="text-sm text-muted-foreground">ABDM Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-status-safe rounded-full"></div>
              <span className="text-sm text-muted-foreground">Medical-Grade Security</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Food label scanning with AI allergen detection"
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-accent rounded-3xl transform rotate-3 scale-105 -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;