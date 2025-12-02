import React from 'react';
import { Globe, GraduationCap, TrendingUp, Cpu } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-kashmiri-chinar mb-6">Expected Impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than a tech project — a movement to reclaim cultural memory and ensure linguistic survival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { 
              title: "Cultural Impact", 
              icon: Globe,
              points: ["Protection of endangered intangible heritage", "Revival of Kashmiri language usage", "Documentation of crafts at risk"] 
            },
            { 
              title: "Educational Impact", 
              icon: GraduationCap,
              points: ["Free access to Kashmiri language tools", "Rich dataset for researchers", "Resource for future generations"] 
            },
            { 
              title: "Economic Impact", 
              icon: TrendingUp,
              points: ["Increased visibility for artisans", "Potential for cultural tourism", "Global craft appreciation"] 
            },
            { 
              title: "Technological Impact", 
              icon: Cpu,
              points: ["First major Kashmiri-focused LLM", "Creation of open datasets", "Model for other under-represented languages"] 
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-kashmiri-saffron/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-kashmiri-saffron" />
                </div>
                <h3 className="text-2xl font-serif text-kashmiri-wood">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 mt-2 bg-kashmiri-dal rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <section className="max-w-4xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-kashmiri-saffron/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kashmiri-saffron via-kashmiri-chinar to-kashmiri-saffron" />
          
          <h2 className="text-3xl font-serif text-kashmiri-wood mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Through open, ethical AI, we can ensure that Kashmir’s stories, language, art, and knowledge endure for centuries — 
            accessible to every Kashmiri, everywhere. We respectfully request your partnership to establish this critical, 
            community-governed AI infrastructure.
          </p>
          <button className="bg-kashmiri-wood text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors">
            Partner With Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default Impact;
