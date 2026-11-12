import React from 'react';
import { CheckCircle2, Layers, Database, ShieldAlert } from 'lucide-react';
import { coreServices } from '../data/portfolioData';

const iconMap = {
  blue: <Layers className="w-6 h-6 text-trustBlue" />,
  emerald: <Database className="w-6 h-6 text-emeraldTrust" />,
  amber: <ShieldAlert className="w-6 h-6 text-warmBronze" />
};

const badgeColorMap = {
  blue: 'bg-trustBlue/10 text-trustBlue',
  emerald: 'bg-emeraldTrust/10 text-emeraldTrust',
  amber: 'bg-warmBronze/15 text-warmBronze'
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-trustBlue">
            Core Competencies & Value Proposition
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-obsidian mt-3 tracking-tight">
            Bridging operational discipline with modern data analytics.
          </h2>
          <p className="text-mutedInk mt-4 text-base sm:text-lg leading-relaxed">
            Hiring managers and clients rely on professionals who understand both the ground-level
            operational workflow and the analytical tools required to optimize it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-ivory border border-slate-200/70 flex items-center justify-center">
                    {iconMap[service.color]}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColorMap[service.color]}`}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-obsidian group-hover:text-trustBlue transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-mutedInk mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-7 pt-6 border-t border-slate-100 space-y-2.5">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emeraldTrust shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
