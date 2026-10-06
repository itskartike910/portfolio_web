import React, { useState, useEffect } from 'react';
import { assetUrl } from '../../utils/assets';
import '../../styles/StatsSection.css';

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contestRating: number;
  contestRank: string;
  totalSubmissions: number;
  badgesCount: number;
  submissionCalendar: Record<string, number>;
}

const defaultStats: LeetCodeStats = {
  totalSolved: 844,
  totalQuestions: 4047,
  easySolved: 276,
  totalEasy: 963,
  mediumSolved: 469,
  totalMedium: 2111,
  hardSolved: 99,
  totalHard: 973,
  ranking: 57379,
  contestRating: 1829,
  contestRank: 'Top 7.16% (Knight)',
  totalSubmissions: 1961,
  badgesCount: 21,
  submissionCalendar: {},
};

const platformRankings = [
  {
    name: 'LeetCode',
    dotColor: '#FFA116',
    icon: '/assets/icons/leetcode.png',
    badge: 'Knight (Top 7.16%)',
    metric: '1829 Peak Rating · 844+ Solved',
    url: 'https://leetcode.com/u/its_kartike/',
  },
  {
    name: 'Codeforces',
    dotColor: '#00D9FF',
    badge: 'Pupil',
    metric: 'Max Rating 1269',
    url: 'https://codeforces.com/profile/its_kartike',
  },
  {
    name: 'CodeChef',
    dotColor: '#FFBE0B',
    icon: '/assets/icons/codechef.jpg',
    badge: '3-Star',
    metric: 'Peak Rating 1636',
    url: 'https://www.codechef.com/users/its_kartike',
  },
  {
    name: 'GeeksforGeeks',
    dotColor: '#27C93F',
    icon: '/assets/icons/gfg.jpg',
    badge: 'Rank #1 (NITP)',
    metric: '1000+ Problems Solved',
    url: 'https://www.geeksforgeeks.org/user/kumarkartik147359/',
  },
  {
    name: 'Robotics Club',
    dotColor: '#9D4EDD',
    badge: 'Champion',
    metric: 'Winner — "Machine Mayhem" (₹10k)',
    url: 'https://drive.google.com/file/d/14DcCE1oltOdgKfUlWmf7p36xE-5o52N0/view?usp=sharing',
  },
  {
    name: 'HackerRank',
    dotColor: '#00EAFF',
    badge: '5-Star',
    metric: 'Problem Solving & C++',
    url: 'https://www.hackerrank.com/profile/kumarkartik14735',
  },
];

const languagesByRepo = [
  { name: 'Dart', pct: '35%', color: '#00D9FF', val: 0.35 },
  { name: 'JavaScript', pct: '25%', color: '#FFD43B', val: 0.25 },
  { name: 'C++', pct: '20%', color: '#FF375F', val: 0.20 },
  { name: 'Python', pct: '12%', color: '#3776AB', val: 0.12 },
  { name: 'Other', pct: '8%', color: '#9D4EDD', val: 0.08 },
];

const languagesByCommit = [
  { name: 'Dart', pct: '40%', color: '#00D9FF', val: 0.40 },
  { name: 'C++', pct: '30%', color: '#FF375F', val: 0.30 },
  { name: 'TypeScript', pct: '18%', color: '#3178C6', val: 0.18 },
  { name: 'Python', pct: '8%', color: '#3776AB', val: 0.08 },
  { name: 'Other', pct: '4%', color: '#9D4EDD', val: 0.04 },
];

const hourlyActivity = [
  18, 12, 4, 1, 0, 0, 2, 4, 3, 2, 1, 6, 14, 25, 12, 16, 14, 9, 8, 10, 15, 14, 8, 6,
];

// Helper to compute SVG Donut paths
const DonutChart: React.FC<{
  slices: { name: string; val: number; color: string }[];
  size?: number;
  strokeWidth?: number;
  centerText?: string;
  subText?: string;
}> = ({ slices, size = 90, strokeWidth = 8, centerText, subText }) => {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <svg width={size} height={size} className="donut-svg">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth={strokeWidth}
      />
      {slices.map((slice, i) => {
        const strokeDasharray = `${slice.val * circumference} ${circumference}`;
        const strokeDashoffset = -accumulatedPercent * circumference;
        accumulatedPercent += slice.val;

        return (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={slice.color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: `rotate(-90deg)`,
              transformOrigin: '50% 50%',
              transition: 'stroke-dasharray 0.8s ease',
            }}
          />
        );
      })}
      {centerText && (
        <text
          x="50%"
          y={subText ? '46%' : '52%'}
          textAnchor="middle"
          dominantBaseline="central"
          className="donut-center-text"
        >
          {centerText}
        </text>
      )}
      {subText && (
        <text
          x="50%"
          y="66%"
          textAnchor="middle"
          dominantBaseline="central"
          className="donut-sub-text"
        >
          {subText}
        </text>
      )}
    </svg>
  );
};

