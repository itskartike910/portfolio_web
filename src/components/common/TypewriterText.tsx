import { useState, useEffect, useRef } from 'react';
import '../../styles/TypewriterText.css';

interface TypewriterTextProps {
  texts: Array<{ text: string; color: string }>;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  speed = 90,
  deleteSpeed = 50,
  pauseTime = 1500,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const currentText = texts[currentIndex].text;

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="typewriter-wrap" style={{ color: texts[currentIndex].color }}>
      {displayText}
      <span className="typewriter-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default TypewriterText;
