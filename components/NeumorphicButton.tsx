'use client';

import React, { useState, useEffect } from 'react';
import { Mic, Phone } from 'lucide-react';
import styles from './NeumorphicButton.module.css';

interface NeumorphicButtonProps {
  status: 'idle' | 'connecting' | 'talking' | 'error';
  onStart: () => void;
  onStop: () => void;
}

export default function NeumorphicButton({ status, onStart, onStop }: NeumorphicButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle animation state based on status changes
  useEffect(() => {
    if (status === 'talking') {
      setAnimationActive(true);
    } else {
      // Add a small delay before stopping animation to allow for a smooth transition
      const timer = setTimeout(() => {
        setAnimationActive(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!mounted) return null;

  const handleClick = () => {
    if (status === 'talking') {
      onStop();
    } else if (status === 'idle' || status === 'error') {
      onStart();
    }
  };

  return (
    <div className={styles.circle}>
      <button 
        className={`${styles.circle__btn} ${status === 'talking' ? styles.shadow : ''}`}
        onClick={handleClick}
        disabled={status === 'connecting'}
      >
        <span className={styles.buttonText}>
          {status === 'idle' && (
            <>
              Talk to AI
              <Mic className={styles.icon} />
            </>
          )}
          {status === 'connecting' && 'Connecting...'}
          {status === 'talking' && 'End Call'}
          {status === 'error' && 'Try Again'}
        </span>
      </button>
      <span className={`${styles.circle__back_1} ${!animationActive ? styles.paused : ''}`}></span>
      <span className={`${styles.circle__back_2} ${!animationActive ? styles.paused : ''}`}></span>
    </div>
  );
}