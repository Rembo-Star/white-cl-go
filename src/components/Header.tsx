import React from 'react';

export function Header() {
  return (
    <header 
      className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b"
      style={{ 
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Логотип */}
        <span 
          className="text-sm sm:text-base"
          style={{ color: '#222222' }}
        >
          Proyecto A — Información de acceso
        </span>
      </div>
    </header>
  );
}
