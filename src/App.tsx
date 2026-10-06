import { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/layout/Navbar';
import CursorRingField from './components/common/CursorRingField';
import SectionHeader from './components/common/SectionHeader';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import StatsSection from './components/sections/StatsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* ── Interactive WebGL Cursor Ring Background Field ── */}
      <div className="cursor-field-bg-wrap">
        <CursorRingField
          colors={['#00d9ff', '#7189ff', '#06ffa5', '#ff007f', '#ffbe0b']}
          density={300}
          dotSize={120}
          speed={5.5}
          cameraDistance={160}
          ring={{ push: 45, width: 9, radius: 13, turbulence: 85 }}
          background="transparent"
          opacity={0.7}
        />
      </div>

      {/* Subtle ambient blobs for soft volumetric depth */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      {/* Navigation with Top Progress Bar & Floating Pill Overlay */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Page content */}
      <main className="page-content">
        <div className="content-wrapper">

          {/* ── 1. Hero / Profile ──────────────────────────────── */}
          <section className="section-wrapper" id="hero">
            <SectionHeader icon="👤" title="My Profile" />
            <HeroSection />
          </section>

          {/* ── 2. Experience & Skills (Side-by-Side on Desktop) ─ */}
          <section className="section-wrapper" id="experience-skills-section">
            <div className="exp-skills-row">
              <div className="exp-skills-col" id="experience">
                <SectionHeader icon="💼" title="Experience" />
                <ExperienceSection />
              </div>

              <div className="exp-skills-col" id="skills">
                <SectionHeader icon="⚡" title="My Skills" />
                <SkillsSection />
              </div>
            </div>
          </section>

          {/* ── 3. Stats & Metrics ─────────────────────────────── */}
          <section className="section-wrapper" id="stats">
            <SectionHeader icon="📊" title="Stats & Metrics" />
            <StatsSection />
          </section>

          {/* ── 4. Achievements ────────────────────────────────── */}
          <section className="section-wrapper" id="achievements">
            <SectionHeader icon="🏆" title="Achievements" />
            <AchievementsSection />
          </section>

          {/* ── 5. Projects ────────────────────────────────────── */}
          <section className="section-wrapper" id="projects">
            <SectionHeader icon="🚀" title="My Projects" />
            <ProjectsSection />
          </section>

          {/* ── 6. Contact ─────────────────────────────────────── */}
          <section className="section-wrapper" id="contact" style={{ marginBottom: 0 }}>
            <SectionHeader icon="✉️" title="Contact Me" />
            <ContactSection />
          </section>

        </div>
      </main>

      {/* Floating Back to Top Button with Circular Progress Ring */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to top"
        >
          <svg className="progress-ring-svg" width="46" height="46">
            <circle
              className="progress-ring-bg"
              cx="23"
              cy="23"
              r="20"
              strokeWidth="3"
            />
            <circle
              className="progress-ring-circle"
              cx="23"
              cy="23"
              r="20"
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            />
          </svg>
          <span className="back-to-top-arrow">↑</span>
        </button>
      )}
    </div>
  );
}

export default App;
