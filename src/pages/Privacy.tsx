import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, Users, FileText } from 'lucide-react';

const privacySections = [
  {
    icon: Eye,
    title: 'Information We Collect',
    content: [
      'Personal Information: Name, email address, and allergy profile information you provide when creating an account.',
      'Health Data: Your specific allergen sensitivities and dietary restrictions to provide personalized alerts.',
      'Usage Data: How you interact with our app, including scan history and search queries (anonymized).',
      'Device Information: Basic device and browser information to ensure compatibility and security.'
    ]
  },
  {
    icon: Shield,
    title: 'How We Use Your Information',
    content: [
      'Providing personalized allergen detection and safety alerts based on your profile.',
      'Improving our AI algorithms to enhance accuracy and detect new allergens.',
      'Sending important safety updates and notifications about recalled products.',
      'Providing customer support and responding to your inquiries.'
    ]
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: [
      'All personal and health data is encrypted using AES-256 encryption standards.',
      'We maintain SOC 2 Type II compliance and regular third-party security audits.',
      'Access to your data is strictly limited to authorized personnel with legitimate need.',
      'We never sell, rent, or share your personal information with third parties for marketing.'
    ]
  },
  {
    icon: Database,
    title: 'Data Retention',
    content: [
      'Account information is retained as long as your account remains active.',
      'Scan history can be deleted by you at any time through account settings.',
      'We retain anonymized usage data for research and improvement purposes.',
      'Upon account deletion, all personal data is permanently removed within 30 days.'
    ]
  }
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy and the security of your health data are our top priorities. 
            Here's how we protect your information.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {privacySections.map((section, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-xl text-muted-foreground">
              You have complete control over your personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Access & Download</h3>
              <p className="text-muted-foreground text-sm">Request a copy of all personal data we have about you.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Correct & Update</h3>
              <p className="text-muted-foreground text-sm">Update or correct any inaccurate personal information.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Delete Account</h3>
              <p className="text-muted-foreground text-sm">Permanently delete your account and all associated data.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Data Portability</h3>
              <p className="text-muted-foreground text-sm">Export your data to use with other services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
          <p className="text-muted-foreground mb-6">
            Our privacy team is here to help you understand how we protect your data.
          </p>
          <div className="bg-accent/50 rounded-2xl p-6">
            <p className="text-foreground font-medium">Contact our Privacy Officer</p>
            <p className="text-muted-foreground">privacy@safescan.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;