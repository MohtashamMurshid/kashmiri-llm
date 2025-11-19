import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">
            The Spirit of Kashmir <br />
            <span className="text-kashmiri-saffron italic">in AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light opacity-90">
            Experience the first Large Language Model trained on the rich heritage, 
            language, and culture of the Valley.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-kashmiri-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-kashmiri-saffron/50"
          >
            Try the Model
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-kashmiri-paper to-transparent z-20" />
    </section>
  );
};

export default Hero;
