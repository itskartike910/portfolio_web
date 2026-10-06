import { achievements, certifications } from '../../data/portfolioData';
import '../../styles/AchievementsSection.css';

const competitivePlatforms = [
  {
    platform: 'LeetCode',
    rating: '1829',
    achievement: 'Maximum Rating',
    icon: '⚡',
    color: '#FFBE0B',
    url: 'https://leetcode.com/u/its_kartike/',
    stars: 4,
  },
  {
    platform: 'CodeChef',
    rating: '1636',
    achievement: 'Peak Rating (3-Star)',
    icon: '⭐',
    color: '#06FFA5',
    url: 'https://www.codechef.com/users/its_kartike',
    stars: 3,
  },
  {
    platform: 'GeeksForGeeks',
    rating: '1000+',
    achievement: 'Problems Solved',
    icon: '🌿',
    color: '#2F8D46',
    url: 'https://www.geeksforgeeks.org/user/kumarkartik147359/',
    stars: 4,
  },
  {
    platform: 'HackerRank',
    rating: '5⭐',
    achievement: 'Problem Solving',
    icon: '🎯',
    color: '#00EA64',
    url: '#',
    stars: 5,
  },
];

const SectionHeader: React.FC<{ icon: string; title: string; color: string }> = ({ icon, title, color }) => (
  <div className="ach-section-header">
    <div className="ach-icon-wrap" style={{ background: `${color}20`, border: `1px solid ${color}44` }}>
      {icon}
    </div>
    <span className="ach-section-title" style={{ color }}>{title}</span>
  </div>
);

const AchievementsSection: React.FC = () => {
  return (
    <section className="achievements-section neon-card" id="achievements">
      <div className="blob ach-blob-1" />
      <div className="ach-inner">

        {/* ── Competitive Programming ─────────────────────────────── */}
        <SectionHeader icon="💻" title="Competitive Programming" color="#00D9FF" />

        <div className="cp-grid">
          {competitivePlatforms.map((p) => (
            <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" className="cp-card hover-lift"
              style={{ borderColor: `${p.color}33` }}>
              <div className="cp-platform-icon" style={{ background: `${p.color}18`, border: `1px solid ${p.color}44` }}>
                {p.icon}
              </div>
              <div className="cp-info">
                <span className="cp-platform">{p.platform}</span>
                <span className="cp-rating" style={{ color: p.color }}>{p.rating}</span>
                <span className="cp-achievement">{p.achievement}</span>
                <div className="cp-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < p.stars ? p.color : '#2d2d44', fontSize: '14px' }}>★</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── LeetCode Stats Image ──────────────────────────────── */}
        <div className="leetcode-card glass-card-sm">
          <img
            src="https://leetcard.jacoblin.cool/its_kartike?theme=dark&font=JetBrains%20Mono&ext=heatmap"
            alt="LeetCode Stats"
            className="leetcode-img"
            loading="lazy"
          />
        </div>

        {/* ── Awards ───────────────────────────────────────────── */}
        <div className="ach-divider" />
        <SectionHeader icon="🏆" title="Awards & Recognitions" color="#FF006E" />

        <div className="awards-list">
          {achievements.map((ach, i) => (
            <AchievementItem key={i} ach={ach} />
          ))}
        </div>

        {/* ── Certifications ───────────────────────────────────── */}
        <div className="ach-divider" />
        <SectionHeader icon="🎓" title="Certifications" color="#06FFA5" />

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-card glass-card-sm"
              style={{ borderColor: `${cert.color}22` }}>
              <div className="cert-dot" style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
              <div className="cert-info">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-issuer">{cert.issuer} · {cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── GitHub Stats ─────────────────────────────────────── */}
        <div className="ach-divider" />
        <SectionHeader icon="📊" title="GitHub Analytics" color="#9D4EDD" />

        <div className="github-stats-grid">
          <img
            src="https://github-readme-stats.vercel.app/api?username=itskartike910&show_icons=true&theme=react&bg_color=0D1117&border_color=1a1b27&icon_color=00D9FF&title_color=00D9FF&text_color=c9d1d9&include_all_commits=true&count_private=true&ring_color=7B2FFE&rank_icon=percentile"
            alt="GitHub Stats"
            className="github-stat-img"
            loading="lazy"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=itskartike910&layout=compact&langs_count=8&theme=react&bg_color=0D1117&border_color=1a1b27&title_color=00D9FF&text_color=c9d1d9"
            alt="Top Languages"
            className="github-stat-img"
            loading="lazy"
          />
        </div>

        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=itskartike910&theme=react-dark&bg_color=0D1117&color=00D9FF&line=7B2FFE&point=FFFFFF&area_color=00D9FF&area=true&hide_border=false&custom_title=Contribution%20Activity"
          alt="Contribution Activity"
          className="github-activity-img"
          loading="lazy"
        />

        <div className="github-summary-grid">
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=itskartike910&theme=github_dark" alt="" loading="lazy" className="summary-card-img" />
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=itskartike910&theme=github_dark" alt="" loading="lazy" className="summary-card-img" />
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=itskartike910&theme=github_dark&utcOffset=5.5" alt="" loading="lazy" className="summary-card-img" />
        </div>
      </div>
    </section>
  );
};

interface AchievementItemProps {
  ach: (typeof achievements)[0];
}

const AchievementItem: React.FC<AchievementItemProps> = ({ ach }) => (
  <div className="award-item" style={{ borderColor: `${ach.color}22` }}>
    <div className="award-icon-wrap" style={{ background: `${ach.color}18`, border: `1px solid ${ach.color}44` }}>
      {ach.icon}
    </div>
    <div className="award-info">
      <div className="award-header-row">
        <span className="award-title">{ach.title}</span>
        <span className="award-amount" style={{ background: `${ach.color}18`, color: ach.color, border: `1px solid ${ach.color}33` }}>
          {ach.amount}
        </span>
      </div>
      <span className="award-org-date">{ach.organization} · {ach.date}</span>
      <p className="award-desc">{ach.description}</p>
      {ach.certificateUrl && (
        <a href={ach.certificateUrl} target="_blank" rel="noopener noreferrer" className="award-cert-link"
          style={{ color: ach.color }}>
          🔗 View Certificate
        </a>
      )}
    </div>
  </div>
);

export default AchievementsSection;
