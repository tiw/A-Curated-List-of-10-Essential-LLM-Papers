
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-slate-700">{title}</h2>
      {children}
    </section>
  );
};
