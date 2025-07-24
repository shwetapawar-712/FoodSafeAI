import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help from our support team',
    contact: 'support@safescan.com',
    response: 'Response within 24 hours'
  },
  {
    icon: Phone,
    title: 'Emergency Hotline',
    description: 'For urgent safety concerns',
    contact: '+1 (800) SAFE-123',
    response: 'Available 24/7'
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    description: 'Visit our main office',
    contact: '123 Health Tech Ave, San Francisco, CA 94105',
    response: 'Mon-Fri, 9 AM - 6 PM PST'
  }
];

const departments = [
  {
    icon: Users,
    title: 'General Support',
    description: 'App issues, account help, and general questions',
    email: 'support@safescan.com'
  },
  {
    icon: MessageSquare,
    title: 'Medical Questions',
    description: 'Allergy-related concerns and medical inquiries',
    email: 'medical@safescan.com'
  },
  {
    icon: Phone,
    title: 'Business Inquiries',
    description: 'Partnerships, enterprise solutions, and media',
    email: 'business@safescan.com'
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">SafeScan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you stay safe. Reach out to our team for support, 
            questions, or to report any safety concerns.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <p className="text-primary font-medium mb-2">{method.contact}</p>
                <p className="text-sm text-muted-foreground">{method.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your question or concern..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Contact Departments</h2>
            <div className="space-y-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <dept.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {dept.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {dept.description}
                      </p>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-primary font-medium hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-accent/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Office Hours</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                <p>Sunday: Closed</p>
                <p className="text-primary font-medium mt-3">
                  Emergency support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check our Help Center for instant answers to common questions.
          </p>
          <Button variant="outline" size="lg" className="border-2">
            Visit Help Center
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;