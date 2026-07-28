import React, { useState } from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: "Biệt Thự Hiện Đại - Hòa Xuân", category: "Thi công phần thô", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { name: "Nhà Phố 3 Tầng - Sơn Trà", category: "Đổ sàn bê tông", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { name: "Nhà Cấp 4 Mái Thái - Điện Bàn", category: "Dựng khung thép", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { name: "Nhà Lô Phố - Liên Chiểu", category: "Ép cọc & Đổ móng", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  ];

  return (
    <div className="page-wrapper pt-20">
      <SEO title="Dự Án" />
      <div className="container py-16">
        <SectionHeading title="Dự Án Tiêu Biểu" subtitle="Công trình chúng tôi thực hiện" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`animate-slide-up delay-${(idx % 4 + 1) * 100}`} 
              style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'var(--surface)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => setSelectedProject(proj)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-float)';
              }} 
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: '600' }}>{proj.category}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--primary-dark)' }}>{proj.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div 
          style={{ 
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            backgroundColor: 'rgba(15, 23, 42, 0.9)', zIndex: 9999, 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            padding: '2rem', animation: 'fadeIn 0.3s ease-out' 
          }}
          onClick={() => setSelectedProject(null)}
        >
          <button 
            style={{ 
              position: 'absolute', top: '2rem', right: '2rem', 
              background: 'white', border: 'none', borderRadius: '50%', 
              width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
              cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', color: 'var(--text-main)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
          >
            <X size={24} />
          </button>
          
          <div 
            style={{ maxWidth: '1000px', width: '100%', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.img} 
              alt={selectedProject.name} 
              style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'white' }}>
              <span style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>{selectedProject.category}</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>{selectedProject.name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
