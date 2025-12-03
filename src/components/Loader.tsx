import React from 'react';

interface LoaderProps {
  progress: number;
}

export function Loader({ progress }: LoaderProps) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center">
      <div className="relative w-9 h-9">
        <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
          {/* Фоновый круг */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          {/* Прогресс-круг */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#4C9AFF"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.3s ease'
            }}
          />
        </svg>
      </div>
    </div>
  );
}
