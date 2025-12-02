import React from 'react';
import { Users, Heart, GraduationCap, Shield } from 'lucide-react';

const features = [
  {
    title: "Community-Owned AI",
    description: "Built by and for Kashmiris. Volunteers, artisans, scholars, and diaspora co-create datasets, ensuring authentic representation and cultural sovereignty.",
    icon: Users,
  },
  {
    title: "Cultural Preservation",
    description: "Protecting endangered heritage through six integrated projects: from oral histories and manuscripts to crafts and language revitalization.",
    icon: Heart,
  },
  {
    title: "Educational Empowerment",
    description: "Free access to Kashmiri language tools, AI tutors for children and diaspora, and rich datasets for researchers and future generations.",
    icon: GraduationCap,
  },
  {
    title: "Ethical & Open",
    description: "Data sovereignty ensures all datasets remain the intellectual property of the Kashmiri community, governed transparently with open-source principles.",
    icon: Shield,
  }
];

const Features = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-kashmiri-chinar mb-4">Core Principles</h2>
          <div className="w-24 h-1 bg-kashmiri-saffron mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
