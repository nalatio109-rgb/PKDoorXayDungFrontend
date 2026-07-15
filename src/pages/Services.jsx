import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Building2, Wrench, Home as HomeIcon, Layout, Ruler, Zap } from 'lucide-react';

const Services = () => {
  const allServices = [
    { icon: <Building2 size={40}/>, title: "Đổ Móng & Nền", desc: "Đào móng, làm sắt móng, đổ bê tông lót, bê tông móng vững chắc an toàn." },
    { icon: <Wrench size={40}/>, title: "Dựng Khung Kết Cấu", desc: "Đổ cột, dầm, sàn bê tông cốt thép đúng bản vẽ kỹ thuật và tiêu chuẩn." },
    { icon: <HomeIcon size={40}/>, title: "Xây Tường Bao Thô", desc: "Xây gạch phần tường bao xung quanh che chắn (không bao gồm trát/sơn bả)." },
    { icon: <Layout size={40}/>, title: "Khung Kèo Thép", desc: "Thi công lắp dựng khung kèo thép, mái tôn cho nhà xưởng, nhà dân dụng." },
    { icon: <Ruler size={40}/>, title: "Tư Vấn Kết Cấu", desc: "Tư vấn kỹ thuật thi công phần thô tối ưu chi phí vật liệu xây dựng." },
    { icon: <Zap size={40}/>, title: "Ép Cọc Bê Tông", desc: "Xử lý nền móng yếu bằng phương pháp ép cọc ly tâm, cọc nhồi chuẩn xác." },
  ];

  return (
    <div className="page-wrapper pt-20">
      <SEO title="Dịch Vụ" />
      <div className="container py-16">
        <SectionHeading title="Dịch Vụ Chuyên Nghiệp" subtitle="Lĩnh vực hoạt động" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className={`animate-slide-up delay-${(index % 3 + 1) * 100}`}
              style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)', transition: 'all 0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-light)' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
