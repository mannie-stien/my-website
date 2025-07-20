
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  roles, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 2000 
}) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, delay]);

  return (
    <span>
      {text}
      <span className="border-r-2 typing-cursor">&nbsp;</span>
    </span>
  );
};

export default TypingEffect;
