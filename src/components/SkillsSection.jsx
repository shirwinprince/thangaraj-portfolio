import React from 'react';
import { Globe2, Sparkles } from 'lucide-react';
import { skillCategories, profileData } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-trustBlue">
            Technical & Operational Toolkit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-obsidian mt-3 tracking-tight">
            Skills engineered for data accuracy & reporting speed.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className={`rounded-3xl p-7 bg-ivory border ${group.borderAccent} shadow-sm`}
            >
              <span
                className={`inline-block text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 ${group.accent}`}
              >
                {group.category}
              </span>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-semibold text-obsidian mb-1.5">
                      <span>{skill.name}</span>
                      <span className="text-mutedInk">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-obsidian rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Languages Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sand/70 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-obsidian mb-3">
              <Sparkles className="w-4 h-4 text-warmBronze" />
              Core Behavioral Strengths
            </div>
            <div className="flex flex-wrap gap-2">
              {profileData.softSkills.map((soft) => (
                <span
                  key={soft}
                  className="bg-white text-slate-800 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-200"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-sand/70 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-obsidian mb-3">
              <Globe2 className="w-4 h-4 text-trustBlue" />
              Languages & Communication
            </div>
            <div className="flex flex-wrap gap-3">
              {profileData.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-obsidian text-white text-xs font-semibold px-4 py-2 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
