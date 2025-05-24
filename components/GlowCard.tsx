'use client';

import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div className={`relative overflow-visible ${className}`}>
      <div className="absolute -z-10 -inset-2 blur-[25px] opacity-70 bg-gradient-radial from-[#9d4edd] via-[#7b2cbf] via-[#5a189a] via-[#3c096c] via-[#240046] to-[#c77dff] rounded-[28px] animate-glow"></div>
      {children}
    </div>
  );
}


