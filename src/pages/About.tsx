import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Target, Shield, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    description: 'Allergy specialist with 15+ years of experience in food safety research.',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Chief Technology Officer',
    description: 'AI researcher specializing in computer vision and medical applications.',
  },
  {
    name: 'Maya Patel',
    role: 'Head of Product',
    description: 'Product strategist focused on accessible healthcare technology.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Patient-First',
    description: 'Every decision we make prioritizes the safety and well-being of people with food allergies.',
  },
  {
    icon: Shield,
    title: 'Trust & Privacy',
    description: 'Your health data is sacred. We maintain the highest standards of privacy and security.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously advancing AI technology to make allergen detection more accurate and accessible.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">SafeScan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make food safe for everyone, everywhere. Born from personal experience 
            with food allergies, SafeScan combines cutting-edge AI with deep medical expertise.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SafeScan was founded in 2023 when our co-founder's daughter experienced a severe allergic 
                reaction from a mislabeled food product. That moment made us realize how vulnerable people 
                with food allergies are in our current food system.
              </p>
              <p>
                We assembled a team of allergy specialists, AI researchers, and product experts to build 
                the most accurate, reliable allergen detection platform in the world. Today, SafeScan 
                helps thousands of families eat safely every day.
              </p>
              <p>
                Our vision is simple: a world where no one has to fear their food. We're working towards 
                making allergen detection as natural as reading a nutrition label.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-accent rounded-2xl flex items-center justify-center">
              <Users className="w-32 h-32 text-primary" />
            </div>
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 -z-10 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize food safety by providing instant, accurate allergen detection technology 
                that's accessible to everyone, regardless of their technical expertise or economic background.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where food allergies no longer limit what people can eat, where they can go, 
                or how they live their lives. Technology should empower, not complicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of experts united by a shared mission to make food safer for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-foreground font-semibold">Active Users</div>
              <div className="text-sm text-muted-foreground">Scanning safely every day</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1.2M+</div>
              <div className="text-foreground font-semibold">Scans Completed</div>
              <div className="text-sm text-muted-foreground">Allergens detected and prevented</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Zero</div>
              <div className="text-foreground font-semibold">False Negatives</div>
              <div className="text-sm text-muted-foreground">In reported serious reactions</div>
            </div>
          </div>

          <div className="bg-accent/50 rounded-2xl p-8">
            <p className="text-lg text-foreground italic mb-4">
              "SafeScan has given our family the confidence to try new foods again. 
              For the first time in years, grocery shopping isn't stressful."
            </p>
            <p className="text-muted-foreground font-medium">— Jennifer M., Mother of two children with food allergies</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Us in Making Food Safe for Everyone
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Whether you're living with food allergies or supporting someone who is, 
            SafeScan is here to help you eat with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8 py-6 text-lg">
              Start Scanning Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-background/30 text-background hover:bg-background/10 font-semibold px-8 py-6 text-lg"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;