import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PortfolioProject } from '../types';
import { ArrowRight, Eye, CheckCircle2, X, Smartphone, Monitor } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { portfolio, navigateTo, selectedProject, setSelectedProject } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'Education',
    'Healthcare',
    'Business',
    'Organizations',
    'Portals',
    'Digital Systems'
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolio
    : portfolio.filter(p => p.industry === activeFilter);

  return (
    <section className="py-24 bg-[#0D0F12] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              PROVEN ARCHITECTURE & CONCEPTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
              Selected work
            </h2>
            <p className="text-stone-400 text-base mt-2 max-w-2xl">
              Real functional systems and concept prototypes engineered for organizations across Kenya and beyond.
            </p>
          </div>

          <div className="text-xs text-stone-500 italic">
            *All demo prototypes are clearly designated as CONCEPT PROJECTS.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-6 mb-8 scrollbar-none border-b border-stone-800">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === filter
                  ? 'bg-emerald-600 text-stone-950 font-bold'
                  : 'bg-stone-900/80 text-stone-400 hover:text-white hover:bg-stone-850 border border-stone-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-[#12151B] border border-stone-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-stone-700 transition-all duration-200"
            >
              <div>
                {/* Project Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-transparent to-transparent"></div>

                  {/* Concept Tag */}
                  {project.isConcept && (
                    <div className="absolute top-3 left-3 bg-stone-950/90 border border-stone-700/80 text-stone-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      CONCEPT PROJECT
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 bg-emerald-950/90 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-700/60">
                    {project.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                    {project.projectType}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-stone-800/80">
                    <div className="text-[10px] uppercase font-bold text-stone-400 mb-1.5">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1 text-[11px] text-stone-300">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700/80 text-xs font-bold uppercase tracking-wider py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Case Study Breakdown</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Breakdown Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative bg-[#11141A] border border-stone-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-stone-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/90 text-stone-400 hover:text-white border border-stone-700 cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover filter brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-black/30"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-700 px-2 py-0.5 rounded font-mono uppercase">
                    {selectedProject.industry}
                  </span>
                  {selectedProject.isConcept && (
                    <span className="text-xs bg-stone-900 text-stone-300 border border-stone-700 px-2 py-0.5 rounded font-bold uppercase">
                      CONCEPT PROJECT
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedProject.name}
                </h2>
                <div className="text-xs sm:text-sm text-stone-300 mt-1 font-mono">
                  {selectedProject.projectType}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Project Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 bg-stone-900/70 rounded border border-stone-800">
                  <h4 className="text-xs uppercase font-bold text-stone-300 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 bg-stone-900/70 rounded border border-stone-800">
                  <h4 className="text-xs uppercase font-bold text-emerald-400 mb-2">
                    The Keystone Solution
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Full Features Breakdown */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-300 mb-3">
                  Architectural & System Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-300 p-2 bg-stone-950/60 rounded border border-stone-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">
                  Technology & Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i} className="text-xs bg-stone-900 border border-stone-700/80 text-stone-300 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measured Results statement as strictly instructed */}
              <div className="p-4 bg-stone-900/40 rounded border border-stone-800 text-xs text-stone-400">
                <strong className="text-stone-300 block mb-1">Measured Impact:</strong>
                {selectedProject.resultsNote}
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-400 font-medium">
                  Need a similar platform for your organization?
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    navigateTo('start-project');
                  }}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
