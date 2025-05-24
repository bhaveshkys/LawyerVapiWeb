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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    if (status === 'talking') {
      onStop();
    } else if (status === 'idle' || status === 'error') {
      onStart();
    }
  };

  // Create a status-specific class name
  const statusClassName = `status_${status}`;

  return (
    <div className={`${styles.circle} ${styles[statusClassName]}`}>
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
      <span className={styles.circle__back_1}></span>
      <span className={styles.circle__back_2}></span>
    </div>
  );
}