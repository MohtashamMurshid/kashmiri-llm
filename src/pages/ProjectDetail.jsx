import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Import markdown files
import kLlmMd from '../content/projects/k-llm.md?raw';
import craftArchiveMd from '../content/projects/craft-archive.md?raw';
import languageTutorMd from '../content/projects/language-tutor.md?raw';
import geoMapMd from '../content/projects/geo-map.md?raw';
import oralHistoryMd from '../content/projects/oral-history.md?raw';
import digitizationMd from '../content/projects/digitization.md?raw';
import kDataCommonsMd from '../content/projects/k-data-commons.md?raw';

const contentMap = {
  'k-llm': kLlmMd,
  'craft-archive': craftArchiveMd,
  'language-tutor': languageTutorMd,
  'geo-map': geoMapMd,
  'oral-history': oralHistoryMd,
  'digitization': digitizationMd,
  'k-data-commons': kDataCommonsMd,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id && contentMap[id]) {
      setContent(contentMap[id]);
    } else {
      setContent('# Project Not Found\nSorry, the project you are looking for does not exist.');
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-kashmiri-saffron font-medium mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100 prose prose-stone prose-lg max-w-none"
        >
          <Markdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl font-serif text-kashmiri-chinar mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-serif text-kashmiri-wood mt-8 mb-4 border-b border-stone-100 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-4 text-gray-700" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              strong: ({node, ...props}) => <strong className="font-semibold text-kashmiri-wood" {...props} />,
            }}
          >
            {content}
          </Markdown>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