// 52-Week LeetCode Heatmap
const HeatmapGrid: React.FC<{ calendar: Record<string, number> }> = ({ calendar }) => {
  const numCols = 48;
  const today = new Date();
  // Build grid: 7 rows (0: Sun to 6: Sat) x numCols
  const cols = Array.from({ length: numCols }, (_, c) => {
    return Array.from({ length: 7 }, (_, r) => {
      const daysAgo = (numCols - 1 - c) * 7 + (6 - r);
      const date = new Date(today);
      date.setDate(today.getDate() - daysAgo);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
        date.getDate()
      ).padStart(2, '0')}`;
      const count = calendar[key] || 0;
      // Fallback deterministic active pattern if calendar is empty
      const fallbackActive =
        Object.keys(calendar).length === 0 &&
        ((c * 3 + r * 5) % 4 === 0 || (c >= 12 && c <= 22));

      let level = 0;
      if (count >= 6) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1 || fallbackActive) level = 1;

      return { key, count, level };
    });
  });

  return (
    <div className="heatmap-container">
      <div className="heatmap-labels">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
      <div className="heatmap-grid">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="heatmap-col">
            {col.map((cell, rowIdx) => (
              <div
                key={rowIdx}
                className={`heatmap-cell level-${cell.level}`}
                title={`${cell.key}: ${cell.count > 0 ? `${cell.count} submissions` : 'Active'}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats>(defaultStats);

  // Fetch live LeetCode stats on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/its_kartike', {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const calendar: Record<string, number> = {};
          if (data.submissionCalendar) {
            Object.entries(data.submissionCalendar).forEach(([ts, cnt]) => {
              const dt = new Date(parseInt(ts, 10) * 1000);
              const k = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(
                dt.getDate()
              ).padStart(2, '0')}`;
              calendar[k] = (calendar[k] || 0) + Number(cnt);
            });
          }

          setStats((prev) => ({
            ...prev,
            totalSolved: data.totalSolved ?? prev.totalSolved,
            totalQuestions: data.totalQuestions ?? prev.totalQuestions,
            easySolved: data.easySolved ?? prev.easySolved,
            totalEasy: data.totalEasy ?? prev.totalEasy,
            mediumSolved: data.mediumSolved ?? prev.mediumSolved,
            totalMedium: data.totalMedium ?? prev.totalMedium,
            hardSolved: data.hardSolved ?? prev.hardSolved,
            totalHard: data.totalHard ?? prev.totalHard,
            ranking: data.ranking ?? prev.ranking,
            totalSubmissions:
              Array.isArray(data.totalSubmissions) && data.totalSubmissions[0]
                ? data.totalSubmissions[0].submissions
                : prev.totalSubmissions,
            submissionCalendar: Object.keys(calendar).length > 0 ? calendar : prev.submissionCalendar,
          }));
        }
      } catch {
        // Fallback silently kept
      }
    };

    fetchStats();
  }, []);

  const leetCodeSlices = [
    { name: 'Easy', val: stats.easySolved / stats.totalQuestions, color: '#00B8A3' },
    { name: 'Medium', val: stats.mediumSolved / stats.totalQuestions, color: '#FFC01E' },
    { name: 'Hard', val: stats.hardSolved / stats.totalQuestions, color: '#FF375F' },
  ];

  return (
    <div className="stats-section neon-card" id="stats">
      <div className="blob stats-blob-1" />
      <div className="stats-inner">

        {/* ═════════════════════════════════════════════════════════════════
            SECTION 1: 🏆 Competitive Programming & Achievements
            ═════════════════════════════════════════════════════════════════ */}
        <div className="stats-subheader">
          <div className="stats-header-icon" style={{ background: '#FFBE0B22', borderColor: '#FFBE0B55' }}>
            🏆
          </div>
          <span className="stats-subheader-title">Competitive Programming & Achievements</span>
        </div>

        <div className="stats-top-grid">
          {/* Card 1: Platform Rankings */}
          <div className="stats-card platform-rankings-card">
            <div className="card-header">
              <span className="card-header-icon">🎖️</span>
              <span className="card-header-title">Platform Rankings</span>
            </div>

            <div className="platform-table">
              <div className="platform-table-head">
                <span className="col-platform">Platform</span>
                <span className="col-achievement">Achievement / Rating</span>
              </div>
              <div className="platform-table-body">
                {platformRankings.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-row"
                  >
                    <div className="platform-col-name">
                      <span className="platform-dot" style={{ background: r.dotColor }} />
                      <span className="platform-name">{r.name}</span>
                    </div>
                    <div className="platform-col-metric">
                      <span className="metric-text">{r.metric}</span>
                      <span className="arrow-indicator">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: LeetCode Performance */}
          <div className="stats-card leetcode-perf-card">
            <div className="card-header">
              <div className="lc-logo-tag">
                <img src={assetUrl('/assets/icons/leetcode.png')} alt="LeetCode" className="lc-icon-img" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="card-header-title mono">its_kartike</span>
              </div>
              <div className="lc-rank-badge">
                <span className="lc-rating-pill">{Math.round(stats.contestRating)} RATING</span>
              </div>
            </div>

            <div className="lc-subtitle">
              Rank #{stats.ranking.toLocaleString()} · {stats.contestRank}
            </div>

            <div className="lc-donut-row">
              <div className="donut-wrap">
                <DonutChart
                  slices={leetCodeSlices}
                  size={96}
                  strokeWidth={7}
                  centerText={String(stats.totalSolved)}
                  subText="Solved"
                />
              </div>

              <div className="lc-diff-bars">
                <div className="diff-bar-item">
                  <span className="diff-label easy">Easy</span>
                  <div className="diff-track">
                    <div
                      className="diff-fill easy"
                      style={{ width: `${Math.min(100, (stats.easySolved / stats.totalEasy) * 100)}%` }}
                    />
                  </div>
                  <span className="diff-counts mono">{stats.easySolved} / {stats.totalEasy}</span>
                </div>

                <div className="diff-bar-item">
                  <span className="diff-label medium">Medium</span>
                  <div className="diff-track">
                    <div
                      className="diff-fill medium"
                      style={{ width: `${Math.min(100, (stats.mediumSolved / stats.totalMedium) * 100)}%` }}
                    />
                  </div>
                  <span className="diff-counts mono">{stats.mediumSolved} / {stats.totalMedium}</span>
                </div>

                <div className="diff-bar-item">
                  <span className="diff-label hard">Hard</span>
                  <div className="diff-track">
                    <div
                      className="diff-fill hard"
                      style={{ width: `${Math.min(100, (stats.hardSolved / stats.totalHard) * 100)}%` }}
                    />
                  </div>
                  <span className="diff-counts mono">{stats.hardSolved} / {stats.totalHard}</span>
                </div>
              </div>
            </div>

            <div className="heatmap-wrapper">
              <div className="heatmap-header-info">
                <span>Heatmap (52 Wks) · {stats.totalSubmissions} Submissions</span>
                <span className="badges-badge">🏆 {stats.badgesCount} Badges (500 Days)</span>
              </div>
              <HeatmapGrid calendar={stats.submissionCalendar} />
            </div>
          </div>
        </div>

        {/* ── Section Divider ── */}
        <div className="stats-divider-line" />

        {/* ═════════════════════════════════════════════════════════════════
            SECTION 2: ⚡ Quick Stats & GitHub Analytics
            ═════════════════════════════════════════════════════════════════ */}
        <div className="stats-subheader">
          <div className="stats-header-icon" style={{ background: '#00D9FF22', borderColor: '#00D9FF55' }}>
            ⚡
          </div>
          <span className="stats-subheader-title">Quick Stats & GitHub Analytics</span>
        </div>

        {/* Row 1: Streak + Profile Summary */}
        <div className="stats-mid-grid">
          {/* Streak & Productivity */}
          <div className="stats-card streak-card">
            <div className="card-header">
              <span className="card-header-icon">🔥</span>
              <span className="card-header-title">Streak & Productivity</span>
            </div>

            <div className="streak-stats-row">
              <div className="streak-stat-col">
                <span className="streak-stat-num">849</span>
                <span className="streak-stat-label">Total Contributions</span>
                <span className="streak-stat-sub">Dec 14, 2021 – Present</span>
              </div>

              <div className="streak-ring-col">
                <div className="streak-ring">
                  <span className="streak-ring-num">0</span>
                </div>
                <span className="streak-ring-label">Current Streak</span>
              </div>

              <div className="streak-stat-col">
                <span className="streak-stat-num">8</span>
                <span className="streak-stat-label">Longest Streak</span>
                <span className="streak-stat-sub">May 24 – May 31</span>
              </div>
            </div>
          </div>

          {/* GitHub Profile Summary */}
          <div className="stats-card gh-summary-card">
            <div className="card-header">
              <span className="card-header-icon">📈</span>
              <span className="card-header-title">Profile Summary</span>
            </div>

            <div className="gh-summary-content">
              <div className="gh-details">
                <a
                  href="https://github.com/itskartike910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-username mono"
                >
                  itskartike910
                </a>
                <div className="gh-metric-line">
                  <span>🌿</span>
                  <span>849 Contributions</span>
                </div>
                <div className="gh-metric-line">
                  <span>📁</span>
                  <span>17 Public Repositories</span>
                </div>
                <div className="gh-metric-line">
                  <span>👥</span>
                  <span>8 Followers</span>
                </div>
                <div className="gh-metric-line">
                  <span>✉️</span>
                  <span>kumarkartik147359@gmail.com</span>
                </div>
              </div>

              {/* Area graph */}
              <div className="gh-wave-graph">
                <svg viewBox="0 0 200 90" className="wave-svg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06FFA5" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#06FFA5" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,76 Q 30,70 50,78 T 100,60 T 140,25 T 170,18 T 200,68 L 200,90 L 0,90 Z"
                    fill="url(#waveGrad)"
                  />
                  <path
                    d="M 0,76 Q 30,70 50,78 T 100,60 T 140,25 T 170,18 T 200,68"
                    fill="transparent"
                    stroke="#06FFA5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Top Languages by Repo & Commit + Hourly commits */}
        <div className="stats-lang-grid">
          {/* Top Languages by Repo */}
          <div className="stats-card lang-card">
            <div className="lang-header">
              <span className="lang-title">Top Languages by Repo</span>
              <span className="lang-subtitle">Distribution across repositories</span>
            </div>
            <div className="lang-content">
              <DonutChart slices={languagesByRepo} size={74} strokeWidth={9} />
              <div className="lang-legend">
                {languagesByRepo.map((item, i) => (
                  <div key={i} className="legend-row">
                    <span className="legend-dot" style={{ background: item.color }} />
                    <span className="legend-name">{item.name}</span>
                    <span className="legend-pct mono">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Languages by Commit */}
          <div className="stats-card lang-card">
            <div className="lang-header">
              <span className="lang-title">Top Languages by Commit</span>
              <span className="lang-subtitle">Weighted by git commit lines</span>
            </div>
            <div className="lang-content">
              <DonutChart slices={languagesByCommit} size={74} strokeWidth={9} />
              <div className="lang-legend">
                {languagesByCommit.map((item, i) => (
                  <div key={i} className="legend-row">
                    <span className="legend-dot" style={{ background: item.color }} />
                    <span className="legend-name">{item.name}</span>
                    <span className="legend-pct mono">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commits Hourly Histogram */}
          <div className="stats-card hourly-card">
            <div className="lang-header">
              <span className="lang-title">Commits (UTC +5:30)</span>
              <span className="lang-subtitle">Per day hour</span>
            </div>
            <div className="hourly-histogram">
              <div className="hourly-bars">
                {hourlyActivity.map((count, i) => {
                  const max = 25;
                  const heightPct = Math.max(6, (count / max) * 100);
                  const isHigh = count >= 12;
                  return (
                    <div
                      key={i}
                      className={`bar ${isHigh ? 'high' : 'normal'}`}
                      style={{ height: `${heightPct}%` }}
                      title={`Hour ${i}:00 — ${count} commits`}
                    />
                  );
                })}
              </div>
              <div className="hourly-axis mono">
                <span>0h</span>
                <span>6h</span>
                <span>12h</span>
                <span>18h</span>
                <span>23h</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
