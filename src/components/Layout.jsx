import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Community', path: '/community' },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <div className="min-h-screen bg-kashmiri-paper font-sans text-kashmiri-wood relative">
      {/* Background Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: '400px'
        }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-kashmiri-chinar">
            Kashmiri AI
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-kashmiri-saffron ${
                  location.pathname === link.path ? 'text-kashmiri-saffron' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-kashmiri-saffron text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 p-4 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${
                    location.pathname === link.path ? 'text-kashmiri-saffron' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Kashmiri AI Heritage Initiative. All rights reserved.</p>
          <p className="text-sm opacity-60">Preserving the past, empowering the future.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
