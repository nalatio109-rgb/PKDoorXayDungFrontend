import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    { title: "Bảng báo giá thi công phần thô tại Đà Nẵng mới nhất 2026", date: "12/07/2026", excerpt: "Cập nhật chi tiết chi phí nhân công và vật tư xây dựng phần thô (cát, đá, xi măng, sắt thép) tại khu vực miền Trung.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Kinh nghiệm chọn vật liệu xây dựng tiết kiệm chi phí", date: "05/07/2026", excerpt: "Làm thế nào để xây phần thô với ngân sách hợp lý mà vẫn đảm bảo độ vững chắc? Dưới đây là những mẹo hay từ kỹ sư kết cấu của PK Door.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Lễ cất nóc dự án Biệt Thự Vườn tại Cẩm Lệ", date: "28/06/2026", excerpt: "Một cột mốc quan trọng trong tiến độ dự án, hoàn thành xong toàn bộ phần khung sườn bê tông cốt thép bởi đội ngũ PK Door.", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="page-wrapper pt-20">
      <SEO title="Tin Tức" />
      <div className="container py-16">
        <SectionHeading title="Tin Tức & Sự Kiện" subtitle="Cập nhật mới nhất" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {newsItems.map((item, idx) => (
            <div key={idx} className={`glass animate-slide-up delay-${(idx % 3 + 1) * 100}`} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                  <Calendar size={14} /> <span>{item.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-dark)', lineHeight: '1.4' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{item.excerpt}</p>
                <Link to="#" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                  Đọc tiếp <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
