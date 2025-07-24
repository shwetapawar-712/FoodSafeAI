import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, HelpCircle, Book, Video, Download, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const helpCategories = [
  {
    icon: HelpCircle,
    title: 'Getting Started',
    description: 'Learn the basics of using SafeScan',
    articles: 12,
    popular: ['Creating your allergy profile', 'How to scan your first product', 'Understanding scan results']
  },
  {
    icon: Search,
    title: 'Scanning & Detection',
    description: 'Master the scanning features',
    articles: 18,
    popular: ['Best practices for scanning', 'What to do if scan fails', 'Improving scan accuracy']
  },
  {
    icon: Book,
    title: 'Account & Settings',
    description: 'Manage your account and preferences',
    articles: 8,
    popular: ['Updating allergy information', 'Privacy settings', 'Deleting your account']
  },
  {
    icon: MessageSquare,
    title: 'Troubleshooting',
    description: 'Solve common issues',
    articles: 15,
    popular: ['App not responding', 'Login problems', 'Sync issues across devices']
  }
];

const quickActions = [
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides',
    action: 'Watch Now'
  },
  {
    icon: Download,
    title: 'User Manual',
    description: 'Download complete documentation',
    action: 'Download PDF'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    action: 'Start Chat'
  }
];

const faqs = [
  {
    question: 'How accurate is SafeScan\'s allergen detection?',
    answer: 'SafeScan achieves 99.7% accuracy in clinical testing. Our AI is trained on millions of ingredient combinations and continuously improved based on real-world usage.'
  },
  {
    question: 'What should I do if SafeScan flags a safe product as risky?',
    answer: 'Please contact our support team immediately with the product details. We investigate all reported inaccuracies and update our database accordingly.'
  },
  {
    question: 'Can I use SafeScan offline?',
    answer: 'Basic scanning works offline, but for the most accurate results and latest allergen database updates, an internet connection is recommended.'
  },
  {
    question: 'Is my health data secure?',
    answer: 'Yes, we use bank-level encryption and are HIPAA compliant. Your allergy profile and scan history are protected with the highest security standards.'
  },
  {
    question: 'Does SafeScan work with all food labels?',
    answer: 'SafeScan works with most standard food labels in English. We\'re continuously expanding language support and improving recognition for various label formats.'
  }
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers, learn features, and get the most out of SafeScan. 
            We're here to help you scan safely and confidently.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              className="pl-12 pr-4 py-6 text-lg border-2 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Help</h2>
            <p className="text-xl text-muted-foreground">Get instant help with these resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <action.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {action.title}
                </h3>
                <p className="text-muted-foreground mb-6">{action.description}</p>
                <Button className="w-full">{action.action}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">Find detailed guides organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{category.description}</p>
                    <p className="text-sm text-primary font-medium">{category.articles} articles</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Popular articles:</h4>
                  <ul className="space-y-2">
                    {category.popular.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a 
                          href="#" 
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          • {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button variant="outline" size="lg">Request Feature</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;