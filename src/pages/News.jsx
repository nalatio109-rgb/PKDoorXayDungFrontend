import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    { category: "Tin Tức", title: "Bảng báo giá thi công phần thô tại Đà Nẵng mới nhất 2026", date: "12/07/2026", excerpt: "Cập nhật chi tiết chi phí nhân công và vật tư xây dựng phần thô (cát, đá, xi măng, sắt thép) tại khu vực miền Trung.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { category: "Kinh Nghiệm", title: "Kinh nghiệm chọn vật liệu xây dựng tiết kiệm chi phí", date: "05/07/2026", excerpt: "Làm thế nào để xây phần thô với ngân sách hợp lý mà vẫn đảm bảo độ vững chắc? Dưới đây là những mẹo hay từ kỹ sư kết cấu của Xây Dựng Nhà Đà Nẵng.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { category: "Sự Kiện", title: "Lễ cất nóc dự án Biệt Thự Vườn tại Cẩm Lệ", date: "28/06/2026", excerpt: "Một cột mốc quan trọng trong tiến độ dự án, hoàn thành xong toàn bộ phần khung sườn bê tông cốt thép bởi đội ngũ Xây Dựng Nhà Đà Nẵng.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="page-wrapper pt-20">
      <SEO title="Tin Tức" />
      <div className="container py-16">
        <SectionHeading title="Tin Tức & Sự Kiện" subtitle="Cập nhật mới nhất" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {newsItems.map((item, idx) => (
            <Link to="#" key={idx} className={`news-card animate-slide-up delay-${(idx % 3 + 1) * 100}`}>
              <div className="news-img-wrap">
                <span className="news-badge">{item.category}</span>
                <img src={item.img} alt={item.title} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  <Calendar size={16} /> <span>{item.date}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--primary-dark)', lineHeight: '1.4', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1rem', flexGrow: 1 }}>{item.excerpt}</p>
                <div style={{ color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem', marginTop: 'auto', transition: 'all 0.3s ease' }} className="read-more">
                  Đọc tiếp <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
