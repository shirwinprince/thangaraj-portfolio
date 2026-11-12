import React from 'react';
import { TrendingUp, Award } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-sand/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emeraldTrust">
              Selected Operational Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-obsidian mt-3 tracking-tight">
              Measurable outcomes across healthcare & banking workflows.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold text-obsidian shadow-sm">
            <Award className="w-4 h-4 text-warmBronze" />
            Proven SLA & Compliance Excellence
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:border-trustBlue/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-mutedInk mb-4">
                  <span>0{index + 1}</span>
                  <span className="text-trustBlue">{study.category}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-obsidian leading-snug">
                  {study.title}
                </h3>

                <div className="mt-4 inline-flex items-center gap-1.5 bg-emeraldTrust/10 text-emeraldTrust text-xs font-bold px-3 py-1.5 rounded-lg">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {study.impact}
                </div>

                <p className="mt-4 text-sm text-mutedInk leading-relaxed">
                  {study.summary}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium bg-ivory text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
