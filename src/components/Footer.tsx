import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg text-background">SafeScan</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Empowering people with food allergies to make safe, informed choices through 
              advanced AI technology and comprehensive ingredient analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/how-it-works" className="text-background/70 hover:text-primary transition-colors duration-200">
                  How it Works
                </a>
              </li>
              <li>
                <a href="/about" className="text-background/70 hover:text-primary transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-background/70 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for safer eating</span>
          </div>
          
          <div className="text-background/70 text-sm">
            © {new Date().getFullYear()} SafeScan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;