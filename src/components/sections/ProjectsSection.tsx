import { useState } from 'react';
import { allProjects, projectCategories, type ProjectData } from '../../data/portfolioData';
import '../../styles/ProjectsSection.css';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const getCategoryColor = (cat: string): string => {
    const map: { [k: string]: string } = {
      'Desktop & AI Agents': '#00D9FF',
      'AI & Automation': '#9D4EDD',
      'Enterprise': '#06FFA5',
      'Machine Learning': '#FF006E',
      'Mobile Development': '#FFBE0B',
      'Web Development': '#5B7FFF',
      'Game Development': '#FF6B6B',
      'Utility': '#06FFA5',
    };
    return map[cat] || '#00D9FF';
  };

  const color = getCategoryColor(project.category);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? `${color}55` : 'rgba(255,255,255,0.08)',
        background: hovered ? `${color}07` : 'rgba(255,255,255,0.03)',
        boxShadow: hovered ? `0 8px 32px ${color}18` : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Header */}
      <div className="project-header">
        <div className="project-category-chip" style={{ background: `${color}18`, borderColor: `${color}33`, color }}>
          {project.category}
        </div>
        <div className="project-duration">{project.duration}</div>
      </div>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      {/* Tech stack */}
      <div className="project-tech-wrap">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="project-tech-chip" style={{ borderColor: `${color}33`, color }}>
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="project-tech-chip" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#8892b0' }}>
            +{project.technologies.length - 5} more
          </span>
        )}
      </div>

      {/* Expand for details */}
      {expanded && (
        <div className="project-expanded">
          <p className="project-detailed">{project.detailedDescription}</p>
          <div className="project-features-label">Key Features:</div>
          <ul className="project-features">
            {project.keyFeatures.map((f, i) => (
              <li key={i}>
                <span className="feat-dot" style={{ background: color }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="project-avail">
            {project.webAvailable && (
              <span className="avail-badge" style={{ background: 'rgba(0,217,255,0.1)', color: '#00D9FF', borderColor: 'rgba(0,217,255,0.25)' }}>
                🌐 Web
              </span>
            )}
            {project.androidAvailable && (
              <span className="avail-badge" style={{ background: 'rgba(6,255,165,0.1)', color: '#06FFA5', borderColor: 'rgba(6,255,165,0.25)' }}>
                📱 Android
              </span>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="project-actions">
        <button className="project-expand-btn btn-glass" onClick={() => setExpanded((v) => !v)}>
          {expanded ? '▲ Show Less' : '▼ Show More'}
        </button>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-glass project-link-btn">
              <span>🐙</span> GitHub
            </a>
          )}
          {project.projectUrl && project.projectUrl !== project.githubUrl && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-glass project-link-btn">
              <span>🔗</span> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects-section neon-card" id="projects">
      <div className="blob projects-blob-1" />
      <div className="projects-inner">
        {/* Category filter */}
        <div className="category-filter-wrap">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="projects-empty">No projects in this category yet.</div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
