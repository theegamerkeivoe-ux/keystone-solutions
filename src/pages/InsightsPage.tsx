import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X, ArrowLeft, Tag } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const { blogs, selectedArticle, setSelectedArticle, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Education Technology',
    'Healthcare Technology',
    'Digital Strategy',
    'Web Design',
    'Website Tips'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogs.filter(b => b.published)
    : blogs.filter(b => b.published && b.category === selectedCategory);

  return (
    <div className="pt-28 pb-20">
      <section className="bg-[#0D0F12] py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
              PERSPECTIVES & PRACTICAL GUIDES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Keystone Insights
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Practical analysis on institutional technology, school portals, healthcare digital systems, and web strategy. No generic tech fluff.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-stone-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-stone-950 font-bold'
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="group bg-[#11141A] border border-stone-800 hover:border-emerald-500/50 rounded-lg p-6 flex flex-col justify-between cursor-pointer transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-emerald-400 uppercase tracking-wider text-[11px] bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-stone-500 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 group-hover:text-white transition-colors">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-emerald-400">
                  Read Article
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative bg-[#11141A] border border-stone-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-stone-200 p-6 sm:p-10">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-700 cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  {selectedArticle.category}
                </span>
                <span className="text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="prose prose-invert prose-stone max-w-none text-stone-300 text-sm sm:text-base leading-relaxed space-y-4 border-t border-stone-800 pt-6">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-white flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Insights</span>
              </button>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  navigateTo('start-project');
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all"
              >
                Discuss a Project for Your Organization →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
