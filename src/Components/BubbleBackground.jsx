// src/components/BubbleBackground.js
import React from 'react';
import './BubbleBackground.css';

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 100 });

  return (
    <div className="bubble-background">
      {bubbles.map((_, i) => {
        const size = Math.floor(Math.random() * 20) + 10; // 10px to 30px
        const left = Math.random() * 100; // percentage
        const delay = Math.random() * 10; // seconds
        const duration = 8 + Math.random() * 10; // seconds
        const isWhite = Math.random() > 0.5;

        return (
          <div
            key={i}
            className={`bubble ${isWhite ? 'white' : 'blue'}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          />
        );
      })}
    </div>
  );
};

export default BubbleBackground;
