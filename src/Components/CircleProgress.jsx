import React, { useState, useEffect, useRef } from 'react';

const CircularProgressBar = ({ radius, strokeWidth, percentage, text }) => {
  const [dashOffset, setDashOffset] = useState(0);
  const circumference = 2 * Math.PI * radius;
  const counter = useRef(0);

  useEffect(() => {
    const targetCounter = parseInt(percentage);
    const step = targetCounter > counter.current ? 1 : -1;

    const interval = setInterval(() => {
      if (counter.current !== targetCounter) {
        counter.current += step;
        const offset = circumference - (counter.current / 100) * circumference;
        setDashOffset(offset);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percentage, radius, circumference]);

  return (
    <svg
      style={{ transform: 'rotate(-90deg)', marginTop: '0rem' }}
      width={radius * 4}
      height={radius * 3}
      viewBox={`-1 -2 ${radius * 2} ${radius * 2.2}`}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth}
        fill="transparent"
        stroke="rgb(131, 158, 24)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="transparent"
        stroke="rgb(13, 255, 24)"
        strokeWidth={strokeWidth * 2}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
      <text style={{ transform: 'rotate(90deg)' }}
        x="50%"
        y="-43%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="23"
        fontWeight="bold"
        fill="orange"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircularProgressBar; 
