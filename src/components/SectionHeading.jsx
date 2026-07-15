import React from 'react';

const SectionHeading = ({ title, subtitle, className = '', dark = false }) => {
  return (
    <div className={`animate-fade-up ${className}`} style={{ marginBottom: '3rem', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--accent)' }}></div>
        {subtitle && (
          <span style={{
            color: dark ? 'var(--accent)' : 'var(--primary)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '0.85rem'
          }}>
            {subtitle}
          </span>
        )}
      </div>
      <h2 style={{ 
        fontSize: '3rem', 
        color: dark ? '#fff' : 'var(--text-main)',
        margin: 0
      }}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
