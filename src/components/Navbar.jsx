import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Selected Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Authority & Availability Ribbon (inspired by reference top bar) */}
      <div className="bg-obsidian text-white/90 text-xs py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">
              Open to Business Analyst, Data Analytics & Operations Leadership Roles
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              10+ Years Verified Track Record
            </span>
            <a
              href={profileData.resumeUrl}
              download="Thangaraj_Chandrasekar_Resume.pdf"
              className="inline-flex items-center gap-1.5 bg-warmBronze/90 hover:bg-warmBronze text-white font-semibold px-3 py-1 rounded-full transition"
            >
              <Download className="w-3 h-3" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft py-3.5 border-b border-slate-200/70'
            : 'bg-ivory py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-obsidian text-white flex items-center justify-center font-display font-bold text-base tracking-wider group-hover:bg-trustBlue transition-colors">
              TC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tight text-obsidian text-lg leading-none">
                {profileData.shortName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-mutedInk mt-0.5">
                Analytics & Ops
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-trustBlue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-semibold tracking-wider text-mutedInk">
              EN / <span className="text-trustBlue">தமிழ்</span>
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-obsidian hover:bg-trustBlue text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-obsidian hover:bg-sand transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-ivory border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-800 hover:text-trustBlue"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-obsidian text-white font-semibold py-3 rounded-full"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
