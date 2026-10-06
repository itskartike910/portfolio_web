import { useState } from 'react';
import { skillCategories, type SkillItem } from '../../data/portfolioData';
import '../../styles/SkillsSection.css';

const skillIcons: Record<string, string> = {
  'C++': '/assets/icons/c++.png',
  'C': '/assets/icons/c-.png',
  'Python': '/assets/icons/python.png',
  'Dart': '/assets/icons/dart.png',
  'Flutter': '/assets/icons/flutter.jpg',
  'Firebase': '/assets/icons/firebase.png',
  'Git': '/assets/icons/git.png',
  'GitHub': '/assets/icons/github.jpg',
  'Chromium': '/assets/icons/chromium.jpg',
  'Android Dev': '/assets/icons/androidDev.png',
  'Android Studio': '/assets/icons/astudio.png',
  'VS Code': '/assets/icons/visual-basic.png',
  'SQL': '/assets/icons/mysql.png',
  'PostgreSQL': '/assets/icons/mysql.png',
  'Machine Learning': '/assets/icons/machinelearning.png',
  'DSA': '/assets/icons/coding.png',
  'Competitive Programming': '/assets/icons/code.png',
};

const skillEmojiFallbacks: Record<string, string> = {
  'JavaScript': '⚡',
  'TypeScript': '🔷',
  'Java': '☕',
  'HTML/CSS': '🌐',
  'Rust': '🦀',
  'React.js': '⚛️',
  'Flask': '🧪',
  'FastAPI': '⚡',
  'Linux/Ubuntu': '🐧',
  'API Integration': '🔌',
  'Tauri': '🦀',
  'LLM Integration': '🧠',
  'Agentic AI': '🤖',
  'Browser Automation': '🌐',
  'LangGraph': '🕸️',
  'PydanticAI': '🛡️',
  'Database Management': '🗄️',
  'Web Development': '🌐',
  'Problem Solving': '💡',
  'UI/UX Design': '🎨',
};

const getLevelColor = (level: number): string => {
  if (level >= 0.9) return '#06FFA5';
  if (level >= 0.8) return '#00D9FF';
  if (level >= 0.7) return '#FFBE0B';
  return '#8892b0';
};

const getLevelText = (level: number): string => {
  if (level >= 0.9) return 'Expert';
  if (level >= 0.8) return 'Advanced';
  if (level >= 0.7) return 'Intermediate';
  return 'Beginner';
};

interface SkillChipProps {
  skill: SkillItem;
}

const SkillChip: React.FC<SkillChipProps> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const color = getLevelColor(skill.level);
  const levelText = getLevelText(skill.level);
  const iconPath = skillIcons[skill.name];
  const emoji = skillEmojiFallbacks[skill.name];

  return (
    <div
      className="skill-chip"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={`${skill.name} · ${levelText} (${Math.round(skill.level * 100)}%)`}
      style={{
        background: hovered ? `${color}18` : 'rgba(255, 255, 255, 0.035)',
        borderColor: hovered ? `${color}80` : 'rgba(255, 255, 255, 0.09)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? `0 6px 18px ${color}35` : 'none',
        transition: 'all 0.2s ease',
      }}
    >
      {iconPath ? (
        <img
          src={iconPath}
          alt={skill.name}
          className="skill-chip-img"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : emoji ? (
        <span className="skill-chip-emoji">{emoji}</span>
      ) : null}

      <span
        className="skill-chip-name"
        style={{ color: hovered ? color : '#ccd6f6', fontWeight: hovered ? 700 : 500 }}
      >
        {skill.name}
      </span>
      {hovered && (
        <span
          className="skill-chip-dot"
          style={{
            background: color,
            boxShadow: `0 0 6px ${color}`,
          }}
        />
      )}
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section neon-card" id="skills">
      <div className="blob skills-blob-1" />
      <div className="blob skills-blob-2" />
      <div className="skills-inner">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <div className="category-header">
              <span className="section-accent" />
              <span className="category-title">{category}</span>
            </div>
            <div className="skill-chips-wrap">
              {skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
