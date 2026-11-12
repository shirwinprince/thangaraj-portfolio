import React from 'react';
import { keyMetrics } from '../data/portfolioData';

export default function MetricsBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="bg-obsidian bg-grid-dark text-white rounded-3xl px-6 py-10 sm:px-12 sm:py-12 shadow-2xl border border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 lg:divide-x lg:divide-white/15">
          {keyMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'lg:pl-6' : ''
              }`}
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {metric.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-amber-300/90">
                {metric.label}
              </span>
              <span className="mt-1 text-xs text-slate-400">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
