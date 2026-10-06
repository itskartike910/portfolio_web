import { useState } from 'react';
import { experiences } from '../../data/portfolioData';
import '../../styles/ExperienceSection.css';

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section neon-card" id="experience">
      <div className="blob exp-blob-1" />
      <div className="exp-inner">
        {experiences.map((exp, index) => (
          <div key={exp.company}>
            <ExperienceItem exp={exp} />
            {index < experiences.length - 1 && (
              <div className="exp-divider">
                <div className="exp-divider-line" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  exp: (typeof experiences)[0];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [certHovered, setCertHovered] = useState(false);

  return (
    <div className="exp-item">
      {/* Timeline dot + line */}
      <div className="exp-timeline">
        <div
          className="exp-dot"
          style={{
            background: exp.accentColor,
            boxShadow: `0 0 12px ${exp.accentColor}99, 0 0 24px ${exp.accentColor}44`,
          }}
        />
        <div
          className="exp-line"
          style={{
            background: `linear-gradient(to bottom, ${exp.accentColor}80, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="exp-content">
        <span className="exp-company" style={{ color: exp.accentColor }}>
          {exp.company}
        </span>
        <span className="exp-role">{exp.role}</span>

        <div className="exp-meta">
          <span
            className="exp-chip"
            style={{ background: `${exp.accentColor}14`, borderColor: `${exp.accentColor}33`, color: exp.accentColor }}
          >
            📍 {exp.location}
          </span>
          <span
            className="exp-chip"
            style={{ background: `${exp.accentColor}14`, borderColor: `${exp.accentColor}33`, color: exp.accentColor }}
          >
            📅 {exp.duration}
          </span>
        </div>

        <ul className="exp-responsibilities">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="exp-resp-item">
              <span
                className="exp-bullet"
                style={{ background: `${exp.accentColor}CC` }}
              />
              <span>{resp}</span>
            </li>
          ))}
        </ul>

        {exp.certificateUrl && (
          <a
            href={exp.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-cert-btn"
            onMouseEnter={() => setCertHovered(true)}
            onMouseLeave={() => setCertHovered(false)}
            style={{
              background: certHovered ? `${exp.accentColor}1A` : `${exp.accentColor}0D`,
              borderColor: certHovered ? `${exp.accentColor}55` : `${exp.accentColor}33`,
              color: exp.accentColor,
            }}
          >
            <span>🔗</span>
            <span>View Certificate</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
