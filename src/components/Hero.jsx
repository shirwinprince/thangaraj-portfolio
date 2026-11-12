import React from 'react';
import { ArrowRight, FileCheck2, MapPin, ShieldCheck, BarChart3 } from 'lucide-react';
import { profileData, trustOrganizations } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Subtle Ambient Color Psychology Glows */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-trustBlue/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-24 w-[380px] h-[380px] rounded-full bg-emeraldTrust/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Trust Anchors */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand border border-warmBronze/25">
              <span className="text-xs font-bold tracking-[0.16em] text-warmBronze uppercase">
                {profileData.roleTagline}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-obsidian">
              {profileData.headlinePrimary}{' '}
              <span className="block text-warmBronze mt-1">
                {profileData.headlineAccent}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-mutedInk max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-obsidian font-semibold">{profileData.name}</strong>.{' '}
              {profileData.subheadline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-obsidian hover:bg-trustBlue text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-soft hover:shadow-elevated"
              >
                Hire or Collaborate
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-sand text-obsidian border border-slate-300 font-semibold px-7 py-4 rounded-full transition-all"
              >
                Explore 10+ Yrs Track Record
              </a>
            </div>

            {/* Location & Verification Pill */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-mutedInk">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-trustBlue" />
                {profileData.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-emeraldTrust" />
                Python • SQL • Power BI • Excel
              </span>
            </div>
          </div>

          {/* Right Column: Organic Portrait Container with Floating Trust Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px]">
              {/* Decorative Offset Backdrop */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-trustBlue/15 via-warmBronze/20 to-emeraldTrust/15 organic-portrait-mask blur-md" />

              {/* Main Masked Portrait */}
              <div className="relative bg-slate-200 organic-portrait-mask overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.3]">
                <img
                  src={profileData.portraitUrl}
                  alt="Thangaraj Chandrasekar - Operations & Data Analytics Specialist"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Trust Card 1: Top Left */}
              <div className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-elevated border border-slate-100 absolute -left-8 top-10">
                <div className="w-10 h-10 rounded-xl bg-trustBlue/10 text-trustBlue flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-obsidian">SME Certified</p>
                  <p className="text-[11px] text-mutedInk">Healthcare & Banking</p>
                </div>
              </div>

              {/* Floating Trust Card 2: Bottom Right */}
              <div className="hidden sm:flex items-center gap-3 bg-obsidian text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10 absolute -right-4 bottom-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Data-Driven SLA</p>
                  <p className="text-[11px] text-slate-300">SQL & Power BI Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Enterprise Ecosystems Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-mutedInk shrink-0">
            Enterprise Processes Supported
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {trustOrganizations.map((org) => (
              <div key={org.name} className="group">
                <p className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-500 group-hover:text-obsidian transition-colors">
                  {org.name}
                </p>
                <p className="text-[10px] text-slate-400">{org.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
