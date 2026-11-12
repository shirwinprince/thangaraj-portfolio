import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ContactFooter() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-obsidian bg-grid-dark text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Start a Conversation
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to bring analytical clarity to your operations?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-xl">
              Available for full-time Business Analyst, Operations Specialist, and Data
              Analytics roles, as well as process reporting consultations.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={profileData.emailHref}
                className="flex items-center gap-3.5 text-slate-200 hover:text-amber-300 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-300" />
                </div>
                <span className="font-medium">{profileData.email}</span>
              </a>

              <a
                href={profileData.phoneHref}
                className="flex items-center gap-3.5 text-slate-200 hover:text-emerald-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-medium">{profileData.phone}</span>
              </a>

              <div className="flex items-center gap-3.5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-medium">{profileData.location}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={profileData.resumeUrl}
                download="Thangaraj_Chandrasekar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-white text-obsidian hover:bg-amber-300 font-bold text-sm px-6 py-3.5 rounded-full transition"
              >
                <Download className="w-4 h-4" />
                Download Official PDF Resume
              </a>
            </div>
          </div>

          {/* Right Quick Inquiry Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="bg-charcoal/90 border border-white/10 rounded-3xl p-7 sm:p-9 space-y-5 shadow-2xl"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Direct Message to Thangaraj
              </h3>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Your Name / Company
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g., Priya Nair — Talent Acquisition"
                  className="w-full rounded-xl bg-obsidian/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-trustBlue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="priya@company.com"
                  className="w-full rounded-xl bg-obsidian/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-trustBlue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Opportunity or Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the role, team, or analytical requirement..."
                  className="w-full rounded-xl bg-obsidian/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-trustBlue"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-trustBlue hover:bg-royalBlue text-white font-bold py-3.5 px-6 rounded-full transition shadow-lg"
              >
                <Send className="w-4 h-4" />
                Send Message via Email Client
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Opening your default email app with pre-filled details!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p>Built with React, Vite & Tailwind CSS • Ready for Vercel Deployment</p>
        </div>
      </div>
    </footer>
  );
}
