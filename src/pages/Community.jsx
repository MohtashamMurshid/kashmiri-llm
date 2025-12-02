import React from 'react';
import { Users, Handshake, ShieldCheck } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-kashmiri-chinar mb-6">Community & Governance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A sovereign, community-rooted ecosystem driven by the people of Kashmir.
          </p>
        </div>

        {/* Community Involvement */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-kashmiri-wood mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-kashmiri-saffron" />
            Community Involvement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Volunteers", desc: "Help record oral histories and upload craft photos." },
              { title: "Artisans", desc: "Co-design the craft archive and validate motifs." },
              { title: "Teachers & Scholars", desc: "Curate language materials and educational content." },
              { title: "Diaspora", desc: "Contribute to translations, funding, and global outreach." },
              { title: "Local Youth", desc: "Participate through fellowships and tech workshops." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-kashmiri-saffron/30 transition-colors">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-kashmiri-wood mb-8 flex items-center gap-3">
            <Handshake className="w-8 h-8 text-kashmiri-saffron" />
            Partners & Beneficiaries
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex flex-wrap gap-4">
              {[
                "Kashmiri Cultural Scholars", "Schools & Universities", "Local Artists", 
                "Craft Cooperatives", "Global Diaspora", "Museums & Archives", 
                "Youth Organizations", "UNESCO Memory of the World", "AI Research Labs"
              ].map((partner, idx) => (
                <span key={idx} className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section>
          <h2 className="text-3xl font-serif text-kashmiri-wood mb-8 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-kashmiri-saffron" />
            Sustainability & Governance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-kashmiri-wood/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-kashmiri-wood mb-4">Ethical Framework</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-kashmiri-saffron rounded-full flex-shrink-0" />
                  <p className="text-gray-700"><strong>Data Sovereignty:</strong> All original datasets remain the intellectual property of the Kashmiri community.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-kashmiri-saffron rounded-full flex-shrink-0" />
                  <p className="text-gray-700"><strong>Open Source:</strong> Components are open-sourced for transparency and trust.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-kashmiri-saffron rounded-full flex-shrink-0" />
                  <p className="text-gray-700"><strong>Ethical AI:</strong> Strict standards to avoid bias, misuse, or cultural appropriation.</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold text-kashmiri-wood mb-4">Advisory Board</h3>
              <p className="text-gray-600 mb-6">
                Governed by a community advisory board consisting of scholars, artisans, and educators who oversee the initiative's direction and data usage.
              </p>
              <div className="p-4 bg-stone-50 rounded-lg text-sm text-gray-500 italic">
                * An annual public report on progress and datasets will be published to ensure accountability.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
