import { useState, useEffect, useRef } from 'react';
import TypewriterText from '../common/TypewriterText';
import { capabilities } from '../../data/portfolioData';
import { assetUrl } from '../../utils/assets';
import '../../styles/HeroSection.css';

const socialLinks = [
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1Cqrs-sYmVCJ_if73wZMkS4IUppMjzqbX/view?usp=sharing',
    icon: '📄',
    accent: '#FFBE0B',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kartikskr/',
    iconImg: assetUrl('/assets/icons/linkedin.png'),
    accent: '#0A66C2',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/itskartike910',
    iconImg: assetUrl('/assets/icons/github.jpg'),
    accent: '#7B2FFE',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/its_kartike/',
    iconImg: assetUrl('/assets/icons/leetcode.png'),
    accent: '#FFA116',
  },
  {
    name: 'GFG',
    url: 'https://www.geeksforgeeks.org/user/kumarkartik147359/',
    iconImg: assetUrl('/assets/icons/gfg.jpg'),
    accent: '#27C93F',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/its_kartike',
    iconImg: assetUrl('/assets/icons/codechef.jpg'),
    accent: '#FFBE0B',
  },
];

const typewriterTexts = [
  { text: 'Software Engineer', color: '#00D9FF' },
  { text: 'AI & Agentic Systems Builder', color: '#9D4EDD' },
  { text: 'Backend & Systems Engineer', color: '#06FFA5' },
  { text: 'Chromium & Automation Specialist', color: '#FFBE0B' },
  { text: 'Competitive Programmer (1829)', color: '#FF006E' },
];

const statChips = [
  { value: '1+ Years', label: 'Experience', color: '#00D9FF' },
  { value: '15+', label: 'Projects', color: '#06FFA5' },
  { value: '1000+', label: 'DSA Solved', color: '#FFBE0B' },
  { value: '1829', label: 'LeetCode Peak', color: '#9D4EDD' },
];

const aboutCards = [
  {
    icon: '🎓',
    title: 'Education',
    accent: '#00D9FF',
    tag: 'NIT Patna',
    content:
      'B.Tech in Computer Science and Engineering @ National Institute of Technology, Patna (2021–2025) · CGPA: 7.52/10',
  },
  {
    icon: '🧠',
    title: 'Agentic AI & Orchestration',
    accent: '#9D4EDD',
    tag: 'AI Systems',
    content:
      'Designing autonomous workflows with LangGraph, PydanticAI, and multi-model LLM orchestration (Gemini, Claude, OpenAI). Architected OpenSarthi desktop voice & automation agent.',
  },
  {
    icon: '⚙️',
    title: 'Systems & Internals',
    accent: '#FFBE0B',
    tag: 'Low Latency',
    content:
      'Rust, Chromium custom builds, DevTools protocol, Android network interception, low-latency caching (reduced latency 98%), and high-concurrency Tauri desktop runtimes.',
  },
  {
    icon: '🌐',
    title: 'Full-Stack & APIs',
    accent: '#06FFA5',
    tag: 'Enterprise',
    content:
      'React, TypeScript, Flask, FastAPI, PostgreSQL. Built DRDO technology readiness platform with 30+ secured REST APIs, RBAC, and automated reporting.',
  },
];

