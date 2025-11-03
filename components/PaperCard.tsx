
import React from 'react';
import type { Paper } from '../types';

interface PaperCardProps {
  paper: Paper;
}

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M11.729 8.243a1 1 0 011.414 0l3.536 3.535a1 1 0 010 1.414l-3.536 3.536a1 1 0 01-1.414-1.414L13.586 13H4a1 1 0 110-2h9.586l-1.857-1.857a1 1 0 010-1.414z" />
    <path d="M6.271 4.464a1 1 0 010 1.414L4.414 7.735a1 1 0 01-1.414 0L.464 5.199a1 1 0 010-1.414L3.001 1.25a1 1 0 011.414 0l1.856 1.857a1 1 0 010 1.414L4.414 6.328l1.857-1.864z" />
  </svg>
);


export const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/10 hover:border-slate-600">
      <a 
        href={paper.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 group"
      >
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors duration-200">
                    {paper.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{paper.authors}</p>
            </div>
            <ExternalLinkIcon className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors duration-200 flex-shrink-0 ml-4 mt-1" />
        </div>
        <p className="mt-4 text-slate-300 leading-relaxed">
            {paper.description}
        </p>
      </a>
    </div>
  );
};
