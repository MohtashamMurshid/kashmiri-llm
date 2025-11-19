import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, PenTool } from 'lucide-react';

const features = [
  {
    title: "Native Kashmiri Support",
    description: "The first LLM trained specifically on the nuances of the Kashmiri language (Koshur), understanding dialects and script.",
    icon: MessageCircle,
  },
  {
    title: "Cultural Deep Dive",
    description: "Embedded with knowledge of Kashmiri history, architecture, cuisine, and traditions, preserving the essence of the Valley.",
    icon: BookOpen,
  },
  {
    title: "Poetic Generation",
    description: "Capable of generating poetry in the style of legends like Lal Ded, Habba Khatoon, and Sheikh-ul-Alam.",
    icon: PenTool,
  }
];

const Features = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-kashmiri-chinar mb-4">Features Inspired by Tradition</h2>
          <div className="w-24 h-1 bg-kashmiri-saffron mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-kashmiri-wood/10 hover:border-kashmiri-saffron/30 transition-colors group relative overflow-hidden"
            >
              {/* Decorative Chinar Leaf Background */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 rotate-12 group-hover:opacity-20 transition-opacity">
                 <img src="/images/chinar-leaf.png" alt="Chinar" className="w-full h-full object-contain" />
              </div>

              <div className="w-12 h-12 bg-kashmiri-dal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-kashmiri-dal/20 transition-colors">
                <feature.icon className="w-6 h-6 text-kashmiri-dal" />
              </div>
              
              <h3 className="text-xl font-serif font-bold mb-3 text-kashmiri-wood">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