const HeroSection: React.FC = () => {
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  // Spinning ring animation
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.5;
      setRotation(angle);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section className="hero-section neon-card" id="hero">
      {/* Ambient blobs */}
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />

      <div className="hero-inner">
        {/* ── Desktop Layout ─────────────────────────────────────────── */}
        <div className="hero-desktop">
          {/* Left text area */}
          <div className="hero-text">
            <div className="hero-greeting-badge">
              <span className="status-dot" />
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-name">Kartik Kumar</h1>
            <div className="hero-role-row">
              <div className="hero-code-icon">&lt;&gt;</div>
              <TypewriterText texts={typewriterTexts} />
            </div>
            <div className="hero-chips">
              {statChips.map((chip) => (
                <StatChip key={chip.label} {...chip} />
              ))}
            </div>
          </div>

          {/* Right profile image */}
          <div className="hero-photo-wrap">
            <ProfileImage
              isHovering={isHoveringPhoto}
              rotation={rotation}
              onMouseEnter={() => setIsHoveringPhoto(true)}
              onMouseLeave={() => setIsHoveringPhoto(false)}
            />
          </div>
        </div>

        {/* ── Social Links Bar (matches image 2) ───────────────────── */}
        <div className="social-links-bar">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn hover-lift"
              style={{
                borderColor: `${link.accent}35`,
                '--btn-accent': link.accent,
              } as React.CSSProperties}
            >
              {link.iconImg ? (
                <img
                  src={link.iconImg}
                  alt={link.name}
                  className="social-btn-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <span className="social-icon">{link.icon}</span>
              )}
              <span className="social-name">{link.name}</span>
              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>

        {/* ── About Me Terminal Card ─────────────────────────────────── */}
        <div className="about-card glass-card">
          {/* MacOS-style header */}
          <div className="about-header">
            <div className="mac-dots">
              <span className="mac-dot mac-red" />
              <span className="mac-dot mac-yellow" />
              <span className="mac-dot mac-green" />
            </div>
            <div className="about-filename glass-card-sm">
              <span className="about-terminal-icon">⌨️</span>
              <span className="mono-text">kartik.config.ts</span>
            </div>
            <div className="about-open-badge">
              <span className="status-dot" style={{ width: 6, height: 6 }} />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* About info cards grid */}
          <div className="about-grid">
            {aboutCards.map((card) => (
              <AboutCard key={card.title} {...card} />
            ))}
          </div>

          {/* Quote */}
          <div className="about-quote" style={{ borderColor: 'rgba(0,217,255,0.25)', background: 'rgba(0,217,255,0.06)' }}>
            <div className="about-quote-icon">✨</div>
            <p>
              Software engineer building high-performance systems and autonomous AI agents — bridging LLM intelligence
              with real-world OS and browser automation.
            </p>
          </div>
        </div>

        {/* ── Capabilities Grid ──────────────────────────────────────── */}
        <div className="capabilities-section">
          <div className="capabilities-header">
            <div className="cap-icon-wrap" style={{ background: 'rgba(0,217,255,0.14)', border: '1px solid rgba(0,217,255,0.35)' }}>
              💻
            </div>
            <h3>What I Bring to the Table</h3>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.title} {...cap} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Sub-components ───────────────────────────────────────────────────────────

interface StatChipProps {
  value: string;
  label: string;
  color: string;
}

const StatChip: React.FC<StatChipProps> = ({ value, label, color }) => (
  <div className="stat-chip" style={{ '--chip-color': color } as React.CSSProperties}>
    <span className="stat-value" style={{ color }}>{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

interface ProfileImageProps {
  isHovering: boolean;
  rotation: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ isHovering, rotation, onMouseEnter, onMouseLeave }) => (
  <div
    className="profile-img-outer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Spinning gradient ring */}
    <div
      className="profile-ring"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
    {/* Photo */}
    <div
      className="profile-img"
      style={{
        boxShadow: isHovering
          ? '0 0 32px rgba(0,217,255,0.4), 0 0 64px rgba(0,217,255,0.15)'
          : '0 0 20px rgba(0,217,255,0.2)',
        transform: isHovering ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}
    >
      <img
        src={assetUrl('/profile.jpg')}
        alt="Kartik Kumar"
        onError={(e) => {
          e.currentTarget.src = assetUrl('/assets/profile.jpg');
        }}
      />
    </div>
  </div>
);

interface AboutCardProps {
  icon: string;
  title: string;
  accent: string;
  tag: string;
  content: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, accent, tag, content }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="about-info-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${accent}14` : 'rgba(255,255,255,0.03)',
        borderColor: hovered ? `${accent}72` : `${accent}28`,
        boxShadow: hovered ? `0 8px 24px ${accent}20` : 'none',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="about-card-header">
        <div className="about-card-icon-wrap" style={{ background: `${accent}24` }}>
          <span>{icon}</span>
        </div>
        <span className="about-card-title">{title}</span>
        <span className="about-card-tag" style={{ background: `${accent}20`, color: accent }}>{tag}</span>
      </div>
      <p className="about-card-content" style={{ color: '#ccd6f6' }}>{content}</p>
    </div>
  );
};

interface CapabilityCardProps {
  icon: string;
  color: string;
  title: string;
  desc: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, color, title, desc }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cap-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${color}0F` : 'rgba(255,255,255,0.04)',
        borderColor: hovered ? `${color}50` : 'rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="cap-icon-circle" style={{ background: `${color}22`, border: `1px solid ${color}55` }}>
        {icon}
      </div>
      <span className="cap-title">{title}</span>
      <span className="cap-desc">{desc}</span>
    </div>
  );
};

export default HeroSection;
