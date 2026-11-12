import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import ExpertiseSection from './components/ExpertiseSection';
import ImpactSection from './components/ImpactSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-slateInk">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MetricsBar />
        <ExpertiseSection />
        <ImpactSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
