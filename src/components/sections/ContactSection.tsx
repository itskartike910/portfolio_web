import { useState } from 'react';
import '../../styles/ContactSection.css';

const socialPills = [
  {
    name: 'LinkedIn',
    icon: '/assets/icons/linkedin.png',
    accent: '#0A66C2',
    url: 'https://www.linkedin.com/in/kartikskr/',
  },
  {
    name: 'GitHub',
    icon: '/assets/icons/github.jpg',
    accent: '#7B2FFE',
    url: 'https://github.com/itskartike910',
  },
  {
    name: 'Telegram',
    icon: '/assets/icons/telegram.png',
    accent: '#0088CC',
    url: 'https://t.me/itskartike910',
  },
  {
    name: 'Discord',
    icon: '/assets/icons/discord.png',
    accent: '#5865F2',
    url: 'https://discord.com/channels/kartikkumar910',
  },
  {
    name: 'WhatsApp',
    icon: '/assets/icons/whatsapp.jpeg',
    accent: '#25D366',
    url: 'https://wa.me/+918434376401',
  },
  {
    name: 'Instagram',
    icon: '/assets/icons/instagram.png',
    accent: '#E4405F',
    url: 'https://www.instagram.com/its_kartike/',
  },
  {
    name: 'LeetCode',
    icon: '/assets/icons/leetcode.png',
    accent: '#FFA116',
    url: 'https://leetcode.com/u/its_kartike/',
  },
  {
    name: 'CodeChef',
    icon: '/assets/icons/codechef.jpg',
    accent: '#FFBE0B',
    url: 'https://www.codechef.com/users/its_kartike',
  },
  {
    name: 'GeeksforGeeks',
    icon: '/assets/icons/gfg.jpg',
    accent: '#27C93F',
    url: 'https://www.geeksforgeeks.org/user/kumarkartik147359/',
  },
];

const footerBadges = [
  { label: 'Built with', value: 'React & TypeScript', accent: '#00D9FF' },
  { label: 'Developed By', value: 'Kartik', accent: '#7B2FFE' },
  { label: 'Institution', value: 'NIT Patna', accent: '#FFBE0B' },
  { label: 'Status', value: 'Open for Roles', accent: '#06FFA5' },
];

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'kumarkartik147359@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="contact-section neon-card" id="contact">
      <div className="blob contact-blob-1" />
      <div className="blob contact-blob-2" />
      <div className="contact-inner">

        {/* Header */}
        <div className="contact-header">
          <div className="contact-icon-wrap">
            ✉️
          </div>
          <h2 className="contact-title">Let's Connect</h2>
        </div>
        <p className="contact-subtitle">
          Open to collaborating on systems architecture, Chromium optimization, and agentic AI projects.
        </p>

        {/* Direct Email Quick Card with Copy (matching Flutter) */}
        <div className="email-quick-card">
          <div className="email-left-info">
            <div className="email-icon-box">
              @
            </div>
            <div className="email-text-box">
              <span className="email-label-text">Direct Email</span>
              <span className="email-address mono">{email}</span>
            </div>
          </div>

          <button
            className={`email-copy-action-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopyEmail}
          >
            <span className="copy-icon">{copied ? '✓' : '📋'}</span>
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Shoot an Email CTA Button */}
        <a href={`mailto:${email}`} className="shoot-email-btn">
          <span className="shoot-icon">🚀</span>
          <span>Shoot an Email</span>
        </a>

        {/* Divider: OR FIND ME ON */}
        <div className="contact-divider-wrap">
          <div className="divider-line" />
          <span className="divider-text">OR FIND ME ON</span>
          <div className="divider-line" />
        </div>

        {/* Social & Platform Badges */}
        <div className="social-pills-wrap">
          {socialPills.map((pill) => (
            <a
              key={pill.name}
              href={pill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn"
              style={{
                borderColor: `${pill.accent}40`,
                '--pill-accent': pill.accent,
              } as React.CSSProperties}
            >
              <img
                src={pill.icon}
                alt={pill.name}
                className="social-pill-icon"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="social-pill-name">{pill.name}</span>
            </a>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="contact-quote">
          <p className="contact-quote-text">
            "I'm always open to collaborating on interesting systems, browser automation, or AI agent projects.
            If you have a moonshot idea or want to speed up Chromium internals — let's talk!"
          </p>
        </div>

        {/* Footer Badges & Copyright */}
        <div className="contact-footer">
          <div className="footer-badges-wrap">
            {footerBadges.map((b, i) => (
              <div
                key={i}
                className="footer-badge-pill"
                style={{ borderColor: `${b.accent}33` }}
              >
                <span className="badge-label">{b.label}</span>
                <span className="badge-value" style={{ color: b.accent }}>{b.value}</span>
              </div>
            ))}
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Kartik Kumar · National Institute of Technology Patna</p>
            <p className="footer-sub">Engineered with React & TypeScript</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
