import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, Brain, Shield, CheckCircle, Smartphone, Database, Users } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Smartphone,
    title: 'Scan or Search',
    description: 'Use your smartphone camera to scan any food label, or search our database manually.',
    details: 'Our advanced OCR technology instantly reads ingredient lists from any angle and lighting condition.'
  },
  {
    step: 2,
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our medical-grade AI analyzes every ingredient against your personal allergy profile.',
    details: 'Machine learning models trained on millions of ingredient combinations provide instant, accurate results.'
  },
  {
    step: 3,
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Get instant alerts for allergens, with detailed explanations and safety recommendations.',
    details: 'Color-coded results make it easy to understand your risk level at a glance.'
  },
  {
    step: 4,
    icon: Database,
    title: 'Save & Track',
    description: 'Build your personal safe food database and track your scanning history.',
    details: 'Never forget which products are safe for you with our comprehensive tracking system.'
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            How <span className="text-primary">SafeScan</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to safer eating. Our AI-powered platform makes allergen detection 
            as easy as taking a photo.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {step.step}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{step.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">{step.description}</p>
                  <p className="text-foreground leading-relaxed">{step.details}</p>
                </div>

                {/* Icon/Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-card">
                    <step.icon className="w-24 h-24 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind the simple interface lies sophisticated technology designed for accuracy and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card card-hover">
              <Camera className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Computer Vision
              </h3>
              <p className="text-muted-foreground">
                Advanced OCR and image recognition technology that works in any lighting condition 
                and can read text from various angles.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card card-hover">
              <Brain className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Machine Learning
              </h3>
              <p className="text-muted-foreground">
                Neural networks trained on millions of ingredient combinations provide 
                medical-grade accuracy in allergen detection.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card card-hover">
              <Database className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Comprehensive Database
              </h3>
              <p className="text-muted-foreground">
                Continuously updated database of over 500,000 food products and their 
                complete ingredient profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Trusted Accuracy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.7%</div>
              <div className="text-foreground font-semibold">Accuracy Rate</div>
              <div className="text-sm text-muted-foreground">In clinical testing</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500K+</div>
              <div className="text-foreground font-semibold">Products Scanned</div>
              <div className="text-sm text-muted-foreground">Monthly active scans</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">&lt; 2s</div>
              <div className="text-foreground font-semibold">Scan Speed</div>
              <div className="text-sm text-muted-foreground">Average processing time</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-status-safe">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Clinically validated and ABDM compliant</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;