import '../../styles/SectionHeader.css';

interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  return (
    <div className="section-frosted-capsule-wrap">
      <div className="capsule-line" />
      <div className="section-frosted-capsule">
        <span className="capsule-icon">{icon}</span>
        <span className="capsule-label">{title}</span>
      </div>
      <div className="capsule-line" />
    </div>
  );
};

export default SectionHeader;
