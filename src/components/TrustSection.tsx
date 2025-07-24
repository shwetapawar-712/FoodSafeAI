import { Shield, Lock, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'Bank-level encryption protects your personal health information',
  },
  {
    icon: Shield,
    title: 'Medical-Grade Security',
    description: 'HIPAA-compliant infrastructure ensures your privacy is protected',
  },
  {
    icon: Award,
    title: 'ABDM Compliant',
    description: 'Certified under India\'s Ayushman Bharat Digital Mission standards',
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted & Secure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your health data deserves the highest level of protection. We meet and exceed industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft">
            <div className="w-3 h-3 bg-status-safe rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              All systems operational • Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;