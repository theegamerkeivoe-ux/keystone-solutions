import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Check, ArrowRight, Plus, Calculator, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { pricing, addons, navigateTo } = useApp();
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectPackage = (pkgName: string) => {
    navigateTo('start-project', { selectedPackage: pkgName });
  };

  return (
    <section className="py-24 bg-[#0A0C0F] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-2">
            TRANSPARENT PRICING & INVESTMENT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Start somewhere. Grow when you need to.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Every project is different. These packages provide a starting point, and we'll give you a final quote after understanding your requirements.
          </p>
        </div>

        {/* 3 Core Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {pricing.map(pkg => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#131920] to-[#0F141A] border-2 border-emerald-500 shadow-2xl scale-[1.02] z-10'
                    : 'bg-[#11141A] border border-stone-800 hover:border-stone-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-stone-950 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded shadow">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {pkg.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                        {pkg.startingPrice}
                      </span>
                      {pkg.startingPrice.includes('KSh') && (
                        <span className="text-xs text-stone-400">starting point</span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed mb-6 pb-6 border-b border-stone-800/80">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Included in this tier:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`w-full py-3.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-stone-950 shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ADD-ONS SECTION */}
        <div className="border-t border-stone-800 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-1">
                MODULAR EXTENSIONS
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white text-balance">
                Need something extra?
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
                Add specialized capabilities to any package. Select addons below to calculate an estimated scope.
              </p>
            </div>

            {selectedAddons.length > 0 && (
              <div className="bg-emerald-950/70 border border-emerald-700/60 p-3 rounded text-xs flex items-center gap-3">
                <span className="text-stone-300 font-medium">
                  {selectedAddons.length} {selectedAddons.length === 1 ? 'Add-on' : 'Add-ons'} selected
                </span>
                <button
                  onClick={() =>
                    navigateTo('start-project', {
                      addons: selectedAddons
                        .map(id => addons.find(a => a.id === id)?.name)
                        .filter(Boolean)
                        .join(', ')
                    })
                  }
                  className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold px-3 py-1.5 rounded uppercase tracking-wider text-[11px] cursor-pointer"
                >
                  Start Project with Addons →
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map(addon => {
              const isSelected = selectedAddons.includes(addon.id);

              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-150 select-none flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-md'
                      : 'bg-[#11141A] border-stone-800 hover:border-stone-750'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                        {addon.category}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] ${
                          isSelected
                            ? 'bg-emerald-600 border-emerald-500 text-stone-950 font-bold'
                            : 'border-stone-700 bg-stone-900 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-white mb-1">
                      {addon.name}
                    </h4>

                    <p className="text-[11px] text-stone-400 leading-snug mb-3">
                      {addon.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400 font-mono tabular-nums">
                      {addon.price}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase">
                      {isSelected ? 'Added' : '+ Add'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
