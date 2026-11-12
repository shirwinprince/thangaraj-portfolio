import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceTimeline, educationList } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Career Timeline (8 cols) */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-trustBlue">
                Career Trajectory
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-obsidian mt-2 tracking-tight">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-trustBlue before:via-warmBronze/50 before:to-transparent">
              {experienceTimeline.map((job) => (
                <div
                  key={job.period}
                  className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-soft"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-obsidian text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-mutedInk">
                      <MapPin className="w-3.5 h-3.5 text-trustBlue" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian">
                    {job.role}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-semibold text-trustBlue">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                    {job.formerName && (
                      <span className="text-xs font-normal text-mutedInk">
                        ({job.formerName})
                      </span>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.achievements.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-emeraldTrust shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-warmBronze">
                Academic Foundation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-obsidian mt-2 tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-5">
              {educationList.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-sand/80 rounded-2xl p-6 border border-warmBronze/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-warmBronze bg-white px-3 py-1 rounded-full border border-warmBronze/20">
                      Class of {edu.year}
                    </span>
                    <GraduationCap className="w-5 h-5 text-obsidian" />
                  </div>
                  <h3 className="font-display font-bold text-base text-obsidian mt-3">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-mutedInk mt-1">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Trust Verification Summary Card */}
            <div className="bg-obsidian text-white rounded-3xl p-7 border border-white/10 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Why Hire Thangaraj?
              </p>
              <h3 className="font-display text-xl font-bold mt-2">
                Zero-Friction Onboarding & Reliable Execution
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                With a decade of experience mentoring teams, handling critical US healthcare
                escalations, and automating operational reports in Python and Power BI, I bring
                immediate stability and analytical clarity to any operations or analytics team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
