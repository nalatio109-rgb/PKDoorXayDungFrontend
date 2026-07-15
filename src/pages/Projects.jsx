import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const projects = [
    { name: "Biệt Thự Hiện Đại - Hòa Xuân", category: "Thi công phần thô", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Nhà Phố 3 Tầng - Sơn Trà", category: "Đổ sàn bê tông", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Nhà Cấp 4 Mái Thái - Điện Bàn", category: "Dựng khung thép", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Nhà Lô Phố - Liên Chiểu", category: "Ép cọc & Đổ móng", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="page-wrapper pt-20">
      <SEO title="Dự Án" />
      <div className="container py-16">
        <SectionHeading title="Dự Án Tiêu Biểu" subtitle="Công trình chúng tôi thực hiện" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className={`animate-slide-up delay-${(idx % 4 + 1) * 100}`} style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'var(--surface)' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: '600' }}>{proj.category}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--primary-dark)' }}>{proj.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
