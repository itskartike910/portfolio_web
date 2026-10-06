import { useState, useEffect } from 'react';
import '../../styles/Navbar.css';

const navItems = [
  { id: 'hero', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'stats', label: 'Stats' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const resumeUrl =
  'https://drive.google.com/file/d/1Cqrs-sYmVCJ_if73wZMkS4IUppMjzqbX/view?usp=sharing';

interface NavbarProps {
  scrollProgress?: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollProgress = 0 }) => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems
        .map((n) => document.getElementById(n.id))
        .filter(Boolean) as HTMLElement[];
      let current = 'hero';
      for (const section of sections) {
        if (window.scrollY + 160 >= section.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top Gradient Reading Progress Bar (matches Flutter) */}
      <div className="top-reading-progress-track">
        <div
          className="top-reading-progress-bar"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>

      {/* Floating Animated Overlay AppBar */}
      <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
        <nav className={`navbar-container ${scrolled ? 'floating-pill' : 'docked-header'}`}>
          {/* Brand Logo */}
          <div className="navbar-logo" onClick={() => scrollTo('hero')} title="Kartik Kumar">
            <div className="logo-ring">
              <img
                src="/assets/icons/app_icon.png"
                alt="Kartik"
                className="logo-img"
                onError={(e) => {
                  e.currentTarget.src = '/profile.jpg';
                }}
              />
            </div>
            <div className="logo-text">
              <span className="logo-name">Kartik</span>
              <span className="logo-separator">|</span>
              <span className="logo-title">Portfolio</span>
            </div>
          </div>

          {/* Desktop Nav Links (clean Flutter style) */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Actions & Resume Button */}
          <div className="navbar-actions">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-pill-btn"
            >
              <span className="resume-icon">📄</span>
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <span className={mobileOpen ? 'bar bar-1 open' : 'bar bar-1'} />
              <span className={mobileOpen ? 'bar bar-2 open' : 'bar bar-2'} />
              <span className={mobileOpen ? 'bar bar-3 open' : 'bar bar-3'} />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer glass-card">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-drawer-link ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-drawer-resume"
              onClick={() => setMobileOpen(false)}
            >
              <span>📄</span>
              <span>View Resume</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
