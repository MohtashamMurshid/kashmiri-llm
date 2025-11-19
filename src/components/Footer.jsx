import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kashmiri-wood text-kashmiri-paper py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold mb-2">Kashmiri LLM</h3>
            <p className="opacity-80">Preserving heritage through intelligence.</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-kashmiri-saffron transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-kashmiri-saffron transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-kashmiri-saffron transition-colors"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Kashmiri LLM Project. Made with ❤️ in the Valley.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
