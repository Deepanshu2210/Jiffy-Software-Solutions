import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <p className={`mt-4 text-lg max-w-3xl mx-auto ${className}`}>
        <span>{displayedText}</span>
        <span className="border-r-2 border-white animate-blink-caret" aria-hidden="true"></span>
    </p>
  );
};

export default TypingEffect;
