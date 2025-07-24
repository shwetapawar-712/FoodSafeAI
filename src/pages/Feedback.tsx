import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, Star, ThumbsUp, Lightbulb, Bug, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const feedbackTypes = [
  {
    icon: ThumbsUp,
    title: 'General Feedback',
    description: 'Share your thoughts about SafeScan',
    color: 'text-primary'
  },
  {
    icon: Bug,
    title: 'Report a Bug',
    description: 'Help us fix issues you\'ve encountered',
    color: 'text-status-risk'
  },
  {
    icon: Lightbulb,
    title: 'Feature Request',
    description: 'Suggest new features or improvements',
    color: 'text-status-unknown'
  },
  {
    icon: Star,
    title: 'App Review',
    description: 'Rate your experience with SafeScan',
    color: 'text-status-safe'
  }
];

const recentFeedback = [
  {
    type: 'Feature Request',
    title: 'Barcode scanning support',
    user: 'Sarah M.',
    status: 'Under Review',
    votes: 127
  },
  {
    type: 'Improvement',
    title: 'Faster scan processing',
    user: 'Mike R.',
    status: 'In Development',
    votes: 89
  },
  {
    type: 'Feature Request',
    title: 'Voice announcements for results',
    user: 'Elena K.',
    status: 'Planned',
    votes: 156
  }
];

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Share Your <span className="text-primary">Feedback</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your voice shapes SafeScan's future. Help us build the best allergen detection 
            platform by sharing your experiences and ideas.
          </p>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {feedbackTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card card-hover text-center cursor-pointer">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${type.color}`}>
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Send Us Your Feedback</h2>
            <p className="text-xl text-muted-foreground">
              Every piece of feedback helps us improve SafeScan for everyone.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Feedback Type
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option>General Feedback</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>App Review</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="Brief description of your feedback" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Feedback
                </label>
                <Textarea 
                  placeholder="Tell us about your experience, suggestion, or issue in detail..."
                  rows={6}
                />
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-muted-foreground">
                  I agree to be contacted about my feedback and understand that my input may be used 
                  to improve SafeScan's features and services.
                </label>
              </div>
              
              <Button className="w-full" size="lg">
                Submit Feedback
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Community Feedback */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Community Requests</h2>
            <p className="text-xl text-muted-foreground">
              See what the community is asking for and vote on features you'd like to see.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentFeedback.map((feedback, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {feedback.type}
                      </span>
                      <span className="px-3 py-1 bg-status-safe-bg text-status-safe text-xs font-medium rounded-full">
                        {feedback.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feedback.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">Suggested by {feedback.user}</p>
                  </div>
                  
                  <div className="text-center">
                    <button className="flex flex-col items-center gap-1 px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors">
                      <ThumbsUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feedback.votes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">View All Community Requests</Button>
          </div>
        </div>
      </section>

      {/* Appreciation */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Thank You for Your Feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every suggestion, bug report, and review helps us make SafeScan safer and more reliable 
            for people with food allergies worldwide.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
            </div>
            <div className="bg-card rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-1">89%</div>
              <div className="text-sm text-muted-foreground">Suggestions implemented</div>
            </div>
            <div className="bg-card rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">Community contributors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;