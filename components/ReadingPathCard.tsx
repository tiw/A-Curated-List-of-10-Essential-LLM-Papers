
import React from 'react';
import type { ReadingPath, Paper } from '../types';

interface ReadingPathCardProps {
    path: ReadingPath;
    papers: Paper[];
}

const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);


export const ReadingPathCard: React.FC<ReadingPathCardProps> = ({ path, papers }) => {
    
    const pathPapers = path.paperIds.map(id => papers.find(p => p.id === id)).filter(Boolean) as Paper[];

    return (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col h-full">
            <div className="flex items-center mb-3">
                <BookIcon className="w-6 h-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-bold text-emerald-400">{path.title}</h3>
            </div>
            <p className="text-slate-400 mb-4 flex-grow">{path.description}</p>
            <div className="mt-auto">
                <p className="text-sm font-semibold text-slate-300 mb-2">Recommended Papers:</p>
                <ul className="space-y-1">
                    {pathPapers.map(paper => (
                        <li key={paper.id} className="text-sm">
                            <a 
                                href={paper.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-sky-400 hover:underline hover:text-sky-300 transition-colors"
                            >
                                #{paper.id}: {paper.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
