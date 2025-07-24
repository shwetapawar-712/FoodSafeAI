import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg text-foreground">SafeScan</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              How it Works
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              About
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
            <Button className="font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;