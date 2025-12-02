import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      
      {/* Executive Summary */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-kashmiri-chinar mb-8">The Kashmiri AI Heritage Initiative</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Preserving, revitalizing, and celebrating the language, art, culture, and collective memory of Kashmir through ethical, open, community-owned AI systems.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Kashmir possesses one of South Asia's richest yet most endangered cultural ecosystems. 
            This initiative proposes a suite of six integrated AI-driven projects to safeguard this heritage, 
            democratize access, and empower future generations.
          </p>
        </div>
      </section>

      <Features />

      {/* Vision Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-kashmiri-wood mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 italic mb-12">
              "To build a sovereign, community-rooted, open AI ecosystem that preserves Kashmiri cultural memory 
              and strengthens language revitalization through technology, research, and public participation."
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-kashmiri-saffron text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              Explore Our Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
