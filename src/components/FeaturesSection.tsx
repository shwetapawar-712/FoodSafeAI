import { Scan, Brain, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Scan Ingredients Instantly',
    description: 'Point your camera at any food label and get instant ingredient analysis in seconds.',
  },
  {
    icon: Brain,
    title: 'AI-Based Allergen Detection',
    description: 'Advanced machine learning identifies potential allergens with medical-grade accuracy.',
  },
  {
    icon: Shield,
    title: 'Personalized Allergy Alerts',
    description: 'Custom alerts based on your specific allergies and dietary restrictions.',
  },
  {
    icon: BookOpen,
    title: 'Save & Track Your Scans',
    description: 'Build a personal food database and track your safe products over time.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How SafeScan Protects You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI technology meets personalized health protection in a simple, elegant interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card card-hover group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;