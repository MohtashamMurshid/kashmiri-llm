import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import kLlmImg from '../assets/project_k_llm_1764700251968.png';
import craftImg from '../assets/project_craft_archive_1764700270048.png';
import tutorImg from '../assets/project_language_tutor_1764700298601.png';
import mapImg from '../assets/project_geo_map_1764700314991.png';
import historyImg from '../assets/project_oral_history_1764700330432.png';
import digitImg from '../assets/project_manuscript_digitization_1764700346667.png';

const projects = [
  {
    id: 'k-llm',
    title: "Kashmiri Heritage LLM (K-LLM)",
    description: "A community-owned language model for Kashmiri cultural knowledge. Trained on folklore, oral history, and manuscripts.",
    image: kLlmImg,
    outputs: ["Translation (Kashmiri <-> English)", "Cultural Knowledge Q&A"]
  },
  {
    id: 'craft-archive',
    title: "Kashmiri Art & Craft AI Archive",
    description: "A digital AI-powered archive of Kashmiri crafts, motifs, and artistic styles like Papier mâché and Kani shawls.",
    image: craftImg,
    outputs: ["Open dataset of craft images", "AI motif recognition"]
  },
  {
    id: 'language-tutor',
    title: "Language Revitalization AI Tutor",
    description: "A modern learning companion for children and diaspora. Teaches vocabulary, pronunciation, and stories.",
    image: tutorImg,
    outputs: ["Mobile learning platform", "Speech recognition model"]
  },
  {
    id: 'geo-map',
    title: "Kashmiri Heritage Geo-Map",
    description: "A dynamic cultural map connecting geography with lived heritage, shrines, markets, and trade routes.",
    image: mapImg,
    outputs: ["Interactive digital map", "Heritage preservation tool"]
  },
  {
    id: 'oral-history',
    title: "Oral History & Memory Project",
    description: "A living archive of Kashmiri voices. Recording stories from elders and artisans, preserving dialects.",
    image: historyImg,
    outputs: ["Searchable audio archive", "Thematic compilations"]
  },
  {
    id: 'digitization',
    title: "Manuscript & Document Digitization",
    description: "Digitizing and preserving Kashmir’s written legacy. OCR for Nastaliq and Sharada scripts.",
    image: digitImg,
    outputs: ["Open digital library", "AI transcription services"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-kashmiri-chinar mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six integrated AI-driven initiatives to safeguard heritage, democratize access, and empower future generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-stone-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-kashmiri-wood mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="border-t border-stone-100 pt-4 mb-4">
                  <h4 className="text-xs font-semibold text-kashmiri-saffron uppercase tracking-wider mb-2">Key Outputs</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {project.outputs.map((output, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-kashmiri-dal rounded-full" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/projects/${project.id}`}
                  className="w-full mt-auto bg-stone-100 hover:bg-kashmiri-saffron hover:text-white text-stone-600 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <h2 className="text-3xl font-serif text-center text-kashmiri-wood mb-8">Integrated Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-stone">
              <p>
                All six projects support each other to create a unified heritage ecosystem. 
                Data flows from preservation efforts (Oral Histories, Manuscripts) into our core AI models (K-LLM), 
                which in turn power educational and exploration tools (Tutor, Geo-Map).
              </p>
              <p>
                This creates a <strong>continuous preservation loop</strong> where community input strengthens the technology, 
                and the technology empowers the community.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-xl text-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span className="font-semibold">Oral Histories</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-kashmiri-saffron">K-LLM, Geo-Map, Tutor</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span className="font-semibold">Craft Images</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-kashmiri-saffron">Archive, K-LLM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span className="font-semibold">Manuscripts</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-kashmiri-saffron">K-LLM, Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
